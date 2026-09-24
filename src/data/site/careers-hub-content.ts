import { activeTechnicianJob } from "@/data/jobs";
import type { CareersHubPageContent } from "@/types/service-content";

/**
 * Section copy for the Installer Network page
 * (`/careers/mobile-installation-technician/`). The H1, intro, metadata
 * description, and FAQ live in `installerNetworkContent` (careers-content.ts).
 * The export keeps its original name for compatibility.
 *
 * The Installer Network is a registration for future opportunities, separate
 * from the application for the current opening. It is never an application and
 * never uses "Apply" as its own action. The `openings` section only points to
 * the current opening and its application page; the opening's facts live in
 * the job record, not here. Requirement groups come from the
 * stakeholder-supplied listing text (2026-09-18, docs/decisions/0004). Still
 * absent: MECP or other certification as a requirement, days, hours, shifts,
 * weekends, "shop locations", "position", "hiring", platform brand names,
 * trailers, state or city lists, and any promise of contact, review, timing,
 * or assignment. No em dash appears in this file; a spaced hyphen would be
 * used instead.
 */
/**
 * DRAFT, NOT RENDERED. Entry-level pathway block for "Is the Installer Network
 * a Fit for You?". Publication is blocked until stakeholder approval: the
 * transferable-experience wording (automotive, electrical, mechanical,
 * construction, technical) is not in docs/01 or decision 0004. Once approved,
 * add it to `fit` and add the matching FAQ item in careers-content.ts. Makes no
 * training, employment, assignment, pay, or contact promise, and never uses
 * "Apply".
 */
export const pendingEntryLevelFit = {
  approved: false,
  heading: "New to mobile fleet installation?",
  body: "You may still share your background if you have hands-on experience in automotive, electrical, mechanical, construction, technical, or related work. Your experience can help SB Mobile Installations understand the skills you may bring to mobile installation work.",
} as const;

export const careersHubPageContent: CareersHubPageContent = {
  metaTitle: "Mobile Installation Technician | Installer Network",

  hero: {
    primaryCta: {
      label: "Share Your Interest",
      href: "#installer-network-form",
      journey: "recruitment",
      event: "cta_installer_network_click",
    },
    callLabel: "Call",
    qualifier:
      "Sharing your interest is not a job application. It does not indicate a current opening or guarantee future work.",
    scopeItems: [
      "Opt-in Installer Network",
      "Registration for future opportunities",
      "Independent contractor work",
    ],
  },

  chapters: {
    network: "Understand the network",
    work: "Understand the work context",
    prepare: "Prepare your information",
    join: "Join the network",
  },

  openings: {
    h2: "Looking for the Current Opening?",
    body: "The current Mobile GPS, ELD, and AOBRD installation technician openings have their own page. The Installer Network is a separate registration.",
    link: { label: "View the current opening", href: activeTechnicianJob.path },
  },

  contextStrip: {
    h2: "Installer Network at a Glance",
    cards: [
      {
        title: "Mobile fleet-installation technicians",
        description:
          "The Installer Network is intended for experienced technicians interested in sharing their background with SB Mobile Installations.",
      },
      {
        title: "Commercial vehicle projects",
        description:
          "Installation context covers fleet vehicles, commercial vehicles, and construction vehicles.",
      },
      {
        title: "Nationwide project context",
        description:
          "SB Mobile Installations provides nationwide mobile installation service at the customer's location.",
      },
    ],
  },

  fit: {
    h2: "Who the Installer Network Is For",
    body: [
      "This page is for experienced mobile fleet-installation technicians who want to introduce themselves to SB Mobile Installations and share relevant installation experience. It is not a list of current openings or a promise of future work.",
    ],
    listPanel: true,
    lists: [
      {
        heading: "A good fit if you are",
        items: [
          "An experienced mobile installation technician",
          "Familiar with commercial-vehicle installation contexts",
          "Interested in being considered for the Installer Network",
          "Ready to share your installation background through the interest form",
        ],
      },
    ],
  },

  boundary: {
    isHeading: "What this page is",
    isItems: [
      "A way to express interest in the Installer Network",
      "A place to share relevant technician background",
      "An information page for experienced mobile installation technicians",
    ],
    isNotHeading: "What this page is not",
    isNotItems: [
      "A list of active job openings",
      "An employment offer",
      "A guarantee of future project availability",
    ],
  },

  answer: {
    h2: "About the SB Mobile Installations Installer Network",
    body: [
      "The SB Mobile Installations Installer Network is an opt-in way for experienced mobile fleet-installation technicians to share their information and installation background. Submitting the form below does not indicate that a specific opening is available, and it does not create an employment offer.",
      "Joining the network is an expression of interest. It is not an application for an active job opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      "Technicians engaged through the Installer Network are independent contractors, not employees.",
    ],
  },

  requirements: {
    h2: "Requirements and Experience",
    body: [
      "These are the requirements and experience SB Mobile Installations asks of Installer Network technicians.",
      "No prior installation experience is required, and training is provided. The experience listed under helpful skills is welcome, not required.",
    ],
    lists: [
      {
        heading: "Core requirements",
        items: [
          "A valid driver's license",
          "Your own personal vehicle, tools, and travel resources",
          "Ability to travel state to state, with approximately 75% travel for the current openings",
          "A smartphone for submitting installation data and installation photos after each installation",
          "Passing a background check",
        ],
      },
      {
        heading: "Helpful skills and experience",
        items: [
          "Understanding of vehicle installation practices, including electrical systems and mechanical knowledge",
          "Experience with 12 and 24 volt electrical systems, including using a multimeter and diagnosing electrical connections",
          "Experience removing interior and exterior vehicle panels",
          "Experience installing GPS and fleet management equipment in fleet vehicles",
        ],
      },
      {
        heading: "What we ask of Installer Network technicians",
        items: [
          "Follow installation guidelines and approved connection procedures",
          "Submit installation data, including multiple photos from each installation",
          "Account for and keep track of all equipment",
          "Confirm installed equipment is functional before leaving the customer's location",
          "Work independently and keep paperwork organized",
          "Communicate well, provide good customer service, and stay in contact with scheduling managers",
        ],
      },
    ],
    footnotes: [
      "We recommend being over the age of 21 because some travel arrangements may be subject to minimum-age requirements set by rental car companies and hotels.",
      "This is a travel-related recommendation, not an automated eligibility screen.",
      "Meeting these does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
  },

  equipment: {
    h2: "Mobile Fleet Installation Context",
    intro:
      "The installation contexts below match the services SB Mobile Installations provides to commercial customers.",
    cards: [
      {
        title: "Fleet Telematics Installation",
        description: "Installation context for commercial vehicle projects.",
      },
      {
        title: "GPS Tracking Installation",
        description: "Installation context for commercial vehicle projects.",
      },
      {
        title: "ELD Installation",
        description: "Installation context for commercial vehicle projects.",
      },
      {
        title: "Dashcam & Camera Installation",
        description:
          "Fleet dashcam and windshield-mounted video recorder installation context.",
      },
      {
        title: "Fleet Rollout Services",
        description: "Installation context for commercial vehicle projects.",
      },
    ],
  },

  fieldWork: {
    h2: "Work Where Fleet Vehicles Operate",
    body: [
      "SB Mobile Installations provides nationwide mobile installation service, delivered at customer locations. Installation work is done on-site where the vehicles are.",
      "Every installation is photo documented.",
    ],
    lists: [
      {
        heading: "Vehicle examples",
        items: [
          "Work vans",
          "Service trucks",
          "Utility vehicles",
          "Heavy-duty trucks",
        ],
      },
    ],
    footnotes: [
      "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
    ],
  },

  information: {
    h2: "Information That Helps Us Understand Your Experience",
    body: [
      "The form asks for the details below. Optional items are marked optional.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "Your name, email, and phone number",
          "Your home market or region",
          "A summary of your installation experience",
          "Platform experience (optional)",
          "Tools you currently own (optional)",
          "Your travel and coverage-region availability",
        ],
      },
    ],
    footnotes: [
      "You may share experience with fleet technology platforms or device ecosystems that you have worked with. This information is optional and does not indicate certification, authorization, partnership, or a guarantee of assignment.",
    ],
  },

  where: {
    h2: "Tell Us Where You Can Work",
    body: [
      "Share your home market or region and where you are available to travel or cover. This helps SB Mobile Installations understand your availability.",
      "Listing a market or region does not mean SB Mobile has active work there.",
    ],
  },

  after: {
    h2: "After You Join the Installer Network",
    body: [
      "Information submitted through the form is collected for Installer Network consideration.",
      "Joining the Installer Network is not an application for an active job opening. It does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
  },

  join: {
    h2: "Express Interest in the Installer Network",
    intro:
      "Share your contact information and relevant mobile fleet-installation background. SB Mobile Installations will use the information you provide to understand your interest in the Installer Network.",
    noGuarantee:
      "Joining the Installer Network is an expression of interest. It does not guarantee employment, a project assignment, compensation, or future work.",
    expectation:
      "This form is for Installer Network interest. It does not indicate a current opening or guarantee future work.",
    phoneLead: "Prefer to talk it through? Call",
  },

  faqHeading: "Installer Network Questions",

  handoff: {
    h2: "Looking for mobile fleet installation service for your business?",
    body: "Businesses request installation separately from the Installer Network.",
    links: [{ label: "Request an installation quote", href: "/contact/" }],
  },

  relatedLinks: {
    h2: "Related Services and Coverage",
    links: [
      { label: "Fleet Telematics Installation", href: "/services/fleet-telematics-installation/" },
      { label: "GPS Tracking Installation", href: "/services/gps-tracking-installation/" },
      { label: "ELD Installation", href: "/services/eld-installation/" },
      { label: "Dashcam & Camera Installation", href: "/services/dashcam-camera-installation/" },
      { label: "Fleet Rollout Services", href: "/services/fleet-rollouts/" },
      { label: "Nationwide mobile installation service", href: "/coverage/" },
    ],
  },
};
