"use client";

import { useLang } from "@/components/language-context";
import { about, stats, company } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useLang();

  return (
    <section id="tentang" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-foreground/80">
                {t(p)}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {about.pillars.map((p) => (
                <div key={p.key} className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-gold/15">
                  <CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">{p.key}</div>
                    <div className="text-sm text-foreground/75 mt-0.5">{t(p.value)}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl bg-navy-radial p-6 sm:p-8 text-white overflow-hidden accent-top-gold">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img src="/logo-sindo.png" alt="Sindo" className="h-14 w-14 object-contain" />
                  <div>
                    <div className="font-serif font-bold text-xl text-white">SINDO GROUPS</div>
                    <div className="text-xs text-white/55">{company.legalName}</div>
                  </div>
                </div>
                <div className="mt-3 font-serif text-gold-light/80 text-sm">{company.legalNameCn}</div>
                <div className="gold-rule my-5" />
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-gold/70">{t({ id: "Didirikan", en: "Founded" })}</dt>
                    <dd className="text-white/90 font-medium">{company.founded}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-gold/70">{t({ id: "Horizon", en: "Horizon" })}</dt>
                    <dd className="text-white/90 font-medium">{company.horizon}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-gold/70">{t({ id: "Kantor", en: "Office" })}</dt>
                    <dd className="text-white/85 leading-relaxed">{company.address}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-gold/70">{t({ id: "Motto", en: "Motto" })}</dt>
                    <dd className="text-white/90 font-medium">{t(company.motto)} · <span className="font-serif text-gold-light">{company.mottoCn}</span></dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card p-4 text-center hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="font-serif font-bold text-2xl lg:text-3xl text-gradient-navy">{s.value}</div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground leading-tight">{t(s.label)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
