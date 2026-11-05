# Arquitetura Técnica — JhonatanEcard.com (v3.0 Award Edition)

Este documento descreve as decisões de engenharia, renderização gráfica e coreografia de movimento implementadas no portfólio oficial de **Jhonatan Ecard** (`https://jhonatanecard.com`).

---

## 1. Visão Geral da Stack

| Camada | Tecnologia | Papel na Arquitetura |
| :--- | :--- | :--- |
| **Framework Core** | Next.js 15.5 (App Router) + React 19 | Estrutura modular com Static Export (`output: "export"`) para latência zero em CDN/Hostinger. |
| **Tipagem & Dados** | TypeScript 5.8 (`strict: true`) | Contratos estritos para conteúdo bilíngue (`PT` / `EN`), casos de arquitetura e temas do shader. |
| **Gráficos em Tempo Real** | WebGL 1.0 + GLSL Fragment Shader | Campo fluido fractal (5-octave FBM + domain warping) reativo ao mouse, scroll e troca de paleta. |
| **Física de Scroll & Pinning** | Lenis + GSAP 3 + ScrollTrigger | Rolagem com inércia suave sincronizada ao `gsap.ticker` e timeline horizontal pinada em `#jornada`. |
| **Tipografia Cinética** | Google Fonts (`Fraunces`, `Space Grotesk`, `JetBrains Mono`) | Interpolação por frame de `font-variation-settings` (`wght` 300..880) baseada em distância euclidiana ao cursor. |

---

## 2. Pipeline WebGL GLSL (`src/components/WebGLHeroCanvas.tsx`)

O plano de fundo da seção Hero executa um shader procedural em GPU sem dependências pesadas de Three.js:

- **Domain Warping:** Combina três camadas de `fbm(p)` rotacionadas para criar ondas topográficas orgânicas.
- **Uniforms Dinâmicos:**
  - `u_res`: Resolução ajustada por `Math.min(window.devicePixelRatio, 1.75)` para equilíbrio entre nitidez Retina e 60fps constantes.
  - `u_mouse`: Coordenadas do cursor suavizadas via interpolação linear (`lerp 0.05`).
  - `u_scroll`: Deslocamento de fase conforme o usuário rola a página.
  - `u_accent` / `u_secondary`: Vetores RGB interpolados em tempo real quando o usuário alterna entre os modos **NEURAL VOLT (`#D4FF3A`)**, **AETHER MINT (`#38F2AF`)** e **SOLAR FLARE (`#FFB830`)**.

---

## 3. Física de Proximidade Tipográfica & Cursor Duplo

- **Split Characters (`.char`):** O título principal é dividido em `<span className="char">`. Durante o loop `requestAnimationFrame`, quando a Hero está visível na viewport, a distância entre o ponteiro e o centro de cada letra determina seu peso variável (`wght`) e deslocamento vertical (`translateY`).
- **Dual-Physics Cursor:** Um ponto central rápido (`lerp 0.62`) e um anel externo com inércia (`lerp 0.15`) expandem para um disco sólido de `92px` sempre que o usuário interage com elementos marcados com `data-cursor="..."`.
- **Velocity-Tilted Project Preview:** Na lista de obras (`#obras`), o card flutuante calcula a velocidade horizontal instantânea do cursor (`vx = tx - lastX`) e aplica rotação amortecida (`rotate(-10deg..10deg)`), exibindo o blueprint vetorial do projeto em foco.
