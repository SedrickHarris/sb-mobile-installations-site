import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { coverage } from "@/data/commercial/coverage";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/coverage/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Coverage" }];

export const metadata: Metadata = buildPageMetadata({
  title: coverage.nationwide.h1,
  description: coverage.nationwide.metaDescription,
  pathname: PATHNAME,
});

/**
 * The single canonical nationwide coverage page (Tier 0 of the future geo
 * roadmap). No `/coverage/nationwide/` is created - see
 * src/data/commercial/coverage.ts. No region/state/metro links render here;
 * `coverage.regions`/`states`/`metros` are empty in Sprint 2, so nothing is
 * read from them. Uses `webPageSchema`, not `servicePageSchema`: no
 * `Service.areaServed` state enumeration is emitted for this page.
 *
 * Reuses `CommercialInquiryForm` as-is rather than a coverage-specific
 * variant: its existing "project location(s)" free-text field already
 * captures multi-location/multi-state detail, so a separate form
 * architecture was judged unnecessary scope for Sprint 2. See the Sprint 2
 * build report's judgment-call note.
 */
export default function CoveragePage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: coverage.nationwide.h1,
          description: coverage.nationwide.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="coverage" content={coverage.nationwide}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Start a Nationwide Installation Project
        </h2>
        <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
          Tell us about your project, including locations involved, and
          we&apos;ll follow up.
        </p>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>
    </>
  );
}
