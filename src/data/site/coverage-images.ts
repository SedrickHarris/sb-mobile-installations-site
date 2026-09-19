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
  intro: {
    slotId: "coverage-intro",
    role: "Commercial fleet vehicles staged at a customer location",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "grid",
    alt: "",
    altGuidance:
      "No approved photo yet. Suggested alt when one exists: Commercial fleet vehicles staged at a customer location for mobile installation support. No people, logos, readable text, map, pin, city or state label, or implied local office.",
  },
} as const satisfies Record<string, HubImageSlot>;
