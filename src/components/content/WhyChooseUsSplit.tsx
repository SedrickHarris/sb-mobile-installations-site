import { Section } from "@/components/layout/Section";
import type { WhyChooseUsContent } from "@/types/content";

interface WhyChooseUsSplitProps {
  readonly content: WhyChooseUsContent;
  readonly id: string;
}

/**
 * Compact proof strip of confirmed facts: in business since 2011, photo
 * documentation, vehicle scope, and contractor engagement.
 *
 * Deliberately carries no benefit headings: the "Why SB Mobile Installations"
 * section (`TrustSection`) owns those, so each benefit heading appears once on
 * the homepage. The h2 is visually hidden so the strip still has an accessible
 * name in the heading outline. Subtle tone, so it reads as its own band after
 * the white Who We Serve section. All copy from `homepageContent.whyChooseUs`.
 */
export function WhyChooseUsSplit({ content, id }: WhyChooseUsSplitProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" density="compact" width="site" labelledBy={headingId}>
      <h2 id={headingId} className="sr-only">
        {content.heading}
      </h2>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
        {content.items.map((item) => (
          <li
            key={item}
            className="border-l-4 border-l-[var(--color-brand-red)] pl-4 text-[length:var(--text-body)] leading-snug font-semibold text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
