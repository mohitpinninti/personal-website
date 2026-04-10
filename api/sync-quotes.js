import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { syncQuotesFromNotion } from "../lib/sync-quotes-core.js";

/**
 * Vercel Cron Job: Sync quotes from Notion to Firestore
 *
 * Env vars required (set in Vercel project settings):
 *   NOTION_API_KEY         — Notion integration secret
 *   NOTION_QUOTES_DB       — Notion database ID for quotes
 *   FIREBASE_SERVICE_ACCOUNT — Firebase service account key (JSON string)
 *   CRON_SECRET            — Secret to protect the endpoint
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const authHeader = req.headers["authorization"];
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const NOTION_QUOTES_DB = process.env.NOTION_QUOTES_DB;
  const FIREBASE_SERVICE_ACCOUNT = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!NOTION_API_KEY || !NOTION_QUOTES_DB || !FIREBASE_SERVICE_ACCOUNT) {
    return res.status(500).json({ error: "Missing required environment variables" });
  }

  try {
    if (getApps().length === 0) {
      const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT);
      initializeApp({ credential: cert(serviceAccount) });
    }
    const db = getFirestore();

    const result = await syncQuotesFromNotion(db, NOTION_API_KEY, NOTION_QUOTES_DB);

    return res.status(200).json({
      success: true,
      ...result,
      message: `Synced ${result.synced} quotes from Notion to Firestore`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
