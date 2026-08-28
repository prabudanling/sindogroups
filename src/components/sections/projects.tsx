"use client";

import { useLang } from "@/components/language-context";
import { projects } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Tag, FileText, MapPin } from "lucide-react";

export function Projects() {
  const { t } = useLang();
  const p = projects;

  return (
    <section id="proyek" className="section-pad relative bg-cream-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {p.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="h-1.5 bg-gradient-to-r from-gold via-teal to-navy" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-[10px] font-bold uppercase tracking-wider text-navy">
                    <Tag className="h-3 w-3" />
                    {t(item.tag)}
                  </span>
                </div>
                <h3 className="mt-4 font-serif font-bold text-lg text-navy leading-tight">{t(item.title)}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed flex-1">{t(item.desc)}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5 text-gold-dark shrink-0 mt-0.5" />
                  <span>{t(item.meta)}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
