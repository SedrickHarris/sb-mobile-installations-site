# Homepage verification record

**Page:** `/`
**Build date:** September 10, 2026
**Status:** Verified with one outstanding item

---

## 1. Verified

| Check | Method | Result |
| --- | --- | --- |
| Typecheck | `tsc --noEmit`, strict mode | Pass |
| Lint | `eslint .` | Pass, no warnings |
| Production build | `next build`, static export | Pass |
| First-load JavaScript | Gzipped sum of scripts the page requests | 142.6 KB, under the 150 KB target |
| Locked copy | Every approved string matched against rendered HTML | 12 of 12 verbatim |
| FAQ schema alignment | Schema answers compared to visible DOM text | 6 of 6 identical |
| Section order | DOM position of each section marker | All seven in locked order |
| Schema types | Parsed from the rendered JSON-LD graph | Organization, Service, WebPage, FAQPage |
| Excluded schema | Searched rendered output | No LocalBusiness, AggregateRating, or Review |
| Text contrast | Computed for every text and background pairing | 17 pairings, 0 failures |
| Non-text contrast | WCAG 1.4.11, component boundaries | Pass after the secondary border fix |
| Em dashes | Swept rendered HTML and structured data | Zero |

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

## 3. Known blockers

- `/careers/` and `/services/` have no pages. Both CTA destinations 404 in the
  static export. The homepage cannot deploy until those routes exist.
- The production domain is unconfirmed. Canonical URLs and structured data read
  from `NEXT_PUBLIC_SITE_URL`.
- No header, footer, or navigation exists yet.

## 4. Open conflict carried forward

Section 17 of `19-claude-project-instructions.md` reserves "Apply" for an
actual active job and requires "Join the Installer Network" for future
opportunity. The homepage uses "Apply as a Mobile Installation Technician" as
approved copy, and section 7.2 of `21-design-system.md` was corrected to match.

The instructions document was not changed. This must be resolved explicitly for
the careers pages rather than inherited. The likely resolution is that "Apply"
is correct once confirmed active openings exist, while a listings page may want
a different label.
