import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await registerUser(email, password);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ error: (err as Error).message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    return res.json(result);
  } catch (err) {
    const message = (err as Error).message;
    const status = message === "Invalid credentials" ? 401 : 400;
    return res.status(status).json({ error: message });
  }
}
