import type { Metadata } from "next";

import { LegalPage } from "@/components/content/LegalPage";
import { termsOfUse } from "@/data/site/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the SB Mobile Installations website. This page has not yet been reviewed by an attorney.",
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return <LegalPage content={termsOfUse} />;
}
