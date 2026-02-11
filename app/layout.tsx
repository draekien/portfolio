import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Technical Lead | William Pei | Portfolio",
  description:
    "William Pei is a technical lead with a passion for building scalable and efficient software solutions.",
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
        </Providers>
      </body>
    </html>
  );
}
