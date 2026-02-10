import crypto from "crypto";
import { DoctorTemplate } from "../../models/DoctorTemplate.model";

export async function listTemplates(userId?: string) {
  const filter = userId ? { userId } : {};
  return DoctorTemplate.find(filter).sort({ createdAt: -1 });
}

export async function createTemplate(params: {
  userId?: string;
  title: string;
  simplifiedExplanation: string;
}) {
  const shareableLink = `share-${crypto.randomUUID()}`;
  return DoctorTemplate.create({
    userId: params.userId,
    title: params.title,
    simplifiedExplanation: params.simplifiedExplanation,
    shareableLink
  });
}
