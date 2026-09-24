import type { HubImageSlot } from "@/data/site/services-hub-images";

/**
 * Image slots for the five service pages, two per page.
 *
 * Photography is supplied later. Until `src` is set, each slot renders the
 * decorative navy fallback in production (no `img`, no preload, no label) and
 * a labelled placeholder in local development only.
 *
 * To fill a slot: set `src`, `width`, `height`, and a real `alt`. Set the
 * hero's `priorityImage` only if the approved photo becomes the actual
 * above-the-fold LCP candidate.
 *
 * Rules: authentic photography only; no device-brand logos; no customer
 * information visible; no fake badges. Alt text describes the photo and
 * contains no dashes or unverified claims, and never says "legacy" (AOBRD is a
 * current category). `altGuidance` is a note for the supplier and is never
 * rendered.
 */

export type ServiceSlug =
  | "fleet-telematics-installation"
  | "gps-tracking-installation"
  | "eld-installation"
  | "dashcam-camera-installation"
  | "fleet-rollouts";

interface ServiceImageSet {
  readonly hero: HubImageSlot;
  readonly context: HubImageSlot;
  /** Optional media for the definition and scope sections. Telematics and GPS. */
  readonly definition?: HubImageSlot;
  readonly scope?: HubImageSlot;
  /** Optional media beside the "may be a fit" section. Telematics and GPS. */
  readonly fit?: HubImageSlot;
  /** Optional media beside the project-location band. Telematics and GPS. */
  readonly nationwide?: HubImageSlot;
}

const SERVICE_PHOTO_DIR = "/images/services";
const GPS_DIR = `${SERVICE_PHOTO_DIR}/gps-tracking-installation`;

function slots(
  short: string,
  heroRole: string,
  heroGuidance: string,
  contextFile?: string,
): ServiceImageSet {
  return {
    hero: {
      slotId: `service-${short}-hero`,
      role: heroRole,
      aspectRatio: "4 / 3",
      width: 1600,
      height: 1200,
      fallback: "route",
      alt: "",
      altGuidance: heroGuidance,
    },
    context: {
      slotId: `service-${short}-context`,
      role: "Work van, service truck, utility vehicle, or heavy-duty truck",
      aspectRatio: "3 / 2",
      width: 1500,
      height: 1000,
      fallback: "grid",
      alt: "",
      altGuidance: `${contextFile ? `Suggested file: ${contextFile}. ` : ""}Show one confirmed vehicle example. No trailers, pickups, buses, or heavy equipment.`,
    },
  };
}

export const servicePagesImages: Record<ServiceSlug, ServiceImageSet> = {
  "fleet-telematics-installation": {
    ...slots(
    "telematics",
    "Connected fleet hardware being installed in a commercial vehicle",
    "Suggested file: sb-mobile-installations-fleet-telematics-installation-hero.webp. Describe the hardware and vehicle actually shown. No device-brand logos, platform logos or dashboards, maps, pins, state outlines, stock technician imagery, readable plates, or customer signage.",
    "sb-mobile-installations-fleet-telematics-vehicle-context.webp",
    ),
    context: {
      slotId: "service-telematics-context",
      role: "Work van, service trucks, and a heavy-duty truck at a commercial service yard",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${SERVICE_PHOTO_DIR}/fleet-telematics-installation/sb-mobile-installations-commercial-vehicle-installation-context.webp`,
      alt: "Commercial fleet vehicles in a service yard, including a work van, utility service trucks, and a heavy-duty truck",
      altGuidance:
        "Describe only what is shown. Confirmed vehicle examples only. No trailers, pickups, buses, or heavy equipment.",
    },
    definition: {
      slotId: "service-telematics-definition",
      role: "Connected fleet hardware being installed under a commercial vehicle dashboard",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      src: `${SERVICE_PHOTO_DIR}/service-cards/sb-mobile-installations-gps-tracking-installation-commercial-vehicle.webp`,
      alt: "Gloved hands mounting a black fleet hardware unit and connecting its wiring under a commercial vehicle dashboard",
      altGuidance:
        "Describe only what is shown. No device-brand logos, no compliance or capability claims.",
    },
    fit: {
      slotId: "service-telematics-fit",
      role: "Commercial fleet vehicles staged at a fleet facility",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: "/images/services/services-hub/sb-mobile-installations-services-hub-commercial-vehicle-installation-support.webp",
      alt: "A cargo van, utility truck, dump truck, and tractor truck staged outside a commercial fleet facility",
      altGuidance:
        "Describe only what is shown. No brand or coverage claims. Shows vehicle types beyond the approved vehicle examples, so it is not used in the vehicle-context section.",
    },
    nationwide: {
      slotId: "service-telematics-nationwide",
      role: "Fleet electronics staged on a workbench near commercial vehicles at a project location",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      src: "/images/coverage/sb-mobile-installations-coverage-fleet-electronics-staging-equipment-v2.webp",
      alt: "Fleet electronics, cabling, and mounting hardware laid out on a workbench in front of a cargo van, utility trucks, and a tractor truck at a commercial facility",
      altGuidance:
        "Describe only what is shown. Never a map or graphic implying state-level coverage, and no city or state identifiers.",
    },
    scope: {
      slotId: "service-telematics-scope",
      role: "Fleet hardware modules, cabling, and installation tools organized at a vehicle",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${SERVICE_PHOTO_DIR}/service-cards/sb-mobile-installations-fleet-management-equipment-installation-commercial-vehicle.webp`,
      alt: "Technician routing fleet-electronics cables inside a commercial service vehicle",
      altGuidance:
        "Describe only what is shown. No device-brand logos, no compliance or capability claims.",
    },
  },
  "gps-tracking-installation": {
    ...slots(
      "gps",
      "GPS tracking hardware being installed in a commercial vehicle",
      "Suggested file: sb-mobile-installations-gps-tracking-installation-hero.webp. Abstract navy fleet grid and route line motif only until an approved image exists. No maps, pins, boundaries, dashboards, device-brand logos, or customer information.",
      "sb-mobile-installations-gps-tracking-installation-vehicle-context.webp",
    ),
    context: {
      slotId: "service-gps-context",
      role: "Work van, service trucks, and a heavy-duty truck at a commercial service yard",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${GPS_DIR}/sb-mobile-installations-commercial-vehicle-installation-context-2.webp`,
      alt: "Commercial fleet vehicles that may require GPS tracking installation",
      altGuidance:
        "Describe only what is shown. Confirmed vehicle examples only. No trailers, pickups, buses, or heavy equipment.",
    },
    // Placeholder slots: no src, so production renders the decorative fallback.
    // Assets go in public/images/services/gps-tracking-installation/.
    definition: {
      slotId: "service-gps-definition",
      role: "GPS tracking hardware being installed in a commercial vehicle",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${GPS_DIR}/sb-mobile-installations-what-is-gps-tracking-installation.webp`,
      alt: "GPS tracking device mounted inside a commercial van with wiring routed through protective conduit",
      altGuidance:
        "Suggested file: sb-mobile-installations-gps-tracking-installation-hardware-mounting.webp. Describe only the hardware and vehicle shown. No device-brand logos, screens, or capability claims.",
    },
    scope: {
      slotId: "service-gps-scope",
      role: "Hands mounting or connecting GPS tracking hardware",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${GPS_DIR}/sb-mobile-installations-gps-tracking-installation-components.webp`,
      alt: "GPS tracking device and fuse block mounted inside a commercial van with wiring routed through protective conduit",
      altGuidance:
        "Suggested file: sb-mobile-installations-gps-tracking-installation-device-mounting-wiring.webp. Secured GPS device, clean power connection, neatly routed and protected wiring inside a commercial vehicle. Suggested alt: GPS tracking device with organized wiring installed in a commercial vehicle. No people or hands, screens, readouts, tracking data, logos, or readable text.",
    },
    fit: {
      slotId: "service-gps-fit",
      role: "Fleet electronics, cabling, and mounting hardware staged near commercial vehicles",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: `${GPS_DIR}/sb-mobile-installations-related-fleet-installation-services.webp`,
      alt: "Fleet electronics and vehicle installation equipment prepared for commercial deployment",
      altGuidance:
        "Describe only what is shown. No dashboard imagery, readable plates, or customer signage.",
    },
    nationwide: {
      slotId: "service-gps-nationwide",
      role: "Commercial vans, box trucks, and a service truck staged at a fleet yard",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      src: `${GPS_DIR}/sb-mobile-installations-mobile-installation-project-location.webp`,
      alt: "Mobile fleet installation service vehicle at a commercial project location",
      altGuidance:
        "Describe only what is shown. Never a map or graphic implying coverage, and no city or state identifiers.",
    },
  },
  // Placeholder slots: no src, so production renders the decorative fallback.
  // Assets go in public/images/services/eld-installation/. The existing AOBRD
  // file name contains "legacy"; rename it before use.
  "eld-installation": {
    ...slots(
      "eld",
      "ELD or AOBRD hardware being installed in a commercial truck cab",
      "Suggested file: sb-mobile-installations-eld-installation-hero.webp. Describe what is shown. Never call AOBRD legacy. No compliance claims in the alt text, no tablet or driver-log screens.",
      "sb-mobile-installations-eld-installation-vehicle-context.webp",
    ),
    context: {
      slotId: "service-eld-context",
      role: "Work van, service truck, utility vehicle, and heavy-duty truck",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: "/images/services/eld-installation/sb-mobile-installations-eld-aobrd-commercial-fleet-vehicle-types-4x3.webp",
      alt: "Commercial fleet vehicles including a work van, service truck, utility vehicle, and heavy-duty truck",
      altGuidance:
        "Describe only what is shown. Confirmed vehicle examples only. No trailers, pickups, buses, or heavy equipment. Do not imply every pictured vehicle has ELD hardware installed.",
    },
    definition: {
      slotId: "service-eld-definition",
      role: "ELD or AOBRD hardware installed in a commercial vehicle cab",
      aspectRatio: "16 / 9",
      width: 3344,
      height: 1882,
      fallback: "route",
      src: "/images/services/eld-installation/hero/sb-mobile-installations-eld-installation-commercial-truck-cab-hero-16x9.webp",
      alt: "ELD device mounted near the dashboard inside a commercial truck cab",
      altGuidance:
        "Uses the approved hero photo. Describe only what is shown. Never call AOBRD legacy. No device-brand logos, driver logs, or compliance claims.",
    },
    scope: {
      slotId: "service-eld-scope",
      role: "ELD or AOBRD hardware mounted with a neatly routed cable in a commercial truck cab",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: "/images/services/eld-installation/sb-mobile-installations-eld-installation-mounting-cable-routing-commercial-truck-cab-4x3.webp",
      alt: "ELD device mounted near a truck dashboard with a neatly routed cable",
      altGuidance:
        "Describe only what is shown. No device-brand logos, screens, driver logs, or compliance claims.",
    },
    fit: {
      slotId: "service-eld-fit",
      role: "Commercial vehicles staged at a fleet service facility",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      src: "/images/services/eld-installation/sb-mobile-installations-commercial-fleet-service-yard-related-services-4x3.webp",
      alt: "Commercial vehicles staged at a fleet service facility",
      altGuidance:
        "Describe only what is shown, without implying the pictured vehicles have equipment installed. No readable plates or customer signage.",
    },
    nationwide: {
      slotId: "service-eld-nationwide",
      role: "Commercial fleet vehicle at a customer project location",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      src: "/images/services/eld-installation/sb-mobile-installations-mobile-eld-installation-commercial-project-location-4x3.webp",
      alt: "Commercial fleet vehicle at a customer project location",
      altGuidance:
        "Do not imply installation work is pictured. Never a map or graphic implying coverage, and no city or state identifiers.",
    },
  },
  // Placeholder slots: no src, so production renders the decorative fallback.
  // Assets go in public/images/services/dashcam-camera-installation/.
  "dashcam-camera-installation": {
    ...slots(
      "dashcam",
      "Fleet dashcam or windshield-mounted video recorder being installed",
      "Suggested file: sb-mobile-installations-dashcam-camera-installation-hero.webp. Describe the hardware shown. No forward-facing, driver-facing, AI, or monitoring wording. No lens view, road footage, driver, cab interior, dashboard, map, platform interface, or device-brand logos.",
      "sb-mobile-installations-dashcam-camera-installation-vehicle-context.webp",
    ),
    definition: {
      slotId: "service-dashcam-definition",
      role: "Fleet dashcam or windshield-mounted video recorder hardware being mounted",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      alt: "",
      altGuidance:
        "Suggested file: sb-mobile-installations-dashcam-camera-installation-hardware-mounting.webp. Describe only the hardware and mounting shown. No device-brand logos, screens, footage, or capability claims.",
    },
    scope: {
      slotId: "service-dashcam-scope",
      role: "Mounted dashcam or video recorder hardware with neatly routed cabling",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      alt: "",
      altGuidance:
        "Suggested file: sb-mobile-installations-dashcam-camera-installation-mounting-routing.webp. Describe only what is shown. No people, screens, footage, device-brand logos, or readable text.",
    },
  },
  "fleet-rollouts": slots(
    "rollouts",
    "Several commercial vehicles at a project location",
    "Describe the vehicles and setting shown. No implied map or coverage area.",
  ),
};
