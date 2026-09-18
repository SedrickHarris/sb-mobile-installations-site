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
 * A dark navy band signals the end of the page, distinct from every other
 * section tone. Section applies data-tone="dark" so the focus ring and text
 * color resolve correctly for this local context.
 *
 * CTA order matches the hero: the commercial CTA leads, per the
 * commercial-first override in 21-design-system.md section 27a.
 */
export function FinalCta({ content, id }: FinalCtaProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="dark" width="wide" labelledBy={headingId} center>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
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
