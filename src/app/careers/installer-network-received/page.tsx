import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { business } from "@/data/site/business";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

const PATHNAME = "/careers/installer-network-received/";

/**
 * Installer Network confirmation page. Noindexed. Named
 * "installer-network-received", not "thank-you/technician-application", per
 * the naming correction recorded in the plan: "Apply" is reserved for a
 * genuine active opening, and none exists.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Installer Network Interest Received",
  description: "Your Installer Network interest has been received.",
  pathname: PATHNAME,
  noIndex: true,
});

export default function InstallerNetworkReceivedPage() {
  return (
    <Section tone="default" density="spacious" width="reading" center>
      <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
        Installer Network Interest Received
      </h1>
      <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
        Thank you for your interest in the SB Mobile Installations Installer
        Network. This does not guarantee contact, an interview, employment,
        a contract, an assignment, a schedule, work volume, or pay.
      </p>
      <p className="mt-6 text-[length:var(--text-body)] text-ink">
        Questions? Call{" "}
        <a
          href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`}
          className="font-semibold text-[var(--color-accent-blue-strong)] underline"
        >
          {business.telephone}
        </a>
        , Monday through Friday, 8:00 AM to 6:00 PM.
      </p>
    </Section>
  );
}
