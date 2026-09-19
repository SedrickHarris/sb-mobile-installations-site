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
   * The registered entity is still SB Mobile Installations, LLC, held in
   * `legalEntityName` below for legal disclosures only. It is never used as the
   * public name and is never emitted in structured data.
   */
  name: "SB Mobile Installations",

  /**
   * Sections 4.2 and 33.5. The registered legal entity, for legal and
   * employment or contractor disclosures where the legal entity is required
   * (for example the privacy policy and terms of use notices, subject to
   * attorney review). Never page copy, headings, metadata, Open Graph, alt
   * text, form labels, or job posting titles, and never a `legalName`,
   * `name`, or `hiringOrganization` value in structured data.
   */
  legalEntityName: "SB Mobile Installations, LLC",

  /**
   * Production domain. Section 4 records this as approved for current-site
   * reference and still asks to confirm it remains the production domain.
   * Overridable per environment without a code change.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sbmobileinstallations.com",

  /** Section 5.1. Canonical, stakeholder confirmed 2026-09-10. */
  telephone: "623-388-7352",

  /**
   * Section 5.3 and 33.4. Corporate office, approved 2026-09-19.
   *
   * Approved surfaces only: the footer, the contact page, careers pages,
   * legal pages, Organization schema, and eligible JobPosting schema. Do not
   * add it anywhere else without approval. It is not a walk-in installation
   * facility and not a guarantee of local service, so never label it a shop,
   * a service location, or a place to visit. No map, no directions, no
   * LocalBusiness schema.
   */
  address: {
    streetAddress: "8907 N 175th Ave",
    addressLocality: "Waddell",
    addressRegion: "AZ",
    postalCode: "85355",
    addressCountry: "US",
  },

  /** Section 8.2. Nationwide, confirmed. Reach, not capacity. */
  areaServed: "United States",

  /**
   * Section 33, approved 2026-09-19. Facts for the current Mobile GPS, ELD,
   * and AOBRD installation technician openings, so no page, form, or schema
   * retypes them. Applicants are accepted nationwide, which is a fact separate
   * from installation service reach and does not place any opening in a named
   * market. The starting rate is never guaranteed income. There is no closing
   * date, so no `validThrough` is ever derived from this block.
   */
  recruitment: {
    roleTitle: "Mobile GPS, ELD, and AOBRD Installation Technician",
    applicantsAcceptedNationwide: true,
    engagement: "Independent contractor",
    startingRate: {
      amount: 1600,
      currency: "USD",
      unit: "WEEK",
      display: "$1,600 per week",
    },
    travel: {
      approximatePercent: 75,
      stateToState: true,
    },
    experienceRequired: false,
    trainingProvided: true,
    closingDate: null,
  },

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

/**
 * The corporate office address as display lines: street, then city, state,
 * and postal code. The one formatter every visible surface uses, so no page or
 * component builds its own copy of the address.
 */
export function formatAddressLines(): readonly [string, string] {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    business.address;
  return [streetAddress, `${addressLocality}, ${addressRegion} ${postalCode}`];
}

/** The corporate office address on one line, for running text. */
export function formatAddressInline(): string {
  return formatAddressLines().join(", ");
}
