import { http } from "../../utils/httpClient";
import { FDA_CONFIG } from "../../config/fda";
import { DrugCache } from "../../models/DrugCache.model";
import { MemoryCache } from "../../utils/cache";
import { logger } from "../../utils/logger";

const CACHE_TTL_MS = 14 * 24 * 60 * 60 * 1000; // 14 days (MongoDB)

// In-memory LRU for hot queries — avoids DB roundtrip on popular drugs
const memoryCache = new MemoryCache<Record<string, unknown>>(30 * 60 * 1000); // 30 min

/**
 * Fetches drug label data from openFDA.
 *
 * Cache hierarchy:
 * 1. In-memory cache (30 min TTL) — instant
 * 2. MongoDB DrugCache (14 day TTL) — fast
 * 3. openFDA API — network call
 *
 * Searches both brand_name and generic_name for better match coverage.
 */
export async function fetchDrugLabel(search: string) {
  const normalized = search.toLowerCase().trim();

  // 1. Check in-memory cache
  const memCached = memoryCache.get(normalized);
  if (memCached) return memCached;

  // 2. Check MongoDB cache
  const now = new Date();
  const cached = await DrugCache.findOne({ query: normalized, expiresAt: { $gt: now } });
  if (cached) {
    memoryCache.set(normalized, cached.data as Record<string, unknown>);
    return cached.data;
  }

  try {
    const url = `${FDA_CONFIG.baseUrl}/drug/label.json`;
    const response = await http.get(url, {
      params: {
        api_key: FDA_CONFIG.apiKey,
        search: `openfda.brand_name:"${normalized}" OR openfda.generic_name:"${normalized}"`,
        limit: 1,
      },
    });

    const data = response.data;

    // Persist to both caches
    memoryCache.set(normalized, data);
    await DrugCache.findOneAndUpdate(
      { query: normalized },
      { data, expiresAt: new Date(Date.now() + CACHE_TTL_MS) },
      { upsert: true, new: true }
    );

    return data;
  } catch (err: any) {
    if (err.response && err.response.status === 404) {
      throw new Error("Drug not found");
    }
    logger.error("FDA drug label lookup failed", err as Error);
    throw new Error("FDA service unavailable");
  }
}

/**
 * Fetches adverse events from the openFDA Drug Adverse Event endpoint.
 *
 * Uses: https://api.fda.gov/drug/event.json
 * Searches by patient.drug.medicinalproduct and counts by reaction outcome.
 */
export async function fetchAdverseEvents(drugName: string) {
  const normalized = drugName.toLowerCase().trim();
  const cacheKey = `adverse:${normalized}`;

  // Check in-memory cache
  const memCached = memoryCache.get(cacheKey);
  if (memCached) return memCached;

  try {
    const url = `${FDA_CONFIG.baseUrl}/drug/event.json`;
    const response = await http.get(url, {
      params: {
        api_key: FDA_CONFIG.apiKey,
        search: `patient.drug.medicinalproduct:"${normalized}"`,
        count: "patient.reaction.reactionmeddrapt.exact",
        limit: 10,
      },
    });

    const results = response.data?.results || [];
    const events = results.map((r: { term: string; count: number }) => ({
      term: r.term,
      count: r.count,
    }));

    const result = { drugName: normalized, events };
    memoryCache.set(cacheKey, result);
    return result;
  } catch (err: any) {
    if (err.response?.status !== 404) {
      logger.warn("Adverse events lookup failed", err as Error);
    }
    return { drugName: normalized, events: [] };
  }
}
