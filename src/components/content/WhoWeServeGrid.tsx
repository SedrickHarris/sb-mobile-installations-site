import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { WhoWeServeContent } from "@/types/content";

interface WhoWeServeGridProps {
  readonly content: WhoWeServeContent;
  readonly id: string;
}

/** Audience block: heading, intro, and one image card per vehicle category. */
export function WhoWeServeGrid({ content, id }: WhoWeServeGridProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="default" width="site" labelledBy={headingId}>
      <p className="text-[length:var(--text-body)] font-semibold text-ink-muted">
        {content.eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-2 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {content.intro}
      </p>

      <div className="mt-10">
        <CardGrid columns={3}>
          {content.cards.map((card) => (
            <Card key={card.title} tone="light" padding="none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image.src}
                alt=""
                width={card.image.width}
                height={card.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <h3 className="p-6 text-[length:var(--text-h4)] font-semibold text-ink">
                {card.title}
              </h3>
            </Card>
          ))}
        </CardGrid>
      </div>
    </Section>
  );
}
