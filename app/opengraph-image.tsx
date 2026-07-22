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
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: OG_COLORS.fg,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Solution Architect
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: OG_COLORS.primary,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            at InfoTrack.
          </span>
        </div>
        <span
          style={{
            fontSize: 26,
            color: OG_COLORS.muted,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Setting technical direction and developing engineers.
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
          @portfolio
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
