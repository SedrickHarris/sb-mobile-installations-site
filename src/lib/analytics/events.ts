/**
 * Event taxonomy, extending the existing `data-event`/`data-journey`
 * attribute pattern already on `CtaButton`.
 *
 * Two journeys, never mixed: `commercial_form_*` and `installer_network_*`.
 * No `apply_*` events, since no active job exists (see CLAUDE.md section 5
 * and docs/_claims-inventory.md item 23).
 */
export const AnalyticsEvent = {
  // Commercial inquiry form lifecycle.
  commercialFormStart: "commercial_form_start",
  commercialFormError: "commercial_form_error",
  commercialFormSubmit: "commercial_form_submit",

  // Installer Network form lifecycle.
  installerNetworkStart: "installer_network_start",
  installerNetworkError: "installer_network_error",
  installerNetworkSubmit: "installer_network_submit",

  // CTA click events, referenced by data-event on CtaButton/Link instances.
  ctaQuoteClick: "cta_quote_click",
  ctaRequestServiceClick: "cta_request_service_click",
  ctaInstallerNetworkClick: "cta_installer_network_click",
  ctaCallClick: "cta_call_click",
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];
