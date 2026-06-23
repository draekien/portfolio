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

1. Use `/article-writing` to work out what we are writing about.
2. Once the subject and shape are finalised, use `/personal-skills:ghost-writing` to write the article.
3. With a first draft in hand, use `/refine-prose` to tighten the prose concern by concern, then apply and verify the edits.
4. Use `/stop-slop` to strip predictable AI writing tells, then apply and verify the edits.
5. Use `/article-review` to perform an independent review of the draft and present findings.

- `<Define term="...">` — the `term` must be a key in the typed glossary at `lib/glossary.ts`. An unregistered term is a TypeScript error, not a runtime fallback. To add a new term: add the entry to `lib/glossary.ts` first, then use the component in the MDX. Remove any inline parenthetical definition the MDX was carrying — it belongs in the glossary now.
- **All definitions go in `<Define>`, never inline.** If an article explains a term in parentheses or an em-dash aside, move that explanation to the glossary and replace it with `<Define>`.
- `<ArticleLink slug="...">text</ArticleLink>` — cross-link to another article (`slug` = its filename minus `.mdx`), shown as a popover previewing the target's title, reading time, and excerpt.
- `<LinkNote href="..." note="...">text</LinkNote>` — external source link that reveals the `note` summary on hover, so readers grasp where it leads without clicking. Still navigates on click.

## Voice (recurring review feedback)

- No self-referential narration ("the article would be optimistic", "an engineer concluding X deserves suspicion") — state the point flat, don't narrate the writing.
- No superlative up-play ("the best question I have heard") — understate ("the question that stuck with me").
- Colons only for lists, quote intros, and deliberate label-openers ("So here is where I land:") — "claim: elaboration" as the default sentence shape is a tic; prefer a period or " - ".
- Max one " - " aside per sentence; don't stack them.
- Don't justify narrative moves (why an experiment ran again, why a section exists) — just state what happened.
- Don't use "the" to universalise the author's own readings or positions — "The honest reading is..." → "My honest reading is...", "The position comes with..." → "My position comes with..."
