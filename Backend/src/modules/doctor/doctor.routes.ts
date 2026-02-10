import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";
import { getTemplates, postTemplate, shareSummary } from "./doctor.controller";

const router = Router();

router.use(requireAuth);
router.use((req, res, next) => {
	const role = req.user?.role;
	if (role === "clinician" || role === "admin") {
		return next();
	}
	return res.status(403).json({ error: "Forbidden" });
});

router.get("/templates", getTemplates);
router.post("/templates", postTemplate);
router.post("/share-summary", shareSummary);

export const doctorRoutes = router;
