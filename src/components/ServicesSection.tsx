"use client";

import React from "react";
import { Code2, Cpu, Globe, Layers, Server } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { ServiceItem } from "@/types";

export function ServicesSection() {
  const { t } = useApp();

  const renderIcon = (icon: ServiceItem["icon"]) => {
    switch (icon) {
      case "code":
        return <Globe className="h-5 w-5 text-sky-400" />;
      case "cpu":
        return <Cpu className="h-5 w-5 text-amber-300" />;
      case "layers":
        return <Layers className="h-5 w-5 text-indigo-400" />;
      case "server":
        return <Server className="h-5 w-5 text-emerald-400" />;
      default:
        return <Code2 className="h-5 w-5 text-sky-400" />;
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300/90 mb-2"
          >
            {t.services.kicker}
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* 2x2 Luxury Glass Cards Grid (Matches Caio's Services layout, with richer technical deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.services.items.map((srv) => (
            <div
              key={srv.id}
              className="glass-card rounded-3xl p-8 sm:p-9 flex flex-col justify-between"
            >
              <div>
                {/* Rounded Icon Box */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-[#0e1629] shadow-[0_0_25px_rgba(56,189,248,0.15)]">
                  {renderIcon(srv.icon)}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {srv.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Deliverable Micro-Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {srv.deliverables.map((del) => (
                    <span
                      key={del}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signature Gold Footer Line */}
              <div className="border-t border-white/10 pt-4">
                <p
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  className="text-[11px] font-bold uppercase tracking-widest text-amber-300/90 flex items-center gap-2"
                >
                  <span>{srv.tags[0]}</span>
                  <span className="text-amber-400">•</span>
                  <span>{srv.tags[1]}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Strategy / CTA Banner Card (Inspired by Caio's "Aumente Suas Vendas. Redefina Sua Estratégia.") */}
        <div className="relative mx-auto max-w-4xl rounded-[32px] border border-white/15 bg-gradient-to-b from-[#0d1326] via-[#090d19] to-[#050811] px-6 py-12 sm:px-14 sm:py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-56 w-96 rounded-full bg-amber-400/15 blur-3xl" />

          <h3 className="relative text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
            {t.services.bannerTitle1}
            <br />
            {t.services.bannerTitle2}
          </h3>

          <p className="relative text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            {t.services.bannerSub}
          </p>

          <button
            onClick={scrollToContact}
            className="relative btn-gradient-goldBlue inline-flex items-center justify-center rounded-full px-8 py-4 text-sm sm:text-base font-extrabold text-white transition-all hover:scale-[1.03] cursor-pointer"
          >
            {t.services.bannerCta}
          </button>
        </div>
      </div>
    </section>
  );
}
