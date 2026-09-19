import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";
import type { ServicePageContent } from "@/types/service-content";

/**
 * Structured data for `/services/` and `/services/*`.
 *
 * Organization is referenced by @id (not re-declared), plus WebPage, Service,
 * and BreadcrumbList. No second WebSite node; WebSite is emitted exactly
 * once, on the homepage. See 13-schema-markup-plan.md section 58a. No
 * areaServed on the Service (see decision 0005).
 */
export function servicePageSchema({
  pathname,
  content,
  serviceTypes,
  breadcrumbs,
}: {
  readonly pathname: string;
  readonly content: ServicePageContent;
  /**
   * `serviceType` values that directly match this page's visible purpose.
   * Pass an empty array to omit the key when no approved label exists. Never
   * reuse a broader list than the page shows.
   */
  readonly serviceTypes: readonly string[];
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
        name: content.h1,
        description: content.metaDescription,
        about: organizationRef(),
      },
      {
        "@type": "Service",
        name: content.h1,
        ...(serviceTypes.length > 0 ? { serviceType: [...serviceTypes] } : {}),
        provider: organizationRef(),
        /*
          No areaServed, not even Country "United States": nationwide reach is
          visible copy and the /coverage/ page only, until verified coverage
          data supports structured geography.
        */
      },
      breadcrumbList(breadcrumbs),
    ],
  };
}
