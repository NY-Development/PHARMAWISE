export function transformDrugData(raw: any) {
  const r = raw?.results?.[0];

  return {
    name: r?.openfda?.brand_name?.[0] ?? "Unknown",
    purpose: r?.purpose?.[0] ?? "Not specified",
    dosage: r?.dosage_and_administration?.[0] ?? "Consult professional",
    warnings: r?.warnings ?? [],
    pregnancy: r?.pregnancy_or_breast_feeding?.[0] ?? null,
    ingredients: {
      active: r?.active_ingredient ?? [],
      inactive: r?.inactive_ingredient ?? []
    },
    source: "openFDA (educational)"
  };
}
