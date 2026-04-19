import { z } from "zod";

// ─── Auth Schemas ────────────────────────────────────────────────────

export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .max(254, "Email too long")
    .transform((v) => v.toLowerCase().trim()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password too long"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .transform((v) => v.toLowerCase().trim()),
  password: z.string().min(1, "Password is required"),
});

// ─── OCR Schema ──────────────────────────────────────────────────────

export const ocrParseSchema = z.object({
  extractedText: z
    .string()
    .min(1, "No text provided")
    .max(51200, "Text exceeds 50KB limit")
    .refine(
      (val) => !/<script[\s>]/i.test(val),
      { message: "Invalid content detected" }
    ),
});

// ─── AI Schema ───────────────────────────────────────────────────────

export const aiExplainSchema = z.object({
  input: z
    .string()
    .min(1, "Input is required")
    .max(10240, "Input exceeds 10KB limit")
    .refine(
      (val) => !/<script[\s>]/i.test(val),
      { message: "Invalid content detected" }
    ),
});

// ─── Drug Search Schema ──────────────────────────────────────────────

export const drugSearchSchema = z.object({
  search: z
    .string()
    .min(1, "Search query required")
    .max(200, "Search query too long")
    .transform((v) => v.trim()),
});
