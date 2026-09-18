import type { MetadataRoute } from "next";

import { business } from "@/data/site/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you/", "/careers/installer-network-received/"],
      },
    ],
    sitemap: `${business.url}/sitemap.xml`,
  };
}
