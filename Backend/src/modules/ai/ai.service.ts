import { AI_CONFIG } from "../../config/ai";
import { computeConfidence } from "../../utils/confidence";
import { sanitizeText } from "../../utils/sanitizer";
import { enforceAISafety } from "./safety.guard";

export function analyzeEducationalText(input: string) {
  const sanitized = sanitizeText(input);
  enforceAISafety(sanitized);

  const tokens = sanitized.match(/[A-Za-z][A-Za-z-]{2,}/g) || [];
  const unique = Array.from(new Set(tokens));
  const confidence = computeConfidence(unique.length, sanitized.length);

  // Safety: never provide medical advice or dosing.
  return {
    explanation: "Educational summary based on provided text only.",
    keyTerms: unique.slice(0, AI_CONFIG.maxSuggestions),
    confidence,
    requiresManualReview: confidence < AI_CONFIG.minConfidence,
    disclaimer: "This is not medical advice and does not diagnose or prescribe."
  };
}
