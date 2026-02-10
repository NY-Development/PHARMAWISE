import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ error: "Not found" });
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  logger.error("Request failed", err);
  res.status(500).json({ error: "Server error" });
}
