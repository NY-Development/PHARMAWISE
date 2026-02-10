import { apiClient } from "./apiClient";
import type { OCRParseResponse } from "../types/prescription";

export async function parseOcrText(extractedText: string) {
  const { data } = await apiClient.post<OCRParseResponse>(
    "/api/prescriptions/parse",
    {
      extractedText
    }
  );
  return data;
}
