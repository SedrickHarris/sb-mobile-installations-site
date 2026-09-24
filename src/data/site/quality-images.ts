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
export const qualityImages = {
  hero: {
    slotId: "quality-hero",
    role: "Authentic approved photo of a mobile installation at a customer location",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Describe only what is shown. No safety, inspection, or certification implication and no device-brand logos.",
  },
  projectLocation: {
    slotId: "quality-project-location",
    role: "Authentic approved photo of an on-site installation at a customer location",
    aspectRatio: "3 / 2",
    width: 3318,
    height: 2212,
    fallback: "route",
    alt: "",
    altGuidance:
      "Describe only what is shown. Never a map, an office, a state or city identifier, or any graphic implying coverage.",
  },
  vehicleContext: {
    slotId: "quality-vehicle-context",
    role: "Optional photo of an approved vehicle type (work van, service truck, utility, heavy-duty truck, fleet, commercial, or construction vehicle)",
    aspectRatio: "3 / 2",
    width: 3318,
    height: 2212,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Show only approved vehicle types. Rendered with omitFallback, so nothing appears until a real file is set.",
  },
} as const satisfies Record<string, HubImageSlot>;
