/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface PuterAI {
    img2txt: (
      input: string | File | Blob,
      options?: {
        provider?: "aws-textract" | "mistral";
        pages?: number[];
        testMode?: boolean;
      }
    ) => Promise<string>;
  }

  interface Puter {
    ai: PuterAI;
  }

  const puter: Puter;
}

export {};