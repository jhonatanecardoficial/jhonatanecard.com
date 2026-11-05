# Technical Architecture & Design System (`jhonatanecard.com`)

## 1. Architectural Goals

1. **Zero-Latency Static Delivery:** Configured with `output: "export"` in `next.config.ts` so Next.js 15 pre-renders all routes into static HTML/CSS/JS bundles inside `out/`, ensuring instant TTFB on Hostinger or any CDN.
2. **Strict Separation of Content & Presentation:** All bilingual copy (`pt` and `en`), career timeline entries, tech stack categories, and project architecture highlights live in `src/data/portfolioData.ts` typed against `src/types/index.ts`.
3. **Instant Client-Side Localization:** `src/context/AppContext.tsx` provides reactive language switching (`pt` / `en`) and theme toggling (`dark` / `light`) without page reloads or route flickering.

## 2. Visual & Design System

- **Color Palette:**
  - Deep Obsidian Canvas: `#030508` / `#080c14`
  - Glass Surface: `rgba(14, 19, 30, 0.72)` with `backdrop-filter: blur(18px)`
  - Signature Gradients: Sky Blue (`#60a5fa`) → Indigo (`#818cf8`) → Warm Gold (`#eab308`)
- **Typography:**
  - Headings & Body: `DM Sans` (400–800)
  - Technical Labels & Code: `JetBrains Mono` (400–700)

## 3. Component Breakdown

- **`Navbar.tsx`:** Floating pill navigation with real-time scroll progress bar, active section intersection observer, segmented flag switcher (`PT | EN`), theme toggle, and direct WhatsApp/phone CTA.
- **`HeroSection.tsx`:** High-impact introduction with availability indicator, multi-stop gradient headline, tech stack bar, and studio portrait framed with floating glass badges.
- **`AboutSection.tsx`:** Custom vector developer/AI illustration, narrative card, 4-metric Bento counters, and interactive categorized Tech Arsenal filter.
- **`ProjectsSection.tsx`:** Interactive 3D orbital coverflow carousel paired with a 2x2 architectural breakdown Bento grid.
- **`ExperienceSection.tsx`:** Vertical timeline of corporate experience (CI&T, Engineering Brasil, Mastermaq, IBM/Stefanini) and academic specialization (MBA & Postgrad in Software Engineering with AI).
- **`ServicesSection.tsx`:** 2x2 tailored engineering solutions grid and high-contrast CTA banner.
- **`ContactSection.tsx` & `ResumeSection.tsx`:** Interactive service-selector contact form (Email + WhatsApp dispatch) and 1-click PDF resume download card.
