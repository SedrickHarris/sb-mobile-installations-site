import Link from "next/link";

import { footerColumns } from "@/data/navigation/site-navigation";
import { business } from "@/data/site/business";

/**
 * Global site footer.
 *
 * Launch-scoped. Only built routes appear. No services column, because that
 * route does not exist. No contact column beyond the confirmed hours, because
 * no phone or email is verified for display here. No social profiles, because
 * none are verified, which section 21 of 20-component-inventory.md prohibits.
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
    <footer className="border-t border-border bg-surface-subtle">
      <div className="mx-auto max-w-[1280px] px-5 py-12 md:px-6 md:py-16">
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
