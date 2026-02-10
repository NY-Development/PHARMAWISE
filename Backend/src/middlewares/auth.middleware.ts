import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface AuthPayload {
  userId: string;
  role: string;
}

function getToken(req: Request) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");
  if (type === "Bearer" && token) {
    return token;
  }
  return null;
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = getToken(req);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as AuthPayload;
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export function authOptional(req: Request, _res: Response, next: NextFunction) {
  const token = getToken(req);
  if (!token) {
    return next();
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as AuthPayload;
    req.user = payload;
  } catch {
    req.user = undefined;
  }
  return next();
}
