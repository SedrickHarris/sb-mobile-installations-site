/**
 * Media for the homepage Installer Network recruitment section. Decorative.
 * Files live in public/images/why-choose-us. The still frame shows while the
 * video loads and for users who prefer reduced motion. Equipment-focused,
 * no people, no readable text, per docs/22-image-strategy.md section 3.3.
 * Set to null to fall back to a dark gradient panel with no media request.
 */
export const recruitingSectionMedia: {
  readonly video: string;
  readonly poster: string;
} | null = {
  video:
    "/images/why-choose-us/sb-mobile-installations-technician-career-opportunity.mp4",
  poster:
    "/images/why-choose-us/sb-mobile-installations-technician-career-opportunity.webp",
};
