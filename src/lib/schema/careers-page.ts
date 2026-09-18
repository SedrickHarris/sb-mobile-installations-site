import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";

/**
 * Structured data for `/careers/` and `/careers/mobile-installation-technician/`.
 *
 * Organization reference, WebPage, and BreadcrumbList only.
 *
 * JobPosting is deliberately absent and is never added here: no active,
 * genuine job opening exists. The Installer Network is an opt-in,
 * no-guarantee pathway, never framed as an active opening. See CLAUDE.md
 * section 5 and 13-schema-markup-plan.md section 58a.
 */
export function careersPageSchema({
  pathname,
  h1,
  description,
  breadcrumbs,
}: {
  readonly pathname: string;
  readonly h1: string;
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
        name: h1,
        description,
        about: organizationRef(),
      },
      breadcrumbList(breadcrumbs),
    ],
  };
}
