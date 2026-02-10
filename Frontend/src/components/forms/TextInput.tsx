import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function TextInput({ label, className = "", ...props }: TextInputProps) {
  return (
    <label className="field">
      <span>{label}</span>
      <input className={`input ${className}`.trim()} {...props} />
    </label>
  );
}
