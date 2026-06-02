# app/projects/ — case study pages

**Images** — every project screenshot has four variants: `{name}-dark.png`, `{name}-light.png`, `{name}-dark-mobile.png`, `{name}-light-mobile.png`. Visibility is controlled with Tailwind classes: `hidden dark:block sm:dark:hidden` etc. Follow this pattern when adding new project images.

**Structured data** — each project route has a `structured-data.json` colocated alongside its `page.tsx`, injected via `<JsonLd data={...} />`.

Section headings on these pages use `<ProjectSectionHeading>` / `<ProjectSectionDivider>` from `@/components/project-section`.
