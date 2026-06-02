# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start Next.js dev server
pnpm build        # production build
pnpm lint         # Biome check (lints + format check)
pnpm lint:fix     # Biome check with auto-fix
pnpm format       # Biome format only
pnpm typegen      # regenerate Next.js typed routes
```

No test suite — this is a portfolio site.

## Architecture

Next.js 16 App Router portfolio site. React 19 with React Compiler enabled. TypeScript strict mode. `@/` maps to the repo root.

**`app/`** — pages only. No business logic here.
- `app/page.tsx` — single-page home: hero, applications section, libraries section, contact section
- `app/projects/[slug]/page.tsx` — individual case study pages for each project
- `app/layout.tsx` — root layout: Google Fonts (Figtree + JetBrains Mono as CSS vars), `<Providers>`, `<BackgroundFx>`, `<LayoutHeader>`

**`components/`** — all components
- `components/ui/` — shadcn/ui primitives. These have their own `biome.json` that relaxes rules for generated code. Don't edit these manually; use `pnpm dlx shadcn add <component>`.
- `components/project-summary.tsx` — compound components for project cards on the home page
- `components/project-section.tsx` — heading/divider components for case study pages
- `components/code-block.tsx` — **async Server Component** using Shiki for SSR syntax highlighting (catppuccin-latte/mocha themes)
- `components/framework-badge.tsx` — `<FrameworkBadge version="...">`. Adding a new badge requires extending the `FrameworkVersion` union and `displayLabels` map in that file.

**`lib/`** — shared utilities
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `lib/query-client.ts` — TanStack Query client singleton
- `lib/opengraph.tsx` — shared OG image utilities

## Key patterns

**Images** — every project screenshot has four variants: `{name}-dark.png`, `{name}-light.png`, `{name}-dark-mobile.png`, `{name}-light-mobile.png`. Visibility is controlled with Tailwind classes: `hidden dark:block sm:dark:hidden` etc. Follow this same pattern when adding new project images.

**Structured data** — each project route has a `structured-data.json` colocated alongside its `page.tsx`, injected via `<JsonLd data={...} />`.

**Typed routes** — `next.config.ts` enables `typedRoutes: true`. Always use typed `href` props (e.g. `link={{ href: "/projects/parasol" }}`). Run `pnpm typegen` if route types are stale.

**Theme** — `next-themes` with `attribute="class"`. Both light and dark modes must be considered for any new visual element.

## Tooling notes

**Biome 2.x** is the linter and formatter (no ESLint, no Prettier). Double quotes for JS/TS strings. Imports are auto-organized on save via Biome assist. `tailwindDirectives: true` is set in `biome.json` — do not disable CSS linting to work around Tailwind `@` directives.

**shadcn/ui** — use the `shadcn` CLI to add components. Don't hand-edit files in `components/ui/`.
