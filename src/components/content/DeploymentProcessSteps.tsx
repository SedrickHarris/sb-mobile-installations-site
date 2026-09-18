import { Section } from "@/components/layout/Section";
import type { DeploymentProcessContent } from "@/types/content";

interface DeploymentProcessStepsProps {
  readonly content: DeploymentProcessContent;
  readonly id: string;
}

/**
 * Narrowly factual, non-promissory process summary. No guaranteed response
 * times or turnaround claims appear here; see docs/_claims-inventory.md
 * item 21.
 *
 * This intentionally does NOT describe a claimed multi-step company process
 * (e.g. scope/verify/report/closeout) - only the specific, confirmed facts
 * in docs/_claims-inventory.md are stated. A fuller, more detailed process
 * description is pending stakeholder confirmation and must not be inferred.
 */
export function DeploymentProcessSteps({ content, id }: DeploymentProcessStepsProps) {
  const headingId = `${id}-heading`;

  return (
    <Section tone="subtle" width="site" labelledBy={headingId}>
      <h2
        id={headingId}
        className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-ink"
      >
        {content.h2}
      </h2>

      <p className="mt-6 max-w-3xl text-[length:var(--text-body)] leading-relaxed text-ink-muted">
        {content.body}
      </p>
    </Section>
  );
}
