import type {
  TrustStripContent,
  TrustStripIcon,
} from "@/data/site/trust-strip-content";

interface TrustStripProps {
  readonly content: TrustStripContent;
}

/** Simple line icons. Decorative: the item title carries the meaning. */
function StripIcon({ kind }: { readonly kind: TrustStripIcon }) {
  const common = {
    viewBox: "0 0 32 32",
    width: 28,
    height: 28,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
  if (kind === "location") {
    return (
      <svg {...common}>
        <path d="M16 28s9-8.2 9-15a9 9 0 1 0-18 0c0 6.8 9 15 9 15Z" />
        <circle cx="16" cy="13" r="3.5" />
      </svg>
    );
  }
  if (kind === "vehicles") {
    return (
      <svg {...common}>
        <rect x="4" y="14" width="18" height="8" rx="2" />
        <rect x="10" y="8" width="18" height="8" rx="2" opacity="0.55" />
      </svg>
    );
  }
  if (kind === "sites") {
    return (
      <svg {...common}>
        <circle cx="8" cy="9" r="3" />
        <circle cx="24" cy="9" r="3" />
        <circle cx="16" cy="24" r="3" />
        <path d="M10.5 11l4 10M21.5 11l-4 10M11 9h10" opacity="0.55" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="9" width="24" height="16" rx="2" />
      <circle cx="16" cy="17" r="4" />
      <path d="M11 9l1.5-3h7L21 9" />
    </svg>
  );
}

/**
 * Trust strip. Four verified service facts in one row on large screens, with
 * subtle dividers, and a two-column grid below. Rendered once per page,
 * directly below the hero. The title and detail are real text so every claim
 * is readable without the icon.
 *
 * Copy arrives as a prop from `trustStripContent`; see that file for the source
 * of each claim. It is a plain list, not a badge row: no seals, ratings, or
 * certification imagery.
 */
export function TrustStrip({ content }: TrustStripProps) {
  return (
    <section
      aria-label={content.label}
      data-tone="subtle"
      className="border-y border-border bg-surface-subtle px-5 py-6 text-ink md:px-6"
    >
      <ul className="mx-auto grid max-w-[1280px] list-none grid-cols-1 gap-x-6 gap-y-5 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
        {content.items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[var(--color-accent-blue-strong)]"
            >
              <StripIcon kind={item.icon} />
            </span>
            <p className="text-[length:var(--text-small)] leading-snug text-ink-muted">
              <strong className="block text-[length:var(--text-body)] font-bold text-ink">
                {item.title}
              </strong>
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
