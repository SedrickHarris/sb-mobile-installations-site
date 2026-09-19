import { activeTechnicianJob, APPLY_PATH, INSTALLER_NETWORK_PATH } from "@/data/jobs";
import type { CareersPageContent } from "@/types/service-content";

/**
 * Careers landing page and Installer Network page content.
 *
 * Two separate journeys:
 * - The active opening and its application (`careersHubContent`, and the job
 *   record in src/data/jobs). "Apply" belongs only here, because the opening
 *   has its own application page and form.
 * - The Installer Network (`installerNetworkContent`), a registration for
 *   future opportunities. It is never an application, and it never uses
 *   "Apply".
 *
 * The approved current-openings facts (docs/01 section 33) live in
 * `business.recruitment` and the job record, not retyped here. No MECP or
 * other certification claim appears as a requirement. No em dash appears in
 * this file.
 */

/**
 * Careers landing page h1, metadata description, intro, and FAQ. Section copy
 * for the page lives in `careersLandingContent` (careers-landing-content.ts).
 * The FAQ feeds `/faq/`.
 */
export const careersHubContent: CareersPageContent = {
  h1: "Installer Careers at SB Mobile Installations",
  metaDescription:
    "Current openings for Mobile GPS, ELD, and AOBRD installation technicians. Independent contractor work, nationwide applicants accepted, no prior installation experience required, and training provided.",
  intro:
    "SB Mobile Installations has current openings for Mobile GPS, ELD, and AOBRD installation technicians. This is independent contractor field work, applicants are accepted nationwide, and no prior installation experience is required. Training is provided.",
  body: [],
  faq: [
    {
      question: "Are there current installer openings?",
      answer:
        "Yes. SB Mobile Installations has current openings for Mobile GPS, ELD, and AOBRD installation technicians. Applicants are accepted nationwide, and no closing date is currently published.",
      link: {
        label: "View the current opening",
        href: activeTechnicianJob.path,
      },
    },
    {
      question: "How do I apply for the current opening?",
      answer:
        "Use the application page. It is a dedicated form for the current opening and is separate from the Installer Network.",
      link: { label: "Go to the application page", href: APPLY_PATH },
    },
    {
      question:
        "What is the difference between applying and joining the Installer Network?",
      answer:
        "Applying is for the current opening. The Installer Network is a separate registration for future opportunities. Joining it is not an application, and it does not guarantee contact, an interview, a contract, an assignment, a schedule, work volume, or pay.",
      link: { label: "About the Installer Network", href: INSTALLER_NETWORK_PATH },
    },
    {
      question: "Is this employee employment?",
      answer:
        "No. This is independent contractor work, not employee employment.",
    },
    {
      question: "How can a business request fleet installation services?",
      answer:
        "Businesses request fleet installation services separately from installer careers. Visit the contact page to request an installation quote.",
      link: { label: "Contact SB Mobile Installations", href: "/contact/" },
    },
  ],
};

/**
 * Installer Network page h1, metadata description, intro, and FAQ. Section
 * copy lives in `careersHubPageContent` (careers-hub-content.ts). The FAQ
 * feeds `/faq/`. The Installer Network is a registration for future
 * opportunities, separate from the application for the current opening.
 */
export const installerNetworkContent: CareersPageContent = {
  h1: "Join the SB Mobile Installations Installer Network",
  metaDescription:
    "Register for future installation opportunities with the SB Mobile Installations Installer Network. A separate registration from the application for the current opening. Share your experience, tools, home market, and travel availability.",
  intro:
    "The Installer Network is a registration for future installation opportunities with SB Mobile Installations. It is separate from the application for the current opening, and it is not an application. Share your experience, tools, home market, and travel availability to join.",
  body: [],
  faq: [
    {
      question: "Is the Installer Network an active job opening?",
      answer:
        "No. The Installer Network is an opt-in, no-guarantee registration for future opportunities, and joining it is not an application for a specific opening. To apply for the current opening, use the application page.",
      link: { label: "Go to the application page", href: APPLY_PATH },
    },
    {
      question: "Are Installer Network technicians employees?",
      answer:
        "No. Technicians engaged through the Installer Network are independent contractors, not employees.",
    },
    {
      question: "What is the SB Mobile Installer Network?",
      answer:
        "The SB Mobile Installer Network is a way for technicians to share their mobile installation experience, tools, home market, and travel availability for future installation opportunities. It is a registration, not an application for a job.",
    },
    {
      question: "What information should I include in my Installer Network form?",
      answer:
        "The form asks for your name, email, phone number, home market or region, an experience summary, and your travel and coverage-region availability. Platform experience and tools currently owned are optional.",
    },
    {
      question: "What are the requirements to join the Installer Network?",
      answer:
        "Installer Network technicians are asked to have a valid driver's license, their own personal vehicle, tools, and travel resources, the ability to travel state to state, and a smartphone for submitting installation data and installation photos, and to pass a background check. No prior installation experience is required, and training is provided. See the Installer Network page for the full list of requirements and helpful experience.",
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
