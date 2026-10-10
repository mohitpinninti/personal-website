const segmenter =
  typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

/**
 * Splits text into user-perceived characters. Devanagari and Telugu build a single
 * visible character from a base letter plus combining marks, so splitting by code
 * point mid-animation would render broken clusters.
 */
export function splitGraphemes(text) {
  if (!text) {
    return [];
  }

  if (segmenter) {
    return Array.from(segmenter.segment(text), (entry) => entry.segment);
  }

  return Array.from(text);
}
