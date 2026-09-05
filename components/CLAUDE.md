# components/ — all components

**Never pair `<BrandMark />` with an `@tag`.** The two are alternative kickers, not a pair. `BrandMark` prefixes a plain-language label (`\\ In this article`, `\\ Project`, `\\ Colophon`); an `@tag` stands alone with no mark (`@published`, `@updated`, `@skills`).

- `project-summary.tsx` — compound components for project cards on the home page
- `project-section.tsx` — `<ProjectSectionHeading>` / `<ProjectSectionDivider>` for case study pages
- `code-block.tsx` — **async Server Component** using Shiki for SSR syntax highlighting (catppuccin-latte/mocha themes)
- `framework-badge.tsx` — `<FrameworkBadge version="...">`. Adding a new badge requires extending the `FrameworkVersion` union and `displayLabels` map in that file.
- `version-history.tsx` — compound popover listing an article's post-publication edits, driven by the `versions` frontmatter field. Used in the article page header.

Subdirectories carry their own `CLAUDE.md`: `ui/` (generated primitives), `mdx/` (MDX rendering).
