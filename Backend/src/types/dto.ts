// ─── Shared DTO types for PHARMAWISE ──────────────────────────────────
// These mirror the frontend types and define the API contract.

// ── Auth ──────────────────────────────────────────────────────────────

export type UserRole = "patient" | "clinician" | "admin";

export interface AuthTokenPayload {
  userId: string;
  role: UserRole;
}

export interface AuthResponseDTO {
  token: string;
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
}

// ── Drug ──────────────────────────────────────────────────────────────

export interface DrugInfoDTO {
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

export interface DrugSearchResponseDTO {
  data: DrugInfoDTO;
  disclaimer: string;
}

export interface AdverseEventDTO {
  term: string;
  count: number;
}

export interface AdverseEventsResponseDTO {
  drugName: string;
  events: AdverseEventDTO[];
  disclaimer: string;
}

// ── OCR ───────────────────────────────────────────────────────────────

export interface OCRParseResultDTO {
  drugs: string[];
  confidence: number;
  lowConfidence: boolean;
  warnings: string[];
  disclaimer: string;
}

// ── AI ────────────────────────────────────────────────────────────────

export interface AIAnalysisResultDTO {
  suggestions: string[];
  confidence: number;
  warnings: string[];
  requiresManualReview: boolean;
  disclaimer: string;
}

// ── Error ─────────────────────────────────────────────────────────────

export interface ApiErrorResponseDTO {
  error: string;
  details?: string[];
}
