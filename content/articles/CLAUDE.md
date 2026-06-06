# content/articles/ — article source

One `.mdx` file per article; the filename (minus `.mdx`) is the slug.

**Frontmatter** is validated by a Zod schema in `@/lib/articles`:
- required: `title`, `description`, `date`
- optional: `updated`, `tags` (string[]), `draft` (boolean)

**Drafts** (`draft: true`) render only when `NODE_ENV !== "production"` — hidden in the production build.

**TOC** is derived from `##`/`###` headings via regex, so heading text drives the anchor slug. Reading time is computed automatically.

Custom MDX components (`<Define>`, `<CodeBlock>`, `<FrameworkBadge>`, etc.) are registered in `components/mdx/mdx-content.tsx`. For voice and authoring workflow, use the `article-writing` skill.

- `<Define term="...">` — the `term` must be a key in the typed glossary at `lib/glossary.ts`. An unregistered term is a TypeScript error, not a runtime fallback. To add a new term: add the entry to `lib/glossary.ts` first, then use the component in the MDX. Remove any inline parenthetical definition the MDX was carrying — it belongs in the glossary now.
- **All definitions go in `<Define>`, never inline.** If an article explains a term in parentheses or an em-dash aside, move that explanation to the glossary and replace it with `<Define>`.
- `<ArticleLink slug="...">text</ArticleLink>` — cross-link to another article (`slug` = its filename minus `.mdx`), shown as a popover previewing the target's title, reading time, and excerpt.
- `<LinkNote href="..." note="...">text</LinkNote>` — external source link that reveals the `note` summary on hover, so readers grasp where it leads without clicking. Still navigates on click.
