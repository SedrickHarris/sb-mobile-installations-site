import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { FinalCtaContent } from "@/types/content";

interface FinalCtaProps {
  readonly content: FinalCtaContent;
  readonly id: string;
}

/**
 * Closing call to action.
 *
 * Repeats both journeys with the recruitment CTA first, matching the hero
 * hierarchy. Destinations and analytics events stay distinct.
 */
export function FinalCta({ content, id }: FinalCtaProps) {
  const headingId = `${id}-heading`;

  return (
    <Section labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-ink"
      >
        {content.h2}
      </h2>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <CtaButton cta={content.primaryCta} emphasis="primary" />
        <CtaButton cta={content.secondaryCta} emphasis="secondary" />
      </div>
    </Section>
  );
}
