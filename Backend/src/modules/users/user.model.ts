import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  passwordHash: string;
  name?: string;
  phone?: string;
  role: "patient" | "clinician" | "admin";
  createdAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, trim: true },
    phone: { type: String, trim: true },
    role: { type: String, default: "patient" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

export const User = model<UserDocument>("User", UserSchema);
