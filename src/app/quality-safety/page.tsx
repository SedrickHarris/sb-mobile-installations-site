import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { qualitySafetyContent } from "@/data/site/quality-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/quality-safety/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Quality & Safety" }];

export const metadata: Metadata = buildPageMetadata({
  title: qualitySafetyContent.h1,
  description: qualitySafetyContent.metaDescription,
  pathname: PATHNAME,
});

export default function QualitySafetyPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: qualitySafetyContent.h1,
          description: qualitySafetyContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="quality-safety" content={qualitySafetyContent} />
    </>
  );
}
