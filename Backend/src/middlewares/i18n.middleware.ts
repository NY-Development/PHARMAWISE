import { NextFunction, Request, Response } from "express";
import { resolveLang } from "../utils/i18n";

/**
 * i18n middleware — detects the user's preferred language from the
 * Accept-Language header and attaches it to `req.lang`.
 *
 * Must be mounted AFTER body parsing but BEFORE routes.
 */
export function i18nMiddleware(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers["accept-language"] || "";
  req.lang = resolveLang(header);
  return next();
}
