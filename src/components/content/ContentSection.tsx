import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { SectionContent } from "@/types/content";

interface ContentSectionProps {
  readonly content: SectionContent;
  readonly id: string;
  readonly tone?: "default" | "subtle";
  /** Emphasis for the section CTA, when the section has one. */
  readonly ctaEmphasis?: "primary" | "secondary";
}

/**
 * A heading, a paragraph, and an optional CTA.
 *
 * Used by the recruiting, commercial, and trust sections. Each keeps its own
 * CTA and journey; the component never mixes them.
 */
export function ContentSection({
  content,
  id,
  tone = "default",
  ctaEmphasis = "primary",
}: ContentSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone={tone} labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {content.body}
      </p>

      {content.cta ? (
        <div className="mt-8">
          <CtaButton cta={content.cta} emphasis={ctaEmphasis} />
        </div>
      ) : null}
    </Section>
  );
}
