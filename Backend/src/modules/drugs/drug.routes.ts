import { Router } from "express";
import { searchDrug, getAdverseEvents } from "./drug.controller";

const router = Router();

router.get("/search", searchDrug);
router.get("/adverse-events", getAdverseEvents);

export const drugRoutes = router;
