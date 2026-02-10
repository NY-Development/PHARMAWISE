import { app } from "./app";
import { env } from "./config/env";
import { connectDb } from "./config/db";
import { logger } from "./utils/logger";

async function startServer() {
  await connectDb();

  app.listen(env.port, () => {
    logger.info(`Server running on port ${env.port}`);
  });
}

startServer().catch((err) => {
  logger.error("Failed to start server", err);
  process.exit(1);
});
