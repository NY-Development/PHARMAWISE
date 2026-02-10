import { useEffect, useState } from "react";
import { searchDrugs } from "../services/drug.service";
import type { DrugSearchResponse } from "../types/drug";

export function useDrugSearch(query: string) {
  const [data, setData] = useState<DrugSearchResponse | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }

    const handle = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await searchDrugs(query);
        setData(response);
      } catch (err) {
        setError((err as Error).message || "Search failed");
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => clearTimeout(handle);
  }, [query]);

  return { data, isLoading, error };
}
