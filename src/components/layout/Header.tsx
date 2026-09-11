import Link from "next/link";

import { MainNavigation } from "@/components/layout/MainNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { headerCta, mainNavigation } from "@/data/navigation/site-navigation";

/**
 * Global site header.
 *
 * Brand is a text wordmark. No logo file exists and no placeholder image is
 * generated for one.
 *
 * Navigation is launch-scoped to routes that exist. The Current Openings CTA
 * is the visually dominant pathway and stays visible at every width, so the
 * recruitment path is never hidden behind a menu.
 *
 * Not sticky: a fixed header costs mobile viewport height and can cover
 * anchor targets, which section 16 of 20-component-inventory.md warns against.
 *
 * No phone number, address, or location claim. None is confirmed for display
 * here.
 */
export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-8 gap-y-4 px-5 py-4 md:px-6">
        <Link
          href="/"
          className="text-[length:var(--text-h4)] font-bold text-ink no-underline hover:underline hover:underline-offset-4"
        >
          SB Mobile Installations
        </Link>

        <div className="ms-auto flex items-center gap-4">
          <MainNavigation items={mainNavigation} />

          <Link
            href={headerCta.href}
            data-journey="recruitment"
            data-event="cta_openings_click"
            data-cta-location="header"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-brand px-4 py-2 font-semibold text-white no-underline transition-[background-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:bg-brand-dark hover:shadow-card active:translate-y-0"
          >
            {headerCta.label}
          </Link>
        </div>

        <MobileNavigation items={mainNavigation} />
      </div>
    </header>
  );
}
