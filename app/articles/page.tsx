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
    name: "William Pei — Articles",
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
        <ArticleFeedSubscribe />
        <div className="flex items-center gap-4 mb-16">
          <BrandMark className="text-primary shrink-0" />
          <hr className="flex-1 border-border" />
          <h1 className="font-mono text-sm text-secondary tracking-wider shrink-0">
            articles
          </h1>
          <BrandMark className="text-primary shrink-0" />
        </div>
        <div className="divide-y divide-border">
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
