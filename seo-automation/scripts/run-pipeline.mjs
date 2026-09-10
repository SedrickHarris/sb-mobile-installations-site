#!/usr/bin/env node
// Site OS - run-pipeline.mjs
// Orchestrates the SEO opportunity pipeline scripts in order:
//   scan-routes -> parse-keyword-csv -> cluster-keywords -> score-opportunities
// Zero dependencies. Run from the client repo root:
//   node seo-automation/scripts/run-pipeline.mjs [--skip-scan] [--min-score <n>]
// No fake data: this orchestrator only sequences existing scripts. It never writes metrics.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const SCRIPTS_DIR = path.dirname(fileURLToPath(import.meta.url));
const SEO_DIR = path.join(ROOT, "docs", "seo");
const KEYWORD_EXPORTS_DIR = path.join(SEO_DIR, "keyword-exports");

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function parseArgs(argv) {
  const args = { skipScan: false, minScore: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--skip-scan") {
      args.skipScan = true;
    } else if (a === "--min-score") {
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("--")) {
        args.minScore = next;
        i++;
      }
    } else if (a.startsWith("--min-score=")) {
      args.minScore = a.slice("--min-score=".length);
    }
  }
  return args;
}

function fail(message) {
  console.error(`\nERROR: pipeline stopped. ${message}`);
  process.exit(1);
}

function runStep(label, scriptName, extraArgs = []) {
  const scriptPath = path.join(SCRIPTS_DIR, scriptName);
  const suffix = extraArgs.length ? " " + extraArgs.join(" ") : "";
  console.log(`\n=== ${label}: node ${rel(scriptPath)}${suffix} ===`);
  const result = spawnSync(process.execPath, [scriptPath, ...extraArgs], {
    cwd: ROOT,
    stdio: "inherit",
  });
  if (result.error) {
    fail(`${label} could not start: ${result.error.message}`);
  }
  if (typeof result.status === "number" && result.status !== 0) {
    fail(`${label} exited with code ${result.status}.`);
  }
}

async function requireOutput(label, file) {
  if (!(await exists(file))) {
    fail(`${label} did not produce the expected output file ${rel(file)}.`);
  }
  console.log(`OK: ${label} output present at ${rel(file)}.`);
}

// Visibility alignment gate. Warns loudly but never blocks the pipeline itself.
async function visibilityGateCheck() {
  const selectedFile = path.join(SEO_DIR, "selected-opportunity.json");
  if (!(await exists(selectedFile))) {
    console.log(
      `\nNOTE: no ${rel(selectedFile)} yet. Run the selection prompt to choose an ` +
        "opportunity, then run Prompt 20 (prompts/20-visibility-conversion-alignment-prompt.md) " +
        "and set visibilityAlignmentConfirmed to true before page-brief.json is generated."
    );
    return;
  }
  let data;
  try {
    data = JSON.parse(await fs.readFile(selectedFile, "utf8"));
  } catch (err) {
    console.warn(
      `\nWARN: could not parse ${rel(selectedFile)} (${err.message}). ` +
        "Cannot verify visibilityAlignmentConfirmed."
    );
    return;
  }
  if (data && data.visibilityAlignmentConfirmed === true) {
    console.log(
      `\nOK: visibilityAlignmentConfirmed is true in ${rel(selectedFile)}. ` +
        "Cleared to generate page-brief.json."
    );
    return;
  }
  const state = data && "visibilityAlignmentConfirmed" in data ? "false" : "missing";
  console.warn("\n==================== VISIBILITY GATE ====================");
  console.warn(`WARN: visibilityAlignmentConfirmed is ${state} in ${rel(selectedFile)}.`);
  console.warn("Run Prompt 20 (prompts/20-visibility-conversion-alignment-prompt.md) and set");
  console.warn("visibilityAlignmentConfirmed to true BEFORE page-brief.json is generated.");
  console.warn("The pipeline did not block, but the page brief must not proceed until this passes.");
  console.warn("========================================================");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  // Step 1: scan-routes (skippable when the manifest is already fresh).
  const manifestFile = path.join(SEO_DIR, "route-manifest.json");
  if (args.skipScan) {
    if (!(await exists(manifestFile))) {
      fail(
        `--skip-scan was set but ${rel(manifestFile)} does not exist. ` +
          "Run without --skip-scan first."
      );
    }
    console.log(`\n=== Step 1 skipped: using existing ${rel(manifestFile)} (--skip-scan) ===`);
  } else {
    runStep("Step 1 scan-routes", "scan-routes.mjs");
    await requireOutput("scan-routes", manifestFile);
  }

  // Pre-check: a CSV must exist before parse-keyword-csv runs.
  if (!(await exists(KEYWORD_EXPORTS_DIR))) {
    fail(
      `No keyword exports folder at ${rel(KEYWORD_EXPORTS_DIR)}. ` +
        "Create it and drop a Google Keyword Planner CSV export there, then re-run."
    );
  }
  const csvEntries = await fs.readdir(KEYWORD_EXPORTS_DIR);
  const hasCsv = csvEntries.some((n) => n.toLowerCase().endsWith(".csv"));
  if (!hasCsv) {
    fail(
      `No .csv file found in ${rel(KEYWORD_EXPORTS_DIR)}. ` +
        "Drop a Google Keyword Planner CSV export there, then re-run."
    );
  }

  // Step 2: parse-keyword-csv.
  runStep("Step 2 parse-keyword-csv", "parse-keyword-csv.mjs");
  await requireOutput("parse-keyword-csv", path.join(SEO_DIR, "normalized-keywords.json"));

  // Step 3: cluster-keywords.
  runStep("Step 3 cluster-keywords", "cluster-keywords.mjs");
  await requireOutput("cluster-keywords", path.join(SEO_DIR, "keyword-clusters.json"));

  // Step 4: score-opportunities (passes --min-score through when supplied).
  const scoreArgs = args.minScore !== null ? ["--min-score", String(args.minScore)] : [];
  runStep("Step 4 score-opportunities", "score-opportunities.mjs", scoreArgs);
  await requireOutput("score-opportunities", path.join(SEO_DIR, "opportunities.json"));

  // Visibility alignment gate (warns, does not block).
  await visibilityGateCheck();

  // Next-step guidance on success.
  console.log("\n==================== PIPELINE COMPLETE ====================");
  console.log(`Outputs written under ${rel(SEO_DIR)}/:`);
  console.log("  - route-manifest.json");
  console.log("  - normalized-keywords.json");
  console.log("  - keyword-clusters.json");
  console.log("  - opportunities.json");
  console.log("\nNext steps:");
  console.log("  1. Review opportunities.json (sorted by build-priority score, not SEO difficulty).");
  console.log("  2. Run the selection prompt to produce selected-opportunity.json.");
  console.log("  3. Run Prompt 20 (prompts/20-visibility-conversion-alignment-prompt.md) and set");
  console.log("     visibilityAlignmentConfirmed to true.");
  console.log("  4. Only then generate page-brief.json.");
  console.log("==========================================================");
}

main().catch((err) => {
  console.error(`ERROR: run-pipeline failed: ${err && err.message ? err.message : err}`);
  process.exit(1);
});
