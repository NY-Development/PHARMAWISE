import { apiClient } from "./apiClient";

export interface AiExplainResponse {
  explanation: string;
  keyTerms: string[];
  confidence: number;
  requiresManualReview: boolean;
  disclaimer: string;
}

export async function explainEducationalText(input: string) {
  const { data } = await apiClient.post<AiExplainResponse>("/api/ai/explain", {
    input
  });
  return data;
}
