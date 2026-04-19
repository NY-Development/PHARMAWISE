import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";
import { t } from "../../utils/i18n";

export async function register(req: Request, res: Response) {
  try {
    const { email, password, name, phone, role } = req.body;
    const result = await registerUser({ email, password, name, phone, role });
    return res.status(201).json(result);
  } catch (err) {
    const message = (err as Error).message;
    // Translate known error messages
    if (message === "Email already in use") {
      return res.status(400).json({ error: t("auth.emailInUse", req.lang) });
    }
    return res.status(400).json({ error: message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    return res.json(result);
  } catch (err) {
    const message = (err as Error).message;
    if (message === "Invalid credentials") {
      return res.status(401).json({ error: t("auth.invalidCredentials", req.lang) });
    }
    return res.status(400).json({ error: message });
  }
}
