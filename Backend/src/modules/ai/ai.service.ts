import { AI_CONFIG } from "../../config/ai";
import { computeConfidence } from "../../utils/confidence";
import { sanitizeText } from "../../utils/sanitizer";
import { checkAISafety } from "./safety.guard";
import type { AIAnalysisResultDTO } from "../../types/dto";

/**
 * Analyzes educational text and returns a structured result.
 * NEVER provides medical advice, dosing, or diagnosis.
 */
export function analyzeEducationalText(input: string): Omit<AIAnalysisResultDTO, "disclaimer"> {
  const sanitized = sanitizeText(input);
  const safetyResult = checkAISafety(sanitized);

  const tokens = sanitized.match(/[A-Za-z][A-Za-z-]{2,}/g) || [];
  const unique = Array.from(new Set(tokens));
  const confidence = computeConfidence(unique.length, sanitized.length);

  const warnings: string[] = [...safetyResult.warnings];
  if (confidence < AI_CONFIG.minConfidence) {
    warnings.push("Low confidence — results may be incomplete or inaccurate.");
  }

  return {
    suggestions: unique.slice(0, AI_CONFIG.maxSuggestions),
    confidence,
    warnings,
    requiresManualReview: confidence < AI_CONFIG.minConfidence || safetyResult.warnings.length > 0,
  };
}
