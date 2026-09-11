import { Section } from "@/components/layout/Section";
import { CtaPair } from "@/components/ui/CtaPair";
import type { FinalCtaContent } from "@/types/content";

interface FinalCtaProps {
  readonly content: FinalCtaContent;
  readonly id: string;
}

/**
 * Closing call to action.
 *
 * A brand-soft band signals the end of the page. The tint is used rather than
 * solid brand because body text on solid brand would fail contrast. That still
 * holds for the red palette: ink on solid brand measures 2.48:1. On the tint it
 * measures 15.29:1.
 *
 * Both journeys repeat with the recruitment CTA first, matching the hero.
 */
export function FinalCta({ content, id }: FinalCtaProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="brandSoft" width="wide" labelledBy={headingId} center>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      <div className="mt-8">
        <CtaPair
          primary={content.primaryCta}
          secondary={content.secondaryCta}
          center
        />
      </div>
    </Section>
  );
}
