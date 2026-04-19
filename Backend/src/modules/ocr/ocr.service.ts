import { computeConfidence } from "../../utils/confidence";
import { sanitizeText } from "../../utils/sanitizer";

// Common non-drug words that OCR frequently extracts
const STOP_WORDS = new Set([
  "the", "and", "for", "with", "from", "this", "that", "not", "are", "was",
  "were", "been", "have", "has", "had", "will", "would", "could", "should",
  "may", "can", "per", "day", "take", "use", "one", "two", "three", "four",
  "five", "once", "twice", "daily", "after", "before", "each", "every",
  "tablet", "tablets", "capsule", "capsules", "oral", "dose", "times",
  "doctor", "patient", "name", "date", "prescription", "quantity", "refill",
  "pharmacy", "address", "phone", "number", "sig",
]);

interface OCRExtractionResult {
  drugs: string[];
  confidence: number;
  lowConfidence: boolean;
}

/**
 * Extracts possible drug names from OCR text.
 *
 * Pipeline:
 * 1. Sanitize input
 * 2. Tokenize (alphanumeric words ≥ 3 chars)
 * 3. Filter stop words
 * 4. Normalize casing (title-case)
 * 5. Deduplicate
 * 6. Compute confidence score
 */
export function extractPossibleDrugs(text: string): OCRExtractionResult {
  const sanitized = sanitizeText(text);
  const tokens = sanitized.match(/[A-Za-z][A-Za-z-]{2,}/g) || [];

  const unique = Array.from(
    new Set(
      tokens
        .map((token) => token.trim().toLowerCase())
        .filter((token) => !STOP_WORDS.has(token))
    )
  );

  // Normalize to title case (e.g., "amoxicillin" → "Amoxicillin")
  const drugs = unique
    .slice(0, 10)
    .map((drug) => drug.charAt(0).toUpperCase() + drug.slice(1));

  const confidence = computeConfidence(drugs.length, sanitized.length);
  const lowConfidence = confidence < 0.5;

  return { drugs, confidence, lowConfidence };
}
