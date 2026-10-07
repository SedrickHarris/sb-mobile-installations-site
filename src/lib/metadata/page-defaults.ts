/**
 * Site-wide metadata defaults, referenced by the metadata factory so every
 * route stays consistent without repeating the same values.
 */
export const DEFAULT_OG_TYPE = "website" as const;

/**
 * Default social share image: the brand kit's 1254x1254 fleet tracking
 * graphic. It is square, so Twitter/X uses the "summary" card for it rather
 * than "summary_large_image", which would crop it.
 */
export const DEFAULT_OG_IMAGE: string | undefined =
  "/images/brand/logos/ultimate-fleet-gps-fleet-tracking-social-media-graphic.webp";

export const DEFAULT_OG_IMAGE_SIZE = { width: 1254, height: 1254 } as const;
export const DEFAULT_OG_IMAGE_ALT =
  "Ultimate Fleet GPS logo above a commercial van and box truck with GPS location pins";
