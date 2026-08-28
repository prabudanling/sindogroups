"use client";

import { useLang } from "@/components/language-context";
import { company, ecosystemNodes } from "@/lib/sindo-data";
import { Icon } from "@/components/icon";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { lang, t } = useLang();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-navy-radial pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-port.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      </div>

      {/* Decorative gold grid lines */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gold">
                {company.legalName} · {company.horizon}
              </span>
            </div>

            <h1 className="font-serif font-bold text-white leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              SINDO <span className="text-gradient-gold">GROUPS</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-medium text-white/90 uppercase tracking-wide">
              {t(company.tagline)}
            </p>

            <p className="mt-5 text-base sm:text-lg text-white/65 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t(company.scope)}.
            </p>

            <p className="mt-6 font-serif italic text-gold-light/90 text-lg sm:text-xl border-l-2 border-gold/50 pl-4 max-w-xl mx-auto lg:mx-0">
              &ldquo;{t(company.slogan)}&rdquo;
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("bidang-usaha")}
                className="btn-pill bg-gold text-navy-deep px-7 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/30 inline-flex items-center justify-center gap-2"
              >
                {lang === "id" ? "Jelajahi Ekosistem" : "Explore Ecosystem"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("kontak")}
                className="btn-pill border border-white/25 bg-white/5 text-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-gold/60 hover:text-gold transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
              </button>
            </div>

            {/* Motto */}
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start text-white/50">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-xs uppercase tracking-[0.25em]">{t(company.motto)}</span>
              <span className="font-serif text-gold/70 text-sm">{company.mottoCn}</span>
            </div>
          </motion.div>

          {/* Right: orbital ecosystem diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <OrbitalDiagram />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

function OrbitalDiagram() {
  const nodes = ecosystemNodes;
  const radius = 150; // px from center

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]">
      {/* Rotating rings */}
      <div className="absolute inset-8 rounded-full border border-gold/15" />
      <div className="absolute inset-16 rounded-full border border-teal/15 animate-orbit" style={{ borderTopColor: "rgba(44,156,142,0.4)", borderRightColor: "rgba(44,156,142,0.15)" }} />
      <div className="absolute inset-24 rounded-full border border-gold/10 animate-orbit-reverse" style={{ borderBottomColor: "rgba(212,175,55,0.4)" }} />

      {/* Connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 460 460" fill="none">
        {nodes.map((_, i) => {
          const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 230 + radius * Math.cos(angle);
          const y = 230 + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1="230" y1="230" x2={x} y2={y}
              stroke="rgba(212,175,55,0.18)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          );
        })}
      </svg>

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-to-br from-navy-light to-navy-deep border-2 border-gold flex flex-col items-center justify-center shadow-2xl shadow-gold/20">
            <img src="/logo-sindo.png" alt="Sindo" className="h-9 w-9 object-contain" />
            <span className="font-serif font-bold text-gold text-sm mt-0.5">SINDO</span>
          </div>
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const left = `calc(50% + ${radius * Math.cos(angle)}px)`;
        const top = `calc(50% + ${radius * Math.sin(angle)}px)`;
        return (
          <motion.div
            key={node.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 120 }}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left, top }}
          >
            <div className="group flex flex-col items-center gap-1.5 cursor-default">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-navy-light/80 backdrop-blur border border-gold/30 flex items-center justify-center shadow-lg group-hover:border-gold group-hover:shadow-gold/30 transition-all">
                <Icon name={node.icon} className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wide text-white/80 text-center max-w-[80px] leading-tight bg-navy-deep/60 px-1.5 py-0.5 rounded">
                {node.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
