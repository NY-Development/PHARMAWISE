import { Request, Response } from "express";
import { analyzeEducationalText } from "./ai.service";
import { t } from "../../utils/i18n";

export async function explainText(req: Request, res: Response) {
  try {
    const input = String(req.body.input || "");
    const result = analyzeEducationalText(input);

    return res.json({
      ...result,
      disclaimer: t("ai.disclaimer", req.lang),
    });
  } catch (err) {
    const message = (err as Error).message;
    if (message === "Unsafe medical request") {
      return res.status(400).json({ error: t("ai.unsafeRequest", req.lang) });
    }
    return res.status(400).json({ error: message });
  }
}
