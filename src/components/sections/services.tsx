"use client";

import { useLang } from "@/components/language-context";
import { services } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";

export function Services() {
  const { t } = useLang();

  return (
    <section id="layanan" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="group flex gap-4 rounded-xl bg-cream border border-border p-5 hover:border-gold/40 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="inline-flex h-11 w-11 rounded-lg bg-navy/5 items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                <Icon name={s.icon} className="h-5 w-5 text-navy group-hover:text-gold-dark transition-colors" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif font-bold text-[15px] text-navy leading-tight">{t(s.name)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/65">{t(s.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
