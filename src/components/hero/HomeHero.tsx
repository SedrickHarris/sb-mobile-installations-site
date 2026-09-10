import { CtaButton } from "@/components/ui/CtaButton";
import type { HeroContent } from "@/types/content";

interface HomeHeroProps {
  readonly content: HeroContent;
}

/**
 * Homepage hero.
 *
 * Carries the single H1. The recruitment CTA is primary and appears first in
 * both DOM and visual order, preserving the recruitment-first hierarchy in
 * 00-project-overview.md.
 */
export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="bg-surface-subtle px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="max-w-[20ch] text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
          {content.h1}
        </h1>

        <p className="mt-6 max-w-[60ch] text-[length:var(--text-body-lg)] leading-relaxed text-ink-muted">
          {content.subhead}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <CtaButton cta={content.primaryCta} emphasis="primary" />
          <CtaButton cta={content.secondaryCta} emphasis="secondary" />
        </div>
      </div>
    </section>
  );
}
