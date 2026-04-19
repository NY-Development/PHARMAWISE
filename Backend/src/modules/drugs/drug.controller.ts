import { Request, Response } from "express";
import { fetchDrugLabel, fetchAdverseEvents } from "./drug.service";
import { transformDrugData } from "./drug.transformer";
import { t } from "../../utils/i18n";

export async function searchDrug(req: Request, res: Response) {
  const search = String(req.query.search || "").trim();
  if (!search) {
    return res.status(400).json({ error: t("drug.searchRequired", req.lang) });
  }

  try {
    const raw = await fetchDrugLabel(search);
    const data = transformDrugData(raw);

    return res.json({
      data,
      disclaimer: t("drug.disclaimer", req.lang),
    });
  } catch (err) {
    if ((err as Error).message === "Drug not found") {
      return res.status(404).json({ error: t("drug.notFound", req.lang) || "Drug information not found" });
    }
    return res.status(502).json({ error: t("drug.serviceUnavailable", req.lang) });
  }
}

export async function getAdverseEvents(req: Request, res: Response) {
  const drugName = String(req.query.drug || "").trim();
  if (!drugName) {
    return res.status(400).json({ error: t("drug.searchRequired", req.lang) });
  }

  try {
    const result = await fetchAdverseEvents(drugName);

    return res.json({
      ...result,
      disclaimer: t("drug.disclaimer", req.lang),
    });
  } catch {
    return res.status(502).json({ error: t("drug.serviceUnavailable", req.lang) });
  }
}
