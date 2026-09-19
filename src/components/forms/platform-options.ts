/**
 * Platform-experience checkbox options shared by the Installer Network form
 * and the job application form.
 *
 * Confirmed platform-experience language only, per docs/_claims-inventory.md
 * row 13 and 01-business-source-of-truth.md sections 14 and 33.3. Labeled
 * "experience with", never "certified on", and never a partnership,
 * authorization, or endorsement. This list is for form checkboxes only. It
 * must never be used as a structured-data taxonomy value.
 */
export const PLATFORM_OPTIONS = [
  "Samsara",
  "Geotab",
  "Verizon Connect",
  "Omnitracs",
  "PeopleNet",
  "Trimble",
  "Zonar",
  "LoJack",
  "Lytx/DriveCam",
  "SmartDrive",
  "CalAmp",
] as const;
