import { applyCta } from "@/data/jobs/ctas";
import { activeTechnicianJob, APPLY_PATH, INSTALLER_NETWORK_PATH, JOBS_INDEX_PATH } from "@/data/jobs";
import type { Cta } from "@/types/content";
import type { HubLink, HubSplitSection } from "@/types/service-content";

/**
 * Section copy for the `/careers/` recruitment landing page. The H1, intro,
 * metadata description, and FAQ live in `careersHubContent`
 * (careers-content.ts). Job facts come from the job record, never retyped.
 *
 * The page leads with the active opening and its application. The Installer
 * Network is a separate, later section for future opportunities and is never
 * the application. No em dash appears in this file.
 */
interface CareersLandingContent {
  readonly metaTitle: string;
  readonly hero: {
    readonly primaryCta: Cta;
    readonly secondaryLink: HubLink;
    readonly callLabel: string;
    readonly qualifier: string;
    readonly scopeItems: readonly string[];
  };
  readonly opening: HubSplitSection;
  readonly network: HubSplitSection;
  readonly faqHeading: string;
  readonly handoff: {
    readonly h2: string;
    readonly body: string;
    readonly links: readonly HubLink[];
  };
}

export const careersLandingContent: CareersLandingContent = {
  metaTitle: "Installer Careers",

  hero: {
    primaryCta: applyCta,
    secondaryLink: {
      label: "View the opening details",
      href: activeTechnicianJob.path,
    },
    callLabel: "Call",
    qualifier:
      "Applicants are accepted nationwide, and no closing date is currently published.",
    scopeItems: activeTechnicianJob.heroScopeItems,
  },

  opening: {
    h2: "Current Opening: Mobile GPS, ELD, and AOBRD Installation Technician",
    body: [
      "SB Mobile Installations has current openings for this role. Applicants are accepted nationwide.",
    ],
    lists: [{ heading: "Opening details", items: activeTechnicianJob.summaryFacts }],
    footnotes: [activeTechnicianJob.disclaimer],
    links: [
      { label: "View the full opening", href: activeTechnicianJob.path },
      { label: "Apply for the current opening", href: APPLY_PATH },
      { label: "See all current openings", href: JOBS_INDEX_PATH },
    ],
  },

  network: {
    h2: "Looking for Future Opportunities?",
    body: [
      "The Installer Network is a separate registration for future installation opportunities. It is not an application for the current opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
    links: [
      { label: "Learn about the Installer Network", href: INSTALLER_NETWORK_PATH },
    ],
  },

  faqHeading: "Installer Careers Questions",

  handoff: {
    h2: "Looking for Fleet Installation Service?",
    body: "SB Mobile Installations installs fleet technology for commercial customers. Businesses request installation separately from installer careers.",
    links: [
      { label: "Request an installation quote", href: "/contact/" },
      { label: "Explore fleet installation services", href: "/services/" },
    ],
  },
};
