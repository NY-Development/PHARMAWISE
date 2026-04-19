import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../../config/env";
import { User, type UserDocument } from "../users/user.model";

async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

interface RegisterInput {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  role?: string;
}

const ALLOWED_ROLES = ["patient", "clinician", "admin"] as const;

export async function registerUser(input: RegisterInput) {
  const { email, password, name, phone, role } = input;

  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("Email already in use");
  }

  // Sanitize role — only allow valid roles, default to "patient"
  const validRole = ALLOWED_ROLES.includes(role as (typeof ALLOWED_ROLES)[number])
    ? (role as UserDocument["role"])
    : "patient";

  const passwordHash = await hashPassword(password);
  const user = await User.create({
    email,
    passwordHash,
    name: name?.trim(),
    phone: phone?.trim(),
    role: validRole,
  });

  const token = jwt.sign({ userId: user.id, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  });

  return {
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  };
}

export async function loginUser(email: string, password: string) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  });

  return {
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  };
}
