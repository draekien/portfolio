import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Technical Lead | William Pei | Portfolio",
  description:
    "William Pei is a Technical Lead at InfoTrack. He sets technical direction and develops the engineers who execute it into the ones who define it next.",
  openGraph: {
    siteName: "William Pei",
    locale: "en_AU",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
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
          <LayoutHeader />
          <main className="p-4">{children}</main>
          <DevTools />
        </Providers>
      </body>
    </html>
  );
}
