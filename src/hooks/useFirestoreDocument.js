import { useState, useEffect } from "react";
import { getDocument } from "../services/firestore";

export default function useFirestoreDocument(collectionName, docId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getDocument(collectionName, docId);
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        console.error(`[useFirestoreDocument] Error fetching "${collectionName}/${docId}":`, err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [collectionName, docId]);

  return { data, loading, error };
}
