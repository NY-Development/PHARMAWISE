import { Request, Response } from "express";
import { extractPossibleDrugs } from "./ocr.service";
import { Prescription } from "../../models/Prescription.model";
import { AuditLog } from "../../models/AuditLog.model";
import { sanitizeText } from "../../utils/sanitizer";

export async function parseText(req: Request, res: Response) {
  const extractedText = sanitizeText(String(req.body.extractedText || ""));

  if (!extractedText) {
    return res.status(400).json({ error: "No text provided" });
  }

  const result = extractPossibleDrugs(extractedText);

  await Prescription.create({
    userId: req.user?.userId,
    extractedText,
    confidence: result.confidence
  });

  await AuditLog.create({
    userId: req.user?.userId,
    action: "ocr.parse",
    metadata: { drugCount: result.drugs.length }
  });

  return res.json({
    drugs: result.drugs,
    confidence: result.confidence,
    disclaimer: "OCR results require human confirmation"
  });
}
