import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "SB Mobile Installations",
    template: "%s | SB Mobile Installations",
  },
  /*
    Icons are built from sb-mobile-installations-monogram-white.png, the clean
    single-color export, composited on a solid brand-red tile. The brand kit
    assigns the monogram to favicon use.

    The file named favicon-512 in the brand kit is not used. It is 512x202, not
    square, and is one of the lossy exports carrying 176 shades of a one-color
    mark.

    The mark is 2.54:1 with no baked-in clear space, so squaring it leaves the
    glyph at a third of the tile height. It resolves from 32px up. At 16px it
    is not legible, which no color or crop choice fixes. See section 4.3 of
    21-design-system.md.
  */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

/**
 * Root layout.
 *
 * The skip link is the first focusable element on every page, ahead of the
 * header, so keyboard users can bypass navigation. It targets the main
 * landmark this layout renders, so every route has the target.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
