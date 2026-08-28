"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang, Bi } from "@/lib/sindo-data";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (b: Bi | string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("sindo-lang") : null;
    if (stored === "id" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("sindo-lang", l);
  };

  const toggle = () => setLang(lang === "id" ? "en" : "id");

  const t = (b: Bi | string): string => {
    if (typeof b === "string") return b;
    return b[lang] ?? b.id;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
