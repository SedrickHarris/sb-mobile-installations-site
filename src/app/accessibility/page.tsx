import type { Metadata } from "next";

import { LegalPage } from "@/components/content/LegalPage";
import { accessibilityStatement } from "@/data/site/legal-content";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for the SB Mobile Installations website. This page has not yet been reviewed by an attorney.",
  alternates: { canonical: "/accessibility/" },
};

export default function Page() {
  return <LegalPage content={accessibilityStatement} />;
}
