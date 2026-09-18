import type { Metadata } from "next";

import { homepageContent } from "@/data/site/homepage-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

/**
 * Homepage metadata.
 *
 * Title and description are derived from locked content only. No new
 * marketing copy is written here. See 10-on-page-seo-standards.md.
 */
export const homepageMetadata: Metadata = buildPageMetadata({
  title: homepageContent.hero.h1,
  description:
    "SB Mobile Installations is a mobile installation company that provides on-site GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide, and connects independent contractor technicians with installation work across the country.",
  pathname: "/",
});
