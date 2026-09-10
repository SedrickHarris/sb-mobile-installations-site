/**
 * Verified business facts.
 *
 * Only facts carrying Approved status in 01-business-source-of-truth.md
 * appear here. Never add an unverified value to this file.
 */
export const business = {
  /** Section 4. Sole operating entity. */
  legalName: "SB Mobile Installations, LLC",

  /**
   * Production domain. Section 4 records this as approved for current-site
   * reference and still asks to confirm it remains the production domain.
   * Overridable per environment without a code change.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sbmobileinstallations.com",

  /** Section 5.1. Canonical, stakeholder confirmed 2026-09-10. */
  telephone: "623-388-7352",

  /** Section 8.2. Nationwide, confirmed. Reach, not capacity. */
  areaServed: "United States",

  /**
   * Section 5.4. Confirmed hours. Time zone and holiday exceptions are still
   * unconfirmed, so no timezone is emitted in structured data.
   */
  hours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as const,
    opens: "08:00",
    closes: "18:00",
  },

  /**
   * Section 9. GPS equipment installation is the only verified service scope
   * for public copy and schema. Do not widen without a content update.
   */
  serviceType: "Mobile GPS Installation",
} as const;
