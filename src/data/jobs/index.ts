import { activeTechnicianJob } from "@/data/jobs/mobile-gps-eld-aobrd-installation-technician";
import type { JobRecord } from "@/types/jobs";

/** Every active opening. The sitemap, index, and landing page read this list. */
export const activeJobs: readonly JobRecord[] = [activeTechnicianJob];

export { activeTechnicianJob };
export * from "@/data/jobs/routes";
export { applyCta } from "@/data/jobs/ctas";
