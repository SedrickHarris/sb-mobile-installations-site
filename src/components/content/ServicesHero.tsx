import { PhoneButton } from "@/components/layout/PhoneButton";
import { CtaButton } from "@/components/ui/CtaButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { HubImageSlot } from "@/data/site/services-hub-images";
import type { Cta } from "@/types/content";

interface ServicesHeroProps {
  readonly id: string;
  readonly h1: string;
  readonly intro: string;
  readonly primaryCta: Cta;
  readonly qualifier: string;
  readonly phone: { readonly href: string; readonly label: string };
  readonly image: HubImageSlot;
}

/**
 * Services hub hero: navy surface, two columns from md up.
 *
 * Text comes first in the DOM, so on mobile the H1, intro, and both CTAs sit
 * above the image and the primary action stays near the fold. The commercial
 * CTA leads; the phone button is the fallback. Phone details arrive as
 * props, never embedded here.
 */
export function ServicesHero({
  id,
  h1,
  intro,
  primaryCta,
  qualifier,
  phone,
  image,
}: ServicesHeroProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      data-tone="dark"
      aria-labelledby={headingId}
      className="bg-[var(--color-surface-dark)] px-5 py-12 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h1
            id={headingId}
            className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-[var(--color-text-on-dark)]"
          >
            {h1}
          </h1>
          <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <CtaButton cta={primaryCta} emphasis="primary" blockOnMobile />
            <PhoneButton
              href={phone.href}
              label={phone.label}
              location="services-hero"
              className="w-full border-white/60 bg-transparent text-white hover:bg-white/10 sm:w-auto"
            />
          </div>

          <p className="mt-4 text-[length:var(--text-small)] text-[var(--color-text-on-dark)]/80">
            {qualifier}
          </p>
        </div>

        <ImageSlot slot={image} priority />
      </div>
    </section>
  );
}
