# components/mdx/ — MDX rendering

Articles are rendered with `next-mdx-remote/rsc` (`MdxContent` in `mdx-content.tsx`), with `rehype-slug` applied so headings get `id`s for the TOC.

**Custom components** usable in article `.mdx` are registered in the `components` map in `mdx-content.tsx`. Client components (`"use client"`) work there as client islands within the RSC-rendered MDX. Current map: `pre`, `code`, `a` (internal links via typed `next/link`; external links get `target="_blank"` + `rel="noopener noreferrer"`), `ArticleLink`, `BrandMark`, `ButtonLink`, `CodeBlock`, `Define`, `FrameworkBadge`, `LinkNote`, `SourceCallout` (block-level callout guiding readers to a project case study (`internal`) or external source (`external`)).

**`ArticleLink`** (`<ArticleLink slug="...">text</ArticleLink>`) is an inline cross-link to another article, rendered as a hover/click popover previewing the target's title, reading time, and excerpt. It splits across the RSC boundary: the async Server Component (`components/article-link.tsx`) loads metadata via `getArticleBySlug`, then hands it to the `"use client"` popover island (`components/article-link-popover.tsx`). Same pattern as `CodeBlock` (async server) + an interactive client child.

**`LinkNote`** (`<LinkNote href="..." note="...">text</LinkNote>`, `components/link-note.tsx`) is an external link that reveals an on-hover note (the `note` prop) summarising where it leads. Built on the `hover-card` primitive (Base UI `PreviewCard`, hover-native); its trigger renders as a real anchor so clicking still navigates. Use it for source links; use `ArticleLink` for internal article cross-links.
