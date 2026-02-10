import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";
import { getUserById } from "./user.service";

const router = Router();

router.get("/me", requireAuth, async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const user = await getUserById(userId);
  return res.json({ user });
});

router.get("/:id", requireAuth, async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json({ user });
});

export const userRoutes = router;
