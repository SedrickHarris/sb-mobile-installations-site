import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import {
  getServiceCard,
  SERVICE_CARD_ORDER,
  vehicleContext,
} from "@/data/site/service-pages-content";
import type { CoverageData } from "@/types/content";

/**
 * Reusable data model for coverage content, current and future.
 *
 * `nationwide` is the only populated key in Sprint 2 - it is the single
 * canonical `/coverage/` page (Tier 0 of the roadmap in the approved plan).
 * `regions`, `states`, and `metros` stay empty objects until Sprint 3+ meets
 * the plan's evidence-gating rubric (existing work/relationships, technician
 * capacity, fleet density, search/lead demand, service relevance, unique
 * proof availability). Route generation reads only populated keys, so these
 * empty objects publish zero routes - see src/app/coverage/ (Sprint 3+ will
 * add src/app/coverage/[state]/ etc. reading from `states`).
 *
 * Every claim below is gated against docs/_claims-inventory.md and
 * docs/01-business-source-of-truth.md section 25 (approved factual wording).
 * No `Service.areaServed` state enumeration is derived from this data in
 * Sprint 2 - see src/lib/schema/webpage.ts, used (not servicePageSchema) for
 * `/coverage/`.
 *
 * Service names, descriptions, and routes are read from the approved service
 * cards (service-pages-content.ts), never retyped here, so they cannot drift
 * from the service pages. The vehicle examples and their clarification come
 * from the same shared source.
 */

const SERVICE_CARDS = SERVICE_CARD_ORDER.map((slug) => getServiceCard(slug));
const FLEET_ROLLOUT_CARD = getServiceCard("fleet-rollouts");

const AVAILABILITY_SENTENCE =
  "Share your project details so SB Mobile Installations can determine whether the request fits the available service context.";

/** "a, b, and c" for three or more items; "a and b" for two. */
function joinWithAnd(items: readonly string[]): string {
  const last = items[items.length - 1] ?? "";
  if (items.length < 2) return last;
  const head = items.slice(0, -1);
  return head.length === 1 ? `${head[0]} and ${last}` : `${head.join(", ")}, and ${last}`;
}

const SERVICE_TITLE_LIST = joinWithAnd(SERVICE_CARDS.map((card) => card.title));
const VEHICLE_EXAMPLE_LIST = joinWithAnd(
  vehicleContext.examples.map((example) => example.toLowerCase()),
);

export const coverage = {
  nationwide: {
    h1: "Nationwide Mobile Fleet Installation Coverage",
    metaDescription:
      "Learn about nationwide mobile fleet installation service delivered at the customer's location. Share your equipment, vehicle count, project locations, and preferred timing in an installation quote request.",
    hero: {
      eyebrow: "Nationwide Mobile Installation Context",
      paragraphs: [
        "Nationwide mobile installation service, delivered at the customer's location.",
        "Tell us about your equipment, vehicle count, project locations, and preferred timing to discuss your installation request.",
      ],
      primaryCta: {
        label: "Request an Installation Quote",
        href: "#request-quote",
        journey: "commercial",
        event: "cta_quote_click",
      },
      callLabel: "Call SB Mobile Installations",
      // "In business since 2011" is confirmed (docs/_claims-inventory.md row 11),
      // but a one-item trust row reads as isolated, so no trust row renders.
    },
    introSection: {
      h2: "What Does Nationwide Mobile Installation Mean?",
      body: [
        "Nationwide mobile installation service, delivered at the customer's location.",
        `Share your equipment, vehicle count, project locations, and preferred timing to discuss an installation request. ${AVAILABILITY_SENTENCE}`,
      ],
    },
    requestStart: {
      h2: "Start With Your Installation Request",
      items: [
        {
          label: "Equipment",
          description: "Share the approved hardware context for the request.",
        },
        {
          label: "Vehicle count",
          description: "Describe the number of vehicles involved.",
        },
        {
          label: "Project locations",
          description: "Share the locations relevant to the request.",
        },
        {
          label: "Preferred timing",
          description: "Include your preferred timing.",
        },
      ],
      note: "These details help frame your installation request.",
      link: { label: "Request an Installation Quote", href: "#request-quote" },
    },
    services: {
      h2: "Fleet Installation Services We Can Discuss",
      cards: SERVICE_CARDS,
    },
    vehicles: {
      h2: "Vehicle Context for Installation Projects",
      examplesHeading: vehicleContext.listHeading,
      examples: vehicleContext.examples,
      categoriesHeading: "Vehicle categories",
      // docs/01 section 12.1: fleet, commercial, and construction vehicles.
      categories: ["Fleet vehicles", "Commercial vehicles", "Construction vehicles"],
      note: vehicleContext.note,
    },
    explore: {
      h2: "Explore How SB Mobile Works",
      links: [
        { label: "Our Process", href: "/our-process/" },
        { label: "Quality & Safety", href: "/quality-safety/" },
        { label: "Fleet Installation Services", href: "/services/" },
        { label: "Frequently Asked Questions", href: "/faq/" },
        { label: "Resources", href: "/resources/" },
      ],
    },
    faqHeading: "Coverage FAQ",
    faq: [
      {
        question:
          "Does SB Mobile Installations provide mobile installation service nationwide?",
        answer: `Nationwide mobile installation service is delivered at the customer's location. Share your equipment, vehicle count, project locations, and preferred timing to discuss an installation request. ${AVAILABILITY_SENTENCE}`,
      },
      {
        question: "What information should I include in an installation request?",
        answer:
          "Include the equipment involved, the number of vehicles or assets, the project location or locations, and your preferred timing. Additional project details can be included in the request form so the installation context is clear.",
      },
      {
        question:
          "Can I request fleet installation support for multiple project locations?",
        answer: `${FLEET_ROLLOUT_CARD.title} is the approved starting point for requests involving one vehicle or an entire fleet and multiple project locations. Share the equipment, vehicle count, locations, and preferred timing. ${AVAILABILITY_SENTENCE}`,
        link: { label: FLEET_ROLLOUT_CARD.title, href: FLEET_ROLLOUT_CARD.href },
      },
      {
        question: "What fleet installation services can I ask about?",
        answer: `You can explore ${SERVICE_TITLE_LIST}. Each service page provides more specific information about the approved service category.`,
        links: SERVICE_CARDS.map((card) => ({ label: card.title, href: card.href })),
      },
      {
        question: "What vehicle types can be part of an installation project?",
        answer: `Common project contexts include ${VEHICLE_EXAMPLE_LIST}. ${vehicleContext.note}`,
      },
    ],
    quote: {
      h2: "Request an Installation Quote",
      intro: `Tell us about your equipment, vehicle count, project locations, and preferred timing. ${AVAILABILITY_SENTENCE}`,
      phoneLead:
        "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
    },
    // Text link only; same journey and event as the existing Installer Network
    // links (homepage-content.ts, careers-hub-content.ts).
    handoff: {
      question: "Are you an experienced mobile fleet installation technician?",
      link: {
        label: "Learn about the SB Mobile Installations Installer Network",
        href: INSTALLER_NETWORK_PATH,
        journey: "recruitment",
        event: "cta_installer_network_click",
      },
    },
  },
  // Sprint 3+, gated on the plan's per-state scoring rubric (existing
  // work/relationships 30%, technician/network availability 20%, fleet
  // density 15%, search/lead demand 15%, service relevance 10%, unique
  // proof availability 10%; publish only at >= 70/100). Empty until then.
  regions: {},
  states: {},
  // Sprint 4+, gated on a proven customer/job footprint and technician
  // capacity in that metro. Empty until then.
  metros: {},
} satisfies CoverageData;
