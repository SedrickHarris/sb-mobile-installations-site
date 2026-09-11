import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { SectionContent } from "@/types/content";

interface ContentSectionProps {
  readonly content: SectionContent;
  readonly id: string;
  readonly tone?: "default" | "subtle";
  readonly density?: "compact" | "standard" | "spacious";
  readonly ctaEmphasis?: "primary" | "secondary";
  /**
   * Reserve a second column for an approved image. Off for now: no
   * photography is approved, and an empty image box is not acceptable
   * placeholder content. The grid is in place for a later pass.
   */
  readonly withMediaColumn?: boolean;
}

/**
 * A heading, a paragraph, and an optional CTA.
 *
 * Recruiting and commercial use identical structure, spacing, and density so
 * they read as two parallel journeys rather than two items in a list. They
 * are distinguished by order, heading, background, and CTA emphasis only.
 * Neither is visually heavier than the other.
 *
 * When the media column is enabled, the text column comes first in the DOM,
 * so reading order survives the collapse to a single column.
 */
export function ContentSection({
  content,
  id,
  tone = "default",
  density = "standard",
  ctaEmphasis = "primary",
  withMediaColumn = false,
}: ContentSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section
      tone={tone}
      density={density}
      width={withMediaColumn ? "site" : "reading"}
      labelledBy={headingId}
    >
      <div
        className={
          withMediaColumn
            ? "grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
            : ""
        }
      >
        <div>
          <h2
            id={headingId}
            className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
          >
            {content.h2}
          </h2>

          <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
            {content.body}
          </p>

          {content.cta ? (
            <div className="mt-8">
              <CtaButton cta={content.cta} emphasis={ctaEmphasis} />
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
