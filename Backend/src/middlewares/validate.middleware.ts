import { NextFunction, Request, Response } from "express";
import { z } from "zod";

/**
 * Legacy field-presence validator — kept for backward compatibility.
 */
export function requireFields(fields: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const missing = fields.filter((field) => !req.body?.[field]);
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing fields: ${missing.join(", ")}` });
    }
    return next();
  };
}

/**
 * Zod schema validator middleware.
 *
 * Validates `req.body` against the provided schema.
 * On success, replaces `req.body` with the parsed (and transformed) data.
 * On failure, returns 400 with structured error details.
 */
export function validateBody(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map((issue) => issue.message);
      return res.status(400).json({
        error: errors[0] || "Invalid input",
        details: errors,
      });
    }
    // Replace body with parsed/transformed data
    req.body = result.data;
    return next();
  };
}

/**
 * Zod schema validator for query parameters.
 *
 * Validates `req.query` against the provided schema.
 */
export function validateQuery(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
      const errors = result.error.issues.map((issue) => issue.message);
      return res.status(400).json({
        error: errors[0] || "Invalid query parameters",
        details: errors,
      });
    }
    // Merge parsed values back into the existing query object
    Object.assign(req.query, result.data);
    return next();
  };
}
