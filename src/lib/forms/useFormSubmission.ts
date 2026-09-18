"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { FORMS_ENDPOINT } from "@/config/forms";
import { business } from "@/data/site/business";
import type { AttributionFields } from "@/lib/forms/attribution";

export type SubmissionStatus = "idle" | "submitting" | "error";

interface UseFormSubmissionOptions {
  /** Route the visitor lands on after a confirmed successful submission. */
  readonly thankYouRoute: string;
}

/**
 * Shared submission behavior for both forms, per plan section 5's resilience
 * requirements:
 *
 * - Checks the configured endpoint before allowing submission; an absent or
 *   malformed endpoint shows an accessible inline error plus a click-to-call
 *   fallback, never a false success state.
 * - Disables the submit control while a request is in flight (the caller
 *   reads `status === "submitting"`).
 * - Preserves entered field values on a failed submission: this hook never
 *   clears caller-owned form state itself.
 * - Redirects to the thank-you route only after a confirmed successful
 *   endpoint response, never optimistically.
 * - No secrets, API keys, or credentials handled here.
 *
 * `aria-live` regions and the honeypot field are rendered by each form
 * component, since their exact copy and fields differ.
 */
export function useFormSubmission({ thankYouRoute }: UseFormSubmissionOptions) {
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

      try {
        const response = await fetch(FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Submission failed with status ${response.status}`);
        }

        // Confirmed successful response only, never an optimistic redirect.
        router.push(thankYouRoute);
        return true;
      } catch {
        setStatus("error");
        setErrorMessage(
          `Something went wrong sending this form. Your information was not lost, please try again, or call us directly at ${business.telephone}.`,
        );
        return false;
      }
    },
    [endpointConfigured, router, thankYouRoute],
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
