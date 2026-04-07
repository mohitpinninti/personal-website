/**
 * Firestore Seeding Script
 * 
 * Populates Firestore with data from src/data/seed.json.
 * Requires a Firebase service account key file.
 * 
 * Usage:
 *   1. Download your service account key from Firebase Console
 *   2. Save it as serviceAccountKey.json in the project root
 *   3. Run: npm run seed
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccountPath = join(__dirname, "..", "serviceAccountKey.json");
const seedDataPath = join(__dirname, "..", "temp", "seed.json");

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

const seedData = JSON.parse(readFileSync(seedDataPath, "utf8"));

async function seedCollection(collectionName, documents) {
  const batch = db.batch();

  for (const doc of documents) {
    const docId = doc.id;
    const { id, ...data } = doc;
    batch.set(db.collection(collectionName).doc(docId), data);
  }

  await batch.commit();
  console.log(`  ✓ ${collectionName}: ${documents.length} documents`);
}

async function seedDocument(collectionName, document) {
  const docId = document.id;
  const { id, ...data } = document;
  await db.collection(collectionName).doc(docId).set(data);
  console.log(`  ✓ ${collectionName}: 1 document`);
}

async function main() {
  console.log("Seeding Firestore...\n");

  try {
    await seedCollection("jobs", seedData.jobs);
    await seedCollection("skills", seedData.skills);
    await seedCollection("projects", seedData.projects);
    await seedCollection("recentUpdates", seedData.recentUpdates);
    await seedDocument("intro", seedData.intro);
    await seedCollection("socialLinks", seedData.socialLinks);

    console.log("\n✓ Seeding complete!");
  } catch (error) {
    console.error("\n✗ Seeding failed:", error.message);
    process.exit(1);
  }
}

main();
