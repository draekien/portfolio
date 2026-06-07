# CLAUDE.md

Guidance for Claude Code (claude.ai/code) working in this repository.

## Commands

```bash
pnpm dev          # start Next.js dev server
pnpm build        # production build
pnpm lint         # Biome check (lints + format check)
pnpm lint:fix     # Biome check with auto-fix
pnpm format       # Biome format only
pnpm typegen      # regenerate Next.js typed routes
```

No test suite — this is a portfolio site. Use `pnpm`, never `npm`.

## Stack

Next.js 16 App Router. React 19 with React Compiler enabled. TypeScript strict mode. `@/` maps to the repo root.

## Layout

Subsystem detail lives in nested `CLAUDE.md` files that load on demand when you open that directory:

- `app/` — pages only, no business logic. See `app/CLAUDE.md`.
  - `app/projects/` — case study pages. See `app/projects/CLAUDE.md`.
- `components/` — all components. See `components/CLAUDE.md`.
  - `components/ui/` — generated shadcn primitives. See `components/ui/CLAUDE.md`.
  - `components/mdx/` — MDX rendering. See `components/mdx/CLAUDE.md`.
- `lib/` — shared utilities, incl. the articles pipeline. See `lib/CLAUDE.md`.
- `content/articles/` — article `.mdx` source. See `content/articles/CLAUDE.md`. When the user asks to draft an article, follow the authoring process there.

## Conventions (apply everywhere)

**Theme** — `next-themes` with `attribute="class"`. Both light and dark modes must be considered for any new visual element.

**Phosphor icons in Server Components** — import from `@phosphor-icons/react/ssr`, not `@phosphor-icons/react`. The default barrel calls `createContext` at module scope, which throws (`createContext is not a function`) in a Server Component. Client Components (`"use client"`) can use either.

**Typed routes** — `next.config.ts` enables `typedRoutes: true`. Always use typed `href` props (e.g. `link={{ href: "/projects/parasol" }}`). Run `pnpm typegen` if route types are stale.

**Biome 2.x** is the primary linter and formatter (no Prettier). `pnpm lint` runs `biome check`. An `eslint.config.mjs` (`eslint-config-next`) also exists for Next.js core-web-vitals rules but is not part of `pnpm lint`. Double quotes for JS/TS strings. Imports are auto-organized on save via Biome assist. `tailwindDirectives: true` is set in `biome.json` — do not disable CSS linting to work around Tailwind `@` directives.

**Pre-commit** — `lefthook.yml` runs `biome check --write` on staged JS/TS/JSON/CSS files and re-stages fixes.

**shadcn primitives are built on Base UI (`@base-ui/react`), not Radix** — the API differs (e.g. `Popover.Positioner` / `Popover.Popup`). Details in `components/ui/CLAUDE.md`.
