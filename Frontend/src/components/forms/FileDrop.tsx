import type { ChangeEvent } from "react";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/bmp",
  "application/pdf",
]);

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export function FileDrop({
  label,
  onFile,
  onError,
}: {
  label: string;
  onFile: (file: File | null) => void;
  onError?: (message: string) => void;
}) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;

    if (file) {
      // Validate file type
      if (!ALLOWED_TYPES.has(file.type)) {
        onError?.("Only image files (JPEG, PNG, GIF, WebP, BMP) and PDFs are allowed.");
        event.target.value = "";
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        onError?.("File size must be less than 10MB.");
        event.target.value = "";
        return;
      }
    }

    onFile(file);
  }

  return (
    <label className="field file-drop">
      <span>{label}</span>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={handleChange}
      />
    </label>
  );
}
