import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { fleetRolloutsContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/fleet-rollouts/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Fleet Rollouts" },
];

export const metadata: Metadata = buildPageMetadata({
  title: fleetRolloutsContent.h1,
  description: fleetRolloutsContent.metaDescription,
  pathname: PATHNAME,
});

export default function FleetRolloutsPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: fleetRolloutsContent,
          serviceTypes: ["Fleet management equipment installation"],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="fleet-rollouts" content={fleetRolloutsContent}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Request a Fleet Rollout Quote
        </h2>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>
    </>
  );
}
