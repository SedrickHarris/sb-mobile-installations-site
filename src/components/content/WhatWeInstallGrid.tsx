import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { business } from "@/data/site/business";
import { serviceImages } from "@/data/site/service-images";
import type { WhatWeInstallContent } from "@/types/content";

interface WhatWeInstallGridProps {
  readonly content: WhatWeInstallContent;
  readonly id: string;
}

/**
 * Equipment-category grid.
 *
 * Sourced from `business.serviceTypes` directly, never a hardcoded list. No
 * service card may exist here unless it is explicitly present in the
 * approved business-facts source. See plan section 7 and
 * docs/_claims-inventory.md.
 */
export function WhatWeInstallGrid({ content, id }: WhatWeInstallGridProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      {content.intro ? (
        <p className="mt-4 max-w-[720px] text-[length:var(--text-body)] leading-relaxed text-ink-muted">
          {content.intro}
        </p>
      ) : null}

      <div className="mt-10">
        <CardGrid columns={3}>
          {business.serviceTypes.map((service) => (
            <Card key={service} tone="light" padding="none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImages[service].src}
                alt=""
                width={serviceImages[service].width}
                height={serviceImages[service].height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <h3 className="p-6 text-[length:var(--text-h4)] font-semibold text-ink">
                {service}
              </h3>
            </Card>
          ))}
        </CardGrid>
      </div>
    </Section>
  );
}
