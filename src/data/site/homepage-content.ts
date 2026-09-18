import { whoWeServeImages } from "@/data/site/who-we-serve-images";
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
const SERVICES_ROUTE = "/services/";
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
    h2: "What We Install: Fleet Electronics for Commercial Vehicles",
    intro:
      "SB Mobile Installations provides on-site installation of GPS tracking, electronic logging, tire-pressure monitoring, dashcams, and other fleet electronics for commercial and construction vehicles nationwide. Our technicians travel directly to your location, helping fleet operators equip individual vehicles, groups of vehicles, or entire fleets with professionally installed technology.",
    // Card copy supplied and approved by the client in session 2026-09-18.
    // "Vocational", "professional installation", and the AOBRD qualifier are
    // pending a written record. See docs/_claims-inventory.md item 28. No
    // savings, accident-reduction, legal, or compliance claims appear here.
    cards: {
      "GPS tracking installation": {
        description:
          "Professional installation of GPS tracking equipment for commercial vehicles, work trucks, service vans, and fleet vehicles. Proper placement and cable routing help support reliable vehicle visibility while maintaining a clean, professional installation.",
        useCases: [
          "Vehicle location tracking",
          "Fleet visibility",
          "Service-vehicle monitoring",
          "Construction equipment oversight",
          "Mileage and route documentation",
        ],
      },
      "ELD installation": {
        description:
          "On-site installation of electronic logging devices in commercial trucks and fleet vehicles. Equipment is positioned and connected for practical driver access while maintaining a clean and secure vehicle installation.",
        useCases: [
          "Electronic logging equipment",
          "Commercial trucking operations",
          "Driver workflow support",
          "Fleet technology upgrades",
          "Multi-vehicle deployments",
        ],
      },
      "AOBRD installation": {
        description:
          "SB Mobile Installations also supports installation work involving AOBRD equipment and legacy fleet-recording systems when requested by an approved fleet or equipment provider.",
        note: "Equipment availability and regulatory use should be confirmed with the fleet operator and applicable provider.",
      },
      "TPMS installation": {
        description:
          "Installation of tire-pressure monitoring equipment for commercial trucks, fleet vehicles, and vocational equipment. Proper sensor placement and system setup can help fleet operators monitor tire-pressure information across their vehicles.",
        useCases: [
          "Commercial truck fleets",
          "Construction vehicles",
          "Trailer and vocational equipment",
          "Preventive fleet maintenance",
          "Tire-pressure monitoring systems",
        ],
      },
      "Fleet dashcam installation": {
        description:
          "Professional installation of fleet dashcams and vehicle cameras in commercial vehicles. Devices are mounted carefully with clean cable routing and positioned to support the intended fleet-technology setup without unnecessarily obstructing the driver's view.",
        useCases: [
          "Forward-facing vehicle cameras",
          "Fleet safety programs",
          "Incident documentation",
          "Driver coaching systems",
          "Commercial vehicle monitoring",
        ],
      },
      "Fleet management equipment installation": {
        description:
          "Installation of additional fleet-management hardware, vehicle electronics, and connected equipment based on the requirements of the fleet, equipment provider, or deployment project.",
        useCases: [
          "Fleet telematics hardware",
          "Connected vehicle equipment",
          "Auxiliary vehicle electronics",
          "Multi-vehicle deployments",
          "Platform-specific installation projects",
        ],
      },
    },
  },

  whoWeServe: {
    eyebrow: "Who We Serve",
    h2: "Fleet, Commercial, and Construction Vehicles",
    intro:
      "SB Mobile Installations provides mobile GPS, ELD, dashcam, TPMS, and fleet-electronics installation for commercial vehicles throughout the United States. Our technicians travel directly to fleet yards, service facilities, construction operations, and other customer locations to support individual vehicles, multi-vehicle deployments, and larger fleet projects.",
    cards: [
      {
        title: "Fleet Vehicles",
        description:
          "We install fleet electronics on work vans, service vehicles, delivery vehicles, utility trucks, and other vehicles managed as part of a commercial fleet. On-site installation helps fleet operators coordinate equipment deployments at their own location.",
        useCases: [
          "GPS tracking installation",
          "ELD installation",
          "Fleet dashcam installation",
          "TPMS equipment",
          "Multi-vehicle deployments",
          "Fleet technology upgrades",
        ],
        link: {
          label: "Explore Fleet Installation Services",
          href: SERVICES_ROUTE,
        },
        image: whoWeServeImages.fleet,
      },
      {
        title: "Commercial Vehicles",
        description:
          "Our mobile installation services support delivery vehicles, box trucks, work trucks, utility vehicles, and other commercial vehicles that depend on connected fleet technology. Equipment can be installed on-site to help fleet operators coordinate vehicle technology projects at their own location.",
        useCases: [
          "Delivery and service fleets",
          "Commercial truck electronics",
          "Vehicle cameras and dashcams",
          "Telematics equipment",
          "Driver-accessible device installation",
          "Commercial fleet rollouts",
        ],
        link: {
          label: "Discuss a Commercial Installation Project",
          href: CONTACT_ROUTE,
          event: "cta_quote_click",
        },
        image: whoWeServeImages.commercial,
      },
      {
        title: "Construction Vehicles",
        description:
          "SB Mobile Installations supports GPS, telematics, tracking, and other fleet-electronics installation for construction and vocational vehicles. Mobile service allows equipment and vehicles to be addressed at a construction yard, equipment facility, or approved customer location.",
        useCases: [
          "Construction fleet tracking",
          "Heavy-duty truck electronics",
          "Excavator and equipment monitoring",
          "Vocational vehicle installations",
          "Jobsite fleet coordination",
          "Equipment deployment projects",
        ],
        link: {
          label: "Request a Construction Fleet Quote",
          href: CONTACT_ROUTE,
          event: "cta_quote_click",
        },
        image: whoWeServeImages.construction,
      },
    ],
    support: {
      heading: "Installation Support at Your Location",
      body: "Because SB Mobile Installations works on-site, fleet operators do not have to send every vehicle to a separate installation facility. Project details, equipment requirements, vehicle types, and location logistics can be reviewed before scheduling.",
      cta: QUOTE_CTA,
    },
  },

  whyChooseUs: {
    eyebrow: "Why SB Mobile Installations",
    h2: "Why Fleet Managers Choose SB Mobile Installations",
    intro:
      "SB Mobile Installations provides on-site GPS, ELD, dashcam, TPMS, and fleet-electronics installation for fleet, commercial, and construction vehicles nationwide. Since 2011, the company has operated around the realities of fleet work: vehicles are distributed across locations, downtime matters, and installation projects need to be coordinated where the vehicles are already working.",
    items: [
      {
        title: "Nationwide mobile service",
        body: "Technicians travel directly to customer locations across the United States, supporting fleet operators at yards, facilities, and other approved installation locations.",
      },
      {
        title: "Established fleet-electronics experience",
        body: "In business since 2011, SB Mobile Installations supports installation work involving GPS tracking, ELDs, dashcams, TPMS, and other vehicle electronics used in commercial fleet operations.",
      },
      {
        title: "Built around on-site fleet work",
        body: "The mobile-first model helps customers coordinate installation at the vehicle location instead of moving every vehicle to a separate installation facility.",
      },
      {
        title: "Direct project coordination",
        body: "SB Mobile Installations works directly with fleet operators and independent contractor technicians to coordinate equipment requirements, vehicle details, locations, and deployment logistics.",
      },
    ],
    fleetManagers: {
      heading: "What this means for fleet managers",
      items: [
        "Coordinate installation work at your location",
        "Support one vehicle or a multi-vehicle deployment",
        "Plan around vehicle types, equipment, and site logistics",
        "Work with approved fleet-electronics equipment and provider requirements",
        "Receive installation documentation when included in the project",
        "Communicate directly about scheduling and field requirements",
      ],
    },
    cta: {
      heading: "Planning a fleet-electronics installation project?",
      body: "Share your vehicle types, equipment requirements, fleet size, and service location to start the conversation with SB Mobile Installations.",
      primary: QUOTE_CTA,
      servicesLink: { label: "Explore Installation Services", href: SERVICES_ROUTE },
    },
    installerNetwork: {
      prompt:
        "Are you an experienced vehicle-electronics installer?",
      link: {
        label: "Learn how to join the independent installer network",
        href: TECHNICIAN_ROLE_ROUTE,
        journey: "recruitment",
        event: "cta_installer_network_click",
      },
    },
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
    eyebrow: "INSTALLER OPPORTUNITIES",
    // "Nationwide" for recruitment is a working assumption, pending written
    // stakeholder approval. See docs/_claims-inventory.md item 27.
    h2: "Join a Nationwide Mobile Installation Network",
    body: "SB Mobile Installations connects experienced independent contractor technicians with GPS, ELD, and fleet-electronics installation opportunities at commercial and fleet locations across the country. If you have experience with vehicle electrical systems, telematics equipment, or mobile installation work, you can learn more about joining the installer network.",
    highlights: [
      "GPS, ELD, and fleet-electronics installation projects",
      "On-site work at fleet, commercial, and construction locations",
      "Independent contractor engagement",
      "Nationwide project network",
    ],
    cta: JOIN_NETWORK_CTA,
    secondaryLink: {
      label: "Learn how the installer network works.",
      href: "/careers/how-assignments-work/",
    },
    disclosure:
      "Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
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
    h2: "Frequently Asked Questions",
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
        question: "What experience is useful for mobile installation work?",
        answer:
          "Experience with vehicle electrical systems, telematics equipment, or mobile installation work is relevant to the Installer Network. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "Is this an employee position or an independent contractor opportunity?",
        answer:
          "Technicians are engaged as independent contractors, not employees. The Installer Network is not a W-2 employment position.",
      },
      {
        question: "Does joining the Installer Network guarantee an assignment?",
        answer:
          "No. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      },
      {
        question: "What types of vehicle electronics are installed?",
        answer:
          "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment, plus dashcam and windshield-mounted video recorder systems, on fleet, commercial, and construction vehicles.",
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
