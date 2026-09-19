import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";
import type { ServicePageContent } from "@/types/service-content";

/**
 * The single umbrella `serviceType` for broad overview pages: the homepage and
 * the services hub. Individual categories stay visible cards and links; only
 * the individual service pages carry a narrow, page-specific `serviceType`.
 */
export const UMBRELLA_SERVICE_TYPE =
  "Mobile fleet technology installation services";

/**
 * Structured data for `/services/` and `/services/*`.
 *
 * Organization is referenced by @id (not re-declared), plus WebPage, Service,
 * and BreadcrumbList. No second WebSite node; WebSite is emitted exactly
 * once, on the homepage. See 13-schema-markup-plan.md section 58a. No
 * areaServed and no hoursAvailable on the Service (see decision 0005).
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
   * `serviceType` that directly matches this page's visible purpose: the
   * umbrella string on the hub, or a short narrow list on a service page.
   * Pass an empty array to omit the key when no approved label exists. Never
   * reuse a broader list than the page shows.
   */
  readonly serviceTypes: string | readonly string[];
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
        ...(typeof serviceTypes === "string"
          ? { serviceType: serviceTypes }
          : serviceTypes.length > 0
            ? { serviceType: [...serviceTypes] }
            : {}),
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
