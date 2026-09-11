import { Section } from "@/components/layout/Section";
import { attorneyNotice, type LegalPageContent } from "@/data/site/legal-content";

interface LegalPageProps {
  readonly content: LegalPageContent;
}

/**
 * Shared shell for the legal pages.
 *
 * The attorney-review notice renders visibly near the top of every page that
 * uses this component. It is a real DOM element, never a comment and never
 * visually hidden. Do not remove or soften it.
 *
 * The notice uses a border and an explicit heading rather than color alone,
 * so its status is conveyed without relying on color perception.
 */
export function LegalPage({ content }: LegalPageProps) {
  return (
    <Section density="spacious">
      <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
        {content.title}
      </h1>

      <div
        role="note"
        aria-labelledby="attorney-notice-heading"
        className="mt-8 rounded-md border border-warning bg-surface-subtle p-5"
      >
        <h2
          id="attorney-notice-heading"
          className="text-[length:var(--text-label)] font-semibold tracking-wide text-warning uppercase"
        >
          Not yet reviewed by an attorney
        </h2>
        <p className="mt-2 text-[length:var(--text-small)] leading-relaxed text-ink">
          {attorneyNotice(content.lastUpdated)}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {content.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-[length:var(--text-body)] leading-relaxed text-pretty text-ink"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
