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
 * The installer handoff is text only, so it has no slot.
 *
 * `altGuidance` is a note for whoever supplies the file. It is never rendered.
 */
export const processImages = {
  hero: {
    slotId: "process-hero",
    role: "Decorative hero visual. Abstract linework or form-field shapes until an authentic approved photo exists",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "route",
    alt: "",
    altGuidance:
      "Decorative. Keep alt empty unless an authentic photo is supplied, then describe only what is shown. Never a map, schedule, dispatch, tracking, or completion graphic.",
  },
  vehicleContext: {
    slotId: "process-vehicle-context",
    role: "Authentic photo of commercial vehicles of different types, such as a work van or service truck",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
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
    alt: "",
    altGuidance:
      "Describe only what is shown. Must not resemble a report, portal, work order, inspection record, checklist, or customer dashboard. No photo counts or before-and-after framing.",
  },
} as const satisfies Record<string, HubImageSlot>;
