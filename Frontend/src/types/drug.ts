export interface DrugInfo {
  name: string;
  genericName: string;
  purpose: string;
  dosage: string;
  warnings: string[];
  pregnancy: string | null;
  ingredients: {
    active: string[];
    inactive: string[];
  };
  adverseEvents: string[];
  source: string;
}

export interface DrugSearchResponse {
  data: DrugInfo;
  disclaimer: string;
}

export interface AdverseEvent {
  term: string;
  count: number;
}

export interface AdverseEventsResponse {
  drugName: string;
  events: AdverseEvent[];
  disclaimer: string;
}
