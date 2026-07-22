import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundFx } from "@/components/background-fx";
import { DevTools } from "@/components/dev-tools";
import { LayoutHeader } from "@/components/layout-header";
import { Providers } from "@/components/providers";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wpei.me"),
  title: "Solution Architect | William Pei | Portfolio",
  description:
    "William Pei is a Solution Architect at InfoTrack. He designs the systems teams build on and develops the engineers who execute the direction into the ones who define it next.",
  openGraph: {
    siteName: "William Pei",
    locale: "en_AU",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          <BackgroundFx />
          <div className="relative z-[1]">
            <LayoutHeader />
            <main className="p-4">{children}</main>
            <DevTools />
          </div>
        </Providers>
      </body>
    </html>
  );
}
