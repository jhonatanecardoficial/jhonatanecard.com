"use client";

import React, { useEffect, useState } from "react";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { CONTACT_INFO } from "@/data/portfolioData";

export function Navbar() {
  const { locale, setLocale, theme, toggleTheme, t, activeSection, setActiveSection } =
    useApp();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? Math.min(100, (window.scrollY / totalHeight) * 100) : 0;
      setScrollProgress(progress);

      const sectionIds = t.nav.map((n) => n.id);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t.nav, setActiveSection]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-full border border-white/12 bg-[#060913]/85 backdrop-blur-2xl px-4 sm:px-6 py-2.5 shadow-[0_12px_45px_rgba(0,0,0,0.65)] transition-all">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 text-xs font-extrabold tracking-tight text-white shadow-[0_0_20px_rgba(99,102,241,0.55)] group-hover:scale-105 transition-transform">
                {CONTACT_INFO.initials}
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {CONTACT_INFO.name}
              </span>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {t.nav.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative py-1.5 text-xs font-bold tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? "text-amber-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-amber-300 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Dual Language Switcher + Theme + Phone Pill */}
            <div className="flex items-center gap-2.5">
              {/* Dual Segmented Language Pill */}
              <div
                className="flex items-center rounded-full border border-white/12 bg-black/50 p-1"
                role="group"
                aria-label="Language selector"
              >
                <button
                  onClick={() => setLocale("pt")}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                    locale === "pt"
                      ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.6)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Português"
                >
                  <img
                    src="/assets/flag-pt.svg"
                    alt="PT"
                    className="h-3.5 w-3.5 rounded-full object-cover"
                  />
                  <span>PT</span>
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                    locale === "en"
                      ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.6)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="English"
                >
                  <img
                    src="/assets/flag-en.svg"
                    alt="EN"
                    className="h-3.5 w-3.5 rounded-full object-cover"
                  />
                  <span>EN</span>
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === "dark" ? "Modo claro / Light mode" : "Modo escuro / Dark mode"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/5 text-amber-300 hover:border-amber-400/50 hover:bg-white/10 transition-all cursor-pointer"
              >
                {theme === "dark" ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5 text-sky-400" />
                )}
              </button>

              {/* Phone / WhatsApp Pill */}
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] hover:border-sky-400/50 px-3.5 py-1.5 text-xs font-bold text-white transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-amber-300" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
                className="flex lg:hidden h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Bottom Scroll Progress Line (Signature Caio-style glowing rail) */}
          <div className="pointer-events-none absolute -bottom-[6px] left-6 right-6 h-[2px] overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-400 transition-all duration-150"
              style={{ width: `${Math.max(scrollProgress, 8)}%` }}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="mt-3 rounded-3xl border border-white/12 bg-[#060913]/95 backdrop-blur-2xl p-5 shadow-2xl lg:hidden">
            <div className="flex flex-col gap-2">
              {t.nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-xl px-4 py-2.5 text-left text-xs font-bold tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "bg-white/10 text-amber-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 py-2.5 text-xs font-bold text-amber-200"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
