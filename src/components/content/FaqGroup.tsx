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
}: FaqGroupProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" density={density} labelledBy={headingId}>
      <h2
        id={headingId}
        className={
          content.h2
            ? "mb-8 text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink md:mb-10"
            : "sr-only"
        }
      >
        {content.h2 ?? accessibleHeading}
      </h2>

      <div className="divide-y divide-border border-y border-border">
        {content.items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-6 marker:hidden hover:bg-surface/40">
              <span className="text-[length:var(--text-h4)] leading-snug font-semibold text-balance text-ink">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-sm border border-border bg-surface text-lg leading-none text-ink transition-transform duration-150 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pr-14 pb-6 text-[length:var(--text-body)] leading-relaxed text-pretty text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
