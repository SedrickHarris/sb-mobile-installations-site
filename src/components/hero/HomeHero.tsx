import { CtaPair } from "@/components/ui/CtaPair";
import type { HeroContent } from "@/types/content";

interface HomeHeroProps {
  readonly content: HeroContent;
}

/**
 * Homepage hero.
 *
 * Centered column capped at 780px, the upper bound of the long-form reading
 * range in 21-design-system.md section 5.2. Solid surface rather than a
 * full-bleed image: no photography is approved yet, and section 20 of the
 * image strategy leaves the homepage hero image an open decision.
 *
 * The media slot below is reserved, not rendered. A later pass can place an
 * approved image there without restructuring the section.
 *
 * The H1 uses the h1 scale rather than display. The headline runs eleven
 * words, and display would break it across four lines at desktop widths.
 */
export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="bg-surface px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-[780px] text-center">
        <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
          {content.h1}
        </h1>

        <p className="mx-auto mt-6 max-w-[62ch] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {content.subhead}
        </p>

        <div className="mt-10">
          <CtaPair
            primary={content.primaryCta}
            secondary={content.secondaryCta}
            center
          />
        </div>

        {/* Reserved media slot. Intentionally empty until an image is approved. */}
      </div>
    </section>
  );
}
