import { NavLink } from "@/components/layout/NavLink";
import type { NavItem } from "@/types/navigation";

interface MainNavigationProps {
  readonly items: readonly NavItem[];
}

/**
 * Desktop navigation.
 *
 * Server-rendered links. Careers is a top-level destination, never nested
 * inside an About dropdown, per section 17 of 20-component-inventory.md.
 *
 * No dropdowns and no mega menu: the approved page inventory does not
 * require them.
 */
export function MainNavigation({ items }: MainNavigationProps) {
  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
