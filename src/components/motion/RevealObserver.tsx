"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Revealable targets. Must match the selectors in globals.css: an explicit
 * data-reveal element, or a direct child of a data-reveal-group that is not
 * a group and holds no group (so grid cards stagger, not their wrapper).
 */
const TARGETS =
  "[data-reveal], [data-reveal-group] > :not([data-reveal-group]):not(:has([data-reveal-group]))";

/** Cap the stagger so a long list never waits more than about 400ms. */
const MAX_STAGGER_INDEX = 5;

/**
 * Progressive-enhancement scroll reveal. Renders nothing.
 *
 * Content is visible by default; this island only adds the `js-reveal` class
 * (which enables the hidden starting state in globals.css) after it has
 * confirmed it can observe the page. Elements already in view at load are
 * marked "static" so nothing flashes; the rest animate once when they
 * scroll into view, then stop being observed. With reduced motion, no
 * JavaScript, or any failure, every element stays visible.
 *
 * Re-runs on route change because the root layout persists across client
 * navigations while the page content is replaced.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      root.classList.remove("js-reveal");
      return;
    }

    let targets: HTMLElement[];
    try {
      targets = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    } catch {
      // Selector engine without :has() support: leave everything visible.
      return;
    }

    const groupCounts = new Map<Element, number>();
    const pending: HTMLElement[] = [];
    const viewportLimit = window.innerHeight * 0.92;

    for (const el of targets) {
      if (el.hasAttribute("data-revealed")) continue;

      const group = el.parentElement?.hasAttribute("data-reveal-group")
        ? el.parentElement
        : null;
      const index = group ? (groupCounts.get(group) ?? 0) : 0;
      if (group) groupCounts.set(group, index + 1);
      el.style.setProperty(
        "--reveal-index",
        String(Math.min(index, MAX_STAGGER_INDEX)),
      );

      if (el.getBoundingClientRect().top < viewportLimit) {
        el.setAttribute("data-revealed", "static");
      } else {
        pending.push(el);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "animate");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    for (const el of pending) observer.observe(el);
    root.classList.add("js-reveal");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
