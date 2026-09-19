import { formatAddressLines } from "@/data/site/business";

interface CorporateOfficeProps {
  /** Spacing or layout classes from the caller, for example "mt-6". */
  readonly className?: string;
}

/**
 * The corporate office address, as plain text.
 *
 * The single place the address is rendered in page markup. It reads
 * `business.address` through `formatAddressLines`, so no page or component carries its own copy. Approved
 * surfaces are the footer, contact page, careers pages, and legal pages
 * (01-business-source-of-truth.md sections 5.3 and 33.4).
 *
 * The "Corporate office" label keeps it from being read as a walk-in
 * installation facility. No map, no directions link, no hours, and no
 * local-service wording belong here.
 */
export function CorporateOffice({ className = "" }: CorporateOfficeProps) {
  const [streetLine, cityLine] = formatAddressLines();

  return (
    <address
      className={`text-[length:var(--text-small)] text-ink-muted not-italic ${className}`.trim()}
    >
      <span className="block font-semibold text-ink">Corporate office</span>
      <span className="block">{streetLine}</span>
      <span className="block">{cityLine}</span>
    </address>
  );
}
