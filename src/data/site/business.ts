/**
 * Verified business facts.
 *
 * Only facts carrying Approved status in 01-business-source-of-truth.md
 * appear here. Never add an unverified value to this file.
 */
export const business = {
  /**
   * Section 4. Sole operating entity.
   *
   * The public company name never carries "LLC". That is a hard project rule,
   * recorded in section 4 of 01-business-source-of-truth.md and in section 26
   * as prohibited wording. It applies to every customer-facing surface: page
   * copy, legal pages, metadata, and structured data values.
   *
   * The registered entity is still SB Mobile Installations, LLC. That form is
   * not published here and is not emitted in structured data. Do not add a
   * legalName property to the Organization graph to carry it.
   */
  name: "SB Mobile Installations",

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
   * Section 9.1, confirmed by stakeholder 2026-09-10. The service name mirrors
   * the approved Direct Answer wording rather than introducing a new label.
   */
  serviceName: "Mobile GPS, ELD, and Fleet Electronics Installation",

  /**
   * Section 9.1. The confirmed equipment categories, as a formal service
   * taxonomy. Do not widen without a content update.
   *
   * Third-party platform names are deliberately absent. Section 14 approves
   * them for visible copy only. A platform name used as a schema value reads
   * as a formal taxonomy claim and can imply a partnership, authorization, or
   * certification that is not confirmed.
   */
  serviceTypes: [
    "GPS tracking installation",
    "ELD installation",
    "AOBRD installation",
    "TPMS installation",
    "Fleet dashcam installation",
    "Fleet management equipment installation",
  ] as const,
} as const;
