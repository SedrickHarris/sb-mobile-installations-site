import Link from "next/link";

import { business } from "@/data/site/business";
import { mobileNavigationCta } from "@/data/navigation/site-navigation";

/**
 * Persistent bottom navigation bar, mobile only.
 *
 * Two actions, always available while scrolling: click-to-call using the
 * confirmed phone number, and the commercial "Request Service" CTA. This is
 * the primary mobile conversion surface, separate from the header's full-nav
 * disclosure menu (see HeaderMobileMenu).
 *
 * Fixed to the viewport bottom. The layout adds bottom padding to <body> so
 * this bar never covers page content, including the last section's CTAs.
 */
export function MobileNavigation() {
  const telHref = `tel:${business.telephone.replace(/[^0-9+]/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface shadow-card md:hidden">
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
    </div>
  );
}
