import { CtaButton } from "@/components/ui/CtaButton";
import type { Cta } from "@/types/content";

interface CtaPairProps {
  /** Recruitment CTA. Always rendered first, in DOM and visual order. */
  readonly primary: Cta;
  /** Commercial CTA. Always secondary. */
  readonly secondary: Cta;
  readonly center?: boolean;
}

/**
 * The two-journey CTA pair.
 *
 * Stacks full width below 640px and sits horizontally above it. The
 * recruitment CTA is always first and always primary, never reversed and
 * never equally weighted. See 21-design-system.md sections 3.2 and 3.3.
 */
export function CtaPair({ primary, secondary, center = false }: CtaPairProps) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap ${
        center ? "sm:justify-center" : ""
      }`}
    >
      <CtaButton cta={primary} emphasis="primary" blockOnMobile />
      <CtaButton cta={secondary} emphasis="secondary" blockOnMobile />
    </div>
  );
}
