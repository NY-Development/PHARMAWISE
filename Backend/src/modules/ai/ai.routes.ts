import { Router } from "express";
import { explainText } from "./ai.controller";
import { requireFields } from "../../middlewares/validate.middleware";

const router = Router();

router.post("/explain", requireFields(["input"]), explainText);

export const aiRoutes = router;
