import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { CommercialInquiryForm } from "@/components/forms/CommercialInquiryForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { eldInstallationContent } from "@/data/site/services-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { servicePageSchema } from "@/lib/schema/service-page";

const PATHNAME = "/services/eld-installation/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "ELD Installation" },
];

export const metadata: Metadata = buildPageMetadata({
  title: eldInstallationContent.h1,
  description: eldInstallationContent.metaDescription,
  pathname: PATHNAME,
});

export default function EldInstallationPage() {
  return (
    <>
      <JsonLd
        schema={servicePageSchema({
          pathname: PATHNAME,
          content: eldInstallationContent,
          serviceTypes: ["ELD installation", "AOBRD installation"],
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="eld-installation" content={eldInstallationContent}>
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
