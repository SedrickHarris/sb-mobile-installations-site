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
  /** Optional media for the definition and scope sections. Telematics only. */
  readonly definition?: HubImageSlot;
  readonly scope?: HubImageSlot;
  /** Optional media beside the "may be a fit" section. Telematics only. */
  readonly fit?: HubImageSlot;
  /** Optional media beside the project-location band. Telematics only. */
  readonly nationwide?: HubImageSlot;
}

const SERVICE_PHOTO_DIR = "/images/services";

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
      src: `${SERVICE_PHOTO_DIR}/sb-mobile-installations-gps-tracking-installation-commercial-vehicle.webp`,
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
      src: "/images/services/services-hub-page/services-hub/sb-mobile-installations-services-hub-commercial-vehicle-installation-support.webp",
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
      src: `${SERVICE_PHOTO_DIR}/sb-mobile-installations-fleet-management-equipment-installation-commercial-vehicle.webp`,
      alt: "Technician routing fleet-electronics cables inside a commercial service vehicle",
      altGuidance:
        "Describe only what is shown. No device-brand logos, no compliance or capability claims.",
    },
  },
  "gps-tracking-installation": slots(
    "gps",
    "GPS tracking hardware being installed in a commercial vehicle",
    "Describe the hardware and vehicle actually shown. No device-brand logos.",
  ),
  "eld-installation": slots(
    "eld",
    "ELD or AOBRD hardware being installed in a commercial truck cab",
    "Describe what is shown. Never call AOBRD legacy. No compliance claims in the alt text.",
  ),
  "dashcam-camera-installation": slots(
    "dashcam",
    "Fleet dashcam or windshield-mounted video recorder being installed",
    "Describe the hardware shown. No forward-facing or driver-facing wording.",
  ),
  "fleet-rollouts": slots(
    "rollouts",
    "Several commercial vehicles at a project location",
    "Describe the vehicles and setting shown. No implied map or coverage area.",
  ),
};
