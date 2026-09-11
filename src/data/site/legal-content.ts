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
 * No specific data-handling practice, cookie, third-party processor, or
 * retention period appears here, because none is confirmed. See open decision
 * 8 in section 25 of 21-design-system.md.
 */

export interface LegalPageContent {
  readonly title: string;
  readonly lastUpdated: string;
  readonly paragraphs: readonly string[];
}

const LAST_UPDATED = "September 10, 2026";

export function attorneyNotice(lastUpdated: string): string {
  return `This page was last updated ${lastUpdated} and has not yet been reviewed by an attorney. Contact SB Mobile Installations with questions before relying on this page for legal purposes.`;
}

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "SB Mobile Installations operates this website. This page describes, in general terms, how information may be handled when you visit.",
    "At this time, this website does not include forms that collect personal information. If that changes - for example, if an application or contact form is added - this policy will be updated to describe what information is collected, how it is used, and how it can be corrected or removed.",
    "Standard web server logs may be created automatically by our hosting provider as part of normal website operation. We do not currently use this website to sell personal information.",
    "If you have questions about this policy, please contact SB Mobile Installations directly.",
  ],
};

export const termsOfUse: LegalPageContent = {
  title: "Terms of Use",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "These terms govern your use of this website, operated by SB Mobile Installations.",
    "This website provides general information about SB Mobile Installations and its work. Information on this site is provided as-is and may be updated at any time without notice.",
    "This website does not currently process job applications, purchases, or binding agreements. Any business arrangement with SB Mobile Installations is governed separately by the specific agreement made directly with the company, not by this page.",
    "Contact SB Mobile Installations with questions about these terms.",
  ],
};

export const accessibilityStatement: LegalPageContent = {
  title: "Accessibility Statement",
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    "SB Mobile Installations is working to make this website usable by as many people as possible, including people who use screen readers, keyboard navigation, or browser zoom.",
    "This site targets the WCAG 2.2 Level AA accessibility guidelines, including keyboard operability, visible focus indicators, sufficient color contrast, and support for browser zoom and reduced-motion preferences.",
    "Accessibility is an ongoing effort. If you experience difficulty using any part of this website, please contact SB Mobile Installations so we can address it.",
  ],
};
