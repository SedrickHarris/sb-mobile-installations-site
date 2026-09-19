# CLAUDE.md

Operating instructions for Claude and Claude Code in the SB Mobile Installations
repository. Read this before any implementation work.

## 1. Source of truth

The project documents in `docs/` govern this repository. Installed plugins
(`superpowers`, `ui-ux-pro-max`, `frontend-design`) provide design, workflow, and
engineering recommendations. They are advisory. They never override the project
documents.

When sources conflict, `docs/19-claude-project-instructions.md` section 5 sets the
priority:

1. Written stakeholder approval in the source of truth or decision log
2. `docs/01-business-source-of-truth.md`
3. `docs/00-project-overview.md`
4. The governing topic-specific document
5. Verified first-party business materials
6. Official platform documentation
7. Primary research
8. Secondary sources, with stated limitations
9. Working assumptions, explicitly labeled

**Conflict rule.** Never silently pick one side. State what conflicts, which source
has authority, what stays uncertain, what is safe to draft, and what needs approval.

## 2. Plugin responsibilities

Three plugins are installed. Each has a defined lane.

### `ui-ux-pro-max`

Design-system analysis. Typography and font pairing. Color and contrast review.
Spacing and layout systems. Responsive design patterns. Component usability.
Conversion-focused UX. Accessibility-aware interaction patterns. Design
consistency reviews.

### `frontend-design`

Visual direction. Polished page composition. Hero sections. Navigation. Cards.
Forms. Responsive layouts. Tailwind styling. Visual hierarchy. Screenshot-based
design review.

### `superpowers`

Implementation planning. Task decomposition. Test-driven development. Debugging.
Code review. Regression checks. Git workflow. Safe implementation execution.

## 2.1 Decision priority

Project documentation overrides plugin recommendations. When deciding anything a
plugin has an opinion about, this order governs:

1. Stakeholder approval
2. Business source of truth, `docs/01-business-source-of-truth.md`
3. Project overview and governing strategy documents
4. Page brief
5. Component inventory, `docs/20-component-inventory.md`
6. Design system, `docs/21-design-system.md`
7. Accessibility and performance standards, `docs/23` and `docs/24`
8. Installed plugin recommendations

**Plugins rank last.** When a plugin recommendation conflicts with a project
document, stop and report the conflict. Follow the project document unless the
user explicitly approves a change.

No plugin recommendation may override verified business facts, the approved
conversion priorities (commercial-led homepage, Careers as the primary recruitment
funnel), active-job data rules, installer-network disclosures,
commercial and recruitment separation, accessibility requirements, performance
budgets, schema eligibility, privacy rules, or launch and indexation controls.

Never use a plugin to invent business facts, jobs, locations, services,
compensation, classifications, testimonials, customers, partnerships, or
performance claims. A plugin generates design and code, never facts.

## 2.2 Before using a design skill

State four things first:

1. Which skill is being used
2. What question it is helping answer
3. Which project documents constrain the result
4. What output it will produce

## 3. Never invent

Do not fabricate jobs, locations, services, compensation, worker classifications,
customers, partnerships, testimonials, certifications, statistics, performance
claims, citations, test results, deployment state, or stakeholder approval.

Use precise language for uncertainty: "the current project record confirms",
"this remains unverified", "this is a supported inference, not a confirmed business
fact", "publication is blocked until", "I could not verify". Do not disguise
uncertainty with confident phrasing.

## 3.1 No em dashes in customer-facing content

**Hard rule, project wide.** Em dashes must never appear in customer-facing
content: page copy, headings, CTA labels, metadata, structured data values,
alt text, form labels, error messages, email templates, or job postings.

Use a hyphen instead. Existing em dashes are replaced with a spaced hyphen
rather than reworded, so approved copy keeps its exact words.

This applies to the whole project, not one page. Check any new or supplied
copy before it reaches a content file, including copy that arrives as
approved and locked.

Internal project documents in `docs/` are not customer-facing and are not
covered by this rule.

## 3.2 Public name

The public-facing company name is `SB Mobile Installations`. Use `SB Mobile Installations, LLC`
only where the legal entity is required, such as internal documentation or legally
appropriate employment and contractor disclosures, and identify each such use as legally
required (`docs/01-business-source-of-truth.md` section 4.2).

## 4. Journey separation

Active job applications, installer-network registration, referrals, and commercial
inquiries stay separate in routes, forms, data, analytics events, and confirmation
language.

Active openings now exist (`docs/01-business-source-of-truth.md` section 33). The homepage
remains commercial-led, and the Careers pages are the primary recruitment funnel.

- "Apply" belongs only to a genuine active opening and its own application path. The
  application landing page and form have not been created yet, so no "Apply" control may go
  live until they exist and work.
- "Join the Installer Network" is a registration pathway for future opportunities, offered
  alongside the active openings. It is not an application. It guarantees no contact, interview,
  employment, contract, assignment, schedule, volume, or pay.
- Referral inquiries are a fourth, separate pathway.
- Never route a candidate for an active opening into a commercial or network form, and never
  count a network registration as an application.

### Prohibited recruiting language

Guaranteed work, hours, or income. Employee benefits for contractors. Contractor
status for employees. Nationwide openings when only one market is active. Paid
training or immediate start when unverified. Unlimited earning potential. Automatic
acceptance. Any final employment decision made by an automated form.

Approved for the current openings (`docs/01` section 33): nationwide applications, starting
compensation of `$1,600 per week` presented only as a starting rate, and training being
provided. Present none of them as a guarantee.

## 5. Active jobs and schema

Generate a `JobPosting` object only when the job is active, publicly accessible,
genuine and current, with visible title and description, a valid location or work
model, a working application path, valid dates, required fields present, and the
page neither noindexed nor blocked.

Never generate `JobPosting` for draft, paused, closed, archived, evergreen, or
network records, or for the general `/careers/` page merely because active openings
exist. Each active opening needs its own stable job record and canonical URL, and
`JobPosting` belongs only on that opening's page. Populate a property only when the value
is verified, not merely because the vocabulary allows it.

Never turn a recruiting market into a physical office. The corporate office address (8907 N
175th Ave, Waddell, AZ 85355) is approved for the footer, contact page, careers pages, legal
pages, `Organization` schema, and eligible `JobPosting` schema (`docs/01` sections 5.3 and 33).
Never describe it as a walk-in installation facility or a guarantee of local service
availability. Do not publish any other street address or exact site location without approval.

## 6. Accessibility and performance

Public pages target **WCAG 2.2 Level AA**. Semantic HTML, keyboard operability, and
visible focus are requirements, not enhancements. Color alone never carries meaning.

Budgets from `docs/24-performance-budget.md`:

| Metric | Target | Action threshold |
| --- | --- | --- |
| Largest Contentful Paint | 2.5s or less | over 4.0s |
| Interaction to Next Paint | 200ms or less | over 500ms |
| Cumulative Layout Shift | 0.10 or less | over 0.25 |
| First Contentful Paint | 1.8s or less | over 3.0s |
| First-party JavaScript | 150 KB compressed | 200 KB hard ceiling |

Hydrate only approved interactive islands. Prefer server components.

## 7. Privacy

Never place applicant resumes, candidate names or contact details, application
answers, protected-class data, customer contacts, credentials, webhook secrets,
user-level analytics exports, or private logs into this repository, commit
messages, issues, or prompts.

If sensitive data appears, stop using it, do not summarize it, redact the source,
notify the owner, and rotate any exposed credential.

## 8. Components and data

Components receive verified, typed data. Never embed phone numbers, addresses, job
terms, service areas, or entity claims directly in reusable UI files. A component
must not report a submission or business outcome before the trusted backend
confirms it. A component must not turn an unknown or draft fact into confident
public language.

Build only what an approved page brief requires. Do not create files for future
inventory items.

## 9. Technical constraints

Next.js App Router, TypeScript strict mode, Tailwind CSS, static export, Cloudflare
Pages. No server-only runtime features in the static output. Secrets, validation,
file handling, and ATS or CRM writes belong in a trusted backend endpoint, never in
the browser bundle.

Design tokens come from `docs/21-design-system.md` section 4. Use CSS variables or
Tailwind theme values, never scattered hex literals.

## 10. Git

`main` is the default working branch and the production branch. Solo development is
done directly on `main`. When a task authorizes committing, commit directly to `main`.
Feature branches and pull requests are optional for solo work. Use a branch or pull
request only when collaboration, code review, or a GitHub protection rule requires one.
The full workflow is in `docs/18-github-workflow.md` section 8.

Commit format is `type(scope): imperative summary` using the allowed types in
`docs/18-github-workflow.md` section 13.

**State Git authorization explicitly in every task.** Direct commits to `main` are the
approved workflow, but they are not authorized for every task. Claude Code commits,
pushes, or opens pull requests only when the task says so. Authorization to commit does
not authorize pushing.

Run the validation in section 11 before committing to `main`. Do not describe branch
protection, GitHub Actions, required status checks, or Cloudflare deployment as active
unless they have been verified.

Note: the current GitHub credential lacks the `workflow` scope. Adding files under
`.github/workflows/` requires `gh auth refresh -s workflow` first.

## 11. Before claiming done

Run typecheck, lint, tests, content and job and schema and link validation, and a
production build. Report actual output. Never claim a check passed without running
it. Report changed files, decisions, validation results, and remaining blockers.
