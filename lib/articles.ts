import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { cache } from "react";
import readingTime from "reading-time";
import { z } from "zod";

const articlesDir = path.join(process.cwd(), "content/articles");

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  updated: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export type ArticleMeta = z.infer<typeof frontmatterSchema> & {
  slug: string;
  readingTime: string;
};

export type Article = ArticleMeta & {
  content: string;
};

function isDraftVisible(): boolean {
  return process.env.NODE_ENV !== "production";
}

export const getAllArticles = cache(async (): Promise<ArticleMeta[]> => {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));

  const articles = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(articlesDir, filename), "utf-8");
      const { data, content } = matter(raw);
      const parsed = frontmatterSchema.parse(data);
      const rt = readingTime(content);
      return {
        ...parsed,
        slug,
        readingTime: `${Math.ceil(rt.minutes)} min read`,
      };
    })
    .filter((a) => isDraftVisible() || !a.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
});

export const getArticleBySlug = cache(
  async (slug: string): Promise<Article> => {
    const filePath = path.join(articlesDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      notFound();
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const parsed = frontmatterSchema.parse(data);

    if (parsed.draft && !isDraftVisible()) {
      notFound();
    }

    const rt = readingTime(content);

    return {
      ...parsed,
      slug,
      readingTime: `${Math.ceil(rt.minutes)} min read`,
      content,
    };
  },
);

export const getAllArticleSlugs = cache(async (): Promise<string[]> => {
  const articles = await getAllArticles();
  return articles.map((a) => a.slug);
});
