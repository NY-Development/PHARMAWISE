export function ensurePuterReady(): asserts puter is Puter {
  if (typeof puter === "undefined") {
    throw new Error(
      "Puter.js is not loaded. Ensure https://js.puter.com/v2/ is included in index.html."
    );
  }
}