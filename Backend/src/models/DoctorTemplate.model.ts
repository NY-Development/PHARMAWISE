import { Schema, model, Document, Types } from "mongoose";

export interface DoctorTemplateDocument extends Document {
  userId?: Types.ObjectId;
  title: string;
  simplifiedExplanation: string;
  shareableLink: string;
  createdAt: Date;
}

const DoctorTemplateSchema = new Schema<DoctorTemplateDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, trim: true },
    simplifiedExplanation: { type: String, required: true },
    shareableLink: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: false }
);

export const DoctorTemplate = model<DoctorTemplateDocument>(
  "DoctorTemplate",
  DoctorTemplateSchema
);
