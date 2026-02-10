import { apiClient } from "./apiClient";
import type { DrugSearchResponse } from "../types/drug";

export async function searchDrugs(query: string) {
  const { data } = await apiClient.get<DrugSearchResponse>("/api/drugs/search", {
    params: {
      search: query,
      q: query
    }
  });
  return data;
}
