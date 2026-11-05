"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT_INFO } from "@/data/portfolioData";

export function Footer() {
  const { t, activeSection } = useApp();
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sectionOrder = ["home", "about", "projects", "experience", "services", "contact", "download"];

  const stepSection = (dir: -1 | 1) => {
    const idx = sectionOrder.indexOf(activeSection);
    const currentIdx = idx === -1 ? 0 : idx;
    const nextIdx = Math.max(0, Math.min(sectionOrder.length - 1, currentIdx + dir));
    const targetId = sectionOrder[nextIdx];
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Subtle Golden/Blue Cursor Spotlight Orb (Signature Caio interactive touch) */}
      <div
        className="pointer-events-none fixed z-40 hidden lg:block h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/35 blur-md transition-transform duration-75"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <div
        className="pointer-events-none fixed z-40 hidden lg:block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/80 shadow-[0_0_18px_rgba(251,191,36,0.9)]"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Bottom-Right Floating Up/Down Navigation Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
        <button
          onClick={() => stepSection(-1)}
          aria-label="Previous section"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#080c16]/85 text-slate-300 hover:border-sky-400/50 hover:text-white backdrop-blur-xl shadow-lg transition-all cursor-pointer"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        <button
          onClick={() => stepSection(1)}
          aria-label="Next section"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#080c16]/85 text-slate-300 hover:border-sky-400/50 hover:text-white backdrop-blur-xl shadow-lg transition-all cursor-pointer"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Minimalist Signature Footer */}
      <footer className="relative border-t border-white/10 bg-[#030508] py-10 px-4 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-3xl space-y-2">
          <p>
            {t.footer.designedText}{" "}
            <span className="font-bold text-white">{CONTACT_INFO.name}</span>.
          </p>
          <p className="text-slate-300 font-medium">{t.footer.builtWith}</p>
          <p className="text-slate-500 pt-1">{t.footer.fontNote}</p>
          <p className="text-slate-500 pt-2">
            © {new Date().getFullYear()} {CONTACT_INFO.name} ·{" "}
            <a
              href={CONTACT_INFO.website}
              className="text-sky-400 hover:underline"
            >
              jhonatanecard.com
            </a>{" "}
            · {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
