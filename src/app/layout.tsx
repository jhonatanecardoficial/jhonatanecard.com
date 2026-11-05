import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jhonatan Ecard | Software Developer · Full-Stack & Applied AI",
  description:
    "Jhonatan Ecard — Desenvolvedor de Software Full-Stack & IA Aplicada (React, Next.js, TypeScript, Node.js, NestJS, LLMs, RAG, LangChain). 4.5+ anos na CI&T e 10+ anos em infraestrutura. Vila Nova de Gaia, Porto, Portugal.",
  keywords: [
    "Jhonatan Ecard",
    "Software Developer",
    "Full-Stack Developer",
    "Applied AI",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "RAG",
    "LangChain",
    "Porto",
    "Portugal",
  ],
  authors: [{ name: "Jhonatan Ecard", url: "https://jhonatanecard.com" }],
  openGraph: {
    title: "Jhonatan Ecard | Software Developer · Full-Stack & Applied AI",
    description:
      "Desenvolvedor de Software Full-Stack & IA Aplicada (React, Next.js, TypeScript, Node.js, RAG, LLMs). Porto, Portugal.",
    url: "https://jhonatanecard.com",
    siteName: "Jhonatan Ecard Portfolio",
    images: [
      {
        url: "https://jhonatanecard.com/assets/foto.jpg",
        width: 400,
        height: 400,
        alt: "Jhonatan Ecard",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        className="antialiased selection:bg-indigo-500/30 selection:text-white"
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
