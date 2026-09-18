interface PhoneButtonProps {
  readonly href: string;
  readonly label: string;
  /** Analytics location, e.g. "header", "footer". */
  readonly location: string;
  /** Color and layout classes; the base button shape is applied here. */
  readonly className?: string;
}

/**
 * Click-to-call button with a phone icon.
 *
 * Receives the verified phone href and label as props (see utilityBar in
 * site-navigation.ts) rather than embedding the number. The icon is
 * decorative; the visible number is the accessible name.
 */
export function PhoneButton({
  href,
  label,
  location,
  className = "",
}: PhoneButtonProps) {
  return (
    <a
      href={href}
      data-journey="commercial"
      data-event="cta_call_click"
      data-cta-location={location}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 font-semibold no-underline transition-[background-color,filter,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-out-soft)] hover:-translate-y-px hover:shadow-card active:translate-y-0 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      {label}
    </a>
  );
}
