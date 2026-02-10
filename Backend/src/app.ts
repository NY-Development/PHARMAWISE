import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env";
import { rateLimiter } from "./middlewares/rateLimit.middleware";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";
import { authRoutes } from "./modules/auth/auth.routes";
import { drugRoutes } from "./modules/drugs/drug.routes";
import { ocrRoutes } from "./modules/ocr/ocr.routes";
import { aiRoutes } from "./modules/ai/ai.routes";
import { userRoutes } from "./modules/users/user.routes";
import { doctorRoutes } from "./modules/doctor/doctor.routes";

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));

if (env.nodeEnv !== "development") {
  app.use((req, res, next) => {
    if (req.secure || req.headers["x-forwarded-proto"] === "https") {
      return next();
    }
    return res.status(403).json({ error: "HTTPS required" });
  });
}

app.use(rateLimiter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/drugs", drugRoutes);
app.use("/api/ocr", ocrRoutes);
app.use("/api/prescriptions", ocrRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/users", userRoutes);
app.use("/api/doctor", doctorRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export { app };
