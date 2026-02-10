import mongoose from "mongoose";
import { env } from "./env";
import { logger } from "../utils/logger";

export async function connectDb() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(env.mongodbUri);
  logger.info("MongoDB connected ✅");
}
