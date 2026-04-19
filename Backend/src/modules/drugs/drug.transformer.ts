import type { DrugInfoDTO } from "../../types/dto";

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Transforms raw openFDA label JSON into a clean, typed DTO.
 * Extracts both brand and generic names for comprehensive drug info.
 */
export function transformDrugData(raw: any): DrugInfoDTO {
  const r = raw?.results?.[0];

  const brandName = r?.openfda?.brand_name?.[0] ?? "Unknown";
  const genericName = r?.openfda?.generic_name?.[0] ?? "Not available";

  return {
    name: brandName,
    genericName,
    purpose: r?.purpose?.[0] ?? "Not specified",
    dosage: r?.dosage_and_administration?.[0] ?? "Consult professional",
    warnings: r?.warnings ?? [],
    pregnancy: r?.pregnancy_or_breast_feeding?.[0] ?? null,
    ingredients: {
      active: r?.active_ingredient ?? [],
      inactive: r?.inactive_ingredient ?? [],
    },
    adverseEvents: [],  // Populated separately via fetchAdverseEvents
    source: "openFDA (educational)",
  };
}
