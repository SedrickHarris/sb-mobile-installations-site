import { Section } from "@/components/layout/Section";
import type { ProofMetricsContent } from "@/types/content";

interface ProofMetricsProps {
  readonly content: ProofMetricsContent;
  readonly id: string;
}

/**
 * Stakeholder-content-pending slot.
 *
 * Returns `null` (renders nothing) while `content.items` is empty. Never
 * renders an empty card, a "coming soon" badge, a zero-value metric row, a
 * placeholder logo, a fictional testimonial shell, a decorative star rating,
 * or a generic statement presented as measured business proof. No
 * certifications, reviews, or ratings are ever published per
 * docs/_claims-inventory.md item 20; this component exists only for real,
 * approved proof metrics if and when a stakeholder supplies them.
 *
 * See 20-component-inventory.md's placeholder-slot convention note.
 */
export function ProofMetrics({ content, id }: ProofMetricsProps) {
  if (content.items.length === 0) {
    return null;
  }

  const headingId = `${id}-heading`;

  return (
    <Section tone="default" width="site" labelledBy={headingId}>
      <h2 id={headingId} className="sr-only">
        Proof metrics
      </h2>
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {content.items.map((item) => (
          <div key={item.label} className="text-center">
            <dt className="text-[length:var(--text-small)] text-ink-muted">
              {item.label}
            </dt>
            <dd className="mt-2 text-[length:var(--text-h2)] font-bold text-ink">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
