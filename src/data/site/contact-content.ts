import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta } from "@/types/content";
import type { HubServiceCard } from "@/types/service-content";

/**
 * Copy for the `/contact/` commercial quote page.
 *
 * Stakeholder-approved as quote-first (docs/decisions/0008). Section copy is
 * stakeholder-supplied. No pricing, response-time, availability,
 * certification, or state and city claims. Wording the docs list as
 * unconfirmed (for example scheduling) is used only where the stakeholder
 * supplied it; see the task reports for the flags.
 */

const QUOTE_CTA: Cta = {
  label: "Request a Fleet Installation Quote",
  href: "#request-quote",
  journey: "commercial",
  event: "cta_quote_click",
};

export const contactContent = {
  metaTitle: "Request a Fleet Installation Quote",
  metaDescription:
    "Request a commercial fleet installation quote. Share your equipment, vehicle count, project locations, and preferred timing with SB Mobile Installations.",

  h1: "Request a Fleet Installation Quote",

  hero: {
    eyebrow: "COMMERCIAL INSTALLATION REQUESTS",
    intro:
      "Tell us about your vehicles, equipment, installation locations, project size, and preferred timing. SB Mobile Installations provides nationwide, on-site installation support for GPS, ELD, AOBRD, dashcam, TPMS, and other fleet-electronics equipment.",
    audience:
      "For fleet operators, commercial vehicle owners, equipment dealers, and project teams.",
    primaryCta: QUOTE_CTA,
    callLabel: "Call SB Mobile Installations at",
    /** Decorative background video. No poster: the fallback is solid navy. */
    video: {
      src: "/images/contact/hero/sb-mobile-installations-contact-commercial-fleet-hero.mp4",
    },
  },

  include: {
    h2: "What to Include in Your Fleet Installation Request",
    intro:
      "Providing a few project details helps us understand your installation requirements and determine the right next step. Include the equipment involved, vehicle types and quantities, installation locations, and your preferred deployment timing.",
    items: [
      {
        title: "Equipment and installation type",
        body: "Tell us which equipment needs to be installed, such as GPS, ELD, AOBRD, dashcam, TPMS, telematics, or other fleet-electronics equipment.",
      },
      {
        title: "Vehicles and project size",
        body: "Share the number and types of vehicles involved, including trucks, vans, trailers, construction equipment, or other commercial assets.",
      },
      {
        title: "Project locations",
        body: "List the cities, states, facilities, yards, or job sites where installation support is needed. Include whether the project involves one location or multiple locations.",
      },
      {
        title: "Preferred timing",
        body: "Let us know your preferred installation dates, deployment window, scheduling requirements, and whether the work will be completed in phases.",
      },
    ],
    supporting:
      "For larger or multi-location deployments, include any scheduling constraints, site requirements, staging details, or phased rollout information.",
    closing:
      "The more detail you provide, the easier it is to understand your fleet installation needs and direct your request to the appropriate next step.",
  },

  services: {
    h2: "Explore Fleet Installation Services",
    intro:
      "Explore the installation service that best matches your equipment, vehicle type, deployment size, or project requirements.",
    /**
     * Contact-page card copy (stakeholder-supplied). Routes and the red accent
     * flags mirror the approved five-service registry in
     * `services-hub-content.ts`; `choose` is omitted so cards stay scannable.
     */
    cards: [
      {
        category: "EQUIPMENT UMBRELLA",
        title: "Fleet Telematics Installation",
        scope:
          "Installation of GPS tracking, ELD, AOBRD, TPMS, dashcam, and other fleet-management equipment across commercial and construction vehicles.",
        commonUse:
          "Use this service when a project involves multiple equipment types or coordinated fleet-installation planning.",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
        accent: true,
      },
      {
        category: "GPS HARDWARE",
        title: "GPS Tracking Installation",
        scope:
          "On-site installation of GPS tracking hardware for fleet, commercial, and construction vehicles.",
        commonUse:
          "Use this service when vehicles need GPS hardware installed for tracking, visibility, or asset-monitoring purposes.",
        linkLabel: "Explore GPS tracking installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        category: "ELD AND AOBRD HARDWARE",
        title: "ELD Installation",
        scope:
          "On-site installation of ELD and AOBRD equipment across fleet, commercial, and construction vehicles.",
        commonUse:
          "Use this service when deploying electronic logging or related fleet-compliance hardware across vehicles.",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        category: "VIDEO HARDWARE",
        title: "Dashcam and Camera Installation",
        scope:
          "Installation of fleet dashcams and in-vehicle video equipment, including windshield-mounted camera systems.",
        commonUse:
          "Use this service when adding video hardware to commercial vehicles or fleet assets.",
        linkLabel: "Explore dashcam and camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        category: "PROJECT COORDINATION",
        title: "Fleet Rollout Services",
        scope:
          "Coordinated installation support for multi-vehicle or multi-location fleet deployments nationwide.",
        commonUse:
          "Use this service when equipment must be installed across multiple vehicles, project locations, or a larger deployment schedule.",
        linkLabel: "Explore fleet rollout services",
        href: "/services/fleet-rollouts/",
        accent: true,
      },
    ] satisfies readonly HubServiceCard[],
  },

  nationwide: {
    h2: "Mobile Fleet Installation at Your Project Location",
    /** Stakeholder-supplied copy; see the flags in the task report. */
    paragraphs: [
      "SB Mobile Installations provides on-site installation support at customer-designated locations nationwide. Whether you need equipment installed at a fleet yard, facility, job site, dealership, or other approved project location, share your vehicle count, equipment requirements, locations, and preferred timing with our team.",
      "Our field-service model is designed to support individual vehicle installations, multi-vehicle projects, and coordinated deployments across multiple locations.",
    ],
    image: {
      slotId: "contact-project-location",
      role: "Project-location photo beside the nationwide installation copy on the Contact page",
      src: "/images/contact/sb-mobile-installations-contact-project-location-fleet-installation.webp",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      alt: "White commercial cargo van at a fleet facility loading area, with an installation tool case, cable coils, and mounting brackets on the ground beside it",
      altGuidance:
        "Describe only what is shown. No brand names, no location or coverage claim.",
    } satisfies HubImageSlot,
    linkLabel: "Explore Installation Coverage",
    href: "/coverage/",
    quoteLinkLabel: "Request a Fleet Installation Quote",
    quoteHref: "#request-quote",
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    phoneLead: "Need help by phone?",
  },

  /**
   * Corporate office block. The address itself is read from `business.address`
   * in the page (docs/01 sections 5.3 and 33.4). The public name is used, not
   * the legal entity name (CLAUDE.md section 3.2). No map link, no visiting
   * invitation, no hours: docs/01 section 5.3 prohibits them.
   */
  office: {
    h2: "Corporate Office",
    body: "This is the corporate office for SB Mobile Installations. Installation services are delivered at customer-designated project locations nationwide.",
    image: {
      slotId: "contact-office-location",
      role: "Location graphic beside the corporate office address on the Contact page",
      src: "/images/contact/sb-mobile-installations-contact-office-location-graphic.webp",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "grid",
      alt: "Abstract location graphic representing the SB Mobile Installations corporate office in Waddell, Arizona",
      altGuidance:
        "Stylized location pin on a light background. Not a map. Keep alt accurate to what is shown.",
    } satisfies HubImageSlot,
  },

  helpful: {
    h2: "Fleet Installation Information and Resources",
    intro:
      "Learn more about planning, coordinating, and preparing for a commercial fleet-electronics installation project with SB Mobile Installations.",
    /** Stakeholder-supplied card copy. Routes are the canonical informational pages. */
    items: [
      {
        title: "Our Installation Process",
        href: "/our-process/",
        description:
          "Learn how SB Mobile Installations coordinates equipment, vehicles, project locations, scheduling, and field-installation requirements for commercial fleet projects.",
        linkLabel: "View Our Installation Process",
      },
      {
        title: "Quality and Installation Standards",
        href: "/quality-safety/",
        description:
          "Review information about installation preparation, vehicle electrical systems, equipment testing, documentation requirements, and project-quality considerations.",
        linkLabel: "View Quality and Installation Standards",
      },
      {
        title: "Frequently Asked Questions",
        href: "/faq/",
        description:
          "Find answers about GPS, ELD, AOBRD, dashcam, TPMS, telematics, fleet installation projects, project locations, deployment planning, and requesting installation support.",
        linkLabel: "View Fleet Installation FAQs",
      },
      {
        title: "Resources",
        href: "/resources/",
        description:
          "Explore practical resources for planning fleet installation rollouts, coordinating vehicle availability, reducing avoidable delays, and preparing for GPS, ELD, dashcam, and other fleet-electronics installations.",
        linkLabel: "View Fleet Installation Resources",
      },
    ],
  },
} as const;
