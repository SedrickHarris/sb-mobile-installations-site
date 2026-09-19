"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { PLATFORM_OPTIONS } from "@/components/forms/platform-options";
import { activeTechnicianJob, APPLICATION_RECEIVED_PATH } from "@/data/jobs";
import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { trackEvent } from "@/lib/analytics/track";
import { markApplicationConfirmed } from "@/lib/forms/application-session";
import { buildAttribution } from "@/lib/forms/attribution";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";

const job = activeTechnicianJob;
const travelPercent = business.recruitment.travel.approximatePercent;
const startingRate = business.recruitment.startingRate.display;

interface Fields {
  name: string;
  email: string;
  phone: string;
  travelAvailability: string;
  skillsExperience: string;
  toolsOwned: string;
  platforms: string[];
  validLicense: boolean;
  personalVehicle: boolean;
  smartphone: boolean;
  backgroundCheck: boolean;
  travelAcknowledged: boolean;
  stateToStateAcknowledged: boolean;
  trainingAcknowledged: boolean;
  contractorAcknowledged: boolean;
  privacyConsent: boolean;
  website: string;
}

type RequiredKey =
  | "name"
  | "email"
  | "phone"
  | "travelAvailability"
  | "validLicense"
  | "personalVehicle"
  | "smartphone"
  | "backgroundCheck"
  | "travelAcknowledged"
  | "stateToStateAcknowledged"
  | "trainingAcknowledged"
  | "contractorAcknowledged"
  | "privacyConsent";

type Errors = Partial<Record<RequiredKey, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  travelAvailability: "",
  skillsExperience: "",
  toolsOwned: "",
  platforms: [],
  validLicense: false,
  personalVehicle: false,
  smartphone: false,
  backgroundCheck: false,
  travelAcknowledged: false,
  stateToStateAcknowledged: false,
  trainingAcknowledged: false,
  contractorAcknowledged: false,
  privacyConsent: false,
  website: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number with at least 10 digits.";
  }
  if (!fields.travelAvailability.trim()) {
    errors.travelAvailability = "Describe your travel availability.";
  }
  if (!fields.validLicense) {
    errors.validLicense = "Confirm that you have a valid driver's license.";
  }
  if (!fields.personalVehicle) {
    errors.personalVehicle = "Confirm that you have a personal vehicle.";
  }
  if (!fields.smartphone) {
    errors.smartphone = "Confirm that you have a smartphone.";
  }
  if (!fields.backgroundCheck) {
    errors.backgroundCheck =
      "Confirm that you understand and consent to the background check.";
  }
  if (!fields.travelAcknowledged) {
    errors.travelAcknowledged = `Confirm that you understand approximately ${travelPercent}% travel is required.`;
  }
  if (!fields.stateToStateAcknowledged) {
    errors.stateToStateAcknowledged =
      "Confirm that you understand state-to-state travel is required.";
  }
  if (!fields.trainingAcknowledged) {
    errors.trainingAcknowledged =
      "Confirm that you understand training is provided.";
  }
  if (!fields.contractorAcknowledged) {
    errors.contractorAcknowledged =
      "Confirm that you understand this is independent contractor work.";
  }
  if (!fields.privacyConsent) {
    errors.privacyConsent =
      "Consent to the use of your information to consider your application.";
  }
  return errors;
}

/**
 * Job application form for the active technician opening.
 *
 * A dedicated form for the application journey. It is never rendered with,
 * and never shares a handler, route, payload type, or confirmation with the
 * commercial inquiry form or the Installer Network form (CLAUDE.md section 4).
 *
 * It collects contact details, confirmations, travel availability,
 * acknowledgments, optional skills, platform and tool details, and consent. It
 * never asks for a driver's license number, a Social Security number, a date
 * of birth, or any government identifier. The background check is a
 * confirmation and consent only. Wording of the consent and privacy text needs
 * legal review before launch (docs/01 section 33.9).
 *
 * It claims no employment, guaranteed assignment, guaranteed hours, or
 * guaranteed income. Submission goes through the shared trusted endpoint hook,
 * which shows an accessible error and a click-to-call fallback if the endpoint
 * is absent or the request fails, and redirects only after a confirmed
 * success.
 *
 * Analytics events carry the job slug and counts only, never a field value.
 */
export function ApplicationForm() {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempt, setAttempt] = useState(0);
  const started = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const { status, errorMessage, endpointConfigured, submit } =
    useFormSubmission({
      thankYouRoute: APPLICATION_RECEIVED_PATH,
      onConfirmed: markApplicationConfirmed,
    });

  const errorKeys = Object.keys(errors) as RequiredKey[];

  useEffect(() => {
    if (attempt > 0 && errorKeys.length > 0) {
      summaryRef.current?.focus();
    }
    // Move focus to the summary only after a failed submit attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as RequiredKey];
        return next;
      });
    }
  }

  function togglePlatform(platform: string) {
    setFields((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  }

  function handleFirstInteraction() {
    if (started.current) return;
    started.current = true;
    trackEvent(AnalyticsEvent.applicationStart, { jobSlug: job.slug });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (fields.website) {
      return;
    }

    const found = validate(fields);
    setErrors(found);

    const count = Object.keys(found).length;
    if (count > 0) {
      setAttempt((n) => n + 1);
      trackEvent(AnalyticsEvent.applicationError, {
        jobSlug: job.slug,
        errorCount: count,
      });
      return;
    }

    trackEvent(AnalyticsEvent.applicationSubmit, { jobSlug: job.slug });

    const ok = await submit({
      ...buildAttribution("job_application"),
      jobSlug: job.slug,
      jobTitle: job.title,
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      travelAvailability: fields.travelAvailability.trim(),
      skillsExperience: fields.skillsExperience.trim(),
      platforms: fields.platforms,
      toolsOwned: fields.toolsOwned.trim(),
      validDriversLicense: fields.validLicense,
      personalVehicle: fields.personalVehicle,
      smartphone: fields.smartphone,
      backgroundCheckConsent: fields.backgroundCheck,
      travelPercentAcknowledged: fields.travelAcknowledged,
      travelPercent,
      stateToStateTravelAcknowledged: fields.stateToStateAcknowledged,
      trainingAcknowledged: fields.trainingAcknowledged,
      independentContractorAcknowledged: fields.contractorAcknowledged,
      privacyConsent: fields.privacyConsent,
    });

    if (!ok) {
      trackEvent(AnalyticsEvent.applicationFailure, {
        jobSlug: job.slug,
        reason: endpointConfigured ? "request_failed" : "endpoint_not_configured",
      });
    }
  }

  const submitting = status === "submitting";
  const fieldId = (key: string) => `${formId}-${key}`;
  const errorId = (key: string) => `${formId}-${key}-error`;
  const describe = (key: RequiredKey) =>
    errors[key] ? errorId(key) : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstInteraction}
      data-journey="recruitment"
      data-event={AnalyticsEvent.applicationSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <div aria-hidden="true" className="sr-only">
        <label htmlFor={fieldId("website")}>Leave this field blank</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {errorKeys.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-error bg-surface-subtle p-4 text-[length:var(--text-small)] text-ink"
        >
          <h2 className="font-semibold text-error">
            Please fix {errorKeys.length === 1 ? "this item" : "these items"}{" "}
            before submitting
          </h2>
          <ul className="mt-2 list-disc pl-5">
            {errorKeys.map((key) => (
              <li key={key}>
                <a href={`#${fieldId(key)}`} className="underline">
                  {errors[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset className="flex flex-col gap-5">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Your contact information
        </legend>

        <Field label="Name" id={fieldId("name")} error={errors.name} errorId={errorId("name")} required>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe("name")}
            className={inputClass}
          />
        </Field>

        <Field label="Email" id={fieldId("email")} error={errors.email} errorId={errorId("email")} required>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </Field>

        <Field label="Phone" id={fieldId("phone")} error={errors.phone} errorId={errorId("phone")} required>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describe("phone")}
            className={inputClass}
          />
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Requirements
        </legend>
        <p className="text-[length:var(--text-small)] text-ink-muted">
          Do not enter a license number or any other identification number in
          this form.
        </p>
        <Check
          id={fieldId("validLicense")}
          errorId={errorId("validLicense")}
          error={errors.validLicense}
          checked={fields.validLicense}
          onChange={(v) => update("validLicense", v)}
        >
          I have a valid driver&apos;s license.
        </Check>
        <Check
          id={fieldId("personalVehicle")}
          errorId={errorId("personalVehicle")}
          error={errors.personalVehicle}
          checked={fields.personalVehicle}
          onChange={(v) => update("personalVehicle", v)}
        >
          I have a personal vehicle, and I will provide my own tools and travel
          resources.
        </Check>
        <Check
          id={fieldId("smartphone")}
          errorId={errorId("smartphone")}
          error={errors.smartphone}
          checked={fields.smartphone}
          onChange={(v) => update("smartphone", v)}
        >
          I have a smartphone for submitting installation data and installation
          photos.
        </Check>
        <Check
          id={fieldId("backgroundCheck")}
          errorId={errorId("backgroundCheck")}
          error={errors.backgroundCheck}
          checked={fields.backgroundCheck}
          onChange={(v) => update("backgroundCheck", v)}
        >
          I understand that a background check is required, and I consent to a
          background check as part of the application process.
        </Check>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Travel
        </legend>
        <Field
          label="Travel availability"
          id={fieldId("travelAvailability")}
          error={errors.travelAvailability}
          errorId={errorId("travelAvailability")}
          required
        >
          <textarea
            id={fieldId("travelAvailability")}
            name="travelAvailability"
            rows={3}
            value={fields.travelAvailability}
            onChange={(e) => update("travelAvailability", e.target.value)}
            aria-invalid={Boolean(errors.travelAvailability)}
            aria-describedby={describe("travelAvailability")}
            className={inputClass}
          />
        </Field>
        <Check
          id={fieldId("travelAcknowledged")}
          errorId={errorId("travelAcknowledged")}
          error={errors.travelAcknowledged}
          checked={fields.travelAcknowledged}
          onChange={(v) => update("travelAcknowledged", v)}
        >
          I understand that approximately {travelPercent}% travel is required.
        </Check>
        <Check
          id={fieldId("stateToStateAcknowledged")}
          errorId={errorId("stateToStateAcknowledged")}
          error={errors.stateToStateAcknowledged}
          checked={fields.stateToStateAcknowledged}
          onChange={(v) => update("stateToStateAcknowledged", v)}
        >
          I understand that state-to-state travel is required.
        </Check>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Skills and experience (optional)
        </legend>
        <p className="text-[length:var(--text-small)] text-ink-muted">
          No prior installation experience is required. Share anything you
          think is relevant.
        </p>
        <Field label="Relevant skills and experience" id={fieldId("skillsExperience")}>
          <textarea
            id={fieldId("skillsExperience")}
            name="skillsExperience"
            rows={4}
            value={fields.skillsExperience}
            onChange={(e) => update("skillsExperience", e.target.value)}
            className={inputClass}
          />
        </Field>

        <fieldset className="flex flex-col gap-2">
          <legend className="text-[length:var(--text-small)] font-semibold text-ink">
            Platform experience with (optional)
          </legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PLATFORM_OPTIONS.map((platform) => (
              <label
                key={platform}
                className="flex min-h-11 items-center gap-2 text-[length:var(--text-small)] text-ink-muted"
              >
                <input
                  type="checkbox"
                  checked={fields.platforms.includes(platform)}
                  onChange={() => togglePlatform(platform)}
                  className="size-5 shrink-0"
                />
                {platform}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Tools you currently own" id={fieldId("toolsOwned")}>
          <textarea
            id={fieldId("toolsOwned")}
            name="toolsOwned"
            rows={3}
            value={fields.toolsOwned}
            onChange={(e) => update("toolsOwned", e.target.value)}
            className={inputClass}
          />
        </Field>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="text-[length:var(--text-h4)] font-bold text-ink">
          Acknowledgments and consent
        </legend>
        <Check
          id={fieldId("trainingAcknowledged")}
          errorId={errorId("trainingAcknowledged")}
          error={errors.trainingAcknowledged}
          checked={fields.trainingAcknowledged}
          onChange={(v) => update("trainingAcknowledged", v)}
        >
          I understand that training is provided and that no prior installation
          experience is required.
        </Check>
        <Check
          id={fieldId("contractorAcknowledged")}
          errorId={errorId("contractorAcknowledged")}
          error={errors.contractorAcknowledged}
          checked={fields.contractorAcknowledged}
          onChange={(v) => update("contractorAcknowledged", v)}
        >
          I understand that this is independent contractor work, not employee
          employment, and that the starting rate of {startingRate} is not
          guaranteed income.
        </Check>
        <Check
          id={fieldId("privacyConsent")}
          errorId={errorId("privacyConsent")}
          error={errors.privacyConsent}
          checked={fields.privacyConsent}
          onChange={(v) => update("privacyConsent", v)}
        >
          I consent to SB Mobile Installations using the information in this
          form to consider my application. See the{" "}
          <Link href="/privacy-policy/" className="font-semibold underline">
            Privacy Policy
          </Link>
          .
        </Check>
      </fieldset>

      <p className="rounded-md border border-border bg-surface-subtle p-4 text-[length:var(--text-small)] leading-relaxed text-ink">
        {job.disclaimer}
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-accent-blue-strong)] px-6 py-3 text-base font-semibold text-white transition-[filter] duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit Application"}
      </button>

      <div role="status" aria-live="polite" className="text-[length:var(--text-small)]">
        {status === "error" && errorMessage ? (
          <p className="rounded-md border border-error bg-surface-subtle p-4 text-error">
            {errorMessage}{" "}
            <a
              href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`}
              className="font-semibold underline"
            >
              Call {business.telephone}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}

const inputClass =
  "min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink aria-[invalid=true]:border-error";

function Field({
  label,
  id,
  error,
  errorId,
  required = false,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  errorId?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[length:var(--text-small)] font-semibold text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error && errorId ? (
        <p id={errorId} className="text-[length:var(--text-small)] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Check({
  id,
  errorId,
  error,
  checked,
  onChange,
  children,
}: {
  id: string;
  errorId: string;
  error?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="flex items-start gap-3 text-[length:var(--text-small)] text-ink-muted">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 size-5 shrink-0"
        />
        <span>{children}</span>
      </label>
      {error ? (
        <p id={errorId} className="ml-8 text-[length:var(--text-small)] text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
