import rateLimit from "express-rate-limit";
import { env } from "../config/env";

/** Global rate limiter — applies to all endpoints */
export const rateLimiter = rateLimit({
  windowMs: env.rateLimitWindow * 60 * 1000,
  max: env.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Stricter rate limiter for AI endpoints.
 * AI analysis is computationally expensive and must be protected
 * against abuse more aggressively than standard endpoints.
 */
export const aiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,                   // 20 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many AI analysis requests. Please wait before trying again.",
  },
});
