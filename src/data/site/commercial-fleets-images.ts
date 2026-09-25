import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for `/industries/commercial-fleets/`.
 *
 * No approved photography is assigned to this page, so no slot has a `src`. A
 * slot without a file renders the decorative navy fallback in production (no
 * image element, no preload, no label) and a labelled dashed placeholder in
 * local development only. See ImageSlot. To fill a slot: set `src`, `width`,
 * `height`, and confirm `alt`. Reusing the industries hub photos here needs
 * stakeholder approval first.
 *
 * Do not use stock technicians, technician portraits, fleet maps, state
 * outlines, dashboards, platform logos, office environments, hard hats, safety
 * badges, awards, review stars, fake documentation screenshots, or vehicle
 * imagery that implies an unverified fleet type. Any overlay over a photo is
 * black only. Media scrolls with the section and is never pinned.
 *
 * `altGuidance` is a note for whoever supplies the file. It is never rendered.
 */
export const commercialFleetsImages = {
  hero: {
    slotId: "commercial-fleets-hero",
    role: "Decorative hero panel. No photo is required.",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Decorative only. Any future photo must be authentic and approved, with no map, dashboard, portal, or platform logo.",
  },
  rollout: {
    slotId: "commercial-fleets-rollout",
    role: "Optional authentic photo of a commercial fleet yard. The callout works without it.",
    aspectRatio: "3 / 2",
    width: 1800,
    height: 1200,
    fallback: "route",
    alt: "",
    altGuidance:
      "Set descriptive alt text only when an approved photo is supplied. Do not imply a fleet type, site, or scale that is not verified.",
  },
} as const satisfies Record<string, HubImageSlot>;

/**
 * Decorative background for the quote section. Empty alt and hidden from
 * assistive tech. Sits under a black overlay. No file is assigned yet, so the
 * section renders on its navy surface until an approved image is supplied.
 */
export const commercialFleetsQuoteBackground: {
  readonly src?: string;
  readonly width: number;
  readonly height: number;
} = {
  width: 3344,
  height: 1882,
};
