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
/**
 * Approved hero background video and its static poster for `/careers/`.
 *
 * The poster is the same frame composition as the video and is the fallback
 * for reduced motion, blocked autoplay, and load failure. The video always
 * plays muted.
 */
export const careersHeroVideo = {
  src: "/images/careers/homepage-hero/sb-mobile-installations-careers-fleet-installation-tools-hero-v2.mp4",
  poster:
    "/images/careers/homepage-hero/sb-mobile-installations-careers-fleet-installation-tools-hero.webp",
} as const;

/**
 * Decorative full-width hero photo for the Installer Network page. The
 * technician sits on the right of the frame, so the default mobile crop
 * (right-weighted) keeps the subject visible while copy sits on the navy left.
 */
export const networkHeroBackground = {
  src: "/images/careers/mobile-installation-technician/hero/sb-mobile-installations-installer-network-technician-commercial-van-hero-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

/**
 * Decorative text-free background for "Who the Installer Network Is For".
 * Shown under a 55% black overlay with light text. Centered crop keeps the
 * plain van wall and floor behind the copy instead of the busy tool cases.
 */
export const networkFitBackground = {
  src: "/images/careers/mobile-installation-technician/sb-mobile-installations-fleet-electronics-tools-commercial-van-background-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

/**
 * Decorative text-free background for "Share Your Experience and Availability".
 * Shown under a 55% black overlay with light text. The centered crop keeps the
 * dark van wall behind the copy and the tool storage at the edges.
 */
export const networkInformationBackground = {
  src: "/images/careers/mobile-installation-technician/sb-mobile-installations-organized-fleet-electronics-workspace-van-background-16x9.webp",
  width: 3344,
  height: 1882,
} as const;

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
    src: "/images/careers/sb-mobile-installations-current-opening-technician-fleet-electronics-installation-v2.webp",
    role: "Field work in a commercial vehicle environment",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
    altGuidance:
      "A work van, service truck, utility vehicle, or heavy-duty truck. No trailers, no implied nationwide map.",
  },
  networkAbout: {
    slotId: "careers-network-about",
    src: "/images/careers/mobile-installation-technician/sb-mobile-installations-installer-network-van-workspace-tools-components-4x3.webp",
    role: "Installer Network overview beside About the Installer Network",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "Organized van interior with a workbench holding wiring harnesses, a dashcam, and a GPS module, with cable spools, hand tools, and parts bins on the wall",
    altGuidance:
      "Authentic photo only. Mobile installation work or a fleet vehicle in a commercial setting. No logos, plates, readable text, maps, pins, customer information, or anything implying a current assignment or opening.",
  },
  networkRequirements: {
    slotId: "careers-network-requirements",
    role: "Vehicle installation work beside Requirements and Experience",
    aspectRatio: "3 / 2",
    width: 1500,
    height: 1000,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Suggested file: sb-mobile-installations-installer-network-vehicle-installation.webp. Interior panel or wiring work. No equipment brand visible. Do not imply a training program.",
  },
  networkVehicles: {
    slotId: "careers-network-vehicles",
    role: "Fleet vehicles beside Work Where Fleet Vehicles Operate",
    aspectRatio: "3 / 2",
    width: 1500,
    height: 1000,
    fallback: "route",
    alt: "",
    altGuidance:
      "Suggested file: sb-mobile-installations-installer-network-fleet-vehicles.webp. Fleet vehicles in a lot. No license plates, no customer signage, no implied nationwide map.",
  },
  networkBand: {
    slotId: "careers-network-band",
    src: "/images/careers/sb-mobile-installations-careers-recruitment-contact-installation-toolkit.webp",
    role: "Installer Network band on the Careers page",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "route",
    alt: "",
    altGuidance:
      "Suggested file: sb-mobile-installations-installer-network-future-opportunities.webp. Unbranded fleet vehicle, organized installation tools, wiring harnesses, multimeter, or mounting components in a clean fleet-yard setting. No logos, plates, readable text, maps, pins, customer information, or anything implying a current assignment.",
  },
  contact: {
    slotId: "careers-contact",
    src: "/images/careers/sb-mobile-installations-installer-network-tool-case-fleet-yard-4x3.webp",
    role: "Recruitment contact block on the Careers page",
    aspectRatio: "4 / 3",
    width: 2896,
    height: 2172,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Unbranded fleet vehicle, organized installation tools, wiring harnesses, multimeter, or fleet-electronics components in a clean service-yard setting. No people required. No logos, plates, readable text, maps, pins, customer information, or anything implying a specific assignment.",
  },
  commercialHandoff: {
    slotId: "careers-commercial-handoff",
    src: "/images/careers/sb-mobile-installations-careers-fleet-installation-handoff-equipment.webp",
    role: "Commercial fleet installation handoff on the Careers page",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "route",
    alt: "",
    altGuidance:
      "Suggested file: sb-mobile-installations-careers-fleet-installation-handoff-equipment.webp. Unbranded commercial fleet vehicle in a clean fleet yard with an organized installation case or equipment in the foreground. No people required. No logos, plates, readable text, maps, pins, customer information, recruitment imagery, or damaged vehicles.",
  },
} as const satisfies Record<string, HubImageSlot>;
