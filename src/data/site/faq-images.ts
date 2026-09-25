import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for `/faq/`.
 *
 * No approved photography exists for this page, so no slot has a `src`. A slot
 * without a file renders the decorative navy fallback in production (no image
 * element, no preload, no label) and a labelled dashed placeholder in local
 * development only. See ImageSlot. To fill a slot: set `src`, `width`,
 * `height`, and confirm `alt`.
 *
 * Do not use stock technicians, technician portraits, fleet maps, state
 * outlines, dashboards, platform logos, office environments, hard hats, safety
 * badges, awards, review stars, or fake documentation screenshots. Any overlay
 * over a photo is black only. Media scrolls with the section and is never
 * pinned.
 *
 * `altGuidance` is a note for whoever supplies the file. It is never rendered.
 */
export const faqImages = {
  hero: {
    slotId: "faq-hero",
    role: "Decorative hero panel. No photo is required.",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Decorative only. Any future photo must be authentic and approved, with no map, dashboard, portal, or platform logo.",
  },
} as const satisfies Record<string, HubImageSlot>;
