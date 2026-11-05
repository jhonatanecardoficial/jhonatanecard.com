"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Cpu,
  Globe,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Server,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT_INFO } from "@/data/portfolioData";

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  const { t } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["hire"]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getTopicIcon = (id: string) => {
    switch (id) {
      case "fullstack":
        return <Globe className="h-4 w-4" />;
      case "ai":
        return <Cpu className="h-4 w-4" />;
      case "backend":
        return <Layers className="h-4 w-4" />;
      case "infra":
        return <Server className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  const buildComposedText = () => {
    const chosenLabels = t.contact.formTopics
      .filter((tp) => selectedTopics.includes(tp.id))
      .map((tp) => tp.label)
      .join(", ");
    return `Olá Jhonatan!\n\nNome: ${name || "-"}\nE-mail: ${email || "-"}\nInteresse: ${chosenLabels || "-"}\n\nMensagem:\n${message || "-"}`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(
      `Contato via jhonatanecard.com — ${name || "Oportunidade / Projeto"}`
    );
    const body = encodeURIComponent(buildComposedText());
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsappSend = () => {
    const text = encodeURIComponent(buildComposedText());
    window.open(`${CONTACT_INFO.whatsappHref}?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient Gold/Blue Spotlight */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[620px] rounded-full bg-amber-500/8 blur-[160px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
          >
            {t.contact.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.contact.title}
          </h2>
        </div>

        {/* Top Dual Info Cards (Matches Caio's Contact Bento layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Left Card: Specialties, Socials & Availability */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between space-y-7">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-3">
                {t.contact.servicesHeading}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.contact.formTopics.map((tp) => (
                  <span
                    key={tp.id}
                    className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${
                      tp.id === "hire"
                        ? "border-amber-400/40 bg-amber-400/12 text-amber-200"
                        : "border-white/12 bg-white/[0.03] text-slate-200"
                    }`}
                  >
                    {tp.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-3">
                {t.contact.connectedHeading}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] text-white hover:border-sky-400/50 hover:bg-white/[0.1] transition-all"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] text-white hover:border-sky-400/50 hover:bg-white/[0.1] transition-all"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.03] text-emerald-400 hover:border-emerald-400/50 hover:bg-white/[0.1] transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-1.5">
                {t.contact.startProjectHeading}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.contact.startProjectText}
              </p>
            </div>
          </div>

          {/* Right Card: Direct Email, Phone & Location */}
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-2">
                {t.contact.aboutHeading}
              </h3>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                {t.contact.aboutText}
              </p>
            </div>

            <div>
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1"
              >
                {t.contact.emailLabel}
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-sky-400 hover:text-amber-300 transition-colors break-all"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div>
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1"
              >
                {t.contact.callLabel}
              </span>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-amber-300 hover:text-sky-300 transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div>
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1"
              >
                {t.contact.locationLabel}
              </span>
              <p className="inline-flex items-center gap-2 text-sm font-bold text-slate-200">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form Card (Inspired by Caio's centered dark form card with selectable service tiles) */}
        <div className="mx-auto max-w-2xl rounded-[32px] border border-white/12 bg-[#070a12]/95 p-7 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2"
              >
                {t.contact.formNameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.formNamePlaceholder}
                required
                className="w-full rounded-2xl border border-white/12 bg-black/50 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2"
              >
                {t.contact.formEmailLabel}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.formEmailPlaceholder}
                required
                className="w-full rounded-2xl border border-white/12 bg-black/50 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Selectable Topic Tiles */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3">
                {t.contact.formTopicLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {t.contact.formTopics.map((topic) => {
                  const isSelected = selectedTopics.includes(topic.id);
                  return (
                    <button
                      type="button"
                      key={topic.id}
                      onClick={() => toggleTopic(topic.id)}
                      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "border-sky-400/60 bg-sky-500/15 text-white shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                          : "border-white/10 bg-black/40 text-slate-300 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <span
                        className={
                          isSelected ? "text-amber-300" : "text-slate-400"
                        }
                      >
                        {getTopicIcon(topic.id)}
                      </span>
                      <span className="text-center">{topic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2"
              >
                {t.contact.formMessageLabel}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.formMessagePlaceholder}
                required
                className="w-full rounded-2xl border border-white/12 bg-black/50 p-4 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors resize-y"
              />
            </div>

            {submitted && (
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300 text-center">
                {t.contact.formSuccess}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                type="submit"
                className="btn-gradient-goldBlue flex items-center justify-center gap-2 rounded-2xl py-4 text-sm font-extrabold text-white transition-all hover:scale-[1.01] cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>{t.contact.formSubmit}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsappSend}
                className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/35 bg-emerald-500/12 hover:bg-emerald-500/20 py-4 text-sm font-extrabold text-emerald-200 transition-all cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{t.contact.formWhatsapp}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
