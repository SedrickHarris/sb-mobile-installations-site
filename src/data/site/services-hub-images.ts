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
    role: "Commercial fleet vehicles staged at a fleet facility for an on-site installation project",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    src: "/images/services/services-hub/sb-mobile-installations-services-hub-commercial-vehicle-installation-support.webp",
    alt: "Commercial fleet vehicles staged for an on-site installation project",
    altGuidance:
      "Describe only what is shown. Use only confirmed vehicle categories, and make no coverage or market claim.",
  },
  answer: {
    slotId: "services-hub-answer",
    role: "Commercial vehicle cab with fleet technology equipment installed",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    src: "/images/services/services-hub/sb-mobile-installations-services-hub-fleet-technology-cab-interior-v2.webp",
    alt: "Commercial vehicle cab with a dashcam and dash-mounted display installed",
    altGuidance:
      "Describe only what is shown. No device-brand logos and no coverage or market claim.",
  },
  intake: {
    slotId: "services-hub-intake",
    role: "Fleet equipment and cabling organized in a service van for an installation project",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/services/services-hub/sb-mobile-installations-installation-request-fleet-equipment-preparation.webp",
    alt: "Fleet tracking and camera equipment with cabling laid out in a service van",
    altGuidance:
      "Describe only what is shown. No device-brand logos and no coverage or market claim.",
  },
  nationwide: {
    slotId: "services-hub-nationwide",
    role: "Commercial fleet vehicles parked at a commercial facility",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "route",
    src: "/images/services/services-hub/sb-mobile-installations-on-site-fleet-projects-nationwide-commercial-vehicles.webp",
    alt: "Commercial fleet vehicles parked outside a commercial facility",
    altGuidance:
      "Describe only what is shown. Never a state map or any graphic implying state-level coverage, and no city or state identifiers.",
  },
} as const satisfies Record<string, HubImageSlot>;
