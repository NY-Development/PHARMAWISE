export type UserRole = "patient" | "clinician" | "admin";

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
}
