import type { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { business } from "@/data/site/business";

/**
 * Builds a `BreadcrumbList` node from the same item array the visible
 * `Breadcrumbs` component renders, so the two can never drift apart.
 *
 * `href` is resolved against `business.url` to produce an absolute URL, as
 * `BreadcrumbList.itemListElement[].item` requires.
 */
export function breadcrumbList(items: readonly BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${business.url}${item.href}` } : {}),
    })),
  };
}
