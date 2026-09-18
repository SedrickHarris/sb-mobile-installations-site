import type { ReactNode } from "react";

type Columns = 2 | 3 | 4;

interface CardGridProps {
  readonly children: ReactNode;
  readonly columns?: Columns;
  readonly className?: string;
}

const columnClasses: Record<Columns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Responsive grid layout, layout-only.
 *
 * Column count, gap, and item sizing only. No card copy, CTA logic, or
 * business-specific markup lives here; that belongs to the caller composing
 * `Card` inside each grid item. See 20-component-inventory.md.
 */
export function CardGrid({ children, columns = 3, className = "" }: CardGridProps) {
  return (
    <div
      data-reveal-group
      className={`grid grid-cols-1 gap-6 ${columnClasses[columns]} ${className}`}
    >
      {children}
    </div>
  );
}
