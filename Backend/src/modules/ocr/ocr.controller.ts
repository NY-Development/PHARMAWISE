import { Request, Response } from "express";
import { extractPossibleDrugs } from "./ocr.service";
import { Prescription } from "../../models/Prescription.model";
import { AuditLog } from "../../models/AuditLog.model";
import { sanitizeOcrText } from "../../utils/sanitizer";
import { t } from "../../utils/i18n";

export async function parseText(req: Request, res: Response) {
  const extractedText = sanitizeOcrText(String(req.body.extractedText || ""));

  if (!extractedText) {
    return res.status(400).json({ error: t("ocr.noText", req.lang) });
  }

  const result = extractPossibleDrugs(extractedText);

  const warnings: string[] = [];
  if (result.lowConfidence) {
    warnings.push(t("ocr.lowConfidence", req.lang));
  }

  await Prescription.create({
    userId: req.user?.userId,
    extractedText,
    confidence: result.confidence,
  });

  await AuditLog.create({
    userId: req.user?.userId,
    action: "ocr.parse",
    metadata: { drugCount: result.drugs.length, confidence: result.confidence },
  });

  return res.json({
    drugs: result.drugs,
    confidence: result.confidence,
    lowConfidence: result.lowConfidence,
    warnings,
    disclaimer: t("ocr.disclaimer", req.lang),
  });
}
