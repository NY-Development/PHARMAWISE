export function LoadingState({ message = "Loading" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-sm text-slate-500">
      <span className="h-10 w-10 animate-pulse rounded-full bg-primary/20" />
      <p>{message}</p>
    </div>
  );
}
