import Link from "next/link";

import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { PhoneButton } from "@/components/layout/PhoneButton";
import {
  headerCta,
  mainNavigation,
  utilityBar,
} from "@/data/navigation/site-navigation";

/**
 * Global site header.
 *
 * Brand mark is the full-color red logo on the light header row (the navy
 * utility bar carries no logo). Source: sb-mobile-installations-logo-red.svg,
 * viewBox 1540x779, 14 KB, fill #b50202, shown at 120-150 px wide. Plain img
 * because static export does not use Next image optimization. The thin red top border is decorative only.
 *
 * Utility bar (desktop only): the confirmed nationwide-reach statement and
 * the Installer Network link, so the secondary journey stays reachable without competing with the
 * primary commercial CTA in the row below.
 *
 * Primary nav is commercial-first per the 2026-09-18 override: Services,
 * Careers, Contact. Neither "Industries" nor "Coverage" is linked, because
 * neither route exists yet (Sprint 2). See the build report's judgment-call
 * note on this.
 *
 * Not sticky: a fixed header costs mobile viewport height and can cover
 * anchor targets, which section 16 of 20-component-inventory.md warns
 * against. The persistent mobile conversion surface is MobileNavigation, a
 * fixed bottom bar, not this header.
 */
export function Header() {
  return (
    <header className="border-t-4 border-t-[var(--color-brand-red)] border-b border-border bg-surface">
      <div
        data-tone="dark"
        className="hidden border-b border-border bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)] md:block"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-2 text-[length:var(--text-small)]">
          <div className="flex items-center gap-6">
            <span>{utilityBar.reachLabel}</span>
          </div>

          <Link
            href={utilityBar.installerNetwork.href}
            data-journey="recruitment"
            data-event="cta_installer_network_click"
            data-cta-location="utility-bar"
            className="text-[var(--color-text-on-dark)] no-underline hover:underline"
          >
            {utilityBar.installerNetwork.label}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-8 gap-y-4 px-5 py-4 md:px-6">
        <Link
          href="/"
          aria-label="SB Mobile Installations"
          className="inline-flex items-center rounded-sm p-1"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logos/sb-mobile-installations-logo-red.svg"
            alt="SB Mobile Installations"
            width={1540}
            height={779}
            className="h-auto w-[120px] max-w-full md:w-[150px]"
          />
        </Link>

        <div className="ms-auto flex items-center gap-4">
          <MainNavigation items={mainNavigation} />

          <PhoneButton
            href={utilityBar.phoneHref}
            label={utilityBar.phoneLabel}
            location="header"
            className="hidden border-border text-ink hover:bg-surface-subtle md:inline-flex"
          />

          <Link
            href={headerCta.href}
            data-journey="commercial"
            data-event="cta_request_service_click"
            data-cta-location="header"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-[var(--color-accent-blue-strong)] px-4 py-2 font-semibold text-white no-underline transition-[filter,box-shadow,transform] duration-150 hover:-translate-y-px hover:brightness-110 hover:shadow-card active:translate-y-0"
          >
            {headerCta.label}
          </Link>
        </div>

        <HeaderMobileMenu
          items={[...mainNavigation, utilityBar.installerNetwork]}
          phone={{ href: utilityBar.phoneHref, label: utilityBar.phoneLabel }}
        />
      </div>
    </header>
  );
}
