import type { business } from "@/data/site/business";

export interface ServiceImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

type ServiceType = (typeof business.serviceTypes)[number];

/**
 * Card image for each confirmed equipment category.
 *
 * Keyed by `business.serviceTypes`, so adding a category there fails the
 * type check until it has an image here. Source files are 2896x2172 webp in
 * public/images/services. The images are decorative; the card heading names
 * the category, so no alt text claims anything beyond it.
 */
export const serviceImages: Record<ServiceType, ServiceImage> = {
  "GPS tracking installation": {
    src: "/images/services/sb-mobile-installations-gps-tracking-installation-commercial-vehicle.webp",
    width: 2896,
    height: 2172,
  },
  "ELD installation": {
    src: "/images/services/sb-mobile-installations-eld-installation-commercial-truck-cab.webp",
    width: 2896,
    height: 2172,
  },
  "AOBRD installation": {
    src: "/images/services/sb-mobile-installations-aobrd-installation-legacy-truck-equipment.webp",
    width: 2896,
    height: 2172,
  },
  "TPMS installation": {
    src: "/images/services/sb-mobile-installations-tpms-installation-commercial-vehicle-wheel-sensor.webp",
    width: 2896,
    height: 2172,
  },
  "Fleet dashcam installation": {
    src: "/images/services/sb-mobile-installations-fleet-dashcam-installation-commercial-truck.webp",
    width: 2896,
    height: 2172,
  },
  "Fleet management equipment installation": {
    src: "/images/services/sb-mobile-installations-fleet-management-equipment-installation-commercial-vehicle.webp",
    width: 2896,
    height: 2172,
  },
};
