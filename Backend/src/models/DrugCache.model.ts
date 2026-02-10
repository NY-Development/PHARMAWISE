import { Schema, model, Document } from "mongoose";

export interface DrugCacheDocument extends Document {
  query: string;
  data: Record<string, unknown>;
  expiresAt: Date;
}

const DrugCacheSchema = new Schema<DrugCacheDocument>(
  {
    query: { type: String, unique: true, required: true },
    data: { type: Schema.Types.Mixed, required: true },
    expiresAt: { type: Date, index: { expires: "14d" }, required: true }
  },
  { timestamps: true }
);

export const DrugCache = model<DrugCacheDocument>("DrugCache", DrugCacheSchema);
