import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/packages", label: "Packages" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile menu is open + close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" aria-label={`${SITE.name} – home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-cta text-primary-foreground shadow-gold-glow">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg text-burgundy">Divya</p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground -mt-0.5">
              Bridal Artist
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              preload="intent"
              activeProps={{ className: "text-burgundy after:scale-x-100" }}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm font-medium text-charcoal/80 hover:text-burgundy transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={`tel:+91${SITE.phonePrimary}`}
            className="rounded-full border border-burgundy/20 px-4 py-2 text-sm font-medium text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
          >
            +91 {SITE.phonePrimary}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-burgundy hover:bg-secondary/40 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-border/60 bg-background animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-burgundy bg-secondary/50" }}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-3 text-base font-medium text-charcoal/80 min-h-11 flex items-center"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:+91${SITE.phonePrimary}`}
              className="mt-2 rounded-md gradient-cta px-3 py-3 text-center text-sm font-medium text-primary-foreground min-h-11 flex items-center justify-center"
            >
              Call +91 {SITE.phonePrimary}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
