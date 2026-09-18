import type { WhoWeServeCard } from "@/types/content";

/**
 * Card images for the Who We Serve block. Files live in
 * public/images/who-we-serve and are supplied by the client. The images are
 * decorative; the card heading names the category, so no alt text claims
 * anything beyond it. Width and height are the intrinsic size of the source
 * files (4:3); update them if the supplied files differ.
 */
export const whoWeServeImages: Record<
  "fleet" | "commercial" | "construction",
  WhoWeServeCard["image"]
> = {
  fleet: {
    src: "/images/who-we-serve/sb-mobile-installations-fleet-vehicles-mobile-installation.webp",
    width: 2896,
    height: 2172,
  },
  commercial: {
    src: "/images/who-we-serve/sb-mobile-installations-commercial-vehicles-mobile-installation.webp",
    width: 2896,
    height: 2172,
  },
  construction: {
    src: "/images/who-we-serve/sb-mobile-installations-construction-vehicles-mobile-installation.webp",
    width: 2896,
    height: 2172,
  },
};
