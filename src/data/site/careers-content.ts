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

export const careersHubContent: CareersPageContent = {
  h1: "Join the SB Mobile Installations Installer Network",
  metaDescription:
    "SB Mobile Installations works with independent contractor technicians nationwide on GPS, ELD, and fleet electronics installation projects. Join the Installer Network to express interest.",
  intro:
    "SB Mobile Installations works with independent contractor technicians nationwide on GPS, ELD, and fleet electronics installation projects. The Installer Network is an opt-in, no-guarantee pathway, not an active job opening.",
  body: [
    "Technicians engaged through the Installer Network are independent contractors, not employees. Joining the Installer Network does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.",
    "SB Mobile Installations installs GPS, ELD, AOBRD, TPMS, fleet dashcam, and fleet management equipment on fleet, commercial, and construction vehicles, nationwide, with technicians traveling directly to each project location.",
  ],
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
