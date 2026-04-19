export interface OCRParseResponse {
  drugs: string[];
  confidence: number;
  lowConfidence: boolean;
  warnings: string[];
  disclaimer: string;
}
