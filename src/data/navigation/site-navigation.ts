import { business } from "@/data/site/business";
import type { FooterColumn, NavItem } from "@/types/navigation";

/**
 * Site navigation.
 *
 * Launch-scoped deliberately. Only routes that exist may appear here. A link
 * to an unbuilt route is a dead link, which the project documentation treats
 * as worse than a sparse navigation.
 *
 * Commercial-first per the 2026-09-18 override (01-business-source-of-truth.md
 * section 32): Services and Contact lead, Careers stays a real top-level
 * destination.
 *
 * "Industries" is not built in Sprint 1 (Sprint 2 per the roadmap), so it is
 * omitted here. "Coverage" is likewise not built in Sprint 1 (also Sprint 2),
 * so it is omitted too, even though an earlier draft of the plan's nav
 * wording listed it alongside Services/Careers/Contact - see the build
 * report's judgment-call note. Neither is added until its route exists.
 */
export const mainNavigation: readonly NavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Header utility bar, above the primary nav. Phone number and hours are
 * confirmed facts; the Installer Network link keeps the secondary journey
 * visible without competing with the primary commercial CTA.
 */
export const utilityBar = {
  phoneLabel: business.telephone,
  phoneHref: `tel:${business.telephone.replace(/[^0-9+]/g, "")}`,
  reachLabel: "Nationwide Mobile Service",
  installerNetwork: {
    label: "Installer Network",
    href: "/careers/mobile-installation-technician/",
  } satisfies NavItem,
};

/**
 * Header primary CTA. Commercial, per the commercial-first override.
 */
export const headerCta: NavItem = {
  label: "Request Installation Service",
  href: "/contact/",
};

/**
 * Persistent mobile bottom-bar CTA. Same destination as the header CTA; a
 * shorter label fits the fixed-width mobile bar.
 */
export const mobileNavigationCta: NavItem = {
  label: "Request Service",
  href: "/contact/",
};

/**
 * Footer columns.
 *
 * No address, because the company publishes none and operates a mobile-only
 * model. No email, because none is verified for display. No social profiles,
 * because none are verified. See 01-business-source-of-truth.md sections 5.2
 * and 5.3.
 */
export const footerColumns: readonly FooterColumn[] = [
  {
    heading: "Company",
    lines: [
      business.name,
      "15 years in the field",
      "Monday" + "–" + "Friday, 8:00 AM" + "–" + "6:00 PM",
      business.telephone,
    ],
    items: [],
  },
  {
    heading: "Services",
    items: [
      { label: "All Services", href: "/services/" },
      {
        label: "Fleet Telematics Installation",
        href: "/services/fleet-telematics-installation/",
      },
      {
        label: "GPS Tracking Installation",
        href: "/services/gps-tracking-installation/",
      },
      { label: "ELD Installation", href: "/services/eld-installation/" },
      {
        label: "Dashcam & Camera Installation",
        href: "/services/dashcam-camera-installation/",
      },
    ],
  },
  {
    heading: "Careers",
    items: [
      { label: "Careers Overview", href: "/careers/" },
      {
        label: "Mobile Installation Technician",
        href: "/careers/mobile-installation-technician/",
      },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Contact", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Use", href: "/terms/" },
      { label: "Accessibility", href: "/accessibility/" },
    ],
  },
];
