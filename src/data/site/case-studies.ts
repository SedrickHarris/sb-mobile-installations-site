import type { CaseStudyContent } from "@/types/service-content";

/**
 * Case-study registry. Empty by design.
 *
 * docs/01-business-source-of-truth.md section 22: "No customer logos,
 * testimonials, case studies, project statistics, installation counts,
 * fleet sizes, completion rates, geographic counts, or quantified outcomes
 * are currently approved for publication." Nothing may be added here
 * without a real, approved, customer-permissioned project write-up.
 *
 * The hub route (src/app/case-studies/page.tsx) calls `notFound()` while
 * this array is empty - no placeholder or "coming soon" UI renders. This
 * route is excluded from sitemap.ts and from header/footer/primary
 * navigation while empty. See CLAUDE.md section 3 and the plan's
 * "structural only" scoping for /case-studies/.
 *
 * BUILD CONSTRAINT: `src/app/case-studies/[slug]/page.tsx` (the per-entry
 * template) does not exist yet. Next's static export (`output: "export"`)
 * hard-rejects a dynamic route segment whose `generateStaticParams()`
 * yields zero paths - confirmed by testing: the build fails with
 * "is missing generateStaticParams()" for a `[slug]` route reading this
 * empty array, even though the export is present and correct, while the
 * structurally identical `/resources/[slug]/` route (which has real
 * entries) builds fine. A dynamic template that can only ever produce zero
 * pages cannot exist as a buildable file under this constraint. Add
 * `src/app/case-studies/[slug]/page.tsx` (mirroring the shape of
 * src/app/resources/[slug]/page.tsx, reading from `caseStudies`) in the
 * same commit as the first real, approved case-study entry.
 */
export const caseStudies: readonly CaseStudyContent[] = [];
