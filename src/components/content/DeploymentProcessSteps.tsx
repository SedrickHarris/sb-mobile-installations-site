import { Section } from "@/components/layout/Section";
import type { DeploymentProcessContent } from "@/types/content";

interface DeploymentProcessStepsProps {
  readonly content: DeploymentProcessContent;
  readonly id: string;
}

/**
 * Ordered deployment process. No guaranteed response times or turnaround
 * claims appear here; see docs/_claims-inventory.md item 21.
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

      <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full bg-[var(--color-accent-blue-strong)] text-base font-bold text-white"
            >
              {index + 1}
            </span>
            <h3 className="text-[length:var(--text-h4)] font-semibold text-ink">
              {step.title}
            </h3>
            <p className="text-[length:var(--text-small)] leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
