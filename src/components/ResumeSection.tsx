"use client";

import React from "react";
import { Download, FileText } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT_INFO } from "@/data/portfolioData";

export function ResumeSection() {
  const { t } = useApp();

  return (
    <section
      id="download"
      className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <p
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
        >
          {t.resume.kicker}
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          {t.resume.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mb-10">
          {t.resume.subtitle}
        </p>

        {/* Centered Luxury Glass Resume Download Card (Matches Caio's Resume card) */}
        <div className="mx-auto max-w-xl rounded-[32px] border border-white/12 bg-gradient-to-b from-[#121624]/95 to-[#080b13]/95 p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          {/* Document Icon Box with Gold Glow */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-[#1a1c29] shadow-[0_0_35px_rgba(234,179,8,0.2)]">
            <FileText className="h-8 w-8 text-amber-300" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
            {CONTACT_INFO.cvFileName}
          </h3>

          {/* File Format & Size Pills */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
              PDF
            </span>
            <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-200">
              {CONTACT_INFO.cvSize}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md mx-auto mb-7">
            {t.resume.cardDescription}
          </p>

          <a
            href={CONTACT_INFO.cvPath}
            download={CONTACT_INFO.cvFileName}
            className="btn-gradient-goldBlue inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-extrabold text-white transition-all hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            <span>{t.resume.downloadBtn}</span>
          </a>

          <p className="mt-6 text-[11px] text-slate-500">
            {t.resume.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
