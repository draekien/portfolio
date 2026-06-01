// Original viewBox: 0 0 79.838 54. Scale to target height via width/height props.
export function OgMark({ height = 40 }: { height?: number }) {
  const width = height * (79.838 / 54);
  return (
    <svg
      role="img"
      aria-label="Logo"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 79.838 54"
    >
      <path
        d="M2055.782,114.819h6.012l23.011,58h-6.112Z"
        transform="translate(-2032.93 -114.819)"
        fill="#f26f21"
        stroke="#f26f21"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M0,27.771H0V21.239l13.175-7.353L0,6.532V0L24.877,13.886,0,27.771Z"
        transform="translate(54.961 0)"
        fill="#f26f21"
        stroke="#f26f21"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M2055.782,114.819h6.012l23.011,58h-6.112Z"
        transform="translate(-2055.782 -114.819)"
        fill="#f26f21"
        stroke="#f26f21"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export const OG_COLORS = {
  bg: "#2a202f",
  fg: "#c4def0",
  primary: "#f26f21",
  secondary: "#9b58a8",
  muted: "#ad9d8d",
  border: "rgba(255,255,255,0.10)",
} as const;

export async function loadFonts() {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const fontsDir = path.join(process.cwd(), "public/fonts");
  const figtree = fs.readFileSync(path.join(fontsDir, "figtree-semibold.ttf"));
  const jetbrains = fs.readFileSync(
    path.join(fontsDir, "jetbrains-mono-medium.ttf"),
  );
  return [
    {
      name: "Figtree",
      data: figtree.buffer as ArrayBuffer,
      weight: 600 as const,
    },
    {
      name: "JetBrains Mono",
      data: jetbrains.buffer as ArrayBuffer,
      weight: 500 as const,
    },
  ];
}
