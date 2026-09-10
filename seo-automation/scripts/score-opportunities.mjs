#!/usr/bin/env node
// Site OS - score-opportunities.mjs
// Reads docs/seo/keyword-clusters.json and docs/seo/route-manifest.json, compares clusters
// against existing routes, and writes docs/seo/opportunities.json ranked by a priority score.
// Zero dependencies. Run from the client repo root.
// IMPORTANT: scores are internal prioritization heuristics only. They are NOT real SEO
// keyword difficulty, ranking probability, or traffic estimates, and must never be presented
// as such. No fake data: real volume comes only from the supplied Keyword Planner CSV.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CLUSTERS_FILE = path.join(ROOT, "docs", "seo", "keyword-clusters.json");
const MANIFEST_FILE = path.join(ROOT, "docs", "seo", "route-manifest.json");
const OUTPUT_DIR = path.join(ROOT, "docs", "seo");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "opportunities.json");

const warnings = [];
const STOPWORDS = new Set(["a", "an", "the", "and", "or", "of", "for", "to", "in", "on", "at", "with"]);
const DEFAULT_MIN_SCORE = 4;

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

// --min-score <n> (or --min-score=<n>) sets the build-priority cutoff. Default is 4.
function parseMinScore(argv) {
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--min-score") {
      const n = Number(argv[i + 1]);
      if (Number.isFinite(n)) return n;
    } else if (a.startsWith("--min-score=")) {
      const n = Number(a.slice("--min-score=".length));
      if (Number.isFinite(n)) return n;
    }
  }
  return DEFAULT_MIN_SCORE;
}

const MIN_SCORE = parseMinScore(process.argv.slice(2));

function tokenize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOPWORDS.has(t));
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function readJson(file) {
  return fs.readFile(file, "utf8").then((raw) => JSON.parse(raw));
}

function buildRouteIndex(manifest) {
  const routes = Array.isArray(manifest.routes) ? manifest.routes : [];
  return routes.map((r) => {
    const tokenSet = new Set([
      ...tokenize(r.route),
      ...(r.possibleTitles || []).flatMap(tokenize),
      ...(r.possibleH1s || []).flatMap(tokenize),
    ]);
    return { route: r.route, sourceFile: r.sourceFile, tokens: tokenSet };
  });
}

function bestOverlap(baseTokens, routeIndex) {
  let best = null;
  for (const route of routeIndex) {
    if (!baseTokens.length) break;
    let matched = 0;
    for (const t of baseTokens) if (route.tokens.has(t)) matched++;
    const ratio = baseTokens.length ? matched / baseTokens.length : 0;
    if (ratio > 0 && (!best || ratio > best.overlapRatio)) {
      best = {
        route: route.route,
        sourceFile: route.sourceFile,
        matchedTokens: matched,
        baseTokenCount: baseTokens.length,
        overlapRatio: Number(ratio.toFixed(2)),
      };
    }
  }
  return best;
}

function derivePageType(categories) {
  const c = new Set(categories || []);
  if (c.has("comparison")) return "comparison";
  if (c.has("cost")) return "pricing";
  if (c.has("emergency")) return "emergency-service";
  if (c.has("location")) return "service-location";
  if (c.has("problem")) return "guide";
  if (c.has("audience")) return "audience-service";
  return "pillar";
}

function derivePrimaryIntent(intentHints) {
  const order = ["transactional", "urgent", "commercial-comparison", "local", "audience-specific", "informational", "general"];
  for (const intent of order) {
    if ((intentHints || []).includes(intent)) return intent;
  }
  return "general";
}

function scoreCluster(cluster, baseTokens, overlap) {
  const categories = new Set(cluster._categories || []);
  const intentHints = cluster.intentHints || [];
  const keywordCount = cluster.metricsSummary ? cluster.metricsSummary.keywordCount : (cluster.keywords || []).length;
  const dataAvailable = cluster.metricsSummary ? cluster.metricsSummary.dataAvailable : false;

  // Each hint is a bounded heuristic, not a measured SEO metric.
  const serviceFitHint = Math.min(3, baseTokens.length); // topic specificity
  const buyerIntentHint =
    (categories.has("cost") ? 2 : 0) + (intentHints.includes("commercial-comparison") ? 1 : 0);
  const localIntentHint = categories.has("location") ? 2 : 0;
  const clusterDepth = Math.min(3, Math.floor(keywordCount / 2));
  const modifierStrength = Math.min(3, categories.size);
  const overlapRatio = overlap ? overlap.overlapRatio : 0;
  const existingOverlapPenalty = -Math.round(overlapRatio * 4); // 0 to -4
  const dataCompleteness = dataAvailable ? 2 : 0;

  const breakdown = {
    serviceFitHint,
    buyerIntentHint: Math.min(3, buyerIntentHint),
    localIntentHint,
    clusterDepth,
    modifierStrength,
    existingOverlapPenalty,
    dataCompleteness,
  };
  const score = Math.max(
    0,
    breakdown.serviceFitHint +
      breakdown.buyerIntentHint +
      breakdown.localIntentHint +
      breakdown.clusterDepth +
      breakdown.modifierStrength +
      breakdown.existingOverlapPenalty +
      breakdown.dataCompleteness
  );
  return { score, breakdown };
}

async function main() {
  let clustersData;
  try {
    clustersData = await readJson(CLUSTERS_FILE);
  } catch (err) {
    throw new Error(
      `Could not read ${rel(CLUSTERS_FILE)} (${err.code || err.message}). ` +
        "Run cluster-keywords.mjs first."
    );
  }

  let routeIndex = [];
  try {
    const manifest = await readJson(MANIFEST_FILE);
    routeIndex = buildRouteIndex(manifest);
  } catch (err) {
    warnings.push(
      `Could not read ${rel(MANIFEST_FILE)} (${err.code || err.message}). ` +
        "Scoring will assume no existing routes overlap. Run scan-routes.mjs for accurate overlap."
    );
  }

  const clusters = Array.isArray(clustersData.clusters) ? clustersData.clusters : [];
  if (!clusters.length) {
    warnings.push("keyword-clusters.json contains no clusters. Writing an empty opportunity set.");
  }

  const opportunities = [];
  let index = 0;
  for (const cluster of clusters) {
    index++;
    const baseTokens = tokenize(cluster.primaryKeyword);
    const overlap = bestOverlap(baseTokens, routeIndex);
    const { score, breakdown } = scoreCluster(cluster, baseTokens, overlap);
    const pageType = derivePageType(cluster._categories);
    const intent = derivePrimaryIntent(cluster.intentHints);
    const supportingKeywords = (cluster.keywords || []).filter((k) => k !== cluster.primaryKeyword);
    const stronglyCovered = overlap && overlap.overlapRatio >= 0.75;

    opportunities.push({
      opportunityId: `o-${String(index).padStart(3, "0")}`,
      clusterId: cluster.clusterId || null,
      recommendedPageTitle: cluster.clusterName || cluster.primaryKeyword,
      recommendedSlug: slugify(cluster.primaryKeyword),
      primaryKeyword: cluster.primaryKeyword,
      supportingKeywords,
      pageType,
      intent,
      existingRouteOverlap: overlap || null,
      score,
      scoreBreakdown: breakdown,
      rationale:
        `Priority heuristic ${score}. Signals: intent=${intent}, pageType=${pageType}, ` +
        `keywords=${(cluster.keywords || []).length}, ` +
        `volumeData=${cluster.metricsSummary && cluster.metricsSummary.dataAvailable ? "supplied" : "none"}, ` +
        `existingOverlap=${overlap ? overlap.overlapRatio : 0}. ` +
        "Score ranks build priority only and is not an SEO difficulty estimate.",
      recommendedNextAction: stronglyCovered
        ? "Review the existing overlapping route for expansion instead of creating a duplicate page."
        : "Create a new pillar page SEO brief for this cluster.",
    });
  }

  opportunities.sort((a, b) => b.score - a.score);

  // Apply the min-score cutoff before writing. Filtered opportunities are removed, not hidden.
  const scoredCount = opportunities.length;
  const keptOpportunities = opportunities.filter((o) => o.score >= MIN_SCORE);
  const filteredCount = scoredCount - keptOpportunities.length;
  if (filteredCount > 0) {
    warnings.push(
      `Min-score filter (--min-score ${MIN_SCORE}) removed ${filteredCount} ` +
        `opportunity/opportunities scoring below ${MIN_SCORE}.`
    );
  }

  const output = {
    generatedAt: new Date().toISOString(),
    minScore: MIN_SCORE,
    opportunityCount: keptOpportunities.length,
    filteredCount,
    opportunities: keptOpportunities,
    warnings,
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf8");

  console.log(
    `OK: scored ${scoredCount} opportunity/opportunities, kept ${keptOpportunities.length} ` +
      `at or above min-score ${MIN_SCORE} into ${rel(OUTPUT_FILE)}.`
  );
  if (warnings.length) {
    console.warn(`WARN: ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error(`ERROR: score-opportunities failed: ${err && err.message ? err.message : err}`);
  process.exitCode = 1;
});
