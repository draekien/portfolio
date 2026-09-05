# app/projects/ — case study pages

**Images** — every project screenshot has four variants: `{name}-dark.png`, `{name}-light.png`, `{name}-dark-mobile.png`, `{name}-light-mobile.png`. Visibility is controlled with Tailwind classes: `hidden dark:block sm:dark:hidden` etc. Follow this pattern when adding new project images.

**Structured data** — each project route has a `structured-data.json` colocated alongside its `page.tsx`, injected via `<JsonLd data={...} />`.

Section headings on these pages use `<ProjectSectionHeading>` / `<ProjectSectionDivider>` from `@/components/project-section`.

## Voice

`content/articles/CLAUDE.md` is canonical — follow its Voice section here too. Two differences are real:

- These are TSX pages, not MDX, and they describe work rather than argue a point. Headings are short noun-phrase labels (`Problem`, `Tech stack`, `Why this exists`, `Compatibility`) rather than the declarative claims an article heading can be — they vary per project, but they name a section, they don't state one.
- Inline code and identifiers use `<Code>` (`@/components/code`), not `<Define>` — there's no glossary popover on these pages, just a monospace inline mark.
