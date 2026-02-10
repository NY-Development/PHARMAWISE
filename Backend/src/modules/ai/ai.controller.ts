import { Request, Response } from "express";
import { analyzeEducationalText } from "./ai.service";

export async function explainText(req: Request, res: Response) {
  try {
    const input = String(req.body.input || "");
    const result = analyzeEducationalText(input);
    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
}
