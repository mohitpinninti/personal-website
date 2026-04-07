/**
 * Firestore Download Script
 * 
 * Downloads all collections from Firestore into src/data/seed.json.
 * Use this to pull the latest data locally, make edits, then re-seed.
 * 
 * Workflow:
 *   1. npm run unseed        (download current Firestore data to seed.json)
 *   2. Edit src/data/seed.json as needed
 *   3. npm run seed           (upload changes back to Firestore)
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccountPath = join(__dirname, "..", "serviceAccountKey.json");
const tempDir = join(__dirname, "..", "temp");
const seedDataPath = join(tempDir, "seed.json");

let serviceAccount;
try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));
} catch {
  console.error("Error: serviceAccountKey.json not found in project root.");
  console.error("Download it from Firebase Console > Project Settings > Service Accounts.");
  process.exit(1);
}

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function downloadCollection(collectionName) {
  const snapshot = await db.collection(collectionName).orderBy("order").get();
  const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(`  ✓ ${collectionName}: ${docs.length} documents`);
  return docs;
}

async function downloadDocument(collectionName, docId) {
  const snapshot = await db.collection(collectionName).doc(docId).get();
  if (!snapshot.exists) {
    console.log(`  ⚠ ${collectionName}/${docId}: not found`);
    return null;
  }
  console.log(`  ✓ ${collectionName}/${docId}: 1 document`);
  return { id: snapshot.id, ...snapshot.data() };
}

async function main() {
  console.log("Downloading from Firestore...\n");

  try {
    const seedData = {
      jobs: await downloadCollection("jobs"),
      skills: await downloadCollection("skills"),
      projects: await downloadCollection("projects"),
      recentUpdates: await downloadCollection("recentUpdates"),
      intro: await downloadDocument("intro", "main"),
      socialLinks: await downloadCollection("socialLinks"),
    };

    mkdirSync(tempDir, { recursive: true });
    writeFileSync(seedDataPath, JSON.stringify(seedData, null, 2) + "\n", "utf8");

    console.log(`\n✓ Downloaded to temp/seed.json`);
    console.log("  Edit the file, then run: npm run seed");
  } catch (error) {
    console.error("\n✗ Download failed:", error.message);
    process.exit(1);
  }
}

main();
