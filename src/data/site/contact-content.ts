import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import { coverage } from "@/data/commercial/coverage";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import { faqPageContent } from "@/data/site/faq-content";
import { ourProcessContent } from "@/data/site/process-content";
import { qualitySafetyContent } from "@/data/site/quality-content";
import { resourcesHubContent } from "@/data/site/resources-content";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta } from "@/types/content";

/**
 * Copy for the `/contact/` commercial quote page.
 *
 * Stakeholder-approved as quote-first (docs/decisions/0008). Every line is
 * either supplied in the approved recommendation or read from an existing
 * approved data object: the nationwide statement from `coverage`, teasers
 * from the Process, Quality, FAQ, and Resources content, and the installer
 * questions block from the Careers landing content. No pricing, response-time,
 * scheduling, availability, certification, or state and city language.
 */

const QUOTE_CTA: Cta = {
  label: "Request an Installation Quote",
  href: "#request-quote",
  journey: "commercial",
  event: "cta_quote_click",
};

const careersContact = careersLandingContent.contact;

export const contactContent = {
  metaTitle: "Request a Fleet Installation Quote",
  metaDescription:
    "Request a commercial fleet installation quote. Share your equipment, vehicle count, project locations, and preferred timing with SB Mobile Installations.",

  h1: "Request an Installation Quote",

  hero: {
    eyebrow: "Commercial Installation Requests",
    intro:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    primaryCta: QUOTE_CTA,
    callLabel: "Call SB Mobile Installations at",
    /**
     * No approved image exists. With no `src`, production renders the
     * decorative route fallback (no photo, no map, no label).
     */
    image: {
      slotId: "contact-hero",
      role: "Decorative route-line visual for the commercial quote page hero",
      aspectRatio: "4 / 3",
      width: 2896,
      height: 2172,
      fallback: "route",
      alt: "",
      altGuidance:
        "Decorative only. If a photo is supplied later: unbranded commercial fleet vehicles at a fleet yard. No maps, pins, dashboards, logos, plates, readable text, or people implying a specific assignment.",
    } satisfies HubImageSlot,
  },

  include: {
    h2: "What to Include in Your Installation Request",
    items: [
      { title: "Equipment", body: "Describe the equipment involved in your request." },
      { title: "Vehicle count", body: "Share the number of vehicles involved." },
      {
        title: "Project locations",
        body: "Include the locations relevant to your request.",
      },
      { title: "Preferred timing", body: "Let us know your preferred timing." },
    ],
    closing: "These details help frame your installation request.",
  },

  services: {
    h2: "Explore Fleet Installation Services",
    intro: "Review the service page that best matches your installation request.",
  },

  nationwide: {
    h2: "Mobile Installation at Your Project Location",
    /** Single approved nationwide sentence, read from the coverage data. */
    statement: coverage.nationwide.hero.paragraphs[0],
    linkLabel: "Learn more about coverage",
    href: "/coverage/",
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
    phoneLead: "Need help by phone?",
  },

  helpful: {
    h2: "Helpful Information",
    items: [
      {
        title: "Our Process",
        href: "/our-process/",
        description: ourProcessContent.metaDescription,
      },
      {
        title: "Quality & Safety",
        href: "/quality-safety/",
        description: qualitySafetyContent.metaDescription,
      },
      {
        title: "Frequently Asked Questions",
        href: "/faq/",
        description: faqPageContent.metaDescription,
      },
      {
        title: "Resources",
        href: "/resources/",
        description: resourcesHubContent.metaDescription,
      },
    ],
  },

  /**
   * Installer questions block, from the Careers landing content. On this page
   * it keeps only the Installer Network path. The active-opening path (which
   * uses "Apply") stays on `/careers/` (CLAUDE.md section 4).
   */
  installer: {
    eyebrow: careersContact.eyebrow,
    h2: careersContact.h2,
    body: careersContact.body,
    clarification: careersContact.clarification,
    hours: careersContact.hours,
    pathsHeading: careersContact.pathsHeading,
    paths: careersContact.paths.filter((path) => path.href === INSTALLER_NETWORK_PATH),
  },
} as const;
