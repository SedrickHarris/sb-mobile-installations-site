import Link from "next/link";

import { CorporateOffice } from "@/components/content/CorporateOffice";
import { PhoneButton } from "@/components/layout/PhoneButton";
import {
  footerBrandLines,
  footerColumns,
  utilityBar,
} from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";

/**
 * Global site footer.
 *
 * Compact horizontal layout. Desktop (lg): one row of five columns, the brand
 * block (logo, company lines, click-to-call) followed by four navigation
 * groups. Tablet (md): the brand block sits above four navigation columns.
 * Mobile: brand block, then a two-column navigation grid; the last group
 * spans the full width and lists its links in two columns.
 *
 * Launch-scoped. Only built routes appear. The confirmed phone number renders
 * as a click-to-call button in the brand block, reusing the header's
 * utilityBar data. No email, because none is verified for display. No social
 * profiles, because none are verified, which section 21 of
 * 20-component-inventory.md prohibits.
 *
 * The corporate office address is shown as plain text under the company
 * lines through the shared `CorporateOffice` component, labelled "Corporate
 * office" so it is not read as a walk-in installation facility. It comes from
 * `business.address` (approved for the footer, section 33.4). No map, no
 * directions, no link.
 *
 * Link targets are at least 44px high on mobile and compact on desktop, where
 * the 44px rule does not apply (docs/23 section on mobile touch targets).
 *
 * The copyright year is computed at build time rather than hardcoded, so it
 * does not go stale. No founding year is claimed in the copyright line.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-t-[var(--color-brand-red)] bg-surface-subtle">
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(180px,1.3fr)_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label={business.name}
              className="inline-flex items-center rounded-sm p-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logos/sb-mobile-installations-logo-red.svg"
                alt={business.name}
                width={1540}
                height={779}
                className="h-auto w-[120px] max-w-full md:w-[140px]"
              />
            </Link>

            <ul className="mt-3 flex flex-col gap-1">
              {footerBrandLines.map((line) => (
                <li
                  key={line}
                  className="text-[length:var(--text-small)] text-ink-muted"
                >
                  {line}
                </li>
              ))}
            </ul>

            <CorporateOffice className="mt-3" />

            <PhoneButton
              href={utilityBar.phoneHref}
              label={utilityBar.phoneLabel}
              location="footer"
              className="mt-4 border-transparent bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-strong)]"
            />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 lg:col-span-4 lg:gap-x-10"
          >
            {footerColumns.map((column, index) => {
              const isLast = index === footerColumns.length - 1;

              return (
                <div
                  key={column.heading}
                  className={isLast ? "col-span-2 md:col-span-1" : undefined}
                >
                  <h2 className="text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
                    {column.heading}
                  </h2>

                  <ul
                    className={`mt-2 md:mt-3 md:gap-1.5 ${
                      isLast
                        ? "grid grid-cols-2 gap-x-8 md:flex md:flex-col"
                        : "flex flex-col"
                    }`}
                  >
                    {column.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-flex min-h-11 items-center rounded-sm text-[length:var(--text-small)] text-ink-muted no-underline hover:text-ink hover:underline hover:underline-offset-4 md:min-h-7"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-4 text-[length:var(--text-small)] text-ink-muted">
          {`© ${year} ${business.name}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
