import type { ReactNode } from "react";

/**
 * Background rhythm. Sections alternate to separate without hard dividers.
 *
 * `default` and `subtle` are both light surfaces; `dark` is the new navy
 * surface used for components such as LargeRolloutCallout. `brandSoft` is
 * removed along with the brand-soft token it depended on; a section that
 * previously used it now uses `subtle` or `dark` depending on intent.
 */
type Tone = "default" | "subtle" | "dark";

/**
 * The data-tone marker this tone renders. Used by the focus-ring CSS in
 * globals.css to resolve the correct outline color from the nearest local
 * surface. See 21-design-system.md section 27a.
 */
const dataTone: Record<Tone, "light" | "subtle" | "dark"> = {
  default: "light",
  subtle: "subtle",
  dark: "dark",
};

/** Vertical density. Conversion sections breathe; closing statements do not. */
type Density = "compact" | "standard" | "spacious";

/** Measure. See 21-design-system.md section 5.2. */
type Width = "reading" | "wide" | "site" | "siteWide";

interface SectionProps {
  readonly children: ReactNode;
  readonly tone?: Tone;
  readonly density?: Density;
  readonly width?: Width;
  readonly labelledBy?: string;
  readonly center?: boolean;
}

const toneClasses: Record<Tone, string> = {
  default: "bg-surface text-ink",
  subtle: "bg-surface-subtle text-ink",
  dark: "bg-[var(--color-surface-dark)] text-[var(--color-text-on-dark)]",
};

/**
 * Horizontal padding is constant at 20px mobile and 24px from medium up.
 * Vertical padding varies by density, drawn from the 4px scale in section 4.4.
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
  /**
   * Stakeholder-approved exception to the 1200-1280px standard page ceiling
   * in 21-design-system.md section 5.2 (approved 2026-09-20), scoped to the
   * homepage direct-answer section only. Do not reuse without the same
   * approval; every other section stays on "site".
   */
  siteWide: "max-w-[1360px]",
};

/**
 * Section shell.
 *
 * Renders a stable `data-tone="dark" | "light" | "subtle"` marker on its own
 * root element, resolved by CSS in globals.css so keyboard focus rings and
 * any other tone-aware styling pick the correct local context rather than
 * inheriting an incorrect value from an outer page section.
 */
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
      data-tone={dataTone[tone]}
      aria-labelledby={labelledBy}
      className={`px-5 md:px-6 ${toneClasses[tone]} ${densityClasses[density]}`}
    >
      <div
        data-reveal-group
        className={`mx-auto ${widthClasses[width]} ${center ? "text-center" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
