import { industriesHubImages as img } from "@/data/site/industries-hub-images";
import type { IndustriesHubPageContent } from "@/types/service-content";

/**
 * Section copy for the `/industries/` hub. The H1, metadata description,
 * intro, and FAQ live in `industriesHubContent` (industries-content.ts).
 *
 * Every claim is gated against docs/_claims-inventory.md. Only commercial
 * fleets and construction (vehicles only) are confirmed verticals. Logistics
 * and delivery and field service are framed as use cases inside commercial
 * fleets, using vehicle types confirmed in row 26. Technology providers is
 * routing copy only: no partnership, authorization, certification, or
 * audience claim (docs/01 questions 29 and 30 are open). No pricing,
 * response-time, availability, state, city, office, platform-name, trailer,
 * or non-vehicle-equipment language appears. No em dash appears in this
 * file; a spaced hyphen is used instead.
 */
export const industriesHubPageContent: IndustriesHubPageContent = {
  metaTitle: "Fleet Technology Installation by Industry",

  hero: {
    primaryCta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    callLabel: "Call",
    qualifier:
      "Tell us about your industry, equipment, vehicle count, locations, and preferred timeline.",
    secondaryLink: {
      label: "Discuss a Fleet Rollout",
      href: "/services/fleet-rollouts/",
    },
    scopeItems: [
      "Commercial fleet projects",
      "On-site installation",
      "Nationwide",
    ],
  },

  answer: {
    h2: "Fleet Installation Support Built Around Your Industry",
    body: [
      "Fleet technology installation is not the same for every operation. Vehicle types, equipment, operating environments, scheduling requirements, and deployment locations can all affect how an installation project is planned and completed.",
      "SB Mobile Installations provides on-site commercial vehicle electronics installation support for fleet, commercial, logistics, delivery, service, and construction vehicles. We install approved hardware such as GPS tracking, ELD and AOBRD systems, TPMS, fleet dashcams, and fleet-management equipment.",
      "Our role is to help coordinate and complete the physical installation work around your vehicles and project requirements. That may include single-vehicle installations, multi-vehicle deployments, scheduled fleet projects, or installation support across multiple locations.",
      "The right starting point depends on your vehicle types, equipment, installation volume, locations, and timeline. Share the details of your project so the installation requirements can be reviewed clearly before work begins.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "On-site installation for commercial and fleet vehicles",
          "Support for GPS, ELD, AOBRD, TPMS, dashcam, and fleet-management equipment",
          "Installation planning based on vehicle type and project requirements",
          "Support for single vehicles and larger commercial deployments",
          "Nationwide mobile installation network",
        ],
      },
    ],
    footnotes: [
      "SB Mobile Installations provides installation support. We install and deploy the hardware; we are not the platform vendor or a compliance consultant.",
    ],
    footnoteCallout: true,
  },

  industries: {
    h2: "Explore Industry Support",
    intro:
      "Choose the page closest to your fleet environment. Each one covers the confirmed installation scope for that type of vehicle.",
    cards: [
      {
        category: "Commercial fleets",
        title: "Commercial Fleets",
        scope:
          "Installation support for fleet and commercial vehicles, including delivery vehicles, service trucks, and work vans.",
        commonUse:
          "Installation context: GPS tracking, ELD, dashcam, and fleet management equipment across a commercial fleet.",
        linkLabel: "Explore commercial fleet support",
        href: "/industries/commercial-fleets/",
        accent: true,
        slot: img.cardCommercial,
      },
      {
        category: "Construction",
        title: "Construction Vehicle Fleets",
        scope: "Installation support for construction vehicles.",
        commonUse:
          "Installation context: technicians travel directly to your location.",
        linkLabel: "Explore construction vehicle support",
        href: "/industries/construction-heavy-equipment/",
        slot: img.cardConstruction,
      },
      {
        category: "Commercial fleet use case",
        title: "Logistics & Delivery Fleets",
        scope:
          "Installation support for delivery vehicles and heavy-duty trucks within commercial fleet projects.",
        commonUse:
          "Installation context: on-site installation, for one vehicle or an entire fleet.",
        linkLabel: "Explore logistics fleet support",
        href: "/industries/logistics-delivery-fleets/",
        slot: img.cardLogistics,
      },
      {
        category: "Commercial fleet use case",
        title: "Field-Service Fleets",
        scope:
          "Installation support for service trucks, work vans, and utility vehicles within commercial fleet projects.",
        commonUse:
          "Installation context: on-site installation across service vehicles, for one vehicle or an entire fleet.",
        linkLabel: "Explore field-service fleet support",
        href: "/industries/field-service-fleets/",
        slot: img.cardFieldService,
      },
      {
        category: "Hardware deployment programs",
        title: "Technology Providers",
        scope:
          "Use this starting point to describe an installation request connected to a hardware deployment program. SB Mobile provides installation and deployment support, not the underlying technology platform.",
        commonUse:
          "Starting point: describe your program in an installation quote request.",
        linkLabel: "Explore technology provider support",
        href: "/industries/telematics-technology-providers/",
        slot: img.cardTechnology,
      },
    ],
  },

  decisionGuide: {
    h2: "Find the Right Starting Point for Your Installation Project",
    intro:
      "Find the situation closest to yours. Each route leads to the page that fits it.",
    rows: [
      {
        situation: "Your project involves commercial vehicles across a fleet",
        destination: "Commercial Fleets",
        linkLabel: "Explore commercial fleet support",
        href: "/industries/commercial-fleets/",
      },
      {
        situation: "Your project involves construction vehicles",
        destination: "Construction Vehicle Fleets",
        linkLabel: "Explore construction vehicle support",
        href: "/industries/construction-heavy-equipment/",
      },
      {
        situation:
          "You know the equipment you need installed, such as GPS, ELD, or dashcam hardware",
        destination: "Installation services",
        linkLabel: "Explore installation services",
        href: "/services/",
      },
      {
        situation: "You are coordinating many vehicles or multiple locations",
        destination: "Fleet Rollout Services",
        linkLabel: "Discuss a fleet rollout",
        href: "/services/fleet-rollouts/",
      },
      {
        situation:
          "You are describing an installation request tied to a hardware deployment program",
        destination: "Technology Providers",
        linkLabel: "Explore technology provider support",
        href: "/industries/telematics-technology-providers/",
      },
    ],
  },

  capability: {
    h2: "Installation Planning for Commercial Fleet Environments",
    body: [
      "Installation planning starts with your vehicles, your equipment, and your project locations. SB Mobile Installations installs fleet technology on fleet, commercial, and construction vehicles, with technicians traveling directly to your location.",
    ],
    lists: [
      {
        items: [
          "On-site installation at your location",
          "One vehicle or an entire fleet",
          "Every installation photo documented, with documentation delivered automatically",
          "Nationwide project discussion",
          "Project location and timeline intake",
        ],
      },
    ],
    links: [
      { label: "Fleet installation services", href: "/services/" },
      {
        label: "Installation quality and safety approach",
        href: "/quality-safety/",
      },
    ],
  },

  intake: {
    h2: "Project Details That Help Shape Installation Planning",
    body: [
      "Including these details in your request helps SB Mobile Installations route your inquiry to the right service and follow up on scope.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "Vehicle type: helps identify the fleet environment for your project",
          "Equipment type: helps route your request to the relevant service",
          "Vehicle count: helps separate a single installation from a fleet rollout",
          "Number of locations: helps show whether the project needs coordination across sites",
          "Operating schedule: helps plan work around vehicle availability",
          "Timeline: helps start the project-scope conversation",
        ],
      },
    ],
  },

  nationwide: {
    h2: "On-Site Fleet Installation Support Nationwide",
    body: [
      "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location. Technicians travel directly to each project location.",
      "Tell us your industry, equipment, vehicle count, and project locations so your inquiry can be routed appropriately.",
    ],
    links: [
      { label: "Explore Nationwide Coverage", href: "/coverage/" },
      {
        label: "How fleet installation projects are coordinated",
        href: "/our-process/",
      },
    ],
  },

  services: {
    h2: "Explore Fleet Installation Services",
    cards: [
      {
        title: "Fleet Telematics Installation",
        description:
          "GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        title: "GPS Tracking Installation",
        description: "On-site installation of GPS tracking hardware.",
        linkLabel: "Explore GPS tracking installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        title: "ELD Installation",
        description: "Installation of ELD and AOBRD equipment.",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        title: "Dashcam & Camera Installation",
        description:
          "Fleet dashcam and windshield-mounted video recorder installation.",
        linkLabel: "Explore dashcam and camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        title: "Fleet Rollout Services",
        description:
          "Coordinated multi-vehicle and multi-location installation projects.",
        linkLabel: "Explore fleet rollout services",
        href: "/services/fleet-rollouts/",
      },
      {
        title: "All installation services",
        description: "See every installation service in one place.",
        linkLabel: "Explore all fleet installation services",
        href: "/services/",
      },
    ],
  },

  faqHeading: "Industry Support FAQs",

  quote: {
    h2: "Discuss Your Fleet Installation Project",
    intro:
      "Share your industry, equipment type, vehicle count, project locations, and preferred timeline. We will use those details to route your installation inquiry appropriately.",
    phoneLead:
      "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
  },
};
