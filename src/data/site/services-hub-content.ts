import type { ServicesHubPageContent } from "@/types/service-content";

/**
 * Section copy for the `/services/` hub.
 *
 * Every claim is gated against docs/_claims-inventory.md. Service cards cover
 * only the five existing service pages. No pricing, warranty, guarantee,
 * response-time, state, city, or certification language appears here.
 *
 * Vehicle scope: the confirmed categories are fleet, commercial, and
 * construction vehicles. The example list below uses only terms confirmed in
 * the claims inventory (rows 26 and 39). Trailers stay out of the vehicle
 * list (row 42 conflicts with row 16 until reconciled in writing). "Setup"
 * is not used: only installation, mounting, connection, and routing are
 * confirmed. No em dash appears in this file; a spaced hyphen is used.
 */
export const servicesHubPageContent: ServicesHubPageContent = {
  hero: {
    primaryCta: {
      label: "Request an Installation Quote",
      href: "#request-quote",
      journey: "commercial",
      event: "cta_quote_click",
    },
    callLabel: "Call",
    qualifier:
      "Tell us about your equipment, vehicle count, locations, and preferred timeline.",
  },

  answer: {
    h2: "What Is Fleet Technology Installation?",
    body: [
      "Fleet technology installation is the physical mounting, connection, and routing work required to place approved hardware into commercial vehicles.",
      "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles. We install and deploy the hardware; we are not the platform vendor.",
      "Technicians travel directly to your location nationwide, for one vehicle or an entire fleet. Every installation is photo documented, and you'll receive that documentation automatically. To start, request an installation quote with your equipment, vehicle count, and locations.",
    ],
  },

  services: {
    h2: "Explore Installation Services",
    intro:
      "Choose the service that matches your equipment, or start with fleet rollouts if your project spans many vehicles or locations.",
    cards: [
      {
        category: "Equipment umbrella",
        title: "Fleet Telematics Installation",
        scope:
          "Installation of GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles.",
        commonUse: "Common use: a project that spans more than one equipment type.",
        linkLabel: "Explore fleet telematics installation",
        href: "/services/fleet-telematics-installation/",
        accent: true,
      },
      {
        category: "GPS hardware",
        title: "GPS Tracking Installation",
        scope:
          "On-site installation of GPS tracking hardware on fleet, commercial, and construction vehicles.",
        commonUse: "Common use: adding GPS tracking hardware to vehicles.",
        linkLabel: "Explore GPS tracking installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        category: "ELD and AOBRD hardware",
        title: "ELD Installation",
        scope:
          "On-site installation of ELD and AOBRD equipment on fleet, commercial, and construction vehicles.",
        commonUse: "Common use: deploying ELD or AOBRD hardware across vehicles.",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        category: "Video hardware",
        title: "Dashcam & Camera Installation",
        scope:
          "On-site installation of fleet dashcam and windshield-mounted video recorder equipment.",
        commonUse: "Common use: adding in-vehicle video hardware to a fleet.",
        linkLabel: "Explore dashcam and camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        category: "Project coordination",
        title: "Fleet Rollout Services",
        scope:
          "Coordinated multi-vehicle and multi-location installation projects nationwide, from one vehicle to an entire fleet.",
        commonUse:
          "Common use: equipment going into many vehicles or across several locations.",
        linkLabel: "Explore fleet rollout services",
        href: "/services/fleet-rollouts/",
        accent: true,
      },
    ],
  },

  decisionGuide: {
    h2: "Not Sure Which Installation Service You Need?",
    intro:
      "Find the situation closest to yours. Each route leads to the page for that service.",
    rows: [
      {
        situation: "You need GPS tracking hardware installed",
        destination: "GPS Tracking Installation",
        linkLabel: "Explore GPS installation",
        href: "/services/gps-tracking-installation/",
      },
      {
        situation: "You are deploying ELD or AOBRD hardware",
        destination: "ELD Installation",
        linkLabel: "Explore ELD installation",
        href: "/services/eld-installation/",
      },
      {
        situation: "You are adding in-vehicle video or camera hardware",
        destination: "Dashcam & Camera Installation",
        linkLabel: "Explore camera installation",
        href: "/services/dashcam-camera-installation/",
      },
      {
        situation: "Your project includes several types of equipment",
        destination: "Fleet Telematics Installation",
        linkLabel: "Explore telematics installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        situation:
          "You are coordinating equipment across many vehicles or locations",
        destination: "Fleet Rollout Services",
        linkLabel: "Discuss a rollout",
        href: "/services/fleet-rollouts/",
      },
      {
        situation: "You need help sorting out a mixed equipment project",
        destination: "Project guidance",
        linkLabel: "Request project guidance",
        href: "#request-quote",
      },
    ],
  },

  capability: {
    h2: "Installation Support Built Around Commercial Vehicles",
    body: [
      "Installation planning starts with the vehicle, the equipment, the work location, and the project scope. SB Mobile Installations installs fleet technology on fleet, commercial, and construction vehicles.",
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
      {
        heading: "Vehicle categories",
        items: ["Fleet vehicles", "Commercial vehicles", "Construction vehicles"],
      },
    ],
    links: [
      { label: "Fleet rollout services", href: "/services/fleet-rollouts/" },
      {
        label: "Installation quality and safety approach",
        href: "/quality-safety/",
      },
    ],
  },

  nationwide: {
    h2: "On-Site Installation for Fleet Projects Nationwide",
    body: [
      "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location. Technicians travel directly to each project location.",
      "Project scope is easier to plan when your request includes the equipment, the vehicle count, the project locations, and your timing.",
    ],
    links: [
      { label: "Explore Nationwide Coverage", href: "/coverage/" },
      {
        label: "How fleet installation projects are coordinated",
        href: "/our-process/",
      },
    ],
  },

  intake: {
    h2: "What to Include in Your Installation Request",
    body: [
      "A complete request helps SB Mobile Installations follow up on your project.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "The type of equipment you need installed",
          "Your approximate vehicle count",
          "The project location or locations",
          "Your preferred schedule or rollout window",
          "Any fleet, vehicle, or deployment details that affect the work",
        ],
      },
    ],
  },

  faqHeading: "Fleet Technology Installation FAQs",

  related: {
    h2: "Related Pages",
    cards: [
      {
        title: "Fleet installation FAQs",
        description:
          "Answers about installation services, nationwide coverage, and the Installer Network.",
        linkLabel: "Read the fleet installation FAQs",
        href: "/faq/",
      },
      {
        title: "Planning resources",
        description:
          "Educational guides for planning fleet technology installation.",
        linkLabel: "Browse fleet installation planning resources",
        href: "/resources/",
      },
    ],
  },

  quote: {
    h2: "Request an Installation Quote",
    intro:
      "Tell us about your equipment, vehicle count, project locations, and preferred timeline, and SB Mobile Installations will follow up.",
    phoneLead:
      "Prefer to talk it through? Call Monday through Friday, 8:00 AM to 6:00 PM.",
  },
};
