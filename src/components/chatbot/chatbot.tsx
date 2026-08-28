"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/components/language-context";
import { MessageCircle, X, Send, Sparkles, Loader2, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

export function Chatbot() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [sessionId] = useState(() => `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = (id: string, en: string) => (lang === "id" ? id : en);

  const suggestions =
    lang === "id"
      ? ["Apa itu SINDO GROUPS?", "Bidang usaha utamanya apa saja?", "Siapa mitra strategisnya?", "Bagaimana cara berinvestasi?"]
      : ["What is SINDO GROUPS?", "What are the main business sectors?", "Who are the strategic partners?", "How can I invest?"];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          history: next.slice(-10),
          sessionId,
          lang,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: t("Maaf, terjadi kesalahan. Silakan coba lagi.", "Sorry, an error occurred. Please try again.") },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: t("Maaf, terjadi kesalahan jaringan.", "Sorry, a network error occurred.") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-50 group"
            aria-label="Open SINDO Assistant"
          >
            <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping opacity-60" style={{ animationDuration: "2.5s" }} />
            <span className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-gold to-gold-dark text-navy-deep shadow-2xl shadow-gold/30 group-hover:scale-105 transition-transform">
              <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-teal items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </span>
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed bottom-0 right-0 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-[calc(1.25rem+env(safe-area-inset-right))] z-50 w-full sm:w-[400px] chat-panel-h sm:h-[600px] sm:max-h-[85vh] flex flex-col bg-white sm:rounded-2xl shadow-2xl border border-gold/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-radial px-4 py-3.5 pt-[calc(0.875rem+env(safe-area-inset-top))] sm:pt-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                    <Bot className="h-5 w-5 text-navy-deep" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-teal border-2 border-navy-deep" />
                </div>
                <div>
                  <div className="font-serif font-bold text-white text-sm leading-tight">Asisten SINDO</div>
                  <div className="text-[10px] text-gold/80 uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                    {t("Online", "Online")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scroll touch-scroll p-4 space-y-3 bg-cream/40">
              {messages.length === 0 && (
                <div className="text-center py-4">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-3">
                    <Sparkles className="h-7 w-7 text-navy-deep" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-base">
                    {t("Halo! Saya Asisten SINDO 👋", "Hello! I'm SINDO Assistant 👋")}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                    {t(
                      "Tanya apa saja tentang SINDO GROUPS — layanan, mitra, roadmap, atau cara berkolaborasi.",
                      "Ask anything about SINDO GROUPS — services, partners, roadmap, or how to collaborate."
                    )}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-xs px-3 py-2 rounded-lg bg-white border border-border hover:border-gold/50 hover:bg-gold/5 transition-colors text-navy"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-navy text-white rounded-br-sm"
                        : "bg-white border border-border text-foreground rounded-bl-sm shadow-sm"
                    )}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose-sm [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0.5 [&_strong]:text-navy">
                        <FormattedContent text={m.content} />
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] border-t border-border bg-white shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-end gap-2"
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  rows={1}
                  enterKeyHint="send"
                  autoComplete="off"
                  placeholder={t("Tulis pesan...", "Type a message...")}
                  className="flex-1 resize-none max-h-24 px-3.5 py-2.5 rounded-xl border border-input bg-cream/50 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="h-10 w-10 shrink-0 rounded-xl bg-navy text-white flex items-center justify-center hover:bg-navy-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
              <p className="mt-1.5 text-[10px] text-center text-muted-foreground/70">
                {t("Asisten AI · dapat membuat kesalahan", "AI Assistant · may make mistakes")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Lightweight markdown renderer for bold + bullets
function FormattedContent({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        const bullet = /^\s*[-•*]\s+/.test(line);
        const content = bullet ? line.replace(/^\s*[-•*]\s+/, "") : line;
        if (line.trim() === "") return <div key={i} className="h-1.5" />;
        return (
          <p key={i} className={bullet ? "pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gold-dark" : ""}>
            <InlineFormat text={content} />
          </p>
        );
      })}
    </div>
  );
}

function InlineFormat({ text }: { text: string }) {
  // bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-semibold">{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
