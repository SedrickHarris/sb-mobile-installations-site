"use client";

import { useEffect, useId, useRef, useState } from "react";

import { NavLink } from "@/components/layout/NavLink";
import type { NavItem } from "@/types/navigation";

interface MobileNavigationProps {
  readonly items: readonly NavItem[];
}

/**
 * Mobile menu.
 *
 * A small client component responsible only for menu state and focus
 * behavior, per section 18 of 20-component-inventory.md.
 *
 * A disclosure pattern rather than a modal: the panel pushes content instead
 * of overlaying it, so there is no inert background to manage and no scroll
 * lock to break page position. That also keeps the menu usable at 200% zoom,
 * where a fixed-height overlay would clip.
 *
 * The header CTA stays visible on mobile rather than moving into this panel,
 * so the primary recruitment action is never hidden behind a menu.
 *
 * Focus moves to the first link on open and returns to the trigger on close.
 * Escape closes. The trigger announces its state with aria-expanded.
 */
export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  /** Only restore focus for a close the user initiated, not the first render. */
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      panelRef.current?.querySelector("a")?.focus();
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="w-full md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border border-brand px-3 font-semibold text-brand-dark transition-[box-shadow,background-color] hover:bg-brand-soft hover:shadow-card"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {open ? "\u00d7" : "\u2261"}
        </span>
        {open ? "Close menu" : "Menu"}
      </button>

      {/*
        Rendered only when open. Keeping it mounted and hidden would leave the
        links reachable by keyboard while visually collapsed.
      */}
      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          className="mt-4 border-t border-border pt-4"
        >
          <ul className="flex flex-col gap-1">
            {/* Recruitment destinations appear near the top. */}
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  className="w-full py-2"
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
