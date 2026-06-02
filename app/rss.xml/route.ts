import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const articles = await getAllArticles();
  const baseUrl = "https://www.wpei.me";

  const items = articles
    .map(
      (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <description>${escapeXml(a.description)}</description>
      <link>${baseUrl}/articles/${a.slug}</link>
      <guid isPermaLink="true">${baseUrl}/articles/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      ${a.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>William Pei</title>
    <description>Long-form writing on software engineering, distributed systems, and architecture.</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-AU</language>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
