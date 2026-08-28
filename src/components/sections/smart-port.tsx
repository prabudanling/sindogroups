"use client";

import { useLang } from "@/components/language-context";
import { smartPort } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SmartPort() {
  const { t, lang } = useLang();
  const sp = smartPort;

  return (
    <section id="smart-port" className="section-pad relative bg-cream-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={sp.eyebrow} title={sp.title} subtitle={sp.subtitle} />

        {/* 12 solutions grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sp.solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative rounded-xl bg-white border border-border p-5 hover:border-gold/50 hover:shadow-lg transition-all"
            >
              <div className="absolute top-3 right-3 font-serif font-bold text-3xl text-navy/5 group-hover:text-gold/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="inline-flex h-11 w-11 rounded-lg bg-navy/5 items-center justify-center group-hover:bg-gold/10 transition-colors">
                <Icon name={s.icon} className="h-5 w-5 text-navy group-hover:text-gold-dark transition-colors" />
              </div>
              <h3 className="mt-3 font-serif font-bold text-[15px] text-navy leading-tight">{s.name}</h3>
              <p className="text-[10px] uppercase tracking-wide text-teal font-semibold mt-0.5">{s.nameEn}</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/65">{t(s.desc)}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture flow */}
        <div className="mt-16 rounded-2xl bg-navy-radial p-6 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/images/smart-port.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-gold/5">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">GalaxyLink · China · Hong Kong</span>
              </div>
              <h3 className="mt-4 font-serif font-bold text-2xl sm:text-3xl">{t(sp.architecture.title)}</h3>
            </div>

            {/* 5-step flow */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
              {sp.architecture.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-xl glass-card p-4 h-full">
                    <div className="font-serif font-bold text-2xl text-gold">{step.no}</div>
                    <div className="mt-1 font-bold text-sm uppercase tracking-wide text-white">{step.name}</div>
                    <div className="text-[10px] uppercase tracking-wide text-teal">{step.nameEn}</div>
                    <p className="mt-2 text-xs text-white/55 leading-relaxed">{t(step.desc)}</p>
                  </div>
                  {i < sp.architecture.steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 h-4 w-4 text-gold/50 z-10" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tech stack chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {sp.architecture.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-gold/15 text-xs text-white/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
