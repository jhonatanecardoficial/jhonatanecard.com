# Jhonatan Ecard — Creative Engineering & Applied AI Portfolio (v3.0 Award Edition)

[![Live Website](https://img.shields.io/badge/Live-jhonatanecard.com-D4FF3A?style=for-the-badge&logo=vercel&logoColor=black)](https://jhonatanecard.com)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.1-149ECA?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![WebGL GLSL](https://img.shields.io/badge/WebGL-GLSL_Shaders-38F2AF?style=for-the-badge&logo=opengl&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
[![GSAP ScrollTrigger](https://img.shields.io/badge/GSAP-ScrollTrigger_%2B_Lenis-88CE02?style=for-the-badge)](https://gsap.com/)

> **Portfólio oficial e vitrine de engenharia criativa de [Jhonatan Ecard](https://jhonatanecard.com)** — Desenvolvedor de Software Full-Stack & IA Aplicada baseado no Porto, Portugal (+4,5 anos na **CI&T Lisboa** + 10 anos em Infraestrutura Crítica Enterprise na **IBM, Engineering Brasil, Mastermaq & Stefanini**).

---

## ✦ Direção de Arte & Engenharia Visual (Awwwards-Caliber Architecture)

Diferente de templates convencionais de portfólio, esta aplicação foi projetada do zero unindo **Engenharia de Software Full-Stack** e **Creative Coding a 60fps**:

1. **Pipeline WebGL Fragment Shader em Tempo Real (`WebGLHeroCanvas.tsx`)**
   - Shader GLSL customizado com **Fractional Brownian Motion (FBM)** e *domain warping* em 5 oitavas.
   - Reage continuamente à posição do cursor (`u_mouse`), velocidade de rolagem (`u_scroll`) e **troca de tema cromático em tempo real** (`NEURAL VOLT`, `AETHER MINT`, `SOLAR FLARE`) via interpolação suave de `uniform vec3`.
2. **Tipografia Variável com Física de Proximidade (`Fraunces` Optical Size 144)**
   - Cada caractere do título monumental (`JHONATAN ECARD*`) calcula sua distância euclidiana até o cursor a cada frame (`requestAnimationFrame`), interpolando dinamicamente `font-variation-settings: 'opsz' 144, 'wght' 300..880` e elevação magnética vertical.
3. **Coreografia de Rolagem com Lenis + GSAP ScrollTrigger**
   - Inércia suave de rolagem via **Lenis** sincronizada diretamente ao `gsap.ticker`.
   - **Seção Horizontal Pinada (`#jornada`)**: no desktop, o scroll vertical fixa a viewport e desloca horizontalmente os 6 estágios da carreira (`2006` → `2026`) com barra de progresso em tempo real.
4. **Índice Tipográfico de Obras + Prévia Flutuante com Inclinação por Velocidade + Modal de Arquitetura**
   - Ao passar o cursor sobre as obras (`Advocatus IA`, `CPWE Engine`, `PaperClip · Hermes · OpenClaw`, `JhonatanEcard.com`), um card flutuante segue o cursor com inclinação proporcional à velocidade horizontal (`vx * 0.22`) exibindo diagramas vetoriais da arquitetura.
   - Clicar em qualquer obra abre um **Estudo de Caso & Blueprint de Arquitetura** detalhado com camadas técnicas, problema/solução e links diretos.
5. **Contraste Editorial de Alto Impacto + Cursor Duplo com Rótulos Contextuais (`[data-cursor]`)**
   - Alternância dramática entre **Obsidian Void (`#070709`)** e **Warm Archival Paper (`#EBE5DA`)** na seção de Manifesto, acompanhada de película de grão cinematográfico SVG e cursor magnético de duplo anel.

---

## 🏛️ Estrutura do Projeto

```text
jhonatanecard.com/
├── docs/
│   └── ARCHITECTURE.md                # Documentação detalhada da arquitetura WebGL + GSAP + Next.js
├── public/
│   └── assets/
│       ├── foto.jpg                   # Retrato oficial de Jhonatan Ecard
│       └── Jhonatan-Ecard-CV.pdf      # Currículo executivo de 1 página (PDF)
├── src/
│   ├── app/
│   │   ├── globals.css                # Design tokens, tipografia editorial, cursor, grain & layout
│   │   ├── layout.tsx                 # Fontes variáveis (Fraunces, Space Grotesk, JetBrains Mono) + SEO JSON-LD
│   │   └── page.tsx                   # Ponto de entrada da aplicação
│   ├── components/
│   │   ├── PortfolioApp.tsx           # Orquestrador principal (Lenis, GSAP, Cursor, Seções & Modal)
│   │   ├── WebGLHeroCanvas.tsx        # Pipeline WebGL1 GLSL Fragment Shader a 60fps
│   │   └── ProjectArtwork.tsx         # Diagramas vetoriais de arquitetura de cada projeto
│   └── data/
│       └── portfolio.ts               # Conteúdo bilíngue tipado (PT / EN) e temas do shader
├── next.config.ts                     # Configuração de Static Export (output: 'export')
├── package.json
└── tsconfig.json
```

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Validar tipagem TypeScript
npm run type-check

# 4. Gerar build estático de produção (pasta out/)
npm run build
```

---

## 📬 Contato & Links Oficiais

- **Website:** [https://jhonatanecard.com](https://jhonatanecard.com)
- **LinkedIn:** [linkedin.com/in/jhonatan-ecard](https://www.linkedin.com/in/jhonatan-ecard/)
- **GitHub:** [github.com/jhonatanecardoficial](https://github.com/jhonatanecardoficial)
- **E-mail:** [jhonatanecard@gmail.com](mailto:jhonatanecard@gmail.com)
- **Localização:** Vila Nova de Gaia, Porto — Portugal 🇵🇹

---

## 📄 Licença

Código-fonte deste portfólio disponibilizado sob a licença [MIT](./LICENSE) como referência de engenharia Front-End e Creative Coding.
*(Nota: O projeto **Advocatus IA** referenciado no portfólio possui licença proprietária estrita — todos os direitos reservados).*
