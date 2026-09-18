import type { WhoWeServeCard } from "@/types/content";

/**
 * Card images for the Who We Serve block. Files live in
 * public/images/why-choose-us and are supplied by the client. The images are
 * decorative; the card heading names the category, so no alt text claims
 * anything beyond it. Width and height are the intrinsic size of the source
 * files (16:9); the cards crop them to 4:3 with object-cover.
 */
export const whoWeServeImages: Record<
  "fleet" | "commercial" | "construction",
  WhoWeServeCard["image"]
> = {
  fleet: {
    src: "/images/why-choose-us/sb-mobile-installations-coordinated-commercial-fleet-yard-service-vehicles.webp",
    width: 3318,
    height: 1896,
  },
  commercial: {
    src: "/images/why-choose-us/sb-mobile-installations-varied-commercial-vehicles-service-facility.webp",
    width: 3318,
    height: 1896,
  },
  construction: {
    src: "/images/why-choose-us/sb-mobile-installations-construction-vocational-fleet-vehicles-jobsite.webp",
    width: 3318,
    height: 1896,
  },
};
