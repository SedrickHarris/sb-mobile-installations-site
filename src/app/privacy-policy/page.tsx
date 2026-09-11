import type { Metadata } from "next";

import { LegalPage } from "@/components/content/LegalPage";
import { privacyPolicy } from "@/data/site/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the SB Mobile Installations website. This page has not yet been reviewed by an attorney.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return <LegalPage content={privacyPolicy} />;
}
