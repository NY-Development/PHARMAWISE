import type { ChangeEvent } from "react";

export function FileDrop({
  label,
  onFile
}: {
  label: string;
  onFile: (file: File | null) => void;
}) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    onFile(file);
  }

  return (
    <label className="field file-drop">
      <span>{label}</span>
      <input type="file" onChange={handleChange} />
    </label>
  );
}
