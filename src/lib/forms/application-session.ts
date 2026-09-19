/**
 * Ties the application confirmation page to a real submission.
 *
 * The form sets the marker only after the trusted endpoint has confirmed
 * success, just before it redirects. The confirmation page reads it, so a
 * visitor who opens the confirmation URL directly never sees "Application
 * Received" and never triggers `application_success`.
 *
 * Session storage can be unavailable (private windows, blocked site data).
 * Then the page shows its neutral state even after a real success. That is a
 * deliberate trade: a missing confirmation is safer than a false one, and the
 * neutral state tells the visitor to call before submitting again.
 *
 * Every access is wrapped in try/catch and the marker holds no personal data.
 */
const KEY = "sbmi.application.confirmation";

export type ApplicationConfirmation = "pending" | "shown" | null;

/** Called only after a confirmed successful submission. */
export function markApplicationConfirmed(): void {
  try {
    window.sessionStorage.setItem(KEY, "pending");
  } catch {
    // Storage unavailable: the confirmation page falls back to its neutral state.
  }
}

export function readApplicationConfirmation(): ApplicationConfirmation {
  try {
    const value = window.sessionStorage.getItem(KEY);
    return value === "pending" || value === "shown" ? value : null;
  } catch {
    return null;
  }
}

/** Records that the confirmation and its analytics event were already shown. */
export function markApplicationConfirmationShown(): void {
  try {
    window.sessionStorage.setItem(KEY, "shown");
  } catch {
    // Nothing to do.
  }
}
