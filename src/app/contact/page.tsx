import type { Metadata } from "next";

import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/schema/JsonLd";
import { business } from "@/data/site/business";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { breadcrumbList } from "@/lib/schema/breadcrumbs";
import { organizationRef } from "@/lib/schema/organization";

const PATHNAME = "/contact/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Contact" }];
const H1 = "Contact SB Mobile Installations";
const DESCRIPTION =
  "Request mobile GPS, ELD, and fleet electronics installation service from SB Mobile Installations, or call us directly. Nationwide, on-site installation for fleet, commercial, and construction vehicles.";

export const metadata: Metadata = buildPageMetadata({
  title: H1,
  description: DESCRIPTION,
  pathname: PATHNAME,
});

function contactPageSchema() {
  const url = `${business.url}${PATHNAME}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: H1,
        description: DESCRIPTION,
        about: organizationRef(),
      },
      breadcrumbList(BREADCRUMBS),
    ],
  };
}

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={contactPageSchema()} />
      <Breadcrumbs items={BREADCRUMBS} />

      <Section tone="default" density="spacious" width="reading">
        <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
          {H1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {DESCRIPTION}
        </p>
        <p className="mt-6 text-[length:var(--text-body)] text-ink">
          Call us directly:{" "}
          <a
            href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline"
          >
            {business.telephone}
          </a>
          . Monday through Friday, 8:00 AM to 6:00 PM.
        </p>
      </Section>

      <Section tone="subtle" width="reading">
        <CommercialInquiryForm />
      </Section>
    </>
  );
}
