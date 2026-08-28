"use client";

import { useLang } from "@/components/language-context";
import { structure } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { ring: string; bg: string; text: string; dot: string }> = {
  gold: { ring: "border-gold/40", bg: "bg-gold/10", text: "text-gold-dark", dot: "bg-gold" },
  teal: { ring: "border-teal/40", bg: "bg-teal/10", text: "text-teal", dot: "bg-teal" },
  navy: { ring: "border-navy/30", bg: "bg-navy/5", text: "text-navy", dot: "bg-navy" },
  maroon: { ring: "border-maroon/40", bg: "bg-maroon/10", text: "text-maroon", dot: "bg-maroon" },
};

export function Structure() {
  const { t, lang } = useLang();
  const fns = structure.functions;
  const radius = 38; // percentage

  return (
    <section id="struktur" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={structure.eyebrow} title={structure.title} />

        {/* Radial diagram */}
        <div className="mt-14 relative mx-auto w-full max-w-3xl aspect-square">
          {/* SVG connectors */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="xMidYMid meet">
            {fns.map((_, i) => {
              const angle = (i / fns.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="rgba(15,37,64,0.12)" strokeWidth="0.4" strokeDasharray="1 1.5" />
              );
            })}
            <circle cx="50" cy="50" r="38" stroke="rgba(212,175,55,0.18)" strokeWidth="0.3" fill="none" />
            <circle cx="50" cy="50" r="28" stroke="rgba(44,156,142,0.14)" strokeWidth="0.3" fill="none" />
          </svg>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150" />
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-gradient-to-br from-navy-light to-navy-deep border-2 border-gold flex flex-col items-center justify-center shadow-2xl">
                <img src="/logo-sindo.png" alt="Sindo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
                <span className="font-serif font-bold text-gold text-[11px] sm:text-sm mt-1 text-center leading-tight px-2">{structure.center}</span>
              </div>
            </div>
          </div>

          {/* Function nodes */}
          {fns.map((fn, i) => {
            const angle = (i / fns.length) * Math.PI * 2 - Math.PI / 2;
            const left = `calc(50% + ${radius * Math.cos(angle)}%)`;
            const top = `calc(50% + ${radius * Math.sin(angle)}%)`;
            const a = accentMap[fn.accent] ?? accentMap.gold;
            return (
              <motion.div
                key={fn.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 110 }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[180px]"
                style={{ left, top }}
              >
                <div className={cn("rounded-xl bg-white border-2 p-3 shadow-lg hover:shadow-xl transition-shadow", a.ring)}>
                  <div className={cn("inline-flex h-2 w-2 rounded-full mb-1.5", a.dot)} />
                  <div className="font-serif font-bold text-[12px] sm:text-sm text-navy leading-tight">{fn.name}</div>
                  <div className="text-[9px] uppercase tracking-wide text-muted-foreground mt-0.5">{lang === "id" ? fn.nameEn : fn.name}</div>
                  <div className={cn("mt-2 text-[11px] font-semibold", a.text)}>{fn.entity}</div>
                  <p className="mt-1.5 text-[10px] leading-snug text-foreground/60">{t(fn.desc)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
