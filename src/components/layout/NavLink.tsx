"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types/navigation";

interface NavLinkProps {
  readonly item: NavItem;
  readonly className?: string;
  readonly onNavigate?: () => void;
}

/**
 * A navigation link that marks the current page.
 *
 * Client-only because current-page state needs the pathname. The boundary is
 * kept to this one element rather than the whole header, per section 22 of
 * 21-design-system.md.
 *
 * Current page is announced with aria-current and also carries a visible
 * underline, so the state is never conveyed by color alone.
 */
export function NavLink({ item, className = "", onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === item.href;

  return (
    <Link
      href={item.href}
      aria-current={isCurrent ? "page" : undefined}
      onClick={onNavigate}
      className={[
        "inline-flex min-h-11 items-center rounded-sm px-1 font-medium no-underline",
        isCurrent
          ? "text-ink underline decoration-brand decoration-2 underline-offset-8"
          : "text-ink-muted hover:text-ink hover:underline hover:underline-offset-8",
        className,
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}
