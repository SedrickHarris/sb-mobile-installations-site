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
 * Exactly two variants exist on the homepage: primary for the recruitment
 * journey and secondary for the commercial journey. Do not add a third.
 *
 * State changes never rely on color alone. Hover and active shift the shadow
 * and translate the button, so the change is visible without color
 * perception. See 21-design-system.md section 11.
 */
const emphasisClasses: Record<Emphasis, string> = {
  primary: [
    "bg-brand text-white border border-transparent",
    "hover:bg-brand-dark active:bg-brand-dark",
    "shadow-none hover:shadow-card",
  ].join(" "),
  secondary: [
    /*
      The border is this button's visual boundary, so it must meet the 3:1
      non-text contrast requirement in WCAG 1.4.11. The color-border token
      measures 1.33:1 against surface and fails; color-brand measures 4.72:1
      and passes. Label uses brand-dark: it reaches 6.63:1 on brand-soft,
      where brand itself would fail body contrast at 4.12:1.
    */
    "bg-surface text-brand-dark border border-brand",
    "hover:bg-brand-soft hover:border-brand-dark",
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
        "transition-[background-color,box-shadow,transform,border-color] duration-150",
        "hover:-translate-y-px active:translate-y-0",
        blockOnMobile ? "w-full sm:w-auto" : "",
        emphasisClasses[emphasis],
      ].join(" ")}
    >
      {cta.label}
    </Link>
  );
}
