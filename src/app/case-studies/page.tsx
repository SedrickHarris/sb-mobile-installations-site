import { notFound } from "next/navigation";

import { caseStudies } from "@/data/site/case-studies";

/**
 * Case-studies hub. Structural only.
 *
 * `caseStudies` is an empty registry in Sprint 2 (see
 * src/data/site/case-studies.ts - no real, approved case study exists yet).
 * While empty, this route calls `notFound()`: no public listing page, no
 * placeholder, and no "coming soon" UI renders. It resolves to the site's
 * ordinary static 404, the same as any other nonexistent route. This route
 * is excluded from sitemap.ts and from header/footer/primary navigation
 * while empty.
 */
export default function CaseStudiesPage() {
  if (caseStudies.length === 0) {
    notFound();
  }

  // Unreachable while the registry is empty. Kept only so this file type
  // checks cleanly once real entries exist and this branch needs a real
  // listing UI.
  return null;
}
