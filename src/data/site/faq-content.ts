import {
  dashcamCameraInstallationContent,
  eldInstallationContent,
  fleetTelematicsInstallationContent,
  gpsTrackingInstallationContent,
  servicesHubContent,
} from "@/data/site/services-content";
import { careersHubContent, technicianRoleContent } from "@/data/site/careers-content";
import { coverage } from "@/data/commercial/coverage";
import type { FaqPageContent, FaqPageItem } from "@/types/service-content";

/**
 * `/faq/` centralized FAQ content.
 *
 * Every item is pulled directly from another page's already-approved FAQ
 * array (imported, not retyped), so the text can never drift from its
 * source and no new, unreviewed claim is introduced here. Each item links
 * back to its source page. See src/types/service-content.ts FaqPageContent.
 */
function fromSource(
  items: readonly { readonly question: string; readonly answer: string }[],
  sourceHref: string,
  sourceLabel: string,
): FaqPageItem[] {
  return items.map((item) => ({ ...item, sourceHref, sourceLabel }));
}

export const faqPageContent: FaqPageContent = {
  h1: "Frequently Asked Questions",
  metaDescription:
    "Answers about SB Mobile Installations' GPS, ELD, and fleet electronics installation services, nationwide coverage, and the Installer Network, with links to the full page for each topic.",
  intro:
    "Answers below are drawn directly from the relevant service, coverage, and careers pages. Follow a link for the full page on that topic.",
  items: [
    ...fromSource(servicesHubContent.faq ?? [], "/services/", "Services"),
    ...fromSource(
      fleetTelematicsInstallationContent.faq ?? [],
      "/services/fleet-telematics-installation/",
      "Fleet Telematics Installation",
    ),
    ...fromSource(
      gpsTrackingInstallationContent.faq ?? [],
      "/services/gps-tracking-installation/",
      "GPS Tracking Installation",
    ),
    ...fromSource(
      eldInstallationContent.faq ?? [],
      "/services/eld-installation/",
      "ELD Installation",
    ),
    ...fromSource(
      dashcamCameraInstallationContent.faq ?? [],
      "/services/dashcam-camera-installation/",
      "Dashcam & Camera Installation",
    ),
    ...fromSource(coverage.nationwide.faq ?? [], "/coverage/", "Coverage"),
    ...fromSource(careersHubContent.faq ?? [], "/careers/", "Careers"),
    ...fromSource(
      technicianRoleContent.faq ?? [],
      "/careers/mobile-installation-technician/",
      "Mobile Installation Technician",
    ),
  ],
};
