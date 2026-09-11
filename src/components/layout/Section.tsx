import type { ReactNode } from "react";

/** Background rhythm. Sections alternate to separate without hard dividers. */
type Tone = "default" | "subtle" | "brandSoft";

/** Vertical density. Conversion sections breathe; closing statements do not. */
type Density = "compact" | "standard" | "spacious";

/** Measure. See 21-design-system.md section 5.2. */
type Width = "reading" | "wide" | "site";

interface SectionProps {
  readonly children: ReactNode;
  readonly tone?: Tone;
  readonly density?: Density;
  readonly width?: Width;
  readonly labelledBy?: string;
  readonly center?: boolean;
}

const toneClasses: Record<Tone, string> = {
  default: "bg-surface",
  subtle: "bg-surface-subtle",
  brandSoft: "bg-brand-soft",
};

/**
 * Horizontal padding is constant at 20px mobile and 24px from medium up.
 * Vertical padding varies by density, drawn from the 4px scale in section 4.3.
 */
const densityClasses: Record<Density, string> = {
  compact: "py-10 md:py-14",
  standard: "py-12 md:py-20",
  spacious: "py-16 md:py-24",
};

const widthClasses: Record<Width, string> = {
  reading: "max-w-[720px]",
  wide: "max-w-[780px]",
  site: "max-w-[1280px]",
};

export function Section({
  children,
  tone = "default",
  density = "standard",
  width = "reading",
  labelledBy,
  center = false,
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`px-5 md:px-6 ${toneClasses[tone]} ${densityClasses[density]}`}
    >
      <div
        className={`mx-auto ${widthClasses[width]} ${center ? "text-center" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
