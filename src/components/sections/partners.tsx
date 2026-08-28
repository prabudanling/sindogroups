"use client";

import { useState } from "react";
import { useLang } from "@/components/language-context";
import { partners } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Partners() {
  const { t } = useLang();
  const [active, setActive] = useState(partners.groups[1].key); // default international
  const group = partners.groups.find((g) => g.key === active) ?? partners.groups[0];

  return (
    <section id="mitra" className="section-pad relative bg-cream-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={partners.eyebrow} title={partners.title} subtitle={partners.subtitle} />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {partners.groups.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border",
                active === g.key
                  ? "bg-navy text-white border-navy shadow-md"
                  : "bg-white text-navy border-border hover:border-gold/50"
              )}
            >
              {t(g.label)}
              <span className={cn("ml-2 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-[10px]", active === g.key ? "bg-gold text-navy-deep" : "bg-navy/10 text-navy")}>
                {g.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {group.items.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn(
                  "group relative rounded-xl bg-white border p-5 hover:shadow-lg transition-all overflow-hidden",
                  "featured" in p && p.featured ? "border-gold/50 bg-gradient-to-br from-gold/5 to-white" : "border-border hover:border-gold/40"
                )}
              >
                {"featured" in p && p.featured && (
                  <div className="absolute top-0 right-0 bg-gold text-navy-deep text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="h-2.5 w-2.5 fill-navy-deep" /> {t({ id: "Mitra Utama", en: "Key Partner" })}
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className={cn("inline-flex h-10 w-10 rounded-lg items-center justify-center shrink-0", "featured" in p && p.featured ? "bg-gold/15" : "bg-navy/5")}>
                    {"featured" in p && p.featured ? <Star className="h-5 w-5 text-gold-dark" /> : <Globe2 className="h-5 w-5 text-navy" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-[15px] text-navy leading-tight">{p.name}</h3>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-teal font-semibold">
                      {typeof p.field === "string" ? (
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{p.field}</span>
                      ) : (
                        t(p.field)
                      )}
                    </div>
                  </div>
                </div>
                {"desc" in p && p.desc && (
                  <p className="mt-3 text-xs leading-relaxed text-foreground/60">{t(p.desc as never)}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
