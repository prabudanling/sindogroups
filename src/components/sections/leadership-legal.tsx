"use client";

import { useLang } from "@/components/language-context";
import { leadership, legal } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Shield, Scale, FileCheck, Hash, Landmark, Building2 } from "lucide-react";

const legalIcons = [FileCheck, Scale, Hash, Hash, Building2, Landmark];

export function LeadershipLegal() {
  const { t } = useLang();

  return (
    <section className="section-pad relative bg-cream-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Leadership */}
        <div id="kepemimpinan">
          <SectionHeading eyebrow={leadership.eyebrow} title={leadership.title} />

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadership.members.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-navy-radial p-8 text-center overflow-hidden accent-top-gold"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-colors" />
                <div className="relative">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-serif font-bold text-2xl text-navy-deep shadow-lg">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="mt-5 font-serif font-bold text-xl text-white">{m.name}</h3>
                  {m.nameCn && <div className="font-serif text-gold-light/80 text-base mt-0.5">{m.nameCn}</div>}
                  <div className="mt-3 inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">{t(m.role)}</span>
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-wide text-white/40">{m.roleAlt}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legal Identity */}
        <div id="hukum">
          <SectionHeading eyebrow={legal.eyebrow} title={legal.title} />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {legal.items.map((item, i) => {
              const Ic = legalIcons[i] ?? FileCheck;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl bg-white border border-border p-5 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 rounded-lg bg-navy/5 items-center justify-center shrink-0">
                      <Ic className="h-5 w-5 text-navy" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{t(item.label)}</div>
                      <div className="mt-1 font-semibold text-navy text-sm break-words">{item.value}</div>
                      {item.sub && <div className="mt-0.5 text-xs text-foreground/55">{typeof item.sub === "string" ? item.sub : t(item.sub)}</div>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground italic max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Shield className="h-3.5 w-3.5 text-gold-dark" />
            {t(legal.note)}
          </p>
        </div>
      </div>
    </section>
  );
}
