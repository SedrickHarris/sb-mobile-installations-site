import type { Metadata } from "next";

import { PageBody } from "@/components/content/PageBody";
import { InstallerNetworkForm } from "@/components/forms/InstallerNetworkForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { technicianRoleContent } from "@/data/site/careers-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";
import { careersPageSchema } from "@/lib/schema/careers-page";

const PATHNAME = "/careers/mobile-installation-technician/";
const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
  { label: "Mobile Installation Technician" },
];

export const metadata: Metadata = buildPageMetadata({
  title: technicianRoleContent.h1,
  description: technicianRoleContent.metaDescription,
  pathname: PATHNAME,
});

/**
 * JobPosting is deliberately absent here, matching homepage.ts's comment
 * style: no active, genuine job opening exists. This page describes the
 * opt-in, no-guarantee Installer Network pathway, never framed as an
 * application for a current opening. See CLAUDE.md section 5.
 */
export default function MobileInstallationTechnicianPage() {
  return (
    <>
      <JsonLd
        schema={careersPageSchema({
          pathname: PATHNAME,
          h1: technicianRoleContent.h1,
          description: technicianRoleContent.metaDescription,
          breadcrumbs: BREADCRUMBS,
        })}
      />
      <Breadcrumbs items={BREADCRUMBS} />

      <PageBody id="technician-role" content={technicianRoleContent}>
        <h2 className="text-[length:var(--text-h3)] font-bold text-ink">
          Join the Installer Network
        </h2>
        <p className="mt-3 text-[length:var(--text-small)] text-ink-muted">
          This does not guarantee contact, an interview, employment, a
          contract, an assignment, a schedule, work volume, or pay.
        </p>
        <div className="mt-6">
          <InstallerNetworkForm />
        </div>
      </PageBody>
    </>
  );
}
