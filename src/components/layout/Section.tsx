import type { ReactNode } from "react";

type Tone = "default" | "subtle";

interface SectionProps {
  readonly children: ReactNode;
  readonly tone?: Tone;
  readonly labelledBy?: string;
  /** Narrow measure for prose. Section 4.3 caps the content column at 720px. */
  readonly width?: "content" | "site";
}

const toneClasses: Record<Tone, string> = {
  default: "bg-surface",
  subtle: "bg-surface-subtle",
};

/**
 * A page section with the documented vertical rhythm.
 *
 * Section padding follows 21-design-system.md section 4.3: 48px vertical and
 * 20px horizontal on mobile, 80px vertical and 24px horizontal from medium up.
 */
export function Section({
  children,
  tone = "default",
  labelledBy,
  width = "content",
}: SectionProps) {
  const maxWidth =
    width === "content" ? "max-w-[720px]" : "max-w-[1280px]";

  return (
    <section
      aria-labelledby={labelledBy}
      className={`px-5 py-12 md:px-6 md:py-20 ${toneClasses[tone]}`}
    >
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </section>
  );
}
