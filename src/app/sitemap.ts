import type { MetadataRoute } from "next";

import { business } from "@/data/site/business";

// Required for output: export. See next.config.ts.
export const dynamic = "force-static";

/**
 * Static sitemap generator. Includes only routes that exist at build time;
 * append new routes as future sprints land. Thank-you/confirmation routes
 * are noindexed and deliberately excluded here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services/",
    "/services/fleet-telematics-installation/",
    "/services/gps-tracking-installation/",
    "/services/eld-installation/",
    "/services/dashcam-camera-installation/",
    "/contact/",
    "/careers/",
    "/careers/mobile-installation-technician/",
    "/privacy-policy/",
    "/terms/",
    "/accessibility/",
  ];

  return routes.map((route) => ({
    url: `${business.url}${route}`,
    lastModified: new Date(),
  }));
}
