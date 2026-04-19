import { Router } from "express";
import { parseText } from "./ocr.controller";
import { authOptional } from "../../middlewares/auth.middleware";
import { validateBody } from "../../middlewares/validate.middleware";
import { ocrParseSchema } from "../../utils/schemas";

const router = Router();

router.post("/parse", authOptional, validateBody(ocrParseSchema), parseText);

export const ocrRoutes = router;
