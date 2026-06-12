import type { Metadata } from "next";
import { ArticleToc } from "@/components/article-toc";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Colophon } from "@/components/colophon";
import { JsonLd } from "@/components/json-ld";
import { MdxContent } from "@/components/mdx/mdx-content";
import {
  VersionHistory,
  VersionHistoryContent,
  VersionHistoryItem,
  VersionHistoryItemDate,
  VersionHistoryItemDescription,
  VersionHistoryTrigger,
} from "@/components/version-history";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: `${article.title} | William Pei`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `/articles/${slug}`,
      publishedTime: article.date,
      ...(article.updated && { modifiedTime: article.updated }),
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/articles/${slug}`,
    },
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  const formattedDate = formatDate(article.date);
  const latestVersion = article.versions.at(-1);

  const titleSize =
    article.title.length > 36
      ? "text-[clamp(1.75rem,1rem+2.4vw,2.5rem)]"
      : "text-[clamp(1.875rem,1rem+3vw,3rem)]";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    ...(article.updated && { dateModified: article.updated }),
    author: {
      "@type": "Person",
      name: "William Pei",
      url: "https://www.wpei.me",
    },
    url: `https://www.wpei.me/articles/${slug}`,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <article className="container mx-auto pt-16 pb-24 max-w-4xl">
        <header className="mb-12 space-y-4">
          <h1
            className={cn(
              "font-mono font-medium tracking-tight leading-tight text-wrap-balance",
              titleSize,
            )}
          >
            <BrandMark className="text-primary mr-2" />
            {article.title}
          </h1>
          <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
            <dt className="font-mono text-sm text-secondary">@published</dt>
            <dd className="font-mono text-sm text-foreground">
              {formattedDate}
            </dd>
            {latestVersion && (
              <>
                <dt className="font-mono text-sm text-secondary">@updated</dt>
                <dd className="font-mono text-sm text-foreground">
                  <VersionHistory>
                    <VersionHistoryTrigger>
                      {formatDate(latestVersion.date)}
                    </VersionHistoryTrigger>
                    <VersionHistoryContent>
                      {article.versions.toReversed().map((version) => (
                        <VersionHistoryItem
                          key={`${version.date}-${version.description}`}
                        >
                          <VersionHistoryItemDate dateTime={version.date}>
                            {formatDate(version.date)}
                          </VersionHistoryItemDate>
                          <VersionHistoryItemDescription>
                            {version.description}
                          </VersionHistoryItemDescription>
                        </VersionHistoryItem>
                      ))}
                      <VersionHistoryItem>
                        <VersionHistoryItemDate dateTime={article.date}>
                          {formattedDate}
                        </VersionHistoryItemDate>
                        <VersionHistoryItemDescription>
                          Published.
                        </VersionHistoryItemDescription>
                      </VersionHistoryItem>
                    </VersionHistoryContent>
                  </VersionHistory>
                </dd>
              </>
            )}
            <dt className="font-mono text-sm text-secondary">@reading-time</dt>
            <dd className="font-mono text-sm text-foreground">
              {article.readingTime}
            </dd>
            {article.tags.length > 0 && (
              <>
                <dt className="font-mono text-sm text-secondary">@tags</dt>
                <dd className="flex flex-wrap gap-2 mt-0.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-foreground bg-muted border border-border rounded-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </>
            )}
          </dl>
        </header>
        <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-12 xl:gap-16">
          <div className="prose prose-article max-w-none min-w-0">
            <MdxContent source={article.content} />
          </div>
          <ArticleToc headings={article.headings} />
        </div>
        <div className="mt-16">
          <Colophon />
        </div>
        <footer className="mt-12 pt-8 border-t border-border">
          <ButtonLink internal link={{ href: "/articles" }}>
            ← Back to articles
          </ButtonLink>
        </footer>
      </article>
    </>
  );
}
