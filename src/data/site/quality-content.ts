import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import {
  getServiceCard,
  SERVICE_CARD_ORDER,
  vehicleContext,
} from "@/data/site/service-pages-content";

/**
 * `/quality-safety/` content.
 *
 * Working brief: the stakeholder-supplied page brief pasted 2026-09-24. No
 * page brief exists in docs/briefs/. Approved by the user that day: the
 * "Quality & Safety" H1 (matches the route and footer label), the replaced
 * meta description, the exact photo-documentation sentence, and the nationwide
 * statement (docs/01 line 1017).
 *
 * SOURCE-OF-TRUTH FLAG: docs/01 section 21 says no company-wide safety
 * program, regulatory compliance statement, insurance coverage, bonding
 * status, or formal installation standard is approved, and section 16.1 is a
 * hard client decision against certifications, licenses, insurance, and
 * placeholders for them. This page is therefore a controlled scope and
 * documentation page. It makes no claim about quality assurance, safety
 * protocols, training, inspection, testing, validation, warranties, or
 * outcomes. The only proof-oriented statement is the approved
 * photo-documentation sentence (docs/01 section 25, claims inventory row 10),
 * used word for word.
 *
 * Service cards and vehicle examples are read from service-pages-content.ts so
 * they cannot drift from the service pages. Q&A answers are user-supplied and
 * kept as written.
 */

export const PHOTO_DOCUMENTATION_SENTENCE =
  "Every installation is photo documented, and you'll receive that documentation automatically.";

const NATIONWIDE_SENTENCE =
  "Nationwide mobile installation service, delivered at the customer's location.";

const QUOTE_QUALIFIER =
  "Tell us about your equipment, vehicle count, project locations, and preferred timing.";

export const qualitySafetyContent = {
  h1: "Quality & Safety",
  // The layout title template appends " | SB Mobile Installations".
  metaTitle: "Quality & Safety | Mobile Fleet Installation",
  metaDescription:
    "Nationwide mobile installation service, delivered at the customer's location. Every installation is photo documented, and you'll receive that documentation automatically.",

  hero: {
    eyebrow: "Commercial Installation Information",
    paragraphs: [
      "SB Mobile Installations provides nationwide mobile installation service at the customer's location. Our commercial installation pages explain approved installation scope, vehicle context, and documentation for your project.",
    ],
    cta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    qualifier: QUOTE_QUALIFIER,
    documentationLine: PHOTO_DOCUMENTATION_SENTENCE,
  },

  scope: {
    // Accessible heading only; the strip shows three short static cards.
    accessibleHeading: "Scope of this page",
    cards: [
      {
        title: "Commercial installation focus",
        body: "Information on this page is intended for commercial vehicle installation projects.",
      },
      {
        title: "Mobile project location",
        body: NATIONWIDE_SENTENCE,
      },
      {
        title: "Installation documentation",
        body: PHOTO_DOCUMENTATION_SENTENCE,
      },
    ],
  },

  documentation: {
    h2: "Installation Documentation",
    sentence: PHOTO_DOCUMENTATION_SENTENCE,
    link: { label: "Request an Installation Quote", href: "#request-quote" },
    // Static labels that repeat approved language only. Not a portal mockup.
    panelLabels: [
      "Installation documentation",
      "Photo documented",
      "Provided automatically",
    ],
  },

  services: {
    h2: "Commercial Installation Context",
    intro:
      "These pages describe the physical installation context for each approved service. ELD content does not represent compliance or legal advice.",
    cards: SERVICE_CARD_ORDER.map((slug) => getServiceCard(slug)),
  },

  vehicles: {
    h2: "Installation Context for Commercial Vehicles",
    lead: "Common project contexts include work vans, service trucks, utility vehicles, heavy-duty trucks, fleet vehicles, commercial vehicles, and construction vehicles.",
    note: vehicleContext.note,
  },

  projectLocation: {
    h2: "Mobile Installation at Your Project Location",
    body: [NATIONWIDE_SENTENCE],
  },

  projectInfo: {
    h2: "Installation Scope and Project Information",
    body: "SB Mobile Installations provides mobile installation service for approved commercial fleet-technology installation contexts. Details about equipment, vehicle count, project locations, and preferred timing can be shared when requesting an installation quote.",
    discussHeading: "What we can discuss",
    discussItems: [
      "Equipment",
      "Vehicle count",
      "Project locations",
      "Preferred timing",
    ],
  },

  questions: {
    h2: "Questions About Installation Documentation and Scope",
    items: [
      {
        question: "What documentation is provided after installation?",
        answer: PHOTO_DOCUMENTATION_SENTENCE,
      },
      {
        question: "Where does SB Mobile Installations provide service?",
        answer:
          "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location.",
      },
      {
        question: "What information should I include in an installation quote request?",
        answer: QUOTE_QUALIFIER,
      },
      {
        question: "What installation contexts can be discussed?",
        answer:
          "Approved service contexts include fleet telematics installation, GPS tracking installation, ELD installation, fleet dashcam and video recorder installation, and fleet rollout installation services.",
      },
      {
        question: "Does ELD installation include compliance or legal advice?",
        answer:
          "No. ELD content describes physical installation context and does not represent compliance or legal advice.",
      },
      {
        question: "Does the page describe every vehicle and hardware combination?",
        answer: `No. ${vehicleContext.note}`,
      },
    ],
  },

  quote: {
    h2: "Request an Installation Quote",
    intro: QUOTE_QUALIFIER,
    // Field labels, payload, validation, and analytics are unchanged.
    formCopy: {
      serviceNeed: "Equipment or service needed",
      submit: "Submit Installation Request",
    },
  },

  // Quiet recruitment handoff: text only, separate journey and event.
  handoff: {
    prompt: "Are you an experienced mobile fleet installation technician?",
    link: {
      label: "Learn about the SB Mobile Installations Installer Network",
      href: INSTALLER_NETWORK_PATH,
      journey: "recruitment",
      event: "cta_installer_network_click",
    },
  },

  related: {
    h2: "Related Resources",
    links: [
      ...SERVICE_CARD_ORDER.map((slug) => {
        const card = getServiceCard(slug);
        return { label: card.title, href: card.href };
      }),
      { label: "Nationwide fleet installation coverage", href: "/coverage/" },
      { label: "Contact SB Mobile Installations", href: "/contact/" },
    ],
  },
} as const;
