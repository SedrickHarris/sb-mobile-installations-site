/**
 * Image slots for the `/services/` hub.
 *
 * Photography is supplied later. Until `src` is set, a slot renders an
 * intentional decorative navy panel in production (never a blank box, never
 * a fake photo) and a labelled placeholder in local development only. See
 * ImageSlot. To fill a slot: set `src`, `width`, `height`, and a real `alt`.
 *
 * `altGuidance` is a note for whoever supplies the file. It is never
 * rendered. Alt text must describe the photo, avoid keyword stuffing, avoid
 * unverified claims, and contain no em dashes.
 */

export type ImageSlotFallback = "route" | "grid";

export interface HubImageSlot {
  readonly slotId: string;
  readonly role: string;
  /** CSS aspect-ratio value, reserved so the layout never shifts. */
  readonly aspectRatio: string;
  readonly width: number;
  readonly height: number;
  /** Which decorative motif the production fallback draws. */
  readonly fallback: ImageSlotFallback;
  readonly src?: string;
  readonly alt: string;
  readonly altGuidance: string;
}

export const servicesHubImages = {
  hero: {
    slotId: "services-hub-hero",
    role: "Technician working inside a commercial fleet vehicle",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "route",
    alt: "",
    altGuidance:
      "Describe the technician and vehicle actually shown. Must not push the primary CTA below the fold on mobile.",
  },
  capability: {
    slotId: "services-hub-capability",
    role: "Commercial truck or van, or a clean equipment installation detail",
    aspectRatio: "3 / 2",
    width: 1500,
    height: 1000,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Describe the vehicle or equipment detail shown. Use only confirmed vehicle categories.",
  },
  nationwide: {
    slotId: "services-hub-nationwide",
    role: "Abstract route or network graphic, or an operational vehicle image",
    aspectRatio: "16 / 9",
    width: 1600,
    height: 900,
    fallback: "route",
    alt: "",
    altGuidance:
      "Never a state map or any graphic implying state-level coverage. The decorative fallback may ship as the final design.",
  },
} as const satisfies Record<string, HubImageSlot>;
