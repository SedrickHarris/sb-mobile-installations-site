import { CtaButton } from "@/components/ui/CtaButton";
import type { Cta } from "@/types/content";

interface CtaPairProps {
  /** Rendered first, in DOM and visual order, with primary emphasis. */
  readonly primary: Cta;
  /** Rendered second, with secondary emphasis. */
  readonly secondary: Cta;
  readonly center?: boolean;
}

/**
 * A two-CTA pair.
 *
 * Stacks full width below 640px and sits horizontally above it. Which
 * journey is `primary` is decided by the caller, per page context, per the
 * commercial-first override in 21-design-system.md section 27a: the hero and
 * FinalCta lead with the commercial CTA, while the careers role page and
 * RecruitingBanner lead with the Installer Network CTA. This component does
 * not hardcode which journey is which.
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
