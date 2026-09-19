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
  answer: {
    slotId: "services-hub-answer",
    role: "Commercial vehicle cab with fleet technology equipment installed",
    aspectRatio: "3318 / 1896",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/services/services-hub-page/services-hub/sb-mobile-installations-services-hub-fleet-technology-cab-interior.webp",
    alt: "Commercial vehicle cab with a dashcam and dash-mounted display installed",
    altGuidance:
      "Describe only what is shown. No device-brand logos and no coverage or market claim.",
  },
  intake: {
    slotId: "services-hub-intake",
    role: "Fleet management equipment being installed on a commercial vehicle",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    src: "/images/services/sb-mobile-installations-fleet-management-equipment-installation-commercial-vehicle.webp",
    alt: "Fleet management equipment installation on a commercial vehicle",
    altGuidance:
      "Shows a technician handling mounted equipment at the open rear of a white van, with fleet trucks behind. Describe only what is shown. No device-brand logos and no coverage or market claim.",
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
