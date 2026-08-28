"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/components/language-context";
import { navLinks, company } from "@/lib/sindo-data";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("tentang");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // active section detection
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      let current = navLinks[0]?.id;
      for (const s of sections) {
        if (s && s.offsetTop <= y) current = s.id;
      }
      setActive(current ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/15"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => go("hero")} className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo-sindo.png"
              alt="Sindo Groups Logo"
              className="h-9 w-9 lg:h-11 lg:w-11 object-contain drop-shadow"
            />
            <div className="text-left leading-none">
              <div className="font-serif font-bold text-base lg:text-lg text-white tracking-wide">
                SINDO <span className="text-gold">GROUPS</span>
              </div>
              <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.18em] text-white/55 mt-0.5 hidden sm:block">
                {t(company.tagline)}
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "px-2.5 xl:px-3 py-2 text-[12px] xl:text-[13px] font-medium uppercase tracking-wide rounded-md transition-colors whitespace-nowrap",
                  active === l.id
                    ? "text-gold"
                    : "text-white/75 hover:text-white"
                )}
              >
                {t(l.label)}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-gold/60 hover:text-gold transition-colors text-xs font-semibold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "id" ? "ID" : "EN"}
            </button>
            <button
              onClick={() => go("kontak")}
              className="hidden md:inline-flex btn-pill bg-gold text-navy-deep px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              {lang === "id" ? "Hubungi Kami" : "Contact Us"}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-navy-deep/98 backdrop-blur-md border-t border-gold/10",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto custom-scroll">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wide transition-colors",
                active === l.id
                  ? "bg-gold/15 text-gold"
                  : "text-white/80 hover:bg-white/5"
              )}
            >
              {t(l.label)}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-3">
            <button
              onClick={toggle}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold uppercase"
            >
              <Globe className="h-3.5 w-3.5" /> {lang === "id" ? "Bahasa: ID" : "Language: EN"}
            </button>
            <button
              onClick={() => go("kontak")}
              className="flex-1 btn-pill bg-gold text-navy-deep px-4 py-2.5 text-xs font-bold uppercase"
            >
              {lang === "id" ? "Hubungi Kami" : "Contact Us"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
