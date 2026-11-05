"use client";

import React from "react";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Download,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT_INFO } from "@/data/portfolioData";

export function HeroSection() {
  const { t } = useApp();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient Deep Radial Spotlights */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[680px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[440px] w-[440px] rounded-full bg-sky-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-[340px] w-[480px] rounded-full bg-amber-500/8 blur-[140px]" />

      <div className="mx-auto w-full max-w-6xl my-auto pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/25 bg-white/[0.03] px-4 py-1.5 mb-6 shadow-[0_0_25px_rgba(234,179,8,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-amber-200/95 tracking-wide">
                {t.hero.statusBadge}
              </span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg text-slate-400 font-medium mb-1">
              {t.hero.greeting}
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.05] mb-3">
              {t.hero.name}
            </h1>

            {/* Multi-stop Gradient Role Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] text-gradient-hero mb-6">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h2>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-300/90 max-w-xl leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-gradient-primary inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-[0.99] cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>

              <a
                href={CONTACT_INFO.cvPath}
                download={CONTACT_INFO.cvFileName}
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.06] hover:bg-amber-400/[0.14] px-5 py-3.5 text-xs font-bold text-amber-200 transition-all"
              >
                <Download className="h-3.5 w-3.5 text-amber-300" />
                <span>{t.hero.ctaResume}</span>
              </a>
            </div>

            {/* Divider + Tech Stack Bar */}
            <div className="w-full max-w-xl border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-300">
                <span
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-[11px] uppercase tracking-widest text-slate-500"
                >
                  {t.hero.techStackLabel}
                </span>

                <span className="inline-flex items-center gap-2 text-slate-200 hover:text-sky-300 transition-colors">
                  <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                  </svg>
                  React & Next.js
                </span>

                <span className="inline-flex items-center gap-2 text-slate-200 hover:text-sky-300 transition-colors">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-sky-500/20 text-[9px] font-extrabold text-sky-300 border border-sky-400/30">
                    TS
                  </span>
                  TypeScript
                </span>

                <span className="inline-flex items-center gap-2 text-slate-200 hover:text-emerald-300 transition-colors">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-emerald-500/20 text-[9px] font-extrabold text-emerald-300 border border-emerald-400/30">
                    JS
                  </span>
                  Node.js & NestJS
                </span>

                <span className="inline-flex items-center gap-2 text-slate-200 hover:text-amber-300 transition-colors">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  LLMs · RAG · MCP
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Framed Portrait + Floating Glass Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Ambient Aura */}
              <div className="pointer-events-none absolute -inset-4 rounded-[34px] bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-amber-400/25 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Framed Portrait Container */}
              <div className="relative rounded-[28px] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="relative h-64 w-64 sm:h-76 sm:w-76 overflow-hidden rounded-[20px] border border-white/10 bg-[#0b101d]">
                  <img
                    src="/assets/foto.jpg"
                    alt={CONTACT_INFO.name}
                    className="h-full w-full object-cover object-center scale-[1.03] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/65 px-3 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                      <MapPin className="h-3.5 w-3.5 text-amber-300" />
                      <span>{t.hero.floatingBadges.locTitle}</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Left Badge: CI&T Experience */}
              <div className="hidden sm:flex animate-float-slow absolute -left-8 -top-6 items-center gap-3 rounded-2xl border border-white/15 bg-[#090d19]/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300 font-extrabold text-xs">
                  CI&T
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">
                    {t.hero.floatingBadges.expTitle}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {t.hero.floatingBadges.expSub}
                  </p>
                </div>
              </div>

              {/* Floating Bottom-Right Badge: Applied AI */}
              <div className="hidden sm:flex absolute -right-6 -bottom-7 items-center gap-3 rounded-2xl border border-amber-400/25 bg-[#090d19]/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300">
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">
                    {t.hero.floatingBadges.aiTitle}
                  </p>
                  <p className="text-[11px] text-amber-200/80">
                    {t.hero.floatingBadges.aiSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Animated Triple Chevrons (Signature scroll cue) */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll to About section"
          className="group flex flex-col items-center -space-y-2.5 p-2 cursor-pointer"
        >
          <ChevronDown className="h-5 w-5 text-slate-500 animate-chevron-1 group-hover:text-sky-300" />
          <ChevronDown className="h-6 w-6 text-slate-300 animate-chevron-2 group-hover:text-sky-300" />
          <ChevronDown className="h-7 w-7 text-white animate-chevron-3 group-hover:text-amber-300" />
        </button>
      </div>
    </section>
  );
}
