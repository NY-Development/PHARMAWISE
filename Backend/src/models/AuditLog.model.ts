import { Schema, model, Document, Types } from "mongoose";

export interface AuditLogDocument extends Document {
  userId?: Types.ObjectId;
  action: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

const AuditLogSchema = new Schema<AuditLogDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    action: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: false }
);

export const AuditLog = model<AuditLogDocument>("AuditLog", AuditLogSchema);
