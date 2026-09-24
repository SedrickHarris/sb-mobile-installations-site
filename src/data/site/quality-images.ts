import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for `/quality-safety/`.
 *
 * No approved photography exists for this page, so no slot has a `src`. A slot
 * without a file renders the decorative navy fallback in production (no image
 * element, no preload, no label) and a labelled dashed placeholder in local
 * development only. See ImageSlot. To fill a slot: set `src`, `width`,
 * `height`, and confirm `alt`.
 *
 * Do not use generic stock: no PPE, safety meetings, dashboards, warehouses,
 * fleet maps, office workers, or branded hardware screens. Those imply
 * safety systems, operations, or locations that are not verified. Any overlay
 * placed over a photo is black only (`bg-black/55`).
 *
 * `altGuidance` is a note for whoever supplies the file. It is never rendered.
 */
/**
 * Decorative full-width hero background. Empty alt and hidden from assistive
 * tech: the hero text carries the meaning. Sits under a black overlay.
 */
export const qualityHeroBackground = {
  src: "/images/brand/quality-safety/hero/sb-mobile-installations-quality-safety-fleet-electronics-installation-documentation-hero-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

/**
 * Decorative background for the quote section. Empty alt and hidden from
 * assistive tech. Sits under a black overlay. The file lives in
 * brand/quality-safety/, one level above the hero folder.
 */
export const qualityQuoteBackground = {
  src: "/images/brand/quality-safety/sb-mobile-installations-quality-safety-installation-quote-fleet-background-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

export const qualityImages = {
  projectLocation: {
    slotId: "quality-project-location",
    role: "Authentic approved photo of an on-site installation at a customer location",
    aspectRatio: "4 / 3",
    width: 3344,
    height: 1882,
    fallback: "route",
    src: qualityHeroBackground.src,
    // The left half of the photo is an empty truck door; crop toward the technician.
    objectPosition: "85% center",
    alt: "Technician in a dark cap and navy work shirt kneeling at the open door of a commercial truck cab, connecting equipment to wiring under the dashboard",
    altGuidance:
      "Describe only what is shown. Never a map, an office, a state or city identifier, or any graphic implying coverage.",
  },
  vehicleContext: {
    slotId: "quality-vehicle-context",
    role: "Commercial vehicles of different types parked outside a commercial building",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    // The file sits in brand/quality-safety/, one level above the hero folder.
    src: "/images/brand/quality-safety/sb-mobile-installations-quality-safety-commercial-fleet-vehicle-types-4x3.webp",
    // The vehicles sit in the middle band of the frame; keep that band in view if cropped.
    objectPosition: "center 60%",
    alt: "A white cargo van, a white service truck with a utility body, and a navy heavy-duty truck parked side by side outside a commercial building",
    altGuidance:
      "Describe only what is shown. Approved vehicle types only, no device-brand logos, and no coverage or market claim.",
  },
} as const satisfies Record<string, HubImageSlot>;
