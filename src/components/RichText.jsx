import { Fragment } from "react";
import { usePhrasesLoading } from "../hooks/usePhrases";
import { parseSegments } from "../utils/richText";
import Phrase from "./Phrase";

/**
 * Renders a content string, expanding any {{phraseId}} tokens it contains.
 * Use it anywhere a Firestore string is rendered as prose.
 */
const RichText = ({ text, as: Wrapper = "span", ...rest }) => {
  const phrasesLoading = usePhrasesLoading();
  const segments = parseSegments(text);
  const hasPhrase = segments.some((segment) => segment.type === "phrase");

  if (hasPhrase && phrasesLoading) {
    return null;
  }

  return (
    <Wrapper {...rest}>
      {segments.map((segment, index) =>
        segment.type === "phrase" ? (
          <Phrase key={index} id={segment.value} />
        ) : (
          <Fragment key={index}>{segment.value}</Fragment>
        )
      )}
    </Wrapper>
  );
};

export default RichText;
