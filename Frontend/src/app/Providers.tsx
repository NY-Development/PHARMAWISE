import { type ReactNode, createContext, useCallback, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import type { UserRole } from "../types/user";

type TokenPayload = { role?: UserRole };

export type AuthContextValue = {
  token: string | null;
  role: UserRole;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function Providers({ children }: { children: ReactNode }) {
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("pharmawise_token")
  );

  const role = useMemo<UserRole>(() => {
    if (!token) return "patient";
    try {
      const payload = jwtDecode<TokenPayload>(token);
      return payload.role || "patient";
    } catch {
      return "patient";
    }
  }, [token]);

  const setToken = useCallback((next: string) => {
    localStorage.setItem("pharmawise_token", next);
    setTokenState(next);
  }, []);

  const clearToken = useCallback(() => {
    localStorage.removeItem("pharmawise_token");
    setTokenState(null);
  }, []);

  const value = useMemo(
    () => ({
      token,
      role,
      isAuthenticated: Boolean(token),
      setToken,
      clearToken
    }),
    [token, role, setToken, clearToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
