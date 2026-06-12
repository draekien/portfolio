# components/ — all components

- `project-summary.tsx` — compound components for project cards on the home page
- `project-section.tsx` — `<ProjectSectionHeading>` / `<ProjectSectionDivider>` for case study pages
- `code-block.tsx` — **async Server Component** using Shiki for SSR syntax highlighting (catppuccin-latte/mocha themes)
- `framework-badge.tsx` — `<FrameworkBadge version="...">`. Adding a new badge requires extending the `FrameworkVersion` union and `displayLabels` map in that file.
- `version-history.tsx` — compound popover listing an article's post-publication edits, driven by the `versions` frontmatter field. Used in the article page header.

Subdirectories carry their own `CLAUDE.md`: `ui/` (generated primitives), `mdx/` (MDX rendering).
