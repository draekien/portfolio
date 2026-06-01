# Articles Section — Implementation Plan

## Context

William wants a place on his portfolio to publish long-form writing about software engineering and his learnings/experiences. The site (`wpei.me`) is a Next.js 16 / React 19 App Router portfolio with a committed design system ("The Technical Brief": dark, JetBrains Mono + Figtree, amber/purple/blue three-voice color, `\\` brand mark). Today all content is hand-authored JSX — there is no content pipeline, which is painful for prose-heavy writing.

Notably, the groundwork was anticipated: `app/globals.css` already contains an **unused `prose-article` `@utility`** mapping `@tailwindcss/typography` to the design tokens, and both `@tailwindcss/typography` and Shiki (`components/code-block.tsx`) are installed and ready. This plan adds the first data-driven content layer and consumes those assets.

**Confirmed decisions (from the user):**
- Authoring: **MDX files** with frontmatter, in a `content/articles/` directory; can embed existing React components inline.
- Placement: a **top-level `/articles` route** (index + `[slug]`) with an **"Articles" link in the global header** and a **"latest writing" teaser on the home page**.
- v1 extras: **tags, RSS feed, per-article OG images, draft support** — all included.

**Outcome:** William writes an `.mdx` file, drops it in `content/articles/`, and on build it appears in the index, gets its own page with Shiki-highlighted code and token-styled prose, an auto-generated OG image, an RSS entry, and a sitemap entry. Drafts are visible in dev and hidden in prod.

---

## Architecture decisions

| Decision | Choice | Why |
|---|---|---|
| MDX engine | `next-mdx-remote/rsc` (`MDXRemote`/`compileMDX`) | Content-dir + dynamic `[slug]` + frontmatter index, zero `next.config.ts` changes, async RSC `CodeBlock` works only in the `/rsc` variant. Confirmed against current docs. |
| Frontmatter | `gray-matter` | Split YAML from body; reuse parsed metadata in index/RSS/sitemap without rendering. |
| Validation | `zod` (new dep) | Same parsed object feeds metadata, OG, RSS, sitemap — fail the build loudly on a malformed article. |
| Reading time | `reading-time` | Compute "N min read" from body. |
| Code highlighting | **Reuse `components/code-block.tsx`** via an MDX `pre` override — NOT a rehype plugin | One Shiki config, keeps the existing `html.dark .shiki` CSS override and the `CopyButton`. |
| Inline code | Reuse `components/code.tsx` via MDX `code` | Existing styled inline `<code>`. |
| RSS | Hand-rolled XML in `app/rss.xml/route.ts`, `dynamic="force-static"` | ~30 lines; no dependency. |
| OG images | Per-article `opengraph-image.tsx` reusing `lib/opengraph.tsx` | Matches the project-page pattern. |
| Drafts | Filtered in the loader by `process.env.NODE_ENV`; `dynamicParams = false` | Draft slugs are never in `generateStaticParams` in prod → 404; visible in dev. |

**Dependencies to add:** `pnpm add next-mdx-remote gray-matter reading-time zod` (use pnpm, never npm).

---

## Frontmatter schema (zod, in `lib/articles.ts`)

```
title:       string (required)
description: string (required — drives meta, OG, RSS)
date:        string ISO date (required)
updated:     string ISO date (optional)
tags:        string[] (default [])
draft:       boolean (default false)
```

---

## Files

### New — content pipeline
- **`content/articles/*.mdx`** — articles. Seed with one real starter post so the index/feed aren't empty at presentation time (no placeholder copy).
- **`lib/articles.ts`** — server-only loader (`node:fs`), wrapped in React `cache()`. Exports:
  - `getAllArticles()` → metadata sorted by `date` desc, drafts filtered when `NODE_ENV === "production"`.
  - `getArticleBySlug(slug)` → article + raw MDX `content`, respects draft visibility (`notFound()` otherwise).
  - `getAllArticleSlugs()` → for `generateStaticParams`.
  - zod schema + `z.infer` types (`Article`, `ArticleMeta`); reading-time computed here.
- **`components/mdx/mdx-content.tsx`** — wraps `<MDXRemote/>` with the components map. Map:
  - `pre` → new `Pre` (below); `code` → `Code` (`components/code.tsx`); `a` → internal `next/link` vs external `<a rel="noopener noreferrer">`.
  - Expose embeddable components: `FrameworkBadge`, `CodeBlock`, `BrandMark`, `ButtonLink`, carousel parts.
- **`components/mdx/pre.tsx`** — server component; unwraps the fenced `<pre><code class="language-xx">` to extract raw code + language and delegates to the existing async `CodeBlock`.

### New — routes
- **`app/articles/page.tsx`** — index. Server component, `getAllArticles()`. Renders the editorial list (design below), `metadata`, JSON-LD `Blog`.
- **`app/articles/opengraph-image.tsx`** — index OG (static, reuse `lib/opengraph.tsx`).
- **`app/articles/[slug]/page.tsx`** — article page. `generateStaticParams` (from slugs), `generateMetadata` (title/description/canonical `/articles/${slug}`/`openGraph type:"article"` with `publishedTime`,`modifiedTime`,`tags`/`twitter`), `export const dynamicParams = false`, per-article `BlogPosting` JSON-LD built inline. Renders header + `prose prose-article` body via `MdxContent`.
- **`app/articles/[slug]/opengraph-image.tsx`** — per-article OG. Copy the Parasol OG structure but dynamic: `generateStaticParams` + read article, render `title`/`description`. Hoist `loadFonts()` via `cache()` to avoid refetching per image.
- **`app/rss.xml/route.ts`** — `GET` returns RSS 2.0 built from `getAllArticles()`, `Content-Type: application/xml`, `dynamic = "force-static"`. Small `escapeXml` helper; channel header reuses site title/description and `metadataBase`.

### Edits
- **`components/layout-header.tsx`** — add an "Articles" `next/link` (to `/articles`) in the header, styled in the existing mono/link voice. Keep theme + GitHub controls.
- **`app/page.tsx`** — add a `#writing` teaser `<section>` (latest 2-3 articles via `getAllArticles().slice(0,3)`) opened by the existing `ProjectSectionDivider` ("writing"), ending in a `ButtonLink` → `/articles`. Reuse the same article-row primitive as the index.
- **`components/section-nav.tsx`** — add `{ id: "writing", label: "Writing" }` to the `sections` array so scroll-spy tracks the new home section.
- **`app/sitemap.ts`** — import `getAllArticles()`, append `/articles` + each `/articles/${slug}` (drop the hardcoded-only pattern for these).
- **`app/globals.css`** — no change needed; the article body **consumes** the existing `prose-article` utility (`className="prose prose-article max-w-none"`).
- **`biome.json`** — exclude `content/**` (or `**/*.mdx`) from `files.includes`/`linter.includes` so Biome doesn't choke on MDX.
- **`app/layout.tsx`** (optional) — add `alternates.types["application/rss+xml"]: "/rss.xml"` to root metadata for feed discovery.

---

## Design (within "The Technical Brief")

Reuse the existing system; do not introduce new tokens, fonts, shadows, or card grids (all banned). Identity preservation wins.

**Article row primitive** (shared by index + home teaser) — an editorial list, NOT a card grid:
- Title: `ProjectSummaryTitle`-style — Figtree title weight with a leading amber `BrandMark`; links to the article. `text-wrap: balance`.
- Metadata: `@`-attribute convention in Circuit Purple mono (`@published`, `@reading-time`), matching `ProjectSummaryAttribute`.
- Excerpt: `description` in Figtree body (Console Blue), measure capped ~65-75ch.
- Tags: reuse the `FrameworkBadge` visual treatment (muted surface, border, mono) as topic badges.
- Vertical rhythm: `space-y` between rows, hairline `border-border` separators — no boxed cards, no `border-left` stripes.

**Index `/articles`**: opened by `ProjectSectionDivider` ("articles"), then the list. Add the page under the same `<main className="p-4">` shell; include a simple back-to-home affordance in the header.

**Article page `/articles/[slug]`**:
- Header: title in the headline mono scale, metadata row in purple mono (`@published`, `@reading-time`, tags), then the prose body.
- Body: `prose prose-article max-w-none` with an outer measure cap (~70ch) for readability; Shiki code blocks at first-class weight; respect existing dark dual-theme.
- Footer: `ButtonLink` back to `/articles` (variant="link", amber, underline-on-hover — no filled buttons).
- Motion: none required beyond the existing `BackgroundFx`; if any reveal is added it must have a `prefers-reduced-motion` fallback. Reveals must not gate content visibility.

**Home teaser** `#writing`: same divider + 2-3 article rows + "Read all articles" `ButtonLink` to `/articles`.

---

## Risks / gotchas

- Import strictly from **`next-mdx-remote/rsc`** (the non-RSC `serialize()` path can't host the async `CodeBlock`).
- `typedRoutes`: dynamic links `href={\`/articles/${slug}\`}` typecheck once the `[slug]` folder exists; run **`pnpm typegen`** after scaffolding routes. Cast `as Route` only if the checker complains.
- `lib/articles.ts` uses `node:fs` — never import it across a `"use client"` boundary (index/article/teaser are server components, so safe).
- `generateMetadata`/OG for a draft slug must `notFound()`; with `dynamicParams = false` they never run for drafts in prod.
- `reading-time` counts JSX/import lines, slightly inflating estimates — acceptable for v1.
- OG `loadFonts()` fetches Google Fonts at build per image; wrap in `cache()`.
- No `next.config.ts` change; `reactCompiler` is unaffected (MDX compiles at runtime to plain element output).

---

## Verification

1. `pnpm add next-mdx-remote gray-matter reading-time zod` then `pnpm typegen`.
2. `pnpm dev` — confirm:
   - `/articles` lists the seed post(s); a `draft: true` post appears in dev.
   - `/articles/<slug>` renders: token-styled prose, Shiki dual-theme code block with working copy button, theme toggle swaps code theme, tags render.
   - Home page shows the `#writing` teaser; "Writing" appears in `SectionNav` and scroll-spy tracks it; "Articles" link in header navigates to `/articles`.
   - `/rss.xml` returns valid RSS 2.0 (well-formed XML, correct item links/dates).
3. `pnpm build` — confirm:
   - Build passes, no console errors, all article + OG routes prerender.
   - A `draft: true` post is **absent** from `/articles`, returns 404 at its slug, and is absent from `/rss.xml` and `sitemap.xml`.
   - `/articles/<slug>/opengraph-image` and `/articles/opengraph-image` resolve (open the PNGs; verify title/description render on brand background).
   - `sitemap.xml` includes `/articles` and each published slug.
4. `pnpm lint` (Biome) passes with `content/**` excluded.
5. Visual pass (responsive: mobile/tablet/desktop): list rhythm, measure cap on prose, no overflow of long titles, contrast holds (WCAG AAA target), no card-grid/side-stripe/shadow regressions.
