# content/articles/ — article source

One `.mdx` file per article; the filename (minus `.mdx`) is the slug.

**Frontmatter** is validated by a Zod schema in `@/lib/articles`:
- required: `title`, `description`, `date`
- optional: `updated`, `tags` (string[]), `draft` (boolean), `versions` (list of `{ date, description }`, oldest-first)

**Versions** — every post-publication edit appends a `versions` entry (date + short description of the change). The latest entry drives `updated` (SEO modified dates) and the `@updated` row with its version-history popover on the article page.

**Drafts** (`draft: true`) render only when `NODE_ENV !== "production"` — hidden in the production build.

**TOC** is derived from `##`/`###` headings via regex, so heading text drives the anchor slug. Reading time is computed automatically.

Custom MDX components (`<Define>`, `<CodeBlock>`, `<FrameworkBadge>`, etc.) are registered in `components/mdx/mdx-content.tsx`.

## Authoring process

When drafting a new article, follow these steps in order:

1. Use `/brain-dump` to develop the raw idea — dump unstructured thinking into `content/brain-dumps/`, then fill the gaps the skill surfaces, until the thinking is whole.
2. Use `/article-writing` to work out what we are writing about.
3. Once the subject and shape are finalised, use `/personal-skills:ghost-writing` to write the article.
4. With a first draft in hand, use `/refine-prose` to tighten the prose concern by concern, then apply and verify the edits.
5. Use `/stop-slop` to strip predictable AI writing tells, then apply and verify the edits.
6. Use `/article-review` to perform an independent review of the draft and present findings.

- `<Define term="...">` — the `term` must be a key in the typed glossary at `lib/glossary.ts`. An unregistered term is a TypeScript error, not a runtime fallback. To add a new term: add the entry to `lib/glossary.ts` first, then use the component in the MDX. Remove any inline parenthetical definition the MDX was carrying — it belongs in the glossary now.
- **All definitions go in `<Define>`, never inline.** If an article explains a term in parentheses or an em-dash aside, move that explanation to the glossary and replace it with `<Define>`.
- `<ArticleLink slug="...">text</ArticleLink>` — cross-link to another article (`slug` = its filename minus `.mdx`), shown as a popover previewing the target's title, reading time, and excerpt.
- `<Signpost about="...">` — the contents notice at the top of every article, wrapping a markdown ordered list. See the Scope section below. **Array and object props do not work in this MDX pipeline** — an expression attribute like `covers={["a","b"]}` is silently dropped and arrives as `undefined`. String attributes and children are the only reliable ways to pass content to an MDX component here.
- `<LinkNote href="..." note="...">text</LinkNote>` — external source link that reveals the `note` summary on hover, so readers grasp where it leads without clicking. Still navigates on click.

## Scope

Four rules that decide what gets written, before any question of how it reads:

- **One topic.** An article has a single purpose. When a section teaches something the core message doesn't need, it belongs in a different article - not in a subsection of this one.
- **One audience.** Name who the article is for and write only to them. `<Define>` exists so a term can stay in without the article stopping to teach a second, outside reader - it is not licence to widen the audience. It's fine to leave a concept unexplained.
- **Example first.** Lead a section with the artefact - the code, the file, the transcript - and let the prose follow it. Don't make a claim the reader can't see an instance of. Prose carries what the example can't.
- **No self-promotion.** My own libraries and projects appear as worked examples and nothing else. When a passage argues for the thing rather than with it, cut the passage.

**Signpost the structure.** Every article opens with a `<Signpost>` block, placed at the very top of the `.mdx` before any prose. `about` is one sentence on what the article is for; the children are a markdown ordered list of what it covers, in the order it covers it, and need blank lines around them so MDX parses them as markdown:

```mdx
<Signpost about="Which of your agent instructions could run in the build instead of being read.">

1. Two mistakes an agent kept writing
2. Why a written instruction doesn't hold
3. Which of your instructions could run instead

</Signpost>
```

Because it's a notice block rather than prose, the example still leads the writing underneath it. Don't restate the signpost as a sentence in the body.

`tests/prose.test.ts` checks every article for one, including that `about` is a single sentence and that the list has blank lines around it. It's excluded from the readability table, so the list fragments don't count as sentences.

## Voice

The voice is someone with opinions, talking to you, who names things instead of gesturing at them. Ten habits produce that, and they matter more than any rule below.

1. **Say the thing, not the abstraction of the thing.** Ban definite-article stand-ins — "the reflex", "the alternative", "the failure mode", "the trap", "the category", "the whole design", "the floor", "the ceiling", "the instinct", "the real question", "spelled differently." Name who does what instead. This is the single biggest tell in the corpus, and it shows up in every article that hasn't been passed through this guide.
2. **Metaphor is the exception, not the medium.** Default to the plain statement, and let an image in only when it's more accurate than the plain statement would be — not more vivid. Don't run more than one metaphor system in an article, and don't let an image carry an argument the mechanism should carry: if the image is the reasoning, the reader can't check the claim. No metaphor in headings.
3. **Technical terms stay.** Roslyn analyzer, semantic model, syntax tree, Option, Result, `<Define>` — all fine. What to cut is domain interior: implementation detail that serves one ecosystem's readers and taxes everyone else. A worked example is a worked example, not the argument.
4. **Sentences hold hands.** Use `and`, `but`, `so`, `because` to join claims instead of stacking them behind periods with nothing connecting them — that's what makes prose feel disjointed and airless. Carry the subject noun across sentences, old information first and new information last, so each sentence opens on something the reader already holds.
5. **But connection comes from inside the sentence, not from a stub announcing what the paragraph will do.** Open on the concrete sentence and let it carry the transition; see the paragraph-opening-stub rule below, which still holds.
6. **A paragraph is about one thing**, with a beginning and an end — not four assertions parked next to each other.
7. **Confidence without concession.** Cut pre-emptive objection-heading ("this is not a complaint about X"), self-doubt tails ("I don't think I got it right every time"), and defensive scope-narrowing. Modal verbs — might, would, could — are fine and aren't the problem. Where a concession is genuinely needed, state it as an opinion, not a defence.
8. **Presence comes from opinion and direct address.** Say what you rate and what you don't, and talk to the reader in second person. It doesn't come from anecdote, and it doesn't come from a verdict stapled to the end.
9. **Headings vary** — plain-informative, a declarative claim, whatever the section actually wants. No single formula, and no aphorisms engineered to be quotable.
10. **Contractions are allowed and preferred.** The uncontracted register is much of what makes flat prose sound braced.

Approved example — before and after:

> BEFORE: "Unwrap is the escape hatch, and it reaches in for the value and throws if there isn't one."
> AFTER: "Unwrap bypasses that. It returns the value, and throws if there isn't one."

Two fixed mechanics, not preferences: Australian English spelling (behaviour, prioritise, optimisation), and the hyphen ` - ` as the only inline aside marker. Em dashes are banned - no article in this corpus contains one. Both are checked by `tests/prose.test.ts`, along with inline parenthetical definitions, "not A, it's B", and superlative up-play. Lefthook runs that suite on commit whenever an article or a case study is staged, so there is no separate step to remember.

The specific ways this voice still goes wrong are a review-pass concern, not a drafting one, and they live with the pass that hunts them: the concern list in [.claude/skills/refine-prose/SKILL.md](../../.claude/skills/refine-prose/SKILL.md). Don't work through it while drafting. Chasing eleven tics mid-sentence produces the airless, asyndetic prose habit 4 exists to prevent.
