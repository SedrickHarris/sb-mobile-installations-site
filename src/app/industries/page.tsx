import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/schema/JsonLd";
import { industriesHubContent } from "@/data/site/industries-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/industries/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Industries" }];

export const metadata: Metadata = buildPageMetadata({
  title: industriesHubContent.h1,
  description: industriesHubContent.metaDescription,
  pathname: PATHNAME,
});

const INDUSTRY_LINKS = [
  { label: "Commercial Fleets", href: "/industries/commercial-fleets/" },
  { label: "Construction Vehicle Fleets", href: "/industries/construction-heavy-equipment/" },
  { label: "Logistics & Delivery Fleets", href: "/industries/logistics-delivery-fleets/" },
  { label: "Field Service Fleets", href: "/industries/field-service-fleets/" },
  {
    label: "Telematics & Technology Providers",
    href: "/industries/telematics-technology-providers/",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: industriesHubContent.h1,
          description: industriesHubContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="industries-hub" content={industriesHubContent} />

      <Section tone="subtle" width="site">
        <h2 className="text-[length:var(--text-h2)] font-bold text-ink">
          Browse Industries
        </h2>
        <div className="mt-8">
          <CardGrid columns={3}>
            {INDUSTRY_LINKS.map((link) => (
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
