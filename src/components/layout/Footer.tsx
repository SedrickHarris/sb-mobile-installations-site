import Link from "next/link";

import { PhoneButton } from "@/components/layout/PhoneButton";
import { footerColumns, utilityBar } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";

/**
 * Global site footer.
 *
 * Launch-scoped. Only built routes appear. The confirmed phone number renders
 * as a click-to-call button in the Company column, reusing the header's
 * utilityBar data. No email, because none is verified for display. No social
 * profiles, because none are verified, which section 21 of
 * 20-component-inventory.md prohibits.
 *
 * No address and no map: the company publishes none and operates a mobile-only
 * model. See 01-business-source-of-truth.md section 5.3.
 *
 * The copyright year is computed at build time rather than hardcoded, so it
 * does not go stale. No founding year is claimed.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-t-[var(--color-brand-red)] bg-surface-subtle">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-6 md:py-16">
        <Link
          href="/"
          aria-label={business.name}
          className="mb-10 inline-flex items-center rounded-sm p-1"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logos/sb-mobile-installations-logo-red.svg"
            alt={business.name}
            width={1540}
            height={779}
            className="h-auto w-[120px] max-w-full md:w-[150px]"
          />
        </Link>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase">
                {column.heading}
              </h2>

              {column.lines ? (
                <ul className="mt-4 flex flex-col gap-2">
                  {column.lines.map((line) => (
                    <li
                      key={line}
                      className="text-[length:var(--text-small)] text-ink-muted"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.heading === "Company" ? (
                <PhoneButton
                  href={utilityBar.phoneHref}
                  label={utilityBar.phoneLabel}
                  location="footer"
                  className="mt-4 border-transparent bg-[var(--color-accent-blue-strong)] text-white hover:brightness-110"
                />
              ) : null}

              {column.items.length > 0 ? (
                <ul className="mt-4 flex flex-col gap-2">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex min-h-11 items-center rounded-sm text-[length:var(--text-small)] text-ink-muted no-underline hover:text-ink hover:underline hover:underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-[length:var(--text-small)] text-ink-muted">
          {`\u00a9 ${year} ${business.name}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
