---
name: article-writing
description: Write and revise long-form technical articles for this portfolio in the author's house style. Use when drafting, rewriting, grounding, editing, or fact-checking an article in content/articles/, or when the user says "write an article", "draft a post", "rewrite this article", "ground this article", or "edit the article".
---

# Article Writing

An article earns its authority two ways: every claim is true, and every reader can follow it. Thought leadership is not a tone you adopt - it is what's left once the writing is accurate enough to trust and clear enough to learn from. Optimise for those two things and the authority takes care of itself.

These articles are personal and technical. They argue a point of view, drawn from the author's real work, and they carry a reader who may be new to the subject from "I don't know this" to "I see why this matters."

This skill governs substance, structure, and grounding - what the article argues and how it is built. How the sentences themselves sound is a separate concern: sentence-level voice and prose mechanics are governed by the dedicated prose-style skill, not here.

## Ground every claim in the source

Never describe a library, API, or tool from memory. Memory produces claims that are plausible and wrong - a method name that almost exists, a signature that drifted a version ago. Before writing about any external code, read its actual source: the repository, the published docs, the type signatures. Verify each method name, parameter, and behaviour against what is really there.

When the source contradicts a draft, the source wins. Surface the discrepancy plainly rather than papering over it - a corrected claim is the whole point of grounding. The fastest way to lose a technical reader is one API call that doesn't compile.

Put the source where the claim is. Link to the real thing at the point of reference - an inline link the reader can hover for context - rather than collecting citations in a separate card at the end. A standalone callout is for the one primary artefact the whole piece is about; everything else is inlined where it is used. Cross-link related articles wherever the ideas genuinely connect.

## Trace the real inspiration

An idea has a lineage. If a pattern came from another language, framework, or person, name it and show it in its original form before translating it to the article's context. The honest origin story is more compelling than a sanitised one, and it gives the reader a second, concrete anchor for an abstract idea.

Tell the author's actual story - the production incident, the borrowed idea, the design decision - in the first person. Ownership is what separates an article from documentation.

## Bring the newcomer through

Assume the reader is sharp but unfamiliar. They may not know the jargon, the language, or the prior art the argument rests on. Every term that carries weight gets introduced the first time it appears - a sentence on what a monad is, a clause on what Rust is - before the argument leans on it.

Introduce one concept before depending on it, never after. Define jargon in plain words at the moment of first use, then use it consistently. When a piece of syntax or a type would puzzle a newcomer, say what it does and why it's there. The test: a competent developer outside this niche should never hit a sentence they cannot parse.

## Shape the argument

An article argues a point of view drawn from the author's real work, and it carries the reader from something they feel to a conclusion they have earned. That is the structural requirement in full. Where to enter, what order to reveal things in, where the turn lands - those are the article's to decide, and the right call depends on the material.

Don't reach for the shape the last article used, or the one the other articles seem to share - build the shape this argument needs and ignore the rest. A piece can open on the problem, on a borrowed idea, on a surprising result, on the moment something broke, on a single line of code. It can thread the tradeoffs through the middle rather than parking them at the end, or start from the conclusion and work backwards to show how it was earned. Let the strongest entry point for *this* argument decide the opening, and the natural order of *this* reasoning decide the rest - not a remembered skeleton.

## Make it skimmable

Most readers scan before they commit. The table of contents is generated from the `##` and `###` headings, so those headings are the spine - the argument as a skimmer first meets it. Write them as claims, not labels: "Compression is not the goal," not "On compression." A reader should be able to get the thesis from the contents alone, and a sharp claim-shaped line is the one a reader remembers.

When a section holds several distinct points, give each its own `###` heading instead of a **bold lead-in**. Bold inline text marks emphasis but never reaches the table of contents, so the one structure a skimmer actually scans stays blind to it. A heading carries the point into the TOC and gives it an anchor to link.

## Keep the judgment honest

Name the cases where the idea does *not* apply and the real overhead it carries. A reader trusts an author who concedes the tradeoff far more than one who pretends there isn't one - and the concession is itself a thought-leadership move. This can land wherever the argument needs it - woven through the body, set against each claim as it's made, or gathered near the close - but it cannot be skipped, and the piece must never close on an unqualified sales pitch.

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

- **Writing from memory** - describing code without reading its current source. Produces confident, broken claims.
- **Jargon without an on-ramp** - using a term, language, or concept the argument depends on before defining it. Loses the newcomer at the first unfamiliar word.
- **Documentation in disguise** - neutral, sourceless exposition with no point of view. An article argues something; reference material does not.
- **The sales pitch ending** - closing by recommending the idea unconditionally. Omitting the tradeoff reads as either naïve or dishonest.
- **The template article** - falling into the same structural skeleton piece after piece, whatever that skeleton happens to be, so a reader who has seen one has seen the shape of all of them. A shape is a tool, not a mould; build the one this argument needs rather than reaching for the last one that worked.
- **Bold lead-ins as section markers** - using **bold inline text** to flag the key points in a section. It signals emphasis but never reaches the table of contents, so a skimmer can't find it. Promote a recurring point to a `###` heading instead.
