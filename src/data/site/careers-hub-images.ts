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
    src: "/images/careers/sb-mobile-installations-current-opening-technician-fleet-electronics-installation.webp",
    role: "Field work in a commercial vehicle environment",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    alt: "",
    altGuidance:
      "A work van, service truck, utility vehicle, or heavy-duty truck. No trailers, no implied nationwide map.",
  },
  networkHero: {
    slotId: "careers-network-hero",
    role: "Technician working at a fleet vehicle, Installer Network page hero",
    aspectRatio: "4 / 3",
    width: 1600,
    height: 1200,
    fallback: "route",
    alt: "",
    altGuidance:
      "Suggested file: sb-mobile-installations-installer-network-hero.webp. Show a technician at a fleet vehicle. Describe only what is shown. Released, identifiable technicians only.",
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
    src: "/images/careers/sb-mobile-installations-installer-network-mobile-installation-toolkit-v2.webp",
    role: "Recruitment contact block on the Careers page",
    aspectRatio: "7 / 4",
    width: 3318,
    height: 1896,
    fallback: "grid",
    alt: "",
    altGuidance:
      "Unbranded fleet vehicle, organized installation tools, wiring harnesses, multimeter, or fleet-electronics components in a clean service-yard setting. No people required. No logos, plates, readable text, maps, pins, customer information, or anything implying a specific assignment.",
  },
} as const satisfies Record<string, HubImageSlot>;
