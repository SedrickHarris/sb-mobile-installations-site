import type { MetadataRoute } from "next";

import { business } from "@/data/site/business";

// Required for output: export. See next.config.ts.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/thank-you/",
          "/careers/installer-network-received/",
          "/careers/application-received/",
        ],
      },
    ],
    sitemap: `${business.url}/sitemap.xml`,
  };
}
