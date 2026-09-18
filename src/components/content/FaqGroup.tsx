import { Section } from "@/components/layout/Section";
import type { FaqContent } from "@/types/content";

interface FaqGroupProps {
  readonly content: FaqContent;
  readonly id: string;
  /** Vertical padding. Defaults to the standard section density. */
  readonly density?: "compact" | "standard" | "spacious";
  /**
   * Fallback heading for content with no `h2`, rendered for assistive
   * technology only. No visible copy may be invented, so the heading is
   * visually hidden. It keeps the document outline complete for
   * screen-reader users. Ignored when `content.h2` supplies a visible heading.
   */
  readonly accessibleHeading: string;
  /**
   * "list" (default) is the single-column ruled list. "columns" is the compact
   * card layout: two columns from md up, one column below. Source order is
   * unchanged, so keyboard and screen-reader order matches the DOM.
   */
  readonly layout?: "list" | "columns";
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
 * Each answer has a stable id (`{id}-answer-{n}`) and its summary points at it
 * with `aria-controls`. Expanded state is exposed natively by `<details>`, so
 * `aria-expanded` is not added (it would conflict with the native state).
 * The plus icon sits in a 32px box inside a summary row that is at least 44px
 * high, so the whole row is the interactive target. The rotation transition is
 * disabled for reduced-motion users.
 *
 * Disclosure is click and keyboard driven, never hover, so no meaning depends
 * on a pointer state. See 21-design-system.md section 17.
 *
 * Uses a plain div list, not `<dl>/<dt>/<dd>`. An earlier version nested
 * `<dt>` inside `<summary>`, which mixed description-list semantics with
 * disclosure-widget semantics and failed axe-core's "definition-list" and
 * "dlitem" rules (a `<dt>` must be a direct, correctly-grouped child of a
 * `<dl>`, not several levels deep inside `<details><summary>`). The
 * `<details>/<summary>` pair already provides all the semantics a screen
 * reader needs for an accordion; no `dl` is required. The `FAQPage` JSON-LD
 * (separate from this DOM) still carries the question/answer structure for
 * search engines.
 */
export function FaqGroup({
  content,
  id,
  density = "standard",
  accessibleHeading,
  layout = "list",
}: FaqGroupProps) {
  const headingId = `${id}-heading`;
  const columns = layout === "columns";

  const headingClass = content.h2
    ? `text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink ${
        columns ? "mb-6" : "mb-8 md:mb-10"
      }`
    : "sr-only";

  const heading = (
    <h2 id={headingId} className={headingClass}>
      {content.h2 ?? accessibleHeading}
    </h2>
  );

  if (columns) {
    return (
      <Section tone="subtle" width="site" density={density} labelledBy={headingId}>
        <div className="mx-auto max-w-[1100px]">
          {heading}
          <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
            {content.items.map((item, index) => {
              const answerId = `${id}-answer-${index + 1}`;
              return (
                <details
                  key={item.question}
                  className="group rounded-md border border-border bg-surface"
                >
                  <summary
                    aria-controls={answerId}
                    className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-4 marker:hidden hover:bg-surface-subtle md:px-4.5"
                  >
                    <span className="text-[length:var(--text-body-lg)] leading-snug font-semibold text-balance text-ink">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-lg leading-none text-ink transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    id={answerId}
                    className="px-4 pb-4 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted md:px-4.5"
                  >
                    {item.answer}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section tone="subtle" density={density} labelledBy={headingId}>
      {heading}

      <div className="divide-y divide-border border-y border-border">
        {content.items.map((item, index) => {
          const answerId = `${id}-answer-${index + 1}`;
          return (
            <details key={item.question} className="group">
              <summary
                aria-controls={answerId}
                className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-6 marker:hidden hover:bg-surface/40"
              >
                <span className="text-[length:var(--text-h4)] leading-snug font-semibold text-balance text-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-lg leading-none text-ink transition-transform duration-150 group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p
                id={answerId}
                className="pr-14 pb-6 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted"
              >
                {item.answer}
              </p>
            </details>
          );
        })}
      </div>
    </Section>
  );
}
