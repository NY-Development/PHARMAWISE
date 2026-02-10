import { Router } from "express";
import { parseText } from "./ocr.controller";
import { authOptional } from "../../middlewares/auth.middleware";
import { requireFields } from "../../middlewares/validate.middleware";

const router = Router();

router.post("/parse", authOptional, requireFields(["extractedText"]), parseText);

export const ocrRoutes = router;
