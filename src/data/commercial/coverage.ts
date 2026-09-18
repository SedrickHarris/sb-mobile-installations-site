import type { CoverageData } from "@/types/content";

/**
 * Reusable data model for coverage content, current and future.
 *
 * `nationwide` is the only populated key in Sprint 2 - it is the single
 * canonical `/coverage/` page (Tier 0 of the roadmap in the approved plan).
 * `regions`, `states`, and `metros` stay empty objects until Sprint 3+ meets
 * the plan's evidence-gating rubric (existing work/relationships, technician
 * capacity, fleet density, search/lead demand, service relevance, unique
 * proof availability). Route generation reads only populated keys, so these
 * empty objects publish zero routes - see src/app/coverage/ (Sprint 3+ will
 * add src/app/coverage/[state]/ etc. reading from `states`).
 *
 * Every claim below is gated against docs/_claims-inventory.md and
 * docs/01-business-source-of-truth.md section 25 (approved factual wording).
 * No `Service.areaServed` state enumeration is derived from this data in
 * Sprint 2 - see src/lib/schema/webpage.ts, used (not servicePageSchema) for
 * `/coverage/`.
 */
export const coverage = {
  nationwide: {
    h1: "Nationwide Mobile Fleet Installation Services",
    metaDescription:
      "SB Mobile Installations coordinates GPS, ELD, and fleet electronics installation projects nationwide, with technicians traveling directly to your location, one vehicle or an entire fleet.",
    intro:
      "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location. Technicians travel directly to each project site rather than working from a walk-in facility.",
    body: [
      "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles, with technicians traveling directly to your location nationwide.",
      "Project size ranges from one vehicle to an entire fleet. Project size describes capacity, not guaranteed reach into a specific city or state, and this page does not list individual states, metros, or cities as separately confirmed service areas.",
      "Installation is coordinated on-site, Monday through Friday, 8:00 AM to 6:00 PM. Every installation is photo documented, and you'll receive that documentation automatically.",
      "SB Mobile Installations has been in business since 2011, coordinating projects for fleet, commercial, and construction vehicle customers.",
    ],
    faq: [
      {
        question: "Do you serve every state and city?",
        answer:
          "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location. This page describes reach, not a guarantee of same-day or universal availability in every specific city or state.",
      },
      {
        question: "Can you handle a multi-location or multi-vehicle project?",
        answer:
          "Yes. SB Mobile Installations coordinates installation projects of any size, from one vehicle to an entire fleet, with technicians traveling directly to each location.",
      },
      {
        question: "How do I start a nationwide installation project?",
        answer:
          "Share your equipment needs, vehicle count, and project locations using the form on this page or the general contact page, and SB Mobile Installations will follow up to coordinate scheduling.",
      },
    ],
  },
  // Sprint 3+, gated on the plan's per-state scoring rubric (existing
  // work/relationships 30%, technician/network availability 20%, fleet
  // density 15%, search/lead demand 15%, service relevance 10%, unique
  // proof availability 10%; publish only at >= 70/100). Empty until then.
  regions: {},
  states: {},
  // Sprint 4+, gated on a proven customer/job footprint and technician
  // capacity in that metro. Empty until then.
  metros: {},
} satisfies CoverageData;
