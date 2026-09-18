import type { ReactNode } from "react";

import { FaqGroup } from "@/components/content/FaqGroup";
import { Section } from "@/components/layout/Section";
import type { FaqItem } from "@/types/content";

interface PageBodyContent {
  readonly h1: string;
  readonly intro: string;
  readonly body: readonly string[];
  readonly faq?: readonly FaqItem[];
}

interface PageBodyProps {
  readonly content: PageBodyContent;
  readonly id: string;
  /** Rendered after the body paragraphs, before the FAQ. Typically a form panel. */
  readonly children?: ReactNode;
}

/**
 * Shared hero + body + optional form-panel + FAQ shell, used by the
 * services hub, each service detail page, the careers hub, and the
 * technician role page, so Sprint 1's sub-pages share one structure rather
 * than each hand-building layout. Breadcrumbs render separately, above this
 * component, since their items differ per route.
 */
export function PageBody({ content, id, children }: PageBodyProps) {
  const headingId = `${id}-heading`;

  return (
    <>
      <Section tone="default" density="spacious" width="reading" labelledBy={headingId}>
        <h1
          id={headingId}
          className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink"
        >
          {content.h1}
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          {content.intro}
        </p>
      </Section>

      <Section tone="subtle" width="reading">
        <div className="flex flex-col gap-5">
          {content.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-[length:var(--text-body)] leading-relaxed text-pretty text-ink"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {children ? (
        <Section tone="default" width="reading">
          {children}
        </Section>
      ) : null}

      {content.faq && content.faq.length > 0 ? (
        <FaqGroup
          id={`${id}-faq`}
          accessibleHeading={`${content.h1} frequently asked questions`}
          content={{ items: content.faq }}
        />
      ) : null}
    </>
  );
}
