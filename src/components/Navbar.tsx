import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "STORE", href: "/store" },
  { label: "RULES", href: "/rules" },
  { label: "DISCORD", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-primary-foreground font-display text-sm border-2 border-mc-grass">
            C
          </div>
          <span className="font-display text-lg tracking-tight text-foreground">
            CLOCK MC
          </span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-bold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors px-3 py-1.5 rounded ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/store"
          className="hidden md:inline-flex mc-btn text-primary-foreground text-xs px-4 py-2 rounded"
        >
          VISIT STORE
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`block text-sm font-bold ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
