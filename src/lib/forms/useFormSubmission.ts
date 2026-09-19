"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { FORMS_ENDPOINT } from "@/config/forms";
import { business } from "@/data/site/business";
import type { AttributionFields } from "@/lib/forms/attribution";

export type SubmissionStatus = "idle" | "submitting" | "error";

/** Longest a submission may take before it is treated as a failure. */
export const SUBMISSION_TIMEOUT_MS = 20_000;

interface UseFormSubmissionOptions {
  /** Route the visitor lands on after a confirmed successful submission. */
  readonly thankYouRoute: string;
  /**
   * Called once, only after the endpoint has confirmed success and just before
   * the redirect. A confirmation page can use it to tell a real submission
   * apart from someone opening the confirmation URL directly.
   */
  readonly onConfirmed?: () => void;
}

/**
 * Shared submission behavior for both forms, per plan section 5's resilience
 * requirements:
 *
 * - Checks the configured endpoint before allowing submission; an absent or
 *   malformed endpoint shows an accessible inline error plus a click-to-call
 *   fallback, never a false success state.
 * - Disables the submit control while a request is in flight (the caller
 *   reads `status === "submitting"`). A request that takes longer than
 *   `SUBMISSION_TIMEOUT_MS` is aborted and treated as a failure, so the form
 *   can never hang on "Sending...".
 * - Preserves entered field values on a failed submission: this hook never
 *   clears caller-owned form state itself.
 * - Redirects to the thank-you route only after a confirmed successful
 *   endpoint response, never optimistically.
 * - No secrets, API keys, or credentials handled here.
 *
 * `aria-live` regions and the honeypot field are rendered by each form
 * component, since their exact copy and fields differ.
 */
export function useFormSubmission({
  thankYouRoute,
  onConfirmed,
}: UseFormSubmissionOptions) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const endpointConfigured = isValidEndpoint(FORMS_ENDPOINT);

  const submit = useCallback(
    async (payload: Record<string, unknown> & AttributionFields) => {
      if (!endpointConfigured) {
        setStatus("error");
        setErrorMessage(
          `This form isn't accepting submissions right now. Please call us directly at ${business.telephone} instead.`,
        );
        return false;
      }

      setStatus("submitting");
      setErrorMessage(null);

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), SUBMISSION_TIMEOUT_MS);

      try {
        const response = await fetch(FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Submission failed with status ${response.status}`);
        }

        // Confirmed successful response only, never an optimistic redirect.
        onConfirmed?.();
        router.push(thankYouRoute);
        return true;
      } catch {
        setStatus("error");
        setErrorMessage(
          `Something went wrong sending this form. Your information was not lost, please try again, or call us directly at ${business.telephone}.`,
        );
        return false;
      } finally {
        clearTimeout(timer);
      }
    },
    [endpointConfigured, onConfirmed, router, thankYouRoute],
  );

  return { status, errorMessage, endpointConfigured, submit };
}

function isValidEndpoint(value: string): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
