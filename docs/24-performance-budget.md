# SB Mobile Installations Performance Budget

**Document:** 24-performance-budget.md  
**Project:** SB Mobile Installations Website and Installer Recruitment Project  
**Business:** SB Mobile Installations, LLC  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Hosting:** Cloudflare Pages static export  
**Primary objective:** Keep recruitment, job discovery, and application paths fast and reliable on mobile connections.  
**Status:** Working performance standard  
**Version:** 0.1  
**Last updated:** September 10, 2026

---

## 1. Purpose

This document establishes measurable performance targets and the review process for the SB Mobile Installations website.

It works with:

- 16-technical-architecture.md;
- 17-cloudflare-deployment.md;
- 20-component-inventory.md;
- 21-design-system.md;
- 22-image-strategy.md;
- 23-accessibility-standards.md; and
- 25-quality-assurance-checklist.md.

Performance is a recruitment and conversion requirement. A candidate should be able to understand an opening, reach the application, and recover from a form error without waiting for unnecessary scripts or media.

---

## 2. Performance Principles

1. Static HTML carries the primary content.
2. Server components are the default.
3. Client JavaScript is added only for meaningful interaction.
4. The primary hero is optimized before decorative media.
5. A form must remain understandable while enhancement loads.
6. Third-party code earns its cost through a documented business need.
7. Performance is measured on representative mobile routes, not only the homepage.
8. A passing score never excuses inaccessible or incomplete content.

---

## 3. Core Web Vitals Targets

Targets apply to field data where available and to controlled lab tests for every release.

| Metric | Good target | Watch threshold | Action threshold |
|---|---:|---:|---:|
| Largest Contentful Paint | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| Interaction to Next Paint | ≤ 200ms | 200–500ms | > 500ms |
| Cumulative Layout Shift | ≤ 0.10 | 0.10–0.25 | > 0.25 |
| First Contentful Paint | ≤ 1.8s | 1.8–3.0s | > 3.0s |
| Total Blocking Time, lab | ≤ 200ms | 200–600ms | > 600ms |

The project should aim for the Good range, not merely avoid the Action range.

---

## 4. Route Test Set

Measure at minimum:

- homepage;
- Careers hub;
- Current Openings index;
- one active Job Detail page;
- one closed Job Detail page;
- Installer Network;
- Requirements;
- Assignment Process;
- one commercial service page;
- Contact; and
- one long-form resource page.

Test both a representative recruitment route and a representative commercial route. If a route is not yet approved, do not create a fake page only to satisfy the test.

---

## 5. Test Conditions

### Lab baseline

- production build;
- public preview or production URL;
- mobile viewport;
- throttled mobile network;
- CPU throttling appropriate to a mid-range device;
- cache-cleared first load; and
- repeat view for cache behavior.

### Field monitoring

Use Search Console, approved analytics, and real-user monitoring only after privacy and consent decisions are approved. Do not collect form values or other personal information for performance diagnostics.

### Comparison rule

Compare like with like: same route, build type, viewport, network profile, and test mode. Record date, commit, and test environment.

---

## 6. HTML and Document Budget

Targets for an ordinary page:

- primary content visible in initial HTML;
- no unnecessary client-only shell;
- no repeated hidden copies of large content;
- no excessive nested layout wrappers;
- no blocking third-party embed before the primary content;
- meaningful title, H1, and navigation in the document; and
- no layout shift caused by missing dimensions.

Long pages may contain substantial useful content, but repeated boilerplate, hidden keyword blocks, and duplicated FAQ content are performance and quality problems.

---

## 7. JavaScript Budget

Recommended initial-route targets:

| Resource | Target |
|---|---:|
| First-party JavaScript transferred | ≤ 150 KB compressed |
| First-party JavaScript hard ceiling | 200 KB compressed |
| Client component count | Smallest practical set |
| Long tasks over 50ms | Zero critical-path tasks where practical |
| Hydrated interactive islands | Only approved interactions |

The exact transfer size depends on the build and route. Any budget breach requires an explanation and remediation plan.

### Client boundaries

Client components are normally limited to:

- mobile navigation;
- accessible disclosure or accordion state;
- job filters when justified;
- form controls and submission state;
- Turnstile or approved anti-abuse widget;
- consent-aware analytics; and
- other approved browser-only behavior.

Do not make an entire page client-rendered to support one interactive control.

---

## 8. CSS Budget

Target:

- ship only styles used by the approved route;
- avoid duplicate component styles;
- avoid large animation or utility libraries;
- keep critical layout styles available without delayed JavaScript;
- remove unused CSS during production build; and
- avoid style patterns that cause layout recalculation on scroll.

Review unusual CSS growth by comparing the route's content and component changes.

---

## 9. Font Budget

- Prefer one primary family with a system fallback.
- Limit weights to those used by the design system.
- Self-host or use an approved provider with documented privacy and performance review.
- Avoid blocking render on multiple font families.
- Use font-display behavior that preserves readable fallback text.
- Test headings and buttons during font swap.

Do not select a font that materially harms the LCP or causes text reflow on the application path.

---

## 10. Image Budget

Images are governed by 22-image-strategy.md.

Performance requirements:

- explicit dimensions or aspect ratios;
- responsive source sizes;
- modern formats where supported;
- hero image sized to its rendered slot;
- only the true LCP candidate prioritized;
- below-the-fold images lazy-loaded;
- no oversized card derivatives;
- no duplicate hero frames loaded immediately; and
- no decorative image blocking the primary content.

The largest image on a route should be explainable by its visual role. Replace or resize images that are materially larger than the slot requires.

---

## 11. Hero and Carousel Budget

The first meaningful hero frame should load without waiting for all optional frames, analytics, or below-the-fold content.

If a carousel is approved:

- load the first frame and controls first;
- defer nonvisible frames;
- avoid autoplay that increases network use;
- pause on focus and support reduced motion;
- keep H1 and CTA outside the changing image layer where practical; and
- measure its impact on LCP and interaction responsiveness.

If a carousel fails the budget, use one static image or a solid-background hero.

---

## 12. Third-Party Script Policy

Third-party scripts include analytics, consent tools, anti-abuse widgets, embeds, chat, maps, and recruiting-platform integrations.

Every script requires:

- business owner;
- purpose;
- affected routes;
- privacy review;
- loading strategy;
- fallback behavior;
- performance measurement; and
- removal or review date.

Load third-party code after primary content when possible. Do not add a chat widget, map, review carousel, or video embed by default.

---

## 13. Forms and Application Performance

Forms must render their purpose, labels, and instructions in the initial page output. Browser enhancement may add validation and submission state.

Requirements:

- no unnecessary multi-step form;
- no blocking remote script before fields can be understood;
- preserve entries after recoverable errors;
- show loading state without freezing the page;
- prevent accidental duplicate submits;
- keep anti-abuse widgets isolated;
- provide a useful server-error fallback; and
- do not send field values to analytics.

An ATS handoff may be slower than an onsite form, but the visitor must receive clear loading and failure behavior.

---

## 14. Static Export and Cloudflare Delivery

The production build must:

- complete static export successfully;
- emit route HTML for approved indexable pages;
- emit assets with stable paths;
- avoid server-only dependencies in static routes;
- use cache-friendly immutable asset names;
- retain correct content types;
- serve compression through the approved hosting configuration; and
- avoid runtime work that static hosting cannot provide.

Form processing and secret operations may cross a serverless boundary as defined in 16-technical-architecture.md. The page itself must remain fast and useful when that service is unavailable.

---

## 15. Caching and Asset Policy

- Use long-lived caching for immutable hashed assets.
- Do not cache sensitive form responses as public content.
- Keep HTML revalidation appropriate to job and content freshness.
- Invalidate or rebuild when active-job data changes.
- Do not allow a closed opening to remain presented as active through stale caches.
- Review cache behavior for sitemap, robots, metadata, and structured data.

Caching must support job accuracy as well as speed.

---

## 16. Layout Stability

Prevent cumulative layout shift by:

- reserving image space;
- setting stable button and form dimensions;
- avoiding late-injected banners above content;
- reserving space for consent or Turnstile UI;
- avoiding font-induced heading jumps;
- not inserting ads or unapproved promotions; and
- testing active and error states, not only the default state.

Sticky headers must not cover anchor targets, form errors, or focused controls.

---

## 17. Accessibility and Performance

Do not improve a performance score by removing labels, focus behavior, alt attributes, semantic structure, or visible error text.

The fastest acceptable implementation is the one that keeps primary content static, limits client boundaries, and preserves the accessibility contract in 23-accessibility-standards.md.

---

## 18. SEO and Crawl Performance

Performance work must preserve:

- crawlable links;
- server-rendered headings and answer blocks;
- canonical metadata;
- active-job and closed-job state accuracy;
- schema output;
- usable breadcrumbs;
- indexable page content; and
- noindex confirmation and utility states.

Do not defer the only copy that explains a job, service, location, or conversion path.

---

## 19. Monitoring and Reporting

Record:

- route;
- build commit;
- deployment URL;
- date and time;
- device and network profile;
- test tool;
- Core Web Vitals;
- transfer sizes;
- JavaScript and CSS sizes;
- largest resources;
- third-party scripts;
- known exceptions; and
- remediation owner.

Review performance before launch, after significant component or image changes, after third-party additions, and at least monthly after launch.

---

## 20. Budget Breach Process

When a budget is exceeded:

1. confirm the result with a repeat test;
2. identify the resource or code change;
3. determine whether the impact affects recruitment, forms, or indexing;
4. optimize, remove, defer, or replace the cause;
5. document any accepted exception; and
6. re-test before release.

No exception is permanent by default.

---

## 21. Performance QA Checklist

- [ ] Production build completes.
- [ ] Static export contains primary content.
- [ ] Recruitment routes meet the Core Web Vitals target.
- [ ] LCP image is correctly prioritized.
- [ ] Images have dimensions and responsive sizes.
- [ ] No unnecessary hero frames load on initial view.
- [ ] First-party JavaScript remains within budget or has a documented exception.
- [ ] Fonts do not block or shift critical content.
- [ ] No unapproved third-party script is present.
- [ ] Forms remain understandable and recoverable on slow connections.
- [ ] Active and closed job states remain accurate after caching.
- [ ] Layout does not shift when menus, alerts, or validation errors appear.
- [ ] Accessibility behavior remains intact.
- [ ] Mobile and desktop tests are recorded.

---

## 22. Definition of Done

Performance is ready for launch when approved routes meet the Core Web Vitals targets or have documented, owned exceptions; static HTML contains the primary content; images, fonts, JavaScript, CSS, and third-party scripts stay within reviewed budgets; forms remain usable on mobile connections; Cloudflare delivery and caching are verified; and performance results are attached to the release QA record.

---

## 23. Related Documents

- 16-technical-architecture.md
- 17-cloudflare-deployment.md
- 20-component-inventory.md
- 21-design-system.md
- 22-image-strategy.md
- 23-accessibility-standards.md
- 25-quality-assurance-checklist.md
- 26-launch-checklist.md
- 30-job-content-schema-specification.md

## 24. Maintenance

Update this document when route families, image formats, fonts, client components, third-party scripts, Cloudflare settings, browser support, or performance targets change. Record material changes in Git and the project decision log.
