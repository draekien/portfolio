import { ImageResponse } from "next/og";
import { loadFonts, OG_COLORS, OgMark } from "@/lib/opengraph";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadFonts();

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
      {/* Top row */}
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

      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 72,
            fontWeight: 500,
            color: OG_COLORS.fg,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Skills
        </span>
        <span
          style={{
            fontSize: 26,
            color: OG_COLORS.muted,
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          Reusable AI agent skills built on the Agent Skills open standard,
          installable as Claude Code plugins or across 40+ other agents.
        </span>
      </div>

      {/* Bottom row */}
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
          @library
        </span>
        <span
          style={{
            fontSize: 20,
            color: OG_COLORS.muted,
          }}
        >
          William Pei
        </span>
      </div>
    </div>,
    { ...size, fonts },
  );
}
