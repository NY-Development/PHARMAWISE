import { AuthPayload } from "../middlewares/auth.middleware";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
      lang?: string;
    }
  }
}

export {};
