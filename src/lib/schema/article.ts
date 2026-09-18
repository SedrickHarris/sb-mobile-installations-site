import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";

/**
 * `Article` + `WebPage` + `BreadcrumbList` structured data for `/resources/*`
 * articles, per the plan's Sprint 2 structured-data table.
 *
 * No `datePublished`/`dateModified` is emitted: no publish date is confirmed
 * for this content, and an invented date is a structured-data accuracy
 * problem, not a convenience. Author is the shared Organization, not a named
 * person (none is confirmed).
 */
export function articleSchema({
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
      {
        "@type": "Article",
        headline: name,
        description,
        author: organizationRef(),
        publisher: organizationRef(),
      },
      breadcrumbList(breadcrumbs),
    ],
  };
}
