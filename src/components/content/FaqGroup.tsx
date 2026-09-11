import { Section } from "@/components/layout/Section";
import type { FaqContent } from "@/types/content";

interface FaqGroupProps {
  readonly content: FaqContent;
  readonly id: string;
  /**
   * Accessible name for the section, rendered for assistive technology only.
   *
   * The locked content supplies no visible heading here and no visible copy
   * may be invented, so the heading is visually hidden. It keeps the document
   * outline complete for screen-reader users.
   */
  readonly accessibleHeading: string;
}

/**
 * FAQ list.
 *
 * Native details and summary elements, so disclosure is keyboard operable and
 * screen-reader announced with no client JavaScript. That keeps the page
 * inside the first-party JS budget in 24-performance-budget.md.
 *
 * Every answer stays in the DOM whether or not an item is open, so the visible
 * text always matches the FAQPage schema.
 *
 * Disclosure is click and keyboard driven, never hover, so no meaning depends
 * on a pointer state. See 21-design-system.md section 17.
 */
export function FaqGroup({ content, id, accessibleHeading }: FaqGroupProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" labelledBy={headingId}>
      <h2 id={headingId} className="sr-only">
        {accessibleHeading}
      </h2>

      <dl className="divide-y divide-border border-y border-border">
        {content.items.map((item) => (
          <div key={item.question}>
            <details className="group">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-6 marker:hidden hover:bg-surface/40">
                <dt className="text-[length:var(--text-h4)] leading-snug font-semibold text-balance text-ink">
                  {item.question}
                </dt>
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-lg leading-none text-brand-dark transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="pr-14 pb-6 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
                {item.answer}
              </dd>
            </details>
          </div>
        ))}
      </dl>
    </Section>
  );
}
