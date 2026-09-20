import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Approved hero background video and its static poster for `/coverage/`.
 *
 * The poster is the same frame composition as the video and is the fallback
 * for reduced motion, blocked autoplay, and load failure. Both are decorative:
 * no readable text, map, pin, logo, or place label. The poster is a 1920 px
 * WebP made from the reviewed still; the video always plays muted.
 */
export const coverageHeroVideo = {
  src: "/images/coverage/coverage-hero/sb-mobile-installations-coverage-nationwide-fleet-support-hero.mp4",
  poster:
    "/images/coverage/coverage-hero/sb-mobile-installations-coverage-nationwide-fleet-support-hero.webp",
  posterWidth: 1920,
  posterHeight: 1081,
} as const;

/**
 * Image slot for the `/coverage/` hero. Used only when no background video
 * is supplied; the video hero does not render it.
 *
 * No approved photo exists yet, so the slot renders the decorative fallback
 * in production (no `img`, no fake photo, no map). To fill it: set `src`,
 * `width`, `height`, and a real `alt`. Never a map, flag, city or state label,
 * vehicle logo, visible face, or anything implying a local office.
 * `altGuidance` is a note for the supplier and is never rendered.
 */
export const coverageImages = {
  hero: {
    slotId: "coverage-hero",
    role: "Organized commercial fleet yard or fleet operations environment",
    aspectRatio: "16 / 9",
    width: 1600,
    height: 900,
    fallback: "route",
    alt: "",
    altGuidance:
      "Describe only what is shown. No map, flag, city or state label, vehicle logo, visible face, or implied local office.",
  },
  /**
   * Installer Network handoff illustration (7:4): a work van with an open
   * equipment bay, installation hardware, and a pathway of icons. Decorative,
   * so the alt is empty; the heading and copy carry the meaning. Never a map,
   * pin, logo, readable text, or anything implying employment, guaranteed
   * work, openings, or a location.
   */
  installerNetwork: {
    slotId: "coverage-installer-network",
    role: "Vector illustration for the Installer Network handoff",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/coverage/sb-mobile-installations-installer-network-fleet-installation-pathway.webp",
    alt: "",
    altGuidance:
      "Decorative unless it shows something the text does not say. Do not imply employment, guaranteed work, openings, or a location.",
  },
  intro: {
    slotId: "coverage-intro",
    role: "Fleet electronics laid out in front of commercial fleet vehicles",
    // Natural ratio of the supplied file, so nothing is cropped or shifts.
    aspectRatio: "3318 / 1896",
    width: 3318,
    height: 1896,
    fallback: "grid",
    src: "/images/coverage/sb-mobile-installations-coverage-fleet-electronics-staging-equipment.webp",
    alt: "Fleet electronics equipment, including a dashcam, a display, a tire pressure sensor, and wiring, laid out on a table in front of a work van and service trucks",
    altGuidance:
      "Describe only what is shown. No people, logos, readable text, map, pin, city or state label, or implied local office. Do not describe the setting as a customer location, because the photo does not establish that.",
  },
} as const satisfies Record<string, HubImageSlot>;
