interface JsonLdProps {
  /** A schema.org graph object. Serialized as-is. */
  readonly schema: object;
}

/**
 * Renders a JSON-LD script tag.
 *
 * The angle brackets are escaped so a value can never close the script
 * element early.
 */
export function JsonLd({ schema }: JsonLdProps) {
  const json = JSON.stringify(schema).replace(/</g, "\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
