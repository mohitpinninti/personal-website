import { usePhrase } from "../hooks/usePhrases";
import RotatingText from "./RotatingText";

/**
 * Renders one phrase from the phrases collection as rotating text.
 */
const Phrase = ({ id }) => {
  const phrase = usePhrase(id);

  if (!phrase) {
    console.error(`[Phrase] No phrase found for id "${id}".`);
    return null;
  }

  const variants = phrase.variants ?? [];
  if (variants.length === 0) {
    console.error(`[Phrase] Phrase "${id}" has no variants.`);
    return null;
  }

  return <RotatingText variants={variants} intervalMs={phrase.intervalMs} />;
};

export default Phrase;
