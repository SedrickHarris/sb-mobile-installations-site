import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { HubServiceCard } from "@/types/service-content";

interface ServiceNavGridProps {
  readonly id: string;
  readonly h2: string;
  readonly intro: string;
  readonly cards: readonly HubServiceCard[];
}

/**
 * Services hub navigation: a semantic list of service cards, the hub's main
 * internal-link component.
 *
 * Each card is fully clickable through a stretched link, and the link keeps
 * visible, page-specific text ("Explore GPS tracking installation") rather
 * than a bare "Learn more". With an odd card count the last card spans both
 * columns so the grid has no orphan. The red top rule is decorative and
 * limited to the cards flagged `accent`.
 */
export function ServiceNavGrid({ id, h2, intro, cards }: ServiceNavGridProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {h2}
      </h2>
      <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
        {intro}
      </p>

      <ul
        data-reveal-group
        className="mt-8 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2"
      >
        {cards.map((card, index) => {
          const spansRow = cards.length % 2 === 1 && index === cards.length - 1;
          return (
            <li key={card.href} className={spansRow ? "sm:col-span-2" : ""}>
              <Card
                as="div"
                hover
                accent={card.accent ? "red" : "none"}
                className="relative flex h-full flex-col"
              >
                <p className="text-[length:var(--text-label)] font-semibold tracking-wide text-ink-muted uppercase">
                  {card.category}
                </p>
                <h3 className="mt-2 text-[length:var(--text-h4)] leading-tight font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                  {card.scope}
                </p>
                <p className="mt-3 text-[length:var(--text-small)] leading-relaxed text-ink-muted">
                  {card.commonUse}
                </p>
                <Link
                  href={card.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-[length:var(--text-body)] font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
                >
                  {card.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
