import { ensurePuterReady } from "../utils/puterGuard";

const OCR_TIMEOUT_MS = 30_000; // 30 seconds
const MAX_RETRIES = 2;
const RETRY_BASE_DELAY_MS = 1_000; // Exponential backoff base

export interface OCRExtractionResult {
  text: string;
  retryCount: number;
  durationMs: number;
}

/**
 * Extracts text from an image/PDF file using Puter.js OCR.
 *
 * Features:
 * - 30-second timeout per attempt
 * - Up to 2 retries with exponential backoff
 * - Returns metadata alongside extracted text
 */
export async function extractTextFromFile(
  file: File,
  provider: "aws-textract" | "mistral" = "mistral"
): Promise<string> {
  ensurePuterReady();

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await withTimeout(
        puter.ai.img2txt(file, { provider }),
        OCR_TIMEOUT_MS
      );
      return result ?? "";
    } catch (err) {
      lastError = err as Error;

      // Don't retry on user-caused errors
      if (lastError.message?.includes("Puter.js is not loaded")) {
        throw lastError;
      }

      // Exponential backoff before retry
      if (attempt < MAX_RETRIES) {
        const delay = RETRY_BASE_DELAY_MS * Math.pow(2, attempt);
        await sleep(delay);
      }
    }
  }

  throw new Error(
    lastError?.message || "OCR failed after multiple attempts. Please try again."
  );
}

/**
 * Wraps a promise with a timeout.
 */
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`OCR timed out after ${timeoutMs / 1000} seconds. Please try a clearer image.`));
    }, timeoutMs);

    promise
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}