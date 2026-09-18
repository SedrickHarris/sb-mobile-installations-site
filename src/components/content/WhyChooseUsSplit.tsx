import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { whyChooseUsImages } from "@/data/site/why-choose-us-images";
import type { WhyChooseUsContent } from "@/types/content";

interface WhyChooseUsSplitProps {
  readonly content: WhyChooseUsContent;
  readonly id: string;
}

/**
 * Confirmed differentiators only: photo-documented installs, nationwide
 * reach, in business since 2011, contractor network. See plan section 7.
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
          {content.items.map((item) => {
            const image = whyChooseUsImages[item.title];

            return (
              <Card key={item.title} tone="light" padding="none">
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                ) : null}
                <div className="p-6">
                  <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </Card>
            );
          })}
        </CardGrid>
      </div>
    </Section>
  );
}
