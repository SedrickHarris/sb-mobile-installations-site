import { business } from "@/data/site/business";

/**
 * One environment-safe site-URL constant. Every absolute URL built by the
 * metadata factory derives from this rather than a hardcoded domain.
 */
export const SITE_URL = business.url;

export const SITE_NAME = business.name;
