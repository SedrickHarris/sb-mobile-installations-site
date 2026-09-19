export interface AttributionFields {
  readonly formType:
    | "commercial_inquiry"
    | "installer_network"
    | "job_application";
  readonly sourcePage: string;
  readonly sourceTitle: string;
  readonly referrer: string;
  readonly utmSource: string;
  readonly utmMedium: string;
  readonly utmCampaign: string;
  readonly utmContent: string;
  readonly utmTerm: string;
  readonly submittedAt: string;
}

/**
 * Builds the hidden/system-generated attribution fields sent with every form
 * submission, per plan section 5. UTM values are read from the URL, never
 * fabricated; an absent parameter is an empty string, not a guess.
 *
 * Reads `window.location` directly rather than `useSearchParams`, so no
 * Suspense boundary is required around either form in this static export.
 */
export function buildAttribution(
  formType: AttributionFields["formType"],
): AttributionFields {
  if (typeof window === "undefined") {
    return {
      formType,
      sourcePage: "",
      sourceTitle: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmContent: "",
      utmTerm: "",
      submittedAt: new Date().toISOString(),
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    formType,
    sourcePage: window.location.pathname,
    sourceTitle: document.title,
    referrer: document.referrer,
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmContent: params.get("utm_content") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    submittedAt: new Date().toISOString(),
  };
}
