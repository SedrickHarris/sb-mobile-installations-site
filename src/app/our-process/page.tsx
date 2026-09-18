import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { ourProcessContent } from "@/data/site/process-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { webPageSchema } from "@/lib/schema/webpage";

const PATHNAME = "/our-process/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Our Process" }];

export const metadata: Metadata = buildPageMetadata({
  title: ourProcessContent.h1,
  description: ourProcessContent.metaDescription,
  pathname: PATHNAME,
});

export default function OurProcessPage() {
  return (
    <>
      <JsonLd
        schema={webPageSchema({
          pathname: PATHNAME,
          name: ourProcessContent.h1,
          description: ourProcessContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="our-process" content={ourProcessContent} />
    </>
  );
}
