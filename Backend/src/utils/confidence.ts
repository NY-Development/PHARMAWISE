export function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function computeConfidence(matchCount: number, textLength: number) {
  if (textLength <= 0) return 0;
  const density = matchCount / Math.max(1, textLength / 25);
  return clamp(0.3 + density * 0.35, 0, 1);
}
