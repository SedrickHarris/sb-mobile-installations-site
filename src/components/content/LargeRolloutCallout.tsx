import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { LargeRolloutContent } from "@/types/content";

interface LargeRolloutCalloutProps {
  readonly content: LargeRolloutContent;
  readonly id: string;
}

/**
 * "One vehicle or an entire fleet" project-capacity statement, dark-navy
 * tone. This is a separate confirmed fact from nationwide reach (section
 * 11.1, not derived from section 8.2) and is never conflated with it in this
 * copy. See docs/_claims-inventory.md item 15.
 */
export function LargeRolloutCallout({ content, id }: LargeRolloutCalloutProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="dark" width="wide" labelledBy={headingId} center>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
      >
        {content.h2}
      </h2>

      <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
        {content.body}
      </p>

      {content.cta ? (
        <div className="mt-8 flex justify-center">
          <CtaButton cta={content.cta} emphasis="primary" blockOnMobile />
        </div>
      ) : null}
    </Section>
  );
}
