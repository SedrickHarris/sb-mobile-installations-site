import type { WhoWeServeCard } from "@/types/content";

/**
 * Card images for the Who We Serve block. Files live in
 * public/images/why-choose-us and are supplied by the client. Each image is
 * meaningful, so it carries alt text that describes only what the photo shows
 * (checked against the files 2026-09-18): no service, location, or outcome
 * claim. Width and height are the intrinsic size of the source files (16:9);
 * the cards crop them to 4:3 with object-cover.
 */
export const whoWeServeImages: Record<
  "fleet" | "commercial" | "construction",
  WhoWeServeCard["image"]
> = {
  fleet: {
    src: "/images/why-choose-us/sb-mobile-installations-coordinated-commercial-fleet-yard-service-vehicles.webp",
    alt: "Commercial fleet vans and service vehicles in an organized fleet yard.",
    width: 3318,
    height: 1896,
  },
  commercial: {
    src: "/images/why-choose-us/sb-mobile-installations-varied-commercial-vehicles-service-facility.webp",
    alt: "Delivery vans, utility trucks, and commercial vehicles at a service facility.",
    width: 3318,
    height: 1896,
  },
  construction: {
    src: "/images/why-choose-us/sb-mobile-installations-construction-vocational-fleet-vehicles-jobsite.webp",
    alt: "Construction equipment and vocational vehicles staged at a construction site.",
    width: 3318,
    height: 1896,
  },
};
