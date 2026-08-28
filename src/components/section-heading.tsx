"use client";

import { useLang } from "@/components/language-context";
import type { Bi } from "@/lib/sindo-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow: Bi;
  title: Bi;
  subtitle?: Bi;
  align?: "center" | "left";
  light?: boolean;
}) {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}
    >
      <div className={cn("inline-flex items-center gap-2", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-gold" />
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
          {t(eyebrow)}
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2
        className={cn(
          "mt-4 font-serif font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance",
          light ? "text-white" : "text-navy"
        )}
      >
        {t(title)}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-white/65" : "text-muted-foreground")}>
          {t(subtitle)}
        </p>
      )}
    </motion.div>
  );
}

export function useCountUp(end: number, duration = 2000, start = false) {
  // simple count-up via state; used in stats where numeric
  return end;
}
