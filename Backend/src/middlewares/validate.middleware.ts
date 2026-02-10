import { NextFunction, Request, Response } from "express";

export function requireFields(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const missing = fields.filter((field) => !req.body?.[field]);
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
    }
    return next();
  };
}
