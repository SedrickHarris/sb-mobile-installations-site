/**
 * Recruitment route paths, in one place. Journeys stay separate in routes:
 * the active opening and its application flow, the Installer Network
 * registration, and commercial inquiries never share a route or a form.
 */
export const CAREERS_PATH = "/careers/";
export const JOBS_INDEX_PATH = "/careers/jobs/";
export const APPLY_PATH = "/careers/apply/";
export const APPLICATION_RECEIVED_PATH = "/careers/application-received/";

/**
 * The Installer Network registration page. It keeps its original route because
 * the homepage and other pages already link here. It is a registration for
 * future opportunities, not an application.
 */
export const INSTALLER_NETWORK_PATH = "/careers/mobile-installation-technician/";
