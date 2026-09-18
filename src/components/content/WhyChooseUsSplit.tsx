import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { WhyChooseUsContent } from "@/types/content";

interface WhyChooseUsSplitProps {
  readonly content: WhyChooseUsContent;
  readonly id: string;
}

/**
 * Confirmed differentiators only: photo-documented installs, nationwide
 * reach, 15 years, contractor network. See plan section 7.
 */
export function WhyChooseUsSplit({ content, id }: WhyChooseUsSplitProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="default" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      <div className="mt-10">
        <CardGrid columns={4}>
          {content.items.map((item) => (
            <Card key={item.title} tone="light" padding="default">
              <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </Card>
          ))}
        </CardGrid>
      </div>
    </Section>
  );
}
