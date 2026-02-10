import { Request, Response } from "express";
import { createTemplate, listTemplates } from "./doctor.service";

export async function getTemplates(req: Request, res: Response) {
  const templates = await listTemplates(req.user?.userId);
  return res.json({ templates });
}

export async function postTemplate(req: Request, res: Response) {
  const { title, simplifiedExplanation } = req.body;
  if (!title || !simplifiedExplanation) {
    return res.status(400).json({ error: "Title and explanation are required" });
  }

  const template = await createTemplate({
    userId: req.user?.userId,
    title,
    simplifiedExplanation
  });

  return res.status(201).json({ template });
}

export async function shareSummary(req: Request, res: Response) {
  const { title, simplifiedExplanation } = req.body;
  if (!title || !simplifiedExplanation) {
    return res.status(400).json({ error: "Title and explanation are required" });
  }

  const template = await createTemplate({
    userId: req.user?.userId,
    title,
    simplifiedExplanation
  });

  return res.status(201).json({
    shareableLink: template.shareableLink,
    templateId: template.id
  });
}
