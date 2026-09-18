import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { business } from "@/data/site/business";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

const PATHNAME = "/thank-you/service-request/";

/**
 * Commercial confirmation page. Noindexed, per CLAUDE.md section 6's
 * thank-you route convention and 13-schema-markup-plan.md section 58a.
 * No schema is emitted: confirmation pages carry no WebPage/BreadcrumbList
 * entry in the Sprint 1 schema table beyond the noindex itself.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Request Received",
  description: "Your installation service request has been received.",
  pathname: PATHNAME,
  noIndex: true,
});

export default function ServiceRequestThankYouPage() {
  return (
    <Section tone="default" density="spacious" width="reading" center>
      <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
        Request Received
      </h1>
      <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
        Thank you for reaching out to SB Mobile Installations. We&apos;ve
        received your installation service request and will follow up.
      </p>
      <p className="mt-6 text-[length:var(--text-body)] text-ink">
        Need to reach us sooner? Call{" "}
        <a
          href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`}
          className="font-semibold text-[var(--color-accent-blue-strong)] underline"
        >
          {business.telephone}
        </a>
        , Monday through Friday, 8:00 AM to 6:00 PM.
      </p>
    </Section>
  );
}
