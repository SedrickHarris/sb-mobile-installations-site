import { business } from "@/data/site/business";
import type { FooterColumn, NavItem } from "@/types/navigation";

/**
 * Site navigation.
 *
 * Launch-scoped deliberately. Only routes that exist may appear here. A link
 * to an unbuilt route is a dead link, which the project documentation treats
 * as worse than a sparse navigation.
 *
 * Do not add Services, About, Resources, Industries, Service Areas, or
 * Contact until those pages are approved and built.
 */
export const mainNavigation: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers/" },
];

/**
 * Header CTA.
 *
 * Distinct from the homepage hero CTA by design. The header is a persistent,
 * lower-specificity entry point to the openings index; the hero is a
 * page-level conversion action. They are not reconciled into one label.
 */
export const headerCta: NavItem = {
  label: "Current Openings",
  href: "/careers/",
};

/**
 * Footer columns.
 *
 * No address, because the company publishes none and operates a mobile-only
 * model. No phone or email, because no contact address is verified for
 * general display here. No social profiles, because none are verified.
 * See 01-business-source-of-truth.md sections 5.2 and 5.3.
 */
export const footerColumns: readonly FooterColumn[] = [
  {
    heading: "Company",
    lines: [
      business.name,
      "15 years in the field",
      "Monday–Friday, 8:00 AM–6:00 PM",
    ],
    items: [],
  },
  {
    heading: "Careers",
    items: [{ label: "Careers", href: "/careers/" }],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Use", href: "/terms/" },
      { label: "Accessibility", href: "/accessibility/" },
    ],
  },
];
