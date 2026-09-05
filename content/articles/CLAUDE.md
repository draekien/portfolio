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
- `<LinkNote href="..." note="...">text</LinkNote>` — external source link that reveals the `note` summary on hover, so readers grasp where it leads without clicking. Still navigates on click.

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

Two fixed mechanics, not preferences: Australian English spelling (behaviour, prioritise, optimisation), and the hyphen ` - ` as the only inline aside marker. Em dashes are banned - no article in this corpus contains one.

The tics below are the specific ways the voice above still goes wrong. Watch for them on a pass, but don't let avoiding them produce asyndetic prose — that's the mistake this rewrite exists to undo.

- No self-referential narration ("the article would be optimistic") — state the point flat.
- No superlative up-play ("the best question I have heard") — understate instead ("the question that stuck with me").
- Colons are fine for lists, quote intros, and deliberate label-openers, but use them sparingly — "claim: elaboration" as the default sentence shape is a tic.
- Don't justify narrative moves (why an experiment ran again, why a section exists) — just state what happened.
- Don't use "the" to universalise your own readings or positions — "The honest reading is..." → "My honest reading is..." (a narrow case of habit 1, above).
- No "not A, it's B" — just say "it's B." The negation is never load-bearing.
- No circular "X because X" — if the "because" clause restates the claim in different words, including the article's own metaphors, it isn't an explanation. Supply the actual mechanism, or cut the "because." Example of the trap: "it keeps no memory because it carries no character between conversations."
- No self-appraising codas — a clause hung off a finished sentence to tell the reader how to judge it, usually wry and usually about the author ("...and felt fine about it", "...where they were free"). End on the fact, and cut the tail if it carries no information.
- No paragraph-opening stubs — a short abstract sentence that names the paragraph's job instead of starting on its content, usually carrying a vague pronoun or a placeholder noun ("The packaging sharpens it", "Something else falls out of that", "Restraint has a cost"). The reader holds it unresolved until the real sentence arrives, and the pronoun often points at the wrong antecedent anyway.
- No stance sentences — a sentence whose content is your posture toward the point rather than the point itself. The difficulty appraisal rates a thing instead of stating it ("X is the easy part", "X is where the time went"). The concessive defiance announces that an objection was overridden instead of giving the reason ("I shipped them as warnings anyway"). The WH-cleft declares a position the mechanism could state on its own ("What I care about is X"). Give the reason or the mechanism, and cut the posture.
- No redundant run-on chains — four clauses saying the same thing in different framings isn't emphasis, it's fog. Find the sharpest framing and cut the rest.
