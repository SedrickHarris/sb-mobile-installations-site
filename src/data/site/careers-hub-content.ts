import type { CareersHubPageContent } from "@/types/service-content";

/**
 * Section copy for the `/careers/` Installer Network page. The H1, intro,
 * metadata description, and FAQ live in `careersHubContent`
 * (careers-content.ts).
 *
 * This is an opt-in, no-guarantee pathway, never a job listing. Requirement
 * groups come from the stakeholder-supplied listing text (2026-09-18) and are
 * recorded in docs/decisions/0004. Deliberately absent, per docs/_claims-
 * inventory.md items 12, 22, 23, 24 and CLAUDE.md section 4: any pay or
 * dollar figure, MECP or other certification, days, hours, shifts, weekends,
 * travel percentage, "shop locations", "Apply", "position", "hiring",
 * platform brand names, trailers, state or city lists, and any promise of
 * contact, review, timing, or assignment. No em dash appears in this file; a
 * spaced hyphen would be used instead.
 */
export const careersHubPageContent: CareersHubPageContent = {
  metaTitle: "Mobile Fleet Installation Technician Network",

  hero: {
    primaryCta: {
      label: "Join the Installer Network",
      href: "#installer-network-form",
      journey: "recruitment",
      event: "cta_installer_network_click",
    },
    callLabel: "Call",
    qualifier:
      "Joining the Installer Network is an expression of interest, not a job application.",
    scopeItems: [
      "Opt-in Installer Network",
      "Mobile fleet installation experience",
      "Nationwide service context",
    ],
  },

  chapters: {
    network: "Understand the network",
    work: "Understand the work context",
    prepare: "Prepare your information",
    join: "Join the network",
  },

  answer: {
    h2: "What Is the SB Mobile Installer Network?",
    body: [
      "The SB Mobile Installer Network is a way for qualified technicians to share their mobile installation experience, equipment familiarity, tools, home market, and travel availability for future installation opportunities.",
      "Joining the network is an expression of interest. It is not an application for an active job opening, and it does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
      "Technicians engaged through the Installer Network are independent contractors, not employees.",
    ],
  },

  fit: {
    h2: "Is the Installer Network a Fit for You?",
    body: ["These are general signals, not an eligibility decision."],
    listPanel: true,
    lists: [
      {
        heading: "This may suit you if",
        items: [
          "You have fleet or commercial vehicle installation experience to share",
          "You are comfortable with on-site work at customer locations",
          "You are looking for independent contractor work",
        ],
      },
      {
        heading: "The network may not be the right fit if",
        items: [
          "You are looking for guaranteed work, hours, or income",
          "You are looking for employee status or benefits",
          "You are looking for an active job opening",
        ],
      },
    ],
  },

  requirements: {
    h2: "Requirements and Experience",
    body: [
      "These are the requirements and experience SB Mobile Installations asks of Installer Network technicians.",
    ],
    lists: [
      {
        heading: "Core requirements",
        items: [
          "A valid driver's license",
          "A personal vehicle for travel",
          "Ability to travel state to state",
          "A smartphone for submitting installation data after each installation",
          "Passing a background check",
        ],
      },
      {
        heading: "Skills and experience",
        items: [
          "Understanding of vehicle installation practices, including electrical systems and mechanical knowledge",
          "Experience with 12 and 24 volt electrical systems, including using a multimeter and diagnosing electrical connections",
          "Experience removing interior and exterior vehicle panels",
          "Prior experience installing GPS and fleet management equipment in fleet vehicles",
        ],
      },
      {
        heading: "What we ask of Installer Network technicians",
        items: [
          "Follow installation guidelines and approved connection procedures",
          "Submit installation data, including multiple photos from each installation",
          "Account for and keep track of all equipment",
          "Confirm installed equipment is functional before leaving the customer's location",
          "Work independently and keep paperwork organized",
          "Communicate well, provide good customer service, and stay in contact with scheduling managers",
        ],
      },
    ],
    footnotes: [
      "We recommend being over the age of 21 because some travel arrangements may be subject to minimum-age requirements set by rental car companies and hotels.",
      "This is a travel-related recommendation, not an automated eligibility screen.",
      "Meeting these does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
  },

  equipment: {
    h2: "Fleet Technology Installation Experience",
    intro:
      "SB Mobile Installations installs the equipment categories below. Tell us about your experience with any of them.",
    cards: [
      {
        title: "GPS Tracking",
        description: "Installation of GPS tracking hardware.",
      },
      {
        title: "ELD and AOBRD",
        description: "Installation of ELD and AOBRD equipment.",
      },
      {
        title: "Fleet Dashcams and Video Recorders",
        description:
          "Installation of fleet dashcam and windshield-mounted video recorder equipment.",
      },
      {
        title: "Fleet Management Equipment and TPMS",
        description: "Installation of fleet management equipment and TPMS.",
      },
    ],
  },

  fieldWork: {
    h2: "Work Where Fleet Vehicles Operate",
    body: [
      "SB Mobile Installations provides nationwide mobile installation service, delivered at customer locations. Installation work is done on-site where the vehicles are.",
      "Every installation is photo documented.",
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
    ],
    footnotes: [
      "Vehicle examples show the commercial and construction vehicle contexts SB Mobile works in. They do not mean every equipment category is installed in every vehicle type.",
    ],
  },

  information: {
    h2: "Information That Helps Us Understand Your Experience",
    body: [
      "The form asks for the details below. Optional items are marked optional.",
    ],
    lists: [
      {
        style: "checklist",
        items: [
          "Your name, email, and phone number",
          "Your home market or region",
          "A summary of your installation experience",
          "Platform experience (optional)",
          "Tools you currently own (optional)",
          "Your travel and coverage-region availability",
        ],
      },
    ],
    footnotes: [
      "You may share experience with fleet technology platforms or device ecosystems that you have worked with. This information is optional and does not indicate certification, authorization, partnership, or a guarantee of assignment.",
    ],
  },

  where: {
    h2: "Tell Us Where You Can Work",
    body: [
      "Share your home market or region and where you are available to travel or cover. This helps SB Mobile Installations understand your availability.",
      "Listing a market or region does not mean SB Mobile has active work there.",
    ],
  },

  after: {
    h2: "After You Join the Installer Network",
    body: [
      "Information submitted through the form is collected for Installer Network consideration.",
      "Joining the Installer Network is not an application for an active job opening. It does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    ],
  },

  join: {
    h2: "Join the Installer Network",
    intro:
      "Tell us about your installation experience, tools, home market, and travel availability.",
    noGuarantee:
      "Joining the Installer Network is an expression of interest. It does not guarantee employment, a project assignment, compensation, or future work.",
    phoneLead: "Prefer to talk it through? Call",
  },

  faqHeading: "Installer Network Questions",

  handoff: {
    h2: "Looking for Fleet Installation Service?",
    body: "SB Mobile Installations installs fleet technology for commercial customers. Businesses request installation separately from the Installer Network.",
    links: [
      { label: "Request an installation quote", href: "/contact/" },
      { label: "Explore fleet installation services", href: "/services/" },
    ],
  },
};
