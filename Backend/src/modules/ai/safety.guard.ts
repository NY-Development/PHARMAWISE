export function enforceAISafety(input: string) {
  const forbidden = [
    "diagnose",
    "prescribe",
    "dosage",
    "take",
    "mg",
    "treatment plan"
  ];

  forbidden.forEach((word) => {
    if (input.toLowerCase().includes(word)) {
      throw new Error("Unsafe medical request");
    }
  });
}
