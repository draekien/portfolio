import type { ReactNode } from "react";
import { ArticleLinkPopover } from "@/components/article-link-popover";
import { getArticleBySlug } from "@/lib/articles";

type ArticleLinkProps = {
  /** Slug of the article to cross-link to (filename minus .mdx). */
  slug: string;
  /** The inline text the reader sees and clicks. */
  children: ReactNode;
};

/**
 * Inline cross-link to another article, rendered as a popover that previews
 * the target's title, reading time, and excerpt. Server Component: it loads
 * the linked article's metadata, then hands it to a client popover island.
 */
export async function ArticleLink({ slug, children }: ArticleLinkProps) {
  const article = await getArticleBySlug(slug);

  return (
    <ArticleLinkPopover
      href={`/articles/${slug}`}
      title={article.title}
      description={article.description}
      readingTime={article.readingTime}
    >
      {children}
    </ArticleLinkPopover>
  );
}
