export function Badge({
  children,
  tone = "neutral"
}: {
  children: string;
  tone?: "neutral" | "info" | "warning" | "success";
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
