import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { business } from "@/data/site/business";
import { fleetTelematicsInstallationContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/fleet-telematics-installation/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Fleet Telematics Installation" },
];

export const metadata: Metadata = buildPageMetadata({
  title: fleetTelematicsInstallationContent.h1,
  description: fleetTelematicsInstallationContent.metaDescription,
  pathname: PATHNAME,
});

export default function FleetTelematicsInstallationPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: fleetTelematicsInstallationContent,
          serviceTypes: [...business.serviceTypes],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="fleet-telematics-installation" content={fleetTelematicsInstallationContent}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Request an Installation Quote
        </h2>
        <div className="mt-6">
          <CommercialInquiryForm />
        </div>
      </PageBody>
    </>
  );
}
