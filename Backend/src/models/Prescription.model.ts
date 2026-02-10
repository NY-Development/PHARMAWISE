import { Schema, model, Document, Types } from "mongoose";

export interface PrescriptionDocument extends Document {
  userId?: Types.ObjectId;
  extractedText: string;
  confidence: number;
  createdAt: Date;
}

const PrescriptionSchema = new Schema<PrescriptionDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    extractedText: { type: String, required: true },
    confidence: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: false }
);

export const Prescription = model<PrescriptionDocument>("Prescription", PrescriptionSchema);
