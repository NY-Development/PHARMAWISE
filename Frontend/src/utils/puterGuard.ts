export function ensurePuterReady(): void {
  if (typeof globalThis === "undefined" || typeof (globalThis as { puter?: Puter }).puter === "undefined") {
    throw new Error(
      "Puter.js is not loaded. Ensure https://js.puter.com/v2/ is included in index.html."
    );
  }
}