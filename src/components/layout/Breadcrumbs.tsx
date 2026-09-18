import Link from "next/link";

export interface BreadcrumbItem {
  readonly label: string;
  /** Omitted on the final (current-page) item, which renders as plain text. */
  readonly href?: string;
}

interface BreadcrumbsProps {
  readonly items: readonly BreadcrumbItem[];
}

/**
 * Visible breadcrumb trail.
 *
 * Pairs with `src/lib/schema/breadcrumbs.ts`, which builds a `BreadcrumbList`
 * from the same item array, so the visible trail and the structured data can
 * never drift apart.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface-subtle">
      <ol className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-2 gap-y-1 px-5 py-3 text-[length:var(--text-small)] text-ink-muted md:px-6">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-x-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink-muted">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-sm text-ink-muted no-underline hover:text-ink hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-ink">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
