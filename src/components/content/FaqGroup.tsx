import { Section } from "@/components/layout/Section";
import type { FaqContent } from "@/types/content";

interface FaqGroupProps {
  readonly content: FaqContent;
  readonly id: string;
  /**
   * Accessible name for the section. Rendered for assistive technology only.
   *
   * The locked content supplies no visible heading for this section, and no
   * visible copy may be invented, so the heading is visually hidden. It exists
   * to keep the document outline complete for screen-reader users.
   */
  readonly accessibleHeading: string;
}

/**
 * FAQ list.
 *
 * Uses native details and summary elements, so disclosure is keyboard
 * operable and screen-reader announced with no client JavaScript. That keeps
 * the page within the first-party JS budget in 24-performance-budget.md.
 *
 * Every answer stays in the DOM whether or not an item is open, so the visible
 * text always matches the FAQPage schema.
 */
export function FaqGroup({ content, id, accessibleHeading }: FaqGroupProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" labelledBy={headingId}>
      <h2 id={headingId} className="sr-only">
        {accessibleHeading}
      </h2>

      <dl>
        {content.items.map((item) => (
          <div
            key={item.question}
            className="border-b border-border last:border-b-0"
          >
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 marker:hidden">
                <dt className="text-[length:var(--text-h4)] font-semibold text-ink">
                  {item.question}
                </dt>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-brand transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="pb-5 text-[length:var(--text-body)] leading-relaxed text-ink-muted">
                {item.answer}
              </dd>
            </details>
          </div>
        ))}
      </dl>
    </Section>
  );
}
