import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/metadata/base";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_TYPE } from "@/lib/metadata/page-defaults";

export type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
};

/**
 * Builds a `Metadata` object with canonical URL, Open Graph, Twitter, and
 * robots controls, following the pattern `homepageMetadata` established
 * before this factory existed. Every Sprint 1+ route's `page.tsx` calls this
 * rather than hand-building a `Metadata` object, so canonical/OG/robots
 * behavior stays consistent as routes are added.
 *
 * `noIndex` is used on every thank-you/confirmation route.
 */
export function buildPageMetadata({
  title,
  description,
  pathname,
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
  type = DEFAULT_OG_TYPE,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${pathname}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
