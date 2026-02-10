import { User } from "./user.model";

export function getUserById(userId: string) {
  return User.findById(userId).select("email role createdAt");
}

export function getUserByEmail(email: string) {
  return User.findOne({ email });
}
