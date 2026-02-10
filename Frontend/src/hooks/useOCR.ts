import { ensurePuterReady } from "../utils/puterGuard";

export async function extractTextFromFile(
  file: File,
  provider: "aws-textract" | "mistral" = "mistral"
): Promise<string> {
  // 🔐 Safety check happens ONCE here
  ensurePuterReady();

  const result = await puter.ai.img2txt(file, {
    provider,
  });

  return result ?? "";
}