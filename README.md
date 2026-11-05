# ⚡ Jhonatan Ecard — Personal Portfolio & Engineering Showcase (`v2.0`)

> **Live Website:** [https://jhonatanecard.com](https://jhonatanecard.com)

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](./LICENSE)

---

## 📋 Overview / Visão Geral

**[PT]** Repositório oficial do portfólio pessoal profissional de **Jhonatan Ecard** ([jhonatanecard.com](https://jhonatanecard.com)), projetado e codificado com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**. O projeto combina estética dark glassmorphism de alto contraste, carrossel orbital interativo de projetos, Bento Grids arquiteturais, suporte bilíngue instantâneo (**Português / Inglês**) e alternância de tema (**Dark / Light**).

**[EN]** Official repository for **Jhonatan Ecard**'s personal engineering portfolio ([jhonatanecard.com](https://jhonatanecard.com)), built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**. Featuring high-contrast dark glassmorphism aesthetics, an interactive orbital project carousel, architectural Bento Grids, instant **PT / EN** internationalization, and **Dark / Light** theme switching.

---

## ✨ Key Features / Funcionalidades

- **🎨 Luxury Glassmorphism & Bento UI:** Floating glass pill navbar with live scroll progress indicator, multi-stop blue/gold/indigo typography gradients, ambient radial spotlights, and custom vector developer illustrations.
- **🌐 Instant Bilingual Engine (`PT` / `EN`):** Reactive client-side internationalization (`AppContext`) with `localStorage` persistence and segmented flag switcher.
- **🌓 Adaptive Theme Switcher (`Dark` / `Light`):** Seamless theme transition powered by CSS custom properties.
- **🎡 Interactive 3D Coverflow Project Stage + Architecture Grid:** Interactive orbital emblem selector paired with a detailed technical breakdown grid for every featured repository.
- **📄 Built-in Resume Download & Interactive Contact Dispatch:** Direct 1-click PDF CV download (`Jhonatan-Ecard-CV.pdf`) and interactive topic-selector form integrated with **E-mail (`mailto:`)** and **WhatsApp**.
- **🚀 Static Export Ready (`output: "export"`):** Pre-rendered static bundle (`out/`) for sub-second TTFB on any static/CDN host.

---

## 🏗️ Project Architecture / Estrutura do Projeto

```text
jhonatanecard.com/
├── public/
│   └── assets/                  # Static assets (Portrait, SVG flags, Favicon, CV PDF)
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, glassmorphic utilities & animations
│   │   ├── layout.tsx           # Root layout, Google Fonts (DM Sans + JetBrains Mono) & SEO metadata
│   │   └── page.tsx             # Main single-page composition
│   ├── components/
│   │   ├── Navbar.tsx           # Floating glass pill header + scroll progress rail + PT/EN & Theme controls
│   │   ├── HeroSection.tsx      # Availability badge, gradient headline, CTAs & framed portrait with floating badges
│   │   ├── AboutSection.tsx     # Custom SVG architect illustration, story card, 4-metric Bento & categorized Tech Arsenal
│   │   ├── ProjectsSection.tsx  # Interactive orbital coverflow carousel + Spotlight card + Architectural Bento Grid
│   │   ├── ExperienceSection.tsx# Career timeline (CI&T, Engineering, Mastermaq, IBM) + Education & Certifications
│   │   ├── ServicesSection.tsx  # 2x2 custom engineering solutions grid + high-contrast strategy CTA banner
│   │   ├── ContactSection.tsx   # Dual contact cards + interactive topic-selector form (Email & WhatsApp)
│   │   ├── ResumeSection.tsx    # Glassmorphic PDF curriculum download card
│   │   └── Footer.tsx           # Signature footer, cursor spotlight orb & floating Up/Down section controls
│   ├── context/
│   │   └── AppContext.tsx       # Reactive PT/EN locale, Dark/Light theme & active section state
│   ├── data/
│   │   └── portfolioData.ts     # Strictly typed bilingual content & project metadata
│   └── types/
│       └── index.ts             # TypeScript domain interfaces
├── docs/
│   └── ARCHITECTURE.md          # Detailed architectural & design system notes
├── next.config.ts               # Static export configuration
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Static Export) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.8 (Strict Mode) |
| **Styling** | Tailwind CSS v4 + Custom CSS Variables |
| **Icons & Graphics** | Lucide React + Custom Hand-Crafted SVGs |
| **Typography** | `DM Sans` (UI/Headings) + `JetBrains Mono` (Code/Labels) |

---

## 🚀 Getting Started / Executar Localmente

### Prerequisites
- **Node.js** `>= 20.0.0`
- **npm** or **pnpm**

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/jhonatanecardoficial/jhonatanecard.com.git
cd jhonatanecard.com

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Static Build

```bash
# Type-check and generate static production bundle in ./out
npm run type-check
npm run build
```

---

## 📬 Contact / Contato

- **Website:** [https://jhonatanecard.com](https://jhonatanecard.com)
- **LinkedIn:** [linkedin.com/in/jhonatan-ecard](https://www.linkedin.com/in/jhonatan-ecard/)
- **GitHub:** [github.com/jhonatanecardoficial](https://github.com/jhonatanecardoficial)
- **E-mail:** [jhonatanecard@gmail.com](mailto:jhonatanecard@gmail.com)
- **Location:** Vila Nova de Gaia, Porto — Portugal

---

## 📄 License

Licensed under the [MIT License](./LICENSE). Copyright © 2026 **Jhonatan Ecard**.
