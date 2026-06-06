# app/ — App Router pages

Pages only. No business logic here — extract to `lib/` or `components/`.

- `page.tsx` — single-page home: hero, applications section, libraries section, contact section
- `_summaries/` — one file per home-page project summary (extracted presentational JSX, no logic). Private folder (`_`-prefixed), excluded from routing.
- `layout.tsx` — root layout: Google Fonts (Figtree + JetBrains Mono as CSS vars), `<Providers>`, `<BackgroundFx>`, `<LayoutHeader>`
- `articles/`, `articles/[slug]/page.tsx` — article index + individual MDX articles
- `projects/[slug]/page.tsx` — case study pages (see `projects/CLAUDE.md`)

**SEO / metadata** — `sitemap.ts`, `robots.ts`, `manifest.ts`, and `rss.xml/route.ts` are generated routes. Keep them in sync when adding routes or articles.

**OG images** — every route has a colocated `opengraph-image.tsx`. Dynamic routes (`[slug]`) export `generateStaticParams` and build the image with `next/og` `ImageResponse`, using `loadFonts` / `OG_COLORS` / `OgMark` from `@/lib/opengraph`.
