import useRotationIndex from "../hooks/useRotationIndex";
import { splitGraphemes } from "../utils/text";

const stepMs = 110;

/**
 * Cycles a set of language variants in place. Every variant shares one grid cell
 * so the surrounding prose never reflows, and each variant is split into
 * graphemes so the blur can resolve across the word left to right.
 */
const RotatingText = ({ variants, intervalMs }) => {
  const { index, hoverProps } = useRotationIndex({
    count: variants.length,
    intervalMs,
  });

  return (
    <span className="rotating-text" {...hoverProps}>
      {variants.map((variant, variantIndex) => {
        const isActive = variantIndex === index;

        return (
          <span
            key={`${variant.lang}-${variant.text}`}
            className={isActive ? "rotating-text-variant is-active" : "rotating-text-variant"}
            lang={variant.lang}
            aria-hidden={isActive ? undefined : "true"}
          >
            {splitGraphemes(variant.text).map((character, characterIndex) => (
              <span
                key={characterIndex}
                className="rotating-text-character"
                style={{ transitionDelay: `${characterIndex * stepMs}ms` }}
              >
                {character}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default RotatingText;
