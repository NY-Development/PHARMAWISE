import { Link } from "react-router-dom";
import { Badge } from "../ui/Badge";

export function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" className="brand-name">
          Pharmawise
        </Link>
        <Badge tone="info">Educational</Badge>
      </div>
      <nav className="site-nav">
        <Link to="/drug-search">Drug Search</Link>
        <Link to="/prescription/upload">Prescription OCR</Link>
        <Link to="/ai/education">AI Education</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/login">Sign in</Link>
      </nav>
    </header>
  );
}
