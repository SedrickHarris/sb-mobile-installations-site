"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";

import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildAttribution } from "@/lib/forms/attribution";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";

const THANK_YOU_ROUTE = "/careers/installer-network-received/";

/**
 * Confirmed platform-experience language only, per docs/_claims-inventory.md
 * item 13. Labeled "experience with," never "certified on." Never used as a
 * schema taxonomy value elsewhere, and this list is not exported for reuse
 * outside this form for that reason.
 */
const PLATFORM_OPTIONS = [
  "Samsara",
  "Geotab",
  "Verizon Connect",
  "Omnitracs",
  "PeopleNet",
  "Trimble",
  "Zonar",
  "LoJack",
  "Lytx/DriveCam",
  "SmartDrive",
  "CalAmp",
] as const;

/**
 * Installer Network form.
 *
 * Fields: name, email, phone, home market/region, experience summary,
 * optional platform-experience multi-select, tools currently owned,
 * travel/coverage-region availability, consent, and a separate explicit
 * no-guarantee acknowledgment checkbox.
 *
 * Never rendered on the same page/section as CommercialInquiryForm, and
 * never shares a submission handler with it. See CLAUDE.md section 4 and
 * plan section 5.
 */
export function InstallerNetworkForm() {
  const formId = useId();
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    homeMarket: "",
    experienceSummary: "",
    platforms: [] as string[],
    toolsOwned: "",
    travelAvailability: "",
    consent: false,
    noGuaranteeAcknowledged: false,
    website: "",
  });

  const { status, errorMessage, submit } = useFormSubmission({
    thankYouRoute: THANK_YOU_ROUTE,
  });

  function update<K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function togglePlatform(platform: string) {
    setFields((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (fields.website) {
      return;
    }

    const attribution = buildAttribution("installer_network");
    await submit({
      ...attribution,
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      homeMarket: fields.homeMarket,
      experienceSummary: fields.experienceSummary,
      platforms: fields.platforms,
      toolsOwned: fields.toolsOwned,
      travelAvailability: fields.travelAvailability,
      consent: fields.consent,
      noGuaranteeAcknowledged: fields.noGuaranteeAcknowledged,
    });
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      data-journey="recruitment"
      data-event={AnalyticsEvent.installerNetworkSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <div aria-hidden="true" className="sr-only">
        <label htmlFor={`${formId}-website`}>Leave this field blank</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <Field label="Name" htmlFor={`${formId}-name`} required>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Email" htmlFor={`${formId}-email`} required>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Phone" htmlFor={`${formId}-phone`} required>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={fields.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Home market or region" htmlFor={`${formId}-homeMarket`} required>
        <input
          id={`${formId}-homeMarket`}
          name="homeMarket"
          type="text"
          required
          value={fields.homeMarket}
          onChange={(e) => update("homeMarket", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Experience summary" htmlFor={`${formId}-experienceSummary`} required>
        <textarea
          id={`${formId}-experienceSummary`}
          name="experienceSummary"
          rows={4}
          required
          value={fields.experienceSummary}
          onChange={(e) => update("experienceSummary", e.target.value)}
          className={inputClass}
        />
      </Field>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-[length:var(--text-small)] font-semibold text-ink">
          Platform experience with (optional)
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {PLATFORM_OPTIONS.map((platform) => (
            <label key={platform} className="flex items-center gap-2 text-[length:var(--text-small)] text-ink-muted">
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

      <Field label="Tools currently owned" htmlFor={`${formId}-toolsOwned`}>
        <textarea
          id={`${formId}-toolsOwned`}
          name="toolsOwned"
          rows={3}
          value={fields.toolsOwned}
          onChange={(e) => update("toolsOwned", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Travel / coverage-region availability" htmlFor={`${formId}-travelAvailability`} required>
        <input
          id={`${formId}-travelAvailability`}
          name="travelAvailability"
          type="text"
          required
          value={fields.travelAvailability}
          onChange={(e) => update("travelAvailability", e.target.value)}
          className={inputClass}
        />
      </Field>

      <label htmlFor={`${formId}-consent`} className="flex items-start gap-3 text-[length:var(--text-small)] text-ink-muted">
        <input
          id={`${formId}-consent`}
          name="consent"
          type="checkbox"
          required
          checked={fields.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 size-5 shrink-0"
        />
        I consent to be contacted about Installer Network opportunities.
      </label>

      <label htmlFor={`${formId}-noGuarantee`} className="flex items-start gap-3 text-[length:var(--text-small)] text-ink-muted">
        <input
          id={`${formId}-noGuarantee`}
          name="noGuaranteeAcknowledged"
          type="checkbox"
          required
          checked={fields.noGuaranteeAcknowledged}
          onChange={(e) => update("noGuaranteeAcknowledged", e.target.checked)}
          className="mt-1 size-5 shrink-0"
        />
        I understand that joining the Installer Network does not guarantee
        contact, an interview, employment, a contract, an assignment, a
        schedule, work volume, or pay.
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-accent-blue-strong)] px-6 py-3 text-base font-semibold text-white transition-[filter] duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Join the Installer Network"}
      </button>

      <div role="status" aria-live="polite" className="text-[length:var(--text-small)]">
        {status === "error" && errorMessage ? (
          <p className="rounded-md border border-error bg-surface-subtle p-4 text-error">
            {errorMessage}{" "}
            <a href={`tel:${business.telephone.replace(/[^0-9+]/g, "")}`} className="font-semibold underline">
              Call {business.telephone}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}

const inputClass =
  "min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-ink";

function Field({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[length:var(--text-small)] font-semibold text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
