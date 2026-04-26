import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "https://www.wpei.me",
    name: "Portfolio - William Pei",
    short_name: "Portfolio",
    description:
      "A portfolio website showcasing William Pei's work and projects.",
    categories: ["portfolio", "developer", "web"],
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
