import Link from "next/link";

import type { Cta } from "@/types/content";

type Emphasis = "primary" | "secondary";

interface CtaButtonProps {
  readonly cta: Cta;
  readonly emphasis: Emphasis;
  /** Full width below the sm breakpoint, for stacked CTA pairs. */
  readonly blockOnMobile?: boolean;
}

/**
 * A call-to-action link styled as a button.
 *
 * Emphasis is page-context-determined, not journey-hardcoded: a commercial
 * page uses `primary` for its commercial CTA, a careers page uses `primary`
 * for its Installer Network CTA. Do not assume `primary` always means one
 * journey. See 21-design-system.md section 27a (approved 2026-09-18 override
 * of the prior "primary is always recruitment" rule).
 *
 * State changes never rely on color alone. Hover and active shift the shadow
 * and translate the button, so the change is visible without color
 * perception. See 21-design-system.md section 11.
 */
const emphasisClasses: Record<Emphasis, string> = {
  primary: [
    /*
      --color-accent-blue-strong (#00688a) with white text is the single
      verified default primary-action pair, applied consistently across every
      primary-action surface. No other value is used for a primary CTA fill.
    */
    "bg-[var(--color-accent-blue-strong)] text-white border border-transparent",
    "hover:brightness-110 active:brightness-95",
    "shadow-none hover:shadow-card",
  ].join(" "),
  secondary: [
    /*
      The border is this button's visual boundary, so it must meet the 3:1
      non-text contrast requirement in WCAG 1.4.11. --color-ink on --color-
      surface and on --color-surface-subtle both clear that bar by a wide
      margin, so ink is used for both border and label on the secondary
      variant rather than an accent color, per the accent-on-light
      restriction in 21-design-system.md section 27a.
    */
    "bg-surface text-ink border border-ink",
    "hover:bg-surface-subtle",
    "shadow-none hover:shadow-card",
  ].join(" "),
};

export function CtaButton({
  cta,
  emphasis,
  blockOnMobile = false,
}: CtaButtonProps) {
  return (
    <Link
      href={cta.href}
      data-journey={cta.journey}
      data-event={cta.event}
      className={[
        "inline-flex min-h-12 items-center justify-center text-center",
        "rounded-md px-6 py-3",
        "text-base font-semibold no-underline",
        "transition-[background-color,box-shadow,transform,border-color,filter] duration-150",
        "hover:-translate-y-px active:translate-y-0",
        blockOnMobile ? "w-full sm:w-auto" : "",
        emphasisClasses[emphasis],
      ].join(" ")}
    >
      {cta.label}
    </Link>
  );
}
