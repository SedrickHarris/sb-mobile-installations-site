import type { InformationalPageContent } from "@/types/service-content";

/**
 * Industries hub and industry page content.
 *
 * SOURCE-OF-TRUTH FLAG (see CLAUDE.md section 1 conflict rule): the plan's
 * Sprint 2 route table lists five industry pages, but
 * docs/01-business-source-of-truth.md section 13 confirms only "Commercial
 * fleets" and "Construction" (as a vehicle category, section 13.1). Section
 * 13.2 marks "Transportation and logistics", "Field service",
 * "Telecommunications", "Delivery and distribution", and every other named
 * vertical as "Proposed... requires confirmation of actual experience,
 * desired business development, or operational capability before
 * publication." docs/01 outranks the plan under CLAUDE.md section 1's
 * priority order.
 *
 * Resolution applied here, pending stakeholder confirmation: every page
 * below is built using ONLY facts already confirmed elsewhere (the
 * "commercial fleets" customer/vehicle category in section 13.1, the
 * confirmed vehicle scope in section 12.1/25, and the confirmed
 * platform-installation-experience wording in section 14/25). No page
 * asserts new, industry-specific proof, experience, or business development
 * beyond those confirmed facts. `logistics-delivery-fleets` and
 * `field-service-fleets` are framed as use cases within the already-confirmed
 * commercial-fleets category, not as separately proven verticals.
 * `telematics-technology-providers` is framed as installation-partner
 * positioning built entirely from the confirmed platform-experience wording,
 * never as a new industry-served claim or a partnership/authorization claim.
 * `construction-heavy-equipment` is scoped strictly to the confirmed
 * "construction vehicles" category; it explicitly does not claim non-vehicle
 * heavy-equipment installation (docs/_claims-inventory.md item 9).
 *
 * If the stakeholder intends a stronger, vertical-specific claim for
 * logistics, field service, or telecom customers, that requires its own
 * confirmation before this content is strengthened.
 */

export const industriesHubContent: InformationalPageContent = {
  h1: "Industries SB Mobile Installations Serves",
  metaDescription:
    "SB Mobile Installations installs GPS, ELD, and fleet electronics equipment for commercial fleet and construction vehicle customers nationwide, and for technology providers that need field installation support.",
  intro:
    "SB Mobile Installations works with fleet, commercial, and construction vehicle customers nationwide, and with technology and hardware providers that need field installation support for their equipment.",
  body: [
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles, with technicians traveling directly to your location.",
  ],
};

export const commercialFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Commercial Fleets",
  metaDescription:
    "On-site GPS, ELD, and fleet electronics installation for commercial fleet vehicles nationwide. Technicians travel directly to your location, one vehicle or an entire fleet.",
  intro:
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "Commercial fleet customers are a core, confirmed part of SB Mobile Installations' vehicle scope, alongside fleet and construction vehicles.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "What equipment can you install on our commercial fleet?",
      answer:
        "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles.",
    },
  ],
};

export const constructionHeavyEquipmentContent: InformationalPageContent = {
  h1: "Mobile Installation for Construction Vehicle Fleets",
  metaDescription:
    "On-site GPS, ELD, and fleet electronics installation for construction vehicles nationwide. Technicians travel directly to your location.",
  intro:
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "Construction vehicles are one of SB Mobile Installations' three confirmed vehicle categories, alongside fleet and commercial vehicles.",
    "This page describes installation on construction vehicles. It does not describe installation on non-vehicle heavy equipment; that broader scope is not a confirmed SB Mobile Installations service.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "Do you install equipment on heavy equipment, not just vehicles?",
      answer:
        "SB Mobile Installations' confirmed construction scope covers construction vehicles. Installation on non-vehicle heavy equipment is not a confirmed service.",
    },
  ],
};

export const logisticsDeliveryFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Logistics and Delivery Fleets",
  metaDescription:
    "On-site GPS, ELD, and fleet electronics installation for logistics and delivery fleet vehicles nationwide. Technicians travel directly to your location.",
  intro:
    "Logistics and delivery operations that run commercial fleet vehicles are supported under SB Mobile Installations' confirmed commercial fleet vehicle scope, with technicians traveling directly to your location nationwide.",
  body: [
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles used in logistics and delivery operations.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
};

export const fieldServiceFleetsContent: InformationalPageContent = {
  h1: "Mobile Installation for Field Service Fleets",
  metaDescription:
    "On-site GPS, ELD, and fleet electronics installation for field service fleet vehicles nationwide. Technicians travel directly to your location.",
  intro:
    "Field service operations that run commercial fleet vehicles are supported under SB Mobile Installations' confirmed commercial fleet vehicle scope, with technicians traveling directly to your location nationwide.",
  body: [
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on commercial fleet vehicles used in field service operations.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size, one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
};

export const telematicsTechnologyProvidersContent: InformationalPageContent = {
  h1: "Field Installation Partner for Telematics and Technology Providers",
  metaDescription:
    "SB Mobile Installations provides field installation support for telematics and fleet-technology hardware, working with the platforms fleets already run on, nationwide.",
  intro:
    "SB Mobile Installations provides field installation support for telematics and fleet-technology hardware providers, working with the platforms fleets already run on.",
  body: [
    "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know. This describes installation experience with that equipment. It does not state or imply an official partnership, authorization, certification, reseller, or dealer relationship with any platform.",
    "SB Mobile Installations installs and deploys hardware on-site at the customer's location nationwide, one vehicle or an entire fleet, for GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
    "Every installation is photo documented, and that documentation is delivered automatically.",
  ],
  faq: [
    {
      question: "Are you an authorized or certified installer for a specific platform?",
      answer:
        "No. SB Mobile Installations installs and deploys hardware for the platforms fleets already run on. This describes installation experience, not an official partnership, authorization, certification, reseller, or dealer relationship.",
    },
  ],
};
