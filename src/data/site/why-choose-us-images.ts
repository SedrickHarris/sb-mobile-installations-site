import type { ServiceImage } from "@/data/site/service-images";

const SIZE = { width: 2896, height: 2172 } as const;

/**
 * Card image for each "Why Fleet Managers Choose" item, keyed by the item
 * title in homepage-content.ts. An item with no entry renders without an
 * image. Source files are 2896x2172 webp in public/images/why-choose-us. The
 * images are decorative; the card heading and body carry the claim.
 */
export const whyChooseUsImages: Readonly<Record<string, ServiceImage>> = {
  "Photo Documentation on Every Install": {
    src: "/images/why-choose-us/sb-mobile-installations-photo-documentation-completed-fleet-installation.webp",
    ...SIZE,
  },
  "Nationwide Reach": {
    src: "/images/why-choose-us/sb-mobile-installations-nationwide-fleet-installation-technician-commercial-yard.webp",
    ...SIZE,
  },
  "In Business Since 2011": {
    src: "/images/why-choose-us/sb-mobile-installations-experienced-fleet-technician-commercial-truck-installation.webp",
    ...SIZE,
  },
  "A Contractor Network Built for the Work": {
    src: "/images/why-choose-us/sb-mobile-installations-independent-contractor-field-equipment-commercial-vehicle.webp",
    ...SIZE,
  },
};
