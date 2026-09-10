import { Section } from "@/components/layout/Section";
import type { DirectAnswerContent } from "@/types/content";

interface AnswerBlockProps {
  readonly content: DirectAnswerContent;
}

/**
 * Direct answer block.
 *
 * A single self-contained paragraph that answers "what is this company" without
 * surrounding context. It carries no heading by design, so answer engines can
 * lift it whole. See 12-aeo-geo-llm-optimization.md.
 */
export function AnswerBlock({ content }: AnswerBlockProps) {
  return (
    <Section>
      <p className="text-[length:var(--text-body-lg)] leading-relaxed text-ink">
        {content.body}
      </p>
    </Section>
  );
}
