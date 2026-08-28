"use client";

import { useLang } from "@/components/language-context";
import { businessSectors } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";
import { ArrowRight, Database, Cpu, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  gold: "text-gold-dark bg-gold/10 border-gold/30",
  teal: "text-teal bg-teal/10 border-teal/30",
  navy: "text-navy bg-navy/5 border-navy/20",
  maroon: "text-maroon bg-maroon/10 border-maroon/30",
};
const topBar: Record<string, string> = {
  gold: "bg-gold", teal: "bg-teal", navy: "bg-navy", maroon: "bg-maroon",
};

export function BusinessSectors() {
  const { t } = useLang();
  const b = businessSectors;

  return (
    <section id="bidang-usaha" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />

        {/* Sector cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.sectors.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-white border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className={cn("absolute top-0 inset-x-0 h-1 z-10", topBar[s.accent])} />
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={t(s.name)}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className={cn("inline-flex h-11 w-11 rounded-xl items-center justify-center border backdrop-blur", accentMap[s.accent])}>
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif font-bold text-lg text-white leading-tight">{t(s.name)}</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm leading-relaxed text-foreground/70 line-clamp-4">{t(s.desc)}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Digital ecosystem layers */}
        <div className="mt-16 rounded-2xl bg-navy-radial p-6 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/8 blur-3xl" />
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Sistem Data · IoT · AI</span>
              </div>
              <h3 className="mt-4 font-serif font-bold text-2xl sm:text-3xl">
                {t({ id: "Lapisan Ekosistem Digital", en: "Digital Ecosystem Layers" })}
              </h3>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {b.digitalLayers.map((l, i) => {
                const Ic = [Database, Cpu, Brain][i] ?? Database;
                return (
                  <div key={i} className="rounded-xl glass-card p-5">
                    <Ic className="h-7 w-7 text-gold" />
                    <h4 className="mt-3 font-serif font-bold text-base text-white">{t(l.name)}</h4>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{t(l.desc)}</p>
                  </div>
                );
              })}
            </div>

            {/* Flow */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1">
                {b.digitalFlow.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-1">
                    <div className="px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 font-semibold text-sm uppercase tracking-wide text-gold">
                      {step}
                    </div>
                    {i < b.digitalFlow.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-gold/60 rotate-90 sm:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-sm text-white/55 max-w-xl mx-auto">{t(b.digitalFlowNote)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
