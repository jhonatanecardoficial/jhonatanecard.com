"use client";

import React from "react";
import {
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export function ExperienceSection() {
  const { t } = useApp();

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient Right Glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-[440px] w-[440px] rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
          >
            {t.experience.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Career Timeline Cards */}
        <div className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-6 before:w-[2px] before:bg-gradient-to-b before:from-sky-400 before:via-indigo-500 before:to-amber-400/30">
          {t.experience.items.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-12 sm:pl-16 group"
            >
              {/* Timeline Node Dot */}
              <div
                className={`absolute left-1.5 sm:left-3.5 top-7 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  idx === 0
                    ? "border-amber-300 bg-sky-500 shadow-[0_0_20px_rgba(96,165,250,0.9)]"
                    : "border-sky-400/60 bg-[#070a12]"
                }`}
              />

              <div
                className={`glass-card rounded-3xl p-6 sm:p-8 ${
                  idx === 0
                    ? "border-sky-400/35 bg-gradient-to-br from-[#0c1326]/95 to-[#070a13]/95"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="text-xs font-semibold text-amber-300"
                    >
                      {exp.period}
                    </span>
                    {exp.highlightBadge && (
                      <span className="rounded-full bg-sky-500/20 border border-sky-400/40 px-3 py-0.5 text-[11px] font-bold text-sky-200">
                        {exp.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-sky-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm sm:text-base font-bold text-sky-400">
                    · {exp.company}
                  </span>
                </div>

                <p className="text-sm text-slate-300 font-medium mb-4">
                  {exp.summary}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/8">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Bento Grid */}
        <div className="mt-16">
          <div className="mb-8">
            <p
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              className="text-xs font-semibold uppercase tracking-widest text-amber-300/90 mb-1"
            >
              {t.experience.eduKicker}
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.experience.eduTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.experience.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 flex items-start gap-4"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                    edu.category === "postgrad"
                      ? "border-amber-400/35 bg-amber-400/12 text-amber-300"
                      : "border-sky-400/35 bg-sky-500/12 text-sky-300"
                  }`}
                >
                  {edu.category === "postgrad" ? (
                    <GraduationCap className="h-6 w-6" />
                  ) : (
                    <Award className="h-6 w-6" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                      }}
                      className="text-[11px] font-bold text-amber-300 uppercase"
                    >
                      {edu.status}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-sky-400" />
                    <span>{edu.institution}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
