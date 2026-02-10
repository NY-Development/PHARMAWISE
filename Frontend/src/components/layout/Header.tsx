import { Link } from "react-router-dom";
import { Badge } from "../ui/Badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-lg font-bold tracking-tight text-[#1f6bff]">
            Pharmawise
          </Link>
          <Badge tone="info">Educational</Badge>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-medium text-slate-600 hover:text-[#1f6bff]" to="/drug-search">
            Drug Search
          </Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-[#1f6bff]" to="/prescription/upload">
            Prescription OCR
          </Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-[#1f6bff]" to="/ai/education">
            AI Education
          </Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-[#1f6bff]" to="/plans">
            Plans
          </Link>
          <Link className="text-sm font-semibold text-[#1f6bff] hover:text-[#1758d6]" to="/login">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}