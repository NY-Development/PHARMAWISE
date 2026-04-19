import { apiClient } from "./apiClient";
import type { AuthResponse } from "../types/user";

export async function login(email: string, password: string) {
  const { data } = await apiClient.post<AuthResponse>("/api/auth/login", {
    email,
    password,
  });
  return data;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  role?: string;
}

export async function register(payload: RegisterPayload) {
  const { data } = await apiClient.post<AuthResponse>("/api/auth/register", payload);
  return data;
}
