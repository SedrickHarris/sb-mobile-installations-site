# Decision 0009: Installer Network page as a technician-interest landing page

**Date:** September 24, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the page)
**Affects:** `/careers/mobile-installation-technician/`, `docs/_claims-inventory.md` rows 47 and 54, decision 0006

## Context

The route already existed as the live Installer Network registration page.
The stakeholder asked for it to read unmistakably as an interest page for
experienced mobile fleet-installation technicians, not a job listing.

## Decisions

1. **Route and journey unchanged.** The route, `InstallerNetworkForm`,
   `data-journey="recruitment"`, and `cta_installer_network_click` are kept. The
   page stays separate from the active opening and `/careers/apply/`.
2. **H1, title, and description approved.** H1 `Mobile Installation Technician`.
   Title `Mobile Installation Technician | Installer Network` (the layout adds
   the brand suffix). Description states that experienced mobile
   fleet-installation technicians can express interest in the Installer
   Network, with no active-role wording.
3. **CTA labels approved.** Hero CTA `Share Your Interest`. Form submit
   `Submit Your Interest`. Expectation text under the button: "This form is for
   Installer Network interest. It does not indicate a current opening or
   guarantee future work."
4. **ELD boundary sentence omitted.** "ELD installation context refers to
   physical installation and does not represent compliance or legal advice" is
   not in docs/01 or the claims inventory and is not published.
5. **No new form fields.** The form fields are unchanged.
6. **Approved facts kept.** The independent contractor statement, the
   no-guarantee disclosures, the stakeholder-supplied requirements (decision
   0004), and the vehicle-example clarification (decision 0007) stay on the
   page. The coverage page still reads the answer disclosure sentences from
   `careersHubPageContent.answer.body` (indexes 1 and 2).
7. **Links.** The current opening is linked from a low-emphasis text link after
   the form and FAQ, without "Apply" wording. The commercial quote path is a
   plain text link after the form. The commercial form never renders here.
8. **Schema.** `WebPage` + `BreadcrumbList` only. No `JobPosting`, `FAQPage`,
   `Person`, `Occupation`, `Offer`, or `LocalBusiness`.
9. **Media.** The hero uses the decorative fallback until approved photography
   exists. No image, preload, or label reaches the production build.
10. **Commercial inquiry section (requested 2026-09-24, needs written stakeholder
    confirmation).** The page ends with a business installation inquiry section
    that renders `CommercialInquiryForm`, followed by the current-opening
    pointer, the shared `InstallerQuestions` block, and the six homepage service
    cards. This departs from docs/20 (line 2716), the `CommercialInquiryForm`
    source comment, and CLAUDE.md section 4, which keep the two forms off the
    same page. The two forms stay separate components with separate submission
    handlers, thank-you routes, and journey attributes, and sit in different
    sections. Until confirmed in writing, treat this as an open exception.
