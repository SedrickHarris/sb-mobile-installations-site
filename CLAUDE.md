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

## 2. Plugin boundaries

| Plugin | Use for | Never for |
| --- | --- | --- |
| `ui-ux-pro-max` | Design-system analysis, palette and typography review | Replacing the tokens in `docs/21-design-system.md` |
| `frontend-design` | Visual implementation of approved design decisions | Choosing an aesthetic direction the design system did not approve |
| `superpowers` | Planning, testing, debugging, review, Git workflow | Overriding `docs/18-github-workflow.md` |

No plugin recommendation may override verified business facts, recruitment-first
conversion priorities, active-job data rules, installer-network disclosures,
commercial and recruitment separation, accessibility requirements, performance
budgets, schema eligibility, privacy rules, or launch and indexation controls.

## 3. Never invent

Do not fabricate jobs, locations, services, compensation, worker classifications,
customers, partnerships, testimonials, certifications, statistics, performance
claims, citations, test results, deployment state, or stakeholder approval.

Use precise language for uncertainty: "the current project record confirms",
"this remains unverified", "this is a supported inference, not a confirmed business
fact", "publication is blocked until", "I could not verify". Do not disguise
uncertainty with confident phrasing.

## 4. Journey separation

Active job applications, installer-network registration, referrals, and commercial
inquiries stay separate in routes, forms, data, analytics events, and confirmation
language.

- "Apply" belongs only to a genuine active opening.
- "Join the Installer Network" is a future-opportunity pathway. It guarantees no
  contact, interview, employment, contract, assignment, schedule, volume, or pay.
- Never route a candidate for an active opening into a commercial or network form.

### Prohibited recruiting language

Guaranteed work, hours, or income. Employee benefits for contractors. Contractor
status for employees. Nationwide openings when only one market is active. Paid
training or immediate start when unverified. Unlimited earning potential. Automatic
acceptance. Any final employment decision made by an automated form.

## 5. Active jobs and schema

Generate a `JobPosting` object only when the job is active, publicly accessible,
genuine and current, with visible title and description, a valid location or work
model, a working application path, valid dates, required fields present, and the
page neither noindexed nor blocked.

Never generate `JobPosting` for draft, paused, closed, archived, evergreen, or
network records. Populate a property only when the value is verified, not merely
because the vocabulary allows it.

Never turn a recruiting market into a physical office. Never publish a street
address or exact site location without approval.

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

`main` is the default and production branch. Work on feature branches, merge by
pull request. Commit format is `type(scope): imperative summary` using the allowed
types in `docs/18-github-workflow.md` section 13.

**State Git authorization explicitly in every task.** Claude Code commits, pushes,
or opens pull requests only when the task says so.

Note: the current GitHub credential lacks the `workflow` scope. Adding files under
`.github/workflows/` requires `gh auth refresh -s workflow` first.

## 11. Before claiming done

Run typecheck, lint, tests, content and job and schema and link validation, and a
production build. Report actual output. Never claim a check passed without running
it. Report changed files, decisions, validation results, and remaining blockers.
