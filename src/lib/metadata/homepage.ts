import type { Metadata } from "next";

import { business } from "@/data/site/business";
import { homepageContent } from "@/data/site/homepage-content";

/**
 * Homepage metadata.
 *
 * Title and description are derived from locked content only. No new
 * marketing copy is written here. See 10-on-page-seo-standards.md.
 */
export const homepageMetadata: Metadata = {
  metadataBase: new URL(business.url),
  // Derived from the hero H1.
  title: homepageContent.hero.h1,
  // Derived from the Direct Answer Block, trimmed at a sentence boundary.
  description:
    "SB Mobile Installations is a mobile installation company that provides on-site GPS, ELD, and fleet electronics installation for commercial and construction vehicles nationwide, and connects independent contractor technicians with installation work across the country.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: business.name,
    title: homepageContent.hero.h1,
    description: homepageContent.directAnswer.body,
  },
  robots: { index: true, follow: true },
};
