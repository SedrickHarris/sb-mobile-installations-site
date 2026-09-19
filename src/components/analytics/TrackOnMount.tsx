"use client";

import { useEffect } from "react";

import type { AnalyticsEventName } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/track";

interface TrackOnMountProps {
  readonly event: AnalyticsEventName;
  /** Identifiers and counts only. Never personal data. */
  readonly params?: Readonly<Record<string, string | number | boolean>>;
}

/**
 * Fires one analytics event when the page mounts. Renders nothing. Used for
 * page-view style events such as `active_opening_view` and, on the
 * confirmation page, `application_success`.
 */
export function TrackOnMount({ event, params }: TrackOnMountProps) {
  useEffect(() => {
    trackEvent(event, params);
    // Fire once per mount. The params are static per page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
