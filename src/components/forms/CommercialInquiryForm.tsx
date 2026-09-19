"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";

import { business } from "@/data/site/business";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { buildAttribution } from "@/lib/forms/attribution";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";

const THANK_YOU_ROUTE = "/thank-you/service-request/";

/**
 * Visible copy a page may override. Field names, ids, required rules,
 * autocomplete, validation, payload, endpoint, and analytics are not affected.
 * Defaults keep the wording every other page already uses.
 */
export interface CommercialInquiryFormCopy {
  readonly serviceNeed: string;
  readonly projectLocations: string;
  readonly timeline: string;
  readonly description: string;
  readonly descriptionPlaceholder?: string;
  readonly consent: string;
  readonly submit: string;
}

const defaultCopy: CommercialInquiryFormCopy = {
  serviceNeed: "Equipment or service need",
  projectLocations: "Project location(s)",
  timeline: "Preferred timeline",
  description: "Project description",
  consent: "I consent to be contacted about this project.",
  submit: "Request Installation Service",
};

/**
 * Commercial inquiry form.
 *
 * Fields: name, email, phone, company, equipment/service need (sourced from
 * business.serviceTypes, not a hardcoded list), vehicle/asset count, project
 * location(s), preferred timeline, project description, consent.
 *
 * Layout: one column on mobile, two columns from the md breakpoint. Related
 * fields share a row (name and email, phone and company, equipment and vehicle
 * count, locations and timeline). The description, consent, and submit rows
 * span both columns. Only the layout is grid; the DOM order, so keyboard and
 * screen-reader order, is the same as a single column.
 *
 * Never rendered on the same page/section as InstallerNetworkForm, and never
 * shares a submission handler with it. See CLAUDE.md section 4 and plan
 * section 5.
 */
export function CommercialInquiryForm({
  copy,
}: {
  readonly copy?: Partial<CommercialInquiryFormCopy>;
} = {}) {
  const text = { ...defaultCopy, ...copy };
  const formId = useId();
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceNeed: "",
    vehicleCount: "",
    projectLocations: "",
    timeline: "",
    description: "",
    consent: false,
    // Honeypot. Left blank by a human; a filled value is treated as spam.
    website: "",
  });

  const { status, errorMessage, submit } = useFormSubmission({
    thankYouRoute: THANK_YOU_ROUTE,
  });

  function update<K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (fields.website) {
      // Honeypot tripped. Silently drop without giving a bot feedback.
      return;
    }

    const attribution = buildAttribution("commercial_inquiry");
    await submit({
      ...attribution,
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      company: fields.company,
      serviceNeed: fields.serviceNeed,
      vehicleCount: fields.vehicleCount,
      projectLocations: fields.projectLocations,
      timeline: fields.timeline,
      description: fields.description,
      consent: fields.consent,
    });
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      data-journey="commercial"
      data-event={AnalyticsEvent.commercialFormSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Honeypot field, visually and semantically hidden from real users. */}
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

      <div className="grid gap-x-4 gap-y-5 md:grid-cols-2">
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

        <Field label="Company" htmlFor={`${formId}-company`} required>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={fields.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={text.serviceNeed} htmlFor={`${formId}-serviceNeed`} required>
          <select
            id={`${formId}-serviceNeed`}
            name="serviceNeed"
            required
            value={fields.serviceNeed}
            onChange={(e) => update("serviceNeed", e.target.value)}
            className={inputClass}
          >
            <option value="">Select one</option>
            {business.serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Number of vehicles or assets" htmlFor={`${formId}-vehicleCount`}>
          <input
            id={`${formId}-vehicleCount`}
            name="vehicleCount"
            type="text"
            value={fields.vehicleCount}
            onChange={(e) => update("vehicleCount", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={text.projectLocations} htmlFor={`${formId}-projectLocations`} required>
          <input
            id={`${formId}-projectLocations`}
            name="projectLocations"
            type="text"
            required
            value={fields.projectLocations}
            onChange={(e) => update("projectLocations", e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={text.timeline} htmlFor={`${formId}-timeline`}>
          <input
            id={`${formId}-timeline`}
            name="timeline"
            type="text"
            value={fields.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputClass}
          />
        </Field>

        <div className="md:col-span-2">
          <Field label={text.description} htmlFor={`${formId}-description`}>
            <textarea
              id={`${formId}-description`}
              name="description"
              rows={4}
              placeholder={text.descriptionPlaceholder}
              value={fields.description}
              onChange={(e) => update("description", e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="md:col-span-2">
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
            {text.consent}
          </label>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[var(--color-accent-blue-strong)] px-6 py-3 text-base font-semibold text-white transition-[filter] duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : text.submit}
          </button>
        </div>
      </div>

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
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-[length:var(--text-small)] font-semibold text-ink">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
