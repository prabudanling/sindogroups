"use client";

import { useLang } from "@/components/language-context";
import { company, navLinks } from "@/lib/sindo-data";
import { MapPin, Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  const { t, lang } = useLang();

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-navy-deep text-white border-t border-gold/15 mt-auto">
      <div className="absolute top-0 inset-x-0 gold-rule" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo-sindo.png" alt="Sindo Groups" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-serif font-bold text-xl text-white">SINDO <span className="text-gold">GROUPS</span></div>
                <div className="text-xs text-white/50">{company.legalName}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">{t(company.tagline)}.</p>
            <p className="mt-3 font-serif italic text-gold-light/80 text-sm">&ldquo;{t(company.slogan)}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-white/45">
              <span className="uppercase tracking-wider">{t(company.motto)}</span>
              <span className="font-serif text-gold/60">{company.mottoCn}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-gold mb-4">{lang === "id" ? "Navigasi" : "Navigation"}</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-sm text-white/60 hover:text-gold transition-colors link-underline">
                    {t(l.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-gold mb-4">{lang === "id" ? "Kontak" : "Contact"}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPin className="h-4 w-4 text-gold/70 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-gold/70 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/[^0-9+]/g, "")}`} className="block text-white/60 hover:text-gold transition-colors">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-gold/70 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {company.emails.map((em) => (
                    <a key={em} href={`mailto:${em}`} className="block text-white/60 hover:text-gold transition-colors break-words [overflow-wrap:anywhere]">{em}</a>
                  ))}
                </div>
              </li>
            </ul>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} SINDO GROUPS · {company.legalName}. {lang === "id" ? "Hak cipta dilindungi." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 uppercase tracking-wider">Profil Perusahaan · {company.horizon}</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
