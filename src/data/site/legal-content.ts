/**
 * Legal page content.
 *
 * These are minimal, honest skeletons describing only what is confirmed about
 * this site's current behavior. They are not complete or legally reviewed
 * documents and must not be treated as launch-final without attorney review.
 *
 * The `attorneyNotice` is rendered visibly near the top of every legal page.
 * Do not remove it, soften it, or move it into a comment.
 *
 * The privacy policy names the fields each of the three forms collects. That
 * list must match the forms (CommercialInquiryForm, InstallerNetworkForm, and
 * ApplicationForm). Update it whenever a form's fields change. No specific
 * data-handling practice, cookie, third-party processor, retention period, or
 * background-check process appears here, because none is confirmed. See open
 * decision 8 in section 25 of 21-design-system.md and docs/01 section 33.9.
 *
 * Each page ends with a contact notice built from `business.address` and
 * `business.telephone`, so the address has one source. The registered entity
 * name (`business.legalEntityName`) appears only in the privacy and terms
 * notices, where a legal entity is conventionally identified
 * (01-business-source-of-truth.md sections 4.2 and 33.5), and remains subject
 * to attorney review. Everywhere else the public name is SB Mobile
 * Installations. The address is the corporate office. The notice makes no
 * claim about walk-in visits, local service, or physical installation
 * facilities.
 */
import { business, formatAddressInline } from "@/data/site/business";

export interface LegalPageContent {
  readonly title: string;
  readonly lastUpdated: string;
  readonly paragraphs: readonly string[];
}

const LAST_UPDATED = "September 19, 2026";

function contactNotice(entityName: string): string {
  return `Contact: ${entityName}, corporate office, ${formatAddressInline()}. Telephone: ${business.telephone}.`;
}

export function attorneyNotice(lastUpdated: string): string {
  return `This page was last updated ${lastUpdated} and has not yet been reviewed by an attorney. Contact SB Mobile Installations with questions before relying on this page for legal purposes.`;
}

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "SB Mobile Installations operates this website. This page describes, in general terms, how information may be handled when you visit this website or submit a form.",
    "This website has three forms, and each is used only for its own purpose: a commercial inquiry form for requesting installation service, an Installer Network form for registering interest in future installer opportunities, and a job application form for applying to the current installer opening.",
    "The commercial inquiry form collects your name, email, phone number, company, the service you need, your vehicle count, project locations, timing, and a description of your project.",
    "The Installer Network form collects your name, email, phone number, home market or region, an experience summary, the tools you own, your travel availability, and, if you choose, your platform experience.",
    "The job application form collects your name, email, phone number, your confirmations that you have a valid driver's license, a personal vehicle, and a smartphone, your consent to a background check, your travel availability, and your acknowledgments and consent. It also collects, if you choose, your skills and experience, platform experience, and tools. It does not ask for a driver's license number, Social Security number, date of birth, or any other government identification number. Please do not enter one.",
    "When you submit a form, the information you entered is sent to SB Mobile Installations. This page does not describe how long information is kept, which service providers handle form submissions, or how a background check is carried out, because those details have not been confirmed and are subject to review.",
    "Standard web server logs may be created automatically by our hosting provider as part of normal website operation. We do not currently use this website to sell personal information.",
    "If you have questions about this policy, please contact SB Mobile Installations directly.",
    contactNotice(business.legalEntityName),
  ],
};

export const termsOfUse: LegalPageContent = {
  title: "Terms of Use",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "These terms govern your use of this website, operated by SB Mobile Installations.",
    "This website provides general information about SB Mobile Installations and its work. Information on this site is provided as-is and may be updated at any time without notice.",
    "This website does not process purchases or binding agreements. It has forms for commercial installation requests, Installer Network registration, and a job application. Submitting a form does not create an employment relationship or a contract, and does not guarantee contact, an interview, an assignment, a schedule, work volume, or pay. Any business arrangement with SB Mobile Installations is governed separately by the specific agreement made directly with the company, not by this page.",
    "Contact SB Mobile Installations with questions about these terms.",
    contactNotice(business.legalEntityName),
  ],
};

export const accessibilityStatement: LegalPageContent = {
  title: "Accessibility Statement",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "SB Mobile Installations is working to make this website usable by as many people as possible, including people who use screen readers, keyboard navigation, or browser zoom.",
    "This site targets the WCAG 2.2 Level AA accessibility guidelines, including keyboard operability, visible focus indicators, sufficient color contrast, and support for browser zoom and reduced-motion preferences.",
    "Accessibility is an ongoing effort. If you experience difficulty using any part of this website, please contact SB Mobile Installations so we can address it.",
    contactNotice(business.name),
  ],
};
