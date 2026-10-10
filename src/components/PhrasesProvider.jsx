import { useEffect, useMemo } from "react";
import useFirestoreCollection from "../hooks/useFirestoreCollection";
import { PhrasesContext } from "../hooks/usePhrases";

/**
 * Loads the phrases collection once for the whole app so a page with many
 * {{phrase}} tokens still costs a single Firestore read.
 */
const PhrasesProvider = ({ children }) => {
  const { data, loading, error } = useFirestoreCollection("phrases", "order");

  const value = useMemo(
    () => ({
      phrases: new Map(data.map((phrase) => [phrase.id, phrase])),
      loading,
    }),
    [data, loading]
  );

  useEffect(() => {
    if (error) {
      console.error("[PhrasesProvider] Failed to load phrases:", error);
    }
  }, [error]);

  return <PhrasesContext.Provider value={value}>{children}</PhrasesContext.Provider>;
};

export default PhrasesProvider;
