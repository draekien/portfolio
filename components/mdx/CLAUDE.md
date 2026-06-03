# components/mdx/ — MDX rendering

Articles are rendered with `next-mdx-remote/rsc` (`MdxContent` in `mdx-content.tsx`), with `rehype-slug` applied so headings get `id`s for the TOC.

**Custom components** usable in article `.mdx` are registered in the `components` map in `mdx-content.tsx`. Client components (`"use client"`) work there as client islands within the RSC-rendered MDX. Current map: `pre`, `code`, `a` (internal links via typed `next/link`; external links get `target="_blank"` + `rel="noopener noreferrer"`), `BrandMark`, `ButtonLink`, `CodeBlock`, `Define`, `FrameworkBadge`, `SourceCallout` (block-level callout guiding readers to a project case study (`internal`) or external source (`external`)).
