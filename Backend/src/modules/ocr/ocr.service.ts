import { computeConfidence } from "../../utils/confidence";

export function extractPossibleDrugs(text: string) {
  const tokens = text.match(/[A-Za-z][A-Za-z-]{2,}/g) || [];
  const unique = Array.from(new Set(tokens.map((token) => token.trim())));
  const drugs = unique.slice(0, 10);
  const confidence = computeConfidence(drugs.length, text.length);

  return { drugs, confidence };
}
