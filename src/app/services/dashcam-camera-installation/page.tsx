import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { dashcamCameraInstallationContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/dashcam-camera-installation/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Dashcam & Camera Installation" },
];

export const metadata: Metadata = buildPageMetadata({
  title: dashcamCameraInstallationContent.h1,
  description: dashcamCameraInstallationContent.metaDescription,
  pathname: PATHNAME,
});

export default function DashcamCameraInstallationPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: dashcamCameraInstallationContent,
          serviceTypes: ["Fleet dashcam installation"],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="dashcam-camera-installation" content={dashcamCameraInstallationContent}>
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
