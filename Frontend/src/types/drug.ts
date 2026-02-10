export interface DrugInfo {
  name: string;
  purpose: string;
  dosage: string;
  warnings: string[];
  pregnancy: string | null;
  ingredients: {
    active: string[];
    inactive: string[];
  };
  source: string;
}

export interface DrugSearchResponse {
  data: DrugInfo;
  disclaimer: string;
}
