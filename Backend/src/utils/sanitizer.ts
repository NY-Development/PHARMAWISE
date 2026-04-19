/**
 * Sanitizes user-provided text input by:
 * 1. Stripping HTML tags (prevents XSS in stored/reflected content)
 * 2. Removing script-like patterns
 * 3. Collapsing control characters and whitespace
 */
export function sanitizeText(input: string): string {
  return input
    // Strip HTML tags
    .replace(/<[^>]*>/g, "")
    // Remove common script injection patterns
    .replace(/javascript\s*:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    // Strip control characters (keep newlines for OCR)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    // Collapse multiple spaces
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Sanitizes text specifically for OCR processing.
 * More aggressive than sanitizeText — removes all non-printable chars.
 */
export function sanitizeOcrText(input: string): string {
  return sanitizeText(input)
    // Remove non-ASCII characters that OCR sometimes produces
    .replace(/[^\x20-\x7E\u00C0-\u024F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
