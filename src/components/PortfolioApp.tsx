'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  Locale,
  portfolioData,
  ProjectCase,
  shaderThemes,
  ShaderTheme,
} from '@/data/portfolio';
import WebGLHeroCanvas from '@/components/WebGLHeroCanvas';
import ProjectArtwork from '@/components/ProjectArtwork';

export default function PortfolioApp() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [themeIndex, setThemeIndex] = useState<number>(0);
  const [loaderProgress, setLoaderProgress] = useState<number>(0);
  const [loaderDone, setLoaderDone] = useState<boolean>(false);
  const [loaderUnmounted, setLoaderUnmounted] = useState<boolean>(false);
  const [portoTime, setPortoTime] = useState<string>('PORTO --:--:--');
  const [hoveredProject, setHoveredProject] = useState<ProjectCase | null>(null);
  const [activeCaseModal, setActiveCaseModal] = useState<ProjectCase | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const content = portfolioData[locale];
  const activeTheme: ShaderTheme = shaderThemes[themeIndex];

  // Refs for interactive physics & animations
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelRef = useRef<HTMLSpanElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const journeySectionRef = useRef<HTMLElement | null>(null);
  const journeyPinRef = useRef<HTMLDivElement | null>(null);
  const journeyTrackRef = useRef<HTMLDivElement | null>(null);
  const journeyProgressRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Sync CSS --accent variable when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', activeTheme.hex);
  }, [activeTheme]);

  // 1. Preloader sequence (000 -> 100) + clean unmount
  useEffect(() => {
    let frameId = 0;
    let doneTimer: ReturnType<typeof setTimeout> | null = null;
    let unmountTimer: ReturnType<typeof setTimeout> | null = null;
    const duration = 650;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setLoaderProgress(Math.floor(eased * 100));

      if (t < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setLoaderProgress(100);
        doneTimer = setTimeout(() => {
          setLoaderDone(true);
          unmountTimer = setTimeout(() => {
            setLoaderUnmounted(true);
          }, 650);
        }, 120);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frameId);
      if (doneTimer) clearTimeout(doneTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, []);

  // 2. Live Porto clock (Europe/Lisbon)
  useEffect(() => {
    const updateClock = () => {
      try {
        const fmt = new Intl.DateTimeFormat('pt-PT', {
          timeZone: 'Europe/Lisbon',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setPortoTime(`PORTO ${fmt} WET`);
      } catch {
        setPortoTime('PORTO, PT');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3. Lenis Smooth Scroll + GSAP ScrollTrigger Horizontal Pinned Timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Horizontal pinned career journey on desktop
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1025px)', () => {
      const pinEl = journeyPinRef.current;
      const trackEl = journeyTrackRef.current;
      const progEl = journeyProgressRef.current;
      if (!pinEl || !trackEl) return;

      const getScrollAmount = () =>
        Math.max(0, trackEl.scrollWidth - window.innerWidth + 120);

      gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progEl) {
              progEl.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    });

    return () => {
      mm.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [locale]);

  // 4. Custom Dual-Physics Cursor + Velocity-Tilted Floating Project Preview
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let dx = tx;
    let dy = ty;
    let rx = tx;
    let ry = ty;
    let px = tx;
    let py = ty;
    let lastX = tx;
    let rot = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttrEl = target.closest('[data-cursor]') as HTMLElement | null;
      const interactiveEl = target.closest('a, button') as HTMLElement | null;

      if (cursorAttrEl) {
        const labelText = cursorAttrEl.getAttribute('data-cursor') || '';
        if (cursorLabelRef.current) {
          cursorLabelRef.current.textContent = labelText;
        }
        document.body.classList.add('cursor-label-mode');
        document.body.classList.remove('cursor-hover');
      } else if (interactiveEl) {
        document.body.classList.add('cursor-hover');
        document.body.classList.remove('cursor-label-mode');
      } else {
        document.body.classList.remove('cursor-hover', 'cursor-label-mode');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const tick = () => {
      dx += (tx - dx) * 0.62;
      dy += (ty - dy) * 0.62;
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      // Floating project preview velocity tilt
      px += (tx - px) * 0.14;
      py += (ty - py) * 0.14;
      const vx = tx - lastX;
      lastX = tx;
      rot += (vx * 0.22 - rot) * 0.12;
      const clampedRot = Math.max(-10, Math.min(10, rot));

      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) rotate(${clampedRot.toFixed(
          2
        )}deg)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // 5. Zero-Reflow Variable-Font Proximity Physics on Hero Title (.char)
  useEffect(() => {
    const titleEl = heroTitleRef.current;
    if (!titleEl) return;

    const chars = Array.from(titleEl.querySelectorAll<HTMLElement>('.char'));
    if (!chars.length) return;

    // Cache centers in a single read pass to avoid layout thrashing
    let centers: { el: HTMLElement; cx: number; cy: number }[] = [];
    const measureCenters = () => {
      centers = chars.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          el,
          cx: r.left + r.width / 2,
          cy: r.top + r.height / 2 + window.scrollY,
        };
      });
    };

    measureCenters();
    window.addEventListener('resize', measureCenters, { passive: true });

    let mouseX = -9999;
    let mouseY = -9999;
    let rafPending = false;
    const radius = 260;

    const updateChars = () => {
      rafPending = false;
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight) return;

      for (let i = 0; i < centers.length; i++) {
        const { el, cx, cy } = centers[i];
        const screenCy = cy - scrollY;
        const dist = Math.hypot(mouseX - cx, mouseY - screenCy);
        const t = Math.max(0, 1 - dist / radius);
        const eased = t * t * (3 - 2 * t);
        const wght = Math.round(300 + eased * 560);
        const lift = (-eased * 10).toFixed(1);
        el.style.fontVariationSettings = `'opsz' 144, 'wght' ${wght}`;
        el.style.transform = `translate3d(0, ${lift}px, 0)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(updateChars);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('resize', measureCenters);
      window.removeEventListener('mousemove', onMove);
    };
  }, [loaderDone]);

  // Close Case Modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCaseModal(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jhonatanecard@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch {
      window.location.href = 'mailto:jhonatanecard@gmail.com';
    }
  };

  const handleCycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % shaderThemes.length);
  };

  const handleNextProjectInModal = () => {
    if (!activeCaseModal) return;
    const items = content.works.items;
    const idx = items.findIndex((p) => p.id === activeCaseModal.id);
    const next = items[(idx + 1) % items.length];
    setActiveCaseModal(next);
  };

  const renderSplitChars = (word: string) =>
    word.split('').map((ch, idx) => (
      <span key={`${word}-${idx}`} className="char">
        {ch}
      </span>
    ));

  const activePillar =
    content.arsenal.pillars[activePillarIndex] || content.arsenal.pillars[0];

  return (
    <>
      {/* CUSTOM DUAL-PHYSICS CURSOR */}
      <div className="cursor" aria-hidden="true">
        <div ref={cursorDotRef} className="cursor-dot" />
        <div ref={cursorRingRef} className="cursor-ring">
          <span ref={cursorLabelRef} className="cursor-label" />
        </div>
      </div>

      {/* CINEMATIC PRELOADER */}
      {!loaderUnmounted && (
        <div
          className={`loader ${loaderDone ? 'is-done' : ''}`}
          style={{
            transform: loaderDone ? 'translate3d(0, -105%, 0)' : 'translate3d(0, 0, 0)',
            opacity: loaderDone ? 0 : 1,
            transition:
              'transform 0.65s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.55s ease',
          }}
          aria-hidden={loaderDone}
        >
          <div className="loader-top">
            <div>
              <span className="loader-brand">JE©</span> — Jhonatan Ecard
            </div>
            <div>{content.loader.subtitle}</div>
          </div>

          <div className="loader-boot">
            {content.loader.bootLines.map((line, i) => (
              <div key={i} className="loader-boot-line">
                <span className="dot" />
                <span>{line}</span>
              </div>
            ))}
          </div>

          <div className="loader-bottom">
            <div className="loader-counter-row">
              <span className="loader-counter">
                {String(loaderProgress).padStart(3, '0')}
              </span>
              <span
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  color: 'var(--accent)',
                }}
              >
                [WEBGL + LENIS READY]
              </span>
            </div>
            <div className="loader-bar">
              <div
                className="loader-bar-fill"
                style={{ width: `${loaderProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* FIXED BLEND-MODE HEADER */}
      <header className="site-header">
        <a href="#top" className="brand" data-cursor="TOPO">
          <span className="brand-mark">JE©</span>
          <span className="brand-sub">{content.meta.roleBadge}</span>
        </a>

        <nav className="site-nav" aria-label="Primary Navigation">
          <a href="#manifesto">
            <span>01</span>
            {content.nav.manifesto}
          </a>
          <a href="#obras">
            <span>02</span>
            {content.nav.works}
          </a>
          <a href="#jornada">
            <span>03</span>
            {content.nav.journey}
          </a>
          <a href="#arsenal">
            <span>04</span>
            {content.nav.arsenal}
          </a>
          <a href="#contato">
            <span>05</span>
            {content.nav.contact}
          </a>
        </nav>

        <div className="site-meta">
          <span className="meta-clock">
            <span className="meta-dot" />
            <span>{portoTime}</span>
          </span>

          <button
            type="button"
            onClick={handleCycleTheme}
            className="hud-pill"
            data-cursor="SHADER"
            title={`${content.nav.shaderLabel}: ${activeTheme.name}`}
          >
            <span className="theme-dot" />
            <span>{activeTheme.name}</span>
          </button>

          <button
            type="button"
            onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
            className="hud-pill"
            data-cursor={locale === 'pt' ? 'ENGLISH' : 'PORTUGUÊS'}
            aria-label="Alternar idioma PT/EN"
          >
            <span>{locale === 'pt' ? 'PT 🇵🇹 / EN' : 'EN 🇬🇧 / PT'}</span>
          </button>
        </div>
      </header>

      <main id="top">
        {/* ============================================================
            01 / HERO STAGE (WEBGL SHADER + VARIABLE FONT + PORTRAIT)
           ============================================================ */}
        <section className="hero">
          <WebGLHeroCanvas theme={activeTheme} />
          <div className="hero-grid-overlay" aria-hidden="true" />

          <div className="hero-top">
            <div className="hero-status">
              <span className="meta-dot" />
              <span>{content.meta.availability}</span>
            </div>
            <div>{content.meta.yearsSummary}</div>
            <div>
              LAT 41.1239° N / LON 8.6118° W — {content.meta.locationLabel}
            </div>
          </div>

          <div className="hero-stage">
            <div>
              <div className="hero-kicker">{content.hero.kicker}</div>
              <h1
                ref={heroTitleRef}
                className="hero-title"
                aria-label="Jhonatan Ecard"
              >
                <span className="line line-1">
                  {renderSplitChars('JHONATAN')}
                </span>
                <span className="line line-2">
                  <span className="italic-word">
                    {renderSplitChars('ECARD')}
                  </span>
                  <span className="accent-mark">*</span>
                </span>
              </h1>
            </div>

            <aside
              className="hero-portrait-card"
              data-cursor={locale === 'pt' ? 'FULL-STACK · IA' : 'FULL-STACK · AI'}
            >
              <div className="portrait-img-wrap">
                <img
                  src="/assets/foto.jpg"
                  alt="Jhonatan Ecard — Software Developer"
                  className="portrait-img"
                />
                <div className="portrait-badge">
                  <span>{content.hero.telemetryLabel}</span>
                  <span>●</span>
                </div>
              </div>
              <div className="portrait-meta">
                <strong>{content.hero.portraitCaption}</strong>
                <span>{content.hero.portraitSub}</span>
              </div>
            </aside>
          </div>

          <div className="hero-bottom">
            <p className="hero-sub">{content.hero.subtitle}</p>

            <div className="hero-actions">
              <a
                href="#obras"
                className="btn-magnetic btn-primary"
                data-cursor="VER OBRAS"
              >
                <span>{content.hero.ctaPrimary}</span>
                <span>↘</span>
              </a>
              <a
                href="/assets/Jhonatan-Ecard-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-outline"
                data-cursor="PDF 1-PÁG"
              >
                <span>{content.hero.ctaCv}</span>
                <span>↓</span>
              </a>
              <a
                href="#contato"
                className="btn-magnetic btn-outline"
                data-cursor="CONTATO"
              >
                <span>{content.hero.ctaSecondary}</span>
              </a>
            </div>

            <div className="scroll-hint">
              <span>{content.hero.scrollHint}</span>
              <span className="scroll-line" />
            </div>
          </div>
        </section>

        {/* ============================================================
            02 / FULL-BLEED KINETIC MARQUEE
           ============================================================ */}
        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...content.marquee, ...content.marquee].map((item, idx) => (
              <span key={idx} className="marquee-item">
                <span>{item}</span>
                <span className="marquee-sep">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ============================================================
            03 / EDITORIAL PAPER MANIFESTO (#manifesto)
           ============================================================ */}
        <section id="manifesto" className="manifesto">
          <div className="manifesto-grid">
            <div className="section-index">
              <div>{content.manifesto.indexLabel}</div>
              <p className="section-index-sub">{content.manifesto.indexSub}</p>
            </div>

            <div>
              <h2 className="manifesto-lead">
                {content.manifesto.leadQuote}
                <em>{content.manifesto.leadHighlight}</em>
              </h2>

              <div className="manifesto-cols">
                <p>{content.manifesto.bodyCol1}</p>
                <p>{content.manifesto.bodyCol2}</p>
              </div>

              <div className="manifesto-stats">
                {content.manifesto.stats.map((st, idx) => (
                  <div key={idx} className="stat-card">
                    <div className="stat-num">
                      {st.value}
                      {st.suffix}
                    </div>
                    <span className="stat-label">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 / SELECTED WORKS INDEX (#obras) + VELOCITY PREVIEW + MODAL
           ============================================================ */}
        <section id="obras" className="works">
          <div className="section-head">
            <div>
              <div
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {content.works.indexLabel}
              </div>
              <h2 className="section-title">{content.works.title}</h2>
            </div>
            <p className="section-sub">{content.works.subtitle}</p>
          </div>

          <ul
            className="project-list"
            onMouseLeave={() => setHoveredProject(null)}
          >
            {content.works.items.map((proj) => (
              <li
                key={proj.id}
                className="project-row"
                onMouseEnter={() => setHoveredProject(proj)}
              >
                <button
                  type="button"
                  className="project-trigger"
                  data-cursor={content.works.cursorLabel}
                  onClick={() => setActiveCaseModal(proj)}
                >
                  <span className="p-num">/{proj.num}</span>

                  <div className="p-title-wrap">
                    <span className="p-title">{proj.title}</span>
                    <span className="p-sub">{proj.subtitle}</span>
                  </div>

                  <div className="p-meta-col">
                    <span className="p-cat">{proj.category}</span>
                    <span
                      className={`p-badge ${
                        proj.isProprietary ? 'proprietary' : 'opensource'
                      }`}
                    >
                      {proj.isProprietary
                        ? `🔒 ${content.works.proprietaryTag}`
                        : `⚡ ${content.works.openSourceTag}`}
                    </span>
                  </div>

                  <div className="p-year-col">
                    <span>{proj.year}</span>
                    <span className="p-arrow">↗</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Floating Velocity-Tilted Project Preview */}
          <div
            ref={previewRef}
            className={`project-preview ${hoveredProject ? 'is-visible' : ''}`}
            aria-hidden="true"
          >
            {hoveredProject && (
              <ProjectArtwork
                projectId={hoveredProject.id}
                accentColor={hoveredProject.accentColor}
                mode="preview"
              />
            )}
          </div>
        </section>

        {/* ============================================================
            05 / GSAP PINNED HORIZONTAL CAREER JOURNEY (#jornada)
           ============================================================ */}
        <section ref={journeySectionRef} id="jornada" className="journey">
          <div ref={journeyPinRef} className="journey-pin">
            <div className="journey-head">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {content.journey.indexLabel}
                </div>
                <h2 className="section-title">{content.journey.title}</h2>
              </div>
              <div style={{ maxWidth: '44ch' }}>
                <p className="section-sub">{content.journey.subtitle}</p>
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontFamily: 'var(--f-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                  }}
                >
                  {content.journey.scrollHint}
                </div>
              </div>
            </div>

            <div ref={journeyTrackRef} className="journey-track">
              {content.journey.stages.map((st) => (
                <article
                  key={st.num}
                  className="journey-card"
                  data-cursor={st.period}
                >
                  <div>
                    <div className="j-card-top">
                      <span>STAGE /{st.num}</span>
                      <span>{st.period}</span>
                    </div>
                    <h3 className="j-role">{st.role}</h3>
                    <div className="j-company">
                      {st.company} · {st.location}
                    </div>
                    <p className="j-desc">{st.description}</p>
                  </div>

                  <div>
                    <ul
                      style={{
                        listStyle: 'none',
                        marginBottom: '1.1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: 'var(--fg)',
                      }}
                    >
                      {st.metrics.map((m, idx) => (
                        <li key={idx}>✦ {m}</li>
                      ))}
                    </ul>
                    <div className="j-tags">
                      {st.stack.map((tech) => (
                        <span key={tech} className="j-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="journey-progress">
              <div ref={journeyProgressRef} className="journey-progress-bar" />
            </div>
          </div>
        </section>

        {/* ============================================================
            06 / INTERACTIVE TECHNICAL ARSENAL & CREDENTIALS (#arsenal)
           ============================================================ */}
        <section id="arsenal" className="arsenal">
          <div className="section-head">
            <div>
              <div
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {content.arsenal.indexLabel}
              </div>
              <h2 className="section-title">{content.arsenal.title}</h2>
            </div>
            <p className="section-sub">{content.arsenal.subtitle}</p>
          </div>

          <div className="arsenal-layout">
            <div className="pillar-tabs" role="tablist">
              {content.arsenal.pillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={activePillarIndex === idx}
                  className={`pillar-tab ${
                    activePillarIndex === idx ? 'is-active' : ''
                  }`}
                  onClick={() => setActivePillarIndex(idx)}
                  onMouseEnter={() => setActivePillarIndex(idx)}
                  data-cursor={`PILAR ${pillar.num}`}
                >
                  <span className="pillar-tab-num">/{pillar.num}</span>
                  <div>
                    <div className="pillar-tab-title">{pillar.title}</div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--muted)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {pillar.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pillar-detail-panel" role="tabpanel">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  ARQUITETURA & CAPACIDADE TÉCNICA // PILAR {activePillar.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 300,
                    marginTop: '0.4rem',
                  }}
                >
                  {activePillar.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(245,242,235,0.82)',
                    marginTop: '0.85rem',
                    lineHeight: 1.65,
                    maxWidth: '64ch',
                  }}
                >
                  {activePillar.description}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    marginTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    fontSize: '0.92rem',
                  }}
                >
                  {activePillar.deliverables.map((del, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'baseline',
                      }}
                    >
                      <span style={{ color: 'var(--accent)' }}>→</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pillar-tech-grid">
                {activePillar.technologies.map((t) => (
                  <div key={t.name} className="pillar-tech-item">
                    <span style={{ fontWeight: 500 }}>{t.name}</span>
                    <span
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {t.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Credentials + 1-Page Executive CV */}
          <div className="credentials-grid">
            <div>
              <h3
                style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: '2rem',
                  fontWeight: 300,
                  marginBottom: '0.4rem',
                }}
              >
                {content.arsenal.credentialsTitle}
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: '0.92rem',
                  marginBottom: '1.75rem',
                }}
              >
                {content.arsenal.credentialsSubtitle}
              </p>

              <div className="cred-list">
                {content.arsenal.credentials.map((cred, i) => (
                  <div key={i} className="cred-card">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--f-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        marginBottom: '0.65rem',
                      }}
                    >
                      <span>{cred.period}</span>
                      <span>[{cred.badge}]</span>
                    </div>
                    <h4
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {cred.title}
                    </h4>
                    <div
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--muted)',
                        marginBottom: '0.65rem',
                      }}
                    >
                      {cred.institution}
                    </div>
                    <p
                      style={{
                        fontSize: '0.84rem',
                        color: 'rgba(245,242,235,0.78)',
                        lineHeight: 1.55,
                      }}
                    >
                      {cred.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="cv-showcase-card">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  DOCUMENTO EXECUTIVO · 1 PÁGINA
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: '2.2rem',
                    fontWeight: 300,
                    marginTop: '0.5rem',
                  }}
                >
                  {content.arsenal.cvCardTitle}
                </h3>
                <p
                  style={{
                    color: 'rgba(245,242,235,0.82)',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginTop: '1rem',
                  }}
                >
                  {content.arsenal.cvCardDesc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <a
                  href="/assets/Jhonatan-Ecard-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn-magnetic btn-primary"
                  style={{ justifyContent: 'center' }}
                  data-cursor="DOWNLOAD PDF"
                >
                  <span>{content.arsenal.cvDownloadBtn}</span>
                  <span>↓</span>
                </a>
                <div
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--muted)',
                    textAlign: 'center',
                  }}
                >
                  Jhonatan-Ecard-CV.pdf · ATS-Friendly · Atualizado 2026
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ============================================================
            07 / MONUMENTAL CONTACT FOOTER (#contato)
           ============================================================ */}
        <footer id="contato" className="site-footer">
          <div className="footer-kicker">{content.footer.kicker}</div>

          <h2 className="footer-title">
            {content.footer.titleLine1}
            <br />
            <em>{content.footer.titleLine2}</em>
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <button
              type="button"
              onClick={handleCopyEmail}
              className="footer-email-btn"
              data-cursor={
                emailCopied ? 'COPIADO!' : content.footer.copyEmailHint
              }
            >
              <span>jhonatanecard@gmail.com</span>
              <span style={{ fontSize: '0.75em', color: 'var(--accent)' }}>
                {emailCopied ? '✓' : '↗'}
              </span>
            </button>

            <a
              href="https://wa.me/351911782332"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-outline"
              data-cursor="WHATSAPP"
            >
              <span>{content.footer.whatsappCta}</span>
              <span>↗</span>
            </a>
          </div>

          {emailCopied && (
            <div
              style={{
                marginTop: '1rem',
                fontFamily: 'var(--f-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent)',
              }}
            >
              ✦ {content.footer.emailCopied}
            </div>
          )}

          <div className="footer-bottom">
            <div>{content.footer.rights}</div>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/jhonatan-ecard/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/jhonatanecardoficial"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
              >
                GitHub ↗
              </a>
              <a
                href="/assets/Jhonatan-Ecard-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CURRÍCULO"
              >
                CV PDF ↓
              </a>
              <button
                type="button"
                onClick={() => {
                  if (lenisRef.current) {
                    lenisRef.current.scrollTo(0);
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
                data-cursor="TOPO"
              >
                {content.footer.backToTop}
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* ============================================================
          INTERACTIVE CASE STUDY & SYSTEM ARCHITECTURE MODAL
         ============================================================ */}
      {activeCaseModal && (
        <div
          className="case-modal-backdrop"
          onClick={() => setActiveCaseModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeCaseModal.title}
        >
          <div className="case-modal" onClick={(e) => e.stopPropagation()}>
            <div className="case-modal-top">
              <div
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                CASE STUDY /{activeCaseModal.num} — {activeCaseModal.category}
              </div>

              <button
                type="button"
                className="case-modal-close"
                onClick={() => setActiveCaseModal(null)}
              >
                {content.works.modal.close}
              </button>
            </div>

            <div className="case-modal-header">
              <div>
                <span
                  className={`p-badge ${
                    activeCaseModal.isProprietary ? 'proprietary' : 'opensource'
                  }`}
                >
                  {activeCaseModal.licenseBadge}
                </span>
                <h3 className="case-modal-title">{activeCaseModal.title}</h3>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: 'rgba(245,242,235,0.85)',
                    lineHeight: 1.65,
                  }}
                >
                  {activeCaseModal.summary}
                </p>
              </div>

              <div
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid var(--line-strong)',
                }}
              >
                <ProjectArtwork
                  projectId={activeCaseModal.id}
                  accentColor={activeCaseModal.accentColor}
                  mode="modal"
                />
              </div>
            </div>

            {activeCaseModal.isProprietary && activeCaseModal.licenseNote && (
              <div className="case-license-banner">
                <strong>🔒 AVISO DE PROPRIEDADE INTELECTUAL: </strong>
                {activeCaseModal.licenseNote}
              </div>
            )}

            <div className="case-grid-2">
              <div className="case-box">
                <h4>{content.works.modal.challengeTitle}</h4>
                <p>{activeCaseModal.challenge}</p>
              </div>
              <div className="case-box">
                <h4>{content.works.modal.solutionTitle}</h4>
                <p>{activeCaseModal.architectureSolution}</p>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                {content.works.modal.blueprintTitle}
              </h4>
              <div className="blueprint-grid">
                {activeCaseModal.architectureNodes.map((node, idx) => (
                  <div key={idx} className="blueprint-node">
                    <div className="blueprint-layer">{node.layer}</div>
                    <div className="blueprint-tech">{node.tech}</div>
                    <div className="blueprint-detail">{node.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-grid-2">
              <div className="case-box">
                <h4>{content.works.modal.highlightsTitle}</h4>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                    fontSize: '0.9rem',
                    color: 'rgba(245,242,235,0.84)',
                  }}
                >
                  {activeCaseModal.highlights.map((h, i) => (
                    <li key={i}>✦ {h}</li>
                  ))}
                </ul>
              </div>

              <div className="case-box">
                <h4>{content.works.modal.stackTitle}</h4>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {activeCaseModal.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.35rem 0.7rem',
                        border: '1px solid var(--line-strong)',
                        fontFamily: 'var(--f-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--fg)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="case-modal-footer">
              <a
                href={activeCaseModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-primary"
              >
                <span>{content.works.modal.viewGithub}</span>
                <span>↗</span>
              </a>

              <button
                type="button"
                onClick={handleNextProjectInModal}
                className="btn-magnetic btn-outline"
              >
                <span>{content.works.modal.nextProject}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
