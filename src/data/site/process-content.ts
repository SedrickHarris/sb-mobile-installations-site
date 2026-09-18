import type { InformationalPageContent } from "@/types/service-content";

/**
 * `/our-process/` content.
 *
 * SOURCE-OF-TRUTH FLAG: docs/01-business-source-of-truth.md section 17 lists
 * a ten-step workflow (assignment, guidelines, travel, panel access,
 * installation, functional confirmation, cleanup, data/photo submission,
 * equipment accounting, scheduling communication), but marks it "Inferred
 * from recruiting duties" and explicitly states it is "a strong candidate
 * for customer-facing content after the company confirms" intake process,
 * scheduling process, site-readiness requirements, equipment custody,
 * installation standards, quality-control review, data submission platform,
 * customer acceptance process, issue escalation, and closeout documentation.
 * None of those confirmations exists yet. Section 17.1 confirms exactly one
 * customer-facing process fact: automatic photo documentation delivery.
 *
 * This page is deliberately narrow: it states only the facts confirmed in
 * section 25 (photo documentation, business hours, on-site travel model,
 * project capacity range, nationwide reach, years of experience). It does
 * not present a claimed multi-stage company process, and it uses none of
 * "verification," "quality assurance," "testing," or "closeout" as company
 * process claims, matching the same constraint applied to
 * DeploymentProcessSteps on the homepage. A fuller, stage-by-stage process
 * description remains pending stakeholder confirmation.
 */
export const ourProcessContent: InformationalPageContent = {
  h1: "How SB Mobile Installations Coordinates a Project",
  metaDescription:
    "SB Mobile Installations coordinates on-site GPS, ELD, and fleet electronics installation projects nationwide, with photo documentation delivered automatically on every installation.",
  intro:
    "SB Mobile Installations coordinates project details, schedules on-site installation, and documents completed installation work for fleet, commercial, and construction vehicle customers nationwide.",
  body: [
    "Technicians travel directly to the customer's location to complete installation work; there is no walk-in facility. Installation is coordinated on-site, Monday through Friday, 8:00 AM to 6:00 PM.",
    "Projects range in size from one vehicle to an entire fleet. SB Mobile Installations has been in business since 2011, coordinating installation projects for fleet, commercial, and construction vehicle customers.",
    "Every installation is photo documented, and you'll receive that documentation automatically, without needing to request it.",
    "A more detailed, stage-by-stage description of intake, scheduling, and closeout is pending further confirmation and is not published here until it is available.",
  ],
  faq: [
    {
      question: "Do I need to bring my vehicles to a shop location?",
      answer:
        "No. SB Mobile Installations technicians travel to the customer's location. There is no walk-in facility.",
    },
    {
      question: "Will I receive documentation once installation is complete?",
      answer:
        "Yes. Every installation is photo documented, and you'll receive that documentation automatically.",
    },
  ],
};
