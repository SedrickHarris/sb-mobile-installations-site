import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import type { HubDecisionRow } from "@/types/service-content";

interface DecisionGuideProps {
  readonly id: string;
  readonly h2: string;
  readonly intro: string;
  readonly rows: readonly HubDecisionRow[];
}

/**
 * "Which service do I need" guide on a navy surface.
 *
 * Plain links only: no tabs, no client JavaScript. Each row pairs a visitor
 * situation with the page that serves it. It routes by project type and
 * never diagnoses a regulatory or technical requirement. Cards stack to one
 * column on mobile. No red on this dark surface (contrast is 2.62:1).
 */
export function DecisionGuide({ id, h2, intro, rows }: DecisionGuideProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="dark" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
      >
        {h2}
      </h2>
      <p className="mt-4 max-w-[720px] text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-[var(--color-text-on-dark)]/90">
        {intro}
      </p>

      <ul
        data-reveal-group
        className="mt-8 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3"
      >
        {rows.map((row) => (
          <li key={row.situation}>
            <Card
              as="div"
              tone="dark"
              hover
              padding="compact"
              className="relative flex h-full flex-col"
            >
              <p className="text-[length:var(--text-body-lg)] leading-snug font-semibold text-[var(--color-text-on-dark)]">
                {row.situation}
              </p>
              {row.supporting ? (
                <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]/90">
                  {row.supporting}
                </p>
              ) : null}
              <p className="mt-3 text-[length:var(--text-small)] text-[var(--color-text-on-dark)]/80">
                Best starting point:{" "}
                <span className="font-semibold text-[var(--color-text-on-dark)]">
                  {row.destination}
                </span>
              </p>
              <Link
                href={row.href}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-[length:var(--text-body)] font-semibold text-[var(--color-text-on-dark)] underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
              >
                {row.linkLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
