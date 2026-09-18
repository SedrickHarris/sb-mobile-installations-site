import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { JsonLd } from "@/components/schema/JsonLd";
import { business } from "@/data/site/business";
import { servicesHubContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Services" }];

export const metadata: Metadata = buildPageMetadata({
  title: servicesHubContent.h1,
  description: servicesHubContent.metaDescription,
  pathname: PATHNAME,
});

const SERVICE_LINKS = [
  { label: "Fleet Telematics Installation", href: "/services/fleet-telematics-installation/" },
  { label: "GPS Tracking Installation", href: "/services/gps-tracking-installation/" },
  { label: "ELD Installation", href: "/services/eld-installation/" },
  { label: "Dashcam & Camera Installation", href: "/services/dashcam-camera-installation/" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: servicesHubContent,
          serviceTypes: [...business.serviceTypes],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="services-hub" content={servicesHubContent}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Request an Installation Quote
        </h2>
        <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
          Tell us about your project and we&apos;ll follow up.
        </p>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>

      <Section tone="subtle" width="site">
        <h2 className="text-[length:var(--text-h2)] font-bold text-ink">
          Browse Services
        </h2>
        <div className="mt-8">
          <CardGrid columns={2}>
            {SERVICE_LINKS.map((link) => (
              <Card key={link.href} tone="light" hover>
                <a
                  href={link.href}
                  className="block min-h-11 text-[length:var(--text-h4)] font-semibold text-ink no-underline hover:underline"
                >
                  {link.label}
                </a>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>
    </>
  );
}
