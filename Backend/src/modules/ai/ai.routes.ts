import { Router } from "express";
import { explainText } from "./ai.controller";
import { validateBody } from "../../middlewares/validate.middleware";
import { aiExplainSchema } from "../../utils/schemas";
import { aiRateLimiter } from "../../middlewares/rateLimit.middleware";

const router = Router();

// AI endpoints get stricter rate limiting + Zod validation
router.post("/explain", aiRateLimiter, validateBody(aiExplainSchema), explainText);

export const aiRoutes = router;
