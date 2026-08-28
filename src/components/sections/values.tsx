"use client";

import { useLang } from "@/components/language-context";
import { values } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";

export function Values() {
  const { t } = useLang();

  return (
    <section id="filosofi" className="section-pad relative bg-cream-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={values.eyebrow} title={values.title} />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {values.pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white border border-border p-7 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${i === 0 ? "bg-gold" : i === 1 ? "bg-teal" : "bg-maroon"}`} />
              <div className={`inline-flex h-14 w-14 rounded-xl items-center justify-center mb-5 ${i === 0 ? "bg-gold/10" : i === 1 ? "bg-teal/10" : "bg-maroon/10"}`}>
                <Icon name={p.icon} className={`h-7 w-7 ${i === 0 ? "text-gold-dark" : i === 1 ? "text-teal" : "text-maroon"}`} />
              </div>
              <h3 className="font-serif font-bold text-xl text-navy">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t(p.desc)}</p>
              <div className="mt-5 text-5xl font-serif font-bold text-navy/5 absolute bottom-2 right-4 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Keywords marquee */}
        <div className="mt-12 rounded-2xl bg-navy-radial py-5 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[...values.keywords, ...values.integration, ...values.keywords, ...values.integration].map((k, i) => (
              <span key={i} className="inline-flex items-center gap-8">
                <span className="font-serif font-semibold text-lg text-gold/90 uppercase tracking-wider">{k}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-teal/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
