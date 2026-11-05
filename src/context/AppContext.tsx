"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, Theme } from "@/types";
import { PORTFOLIO_CONTENT, PortfolioContent } from "@/data/portfolioData";

interface AppContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: PortfolioContent;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const savedLang = localStorage.getItem("je_locale") as Locale | null;
    if (savedLang === "pt" || savedLang === "en") {
      setLocaleState(savedLang);
      document.documentElement.lang = savedLang === "en" ? "en" : "pt-PT";
    }
    const savedTheme = localStorage.getItem("je_theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light-theme", savedTheme === "light");
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("je_locale", next);
    document.documentElement.lang = next === "en" ? "en" : "pt-PT";
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("je_theme", next);
    document.documentElement.classList.toggle("light-theme", next === "light");
  };

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        theme,
        toggleTheme,
        t: PORTFOLIO_CONTENT[locale],
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}
