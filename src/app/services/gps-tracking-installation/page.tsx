import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { gpsTrackingInstallationContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/gps-tracking-installation/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "GPS Tracking Installation" },
];

export const metadata: Metadata = buildPageMetadata({
  title: gpsTrackingInstallationContent.h1,
  description: gpsTrackingInstallationContent.metaDescription,
  pathname: PATHNAME,
});

export default function GpsTrackingInstallationPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: gpsTrackingInstallationContent,
          serviceTypes: ["GPS tracking installation"],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="gps-tracking-installation" content={gpsTrackingInstallationContent}>
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
