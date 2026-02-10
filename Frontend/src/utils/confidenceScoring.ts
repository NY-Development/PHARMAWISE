export function getConfidenceTone(value: number) {
  if (value < 0.65) return "low";
  if (value < 0.85) return "medium";
  return "high";
}
