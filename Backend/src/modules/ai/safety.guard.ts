/**
 * AI Safety Guard — checks for terms that require professional medical guidance.
 *
 * Returns a structured result instead of throwing, so warnings can be
 * included in the response alongside the analysis.
 */

interface SafetyCheckResult {
  safe: boolean;
  warnings: string[];
}

const FORBIDDEN_TERMS = [
  "diagnose",
  "prescribe",
  "treatment plan",
] as const;

const WARNING_TERMS = [
  "dosage",
  "take",
  "mg",
  "overdose",
  "side effect",
] as const;

export function checkAISafety(input: string): SafetyCheckResult {
  const lower = input.toLowerCase();
  const warnings: string[] = [];

  // Hard block — these terms indicate the user is seeking medical advice
  for (const term of FORBIDDEN_TERMS) {
    if (lower.includes(term)) {
      throw new Error("Unsafe medical request");
    }
  }

  // Soft warnings — flag but allow through with advisory
  for (const term of WARNING_TERMS) {
    if (lower.includes(term)) {
      warnings.push(
        `Input contains "${term}" — this information is educational only and should not replace professional medical advice.`
      );
    }
  }

  return {
    safe: warnings.length === 0,
    warnings,
  };
}

/**
 * @deprecated Use checkAISafety instead — this exists for backward compatibility only.
 */
export function enforceAISafety(input: string): void {
  checkAISafety(input);
}
