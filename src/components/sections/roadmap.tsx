"use client";

import { useLang } from "@/components/language-context";
import { roadmap } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { bar: string; year: string; chip: string }> = {
  gold: { bar: "bg-gold", year: "text-gold-dark", chip: "bg-gold/15 text-gold-dark border-gold/30" },
  teal: { bar: "bg-teal", year: "text-teal", chip: "bg-teal/15 text-teal border-teal/30" },
  navy: { bar: "bg-navy", year: "text-navy", chip: "bg-navy/10 text-navy border-navy/20" },
  maroon: { bar: "bg-maroon", year: "text-maroon", chip: "bg-maroon/15 text-maroon border-maroon/30" },
};

export function Roadmap() {
  const { t } = useLang();

  return (
    <section id="roadmap" className="section-pad relative bg-navy-radial overflow-hidden">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-teal/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.title} light />

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/30 via-teal/30 to-gold/30" />
          <div className="grid lg:grid-cols-5 gap-6">
            {roadmap.phases.map((p, i) => {
              const a = accentMap[p.accent] ?? accentMap.gold;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Dot on line */}
                  <div className="hidden lg:flex justify-center mb-4">
                    <div className={cn("h-5 w-5 rounded-full border-4 border-navy-deep relative z-10", a.bar)}>
                      <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ animationDuration: "3s" }} />
                    </div>
                  </div>
                  <div className="rounded-xl glass-card p-5 h-full">
                    <div className={cn("font-serif font-bold text-3xl", a.year)}>{p.year}</div>
                    <div className={cn("mt-1 inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", a.chip)}>
                      {t(p.phase)}
                    </div>
                    <p className="mt-3 text-sm text-white/65 leading-relaxed">{t(p.focus)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Banner */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {roadmap.banner.map((b, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 font-serif font-bold text-sm uppercase tracking-wider text-gold"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
