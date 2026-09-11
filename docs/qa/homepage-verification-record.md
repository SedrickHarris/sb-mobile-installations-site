# Homepage verification record

**Page:** `/`
**Build date:** September 10, 2026
**Status:** Verified with one outstanding item
**Last content pass:** Expanded service scope, construction vehicles, new About
section, then stakeholder confirmation of the two claims it raised, then the
brand color change from blue to red. Source of truth version 0.9, design system
version 0.3.

---

## 1. Verified

| Check | Method | Result |
| --- | --- | --- |
| Typecheck | `tsc --noEmit`, strict mode | Pass |
| Lint | `eslint .` | Pass, no warnings |
| Production build | `next build`, static export | Pass |
| First-load JavaScript | Gzipped sum of scripts the page requests | 143.8 KB, under the 150 KB target |
| Locked copy | Every approved string matched against rendered HTML | 9 of 9 verbatim, including the five strings changed in this pass |
| FAQ schema alignment | Schema answers compared to visible DOM text | 6 of 6 identical |
| Section order | DOM position of each section marker | All eight in locked order |
| Schema types | Parsed from the rendered JSON-LD graph | Organization, Service, WebPage, FAQPage |
| Excluded schema | Searched rendered output | No LocalBusiness, AggregateRating, Review, or JobPosting |
| Service taxonomy | Read `serviceType` from the rendered graph | Six confirmed equipment categories, no platform names |
| Section visual weight | Compared rendered padding, measure, and type scale | About, recruiting, and commercial identical; trust still compact |
| Text contrast | Computed for every text and background pairing, old palette against new | 33 pairings, 0 failures. 20 improved, 2 fell by under 0.2, 11 unchanged |
| Non-text contrast | WCAG 1.4.11, component boundaries | Pass. The secondary CTA boundary uses `color-brand`, now 7.14:1 on surface and 6.65:1 on subtle, up from 4.72 and 4.39 |
| Semantic color separation | dE2000 between every semantic token and the brand | Error 22.1 from brand and 20.3 from brand-dark. No pairing under 20 |
| Web fonts | Counted font files in the static export | Zero. Body face is the system stack |
| Icons | Checked the rendered head and the exported files | favicon.ico plus three PNGs, 33.1 KB total, none on the critical path |
| Em dashes | Swept every HTML and text file in the static export | Zero |

## 2. Not verified

### Viewport reflow not independently verified

**Observed reflow at 375px, 768px, and 1440px has not been confirmed. Neither
has rendering at 200% zoom.**

The browser automation tool reported a successful window resize three times,
including once with a fresh window and tab group, while the page continued to
report a 1920px viewport. The window's `outerWidth` and `outerHeight` both
read zero, which suggests the tab is not attached to a resizable window in
this environment.

What was confirmed instead, from the built stylesheet rather than from
observation:

- The CTA pair is `flex-direction: column` with `width: 100%` at base, and
  switches to row with auto width inside `@media (min-width: 40rem)`. Buttons
  therefore stack full width below 640px.
- The two-column capability for the recruiting and commercial sections sits
  inside `@media (min-width: 48rem)`, and the text column precedes the media
  column in the DOM, so reading order survives the collapse.
- Section padding shifts at the same 48rem boundary.
- No element in the rendered page exceeds the viewport width, and the document
  reports no horizontal overflow.

This confirms the breakpoint rules are correct. It does not confirm the page
reflows correctly, and the two are not equivalent. A layout can satisfy its
media queries and still break visually.

**Required before launch:** open the page at 375px, 768px, and 1440px, and at
200% zoom, and confirm reading order, CTA stacking, tap targets, and the
absence of horizontal scrolling. See `23-accessibility-standards.md` and
section 17 of `21-design-system.md`.

### Validation scripts do not exist

`scripts/validation`, `scripts/schema`, `scripts/jobs`, and `scripts/seo` are all
empty. Section 11 of `CLAUDE.md` requires content, job, schema, and link
validation before claiming done, and no runnable command exists for any of them.

The checks in section 1 were performed ad hoc against the static export in
`out/` rather than by a committed script. They are reproducible but not
automated, and nothing prevents a future pass from skipping them. Building these
scripts is a separate task.

### Favicon legibility at 16px

The monogram is 2.54:1 with no clear space, so squaring it leaves the glyph at
about a third of the tile height. At 16px it renders roughly 13x5px and is not
legible. It resolves from 32px up.

No color, crop, or clear-space choice fixes this. A legible 16px icon needs a
square-format mark that the current asset set does not contain. See section 4.3
of `21-design-system.md`.

### En dashes in the footer hours

The footer renders "Monday-Friday, 8:00 AM-6:00 PM" using en dashes, six
occurrences per page. Section 3.1 of `CLAUDE.md` prohibits em dashes and says
nothing about en dashes, so this is not a rule violation and the footer copy was
left unchanged. Recorded because the em dash sweep now reports both characters
and the en dash count is not zero.

---

## 3. Known blockers

- `/careers/` and `/services/` have no pages. Both CTA destinations 404 in the
  static export, reconfirmed by a link sweep on this build. The homepage cannot
  deploy until those routes exist. All other internal links resolve.
- The production domain is unconfirmed. Canonical URLs and structured data read
  from `NEXT_PUBLIC_SITE_URL`.

The two About-section claims flagged during the content pass are resolved. Both
were confirmed by the stakeholder on September 10, 2026 and recorded in sections
11.1 and 17.1 of `01-business-source-of-truth.md`. The photo documentation claim
was confirmed twice: first as a deliverable customers receive or can request,
then, after a follow-up, as documentation sent to every customer automatically
without being requested. The copy states the delivery promise the second
confirmation supports.

The earlier blocker "no header, footer, or navigation exists yet" is obsolete.
All three were added before this pass.

## 4. Open conflict carried forward

Section 17 of `19-claude-project-instructions.md` reserves "Apply" for an
actual active job and requires "Join the Installer Network" for future
opportunity. The homepage uses "Apply as a Mobile Installation Technician" as
approved copy, and section 7.2 of `21-design-system.md` was corrected to match.

The instructions document was not changed. This must be resolved explicitly for
the careers pages rather than inherited. The likely resolution is that "Apply"
is correct once confirmed active openings exist, while a listings page may want
a different label.
