import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for the `/careers/` Installer Network page.
 *
 * Photography is supplied later. Until `src` is set, each slot renders the
 * decorative navy fallback in production (no `img`, no preload, no label) and
 * a labelled placeholder in local development only.
 *
 * To fill a slot: set `src`, `width`, `height`, and a real `alt`. Set
 * `priorityImage` on the hero only if the approved photo becomes the actual
 * above-the-fold LCP candidate.
 *
 * Photography rules: authentic photos only; no device-brand or competitor
 * logos; no customer information visible; no fake badges; no stock office
 * workers. Photos of identifiable technicians need a recorded release. Alt
 * text describes the photo and contains no dashes or unverified claims.
 * `altGuidance` is a note for the supplier and is never rendered.
 */
export const careersHubImages = {
  hero: {
    slotId: "careers-hub-hero",
    role: "Technician working inside a commercial vehicle",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "route",
    alt: "",
    altGuidance:
      "Show device installation, cable routing, or equipment work in a commercial vehicle. Describe only what is shown.",
  },
  fieldWork: {
    slotId: "careers-hub-field-work",
    role: "Field work in a commercial vehicle environment",
    aspectRatio: "3 / 2",
    width: 1500,
    height: 1000,
    fallback: "grid",
    alt: "",
    altGuidance:
      "A work van, service truck, utility vehicle, or heavy-duty truck. No trailers, no implied nationwide map.",
  },
} as const satisfies Record<string, HubImageSlot>;
