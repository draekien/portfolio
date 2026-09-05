# components/mdx/ — MDX rendering

Articles are rendered with `next-mdx-remote/rsc` (`MdxContent` in `mdx-content.tsx`), with `rehype-slug` applied so headings get `id`s for the TOC.

**Custom components** usable in article `.mdx` are registered in the `components` map in `mdx-content.tsx`. Client components (`"use client"`) work there as client islands within the RSC-rendered MDX. Current map: `pre`, `code`, `a` (internal links via typed `next/link`; external links get `target="_blank"` + `rel="noopener noreferrer"`), `ArticleLink`, `BrandMark`, `ButtonLink`, `CodeBlock`, `Define`, `FrameworkBadge`, `LinkNote`, `Signpost`, `SourceCallout` (block-level callout guiding readers to a project case study (`internal`) or external source (`external`)).

**`Signpost`** (`<Signpost about="...">` wrapping a markdown ordered list, `components/signpost.tsx`) is the contents notice every article opens with, placed above the first prose. Shares the `not-prose` `aside` shell and mono `@`-kicker with `SourceCallout`, and styles the child `ol` through `[&_ol]` / `[&_li::marker]` descendant selectors since the list arrives as markdown. It is deliberately **not** built on shadcn `alert`, whose `role="alert"` makes assistive tech announce it as an urgent live update.

**Array and object props do not survive this pipeline.** An MDX expression attribute (`covers={["a","b"]}`) is silently dropped and the component receives `undefined` — string attributes and children are the only reliable ways to pass content in from `.mdx`. `Signpost` originally took a `covers: string[]` and crashed the prerender on every article that used it.

**`ArticleLink`** (`<ArticleLink slug="...">text</ArticleLink>`) is an inline cross-link to another article, rendered as a hover/click popover previewing the target's title, reading time, and excerpt. It splits across the RSC boundary: the async Server Component (`components/article-link.tsx`) loads metadata via `getArticleBySlug`, then hands it to the `"use client"` popover island (`components/article-link-popover.tsx`). Same pattern as `CodeBlock` (async server) + an interactive client child.

**`LinkNote`** (`<LinkNote href="..." note="...">text</LinkNote>`, `components/link-note.tsx`) is an external link that reveals an on-hover note (the `note` prop) summarising where it leads. Built on the `hover-card` primitive (Base UI `PreviewCard`, hover-native); its trigger renders as a real anchor so clicking still navigates. Use it for source links; use `ArticleLink` for internal article cross-links.
