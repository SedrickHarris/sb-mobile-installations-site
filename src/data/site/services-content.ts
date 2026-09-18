import type { ServicePageContent } from "@/types/service-content";

/**
 * Services hub and four service-page content objects.
 *
 * Every claim below is gated against docs/_claims-inventory.md. No fifth
 * page exists for TPMS or "asset tracking" (not in the Sprint 1 route
 * table); TPMS stays folded into the telematics/fleet-management umbrella
 * copy where confirmed. No pricing, warranty, guarantee, or response-time
 * language appears anywhere in this file. No em dash appears anywhere in
 * this file; a spaced hyphen is used instead.
 */

export const servicesHubContent: ServicePageContent = {
  h1: "Mobile Installation Services for Fleet and Commercial Vehicles",
  metaDescription:
    "SB Mobile Installations provides on-site GPS, ELD, and fleet electronics installation for fleet, commercial, and construction vehicles nationwide. Technicians travel directly to your location.",
  intro:
    "SB Mobile Installations provides on-site installation of GPS, ELD, and fleet electronics equipment for fleet, commercial, and construction vehicles nationwide. Technicians travel directly to your location - one vehicle or an entire fleet.",
  body: [
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment. We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, Lytx/DriveCam, SmartDrive, and CalAmp.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
    "We operate Monday through Friday, 8:00 AM to 6:00 PM, and coordinate installation projects nationwide - one vehicle or an entire fleet. In business since 2011.",
  ],
  faq: [
    {
      question: "What equipment do you install?",
      answer:
        "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles, working with platforms including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, and dashcam systems.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "SB Mobile Installations serves fleet and commercial vehicle customers nationwide, with technicians traveling directly to each project location.",
    },
    {
      question: "Do you document completed installations?",
      answer:
        "Every installation is photo documented, and you'll receive that documentation automatically.",
    },
  ],
};

export const fleetTelematicsInstallationContent: ServicePageContent = {
  h1: "Fleet Telematics Installation",
  metaDescription:
    "On-site installation of GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment for fleet, commercial, and construction vehicles nationwide.",
  intro:
    "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "This installation covers the full confirmed equipment scope: GPS tracking, ELD, AOBRD, TPMS, fleet dashcam / windshield-mounted video recorder, and fleet management equipment, installed on fleet, commercial, and construction vehicles.",
    "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, LoJack, Lytx/DriveCam, SmartDrive, and CalAmp. SB Mobile Installations installs and deploys this hardware; we are not the platform vendor.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for projects of any size - one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "Does this service cover ELD and AOBRD together?",
      answer:
        "Yes. Fleet telematics installation covers GPS tracking, ELD, and AOBRD as current equipment categories, alongside TPMS, fleet dashcam, and fleet management equipment.",
    },
    {
      question: "Are you the platform vendor for the equipment you install?",
      answer:
        "No. SB Mobile Installations installs and deploys hardware for the platforms fleets already run on. We are an installation and deployment partner, not the platform vendor.",
    },
  ],
};

export const gpsTrackingInstallationContent: ServicePageContent = {
  h1: "GPS Tracking Installation",
  metaDescription:
    "On-site GPS tracking hardware installation for fleet, commercial, and construction vehicles nationwide. SB Mobile Installations is an installation and deployment partner, not a platform vendor.",
  intro:
    "SB Mobile Installations installs GPS tracking hardware on fleet, commercial, and construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "GPS tracking installation is one of SB Mobile Installations' confirmed equipment categories, installed on fleet, commercial, and construction vehicles.",
    "We work with the GPS tracking platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, and CalAmp. SB Mobile Installations positions itself as an installation and deployment partner for this hardware, never as the platform vendor.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "Which GPS tracking platforms do you install for?",
      answer:
        "We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, Zonar, and CalAmp.",
    },
    {
      question: "What vehicle types can you install GPS tracking on?",
      answer:
        "SB Mobile Installations installs GPS tracking equipment on fleet, commercial, and construction vehicles.",
    },
  ],
};

export const eldInstallationContent: ServicePageContent = {
  h1: "ELD Installation",
  metaDescription:
    "On-site ELD and AOBRD installation for fleet, commercial, and construction vehicles nationwide. SB Mobile Installations is an installation and deployment partner, not an ELD provider.",
  intro:
    "SB Mobile Installations installs ELD and AOBRD equipment on fleet, commercial, and construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "ELD installation and AOBRD installation are both confirmed, current equipment categories at SB Mobile Installations, installed on fleet, commercial, and construction vehicles.",
    "We work with the ELD and AOBRD platforms fleets already run on, including Samsara, Geotab, Verizon Connect, Omnitracs, PeopleNet, Trimble, and Zonar. SB Mobile Installations installs and deploys this hardware; we are not an ELD provider or a compliance consultant.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "Do you install both ELD and AOBRD equipment?",
      answer:
        "Yes. ELD and AOBRD are both current equipment categories SB Mobile Installations installs on fleet, commercial, and construction vehicles.",
    },
    {
      question: "Are you an ELD provider or compliance consultant?",
      answer:
        "No. SB Mobile Installations installs and deploys ELD hardware for the platforms fleets already run on. We are an installation and deployment partner, not an ELD provider or a compliance consultant.",
    },
  ],
};

export const dashcamCameraInstallationContent: ServicePageContent = {
  h1: "Dashcam & Camera Installation",
  metaDescription:
    "On-site fleet dashcam and windshield-mounted video recorder installation for fleet, commercial, and construction vehicles nationwide.",
  intro:
    "SB Mobile Installations installs fleet dashcam and windshield-mounted video recorder equipment on fleet, commercial, and construction vehicles, with technicians traveling directly to your location nationwide.",
  body: [
    "Fleet dashcam and windshield-mounted video recorder installation is a confirmed SB Mobile Installations equipment category, installed on fleet, commercial, and construction vehicles.",
    "We work with the video telematics platforms fleets already run on, including Lytx/DriveCam, SmartDrive, Samsara, and Geotab. SB Mobile Installations installs and deploys this hardware; we are not the platform vendor.",
    "Installation is coordinated on-site at your location, Monday through Friday, 8:00 AM to 6:00 PM, for one vehicle or an entire fleet, nationwide.",
    "Every installation is photo documented, and you'll receive that documentation automatically.",
  ],
  faq: [
    {
      question: "What dashcam and video platforms do you install for?",
      answer:
        "We work with the platforms fleets already run on, including Lytx/DriveCam, SmartDrive, Samsara, and Geotab.",
    },
    {
      question: "What is documented after a dashcam installation?",
      answer:
        "Every installation is photo documented, and you'll receive that documentation automatically.",
    },
  ],
};

/**
 * SOURCE-OF-TRUTH FLAG: the plan describes fleet rollouts with a staged
 * "scoping, staging, install, verification, reporting, closeout" process.
 * docs/01 section 17 confirms only automatic photo documentation as a
 * customer-facing process fact (section 17.1); the rest of that staged
 * workflow is "inferred from recruiting duties," not confirmed for
 * publication. This content states only confirmed facts: multi-vehicle/
 * multi-location project capacity ("one vehicle or an entire fleet",
 * section 11.1/25), scheduling hours, nationwide reach, and photo
 * documentation. It does not use "verification," "reporting," "quality
 * assurance," "testing," or "closeout" as claimed process stages, matching
 * the same constraint applied to DeploymentProcessSteps on the homepage.
 */
export const fleetRolloutsContent: ServicePageContent = {
  h1: "Fleet Rollouts",
  metaDescription:
    "Multi-vehicle and multi-location GPS, ELD, and fleet electronics installation rollouts, coordinated nationwide. Technicians travel directly to each project location.",
  intro:
    "SB Mobile Installations coordinates multi-vehicle and multi-location installation projects nationwide, from one vehicle to an entire fleet, with technicians traveling directly to each site.",
  body: [
    "SB Mobile Installations coordinates installation projects of any size nationwide, from a single vehicle to a full fleet rollout across multiple locations, installing GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment.",
    "Installation is coordinated on-site at each location, Monday through Friday, 8:00 AM to 6:00 PM. SB Mobile Installations has been in business since 2011, coordinating projects for fleet, commercial, and construction vehicle customers.",
    "Every installation is photo documented, and you'll receive that documentation automatically for each vehicle.",
    "Share your equipment needs, vehicle count, and project locations, and SB Mobile Installations will follow up to coordinate scheduling.",
  ],
  faq: [
    {
      question: "Can you handle a rollout across multiple locations?",
      answer:
        "Yes. SB Mobile Installations coordinates installation projects of any size nationwide, from one vehicle to an entire fleet, with technicians traveling directly to each location.",
    },
    {
      question: "Will each vehicle in a rollout receive its own documentation?",
      answer:
        "Every installation is photo documented, and you'll receive that documentation automatically for each vehicle.",
    },
  ],
};
