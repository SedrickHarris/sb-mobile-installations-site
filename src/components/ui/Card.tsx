import type { ElementType, ReactNode } from "react";

type Tone = "light" | "dark";
type Padding = "compact" | "default" | "spacious";
type Accent = "none" | "red";

interface CardProps {
  readonly children: ReactNode;
  readonly tone?: Tone;
  readonly padding?: Padding;
  /**
   * Decorative SB red top rule only. Light tone only: red on navy is 2.62:1.
   * Use sparingly, one or two cards per visible section. Never changes text,
   * CTA, focus, or status meaning.
   */
  readonly accent?: Accent;
  /** Adds a hover elevation shift. Off by default for static content cards. */
  readonly hover?: boolean;
  /** Root element. Defaults to `article`, since a card is usually one unit of content. */
  readonly as?: ElementType;
  readonly className?: string;
}

const toneClasses: Record<Tone, string> = {
  light: "bg-surface text-ink border border-border",
  dark: "bg-[var(--color-surface-dark-raised)] text-[var(--color-text-on-dark)] border border-[var(--color-border-dark)]",
};

const paddingClasses: Record<Padding, string> = {
  compact: "p-5",
  default: "p-6 md:p-8",
  spacious: "p-8 md:p-10",
};

/**
 * Reusable visual container.
 *
 * Layout-and-tone only: no business-specific markup, copy, or CTA logic
 * lives here. `WhatWeInstallGrid`, the Sprint 2 industries cards, and future
 * coverage cards compose this primitive rather than each building an
 * isolated card system. See 20-component-inventory.md.
 *
 * `tone="dark"` renders `data-tone="dark"` on its own root element, so a
 * dark card nested inside a light Section resolves its own focus-ring
 * context rather than inheriting the outer section's. See
 * 21-design-system.md section 27a.
 */
export function Card({
  children,
  tone = "light",
  padding = "default",
  accent = "none",
  hover = false,
  as: Tag = "article",
  className = "",
}: CardProps) {
  return (
    <Tag
      data-tone={tone === "dark" ? "dark" : undefined}
      className={[
        "rounded-lg",
        toneClasses[tone],
        paddingClasses[padding],
        hover
          ? "transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-card"
          : "",
        tone === "dark" ? "shadow-none hover:shadow-card-dark" : "",
        accent === "red" && tone === "light"
          ? "border-t-4 border-t-[var(--color-brand-red)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
