import type { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function SearchInput({ label, className = "", ...props }: SearchInputProps) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="search" className={`input ${className}`.trim()} {...props} />
    </label>
  );
}
