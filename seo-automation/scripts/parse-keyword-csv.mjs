#!/usr/bin/env node
// Site OS - parse-keyword-csv.mjs
// Reads the newest Google Keyword Planner CSV export from docs/seo/keyword-exports/,
// normalizes the columns, deduplicates keywords, and writes normalized-keywords.json.
// Zero dependencies. Run from the client repo root.
// No fake data: metric values are carried through exactly as exported. Missing values stay null.
// This script never invents search volume, competition, CPC, or difficulty.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "docs", "seo", "keyword-exports");
const OUTPUT_DIR = path.join(ROOT, "docs", "seo");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "normalized-keywords.json");

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

async function readCsvBuffer(file) {
  const buf = await fs.readFile(file);
  // Google Keyword Planner often exports UTF-16 LE with a BOM and tab delimiters.
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
    return buf.toString("utf16le").replace(/^﻿/, "");
  }
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) {
    return buf.swap16().toString("utf16le").replace(/^﻿/, "");
  }
  return buf.toString("utf8").replace(/^﻿/, "");
}

function detectDelimiter(line) {
  const tabs = (line.match(/\t/g) || []).length;
  const commas = (line.match(/,/g) || []).length;
  const semis = (line.match(/;/g) || []).length;
  if (tabs >= commas && tabs >= semis && tabs > 0) return "\t";
  if (semis > commas && semis > 0) return ";";
  return ",";
}

function parseCsvLine(line, delimiter) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      out.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.map((v) => v.trim());
}

function findHeaderIndex(lines, delimiter) {
  for (let i = 0; i < Math.min(lines.length, 15); i++) {
    const cells = parseCsvLine(lines[i], delimiter).map((c) => c.toLowerCase());
    if (cells.some((c) => c === "keyword")) return i;
  }
  return -1;
}

function buildColumnMap(headerCells) {
  const lower = headerCells.map((h) => h.toLowerCase().trim());
  const find = (...names) => {
    for (const name of names) {
      const idx = lower.indexOf(name.toLowerCase());
      if (idx !== -1) return idx;
    }
    return -1;
  };
  return {
    keyword: find("keyword", "keyword text"),
    avgMonthlySearches: find("avg. monthly searches", "avg monthly searches", "searches"),
    competition: find("competition"),
    competitionIndex: find("competition (indexed value)", "competition indexed value"),
    bidLow: find("top of page bid (low range)", "top of page bid low range"),
    bidHigh: find("top of page bid (high range)", "top of page bid high range"),
    threeMonthChange: find("three month change", "3 month change"),
    yoyChange: find("yoy change", "year over year change"),
    currency: find("currency"),
  };
}

function cleanString(value) {
  if (value === undefined || value === null) return null;
  const v = String(value).trim();
  return v.length ? v : null;
}

function parseIntegerOrNull(value) {
  const v = cleanString(value);
  if (v === null) return null;
  // Only accept a clean integer (ignore ranges like "1K - 10K" to avoid inventing a number).
  const digits = v.replace(/,/g, "");
  if (/^-?\d+$/.test(digits)) return parseInt(digits, 10);
  return null;
}

async function newestCsv(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const csvFiles = [];
  for (const entry of entries) {
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".csv")) {
      const full = path.join(dir, entry.name);
      const stat = await fs.stat(full);
      csvFiles.push({ full, mtime: stat.mtimeMs });
    }
  }
  csvFiles.sort((a, b) => b.mtime - a.mtime);
  return csvFiles.length ? csvFiles[0].full : null;
}

async function main() {
  if (!(await exists(INPUT_DIR))) {
    console.log(
      `INFO: no keyword-exports folder at ${rel(INPUT_DIR)}. ` +
        "Export a Google Keyword Planner CSV and drop it there, then re-run. Nothing written."
    );
    return;
  }

  const csv = await newestCsv(INPUT_DIR);
  if (!csv) {
    console.log(
      `INFO: no .csv file found in ${rel(INPUT_DIR)}. ` +
        "Drop a Google Keyword Planner export there, then re-run. Nothing written."
    );
    return;
  }

  const raw = await readCsvBuffer(csv);
  const lines = raw.split(/\r\n|\n|\r/).filter((l) => l.trim().length > 0);
  if (!lines.length) {
    throw new Error(`CSV ${rel(csv)} appears to be empty.`);
  }

  const delimiter = detectDelimiter(lines[Math.min(lines.length - 1, 2)]);
  const headerIdx = findHeaderIndex(lines, delimiter);
  if (headerIdx === -1) {
    throw new Error(
      `Could not find a "Keyword" header row in ${rel(csv)}. ` +
        "Confirm this is a Google Keyword Planner export."
    );
  }

  const headerCells = parseCsvLine(lines[headerIdx], delimiter);
  const cols = buildColumnMap(headerCells);
  if (cols.keyword === -1) {
    throw new Error(`No "Keyword" column detected in ${rel(csv)}.`);
  }

  const seen = new Set();
  const keywords = [];
  let duplicateCount = 0;

  for (let i = headerIdx + 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i], delimiter);
    const keyword = cleanString(cells[cols.keyword]);
    if (!keyword) continue;
    const key = keyword.toLowerCase();
    if (seen.has(key)) {
      duplicateCount++;
      continue;
    }
    seen.add(key);

    const at = (idx) => (idx === -1 ? null : cleanString(cells[idx]));
    keywords.push({
      keyword,
      avgMonthlySearches: parseIntegerOrNull(cols.avgMonthlySearches === -1 ? null : cells[cols.avgMonthlySearches]),
      avgMonthlySearchesRaw: at(cols.avgMonthlySearches),
      competition: at(cols.competition),
      competitionIndex: parseIntegerOrNull(cols.competitionIndex === -1 ? null : cells[cols.competitionIndex]),
      topOfPageBidLow: at(cols.bidLow),
      topOfPageBidHigh: at(cols.bidHigh),
      threeMonthChange: at(cols.threeMonthChange),
      yoyChange: at(cols.yoyChange),
      currency: at(cols.currency),
    });
  }

  if (duplicateCount > 0) {
    warnings.push(`Skipped ${duplicateCount} duplicate keyword row(s) (case-insensitive).`);
  }
  if (!keywords.length) {
    warnings.push("No keyword rows were parsed. Check the CSV format and column headers.");
  }
  const withVolume = keywords.filter((k) => k.avgMonthlySearches !== null).length;
  if (keywords.length && withVolume === 0) {
    warnings.push(
      "No clean numeric search volumes were found (values may be ranges like '1K - 10K'). " +
        "Raw values are preserved in avgMonthlySearchesRaw. Volumes will not be invented."
    );
  }

  const output = {
    generatedAt: new Date().toISOString(),
    sourceCsv: rel(csv),
    keywordCount: keywords.length,
    keywords,
    warnings,
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf8");

  console.log(
    `OK: parsed ${keywords.length} keyword(s) from ${rel(csv)} into ${rel(OUTPUT_FILE)}.`
  );
  if (warnings.length) {
    console.warn(`WARN: ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error(`ERROR: parse-keyword-csv failed: ${err && err.message ? err.message : err}`);
  process.exitCode = 1;
});
