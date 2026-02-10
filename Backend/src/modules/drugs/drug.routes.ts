import { Router } from "express";
import { searchDrug } from "./drug.controller";

const router = Router();

router.get("/search", searchDrug);

export const drugRoutes = router;
