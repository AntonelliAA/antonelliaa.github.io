// Splits a paragraph after its first sentence, so the opening line can carry the emphasis.
export function splitLead(text: string): [string, string] {
  const match = text.match(/^(.+?[.:])\s+(.*)$/s);
  return match ? [match[1], match[2]] : [text, ''];
}
