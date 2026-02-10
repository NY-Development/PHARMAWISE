import { Router } from "express";
import { register, login } from "./auth.controller";
import { requireFields } from "../../middlewares/validate.middleware";

const router = Router();

router.post("/register", requireFields(["email", "password"]), register);
router.post("/login", requireFields(["email", "password"]), login);

export const authRoutes = router;
