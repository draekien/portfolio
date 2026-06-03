---
name: article-writing
description: Write and revise long-form technical articles for this portfolio in the author's voice. Use when drafting, rewriting, grounding, editing, or fact-checking an article in content/articles/, or when the user says "write an article", "draft a post", "rewrite this article", "ground this article", or "edit the article".
---

# Article Writing

An article earns its authority two ways: every claim is true, and every reader can follow it. Thought leadership is not a tone you adopt — it is what's left once the writing is accurate enough to trust and clear enough to learn from. Optimise for those two things and the authority takes care of itself.

These articles are personal and technical. They argue a point of view, drawn from the author's real work, and they carry a reader who may be new to the subject from "I don't know this" to "I see why this matters."

## Ground every claim in the source

Never describe a library, API, or tool from memory. Memory produces claims that are plausible and wrong — a method name that almost exists, a signature that drifted a version ago. Before writing about any external code, read its actual source: the repository, the published docs, the type signatures. Verify each method name, parameter, and behaviour against what is really there.

When the source contradicts a draft, the source wins. Surface the discrepancy plainly rather than papering over it — a corrected claim is the whole point of grounding. The fastest way to lose a technical reader is one API call that doesn't compile.

## Trace the real inspiration

An idea has a lineage. If a pattern came from another language, framework, or person, name it and show it in its original form before translating it to the article's context. The honest origin story is more compelling than a sanitised one, and it gives the reader a second, concrete anchor for an abstract idea.

Tell the author's actual story — the production incident, the borrowed idea, the design decision — in the first person. Ownership is what separates an article from documentation.

## Bring the newcomer through

Assume the reader is sharp but unfamiliar. They may not know the jargon, the language, or the prior art the argument rests on. Every term that carries weight gets introduced the first time it appears — a sentence on what a monad is, a clause on what Rust is — before the argument leans on it.

Introduce one concept before depending on it, never after. Define jargon in plain words at the moment of first use, then use it consistently. When a piece of syntax or a type would puzzle a newcomer, say what it does and why it's there. The test: a competent developer outside this niche should never hit a sentence they cannot parse.

## Voice: concise and explanatory

Short sentences. Plain language. One idea per paragraph.

Explain, don't assert — when a claim matters, give the reason in the same breath, so the reader understands rather than takes it on faith. Cut every word that does not carry meaning, but never cut the *why*. Concision serves clarity; it does not compete with it.

Expect the first draft to run long. Drafting and tightening are separate jobs: the draft gets the ideas down, then a deliberate pass cuts everything that doesn't earn its place. Make that pass paragraph by paragraph — if a sentence can go without losing an idea, it goes. Be ruthless and pragmatic; the grounded, well-structured draft is the starting point for this pass, not the finish line.

## Shape the arc

Lead with the problem, made vivid and specific, before any solution. Then walk the natural progression:

1. **The problem** — why it bites, with a concrete example.
2. **Prior art** — who already solved it well, shown in their terms.
3. **The contribution** — how the author brought that solution to this context.
4. **Judgment** — when to reach for it, when not to, and the honest cost.

The arc is a default, not a cage. Reorder it when the material demands, but always move from felt problem to earned conclusion.

## Make it skimmable

Most readers scan before they commit. The table of contents is generated from the `##` and `###` headings, so those headings are the spine — the argument as a skimmer first meets it. Write them as claims, not labels: "Compression is not the goal," not "On compression." A reader should be able to get the thesis from the contents alone.

When a section holds several distinct points, give each its own `###` heading instead of a **bold lead-in**. Bold inline text marks emphasis but never reaches the table of contents, so the one structure a skimmer actually scans stays blind to it. A heading carries the point into the TOC and gives it an anchor to link.

## Keep the judgment honest

End on discernment, not a sales pitch. Name the cases where the idea does *not* apply and the real overhead it carries. A reader trusts an author who concedes the tradeoff far more than one who pretends there isn't one — and the concession is itself a thought-leadership move.

## Repository conventions

Articles live in `content/articles/<slug>.mdx`, one file per article, rendered through MDX (standard Markdown plus fenced code blocks; blockquotes work well for short asides). Every article opens with YAML frontmatter:

| Field         | Required | Notes                                                              |
| ------------- | -------- | ------------------------------------------------------------------ |
| `title`       | yes      | Quoted string.                                                     |
| `description` | yes      | One sentence; the hook that frames the article's angle.            |
| `date`        | yes      | Publication date, `YYYY-MM-DD`. Use the current date for new work. |
| `updated`     | no       | `YYYY-MM-DD`, only when meaningfully revised after publication.    |
| `tags`        | no       | Lowercase array, e.g. `["dotnet", "rust", "type-safety"]`.         |
| `draft`       | no       | Boolean; omit or `false` to publish.                               |

The frontmatter is schema-validated on build, so field names and types must match exactly.

## Anti-patterns

- **Writing from memory** — describing code without reading its current source. Produces confident, broken claims.
- **Jargon without an on-ramp** — using a term, language, or concept the argument depends on before defining it. Loses the newcomer at the first unfamiliar word.
- **Documentation in disguise** — neutral, sourceless exposition with no point of view. An article argues something; reference material does not.
- **The sales pitch ending** — closing by recommending the idea unconditionally. Omitting the tradeoff reads as either naïve or dishonest.
- **Padding the why away** — cutting so hard that claims become bare assertions. Concision removes filler, not reasoning.
- **Wind-up before the point** — opening a paragraph with a sentence that announces the point, or a hedge ("which I'd be lying to omit"), before making it. Lead with the point; let the reasoning follow.
- **Bold lead-ins as section markers** — using **bold inline text** to flag the key points in a section. It signals emphasis but never reaches the table of contents, so a skimmer can't find it. Promote a recurring point to a `###` heading instead.
