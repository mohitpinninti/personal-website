const tokenPattern = /\{\{\s*([\w-]+)\s*\}\}/g;

/**
 * Splits a content string into plain text runs and {{phraseId}} tokens. A string
 * without tokens yields a single text segment, so untokenized copy is unaffected.
 */
export function parseSegments(text) {
  const segments = [];
  let lastIndex = 0;

  for (const match of (text ?? "").matchAll(tokenPattern)) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: "phrase", value: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < (text ?? "").length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  return segments;
}
