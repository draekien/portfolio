import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { afterAll, describe, expect, test } from "vitest";

const ARTICLES_DIR = "content/articles";
const CASE_STUDY_DIR = "app/projects";

type Hit = { line: number; match: string };

type Piece = {
  id: string;
  file: string;
  /** Source with code fences intact, for rules that need the backticks. */
  raw: string;
  /** Source with every code span blanked out. */
  prose: string;
};

// Blank characters in place rather than deleting them, so a match index still
// resolves to the right line in the original file.
function blank(text: string, regex: RegExp) {
  return text.replace(regex, (m) => m.replace(/[^\n]/g, " "));
}

function lineOf(text: string, index: number) {
  return text.slice(0, index).split("\n").length;
}

function scan(
  text: string,
  regex: RegExp,
  filter?: (match: RegExpExecArray) => boolean,
): Hit[] {
  const hits: Hit[] = [];
  for (const m of text.matchAll(regex)) {
    if (filter && !filter(m)) continue;
    hits.push({ line: lineOf(text, m.index), match: m[0].trim() });
  }
  return hits;
}

const IZE_EXCEPTIONS = new Set([
  "size",
  "sizes",
  "sized",
  "sizing",
  "prize",
  "prizes",
  "prized",
  "capsize",
  "capsizes",
  "capsized",
  "maize",
  "seize",
  "seizes",
  "seized",
]);

const OUR_WORDS = [
  "color",
  "behavior",
  "favor",
  "honor",
  "labor",
  "neighbor",
  "humor",
  "rumor",
  "flavor",
  "endeavor",
  "harbor",
  "armor",
  "vapor",
  "savior",
  "rigor",
  "vigor",
];

const RE_WORDS = [
  "center",
  "meter",
  "liter",
  "theater",
  "fiber",
  "caliber",
  "somber",
  "specter",
];

const LOGUE_WORDS = ["catalog", "dialog", "analog", "monolog"];

const suffixed = (stems: string[]) =>
  new RegExp(`\\b(${stems.join("|")})(s|ed|ing)?\\b`, "gi");

type Rule = {
  id: string;
  name: string;
  run: (piece: Piece) => Hit[];
};

const rules: Rule[] = [
  {
    id: "em-dash",
    name: "uses ' - ' for an inline aside, never an em dash",
    run: ({ prose }) => scan(prose, /—/g),
  },
  {
    id: "en-dash",
    name: "uses ' - ' for an inline aside, never an en dash or double hyphen",
    run: ({ prose }) => scan(prose, /–|(?<![-\w])--(?!-)/g),
  },
  {
    id: "inline-definition",
    name: "defines terms in lib/glossary.ts, not in a parenthetical",
    run: ({ raw }) => scan(raw, /`[^`\n]+` ?\([a-z][^)]{8,}\)/g),
  },
  {
    id: "not-a-its-b",
    name: 'states B directly instead of "not A, it\'s B"',
    run: ({ prose }) => scan(prose, /\bnot [^,.;]{2,40}, it'?s\b/gi),
  },
  {
    id: "superlative",
    name: "understates instead of reaching for a superlative",
    run: ({ prose }) =>
      scan(
        prose,
        /\bthe (best|worst|greatest|hardest|single biggest|most important)\b/gi,
      ),
  },
  {
    id: "au-spelling",
    name: "spells in Australian English",
    run: ({ prose }) => {
      const body = blank(prose, /^>.*$/gm);
      return [
        ...scan(
          body,
          /\b\w{3,}(ize|izes|ized|izer|izing|ization|yze|yzes|yzed|yzing)\b/gi,
          (m) => !IZE_EXCEPTIONS.has(m[0].toLowerCase()),
        ),
        ...scan(body, suffixed(OUR_WORDS)),
        ...scan(body, suffixed(RE_WORDS)),
        ...scan(body, suffixed(LOGUE_WORDS)),
      ].sort((a, b) => a.line - b.line);
    },
  },
];

function readArticle(file: string): Piece {
  const raw = blank(
    fs.readFileSync(file, "utf-8"),
    /^---\r?\n[\s\S]*?\r?\n---\r?\n/,
  );
  return {
    id: path.basename(file, ".mdx"),
    file,
    raw,
    prose: blank(blank(raw, /```[\s\S]*?```/g), /`[^`\n]*`/g),
  };
}

// A case study is TSX, so its prose is the JSX text nodes. Recovering those by
// regex means guessing which braces open a JSX expression and which open a
// function body, which is what the parser is for.
function tagOf(node: ts.Node) {
  const parent = node.parent;
  if (parent && ts.isJsxElement(parent)) {
    return parent.openingElement.tagName.getText();
  }
  return "";
}

function readCaseStudy(file: string): Piece {
  const source = fs.readFileSync(file, "utf-8");
  const tree = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  // Start from a blank of the same shape and splice the text nodes back in, so
  // every reported line number still points at the real line in the file.
  const chars = [...blank(source, /[\s\S]/g)];
  const put = (index: number, char: string) => {
    if (index >= 0 && index < chars.length) chars[index] = char;
  };

  const visit = (node: ts.Node) => {
    if (ts.isJsxText(node) && node.text.trim()) {
      const tag = tagOf(node);
      if (tag === "CodeBlock") return;
      for (let i = 0; i < node.text.length; i++) {
        put(node.pos + i, node.text[i] as string);
      }
      // `<Code>` is the case-study equivalent of a backtick. Its delimiters sit
      // exactly one character either side, so they can carry the marks.
      if (tag === "Code") {
        put(node.pos - 1, "`");
        put(node.end, "`");
      }
    }
    node.forEachChild(visit);
  };
  visit(tree);

  const raw = chars.join("");
  return {
    id: path.basename(path.dirname(file)),
    file,
    raw,
    prose: blank(raw, /`[^`\n]*`/g),
  };
}

const corpus: Piece[] = [
  ...fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((f) => readArticle(path.join(ARTICLES_DIR, f))),
  ...fs
    .readdirSync(CASE_STUDY_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(CASE_STUDY_DIR, d.name, "page.tsx"))
    .filter((f) => fs.existsSync(f))
    .sort()
    .map(readCaseStudy),
];

function report(piece: Piece, hits: Hit[]) {
  return hits
    .map((h) => `${piece.file.replaceAll("\\", "/")}:${h.line}  ${h.match}`)
    .join("\n");
}

describe.each(corpus)("$id", (piece) => {
  // Without this, a broken extractor turns every rule below into a vacuous pass.
  test("has prose to check", () => {
    expect(piece.prose.trim().split(/\s+/).length).toBeGreaterThan(200);
  });

  test.each(rules)("$name", (rule) => {
    const hits = rule.run(piece);
    expect(report(piece, hits), report(piece, hits)).toBe("");
  });
});

// A rule that has quietly stopped matching passes the whole corpus. These pin
// each one to a case it must catch and a case it must leave alone.
describe("rules", () => {
  const piece = (text: string): Piece => ({
    id: "fixture",
    file: "fixture",
    raw: text,
    prose: blank(text, /`[^`\n]*`/g),
  });

  const byId = (id: string) => rules.find((r) => r.id === id) as Rule;

  const cases: [string, string, string][] = [
    ["em-dash", "It held — briefly.", "It held - briefly."],
    ["en-dash", "It held – briefly.", "It held - briefly."],
    ["en-dash", "It held -- briefly.", "It held --- briefly."],
    [
      "inline-definition",
      "A `monad` (a wrapper that chains fallible steps) helps.",
      "A `monad` helps here.",
    ],
    ["not-a-its-b", "It's not a linter, it's a compiler.", "It is a compiler."],
    [
      "superlative",
      "That was the most important rule.",
      "That rule stuck with me.",
    ],
    ["au-spelling", "We prioritize the color.", "We prioritise the colour."],
    [
      "au-spelling",
      "It centers on the catalog.",
      "It centres on the catalogue.",
    ],
  ];

  test.each(cases)("%s catches its violation", (id, bad) => {
    expect(byId(id).run(piece(bad))).not.toEqual([]);
  });

  test.each(cases)("%s clears the rewrite", (id, _bad, good) => {
    expect(byId(id).run(piece(good))).toEqual([]);
  });

  // "Roslyn analyzer" is an API name the voice guide keeps, so the rule covers
  // -ize and -yze but stops short of the -yzer agent noun.
  test("au-spelling leaves an API name alone", () => {
    expect(byId("au-spelling").run(piece("The Roslyn analyzer runs."))).toEqual(
      [],
    );
  });

  test("au-spelling leaves a quoted source alone", () => {
    expect(byId("au-spelling").run(piece("> They prioritize color."))).toEqual(
      [],
    );
  });

  test("au-spelling leaves the -ize exceptions alone", () => {
    expect(
      byId("au-spelling").run(piece("Seize the prize, whatever its size.")),
    ).toEqual([]);
  });

  test("code spans are exempt from the mechanics", () => {
    expect(byId("au-spelling").run(piece("Call `serialize()` on it."))).toEqual(
      [],
    );
  });

  test("a hit reports the line it sits on", () => {
    expect(byId("em-dash").run(piece("one\ntwo\nthree — four"))).toEqual([
      { line: 3, match: "—" },
    ]);
  });
});

const ABBREVIATIONS = /\b(e\.g|i\.e|etc|vs|Mr|Mrs|Ms|Dr|No)\.$/;

function sentences(prose: string) {
  const text = prose
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^#{1,6}\s+/gm, "");

  const out: string[] = [];
  let current = "";
  for (const chunk of text.split(/(?<=[.!?])\s+/)) {
    current += (current ? " " : "") + chunk;
    if (ABBREVIATIONS.test(current.trim())) continue;
    if (current.trim().split(/\s+/).length > 2) out.push(current.trim());
    current = "";
  }
  return out;
}

// Reported, never gated. Read it by comparing pieces against each other: a high
// `over35` is what makes a piece read as hard work, not a high `commas`.
afterAll(() => {
  const rows = corpus
    .map((piece) => {
      const words = sentences(piece.prose).map((s) => s.split(/\s+/).length);
      const commas = sentences(piece.prose).map(
        (s) => (s.match(/,/g) ?? []).length,
      );
      const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
      return {
        piece: piece.id,
        sents: words.length,
        mean: +(sum(words) / words.length).toFixed(1),
        max: Math.max(...words),
        over35: words.filter((w) => w > 35).length,
        commas: +(sum(commas) / commas.length).toFixed(2),
      };
    })
    .sort((a, b) => b.over35 - a.over35);

  console.table(rows);
});
