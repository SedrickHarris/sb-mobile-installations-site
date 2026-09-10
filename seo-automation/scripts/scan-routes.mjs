#!/usr/bin/env node
// Site OS - scan-routes.mjs
// Scans a Next.js app/ and pages/ router tree and writes a compressed route manifest.
// Zero dependencies. Run from the client repo root: node seo-automation/scripts/scan-routes.mjs
// No fake data: every field is derived from real source files. Empty values stay empty.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IGNORE_DIRS = new Set([
  "node_modules", ".next", "out", ".git", "dist", "build", ".cache",
]);
const PAGE_EXTS = new Set([".tsx", ".jsx", ".ts", ".js", ".mdx"]);
const SCHEMA_WORDS = [
  "FAQPage", "Service", "LocalBusiness", "Organization", "BreadcrumbList",
  "Article", "WebPage", "Product", "Review", "AggregateRating", "Person",
  "WebSite", "ItemList",
];

const OUTPUT_DIR = path.join(ROOT, "docs", "seo");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "route-manifest.json");

const warnings = [];

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

async function walk(dir, acc) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    warnings.push(`Could not read directory ${rel(dir)}: ${err.code || err.message}`);
    return;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      await walk(path.join(dir, entry.name), acc);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (PAGE_EXTS.has(ext)) acc.push(path.join(dir, entry.name));
    }
  }
}

async function readFileSafe(file) {
  try {
    return await fs.readFile(file, "utf8");
  } catch (err) {
    warnings.push(`Could not read file ${rel(file)}: ${err.code || err.message}`);
    return "";
  }
}

function stripTags(text) {
  return text
    .replace(/<[^>]*>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniq(list) {
  return Array.from(new Set(list.filter(Boolean)));
}

function deriveAppRoute(file, appRoot) {
  const dir = path.dirname(file);
  const relDir = path.relative(appRoot, dir).split(path.sep).filter(Boolean);
  const segments = [];
  for (const seg of relDir) {
    if (/^\(.*\)$/.test(seg)) continue; // route group, not part of the URL
    if (seg.startsWith("@")) continue; // parallel route slot
    if (seg.startsWith("[") && seg.endsWith("]")) {
      segments.push(":" + seg.replace(/^\[+|\]+$/g, ""));
    } else {
      segments.push(seg);
    }
  }
  return "/" + segments.join("/");
}

function derivePagesRoute(file, pagesRoot) {
  const relPath = path.relative(pagesRoot, file);
  const parsed = path.parse(relPath);
  const dirSegs = parsed.dir.split(path.sep).filter(Boolean);
  const segments = [];
  for (const seg of dirSegs) {
    if (seg.startsWith("[") && seg.endsWith("]")) {
      segments.push(":" + seg.replace(/^\[+|\]+$/g, ""));
    } else {
      segments.push(seg);
    }
  }
  let name = parsed.name;
  if (name !== "index") {
    if (name.startsWith("[") && name.endsWith("]")) {
      segments.push(":" + name.replace(/^\[+|\]+$/g, ""));
    } else {
      segments.push(name);
    }
  }
  return "/" + segments.join("/");
}

function extractTitles(content) {
  const titles = [];
  const metaTitle = /title:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = metaTitle.exec(content)) !== null) titles.push(m[1].trim());
  const tagTitle = /<title[^>]*>([^<]+)<\/title>/g;
  while ((m = tagTitle.exec(content)) !== null) titles.push(m[1].trim());
  return uniq(titles).slice(0, 10);
}

function extractHeadings(content, tag) {
  const out = [];
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "g");
  let m;
  while ((m = re.exec(content)) !== null) {
    const text = stripTags(m[1]);
    if (text) out.push(text);
  }
  return uniq(out).slice(0, 20);
}

function extractInternalHrefs(content) {
  const out = [];
  const re = /href\s*=\s*(?:["'`]([^"'`]+)["'`]|\{\s*["'`]([^"'`]+)["'`]\s*\})/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const href = m[1] || m[2] || "";
    if (href.startsWith("/") && !href.startsWith("//")) out.push(href);
  }
  return uniq(out).slice(0, 60);
}

function extractSchemaHints(content) {
  const hints = [];
  const typeRe = /["']@type["']\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = typeRe.exec(content)) !== null) hints.push(m[1].trim());
  for (const word of SCHEMA_WORDS) {
    if (new RegExp(`\\b${word}\\b`).test(content)) hints.push(word);
  }
  return uniq(hints).slice(0, 20);
}

function estimateWords(content) {
  const withoutImports = content.replace(/^\s*import .*$/gm, "");
  const text = stripTags(withoutImports);
  const words = text.split(/\s+/).filter((w) => /[a-zA-Z]/.test(w));
  return words.length;
}

function buildRecord(file, route, routerType, content) {
  return {
    route,
    sourceFile: rel(file),
    routerType,
    possibleTitles: extractTitles(content),
    possibleH1s: extractHeadings(content, "h1"),
    possibleH2s: extractHeadings(content, "h2"),
    internalHrefs: extractInternalHrefs(content),
    schemaTypeHints: extractSchemaHints(content),
    wordEstimate: estimateWords(content),
  };
}

async function collectAppRoutes(appRoot) {
  const files = [];
  await walk(appRoot, files);
  const records = [];
  for (const file of files) {
    const base = path.basename(file, path.extname(file));
    if (base !== "page") continue;
    const content = await readFileSafe(file);
    records.push(buildRecord(file, deriveAppRoute(file, appRoot), "app", content));
  }
  return records;
}

async function collectPagesRoutes(pagesRoot) {
  const files = [];
  await walk(pagesRoot, files);
  const records = [];
  for (const file of files) {
    const relPath = path.relative(pagesRoot, file).split(path.sep).join("/");
    const base = path.basename(file, path.extname(file));
    if (base.startsWith("_")) continue; // _app, _document, _error
    if (relPath.startsWith("api/")) continue; // API routes are not pages
    const content = await readFileSafe(file);
    records.push(buildRecord(file, derivePagesRoute(file, pagesRoot), "pages", content));
  }
  return records;
}

async function main() {
  const appCandidates = [path.join(ROOT, "app"), path.join(ROOT, "src", "app")];
  const pagesCandidates = [path.join(ROOT, "pages"), path.join(ROOT, "src", "pages")];

  let routes = [];
  let foundRouter = false;

  for (const candidate of appCandidates) {
    if (await exists(candidate)) {
      foundRouter = true;
      routes = routes.concat(await collectAppRoutes(candidate));
    }
  }
  for (const candidate of pagesCandidates) {
    if (await exists(candidate)) {
      foundRouter = true;
      routes = routes.concat(await collectPagesRoutes(candidate));
    }
  }

  if (!foundRouter) {
    warnings.push(
      "No app/, src/app/, pages/, or src/pages/ directory found. " +
        "Run this script from the client repo root. The manifest will list zero routes."
    );
  }

  routes.sort((a, b) => a.route.localeCompare(b.route));

  const manifest = {
    generatedAt: new Date().toISOString(),
    routeCount: routes.length,
    routes,
    warnings,
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  console.log(`OK: wrote ${rel(OUTPUT_FILE)} with ${routes.length} route(s).`);
  if (warnings.length) {
    console.warn(`WARN: ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error(`ERROR: scan-routes failed: ${err && err.message ? err.message : err}`);
  process.exitCode = 1;
});
