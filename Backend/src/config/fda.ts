import { env } from "./env";

export const FDA_CONFIG = {
  baseUrl: env.fdaBaseUrl,
  apiKey: env.fdaApiKey,
  timeout: 8000
};
