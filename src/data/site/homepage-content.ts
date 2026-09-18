import type { Cta, HomepageContent } from "@/types/content";

/**
 * Locked homepage copy.
 *
 * Restructured 2026-09-18 for the commercial-first override recorded in
 * 01-business-source-of-truth.md section 32. Every claim here is gated
 * against docs/_claims-inventory.md; nothing marked "needs confirmation"
 * there appears below.
 *
 * Facts used here and their source-of-truth status:
 *   In business since 2011  Approved, section 4 and 25
 *   Nationwide service      Approved, section 8.2
 *   No physical office      Approved, section 5.3
 *   Mon-Fri 8:00 AM-6:00 PM Approved, section 5.4
 *   Equipment scope         Approved by stakeholder 2026-09-10, section 9.1
 *   Vehicle scope           Approved by stakeholder 2026-09-10, section 12.1
 *   Platform experience     Approved by stakeholder 2026-09-10, section 14
 *   Contractor engagement   Approved by stakeholder 2026-09-10, section 7.2
 *   Project capacity range  Approved by stakeholder 2026-09-10, section 11.1
 *   Photo documentation     Approved by stakeholder 2026-09-10, section 17.1
 *
 * Capacity and reach are separate confirmed facts. "one vehicle or an entire
 * fleet" rests on section 11.1, not on the nationwide reach in section 8.2.
 * Neither may be derived from the other. See the guardrail in section 25.
 *
 * The photo documentation sentence is the approved exact wording: "Every
 * installation is photo documented, and you'll receive that documentation
 * automatically." No timeframe, format, channel, or retention period is
 * added anywhere this sentence appears.
 *
 * Pricing, warranties, guarantees, and response times are omitted entirely
 * per docs/_claims-inventory.md item 21 (unconfirmed across the board).
 *
 * No em dash appears in any string in this file. Section 3.1 of CLAUDE.md is
 * project wide.
 */

const CONTACT_ROUTE = "/contact/";
const TECHNICIAN_ROLE_ROUTE = "/careers/mobile-installation-technician/";

const QUOTE_CTA: Cta = {
  label: "Request an Installation Quote",
  href: CONTACT_ROUTE,
  journey: "commercial",
  event: "cta_quote_click",
};

const JOIN_NETWORK_CTA: Cta = {
  label: "Join the Installer Network",
  href: TECHNICIAN_ROLE_ROUTE,
  journey: "recruitment",
  event: "cta_installer_network_click",
};

export const homepageContent: HomepageContent = {
  hero: {
    h1: "Mobile Installation of GPS, ELD, and Fleet Electronics, Nationwide",
    subhead:
      "SB Mobile Installations sends technicians directly to your location to install GPS, ELD, and fleet electronics on fleet, commercial, and construction vehicles - one vehicle or an entire fleet. In business since 2011, nationwide.",
    primaryCta: QUOTE_CTA,
    secondaryCta: JOIN_NETWORK_CTA,
  },

  directAnswer: {
    body: "SB Mobile Installations is a mobile installation company that provides on-site GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide, and connects independent contractor technicians with installation work across the country. The company has been in business since 2011 and works entirely on-site - there is no physical office location.",
  },

  whatWeInstall: {
    h2: "What We Install",
    intro:
      "SB Mobile Installations installs the equipment categories below on fleet, commercial, and construction vehicles nationwide.",
  },

  whyChooseUs: {
    h2: "Why Fleet Managers Choose SB Mobile Installations",
    items: [
      {
        title: "Photo Documentation on Every Install",
        body: "Every installation is photo documented, and you'll receive that documentation automatically.",
      },
      {
        title: "Nationwide Reach",
        body: "Technicians travel directly to your location, wherever you operate in the United States.",
      },
      {
        title: "In Business Since 2011",
        body: "SB Mobile Installations has been in business since 2011, installing GPS, ELD, and fleet electronics equipment.",
      },
      {
        title: "A Contractor Network Built for the Work",
        body: "Installations are completed by technicians engaged as independent contractors, not employees, working on-site at your location.",
      },
    ],
  },

  // Narrowly factual, non-promissory summary. This is deliberately not a
  // claimed multi-step company process - the fuller process description
  // (any additional stages beyond what is confirmed here) is pending
  // stakeholder confirmation. See docs/_claims-inventory.md.
  process: {
    h2: "How a Deployment Works",
    body: "We coordinate project details, schedule on-site installation, and document completed installation work. An independent contractor technician travels directly to your location to complete the installation, one vehicle or an entire fleet, Monday through Friday, 8:00 AM to 6:00 PM.",
  },

  largeRollout: {
    h2: "One Vehicle or an Entire Fleet",
    body: "SB Mobile Installations coordinates installation projects of any size nationwide, from a single vehicle to a full fleet rollout, with technicians traveling directly to each location.",
    cta: QUOTE_CTA,
  },

  commercial: {
    h2: "Installation Services for Fleet and Commercial Vehicles",
    body: "SB Mobile Installations provides mobile GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide, coordinated on-site at your location. We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know. In business since 2011, with technicians who travel directly to you.",
    cta: QUOTE_CTA,
  },

  recruitingBanner: {
    h2: "Become a Mobile Installation Technician",
    body: "SB Mobile Installations works with independent contractor technicians on GPS and fleet electronics installation projects nationwide. If you have experience with vehicle electrical systems and want on-site contract work, join our Installer Network. Joining does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    cta: JOIN_NETWORK_CTA,
  },

  /**
   * Stakeholder-content-pending slot. Empty until real, approved proof
   * content (metrics, not testimonials or ratings, since none of those are
   * ever published per docs/_claims-inventory.md item 20) exists.
   */
  proof: {
    items: [],
  },

  trust: {
    h2: "Why SB Mobile Installations",
    body: "Nationwide reach. In business since 2011. A mobile-first model built around showing up where the work is - not a storefront. We work directly with fleet operators and technicians, without unnecessary layers.",
  },

  faq: {
    items: [
      {
        question: "What equipment do you install?",
        answer:
          "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles, working with platforms including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, and dashcam systems.",
      },
      {
        question: "What areas does SB Mobile Installations serve?",
        answer:
          "SB Mobile Installations serves fleet and commercial vehicle customers nationwide, with technicians traveling directly to each project location.",
      },
      {
        question: "Do you document completed installations?",
        answer:
          "Every installation is photo documented, and you'll receive that documentation automatically.",
      },
      {
        question: "Can you handle one vehicle, or does it have to be a full fleet?",
        answer:
          "SB Mobile Installations coordinates projects of any size nationwide, one vehicle or an entire fleet.",
      },
      {
        question: "What are your hours?",
        answer:
          "SB Mobile Installations operates Monday through Friday, 8:00 AM to 6:00 PM.",
      },
      {
        question: "Does SB Mobile Installations hire independent contractors?",
        answer:
          "SB Mobile Installations works with independent contractor technicians nationwide on mobile installation projects, not W-2 employment positions. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "Do you have a physical office?",
        answer:
          "SB Mobile Installations operates as a mobile-only company with no physical office - technicians travel directly to each job site.",
      },
    ],
  },

  finalCta: {
    h2: "Ready to Get Started?",
    primaryCta: QUOTE_CTA,
    secondaryCta: JOIN_NETWORK_CTA,
  },
};
