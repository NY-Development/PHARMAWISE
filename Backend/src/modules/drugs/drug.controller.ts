import { Request, Response } from "express";
import { fetchDrugLabel } from "./drug.service";
import { transformDrugData } from "./drug.transformer";

export async function searchDrug(req: Request, res: Response) {
  const search = String(req.query.search || "").trim();
  if (!search) {
    return res.status(400).json({ error: "Search query required" });
  }

  try {
    const raw = await fetchDrugLabel(search);
    const data = transformDrugData(raw);

    // Safety: only return transformed, educational data.
    return res.json({
      data,
      disclaimer: "openFDA data is educational and not medical advice"
    });
  } catch {
    return res.status(502).json({ error: "FDA service unavailable" });
  }
}
