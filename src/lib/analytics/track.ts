import type { AnalyticsEventName } from "@/lib/analytics/events";

type EventParams = Readonly<Record<string, string | number | boolean>>;

/**
 * Pushes one analytics event onto `window.dataLayer` when a data layer exists,
 * and does nothing otherwise. No analytics provider is installed by this
 * repository, so whether these events reach a reporting tool depends on a
 * provider being added and configured later.
 *
 * Callers pass identifiers and counts only. Never pass a name, email, phone,
 * an answer to a form question, or any other personal data.
 */
export function trackEvent(name: AnalyticsEventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const target = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(target.dataLayer)) return;

  target.dataLayer.push({ event: name, ...params });
}
