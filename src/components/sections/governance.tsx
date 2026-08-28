"use client";

import { useLang } from "@/components/language-context";
import { governance } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import { motion } from "framer-motion";

export function Governance() {
  const { t } = useLang();
  const g = governance;

  return (
    <section id="tata-kelola" className="section-pad relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={g.eyebrow} title={g.title} />

        {/* Equation banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl bg-cream-radial border border-gold/20 p-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {g.equation.map((part, i) => {
            const isOp = part === "+" || part === "=";
            const isResult = part === "KEPERCAYAAN";
            return (
              <span
                key={i}
                className={
                  isResult
                    ? "font-serif font-bold text-lg sm:text-2xl text-gradient-gold px-3"
                    : isOp
                    ? "text-gold-dark font-bold text-xl"
                    : "font-serif font-bold text-sm sm:text-lg text-navy px-2"
                }
              >
                {part}
              </span>
            );
          })}
        </motion.div>

        {/* Dimensions grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {g.dimensions.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group rounded-xl bg-white border border-border p-5 hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 rounded-lg bg-navy/5 items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Icon name={d.icon} className="h-5 w-5 text-navy group-hover:text-gold-dark transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-base text-navy">{t(d.name)}</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{t(d.scope)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
