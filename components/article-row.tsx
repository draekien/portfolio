import type { Route } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import type { ArticleMeta } from "@/lib/articles";

export function ArticleRow({ article }: { article: ArticleMeta }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-8 space-y-3">
      <Link href={`/articles/${article.slug}` as Route} className="group block">
        <h2 className="font-mono text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-150 text-wrap-balance">
          <BrandMark className="text-primary mr-1" />
          {article.title}
        </h2>
      </Link>
      <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5">
        <dt className="font-mono text-sm text-secondary">@published</dt>
        <dd className="font-mono text-sm text-foreground">{formattedDate}</dd>
        <dt className="font-mono text-sm text-secondary">@reading-time</dt>
        <dd className="font-mono text-sm text-foreground">
          {article.readingTime}
        </dd>
      </dl>
      <p className="text-sm text-muted-foreground max-w-prose">
        {article.description}
      </p>
      {article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-foreground bg-muted border border-border rounded-md px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
