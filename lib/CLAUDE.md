# lib/ — shared utilities

**`articles.ts`** — the article pipeline. `getAllArticles`, `getArticleBySlug`, `getAllArticleSlugs`, all wrapped in React `cache()`. **Server-only** (uses `node:fs`) — do not import into Client Components. Frontmatter is parsed with the Zod `frontmatterSchema` here (the source of truth `content/articles/CLAUDE.md` documents). Drafts are filtered unless `NODE_ENV !== "production"`; a missing slug calls `notFound()`. Headings for the TOC are extracted with the regex `/^(#{2,3})\s+(.+)$/gm` and `slugify`d — this must stay in lockstep with how `rehype-slug` derives heading `id`s, or TOC anchors break.

**`glossary.ts`** — the typed glossary backing `<Define term="...">`. Keys are the valid `term` values; an unregistered term is a TypeScript error. Add the entry here before using the component in MDX.

**`opengraph.tsx`** — `OgMark`, `OG_COLORS`, `loadFonts` for the colocated `opengraph-image.tsx` routes (`next/og` `ImageResponse`). `loadFonts` reads TTFs from `public/fonts`.

**`query-client.ts`** — `getQueryClient` singleton: a fresh client per request on the server, a memoized browser singleton on the client. Used by `components/query-client-provider.tsx`.

**`use-scroll-spy.ts`** — `useScrollSpy(ids)` drives the active TOC section (midpoint model + bottom-of-page guard). `ids` must be a stable reference.

**`hooks.ts`** — `useCopyToClipboard`. **`utils.ts`** — `cn` (clsx + tailwind-merge) and `assertDefined`.
