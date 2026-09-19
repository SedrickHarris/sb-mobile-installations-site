import { APPLY_PATH } from "@/data/jobs/routes";
import { AnalyticsEvent } from "@/lib/analytics/events";
import type { Cta } from "@/types/content";

/**
 * The Apply call to action for the active opening. One definition, so every
 * Apply button carries the same label, the recruitment journey, and the
 * `cta_apply_click` event. "Apply" belongs only to the active opening, whose
 * application page and form exist. The Installer Network never uses it.
 */
export const applyCta: Cta = {
  label: "Apply for the Current Opening",
  href: APPLY_PATH,
  journey: "recruitment",
  event: AnalyticsEvent.ctaApplyClick,
};
