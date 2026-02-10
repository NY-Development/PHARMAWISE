import { env } from "./env";

export const AI_CONFIG = {
  minConfidence: env.aiMinConfidence,
  maxSuggestions: env.aiMaxSuggestions
};
