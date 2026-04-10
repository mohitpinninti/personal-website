/**
 * Core quotes sync logic — shared between the Vercel cron function and the local script.
 *
 * Fetches quotes from Notion, filters for Display Status = "Website",
 * and writes them to the Firestore "quotes" collection.
 *
 * @param {object} db - Firestore Admin SDK instance
 * @param {string} notionApiKey - Notion integration secret
 * @param {string} notionDbId - Notion database ID for quotes
 * @returns {{ synced: number }} - Number of quotes synced
 */
export async function syncQuotesFromNotion(db, notionApiKey, notionDbId) {
  // Fetch all quotes from Notion
  const notionUrl = `https://api.notion.com/v1/databases/${notionDbId}/query`;
  const notionResponse = await fetch(notionUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
  });

  if (!notionResponse.ok) {
    throw new Error(`Notion API error: ${notionResponse.status} ${notionResponse.statusText}`);
  }

  const notionData = await notionResponse.json();

  // Filter and transform quotes
  const quotes = [];
  let order = 1;
  for (const entry of notionData.results) {
    const displayStatus =
      entry.properties["Display Status"]?.select?.name ?? null;
    if (displayStatus !== "Website") continue;

    const author =
      entry.properties.Author?.rich_text?.[0]?.text?.content ?? null;
    const quote =
      entry.properties.Quote?.rich_text?.[0]?.text?.content ?? null;

    if (!quote) continue;

    quotes.push({
      id: entry.id,
      author: author || "Unknown",
      quote,
      order: order++,
    });
  }

  // Clear existing quotes
  const quotesRef = db.collection("quotes");
  const existingDocs = await quotesRef.listDocuments();

  const deleteBatch = db.batch();
  for (const doc of existingDocs) {
    deleteBatch.delete(doc);
  }
  await deleteBatch.commit();

  // Write new quotes in batches (Firestore limit: 500 per batch)
  for (let i = 0; i < quotes.length; i += 500) {
    const batch = db.batch();
    const chunk = quotes.slice(i, i + 500);
    for (const q of chunk) {
      const { id, ...data } = q;
      batch.set(quotesRef.doc(id), data);
    }
    await batch.commit();
  }

  return { synced: quotes.length };
}
