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

/**
 * Hub h1, metadata, intro, and FAQ. Section copy for the rest of the page
 * lives in `servicesHubPageContent` (services-hub-content.ts). `body` is
 * unused on the hub: the answer block carries the body copy. The FAQ here is
 * distinct from the four service-page FAQs and also feeds `/faq/`.
 */
export const servicesHubContent: ServicePageContent = {
  h1: "Mobile Fleet Technology Installation Services",
  metaDescription:
    "On-site GPS tracking, ELD, dashcam, and fleet management equipment installation for fleet, commercial, and construction vehicles nationwide. Request a quote.",
  intro:
    "SB Mobile Installations provides on-site installation of GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment for fleet, commercial, and construction vehicles nationwide. Technicians travel directly to your location - one vehicle or an entire fleet.",
  body: [],
  faq: [
    {
      question:
        "What types of fleet technology installation services does SB Mobile Installations provide?",
      answer:
        "SB Mobile Installations installs GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles. Service pages cover fleet telematics, GPS tracking, ELD, dashcam and camera installation, and fleet rollouts.",
    },
    {
      question:
        "Is SB Mobile Installations the platform vendor for the equipment it installs?",
      answer:
        "No. SB Mobile Installations installs and deploys hardware for the platforms fleets already run on. We are an installation and deployment partner, not the platform vendor.",
    },
    {
      question: "Where does installation take place?",
      answer:
        "Installation is on-site. Technicians travel directly to your location, so include your project location in your request.",
    },
    {
      question:
        "What information should we provide when requesting an installation quote?",
      answer:
        "Share the equipment you need installed, your approximate vehicle count, your project locations, your preferred timeline, and any fleet, vehicle, or deployment details that affect the work.",
    },
    {
      question:
        "Can SB Mobile Installations help with multi-vehicle installation projects?",
      answer:
        "Yes. SB Mobile Installations coordinates installation projects of any size, from one vehicle to an entire fleet.",
    },
    {
      question: "Can installations be coordinated across multiple locations?",
      answer:
        "Yes. SB Mobile Installations coordinates multi-location projects nationwide, with technicians traveling directly to each location.",
    },
    {
      question:
        "Which service page should we use for GPS tracking, ELD, or camera hardware?",
      answer:
        "Use the GPS Tracking Installation page for GPS tracking hardware, the ELD Installation page for ELD and AOBRD equipment, and the Dashcam & Camera Installation page for fleet dashcam and video recorder hardware. For a project that spans several equipment types, start with Fleet Telematics Installation, or describe the project in your quote request.",
    },
    {
      question: "How do we discuss a nationwide fleet installation project?",
      answer:
        "Submit an installation quote request with your equipment, vehicle count, and project locations, or call during business hours, Monday through Friday, 8:00 AM to 6:00 PM. SB Mobile Installations will follow up to coordinate scheduling.",
    },
    {
      question: "How can installation technicians join the Installer Network?",
      answer:
        "Technicians can learn about the Installer Network and register interest on the Installer Network page. The Installer Network is a pathway for future opportunities. It does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      link: {
        label: "Join the Installer Network",
        href: "/careers/mobile-installation-technician/",
      },
    },
  ],
};

export const fleetTelematicsInstallationContent: ServicePageContent = {
  h1: "Fleet Telematics Installation",
  metaDescription:
    "Learn about mobile fleet telematics installation for commercial vehicle projects. Request an installation quote and share your equipment, vehicle count, project locations, and preferred timing.",
  intro:
    "SB Mobile Installations provides mobile installation support for approved connected fleet hardware, including GPS tracking, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment, on fleet, commercial, and construction vehicles. Technicians travel to your location. Share your equipment, vehicle count, project locations, and preferred timing to start an installation conversation.",
  body: [],
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
    {
      question:
        "What should I include when requesting fleet telematics installation?",
      answer:
        "Include the equipment you need installed, your approximate vehicle count, your project locations, and your preferred timing. Any fleet, vehicle, or deployment details that affect the work also help.",
    },
    {
      question: "Which service page should I start with?",
      answer:
        "Start with the page for your equipment: GPS Tracking Installation, ELD Installation, or Dashcam & Camera Installation. If your project includes several equipment types or many vehicles, start with this page or with Fleet Rollout Services.",
    },
    {
      question:
        "What vehicle types can be part of a telematics installation project?",
      answer:
        "Common project contexts include work vans, service trucks, utility vehicles, and heavy-duty trucks. Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
    },
    {
      question: "Can I request installation at our project location?",
      answer:
        "SB Mobile Installations provides nationwide mobile installation service, delivered at the customer's location. Share your project locations in the quote request.",
    },
  ],
};

export const gpsTrackingInstallationContent: ServicePageContent = {
  h1: "GPS Tracking Installation Services",
  metaDescription:
    "On-site GPS tracking hardware installation for fleet, commercial, and construction vehicles nationwide. SB Mobile Installations is an installation and deployment partner, not a platform vendor.",
  intro:
    "SB Mobile Installations provides mobile installation support for approved GPS tracking hardware on fleet, commercial, and construction vehicles. Technicians travel to your location, for one vehicle or an entire fleet. Share your vehicle count, project locations, and preferred timing to start an installation conversation. We install the hardware; we are not the tracking platform vendor.",
  body: [],
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
    {
      question:
        "What vehicle and location details should I include for GPS tracking installation?",
      answer:
        "Include your approximate vehicle count, the types of vehicles, each project location, and your preferred timing.",
    },
    {
      question:
        "How does GPS tracking installation relate to fleet telematics installation?",
      answer:
        "Fleet telematics installation covers all of the approved equipment categories, including GPS tracking. Use the GPS tracking page when your project is specifically GPS tracking hardware.",
    },
  ],
};

export const eldInstallationContent: ServicePageContent = {
  h1: "ELD Installation Services",
  metaDescription:
    "On-site ELD and AOBRD installation for fleet, commercial, and construction vehicles nationwide. SB Mobile Installations is an installation and deployment partner, not an ELD provider.",
  intro:
    "SB Mobile Installations provides mobile installation support for approved ELD and AOBRD hardware on fleet, commercial, and construction vehicles. Technicians travel to your location. We install and deploy the hardware; we are not an ELD provider or a compliance consultant. Share your vehicle count, project locations, and preferred timing to start an installation conversation.",
  body: [],
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
    {
      question: "What should I include when requesting ELD installation?",
      answer:
        "Include your approximate vehicle count, each project location, and your preferred timing, along with whether the hardware is ELD or AOBRD equipment.",
    },
    {
      question: "Should I use the ELD page or the GPS tracking page?",
      answer:
        "Use the ELD page for ELD and AOBRD hardware and the GPS Tracking Installation page for GPS tracking hardware. If your project includes both, start with Fleet Telematics Installation.",
    },
  ],
};

export const dashcamCameraInstallationContent: ServicePageContent = {
  h1: "Dashcam & Camera Installation Services",
  metaDescription:
    "On-site fleet dashcam and windshield-mounted video recorder installation for fleet, commercial, and construction vehicles nationwide.",
  intro:
    "SB Mobile Installations provides mobile installation support for approved fleet dashcam and windshield-mounted video recorder hardware on fleet, commercial, and construction vehicles. Technicians travel to your location. Share your vehicle count, project locations, and preferred timing to start an installation conversation. We install the hardware; we are not the video platform vendor.",
  body: [],
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
    {
      question:
        "Should I use the dashcam page or the GPS tracking page?",
      answer:
        "Use this page for fleet dashcam and windshield-mounted video recorder hardware and the GPS Tracking Installation page for GPS tracking hardware. For a project that includes both, start with Fleet Telematics Installation.",
    },
    {
      question: "What should I include when requesting dashcam installation?",
      answer:
        "Include your approximate vehicle count, each project location, and your preferred timing, along with the type of dashcam or video recorder hardware.",
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
  h1: "Fleet Rollout Services",
  metaDescription:
    "Multi-vehicle and multi-location GPS, ELD, and fleet electronics installation rollouts, coordinated nationwide. Technicians travel directly to each project location.",
  intro:
    "SB Mobile Installations coordinates multi-vehicle and multi-location installation projects nationwide, from one vehicle to an entire fleet. Technicians travel directly to each project location. Share your equipment, vehicle count, project locations, and preferred timing to start a rollout conversation.",
  body: [],
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
    {
      question:
        "What information should I include for a multi-location rollout request?",
      answer:
        "Include each project location, the approximate number of vehicles at each location, the equipment you need installed, and your preferred timing.",
    },
    {
      question: "How is a fleet rollout different from a single installation?",
      answer:
        "A rollout covers many vehicles, more than one location, or both. A single installation covers one vehicle. SB Mobile Installations coordinates both, and you request either through the same quote form.",
    },
  ],
};
