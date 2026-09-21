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
      question: "How can installation technicians find installer openings?",
      answer:
        "Technicians can view the current installer opening and apply on the Careers pages. The Installer Network is a separate registration for future opportunities and is not an application. Neither guarantees contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
      link: {
        label: "View current installer openings",
        href: "/careers/jobs/",
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
      question:
        "Does this service cover ELD and AOBRD together?",
      answer:
        "SB Mobile Installations can install approved ELD, AOBRD, and related fleet hardware included in a project. The appropriate equipment and installation scope depend on the approved hardware and project requirements.",
    },
    {
      question:
        "Are you the platform vendor for the equipment you install?",
      answer:
        "SB Mobile Installations provides installation support for approved fleet hardware. The equipment platform, hardware selection, and software relationship remain separate from the installation service.",
    },
    {
      question:
        "What should I include when requesting fleet telematics installation?",
      answer:
        "Include the equipment or service needed, the number of vehicles or assets, the project location or locations, and your preferred installation timeline. Additional vehicle or deployment details may also help clarify the project.",
    },
    {
      question:
        "Which service page should I start with?",
      answer:
        "Start with the service page that best matches your equipment or project need, such as GPS tracking installation, ELD installation, dashcam and camera installation, or fleet rollout services.",
    },
    {
      question:
        "What vehicle types can be part of a telematics installation project?",
      answer:
        "Fleet telematics installation projects may involve work vans, service trucks, utility vehicles, heavy-duty trucks, and other commercial or construction vehicles. The appropriate equipment category depends on the vehicle and project requirements.",
    },
    {
      question:
        "Can I request installation at our project location?",
      answer:
        "Yes. Include the project location or locations, vehicle count, and preferred timeline when requesting an installation quote. SB Mobile Installations provides mobile installation service at the customer’s project location when the project requirements are appropriate.",
    },
    {
      question:
        "What does fleet telematics installation include?",
      answer:
        "Fleet telematics installation may include physically mounting approved hardware, connecting the equipment to the vehicle, routing required cables, and coordinating on-site installation work.",
    },
    {
      question:
        "What types of equipment can be installed?",
      answer:
        "Approved project equipment may include GPS tracking hardware, ELD, AOBRD, TPMS, fleet dashcams, telematics hardware, and other fleet-management equipment.",
    },
    {
      question:
        "Can installation support involve multiple vehicles or locations?",
      answer:
        "A project may involve one vehicle, multiple vehicles, or more than one project location. Include the vehicle count, locations, equipment, and preferred timing so the installation request can be understood accurately.",
    },
    {
      question:
        "How do I request a fleet telematics installation quote?",
      answer:
        "Use the fleet telematics installation quote form to provide your contact information, equipment or service need, vehicle or asset count, project location or locations, preferred timeline, and project description.",
    },
  ],
};

export const gpsTrackingInstallationContent: ServicePageContent = {
  h1: "GPS Tracking Installation",
  metaDescription:
    "Learn about mobile GPS tracking installation for commercial vehicle projects. Request an installation quote and share your equipment, vehicle count, project locations, and preferred timing.",
  intro:
    "SB Mobile Installations provides mobile GPS tracking hardware installation support for commercial vehicle projects.",
  body: [],
  faq: [
    {
      question: "What is GPS tracking installation?",
      answer:
        "GPS tracking installation is the physical installation of approved GPS tracking hardware in commercial vehicle project contexts.",
    },
    {
      question: "What can GPS tracking installation include?",
      answer:
        "Approved scope can include mounting, connection, and routing for GPS tracking hardware.",
    },
    {
      question:
        "What vehicle types can be part of a GPS tracking installation project?",
      answer:
        "Common project contexts include work vans, service trucks, utility vehicles, and heavy-duty trucks. Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type.",
    },
    {
      question: "Can I request installation at our project location?",
      answer:
        "Nationwide mobile installation service, delivered at the customer's location. Include project locations in the installation request.",
    },
    {
      question:
        "Is GPS tracking installation different from telematics or ELD installation?",
      answer:
        "GPS Tracking Installation, Fleet Telematics Installation, and ELD Installation are separate service categories on the site. Use the related service links to find the most relevant starting point for the installation request.",
    },
    {
      question:
        "What should I include in a GPS tracking installation request?",
      answer:
        "Include your equipment, vehicle count, project locations, and preferred timing.",
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
