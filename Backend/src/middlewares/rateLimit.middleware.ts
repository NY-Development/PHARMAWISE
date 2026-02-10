import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const rateLimiter = rateLimit({
  windowMs: env.rateLimitWindow * 60 * 1000,
  max: env.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false
});
