import type { CareersPageContent } from "@/types/service-content";

/**
 * Careers hub and technician role page content.
 *
 * "Apply" never appears; the pathway is "Join the Installer Network"
 * throughout, per CLAUDE.md section 4 and docs/_claims-inventory.md item 23.
 * No compensation figure appears anywhere in this file, per item 22. No
 * MECP or other certification claim appears, per item 24. No em dash
 * appears anywhere in this file.
 */

/**
 * Careers hub h1, metadata description, intro, and FAQ. Section copy for the
 * rest of the page lives in `careersHubPageContent` (careers-hub-content.ts);
 * `body` is unused on the hub. The FAQ feeds `/faq/`, and its two original
 * questions are kept word for word. New questions avoid the technician
 * page's own FAQ (guarantee, W-2, equipment).
 */
export const careersHubContent: CareersPageContent = {
  h1: "Join the SB Mobile Installations Installer Network",
  metaDescription:
    "Share your fleet installation experience, tools, home market, and travel availability with the SB Mobile Installations Installer Network. An opt-in pathway, not an active job opening.",
  intro:
    "SB Mobile Installations works with independent contractor technicians nationwide on GPS, ELD, and fleet electronics installation projects. Share your experience, tools, home market, and travel availability to join the Installer Network. It is an opt-in, no-guarantee pathway, not an active job opening.",
  body: [],
  faq: [
    {
      question: "Is the Installer Network an active job opening?",
      answer:
        "No. The Installer Network is an opt-in, no-guarantee pathway for independent contractor technicians. It is not an active job opening, and joining it is not an application for one.",
    },
    {
      question: "Are Installer Network technicians employees?",
      answer:
        "No. Technicians engaged through the Installer Network are independent contractors, not employees.",
    },
    {
      question: "What is the SB Mobile Installer Network?",
      answer:
        "The SB Mobile Installer Network is a way for technicians to share their mobile installation experience, tools, home market, and travel availability for future installation opportunities. It is an expression of interest, not an application for a job.",
    },
    {
      question: "What information should I include in my Installer Network form?",
      answer:
        "The form asks for your name, email, phone number, home market or region, an experience summary, and your travel and coverage-region availability. Platform experience and tools currently owned are optional.",
    },
    {
      question: "What are the requirements to join the Installer Network?",
      answer:
        "Installer Network technicians are asked to have a valid driver's license, a personal vehicle for travel, the ability to travel state to state, and a smartphone for submitting installation data, and to pass a background check. See the Installer Network page for the full list of requirements and experience.",
    },
    {
      question: "What tools should I tell SB Mobile about?",
      answer:
        "The form asks which tools you currently own. This question is optional. List the tools you use for installation work.",
    },
    {
      question: "Can I share a specific market or region?",
      answer:
        "Yes. The form asks for your home market or region and your travel and coverage-region availability. Listing a market or region does not mean SB Mobile has active work there, and joining does not guarantee an assignment.",
    },
    {
      question: "What platform experience should I include?",
      answer:
        "You may share experience with fleet technology platforms or device ecosystems that you have worked with. This information is optional and does not indicate certification, authorization, partnership, or a guarantee of assignment.",
    },
    {
      question: "What happens after I submit my information?",
      answer:
        "Information submitted through the form is collected for Installer Network consideration. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    },
    {
      question: "How can a business request fleet installation services?",
      answer:
        "Businesses request fleet installation services separately from the Installer Network. Visit the contact page to request an installation quote.",
      link: { label: "Contact SB Mobile Installations", href: "/contact/" },
    },
  ],
};

export const technicianRoleContent: CareersPageContent = {
  h1: "Mobile Installation Technician",
  metaDescription:
    "Join the SB Mobile Installations Installer Network as a mobile installation technician. Independent contractor, on-site GPS, ELD, and fleet electronics installation work, nationwide.",
  intro:
    "SB Mobile Installations works with independent contractor technicians nationwide who travel on-site to install GPS, ELD, and fleet electronics equipment on fleet, commercial, and construction vehicles.",
  body: [
    "Equipment installed: GPS tracking, ELD, AOBRD, TPMS, fleet dashcam / windshield-mounted video recorder, and fleet management equipment.",
    "Vehicle types: fleet, commercial, and construction vehicles.",
    "Technicians engaged through the Installer Network are independent contractors, not employees. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    "Installation work is coordinated on-site at each customer's location, Monday through Friday, 8:00 AM to 6:00 PM, nationwide. Technicians travel directly to each project location.",
    "Every installation is photo documented as part of the completed work, and that documentation is delivered to the customer automatically.",
  ],
  faq: [
    {
      question: "Is this a W-2 employment position?",
      answer:
        "No. Mobile installation technicians are engaged as independent contractors, not employees.",
    },
    {
      question: "Does joining the Installer Network guarantee work?",
      answer:
        "No. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    },
    {
      question: "What equipment would I be installing?",
      answer:
        "GPS tracking, ELD, AOBRD, TPMS, fleet dashcam / windshield-mounted video recorder, and fleet management equipment, on fleet, commercial, and construction vehicles.",
    },
  ],
};
