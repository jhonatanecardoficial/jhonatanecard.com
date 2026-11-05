"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ProjectsSection() {
  const { t } = useApp();
  const projects = t.projects.items;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeProject = projects[activeIndex] || projects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  // Compute relative circular positions for coverflow display
  const getRelativeIndex = (idx: number) => {
    const total = projects.length;
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient Center Spotlight */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[720px] rounded-full bg-indigo-600/15 blur-[160px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <p
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
          >
            {t.projects.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Interactive Orbital Coverflow Emblem Stage (Inspired by Caio's carousel, custom vector emblems) */}
        <div className="relative my-8 flex flex-col items-center">
          <div className="relative flex h-64 sm:h-80 w-full items-center justify-center overflow-visible">
            {projects.map((proj, idx) => {
              const rel = getRelativeIndex(idx);
              const isCenter = rel === 0;
              const isLeft = rel === -1;
              const isRight = rel === 1;

              let transformClass = "scale-50 opacity-0 pointer-events-none";
              if (isCenter) {
                transformClass =
                  "z-30 translate-x-0 scale-100 opacity-100";
              } else if (isLeft) {
                transformClass =
                  "z-20 -translate-x-44 sm:-translate-x-72 scale-75 opacity-55 hover:opacity-85 cursor-pointer";
              } else if (isRight) {
                transformClass =
                  "z-20 translate-x-44 sm:translate-x-72 scale-75 opacity-55 hover:opacity-85 cursor-pointer";
              } else {
                transformClass =
                  "z-10 translate-x-0 scale-50 opacity-0 pointer-events-none";
              }

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={proj.title}
                  className={`absolute flex flex-col items-center transition-all duration-500 ease-out ${transformClass}`}
                >
                  {/* Circular Glowing Emblem */}
                  <div
                    className={`relative flex h-48 w-48 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full border transition-all duration-500 ${
                      isCenter
                        ? "border-indigo-400/60 bg-gradient-to-b from-[#131b36] via-[#0c1224] to-[#070a14] shadow-[0_0_90px_rgba(99,102,241,0.55)]"
                        : "border-white/15 bg-[#0a0f1d]/90 shadow-xl"
                    }`}
                  >
                    {/* Inner decorative orbital ring */}
                    <div
                      className="pointer-events-none absolute inset-3 rounded-full border border-dashed border-white/10"
                      style={{
                        borderColor: isCenter
                          ? "rgba(96, 165, 250, 0.35)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    />

                    {/* Top Year Pill */}
                    <span
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                      className="mb-2 rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-[10px] font-bold tracking-widest text-amber-300"
                    >
                      {proj.year}
                    </span>

                    {/* Center Monogram Icon */}
                    <span className="text-4xl sm:text-5xl mb-2 select-none">
                      {proj.monogram}
                    </span>

                    {/* Emblem Short Title */}
                    <span className="px-4 text-center text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase">
                      {proj.shortTitle}
                    </span>

                    {/* Stack preview inside emblem */}
                    <span className="mt-1.5 text-[10px] font-medium text-sky-300/90">
                      {proj.stack.slice(0, 3).join(" · ")}
                    </span>
                  </div>

                  {!isCenter && (
                    <span
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                      className="mt-3 text-[10px] font-semibold tracking-widest text-slate-400 uppercase"
                    >
                      {proj.shortTitle}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Carousel Controls: Prev + Pagination Dots + Next */}
          <div className="mt-4 mb-8 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-slate-300 hover:border-sky-400/50 hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((p, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Select ${p.title}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      active
                        ? "w-7 bg-gradient-to-r from-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-slate-300 hover:border-sky-400/50 hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Centerpiece Spotlight Glass Card (Matches Caio's featured card, enriched with real stack & links) */}
          <div className="w-full max-w-2xl rounded-3xl border border-white/12 bg-[#080b13]/95 p-7 sm:p-9 text-center shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
            <p
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-[11px] font-bold tracking-widest text-amber-300 uppercase mb-2"
            >
              {activeProject.category}
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {activeProject.title}
            </h3>

            {activeProject.proprietary && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/35 bg-rose-500/10 px-3 py-1 text-[11px] font-bold text-rose-300 mb-3">
                <Lock className="h-3 w-3" />
                <span>{activeProject.proprietaryLabel}</span>
              </div>
            )}

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl mx-auto mb-5">
              {activeProject.description}
            </p>

            {/* Tech Stack Pill Dock */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 mb-6">
              {activeProject.stack.map((tech) => (
                <span
                  key={tech}
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="rounded-lg bg-sky-500/12 border border-sky-400/25 px-2.5 py-1 text-[11px] font-semibold text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.03]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>{t.projects.discoverMore}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all"
                >
                  <ExternalLink className="h-4 w-4 text-amber-300" />
                  <span>{t.projects.viewLive}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Architectural Breakdown Bento Grid (All 4 Projects at a glance) */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <p
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-xs font-bold uppercase tracking-widest text-sky-400"
            >
              {t.projects.gridTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer ${
                  idx === activeIndex
                    ? "ring-1 ring-sky-400/50 bg-[#0c1324]/90"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="text-[11px] font-semibold text-amber-300 uppercase block mb-1"
                      >
                        {proj.category}
                      </span>
                      <h4 className="text-xl font-extrabold text-white flex items-center gap-2">
                        <span>{proj.monogram}</span>
                        <span>{proj.title}</span>
                      </h4>
                    </div>
                    {proj.proprietary ? (
                      <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-rose-500/35 bg-rose-500/10 px-2.5 py-1 text-[10px] font-bold text-rose-300">
                        <Lock className="h-3 w-3" />
                        Proprietário
                      </span>
                    ) : (
                      <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                        <Sparkles className="h-3 w-3" />
                        Open Source
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {proj.subtitle}
                  </p>

                  {/* Architecture Bullet Highlights */}
                  <div className="space-y-2 mb-5">
                    {proj.architectureHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-xs font-bold text-sky-300 hover:text-amber-300 transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>{t.projects.viewRepo}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="text-[11px] text-slate-500"
                    >
                      github.com/jhonatanecardoficial/{proj.slug}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
