import { INSTALLER_NETWORK_PATH } from "@/data/jobs/routes";
import { utilityBar } from "@/data/navigation/site-navigation";
import { careersHubImages } from "@/data/site/careers-hub-images";
import { careersLandingContent } from "@/data/site/careers-landing-content";
import {
  dashcamCameraInstallationContent,
  eldInstallationContent,
  fleetRolloutsContent,
  fleetTelematicsInstallationContent,
  gpsTrackingInstallationContent,
} from "@/data/site/services-content";
import {
  servicePagesImages,
  type ServiceSlug,
} from "@/data/site/service-pages-images";
import type {
  HubLink,
  HubRelatedCard,
  HubSplitSection,
  ServicePageBundle,
  ServiceTemplateContent,
  ServiceTemplateShared,
} from "@/types/service-content";

/**
 * Section copy for the five service pages, rendered by ServicePageTemplate.
 *
 * Every claim is gated against docs/_claims-inventory.md. Confirmed inputs:
 * the six equipment categories (rows 1 to 6), fleet, commercial, and
 * construction vehicles (row 16), vehicle examples work vans, service trucks,
 * utility vehicles, and heavy-duty trucks (rows 26 and 39), "one vehicle or
 * an entire fleet" (row 15), on-site work at the customer's location, and the
 * exact photo-documentation sentence (row 10). "Mounting, connection, and
 * routing" is stakeholder-supplied wording (decision 0005).
 *
 * Deliberately absent: setup, activation, calibration, configuration,
 * testing, validation, integration, verification, certification, quality
 * assurance, warranty, guarantee promises, pricing, response times,
 * same-day or emergency claims, "near me", any state or city, trailers,
 * pickups, buses, heavy equipment, "legacy", and any platform brand name in
 * new copy (existing FAQs keep their approved experience-only wording). No em
 * dash appears in this file; a spaced hyphen would be used instead.
 */

const SERVICES_ROUTE = "/services/";
const FORM_ANCHOR = "#request-quote";

const shared: ServiceTemplateShared = {
  callLabel: "Call",
  heroEyebrow: "Fleet Technology Installation Services",
  heroQualifier:
    "Tell us about your equipment, vehicle count, project locations, and preferred timing.",
  vehicles: {
    h2: "Installation Context for Commercial Vehicles",
    listHeading: "Vehicle examples",
    examples: ["Work vans", "Service trucks", "Utility vehicles", "Heavy-duty trucks"],
    note: "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
  },
  nationwide: {
    h2: "Mobile Installation at Your Project Location",
    lead: "Nationwide mobile installation service, delivered at the customer's location.",
    links: [
      {
        label: "Explore nationwide fleet installation coverage",
        href: "/coverage/",
      },
      {
        label: "How fleet installation projects are coordinated",
        href: "/our-process/",
      },
    ],
  },
  documentation: {
    h2: "Installation Documentation",
    sentence:
      "Every installation is photo documented, and you'll receive that documentation automatically.",
    links: [
      {
        label: "Learn about installation quality and safety",
        href: "/quality-safety/",
      },
    ],
  },
  related: {
    h2: "Related Fleet Installation Services",
    allCard: {
      title: "All installation services",
      description: "See every installation service in one place.",
      linkLabel: "Explore all fleet installation services",
      href: SERVICES_ROUTE,
    },
  },
  quote: {
    intro:
      "Tell us about the approved equipment, your vehicle count, project location or locations, and preferred timing.",
    phoneLead:
      "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
  },
  resources: {
    h2: "Related Resources",
    links: [
      {
        label: "Fleet installation planning resources",
        href: "/resources/",
      },
      { label: "Fleet installation FAQs", href: "/faq/" },
    ],
  },
  handoff: {
    question: "Are you an experienced mobile fleet installation technician?",
    link: {
      label: "Learn about the SB Mobile Installations Installer Network",
      href: INSTALLER_NETWORK_PATH,
    },
  },
};

/** Card copy for each service page, reused wherever a related link is shown. */
const serviceCards: Record<ServiceSlug, HubRelatedCard> = {
  "fleet-telematics-installation": {
    title: "Fleet Telematics Installation",
    description:
      "GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
    linkLabel: "Explore fleet telematics installation",
    href: "/services/fleet-telematics-installation/",
  },
  "gps-tracking-installation": {
    title: "GPS Tracking Installation",
    description: "On-site installation of GPS tracking hardware.",
    linkLabel: "Explore GPS tracking installation",
    href: "/services/gps-tracking-installation/",
  },
  "eld-installation": {
    title: "ELD Installation",
    description: "Installation of ELD and AOBRD equipment.",
    linkLabel: "Explore ELD installation",
    href: "/services/eld-installation/",
  },
  "dashcam-camera-installation": {
    title: "Dashcam & Camera Installation",
    description:
      "Fleet dashcam and windshield-mounted video recorder installation.",
    linkLabel: "Explore dashcam and camera installation",
    href: "/services/dashcam-camera-installation/",
  },
  "fleet-rollouts": {
    title: "Fleet Rollout Services",
    description:
      "Coordinated multi-vehicle and multi-location installation projects.",
    linkLabel: "Explore fleet rollout services",
    href: "/services/fleet-rollouts/",
  },
};

const FIT_NOTE = "These are general signals, not compliance or technical advice.";

/** A related-service link built from the approved card taxonomy above. */
function cardLink(slug: ServiceSlug): HubLink {
  const card = serviceCards[slug];
  return { label: card.linkLabel, href: card.href };
}

/** The four scope items, worded for one hardware description. */
function installScope(hardware: string): HubSplitSection {
  return {
    h2: "",
    body: [],
    lists: [
      {
        style: "checklist",
        items: [
          `Mounting: physically mounting the ${hardware} in the vehicle`,
          `Connection: connecting the ${hardware} to the vehicle`,
          `Routing: routing the cables the ${hardware} needs`,
          "Installation coordination: arranging on-site work at your location, for one vehicle or an entire fleet",
        ],
      },
    ],
  };
}

/** Documentation band shared by the telematics and GPS pages (stakeholder-supplied copy). */
const DOCUMENTATION_CARDS: NonNullable<
  ServiceTemplateContent["documentationCards"]
> = {
  intro:
    "Documentation can help fleet teams keep installation details organized and easier to review throughout a commercial vehicle project.",
  cards: [
    {
      title: "Photo Documentation",
      body: "Project photos can help show installation context, equipment placement, and visible work completed on a commercial vehicle when photo documentation is included in the project process.",
    },
    {
      title: "Installation Records",
      body: "Installation records can help organize project details for fleet coordination, internal review, and future reference.",
    },
    {
      title: "Quality and Safety",
      body: "Installation quality and safety information can help fleet teams understand vehicle-specific considerations, approved equipment requirements, and important project details.",
    },
  ],
};

const contents: Record<ServiceSlug, ServiceTemplateContent> = {
  "fleet-telematics-installation": {
    slug: "fleet-telematics-installation",
    pathname: "/services/fleet-telematics-installation/",
    breadcrumbLabel: "Fleet Telematics Installation",
    serviceTypes: ["Fleet telematics installation"],
    scopeItems: [
      "Connected fleet hardware installation",
      "On-site installation",
      "Nationwide service context",
    ],
    definition: {
      h2: "What Is Fleet Telematics Installation?",
      body: [
        "Fleet telematics installation is the physical mounting, connection, and routing work required to place approved connected fleet hardware into commercial vehicles. SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment. To scope a project, we need to know the equipment, the vehicle count, the project locations, and your preferred timing.",
      ],
    },
    scope: {
      ...installScope("approved hardware"),
      h2: "What Fleet Telematics Installation Can Include",
      body: [
        "Installation work covers the approved equipment categories for your project.",
        "Depending on the project, installation may support approved GPS, ELD, AOBRD, TPMS, dashcam, telematics, and fleet-management equipment.",
      ],
    },
    vehiclesBody:
      "Because this service spans several equipment categories, a project may involve more than one type of hardware across your fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When Fleet Telematics Installation May Be a Fit",
      body: [
        "Use these related service pages to find the most relevant starting point for your installation request.",
      ],
      links: [
        cardLink("gps-tracking-installation"),
        cardLink("eld-installation"),
        cardLink("dashcam-camera-installation"),
        cardLink("fleet-rollouts"),
      ],
    },
    midCtaHeading: "Need installation support for a fleet telematics project?",
    installerNetworkBand: true,
    midCtaBody:
      "Tell us about your equipment, vehicle count, project locations, and preferred timing so we can understand your installation request.",
    nationwideExtra:
      "Include your project location or locations, vehicle count, and preferred timeline when requesting an installation quote.",
    related: [
      "gps-tracking-installation",
      "eld-installation",
      "dashcam-camera-installation",
      "fleet-rollouts",
    ],
    faqHeading: "Fleet Telematics Installation FAQs",
    faqLayout: "columns",
    quoteH2: "Request a Fleet Telematics Installation Quote",
    documentationCards: DOCUMENTATION_CARDS,
    heroVideo: {
      src: "/images/services/fleet-telematics-installation/hero/sb-mobile-installations-fleet-telematics-installation-hero.mp4",
      poster:
        "/images/services/fleet-telematics-installation/hero/sb-mobile-installations-fleet-telematics-installation-hero.webp",
    },
    quoteBackground: {
      src: "/images/services/fleet-telematics-installation/sb-mobile-installations-fleet-telematics-quote-light-background.webp",
      width: 3344,
      height: 1882,
    },
    quoteGuide: {
      intro:
        "Tell us about your fleet telematics installation project so we can better understand the equipment, vehicle count, project location or locations, and preferred timing.",
      support:
        "Use this form to request installation support for approved GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, or fleet management equipment. Providing complete project details helps the team understand your installation request.",
      includeHeading: "What to Include in Your Request",
      includeItems: [
        "Equipment or service needed",
        "Number of vehicles or assets",
        "Project location or locations",
        "Preferred installation timeline",
        "Relevant fleet, vehicle, or deployment details",
      ],
      nextHeading: "What Happens Next",
      nextSteps: [
        "Submit your project details through the form.",
        "SB Mobile Installations reviews the information provided.",
        "The team follows up to discuss project scope, installation needs, and coordination details.",
      ],
    },
  },

  "gps-tracking-installation": {
    slug: "gps-tracking-installation",
    pathname: "/services/gps-tracking-installation/",
    breadcrumbLabel: "GPS Tracking Installation",
    serviceTypes: ["GPS tracking installation"],
    scopeItems: [
      "On-site GPS device installation for commercial vehicles and equipment",
    ],
    hero: {
      eyebrow: "Mobile GPS Tracking Installation for Commercial Fleets",
      h1: "GPS Tracking Installation for Commercial Fleets",
      intro:
        "SB Mobile Installations provides on-site GPS tracking device installation for commercial fleets, work vehicles, trucks, equipment, and other business assets. Our mobile installation teams support multi-vehicle deployments at your location.",
      ctaLabel: "Request a GPS Installation Quote",
      qualifier:
        "Share your device type, vehicle or equipment count, project locations, and preferred installation timing.",
    },
    definition: {
      h2: "What Is GPS Tracking Installation?",
      body: [
        "GPS tracking installation is the professional installation of a GPS tracking device and related wiring in a commercial vehicle. SB Mobile Installations helps fleet operators and businesses install the GPS tracking hardware selected for the project, including mounting, connection, and routing, at the project location. This page covers physical installation only.",
        "Installation requests may involve one vehicle, multiple fleet vehicles, or an entire fleet, including commercial and construction vehicles. When requesting service, provide the device type, vehicle count, project locations, and preferred installation timing so SB Mobile Installations can understand the installation request.",
      ],
    },
    scope: {
      h2: "What GPS Tracking Installation Can Include",
      body: [
        "GPS tracking installation requirements vary by device, vehicle type, equipment, and project scope. Depending on the deployment, installation may include the following work:",
      ],
      lists: [
        {
          style: "checklist",
          items: [
            "Device mounting: Secure placement of the GPS tracking device in an appropriate location within the vehicle.",
            "Power and electrical connections: Connection of the device to the appropriate vehicle power source.",
            "Wire routing and protection: Organized routing and securing of associated wiring to support a clean installation.",
            "Installation documentation: Every installation is photo documented, and you'll receive that documentation automatically.",
          ],
        },
      ],
    },
    vehiclesBody:
      "GPS tracking installation projects may involve different types of commercial vehicles. The appropriate installation approach depends on the vehicle, device, available power connections, and project requirements.",
    vehicleContext: {
      listHeading: "Common vehicle applications",
      note: "Vehicle applications vary by project. Include the device, vehicle type, equipment, project location, and installation requirements with your request so SB Mobile Installations can understand the installation request.",
    },
    fit: {
      h2: "Explore Related Fleet Installation Services",
      body: [
        "GPS tracking may be one part of a larger fleet technology deployment. Explore related installation services to identify the right starting point for your vehicle, device, or multi-vehicle project.",
      ],
      links: [
        {
          label: "Explore Fleet Telematics Installation",
          href: serviceCards["fleet-telematics-installation"].href,
        },
        {
          label: "Explore ELD Installation",
          href: serviceCards["eld-installation"].href,
        },
        {
          label: "Explore Dashcam and Camera Installation",
          href: serviceCards["dashcam-camera-installation"].href,
        },
        {
          label: "Explore Fleet Rollout Services",
          href: serviceCards["fleet-rollouts"].href,
        },
      ],
    },
    midCtaHeading: "Ready to Plan Your GPS Tracking Installation?",
    midCtaBody:
      "Share your device type, vehicle or equipment count, project locations, and preferred installation timing. We'll use those details to understand your project requirements.",
    midCtaLabel: "Request a GPS Installation Quote",
    documentationCards: DOCUMENTATION_CARDS,
    nationwideExtra:
      "Include your project locations in the installation request.",
    nationwideContext: {
      body: [
        "SB Mobile Installations provides mobile installation support at customer-designated project locations for commercial vehicles and multi-vehicle deployments.",
        "Include each project location, vehicle or equipment count, device type, and preferred timing in your request so SB Mobile Installations can understand the installation requirements.",
      ],
      links: [
        {
          label: "Explore Nationwide Fleet Installation Coverage",
          href: "/coverage/",
        },
        {
          label: "Learn How Fleet Installation Projects Are Coordinated",
          href: "/our-process/",
        },
      ],
    },
    related: [
      "fleet-telematics-installation",
      "eld-installation",
      "dashcam-camera-installation",
      "fleet-rollouts",
    ],
    faqHeading: "GPS Tracking Installation FAQs",
    faqLayout: "columns",
    quoteH2: "Request GPS Tracking Installation Support",
    quoteAlignTop: true,
    quoteBackground: {
      src: "/images/services/gps-tracking-installation/sb-mobile-installations-gps-tracking-quote-request-fleet-yard-background.webp",
      width: 3344,
      height: 1882,
    },
    installerNetworkBand: true,
    quoteServiceNeedLabel: "Device or equipment type",
    quoteGuide: {
      intro:
        "Planning a GPS tracking installation for commercial vehicles? Share your project details so SB Mobile Installations can understand the equipment, vehicle count, locations, and timing involved.",
      support:
        "The more information you provide, the easier it is to understand the installation requirements.",
      includeHeading: "Include the following details when available:",
      includeItems: [
        "GPS device or equipment type",
        "Number and type of vehicles or assets",
        "Project location or locations",
        "Preferred installation timing",
        "Known deployment details",
      ],
    },
  },

  "eld-installation": {
    slug: "eld-installation",
    pathname: "/services/eld-installation/",
    breadcrumbLabel: "ELD Installation",
    serviceTypes: ["ELD installation"],
    scopeItems: [
      "ELD and AOBRD hardware",
      "On-site installation",
      "Nationwide service context",
    ],
    definition: {
      h2: "What Is ELD Installation?",
      body: [
        "ELD installation is the physical mounting, connection, and routing work required to place approved ELD and AOBRD hardware into commercial vehicles.",
        "ELD and AOBRD are both current equipment categories at SB Mobile Installations. We install and deploy the hardware. We are not an ELD provider or a compliance consultant, and this page does not give compliance or regulatory advice.",
        "To scope a project, we need the vehicle count, the project locations, and your preferred timing.",
      ],
    },
    scope: {
      ...installScope("ELD or AOBRD hardware"),
      h2: "What ELD Installation Can Include",
      body: [],
    },
    vehiclesBody:
      "ELD and AOBRD hardware is installed on fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When ELD Installation May Be a Fit",
      body: [],
      listPanel: true,
      lists: [
        {
          heading: "This service may be a fit when",
          items: [
            "You have approved ELD or AOBRD hardware that needs physical installation",
            "Your project involves commercial fleet vehicles",
            "You can describe the vehicle count and the project locations",
          ],
        },
      ],
      footnotes: [
        "These are general signals. They are not compliance, regulatory, or technical advice.",
      ],
    },
    nationwideExtra:
      "Include the number of vehicles receiving ELD or AOBRD hardware and each project location.",
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "fleet-rollouts",
    ],
    faqHeading: "ELD Installation FAQs",
    quoteH2: "Request an ELD Installation Quote",
  },

  "dashcam-camera-installation": {
    slug: "dashcam-camera-installation",
    pathname: "/services/dashcam-camera-installation/",
    breadcrumbLabel: "Dashcam & Camera Installation",
    serviceTypes: ["Fleet dashcam and video recorder installation"],
    scopeItems: [
      "Dashcam and video recorder hardware",
      "On-site installation",
      "Nationwide service context",
    ],
    definition: {
      h2: "What Is Dashcam and Camera Installation?",
      body: [
        "Dashcam and camera installation is the physical mounting, connection, and routing work required to place approved fleet dashcam and windshield-mounted video recorder hardware into commercial vehicles.",
        "SB Mobile Installations installs and deploys this hardware. We are not the video platform vendor, and this page covers installation only.",
        "To scope a project, we need the vehicle count, the project locations, and your preferred timing.",
      ],
    },
    scope: {
      ...installScope("dashcam or windshield-mounted video recorder"),
      h2: "What Dashcam and Camera Installation Can Include",
      body: [],
    },
    vehiclesBody:
      "Fleet dashcam and windshield-mounted video recorder hardware is installed on fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When Dashcam and Camera Installation May Be a Fit",
      body: [],
      listPanel: true,
      lists: [
        {
          heading: "This service may be a fit when",
          items: [
            "You have approved dashcam or windshield-mounted video recorder hardware that needs physical installation",
            "Your project involves commercial fleet vehicles",
            "You can describe the vehicle count and the project locations",
          ],
        },
      ],
      footnotes: [FIT_NOTE],
    },
    nationwideExtra:
      "Include the number of vehicles receiving dashcam or video recorder hardware and each project location.",
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "fleet-rollouts",
    ],
    faqHeading: "Dashcam and Camera Installation FAQs",
    quoteH2: "Request a Dashcam and Camera Installation Quote",
  },

  "fleet-rollouts": {
    slug: "fleet-rollouts",
    pathname: "/services/fleet-rollouts/",
    breadcrumbLabel: "Fleet Rollouts",
    serviceTypes: [],
    scopeItems: [
      "One vehicle or an entire fleet",
      "Multiple project locations",
      "Nationwide service context",
    ],
    definition: {
      h2: "What Is a Fleet Rollout?",
      body: [
        "A fleet rollout is an installation project that covers many vehicles, more than one location, or both. SB Mobile Installations coordinates these projects nationwide, from one vehicle to an entire fleet.",
        "Rollouts cover the confirmed equipment categories: GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment. We install and deploy the hardware; we are not the platform vendor.",
        "To start a conversation, share your equipment, vehicle count, project locations, and preferred timing.",
      ],
    },
    scope: {
      h2: "What Fleet Rollout Coordination Can Include",
      body: [],
      lists: [
        {
          style: "checklist",
          items: [
            "Multi-vehicle projects: installation across many vehicles, up to an entire fleet",
            "Multi-location projects: coordination across more than one project location",
            "On-site installation: technicians travel directly to each location",
            "Mounting, connection, and routing: the same physical installation work on each vehicle",
          ],
        },
      ],
    },
    vehiclesBody:
      "Fleet rollouts cover fleet, commercial, and construction vehicles.",
    fit: {
      h2: "When a Fleet Rollout May Be a Fit",
      body: [],
      listPanel: true,
      lists: [
        {
          heading: "This service may be a fit when",
          items: [
            "Your project involves many commercial vehicles",
            "Your work spans more than one project location",
            "You want to describe your equipment, vehicle count, locations, and timing before installation work begins",
          ],
        },
      ],
      footnotes: [FIT_NOTE],
    },
    nationwideExtra:
      "Include each project location, the number of vehicles at each, and the equipment for each.",
    related: [
      "fleet-telematics-installation",
      "gps-tracking-installation",
      "eld-installation",
      "dashcam-camera-installation",
    ],
    faqHeading: "Fleet Rollout FAQs",
    quoteH2: "Request a Fleet Rollout Quote",
  },
};

const pages = {
  "fleet-telematics-installation": fleetTelematicsInstallationContent,
  "gps-tracking-installation": gpsTrackingInstallationContent,
  "eld-installation": eldInstallationContent,
  "dashcam-camera-installation": dashcamCameraInstallationContent,
  "fleet-rollouts": fleetRolloutsContent,
} as const;

/**
 * The five service cards in display order, for pages outside the service
 * template (the coverage hub). Titles, descriptions, and routes come from
 * `serviceCards`, so they cannot drift from the service pages.
 */
export const SERVICE_CARD_ORDER = [
  "fleet-telematics-installation",
  "gps-tracking-installation",
  "eld-installation",
  "dashcam-camera-installation",
  "fleet-rollouts",
] as const satisfies readonly ServiceSlug[];

export function getServiceCard(slug: ServiceSlug): HubRelatedCard {
  return serviceCards[slug];
}

/** Approved vehicle-context examples and their clarification (claims rows 26 and 39). */
export const vehicleContext = shared.vehicles;

/** Assemble everything ServicePageTemplate needs for one service page. */
export function getServicePage(slug: ServiceSlug): ServicePageBundle {
  const content = contents[slug];
  return {
    page: pages[slug],
    content,
    shared,
    primaryCta: {
      label: "Request an Installation Quote",
      href: FORM_ANCHOR,
      journey: "commercial",
      event: "cta_quote_click",
    },
    phone: {
      href: utilityBar.phoneHref,
      label: `${shared.callLabel} ${utilityBar.phoneLabel}`,
      numberLabel: utilityBar.phoneLabel,
    },
    heroImage: servicePagesImages[slug].hero,
    contextImage: servicePagesImages[slug].context,
    definitionImage: servicePagesImages[slug].definition,
    scopeImage: servicePagesImages[slug].scope,
    fitImage: servicePagesImages[slug].fit,
    nationwideImage: servicePagesImages[slug].nationwide,
    networkBand: content.installerNetworkBand
      ? {
          content: careersLandingContent.network,
          image: careersHubImages.networkBand,
        }
      : undefined,
    relatedCards: content.related.map((related) => serviceCards[related as ServiceSlug]),
  };
}
