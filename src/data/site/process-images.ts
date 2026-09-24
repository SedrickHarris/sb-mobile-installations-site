import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for `/our-process/`.
 *
 * No approved photography exists for this page, so no slot has a `src`. A slot
 * without a file renders the decorative navy fallback in production (no image
 * element, no preload, no label) and a labelled dashed placeholder in local
 * development only. See ImageSlot. To fill a slot: set `src`, `width`,
 * `height`, and confirm `alt`. Files go in `public/images/brand/our-process/`,
 * named `sb-mobile-installations-our-process-<subject>-<ratio>.webp`.
 *
 * Do not use generic stock, and no map, dashboard, dispatch board, fleet
 * tracker, checklist, report, or portal imagery. Those imply scheduling,
 * tracking, inspection, or workflow systems that are not verified. Any overlay
 * placed over a photo is black only (`bg-black/55`). Media scrolls with the
 * section and is never pinned.
 *
 * The hero uses `processHeroBackground` below, not a slot.
 * The installer handoff is text only, so it has no slot.
 *
 * `altGuidance` is a note for whoever supplies the file. It is never rendered.
 */
/**
 * Decorative full-width hero background. Empty alt and hidden from assistive
 * tech: the hero text carries the meaning. Sits under a black overlay.
 */
export const processHeroBackground = {
  src: "/images/brand/our-process/hero/sb-mobile-installations-our-process-commercial-fleet-installation-hero-background-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

/**
 * Decorative background for the quote section. Empty alt and hidden from
 * assistive tech. Sits under a black overlay.
 */
export const processQuoteBackground = {
  src: "/images/brand/our-process/sb-mobile-installations-our-process-installation-quote-commercial-fleet-background-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

export const processImages = {
  vehicleContext: {
    slotId: "process-vehicle-context",
    role: "Authentic photo of commercial vehicles of different types, such as a work van or service truck",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    src: "/images/brand/our-process/sb-mobile-installations-our-process-commercial-vehicle-types-fleet-context-4x3.webp",
    // The vehicles sit in the middle band of the frame; keep that band in view if cropped.
    objectPosition: "center 45%",
    alt: "A white cargo van, a white service truck with a utility body, and a dark gray SUV parked side by side outside a commercial building with garage doors",
    altGuidance:
      "Describe only what is shown. Approved vehicle types only, no device-brand logos, and no coverage, market, or every-hardware-in-every-vehicle implication.",
  },
  documentation: {
    slotId: "process-documentation",
    role: "Authentic approved photo of an installation, only if approved for documentation context",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    src: "/images/brand/our-process/sb-mobile-installations-our-process-fleet-installation-photo-documentation-4x3.webp",
    objectPosition: "center",
    alt: "Hands in a navy work shirt holding a smartphone to photograph a small black device mounted under the dashboard of a commercial vehicle",
    altGuidance:
      "Describe only what is shown. Must not resemble a report, portal, work order, inspection record, checklist, or customer dashboard. No photo counts or before-and-after framing.",
  },
} as const satisfies Record<string, HubImageSlot>;
