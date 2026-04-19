import { apiClient } from "./apiClient";
import type { DrugSearchResponse, AdverseEventsResponse } from "../types/drug";

export async function searchDrugs(query: string) {
  const { data } = await apiClient.get<DrugSearchResponse>("/api/drugs/search", {
    params: { search: query },
  });
  return data;
}

export async function fetchAdverseEvents(drugName: string) {
  const { data } = await apiClient.get<AdverseEventsResponse>(
    "/api/drugs/adverse-events",
    {
      params: { drug: drugName },
    }
  );
  return data;
}
