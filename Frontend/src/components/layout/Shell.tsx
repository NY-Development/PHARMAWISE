import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">{children}</div>;
}
