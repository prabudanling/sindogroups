"use client";

import { useState } from "react";
import { useLang } from "@/components/language-context";
import { contact, company } from "@/lib/sindo-data";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const { t, lang } = useLang();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "", interest: "", message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: lang === "id" ? "Lengkapi data wajib" : "Please complete required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
      toast({ title: t(contact.formLabels.success) });
      setForm({ name: "", email: "", phone: "", organization: "", interest: "", message: "" });
    } catch {
      toast({ title: t(contact.formLabels.error), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const L = contact.formLabels;

  return (
    <section id="kontak" className="section-pad relative bg-navy-radial overflow-hidden">
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} light />

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-2xl glass-card p-6">
              <div className="flex items-center gap-3">
                <img src="/logo-sindo.png" alt="Sindo" className="h-12 w-12 object-contain" />
                <div>
                  <div className="font-serif font-bold text-lg text-white">SINDO GROUPS</div>
                  <div className="text-xs text-white/55">{company.legalName}</div>
                </div>
              </div>
              <div className="gold-rule my-5" />
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/75 leading-relaxed">{company.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    {company.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/[^0-9+]/g, "")}`} className="block text-white/75 hover:text-gold transition-colors">{p}</a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    {company.emails.map((em) => (
                      <a key={em} href={`mailto:${em}`} className="block text-white/75 hover:text-gold transition-colors break-all">{em}</a>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={`mailto:${company.emails[0]}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold/10 transition-colors"
                >
                  <Mail className="h-4 w-4" /> {lang === "id" ? "Email" : "Email"}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gold/15 to-transparent border border-gold/25 p-6">
              <p className="font-serif italic text-gold-light text-lg leading-relaxed">
                &ldquo;{t(company.slogan)}&rdquo;
              </p>
              <div className="mt-3 text-xs uppercase tracking-wider text-white/45">
                {t(company.motto)} · <span className="font-serif text-gold/70">{company.mottoCn}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {done ? (
              <div className="rounded-2xl bg-white p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-teal mx-auto" />
                <h3 className="mt-4 font-serif font-bold text-xl text-navy">{lang === "id" ? "Pesan Terkirim!" : "Message Sent!"}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{t(L.success)}</p>
                <Button onClick={() => setDone(false)} variant="outline" className="mt-5">
                  {lang === "id" ? "Kirim Pesan Lain" : "Send Another Message"}
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t(L.name)} <span className="text-maroon">*</span></Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="border-input" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t(L.email)} <span className="text-maroon">*</span></Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">{t(L.phone)}</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="organization">{t(L.organization)}</Label>
                    <Input id="organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="interest">{t(L.interest)}</Label>
                  <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                    <SelectTrigger id="interest"><SelectValue placeholder={lang === "id" ? "Pilih bidang minat" : "Select area of interest"} /></SelectTrigger>
                    <SelectContent>
                      {contact.interestOptions.map((o) => (
                        <SelectItem key={o.id} value={o.id}>{lang === "id" ? o.id : o.en}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">{t(L.message)} <span className="text-maroon">*</span></Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} />
                </div>
                <Button type="submit" disabled={loading} className="w-full btn-pill bg-navy hover:bg-navy-light text-white py-3 text-sm font-bold uppercase tracking-wider">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
                  {t(L.submit)}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
