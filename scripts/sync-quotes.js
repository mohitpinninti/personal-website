/**
 * Local Quotes Sync Script
 *
 * Fetches quotes from Notion and writes them to Firestore.
 * Uses the shared sync logic from lib/sync-quotes-core.js.
 *
 * Usage: npm run sync-quotes
 *
 * Requires:
 *   - serviceAccountKey.json in project root
 *   - NOTION_API_KEY and NOTION_QUOTES_DB in .env.local
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { config } from "dotenv";
import { syncQuotesFromNotion } from "../lib/sync-quotes-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local for Notion credentials
config({ path: join(__dirname, "..", ".env.local") });

const serviceAccountPath = join(__dirname, "..", "serviceAccountKey.json");

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
} catch {
  console.error("Error: serviceAccountKey.json not found in project root.");
  process.exit(1);
}

const NOTION_API_KEY = process.env.NOTION_API_KEY || process.env.VITE_NOTION_API_KEY;
const NOTION_QUOTES_DB = process.env.NOTION_QUOTES_DB || process.env.VITE_NOTION_QUOTES_DB;

if (!NOTION_API_KEY || !NOTION_QUOTES_DB) {
  console.error("Error: NOTION_API_KEY and NOTION_QUOTES_DB must be set in .env.local");
  console.error("(Also accepts VITE_NOTION_API_KEY / VITE_NOTION_QUOTES_DB for backwards compatibility)");
  process.exit(1);
}

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function main() {
  console.log("Syncing quotes from Notion to Firestore...\n");

  try {
    const result = await syncQuotesFromNotion(db, NOTION_API_KEY, NOTION_QUOTES_DB);
    console.log(`\n✓ Synced ${result.synced} quotes!`);
  } catch (error) {
    console.error("\n✗ Sync failed:", error.message);
    process.exit(1);
  }
}

main();
