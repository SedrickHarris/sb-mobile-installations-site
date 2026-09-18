import type { InformationalPageContent } from "@/types/service-content";

/**
 * `/quality-safety/` content.
 *
 * SOURCE-OF-TRUTH FLAG: this page is deliberately short. docs/01 section 21
 * states "No company-wide safety program, regulatory compliance statement,
 * insurance coverage, bonding status, or formal installation standard is
 * currently approved," and section 16.1 is a hard client decision: never
 * publish certifications, licenses, insurance details, or "coming soon"
 * placeholders for them, and never treat their absence as a gap to fill.
 * Section 18 lists an extensive "do not claim" list (guaranteed quality,
 * zero-defect installation, formal SLA, certified quality-management system,
 * uniform technician standards, etc.).
 *
 * The only confirmed content available for this page is the "Technician
 * experience" approved wording in section 25 (vehicle electrical systems,
 * mechanical access, approved connection procedures, equipment testing,
 * installation documentation) and the confirmed photo-documentation
 * deliverable (section 17.1). This page states only those two things. It
 * does not mention certifications or insurance at all, per section 16.1 -
 * their absence is a settled client decision, not a gap this page should
 * call attention to.
 */
export const qualitySafetyContent: InformationalPageContent = {
  h1: "Installation Standards and Documentation",
  metaDescription:
    "SB Mobile Installations' technicians work with vehicle electrical systems, approved connection procedures, and equipment testing, with photo documentation delivered automatically on every installation.",
  intro:
    "Installation work at SB Mobile Installations requires knowledge of vehicle electrical systems, mechanical access, approved connection procedures, equipment testing, and installation documentation.",
  body: [
    "Every installation is photo documented, and you'll receive that documentation automatically, without needing to request it.",
    "SB Mobile Installations has been in business since 2011, installing GPS, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles.",
  ],
};
