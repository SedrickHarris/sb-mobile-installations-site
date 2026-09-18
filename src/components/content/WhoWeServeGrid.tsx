import Link from "next/link";

import { CardGrid } from "@/components/layout/CardGrid";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import type { WhoWeServeContent } from "@/types/content";

interface WhoWeServeGridProps {
  readonly content: WhoWeServeContent;
  readonly id: string;
}

function slug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * Audience block: heading, intro, and one card per vehicle category.
 *
 * Each card carries an image with alt text, a description, a visible "Use
 * cases" list, and an optional internal link, all server-rendered HTML. A
 * closing support paragraph carries the single commercial CTA. This block is
 * commercial only: no recruitment or Installer Network language belongs here.
 * All copy comes from `homepageContent.whoWeServe`.
 */
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
          {content.cards.map((card) => {
            const labelId = `${id}-${slug(card.title)}-label`;

            return (
              <Card
                key={card.title}
                tone="light"
                padding="none"
                className="flex h-full flex-col"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                    {card.description}
                  </p>

                  <div className="mt-4">
                    <p
                      id={labelId}
                      className="text-[length:var(--text-label)] font-semibold tracking-wide text-ink uppercase"
                    >
                      Use cases
                    </p>
                    <ul
                      aria-labelledby={labelId}
                      className="mt-2 flex list-disc flex-col gap-1 pl-5 text-[length:var(--text-small)] text-ink-muted marker:text-ink-muted"
                    >
                      {card.useCases.map((useCase) => (
                        <li key={useCase}>{useCase}</li>
                      ))}
                    </ul>
                  </div>

                  {card.link ? (
                    <Link
                      href={card.link.href}
                      data-journey="commercial"
                      data-event={card.link.event}
                      className="mt-auto inline-flex min-h-11 items-center pt-4 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 hover:text-ink"
                    >
                      {card.link.label}
                    </Link>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </CardGrid>
      </div>

      <div className="mt-12 flex flex-col gap-6 rounded-lg border border-border bg-surface-subtle p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="max-w-[720px]">
          <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
            {content.support.heading}
          </h3>
          <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
            {content.support.body}
          </p>
        </div>
        <div className="shrink-0">
          <CtaButton cta={content.support.cta} emphasis="primary" blockOnMobile />
        </div>
      </div>
    </Section>
  );
}
