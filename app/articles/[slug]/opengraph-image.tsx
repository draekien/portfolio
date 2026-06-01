import { ImageResponse } from "next/og";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import { loadFonts, OG_COLORS, OgMark } from "@/lib/opengraph";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, fonts] = await Promise.all([
    getArticleBySlug(slug),
    loadFonts(),
  ]);

  const titleFontSize = article.title.length > 60 ? 44 : 56;

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        backgroundColor: OG_COLORS.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 80px",
        fontFamily: "Figtree",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <OgMark height={40} />
        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            color: OG_COLORS.muted,
            letterSpacing: "0.04em",
          }}
        >
          wpei.me
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: titleFontSize,
            fontWeight: 500,
            color: OG_COLORS.fg,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {article.title}
        </span>
        <span
          style={{
            fontSize: 24,
            color: OG_COLORS.muted,
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          {article.description}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            color: OG_COLORS.secondary,
            letterSpacing: "0.06em",
          }}
        >
          @article
        </span>
        <span style={{ fontSize: 20, color: OG_COLORS.muted }}>
          William Pei
        </span>
      </div>
    </div>,
    { ...size, fonts },
  );
}
