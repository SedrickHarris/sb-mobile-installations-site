/**
 * Static export forbids server routes. Both forms are client components
 * POSTing to an external endpoint configured here. No secrets, validation,
 * file handling, or CRM logic lives in this file or in the browser bundle;
 * that belongs to the trusted backend the endpoint points at.
 *
 * Documented in .env.example.
 */
export const FORMS_ENDPOINT = process.env.NEXT_PUBLIC_FORMS_ENDPOINT ?? "";
