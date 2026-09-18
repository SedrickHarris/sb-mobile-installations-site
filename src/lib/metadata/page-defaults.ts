/**
 * Site-wide metadata defaults, referenced by the metadata factory so every
 * route stays consistent without repeating the same values.
 */
export const DEFAULT_OG_TYPE = "website" as const;

/** No image is approved for Open Graph/Twitter cards in Sprint 1. */
export const DEFAULT_OG_IMAGE: string | undefined = undefined;
