import { apiClient } from "./apiClient";
import type { AuthResponse } from "../types/user";

export async function login(email: string, password: string) {
  const { data } = await apiClient.post<AuthResponse>("/api/auth/login", {
    email,
    password
  });
  return data;
}

export async function register(email: string, password: string) {
  const { data } = await apiClient.post<AuthResponse>("/api/auth/register", {
    email,
    password
  });
  return data;
}
