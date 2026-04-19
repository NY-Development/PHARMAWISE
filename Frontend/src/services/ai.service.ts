import { apiClient } from "./apiClient";

export interface AiExplainResponse {
  suggestions: string[];
  confidence: number;
  warnings: string[];
  requiresManualReview: boolean;
  disclaimer: string;
}

export async function explainEducationalText(input: string) {
  const { data } = await apiClient.post<AiExplainResponse>("/api/ai/explain", {
    input,
  });
  return data;
}
