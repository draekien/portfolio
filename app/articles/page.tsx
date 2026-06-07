import type { Metadata } from "next";
import { ArticleFeedSubscribe } from "@/components/article-feed-subscribe";
import { ArticleRow } from "@/components/article-row";
import { BrandMark } from "@/components/brand-mark";
import { JsonLd } from "@/components/json-ld";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles | William Pei",
  description:
    "Long-form writing on software engineering, distributed systems, and architecture.",
  openGraph: {
    title: "Articles | William Pei",
    description:
      "Long-form writing on software engineering, distributed systems, and architecture.",
    url: "/articles",
    type: "website",
  },
  alternates: {
    canonical: "/articles",
  },
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "William Pei: Articles",
    description: metadata.description,
    url: "https://www.wpei.me/articles",
    author: {
      "@type": "Person",
      name: "William Pei",
      url: "https://www.wpei.me",
    },
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <section className="container mx-auto pt-16 pb-24">
        <div className="mb-12">
          <h1 className="font-mono text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6 text-wrap-balance">
            <BrandMark className="text-primary mr-2" />
            Thinking out loud
          </h1>
          <div className="space-y-3 max-w-prose text-wrap-pretty">
            <p className="text-lg md:text-xl">
              Each piece starts with something I couldn&apos;t leave alone. I
              write to work it out; the point usually surfaces somewhere in the
              middle.
            </p>
            <p className="text-base text-muted-foreground">
              Long-form on software engineering and the things adjacent to it.
            </p>
          </div>
        </div>
        <ArticleFeedSubscribe />
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <p className="font-mono text-sm text-secondary tracking-wider shrink-0">
            articles
          </p>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <div>
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
