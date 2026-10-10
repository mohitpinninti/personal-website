import { createContext, useContext } from "react";

export const PhrasesContext = createContext({ phrases: new Map(), loading: false });

export function usePhrase(id) {
  return useContext(PhrasesContext).phrases.get(id) ?? null;
}

export function usePhrasesLoading() {
  return useContext(PhrasesContext).loading;
}
