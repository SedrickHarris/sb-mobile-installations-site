import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";

/**
 * Generic `WebPage` + `BreadcrumbList` structured data, referencing the
 * shared Organization by @id (never re-declared). Used for every Sprint 2
 * page that does not need its own `Service`: `/industries/` and each
 * industry page (no duplicate `Service`, per the plan's structured-data
 * table), `/coverage/` (no `Service.areaServed` enumeration), `/our-process/`,
 * `/quality-safety/`, `/faq/`, and the `/case-studies/` hub while its
 * registry is empty.
 *
 * No second `WebSite` node - `WebSite` is emitted exactly once, on the
 * homepage.
 */
export function webPageSchema({
  pathname,
  name,
  description,
  breadcrumbs,
}: {
  readonly pathname: string;
  readonly name: string;
  readonly description: string;
  readonly breadcrumbs: readonly BreadcrumbItem[];
}) {
  const url = `${business.url}${pathname}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        about: organizationRef(),
      },
      breadcrumbList(breadcrumbs),
    ],
  };
}
