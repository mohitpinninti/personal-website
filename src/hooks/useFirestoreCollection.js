import { useState, useEffect } from "react";
import { getCollection } from "../services/firestore";

export default function useFirestoreCollection(collectionName, orderByField = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await getCollection(collectionName, orderByField);
        if (!cancelled) {
          setData(results);
        }
      } catch (err) {
        console.error(`[useFirestoreCollection] Error fetching "${collectionName}":`, err);
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
  }, [collectionName, orderByField]);

  return { data, loading, error };
}
