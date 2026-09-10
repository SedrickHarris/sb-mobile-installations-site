# SB Mobile Installations Website

Website rebuild and installer recruitment project for **SB Mobile Installations, LLC**, a mobile
fleet-technology installation company serving commercial, fleet, and construction vehicles
nationwide.

## Status

Planning and documentation phase. This repository currently contains the project's strategy and
specification documents. No application code has been written yet.

## Planned stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Cloudflare Pages |
| Trusted backend | Cloudflare Workers / Pages Functions |

## Documentation

All planning documents live in [`docs/`](docs/) and are numbered in reading order.

| Range | Topic |
| --- | --- |
| 00–03 | Project overview, business source of truth, audience personas |
| 04–06 | Competitor research, keyword research, search intent |
| 07–09 | Site architecture, URL strategy, content strategy |
| 10–13 | On-page SEO, local SEO, AEO/GEO, schema markup |
| 14–15 | Conversion strategy, analytics and measurement |
| 16–19 | Technical architecture, deployment, GitHub workflow, AI instructions |
| 20–24 | Component inventory, design system, images, accessibility, performance |
| 25–27 | Quality assurance, launch checklist, post-launch growth |
| 28–31 | Recruitment strategy, distribution, job schema, operations |

Two documents govern the rest:

- [`docs/01-business-source-of-truth.md`](docs/01-business-source-of-truth.md) is the canonical
  record of verified business facts. Any conflict resolves in its favor.
- [`docs/18-github-workflow.md`](docs/18-github-workflow.md) defines branching, commits, review,
  and release rules for this repository.

## Contributing

`main` is the default and production branch. Work happens on feature branches and merges through
pull requests. Commit messages follow `type(scope): imperative summary`. See the GitHub workflow
document for the full standard.

## Secrets

No credentials belong in this repository. Environment variables are documented by name in
`.env.example` only. Real values live in Cloudflare and GitHub secret storage.
