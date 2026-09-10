import Link from "next/link";

import type { Cta } from "@/types/content";

type Emphasis = "primary" | "secondary";

interface CtaButtonProps {
  readonly cta: Cta;
  readonly emphasis: Emphasis;
}

/**
 * A call-to-action link styled as a button.
 *
 * Renders an anchor, not a button element, because every CTA navigates.
 * The `journey` field on the CTA drives the analytics attribute so the
 * recruitment and commercial journeys never share an event.
 */
const emphasisClasses: Record<Emphasis, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark border border-transparent",
  secondary:
    "bg-surface text-brand-dark hover:bg-brand-soft border border-border",
};

export function CtaButton({ cta, emphasis }: CtaButtonProps) {
  return (
    <Link
      href={cta.href}
      data-journey={cta.journey}
      data-event={cta.event}
      className={[
        // Target size comfortably exceeds the 24px WCAG 2.2 minimum.
        "inline-flex min-h-12 items-center justify-center",
        "rounded-md px-6 py-3",
        "text-base font-semibold no-underline",
        "transition-colors",
        emphasisClasses[emphasis],
      ].join(" ")}
    >
      {cta.label}
    </Link>
  );
}
