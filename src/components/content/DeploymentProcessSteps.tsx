import { deploymentProcessImage } from "@/data/site/deployment-process-image";
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
 *
 * Full-bleed decorative background image under a 55% black overlay, matching
 * the homepage hero. Text uses the dark-tone tokens.
 */
export function DeploymentProcessSteps({ content, id }: DeploymentProcessStepsProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      data-tone="dark"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] px-5 py-12 text-[var(--color-text-on-dark)] md:px-6 md:py-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={deploymentProcessImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-[1280px]">
        <h2
          id={headingId}
          className="text-[length:var(--text-h2)] leading-[1.12] font-bold text-balance text-[var(--color-text-on-dark)]"
        >
          {content.h2}
        </h2>

        <p className="mt-6 max-w-3xl text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-on-dark)]">
          {content.body}
        </p>
      </div>
    </section>
  );
}
