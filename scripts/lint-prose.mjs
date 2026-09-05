import fs from "node:fs";
import path from "node:path";

const articlesDir = path.join(process.cwd(), "content/articles");

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

const AU_SUFFIXED = (stems) =>
  new RegExp(`\\b(${stems.join("|")})(s|ed|ing|ed)?\\b`, "gi");

function stripFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, (m) =>
    m.replace(/[^\n]/g, " "),
  );
}

// blank out a region while preserving line and column offsets, so reported
// line numbers still point at the real position in the file
function blank(text, regex) {
  return text.replace(regex, (m) => m.replace(/[^\n]/g, " "));
}

function stripCode(text) {
  return blank(blank(text, /```[\s\S]*?```/g), /`[^`\n]*`/g);
}

function stripBlockquotes(text) {
  return blank(text, /^>.*$/gm);
}

function locate(text, index) {
  const before = text.slice(0, index);
  const line = before.split("\n").length;
  return line;
}

function scan(text, regex, filter) {
  const hits = [];
  for (const m of text.matchAll(regex)) {
    if (filter && !filter(m)) continue;
    hits.push({ line: locate(text, m.index), match: m[0].trim() });
  }
  return hits;
}

const checks = [
  {
    id: "em-dash",
    label: "em dash (banned; use ' - ' for an inline aside)",
    run: (prose) => scan(prose, /—/g),
  },
  {
    id: "en-dash",
    label: "en dash or double hyphen (banned; use ' - ')",
    run: (prose) => scan(prose, /–|(?<![-\w])--(?!-)/g),
  },
  {
    id: "inline-definition",
    label: "inline parenthetical definition (move it to lib/glossary.ts)",
    run: (_prose, raw) => scan(raw, /`[^`\n]+` ?\([a-z][^)]{8,}\)/g),
  },
  {
    id: "not-a-its-b",
    label: '"not A, it\'s B" (state B directly)',
    run: (prose) => scan(prose, /\bnot [^,.;]{2,40}, it'?s\b/gi),
  },
  {
    id: "superlative",
    label: "superlative up-play (understate instead)",
    run: (prose) =>
      scan(
        prose,
        /\bthe (best|worst|greatest|hardest|single biggest|most important)\b/gi,
      ),
  },
  {
    id: "au-spelling",
    label: "US spelling (this corpus is Australian English)",
    run: (prose) => {
      const body = stripBlockquotes(prose);
      return [
        ...scan(
          body,
          /\b\w{3,}(ize|izes|ized|izer|izing|ization|yze|yzes|yzed|yzing)\b/gi,
          (m) => !IZE_EXCEPTIONS.has(m[0].toLowerCase()),
        ),
        ...scan(body, AU_SUFFIXED(OUR_WORDS)),
        ...scan(body, AU_SUFFIXED(RE_WORDS)),
        ...scan(body, AU_SUFFIXED(LOGUE_WORDS)),
      ].sort((a, b) => a.line - b.line);
    },
  },
];

const ABBREVIATIONS = /\b(e\.g|i\.e|etc|vs|Mr|Mrs|Ms|Dr|No)\.$/;

function sentences(prose) {
  const text = prose
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^#{1,6}\s+/gm, "");

  const out = [];
  let current = "";
  for (const chunk of text.split(/(?<=[.!?])\s+/)) {
    current += (current ? " " : "") + chunk;
    if (ABBREVIATIONS.test(current.trim())) continue;
    const trimmed = current.trim();
    if (trimmed.split(/\s+/).length > 2) out.push(trimmed);
    current = "";
  }
  return out;
}

function stats(prose) {
  const s = sentences(prose);
  const words = s.map((x) => x.split(/\s+/).length);
  const commas = s.map((x) => (x.match(/,/g) ?? []).length);
  const sum = (xs) => xs.reduce((a, b) => a + b, 0);
  return {
    sentences: s.length,
    mean: sum(words) / words.length,
    max: Math.max(...words),
    over35: words.filter((w) => w > 35).length,
    commasPerSentence: sum(commas) / commas.length,
  };
}

const files = fs
  .readdirSync(articlesDir)
  .filter((f) => f.endsWith(".mdx"))
  .sort();

let failures = 0;
const rows = [];

for (const file of files) {
  const raw = stripFrontmatter(
    fs.readFileSync(path.join(articlesDir, file), "utf-8"),
  );
  const prose = stripCode(raw);

  for (const check of checks) {
    for (const hit of check.run(prose, raw)) {
      failures += 1;
      console.log(
        `${path.join("content/articles", file)}:${hit.line}  ${check.id}  ${check.label}\n    ${hit.match}`,
      );
    }
  }

  rows.push({ file: file.replace(/\.mdx$/, ""), ...stats(prose) });
}

rows.sort((a, b) => b.over35 - a.over35);

console.log("\nreadability (report only, no threshold)\n");
console.log(
  `${"article".padEnd(36)}${"sents".padStart(6)}${"mean".padStart(7)}${"max".padStart(6)}${"over35".padStart(8)}${"commas".padStart(8)}`,
);
for (const r of rows) {
  console.log(
    `${r.file.padEnd(36)}${String(r.sentences).padStart(6)}${r.mean.toFixed(1).padStart(7)}${String(r.max).padStart(6)}${String(r.over35).padStart(8)}${r.commasPerSentence.toFixed(2).padStart(8)}`,
  );
}
console.log(
  "\nA high `over35` is the readability tell, not `commas` - compare each article against the others rather than against a limit.",
);

if (failures > 0) {
  console.log(`\n${failures} prose issue(s).`);
  process.exit(1);
}

console.log(`\nNo prose issues across ${files.length} articles.`);
