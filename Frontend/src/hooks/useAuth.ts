import { useContext } from "react";
import { AuthContext } from "../app/Providers";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within Providers");
  }
  return context;
}
