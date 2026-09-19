import Link from "next/link";

import { business } from "@/data/site/business";
import { mobileNavigationCta } from "@/data/navigation/site-navigation";

/**
 * Persistent bottom navigation bar, below lg (1024px), so phones and tablets.
 * It matches the header breakpoint: below lg the header phone button lives
 * in the menu, so this bar keeps a one-tap call visible.
 *
 * Two actions, always available while scrolling: click-to-call using the
 * confirmed phone number, and the commercial "Request Service" CTA. This is
 * the primary mobile conversion surface, separate from the header's full-nav
 * disclosure menu (see HeaderMobileMenu).
 *
 * Fixed to the viewport bottom. The layout adds bottom padding to <body> so
 * this bar never covers page content, including the last section's CTAs.
 *
 * Rendered as a `<nav>` landmark with an accessible label so this
 * always-visible, position-fixed region is contained by a landmark rather
 * than floating outside the page's landmark structure (axe-core "region"
 * rule).
 *
 * Known follow-up, non-blocking: at 200% browser zoom on narrow mobile
 * widths, QA has observed roughly 3px of horizontal scroll. This bar uses
 * `inset-x-0` (inset-inline: 0), not `100vw`, and no negative margin,
 * border-induced overflow, or transform was found on this or other
 * fixed/sticky elements after a bounded search of `src/`. Root cause is
 * still unverified; do not add a blanket `overflow-x: hidden` to mask it.
 * Revisit with real-device zoom testing.
 */
export function MobileNavigation() {
  const telHref = `tel:${business.telephone.replace(/[^0-9+]/g, "")}`;

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface shadow-card lg:hidden"
    >
      <a
        href={telHref}
        data-journey="commercial"
        data-event="cta_call_click"
        data-cta-location="mobile-bar"
        className="flex min-h-14 items-center justify-center gap-2 border-r border-border text-[length:var(--text-small)] font-semibold text-ink no-underline"
      >
        <span aria-hidden="true">{"☎"}</span>
        Call {business.telephone}
      </a>

      <div data-tone="dark">
        <Link
          href={mobileNavigationCta.href}
          data-journey="commercial"
          data-event="cta_request_service_click"
          data-cta-location="mobile-bar"
          className="flex min-h-14 items-center justify-center bg-[var(--color-accent-blue-strong)] text-[length:var(--text-small)] font-semibold text-white no-underline"
        >
          {mobileNavigationCta.label}
        </Link>
      </div>
    </nav>
  );
}
