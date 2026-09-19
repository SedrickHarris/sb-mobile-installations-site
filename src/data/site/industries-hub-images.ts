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
  hero: {
    slotId: "industries-hub-hero",
    role: "Authentic fleet yard or technician-at-work photograph",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "route",
    alt: "",
    altGuidance:
      "Describe the vehicles and work actually shown. Avoid a generic industry collage.",
  },
  answer: {
    slotId: "industries-hub-answer",
    role: "Commercial fleet vehicles parked at a fleet facility",
    aspectRatio: "3344 / 1882",
    width: 3344,
    height: 1882,
    fallback: "grid",
    src: "/images/industries/industries-hero/sb-mobile-installations-industries-hub-commercial-fleet-vehicles.webp",
    alt: "Commercial fleet vehicles parked at a fleet facility",
    altGuidance:
      "Describe only what is shown. No trade branding, no third-party logos, and no vertical implied beyond confirmed categories.",
  },
  capability: {
    slotId: "industries-hub-capability",
    role: "Field installation photograph on a commercial vehicle",
    aspectRatio: "3 / 2",
    width: 1500,
    height: 1000,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Describe the installation work shown. Do not imply an unconfirmed vehicle type or vertical.",
  },
  nationwide: {
    slotId: "industries-hub-nationwide",
    role: "Abstract route or network graphic, or an operational vehicle image",
    aspectRatio: "16 / 9",
    width: 1600,
    height: 900,
    fallback: "route",
    alt: "",
    altGuidance:
      "Never a state map or any graphic implying state-level coverage. The decorative fallback may ship as the final design.",
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
