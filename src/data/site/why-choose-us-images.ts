import type { ServiceImage } from "@/data/site/service-images";

const SIZE = { width: 2896, height: 2172 } as const;

/**
 * Card image for each "Why Fleet Managers Choose" benefit, keyed by the item
 * title in homepage-content.ts. An item with no entry renders without an
 * image. Source files are 2896x2172 webp in public/images/why-choose-us. The
 * images are decorative; the card heading and body carry the claim.
 */
export const whyChooseUsImages: Readonly<Record<string, ServiceImage>> = {
  "Built around on-site fleet work": {
    src: "/images/why-choose-us/sb-mobile-installations-photo-documentation-completed-fleet-installation.webp",
    ...SIZE,
  },
  "Nationwide mobile service": {
    src: "/images/why-choose-us/sb-mobile-installations-nationwide-fleet-installation-technician-commercial-yard.webp",
    ...SIZE,
  },
  "Established fleet-electronics experience": {
    src: "/images/why-choose-us/sb-mobile-installations-experienced-fleet-technician-commercial-truck-installation.webp",
    ...SIZE,
  },
  "Direct project coordination": {
    src: "/images/why-choose-us/sb-mobile-installations-independent-contractor-field-equipment-commercial-vehicle.webp",
    ...SIZE,
  },
};
