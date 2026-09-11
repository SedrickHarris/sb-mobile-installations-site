import { Section } from "@/components/layout/Section";
import type { DirectAnswerContent } from "@/types/content";

interface AnswerBlockProps {
  readonly content: DirectAnswerContent;
}

/**
 * Direct answer block.
 *
 * Continuous editorial text directly under the hero. No card, no border, no
 * heading. The subtle background creates a soft break from the hero without
 * a hard divider.
 *
 * The paragraph is self-contained so an answer engine can lift it whole.
 * See 12-aeo-geo-llm-optimization.md.
 */
export function AnswerBlock({ content }: AnswerBlockProps) {
  return (
    <Section tone="subtle">
      <p className="text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink">
        {content.body}
      </p>
    </Section>
  );
}
