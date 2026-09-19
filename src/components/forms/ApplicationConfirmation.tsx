"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { activeTechnicianJob as job, APPLY_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/track";
import {
  markApplicationConfirmationShown,
  readApplicationConfirmation,
} from "@/lib/forms/application-session";

type State = "checking" | "confirmed" | "unconfirmed";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--color-accent-blue-strong)] underline underline-offset-4";

/**
 * Application confirmation content.
 *
 * It says "Application Received" only when this browser session really
 * completed a submission that the trusted endpoint confirmed (see
 * `application-session.ts`). Anyone who opens the URL directly, or whose
 * storage is unavailable, sees a neutral message that claims nothing and
 * points to the application page and the phone number. `application_success`
 * fires once, only in the confirmed state, and never on a reload.
 *
 * The static HTML is the neutral "checking" state, so no build output or
 * crawler ever sees a receipt claim. The page is also noindex.
 */
export function ApplicationConfirmation() {
  const [state, setState] = useState<State>("checking");

  useEffect(() => {
    const marker = readApplicationConfirmation();

    if (marker === "pending") {
      setState("confirmed");
      trackEvent(AnalyticsEvent.applicationSuccess, { jobSlug: job.slug });
      markApplicationConfirmationShown();
    } else if (marker === "shown") {
      setState("confirmed");
    } else {
      setState("unconfirmed");
    }
  }, []);

  const phoneHref = `tel:${business.telephone.replace(/[^0-9+]/g, "")}`;

  if (state === "confirmed") {
    return (
      <>
        <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
          Application Received
        </h1>
        <p className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted">
          Thank you for applying for the {job.title} opening at SB Mobile
          Installations. We have received your application.
        </p>
        <p className="mt-4 text-[length:var(--text-body)] text-ink-muted">
          {job.disclaimer}
        </p>
        <p className="mt-6 text-[length:var(--text-body)] text-ink">
          Questions? Call{" "}
          <a
            href={phoneHref}
            className="font-semibold text-[var(--color-accent-blue-strong)] underline"
          >
            {business.telephone}
          </a>
          , Monday-Friday, 8:00 AM-6:00 PM.
        </p>
        <p className="mt-6 flex flex-col items-center gap-1">
          <Link href={job.path} className={linkClass}>
            Review the opening
          </Link>
          <Link href="/careers/" className={linkClass}>
            Back to Careers
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-[length:var(--text-h1)] leading-[1.08] font-bold text-balance text-ink">
        Application Status
      </h1>
      <p
        role="status"
        className="mt-5 text-[length:var(--text-body-lg)] leading-relaxed text-pretty text-ink-muted"
      >
        {state === "checking"
          ? "Checking your application status."
          : "We could not confirm an application submission from this browser. This page confirms an application only right after it is submitted."}
      </p>
      {state === "unconfirmed" ? (
        <>
          <p className="mt-4 text-[length:var(--text-body)] text-ink-muted">
            If you just submitted an application and did not see a
            confirmation, call{" "}
            <a
              href={phoneHref}
              className="font-semibold text-[var(--color-accent-blue-strong)] underline"
            >
              {business.telephone}
            </a>{" "}
            before submitting again.
          </p>
          <p className="mt-6 flex flex-col items-center gap-1">
            <Link href={APPLY_PATH} className={linkClass}>
              Go to the application page
            </Link>
            <Link href="/careers/" className={linkClass}>
              Back to Careers
            </Link>
          </p>
        </>
      ) : null}
    </>
  );
}
