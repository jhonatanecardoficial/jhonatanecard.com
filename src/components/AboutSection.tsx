"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, Cpu, Database, Server, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function AboutSection() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentCategory =
    t.about.stackCategories.find((c) => c.id === activeTab) ||
    t.about.stackCategories[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code2 className="h-4 w-4" />;
      case "ai":
        return <Cpu className="h-4 w-4" />;
      case "backend":
        return <Database className="h-4 w-4" />;
      default:
        return <Server className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
          >
            {t.about.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.about.title}
          </h2>
        </div>

        {/* Main Two-Column Story Layout (Inspired by Caio's illustration + glass card, elevated) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left Column: Custom Line-Art Architect Illustration Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-white/12 bg-gradient-to-b from-[#0b1224] to-[#060913] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.75)] overflow-hidden group">
              <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-sky-500/15 blur-3xl" />

              {/* Custom Developer & AI Line-Art SVG */}
              <svg
                viewBox="0 0 400 320"
                className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background tech grid lines */}
                <g stroke="#3b82f6" strokeOpacity="0.28" strokeWidth="1.5">
                  <line x1="45" y1="45" x2="115" y2="45" />
                  <line x1="45" y1="53" x2="115" y2="53" />
                  <line x1="45" y1="61" x2="115" y2="61" />
                  <line x1="55" y1="35" x2="55" y2="110" />
                  <line x1="65" y1="35" x2="65" y2="110" />
                  <line x1="75" y1="35" x2="75" y2="110" />

                  <line x1="265" y1="115" x2="355" y2="115" />
                  <line x1="265" y1="122" x2="355" y2="122" />
                  <line x1="265" y1="129" x2="355" y2="129" />
                  <line x1="265" y1="136" x2="355" y2="136" />
                  <line x1="265" y1="143" x2="335" y2="143" />
                </g>

                {/* Gold geometric accents */}
                <circle
                  cx="295"
                  cy="62"
                  r="22"
                  stroke="#eab308"
                  strokeWidth="2"
                  strokeOpacity="0.85"
                />
                <line
                  x1="311"
                  y1="78"
                  x2="355"
                  y2="122"
                  stroke="#eab308"
                  strokeWidth="2"
                  strokeOpacity="0.85"
                />
                <circle
                  cx="96"
                  cy="92"
                  r="11"
                  stroke="#eab308"
                  strokeWidth="1.8"
                  strokeOpacity="0.8"
                />
                <circle cx="240" cy="84" r="3.5" fill="#eab308" />
                <circle cx="268" cy="148" r="4" fill="#eab308" />

                {/* Developer silhouette (clean hand-crafted vector strokes) */}
                <path
                  d="M158 102 C154 74, 198 68, 206 94 C210 112, 202 132, 184 136 C168 138, 160 120, 158 102 Z"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M156 92 C165 78, 196 76, 208 90"
                  stroke="#60a5fa"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Glasses detail */}
                <rect
                  x="167"
                  y="98"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <rect
                  x="185"
                  y="98"
                  width="14"
                  height="9"
                  rx="2"
                  stroke="#eab308"
                  strokeWidth="2"
                />
                <line
                  x1="181"
                  y1="102"
                  x2="185"
                  y2="102"
                  stroke="#eab308"
                  strokeWidth="2"
                />

                {/* Shoulders & Torso */}
                <path
                  d="M112 246 C114 188, 134 156, 164 150 L204 150 C230 156, 246 184, 250 232"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Arms typing */}
                <path
                  d="M136 178 L128 242 L195 246"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M224 176 L236 228"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Gold Laptop */}
                <path
                  d="M202 256 L246 196 L326 196 L284 256 Z"
                  fill="#0b101d"
                  stroke="#eab308"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M172 256 L284 256 L268 265 L164 265 Z"
                  stroke="#eab308"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* AI Spark inside laptop */}
                <circle
                  cx="264"
                  cy="226"
                  r="8"
                  stroke="#60a5fa"
                  strokeWidth="2"
                />

                {/* Coffee glass & Desk */}
                <ellipse
                  cx="132"
                  cy="255"
                  rx="13"
                  ry="4"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <path
                  d="M119 255 L119 278 C119 283, 145 283, 145 278 L145 255"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <ellipse
                  cx="132"
                  cy="268"
                  rx="13"
                  ry="3.5"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Bottom Live Console Pill inside Illustration Card */}
              <div
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 py-2.5 text-[11px] text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>CI&T (4.5y) → Applied AI</span>
                </span>
                <span className="text-amber-300 font-semibold">Porto, PT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Glass Card with Floating Top-Right Badge */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/12 bg-[#080b13]/90 p-7 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              {/* Top-Right Floating Pill Badge (Signature Caio detail) */}
              <div className="inline-flex sm:absolute sm:-top-4 sm:right-8 mb-4 sm:mb-0 items-center gap-2 rounded-full border border-indigo-400/35 bg-[#121936] px-4 py-1.5 text-xs font-bold text-indigo-200 shadow-[0_0_25px_rgba(99,102,241,0.35)]">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>{t.about.rolePill}</span>
              </div>

              <p className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-5">
                {t.about.introBold}
                <br />
                <span className="text-slate-100">{t.about.introHighlight}</span>
              </p>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-4">
                {t.about.paragraph1}
              </p>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                {t.about.paragraph2}
              </p>

              <div className="border-t border-white/10 pt-5">
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {t.about.closingBold}{" "}
                  <span className="text-amber-300 underline decoration-amber-400/40 underline-offset-4">
                    {t.about.closingHighlight}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Bento Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {t.about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-gradient-hero block mb-1.5">
                  {stat.value}
                </span>
                <h3 className="text-sm font-bold text-white mb-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Categorized Tech Arsenal Bento */}
        <div className="rounded-3xl border border-white/10 bg-[#070a12]/85 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1"
              >
                // TECH ARSENAL & COMPETÊNCIAS
              </p>
              <h3 className="text-xl font-extrabold text-white">
                Ecossistema Técnico Completo
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {t.about.stackCategories.map((cat) => {
                const active = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                      active
                        ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.45)]"
                        : "border border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {currentCategory.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] hover:border-sky-400/35 hover:bg-white/[0.05] px-4 py-3.5 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span className="text-sm font-bold text-white">
                    {item.name}
                  </span>
                </div>
                <span
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-200"
                >
                  {item.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
