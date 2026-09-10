# Service Data Layer — Claude Code Build Prompt

**File:** prompts/service-data-layer-build-prompt.md
**Version:** v1.0
**Status:** Active
**Mode:** Core Mode and Beyond-Elite Mode
**Position:** Run after Prompt 05 Developer Build Brief and before or alongside Prompt 06 Claude Code Build
**Scope:** New service pages and refactors of existing hardcoded service pages
**Does Not Replace:** Prompt 06 Claude Code Build, Prompt 07 QA Review

---

## Purpose

This prompt scaffolds the service data layer pattern into a client repo. It separates all
service page content — stats, FAQs, answer blocks, refresh dates — from JSX presentation
components. Prompt 06 then builds the page against the data layer instead of hardcoding
content into components.

The result: updating a stat, adding a FAQ, or refreshing a page means editing one TypeScript
data file. No JSX changes required. Schema auto-generates from the data. The 90-day refresh
discipline is structurally enforced rather than aspirational.

---

## When to Use This Prompt

Use this prompt when:

- Building a new service page and no data layer exists in the client repo yet
- Refactoring an existing service page that has hardcoded content in JSX
- Adding a second or third service page to a repo that already has the layer (data file
  only — types and components already exist, skip to Step 3)

Skip this prompt when:

- The page is a blog post, location page, category page, or any non-service page type
- A service data layer is already scaffolded and only the data file needs updating

---

## No-Fake-Data Rule

This prompt inherits `docs/no-fake-data-policy.md` in full.

Do not invent:
- Job counts, completion rates, or volume claims
- Pricing ranges not confirmed by the owner
- Response time or availability claims not confirmed by the owner
- Reviews, ratings, or testimonials
- Credentials, licenses, or awards

Stats with no confirmed value use `value: 0` and a `placeholder` string that is clearly
labeled as unconfirmed. Placeholder strings must not appear to be real data.

FAQ answers must come from one of these sources:
- `job-log` — entry in `data/job-log.json`
- `firsthand` — owner-confirmed experience
- `business-data` — confirmed operational fact (pricing, warranty, hours, service area)
- `customer-question` — real question asked by a real customer

Do not write FAQ answers that are not traceable to one of these four sources.

---

## Gate 1: Inspect

Before planning anything, Claude Code must read:

1. `package.json` — confirm stack (Next.js version, TypeScript, Tailwind)
2. `tsconfig.json` — confirm path aliases (`@/` mapping)
3. Existing component files under `components/` — identify any existing ServicePage,
   FAQBlock, or StatBar components to avoid duplication
4. Existing data files under `data/` — confirm whether the type definitions and
   components already exist from a prior service page build
5. The Prompt 05 Developer Build Brief for this page — confirm the service slug, confirmed
   stats, confirmed FAQs, confirmed answer block, and confirmed schema types

Gate 1 blockers — stop and report if any of these are true:

- No TypeScript configured — flag before proceeding; the layer uses `.ts` not `.js`
- Path alias `@/` is not configured — report and adjust import paths accordingly
- A `ServiceData` type already exists in `types/service.ts` with a different shape —
  do not overwrite; surface the conflict for operator decision

---

## Gate 2: Build Plan

Report before writing any files:

- Files to create (with full paths)
- Files to modify (with full paths and reason)
- Files to leave untouched
- Whether types and shared components already exist (skip Step 1 and Step 2 if yes)
- Which FAQ answers have confirmed sources and which need TODO flags
- Which stats have real values and which will use placeholders
- Whether the answer block is confirmed or needs a TODO flag
- Schema types that will be generated from the data file

Wait for operator approval before writing any files if this prompt is running in Gate 2
approval mode. Proceed directly to Gate 3 if standing approval is active for this step.

---

## Gate 3: Build

Build in this order. Do not skip steps. Do not combine steps into a single file write.

### Step 1: Type Definitions

**File:** `types/service.ts`

Skip this step if `types/service.ts` already exists with a compatible `ServiceData` type.

```typescript
export interface StatItem {
  id: string;
  label: string;
  value: number;
  unit: string;
  period: string;
  placeholder: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
  source: 'job-log' | 'firsthand' | 'business-data' | 'customer-question';
}

export interface ServiceData {
  slug: string;
  title: string;
  answerBlock: string;
  lastRefreshed: string;    // ISO date string — YYYY-MM-DD
  nextRefreshDue: string;   // ISO date string — 90 days after lastRefreshed
  stats: StatItem[];
  faqs: FAQItem[];
}
```

**Rules:**
- Do not add fields that are not in the interface above unless the Prompt 05 brief
  explicitly requires them
- Do not export types not used by this prompt

---

### Step 2: Shared Components

Skip this step if `components/ServicePage.tsx`, `components/FAQBlock.tsx`, and
`components/StatBar.tsx` already exist from a prior service page build.

#### 2a: StatBar

**File:** `components/StatBar.tsx`

Renders confirmed stats as a responsive grid. Falls back to `placeholder` text when
`value` is 0. Uses the project's existing Tailwind tokens and brand color variables.

Rules:
- Do not hardcode color values — use CSS custom properties or Tailwind tokens confirmed
  in Gate 1
- Do not render a stat card when both `value` is 0 and `placeholder` is null
- When `value` is 0 and `placeholder` is a string, render the placeholder string with
  a TODO comment in the JSX: `{/* TODO: Replace placeholder with real confirmed value */}`
- Mark the entire StatBar section `aria-label="Service statistics"` for accessibility

#### 2b: FAQBlock

**File:** `components/FAQBlock.tsx`

Renders the FAQ accordion UI and injects FAQPage schema as a JSON-LD script tag.

Rules:
- The `<script type="application/ld+json">` block must be rendered as a sibling to the
  visible FAQ list, not nested inside it
- The schema `name` field for each Question must match the visible `faq.question` string
  exactly — character for character, including punctuation
- The schema `text` field for each Answer must match the visible `faq.answer` string
  exactly
- Use `<details>` / `<summary>` accordion pattern so both open and closed states are
  crawler-readable without JavaScript
- Do not use a state-driven accordion that hides answer text from the DOM — FAQPage
  schema requires that the matched text is present in the DOM at load time
- Minimum 5 FAQs required. If fewer than 5 are in the data file, emit a build warning
  comment at the top of the FAQ section:
  `{/* WARNING: FAQPage requires minimum 5 questions. Add more to data file before launch. */}`

#### 2c: ServicePage

**File:** `components/ServicePage.tsx`

The single template all service pages use. Renders in this order:

1. `<h1>` from `data.title`
2. Answer block — styled with `border-l-4` and brand accent color, 40-65 words enforced
   by a build-time comment if over limit
3. `<StatBar stats={data.stats} />`
4. `{children}` — page-specific body content slot
5. `<FAQBlock faqs={data.faqs} />`

Rules:
- AuthorBox is not included in this component — it is owner-confirmed content that
  belongs in the page file, not the shared template, because author details vary
- Do not add any hardcoded copy to ServicePage.tsx — all copy comes from the data file
  or from `{children}`
- Do not add any schema to ServicePage.tsx other than what FAQBlock already injects —
  Service schema and BreadcrumbList schema belong in the page file
- ServicePage must be a Server Component (no `'use client'` directive) unless the
  client repo's architecture requires otherwise

---

### Step 3: Service Data File

**File:** `data/services/[slug].ts`

Replace `[slug]` with the service slug confirmed in the Prompt 05 brief.

Populate using confirmed data from the Prompt 05 brief only. Do not invent values.

Template:

```typescript
import type { ServiceData } from '@/types/service';

const data: ServiceData = {
  slug: '[CONFIRMED SLUG]',
  title: '[CONFIRMED H1 / PAGE TITLE]',

  // 40-65 words. Direct. Citable. Answers what this service is, where, and what to expect.
  // Pull from Prompt 05 answerBlock if confirmed. Flag as TODO if not confirmed.
  answerBlock: '[CONFIRMED ANSWER BLOCK — or TODO: confirm with owner]',

  // Update these dates when the data file is first created.
  // Bump lastRefreshed and recalculate nextRefreshDue every 90 days.
  lastRefreshed: '[TODAY ISO DATE]',
  nextRefreshDue: '[TODAY + 90 DAYS ISO DATE]',

  stats: [
    // Populate from Prompt 05 confirmed stats only.
    // Use value: 0 and placeholder for any unconfirmed stat.
    // Example confirmed stat:
    // {
    //   id: 'avg-repair-cost',
    //   label: 'Typical repair cost',
    //   value: 187,
    //   unit: '$',
    //   period: 'current pricing',
    //   placeholder: null,
    // },
    // Example unconfirmed stat:
    // {
    //   id: 'jobs-completed',
    //   label: 'Jobs completed in [City]',
    //   value: 0,
    //   unit: 'jobs',
    //   period: 'since [YEAR]',
    //   placeholder: 'TODO: confirm with owner',
    // },
  ],

  faqs: [
    // Minimum 5 FAQs required for FAQPage schema eligibility.
    // Every FAQ must have a confirmed source.
    // Pull questions from Prompt 05 FAQ plan or Prompt 02 Page Outline.
    // Do not write answers from general knowledge — trace each to job-log,
    // firsthand, business-data, or customer-question.
    // {
    //   question: '[EXACT QUESTION AS IT WILL APPEAR ON PAGE]',
    //   answer: '[ANSWER — must match visible page text exactly for schema compliance]',
    //   source: 'business-data',
    // },
  ],
};

export default data;
```

---

### Step 4: Page File

**File:** `app/services/[slug]/page.tsx`

This is the thin page wrapper. It imports the data file and the ServicePage component.
All page-specific content (body copy, AuthorBox if applicable, Service schema,
BreadcrumbList schema) lives here.

```typescript
import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import data from '@/data/services/[slug]';

export const metadata: Metadata = {
  title: '[CONFIRMED META TITLE — unique, 50-60 chars, from Prompt 05]',
  description: '[CONFIRMED META DESCRIPTION — 140-160 chars, from Prompt 05]',
  alternates: {
    canonical: '[CONFIRMED CANONICAL URL — or TODO: confirm production domain]',
  },
  openGraph: {
    title: '[OG TITLE — may differ from meta title]',
    description: '[OG DESCRIPTION — may differ from meta description]',
    url: '[CONFIRMED OG URL — or TODO: confirm production domain]',
    type: 'website',
  },
};

// Service schema — only emit fields with confirmed values
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '[CONFIRMED SERVICE NAME]',
  provider: {
    '@type': 'LocalBusiness',
    name: '[CONFIRMED BUSINESS NAME]',
    // TODO: add telephone, address, areaServed when confirmed
  },
  areaServed: '[CONFIRMED SERVICE AREA — or omit until confirmed]',
  description: data.answerBlock,
};

// BreadcrumbList schema — only emit if breadcrumb is visible on the page
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: '[CONFIRMED DOMAIN]',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: '[CONFIRMED DOMAIN]/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '[CONFIRMED PAGE NAME]',
      item: '[CONFIRMED CANONICAL URL]',
    },
  ],
};

export default function ServicePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data}>
        {/*
          Page-specific body content goes here as children.
          This is where section copy, process steps, trust signals,
          CTAs, and the AuthorBox (if owner-confirmed) are placed.
          Do not hardcode copy that should live in the data file.
        */}
      </ServicePage>
    </>
  );
}
```

---

## Gate 4: Validate

Run all available validation commands before reporting:

```bash
npm run build
npm run lint
npm run typecheck   # or: tsc --noEmit
```

Also verify manually:

- [ ] `types/service.ts` exports `ServiceData`, `StatItem`, `FAQItem` without errors
- [ ] `data/services/[slug].ts` imports `ServiceData` type and satisfies it without errors
- [ ] `components/FAQBlock.tsx` renders FAQPage schema with question and answer text that
      exactly matches the visible FAQ text
- [ ] `components/StatBar.tsx` renders placeholder text (not `0`) when `value` is 0 and
      `placeholder` is a non-null string
- [ ] `app/services/[slug]/page.tsx` exports `metadata` as a `Metadata` object
- [ ] Page route resolves without 404 or build error
- [ ] No AggregateRating schema is present unless verified rating data was confirmed
- [ ] No invented stats, prices, or availability claims appear in the data file
- [ ] All FAQ `source` fields are one of: `job-log`, `firsthand`, `business-data`,
      `customer-question`
- [ ] Answer block word count is between 40 and 65 words
- [ ] `lastRefreshed` and `nextRefreshDue` are valid ISO date strings

Do not claim validation passed unless commands actually ran and exited without errors.

---

## Gate 5: Report

After validation, report:

1. Files created (full paths)
2. Files modified (full paths and what changed)
3. Files intentionally not touched
4. Route created or confirmed
5. Metadata fields set (title, description, canonical, OG)
6. Schema emitted: Service, BreadcrumbList, FAQPage — status for each
7. Schema omitted and why (e.g. AggregateRating omitted — no verified rating data)
8. Stats with confirmed real values vs. stats using placeholders
9. FAQ count and source breakdown (how many from job-log, firsthand, etc.)
10. Answer block word count
11. TODO items that must be resolved before launch (list each with the field name and
    what confirmation is needed)
12. Validation commands run and results
13. Next recommended action

---

## Guardrails

- Do not modify `globals.css`, `layout.tsx`, `tailwind.config.ts`, or any config file
  unless a required CSS variable is genuinely missing and cannot be resolved another way
- Do not create a duplicate route for this page
- Do not modify any existing service page not in scope for this build
- Do not add npm packages or dependencies — the data layer has no external dependencies
- Do not rename existing files or components
- Do not add AggregateRating schema under any circumstances without verified owner-
  confirmed rating data
- Do not fill `value` with a non-zero number unless that number is confirmed in the
  Prompt 05 brief or Prompt 10 Client Data Collection output
- Do not write FAQ answers from general knowledge — every answer must trace to a
  confirmed source
- Do not exceed 65 words in the answer block
- Do not add fields to `ServiceData` that are not in the type definition without
  operator approval

---

## 90-Day Refresh Protocol

The data file is the refresh target, not the JSX. When the refresh date arrives:

1. Open `data/services/[slug].ts`
2. Update any `value: 0` stats that now have confirmed real numbers
3. Add 1-2 new FAQs from recent jobs or customer questions
4. Update `answerBlock` if pricing or availability has changed
5. Bump `lastRefreshed` to today's date
6. Recalculate `nextRefreshDue` (today + 90 days)
7. Run validation and deploy

Do not touch JSX files during a refresh cycle unless a new section is being added.

---

## Acceptance Criteria

The build is complete when all of the following are true:

- [ ] `types/service.ts` defines `ServiceData`, `StatItem`, `FAQItem`
- [ ] `data/services/[slug].ts` satisfies `ServiceData` with no TypeScript errors
- [ ] `components/StatBar.tsx` renders real values or placeholder strings; never raw `0`
- [ ] `components/FAQBlock.tsx` renders accordion UI and emits FAQPage schema with
      exact visible-text match
- [ ] `components/ServicePage.tsx` composes StatBar, children slot, and FAQBlock in
      correct order with answer block first
- [ ] `app/services/[slug]/page.tsx` exports metadata, emits Service schema and
      BreadcrumbList schema, renders `<ServicePage data={data}>`
- [ ] All TODO flags are visible in code with clear labels
- [ ] No invented data is present anywhere in the data file
- [ ] `npm run build` exits without errors
- [ ] `npm run lint` exits without errors on new files
- [ ] `tsc --noEmit` exits without TypeScript errors

---

## Files This Prompt Creates or Modifies

**Creates (first-time setup):**
- `types/service.ts`
- `components/StatBar.tsx`
- `components/FAQBlock.tsx`
- `components/ServicePage.tsx`
- `data/services/[slug].ts`
- `app/services/[slug]/page.tsx`

**Creates (additional service page, types and components exist):**
- `data/services/[slug].ts`
- `app/services/[slug]/page.tsx`

**Never modifies:**
- `globals.css`
- `layout.tsx` (root or any layout)
- `tailwind.config.ts`
- `next.config.ts` or `next.config.js`
- Any existing service page not in scope
- Any existing component not listed above

---

Site OS Master — Service Data Layer Build Prompt v1.0
Status: Active
Position: Core and Beyond-Elite Mode — run after Prompt 05, before or alongside Prompt 06
Reason for creation: Separate service page content from JSX presentation; enforce 90-day
refresh discipline structurally; generate FAQPage schema from a single source of truth;
eliminate hardcoded stats, answer blocks, and FAQs from component files.
