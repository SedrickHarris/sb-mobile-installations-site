import type { Metadata } from "next";
import Link from "next/link";

import { PageBody } from "@/components/content/PageBody";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import { JsonLd } from "@/components/schema/JsonLd";
import { careersHubContent } from "@/data/site/careers-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = "/careers/";
const BREADCRUMBS = [{ label: "Home", href: "/" }, { label: "Careers" }];

export const metadata: Metadata = buildPageMetadata({
  title: careersHubContent.h1,
  description: careersHubContent.metaDescription,
  pathname: PATHNAME,
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: PATHNAME,
          h1: careersHubContent.h1,
          description: careersHubContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="careers-hub" content={careersHubContent} />

      <Section tone="subtle" width="reading" center>
        <CtaButton
          cta={{
            label: "Join the Installer Network",
            href: "/careers/mobile-installation-technician/",
            journey: "recruitment",
            event: "cta_installer_network_click",
          }}
          emphasis="primary"
        />
        <p className="mt-4 text-[length:var(--text-small)] text-ink-muted">
          <Link href="/careers/mobile-installation-technician/" className="underline">
            View the Mobile Installation Technician role
          </Link>
        </p>
      </Section>
    </>
  );
}
