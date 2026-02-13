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
const allowedOrigins = [
  "http://localhost:5173",
  "https://pharmawise-delta.vercel.app",
  "https://pharma-wise.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman, server-to-server calls
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
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
export default app;
