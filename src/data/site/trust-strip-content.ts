/**
 * Trust strip content, shown directly below the hero on customer-facing pages.
 *
 * Claim sources:
 * - Installed at your location: docs/01 section 8.2 and section 25 (nationwide
 *   mobile installation service, delivered at the customer's location).
 * - One vehicle or an entire fleet: docs/01 section 11.1, claims inventory row
 *   15. "Project scope can vary" is supplied copy, a restatement of that range.
 * - Multiple project locations: supplied copy. "Coordinated across sites" is
 *   consistent with claims inventory rows 30, 33, and 34 and with the published
 *   answer in services-content.ts, but row 34 awaits stakeholder confirmation
 *   and the FAQ brief says not to say projects are coordinated at locations.
 *   Flagged for review. No timing, scheduling, or capacity claim may be added.
 * - Photo-documented installations: docs/01 section 17.1 (photo documentation
 *   is sent to every customer automatically). No timeframe, format, or channel.
 *
 * Icon keys map to decorative line icons in TrustStrip.
 */
export type TrustStripIcon = "location" | "vehicles" | "sites" | "photo";

export interface TrustStripItem {
  readonly icon: TrustStripIcon;
  readonly title: string;
  readonly detail: string;
}

export interface TrustStripContent {
  /** Accessible name for the region. Not rendered visibly. */
  readonly label: string;
  readonly items: readonly TrustStripItem[];
}

export const trustStripContent: TrustStripContent = {
  label: "Installation service highlights",
  items: [
    {
      icon: "location",
      title: "Installed at your location",
      detail: "Nationwide mobile installation service",
    },
    {
      icon: "vehicles",
      title: "One vehicle or an entire fleet",
      detail: "Project scope can vary",
    },
    {
      icon: "sites",
      title: "Multiple project locations",
      detail: "Coordinated across sites",
    },
    {
      icon: "photo",
      title: "Photo-documented installations",
      detail: "Documentation is sent automatically",
    },
  ],
};
