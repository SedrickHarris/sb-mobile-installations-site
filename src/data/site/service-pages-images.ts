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
}

function slots(
  short: string,
  heroRole: string,
  heroGuidance: string,
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
      altGuidance:
        "Show a confirmed vehicle example. No trailers, pickups, buses, or heavy equipment.",
    },
  };
}

export const servicePagesImages: Record<ServiceSlug, ServiceImageSet> = {
  "fleet-telematics-installation": slots(
    "telematics",
    "Connected fleet hardware being installed in a commercial vehicle",
    "Describe the hardware and vehicle actually shown. No device-brand logos.",
  ),
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
