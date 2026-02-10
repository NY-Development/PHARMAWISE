import { http } from "../../utils/httpClient";
import { FDA_CONFIG } from "../../config/fda";
import { DrugCache } from "../../models/DrugCache.model";

const CACHE_TTL_MS = 14 * 24 * 60 * 60 * 1000;

export async function fetchDrugLabel(search: string) {
  const normalized = search.toLowerCase();
  const now = new Date();

  const cached = await DrugCache.findOne({ query: normalized, expiresAt: { $gt: now } });
  if (cached) {
    return cached.data;
  }

  const url = `${FDA_CONFIG.baseUrl}/drug/label.json`;
  const response = await http.get(url, {
    params: {
      api_key: FDA_CONFIG.apiKey,
      search: normalized,
      limit: 1
    }
  });

  const data = response.data;
  await DrugCache.findOneAndUpdate(
    { query: normalized },
    { data, expiresAt: new Date(Date.now() + CACHE_TTL_MS) },
    { upsert: true, new: true }
  );

  return data;
}
