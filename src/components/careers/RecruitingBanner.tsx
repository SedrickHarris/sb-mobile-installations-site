import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import type { RecruitingBannerContent } from "@/types/content";

interface RecruitingBannerProps {
  readonly content: RecruitingBannerContent;
  readonly id: string;
}

/**
 * Recruiting pathway banner, homepage placement.
 *
 * Visually distinct from the surrounding commercial content (accent border
 * rail, subtle-tone background) so the secondary Installer Network journey
 * stays a real, visible pathway rather than being buried, per the
 * commercial-first override in 01-business-source-of-truth.md section 32.
 * `ctaEmphasis` is secondary here: this is the homepage's secondary journey,
 * even though the same CTA is primary on the careers role page itself.
 *
 * The SB red rail is decorative only, on a white card (7.14:1), and not the
 * sole indicator of any state. The CTA stays secondary; it never becomes a
 * red-filled action.
 */
export function RecruitingBanner({ content, id }: RecruitingBannerProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <div className="rounded-lg border-l-4 border-[var(--color-brand-red)] bg-surface p-8 shadow-card md:p-10">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center md:gap-10">
          <div>
            <h2
              id={headingId}
              className="text-[length:var(--text-h3)] leading-snug font-bold text-balance text-ink"
            >
              {content.h2}
            </h2>
            <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
              {content.body}
            </p>
          </div>

          <div className="md:justify-self-end">
            <CtaButton cta={content.cta} emphasis="secondary" blockOnMobile />
          </div>
        </div>
      </div>
    </Section>
  );
}
