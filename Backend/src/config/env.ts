import dotenv from "dotenv";

dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT || 5000),
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: requireEnv("MONGODB_URI"),
  jwtSecret: requireEnv("JWT_SECRET"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  fdaApiKey: requireEnv("FDA_API_KEY"),
  fdaBaseUrl: process.env.FDA_BASE_URL || "https://api.fda.gov",
  aiMinConfidence: Number(process.env.AI_MIN_CONFIDENCE || 0.75),
  aiMaxSuggestions: Number(process.env.AI_MAX_SUGGESTIONS || 3),
  rateLimitWindow: Number(process.env.RATE_LIMIT_WINDOW || 15),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 100)
};
