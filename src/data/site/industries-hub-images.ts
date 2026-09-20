import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for the `/industries/` hub.
 *
 * Photography is supplied later. Until `src` is set:
 * - the hero, capability, and nationwide slots render the decorative navy
 *   fallback in production (no `img`, no preload, no label) and a labelled
 *   placeholder in local development only;
 * - the five card slots render nothing at all (cards stay text-led).
 *
 * To fill a slot: set `src`, `width`, `height`, and a real `alt`. Set
 * `priorityImage` on the hero only if the approved photo becomes the actual
 * above-the-fold LCP candidate.
 *
 * Photography rules: authentic photos only, one consistent crop across the
 * cards, no branded uniforms, no fake trade branding, no SaaS dashboards, and
 * nothing implying a vertical that is not confirmed. `altGuidance` is a note
 * for the supplier and is never rendered. Alt text describes the photo and
 * contains no dashes or unverified claims.
 */
export const industriesHubImages = {
  answer: {
    slotId: "industries-hub-answer",
    role: "Commercial fleet vehicles parked at a fleet facility",
    aspectRatio: "3344 / 1882",
    width: 3344,
    height: 1882,
    fallback: "grid",
    src: "/images/industries/industries-hub-page/sb-mobile-installations-industries-hub-commercial-fleet-staging-area.webp",
    alt: "Commercial fleet vehicles parked at a fleet facility",
    altGuidance:
      "Describe only what is shown. No trade branding, no third-party logos, and no vertical implied beyond confirmed categories.",
  },
  capability: {
    slotId: "industries-hub-capability",
    role: "Commercial vans and trucks staged at a fleet facility",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/industries/industries-hub-page/sb-mobile-installations-planning-commercial-fleet-installation-projects.webp",
    alt: "Commercial vans and trucks staged outside a fleet facility",
    altGuidance:
      "Describe only what is shown. No trade branding, no third-party logos, no readable text, and no geographic claim.",
  },
  intake: {
    slotId: "industries-hub-intake",
    role: "Commercial vans and trucks arranged in an organized fleet staging area",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/industries/industries-hub-page/sb-mobile-installations-project-details-installation-planning-fleet-staging.webp",
    alt: "Commercial vans and trucks arranged in an organized fleet staging area",
    altGuidance:
      "Describe only what is shown. No trade branding, no third-party logos, no readable text, and no geographic claim.",
  },
  nationwide: {
    slotId: "industries-hub-nationwide",
    role: "Commercial trucks and a van staged in a fleet yard at dusk",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "route",
    src: "/images/industries/industries-hub-page/sb-mobile-installations-nationwide-mobile-installation-support-commercial-fleet.webp",
    alt: "Commercial trucks and a van staged in a fleet yard at dusk",
    altGuidance:
      "Describe only what is shown. Never a map or any graphic implying state-level coverage, and no city or state identifiers.",
  },
  cardCommercial: {
    slotId: "industries-card-commercial",
    role: "Commercial fleet vehicles in a work yard",
    aspectRatio: "4 / 3",
    width: 1200,
    height: 900,
    fallback: "grid",
    alt: "",
    altGuidance: "Same crop and treatment as the other four card images.",
  },
  cardConstruction: {
    slotId: "industries-card-construction",
    role: "Construction vehicle in a work environment",
    aspectRatio: "4 / 3",
    width: 1200,
    height: 900,
    fallback: "grid",
    alt: "",
    altGuidance:
      "A construction vehicle only. Do not show non-vehicle heavy equipment being serviced.",
  },
  cardLogistics: {
    slotId: "industries-card-logistics",
    role: "Delivery or heavy-duty commercial vehicle in a depot setting",
    aspectRatio: "4 / 3",
    width: 1200,
    height: 900,
    fallback: "grid",
    alt: "",
    altGuidance: "No branded delivery uniforms or third-party logos.",
  },
  cardFieldService: {
    slotId: "industries-card-field-service",
    role: "Work van or service truck",
    aspectRatio: "4 / 3",
    width: 1200,
    height: 900,
    fallback: "grid",
    alt: "",
    altGuidance: "No trade branding (HVAC, plumbing, and similar).",
  },
  cardTechnology: {
    slotId: "industries-card-technology",
    role: "Technician, device, and vehicle context",
    aspectRatio: "4 / 3",
    width: 1200,
    height: 900,
    fallback: "grid",
    alt: "",
    altGuidance: "Not a software dashboard or platform screenshot.",
  },
} as const satisfies Record<string, HubImageSlot>;
