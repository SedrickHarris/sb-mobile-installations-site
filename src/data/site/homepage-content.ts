import type { Cta, HomepageContent } from "@/types/content";

/**
 * Locked homepage copy.
 *
 * Every string in this file is approved content. Do not rewrite, trim,
 * paraphrase, or correct it. Changes require a content update approved
 * against 01-business-source-of-truth.md.
 *
 * Facts used here and their source-of-truth status:
 *   15 years in business    Approved, section 4 and 25
 *   Nationwide service      Approved, section 8.2
 *   No physical office      Approved, section 5.3
 *   Mon-Fri 8:00 AM-6:00 PM Approved, section 5.4
 *   Equipment scope         Approved by stakeholder 2026-09-10, section 9.1
 *   Vehicle scope           Approved by stakeholder 2026-09-10, section 12.1
 *   Platform experience     Approved by stakeholder 2026-09-10, section 14
 *   Contractor engagement   Approved by stakeholder 2026-09-10, section 7.2
 *
 *   Project capacity range  Approved by stakeholder 2026-09-10, section 11.1
 *   Photo documentation     Approved by stakeholder 2026-09-10, section 17.1
 *
 * The last two were flagged as unverified during the 2026-09-10 content pass
 * and were confirmed by the stakeholder the same day. Section 31 records the
 * resolution. No string in this file carries an unverified claim.
 *
 * Capacity and reach are separate confirmed facts. "one vehicle or an entire
 * fleet" rests on section 11.1, not on the nationwide reach in section 8.2.
 * Neither may be derived from the other. See the guardrail in section 25.
 *
 * The photo documentation sentence is a delivery promise, which the 2026-09-10
 * confirmation supports: documentation is sent to every customer automatically,
 * without being requested. Do not weaken it into on-request phrasing. Do not
 * add a timeframe, format, channel, or retention period. See section 17.1.
 *
 * No em dash appears in any string in this file. Section 3.1 of CLAUDE.md is
 * project wide and applies to supplied copy. Where the supplied copy used an
 * em dash, it carries a spaced hyphen instead, with the wording unchanged.
 */

/**
 * Routes referenced by homepage CTAs.
 *
 * Neither route has a page yet. Both are flagged as pending in the build
 * report. They must exist before this page is deployed, or the CTAs will
 * resolve to a 404 in the static export.
 */
const CAREERS_ROUTE = "/careers/";
const SERVICES_ROUTE = "/services/";

const APPLY_CTA: Cta = {
  label: "Apply as a Mobile Installation Technician",
  href: CAREERS_ROUTE,
  journey: "recruitment",
  event: "cta_apply_click",
};

const QUOTE_CTA: Cta = {
  label: "Request an Installation Quote",
  href: SERVICES_ROUTE,
  journey: "commercial",
  event: "cta_quote_click",
};

export const homepageContent: HomepageContent = {
  hero: {
    h1: "Mobile Installation Technicians for Fleet Technology, Nationwide",
    subhead:
      "SB Mobile Installations connects fleet operators with mobile technicians who travel on-site to install GPS and fleet electronics - and connects skilled installers with nationwide contract work. 15 years in the field - technicians travel to you, wherever you are.",
    primaryCta: APPLY_CTA,
    secondaryCta: QUOTE_CTA,
  },

  directAnswer: {
    body: "SB Mobile Installations is a mobile installation company that provides on-site GPS, ELD, and fleet electronics installation for commercial and construction vehicles nationwide, and connects independent contractor technicians with installation work across the country. The company has operated for 15 years and works entirely on-site - there is no physical office location.",
  },

  about: {
    h2: "About SB Mobile Installations",
    body: [
      "For 15 years, SB Mobile Installations has installed GPS, ELD, AOBRD, and fleet management equipment on fleet, commercial, and construction vehicles nationwide. Our independent contractor technicians travel directly to each customer's location - there's no physical office, no shop visit required, and no waiting for equipment to come to you.",
      "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, Lytx/DriveCam, SmartDrive, and CalAmp, along with TPMS and dashcam installations. Every installation is photo documented, and you'll receive that documentation automatically.",
      "We operate Monday through Friday, 8:00 AM to 6:00 PM, and coordinate projects across the country - one vehicle or an entire fleet.",
    ],
  },

  recruiting: {
    h2: "Become a Mobile Installation Technician",
    body: "SB Mobile Installations works with independent contractor technicians on GPS and fleet electronics installation projects nationwide. If you have experience with vehicle electrical systems and want flexible, on-site contract work, apply to join our technician network.",
    cta: APPLY_CTA,
  },

  commercial: {
    h2: "Installation Services for Fleet and Commercial Vehicles",
    body: "SB Mobile Installations provides mobile GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide, coordinated on-site at your location. We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know. We've been doing this for 15 years - straightforward pricing conversations and technicians who show up ready to work.",
    cta: QUOTE_CTA,
  },

  trust: {
    h2: "Why SB Mobile Installations",
    body: "Nationwide reach. 15 years in the field. A mobile-first model built around showing up where the work is - not a storefront. We work directly with fleet operators and technicians, without unnecessary layers.",
  },

  faq: {
    items: [
      {
        question:
          "What does a mobile installation technician do at SB Mobile Installations?",
        answer:
          "Mobile installation technicians travel to customer locations to install GPS and fleet electronics equipment on commercial vehicles, working as independent contractors on a project basis.",
      },
      {
        question: "Does SB Mobile Installations hire independent contractors?",
        answer:
          "SB Mobile Installations works with independent contractor technicians nationwide on mobile installation projects, not W-2 employment positions.",
      },
      {
        question: "What areas does SB Mobile Installations serve?",
        answer:
          "SB Mobile Installations serves fleet and commercial vehicle customers nationwide, with technicians traveling directly to each project location.",
      },
      {
        question: "What equipment do you install?",
        answer:
          "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles, working with platforms including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, and dashcam systems.",
      },
      {
        question: "What are your hours?",
        answer:
          "SB Mobile Installations operates Monday through Friday, 8:00 AM to 6:00 PM.",
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
    primaryCta: APPLY_CTA,
    secondaryCta: QUOTE_CTA,
  },
};
