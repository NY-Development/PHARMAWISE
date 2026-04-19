import { Router } from "express";
import { register, login } from "./auth.controller";
import { validateBody } from "../../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../../utils/schemas";

const router = Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);

export const authRoutes = router;
