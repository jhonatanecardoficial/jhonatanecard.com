import {
  EducationItem,
  ExperienceItem,
  Locale,
  NavItem,
  ProjectItem,
  ServiceItem,
  StackCategory,
} from "@/types";

export const CONTACT_INFO = {
  name: "Jhonatan Ecard",
  initials: "JE",
  email: "jhonatanecard@gmail.com",
  phoneDisplay: "+351 911 782 332",
  phoneHref: "tel:+351911782332",
  whatsappHref: "https://wa.me/351911782332",
  location: "Vila Nova de Gaia, Porto — Portugal",
  linkedin: "https://www.linkedin.com/in/jhonatan-ecard/",
  github: "https://github.com/jhonatanecardoficial",
  website: "https://jhonatanecard.com",
  cvPath: "/assets/Jhonatan-Ecard-CV.pdf",
  cvFileName: "Jhonatan-Ecard-CV.pdf",
  cvSize: "142 KB",
};

export interface PortfolioContent {
  nav: NavItem[];
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    techStackLabel: string;
    floatingBadges: {
      expTitle: string;
      expSub: string;
      aiTitle: string;
      aiSub: string;
      locTitle: string;
    };
  };
  about: {
    kicker: string;
    title: string;
    rolePill: string;
    introBold: string;
    introHighlight: string;
    paragraph1: string;
    paragraph2: string;
    closingBold: string;
    closingHighlight: string;
    stats: { value: string; label: string; detail: string }[];
    terminalTitle: string;
    stackCategories: StackCategory[];
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    discoverMore: string;
    viewRepo: string;
    viewLive: string;
    archLabel: string;
    gridTitle: string;
    items: ProjectItem[];
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    eduTitle: string;
    eduKicker: string;
    items: ExperienceItem[];
    education: EducationItem[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    bannerTitle1: string;
    bannerTitle2: string;
    bannerSub: string;
    bannerCta: string;
  };
  contact: {
    kicker: string;
    title: string;
    servicesHeading: string;
    connectedHeading: string;
    startProjectHeading: string;
    startProjectText: string;
    aboutHeading: string;
    aboutText: string;
    emailLabel: string;
    callLabel: string;
    locationLabel: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formTopicLabel: string;
    formTopics: { id: string; label: string }[];
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formWhatsapp: string;
    formSuccess: string;
  };
  resume: {
    kicker: string;
    title: string;
    subtitle: string;
    cardDescription: string;
    downloadBtn: string;
    disclaimer: string;
  };
  footer: {
    designedText: string;
    builtWith: string;
    fontNote: string;
    rights: string;
  };
}

export const PORTFOLIO_CONTENT: Record<Locale, PortfolioContent> = {
  pt: {
    nav: [
      { id: "home", label: "INÍCIO" },
      { id: "about", label: "SOBRE" },
      { id: "projects", label: "PROJETOS" },
      { id: "experience", label: "TRAJETÓRIA" },
      { id: "services", label: "SOLUÇÕES" },
      { id: "contact", label: "CONTATO" },
    ],
    hero: {
      statusBadge: "Disponível para novos projetos & oportunidades",
      greeting: "Olá, eu sou",
      name: "Jhonatan Ecard",
      titleLine1: "Desenvolvedor de Software",
      titleLine2: "Full-Stack & IA Aplicada",
      description:
        "Transformo desafios complexos de negócio em aplicações web modernas, escaláveis e potenciadas por Inteligência Artificial — combinando mais de 4 anos como desenvolvedor na CI&T com uma base sólida de mais de 10 anos em infraestrutura crítica.",
      ctaPrimary: "Ver Projetos",
      ctaSecondary: "Entrar em Contato",
      ctaResume: "Currículo PDF",
      techStackLabel: "TECH STACK",
      floatingBadges: {
        expTitle: "4.5+ Anos na CI&T",
        expSub: "Full-Stack & AI-Augmented Dev",
        aiTitle: "LLMs · RAG · Agentes",
        aiSub: "Pós & MBA em Eng. de Software c/ IA",
        locTitle: "Porto, Portugal",
      },
    },
    about: {
      kicker: "// MINHA HISTÓRIA",
      title: "Um pouco sobre mim",
      rolePill: "Full-Stack & Applied AI Dev",
      introBold: "Sou Jhonatan Ecard,",
      introHighlight:
        "Desenvolvedor de Software com forte atuação em front-end moderno (React, Next.js, TypeScript), back-end (Node.js, NestJS, PostgreSQL) e integração prática de Inteligência Artificial.",
      paragraph1:
        "Atuei durante mais de 4 anos na CI&T em Lisboa no desenvolvimento de aplicações web em arquitetura de microsserviços, utilizando diariamente plataformas corporativas de IA generativa (CI&T FLOW) e agentes autônomos para acelerar entregas com qualidade.",
      paragraph2:
        "Antes do desenvolvimento web, construí mais de uma década de experiência em infraestrutura, observabilidade (Zabbix, Prometheus, Grafana) e análise de capacidade para grandes operações como IBM e Stefanini. Hoje aprofundo minha especialização com uma Pós-Graduação e um MBA em Engenharia de Software com IA.",
      closingBold:
        "Esteja você procurando um desenvolvedor para a sua equipa ou uma solução sob medida de ponta a ponta,",
      closingHighlight: "eu entrego engenharia confiável.",
      stats: [
        {
          value: "15+",
          label: "Anos em Tecnologia",
          detail: "Da infraestrutura corporativa ao desenvolvimento web e IA",
        },
        {
          value: "4.5",
          label: "Anos na CI&T (Lisboa)",
          detail: "React, Next.js, TypeScript, Node.js, Drupal e CI&T FLOW",
        },
        {
          value: "2x",
          label: "Pós & MBA em IA",
          detail: "Especialização em Engenharia de Software com IA Aplicada",
        },
        {
          value: "RAG",
          label: "LLMs, MCP & Agentes",
          detail: "Arquiteturas modernas com pgvector, LangChain e Temporal.io",
        },
      ],
      terminalTitle: "jhonatan@ecard-ai:~/architecture",
      stackCategories: [
        {
          id: "frontend",
          name: "Front-End & UI",
          items: [
            { name: "React 19", level: "Avançado" },
            { name: "Next.js 15 (App Router)", level: "Avançado" },
            { name: "TypeScript", level: "Avançado" },
            { name: "JavaScript (ES6+)", level: "Avançado" },
            { name: "Tailwind CSS", level: "Avançado" },
            { name: "HTML5 / CSS3 / Bootstrap", level: "Avançado" },
          ],
        },
        {
          id: "ai",
          name: "IA Aplicada & Agentes",
          items: [
            { name: "LLMs (OpenAI / Gemini)", level: "Foco Atual" },
            { name: "RAG & Busca Semântica", level: "Foco Atual" },
            { name: "LangChain.js", level: "Foco Atual" },
            { name: "pgvector & Embeddings", level: "Foco Atual" },
            { name: "Model Context Protocol (MCP)", level: "Foco Atual" },
            { name: "Orquestração de Agentes", level: "Foco Atual" },
          ],
        },
        {
          id: "backend",
          name: "Back-End & Dados",
          items: [
            { name: "Node.js", level: "Avançado" },
            { name: "NestJS & Fastify", level: "Proficiente" },
            { name: "APIs RESTful", level: "Avançado" },
            { name: "PostgreSQL & Supabase", level: "Avançado" },
            { name: "Prisma ORM", level: "Proficiente" },
            { name: "Temporal.io & BullMQ/Redis", level: "Proficiente" },
            { name: "SQL Server & DB2", level: "Avançado" },
            { name: "Drupal / PHP", level: "Proficiente" },
          ],
        },
        {
          id: "infra",
          name: "Infra, DevOps & Observabilidade",
          items: [
            { name: "Docker & Docker Compose", level: "Avançado" },
            { name: "Linux & Shell Script", level: "Avançado" },
            { name: "Zabbix, Prometheus & Grafana", level: "Especialista" },
            { name: "Ansible & Chef", level: "Proficiente" },
            { name: "OpenTelemetry & Pino", level: "Proficiente" },
            { name: "AWS Fundamentals", level: "Certificado" },
          ],
        },
      ],
    },
    projects: {
      kicker: "// PROJETOS",
      title: "Projetos em Destaque",
      subtitle:
        "Sistemas reais construídos com arquitetura moderna, TypeScript, Inteligência Artificial aplicada, RAG e orquestração distribuída.",
      discoverMore: "Ver Código no GitHub",
      viewRepo: "Repositório GitHub",
      viewLive: "Acessar Projeto",
      archLabel: "Destaques de Arquitetura",
      gridTitle: "// ARQUITETURA & DETALHES TÉCNICOS",
      items: [
        {
          id: "advocatus-ia",
          slug: "Advocatus-IA",
          category: "// LEGALTECH SAAS & RAG (PORTUGAL)",
          title: "Advocatus IA",
          shortTitle: "ADVOCATUS IA",
          subtitle:
            "Plataforma SaaS de gestão jurídica com IA e pesquisa semântica (RAG) para escritórios de advocacia em Portugal",
          description:
            "Monorepo empresarial (Turborepo + pnpm) desenhado para o mercado jurídico português. Combina gestão de processos, cálculo de prazos judiciais (Art. 138.º CPC), faturação SAF-T, assinaturas qualificadas (eIDAS/Autenticação.gov) e motor de pesquisa jurídica com RAG, pgvector, LangChain.js e servidor MCP próprio.",
          architectureHighlights: [
            "Pesquisa jurídica semântica com RAG (GPT-4o / Gemini + pgvector + LangChain.js) e servidor MCP dedicado (mcp-legal-server)",
            "Front-end em Next.js 15 (React 19, Tailwind v4) + API em NestJS/Fastify com filas BullMQ/Redis e Prisma ORM",
            "Conformidade legal nativa para Portugal: RGPD (Lei n.º 58/2019), eIDAS, prazos processuais CPC e exportação SAF-T",
          ],
          stack: [
            "Next.js 15",
            "React 19",
            "NestJS",
            "TypeScript",
            "PostgreSQL / pgvector",
            "Prisma",
            "LangChain",
            "MCP Server",
            "BullMQ / Redis",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/Advocatus-IA",
          proprietary: true,
          proprietaryLabel: "Código Proprietário · Apenas Visualização de Portfólio",
          accentFrom: "#38bdf8",
          accentTo: "#eab308",
          monogram: "⚖️",
          year: "2026",
        },
        {
          id: "cpwe-engine",
          slug: "cpwe-engine",
          category: "// WORKFLOW ENGINE & AI PIPELINES",
          title: "CPWE Engine",
          shortTitle: "CPWE ENGINE",
          subtitle:
            "Motor de automação assíncrona baseado em Temporal.io, grafos direcionados (DAGs) e LLMs em TypeScript",
          description:
            "Content Production Workflow Engine escrita em TypeScript sobre o ecossistema Temporal.io para orquestrar pipelines determinísticas e resilientes com Inteligência Artificial (OpenAI via LiteLLM), validação cruzada de QA e garantias estruturais com Zod.",
          architectureHighlights: [
            "Execução distribuída e tolerante a falhas com Temporal.io Workflows e Activities desacopladas",
            "Processamento em grafos direcionados (DAGs) com nós especializados (TrendNode, ScriptNode, QAValidator)",
            "Contratos de dados estritos e validação de saídas de LLMs em tempo de execução com Zod",
          ],
          stack: [
            "TypeScript",
            "Temporal.io",
            "LiteLLM / OpenAI",
            "DAG Workflows",
            "Zod",
            "Node.js",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/cpwe-engine",
          accentFrom: "#818cf8",
          accentTo: "#38bdf8",
          monogram: "⚡",
          year: "2026",
        },
        {
          id: "paperclip-agents",
          slug: "PaperClipAi-HermesAgent-OpenClaw",
          category: "// INFRAESTRUTURA DE AGENTES & DOCKER",
          title: "PaperClipAi · Hermes Agent · OpenClaw",
          shortTitle: "AGENT ORCHESTRATOR",
          subtitle:
            "Infraestrutura unificada em Docker Compose para orquestração de múltiplos agentes autônomos de IA",
          description:
            "Setup completo de engenharia de infraestrutura para executar de forma integrada o ecossistema PaperClipAi, Hermes Agent e OpenClaw em containers isolados, com builds customizadas, scripts de auto-onboarding e hardening de segurança.",
          architectureHighlights: [
            "Orquestração multi-container com Dockerfiles customizados para PaperClipAi e OpenClaw",
            "Automação de provisionamento inicial e configuração de administrador via entrypoint Shell",
            "Isolamento de rede, variáveis de ambiente seguras e documentação completa de deploy",
          ],
          stack: [
            "Docker Compose",
            "Dockerfile",
            "Shell Script",
            "PaperClipAi",
            "Hermes Agent",
            "OpenClaw",
            "Linux",
          ],
          githubUrl:
            "https://github.com/jhonatanecardoficial/PaperClipAi-HermesAgent-OpenClaw",
          accentFrom: "#f59e0b",
          accentTo: "#6366f1",
          monogram: "🤖",
          year: "2026",
        },
        {
          id: "portfolio-site",
          slug: "jhonatanecard.com",
          category: "// FRONT-END ARCHITECTURE & DESIGN SYSTEM",
          title: "Jhonatan Ecard · Portfolio v2",
          shortTitle: "JHONATANECARD.COM",
          subtitle:
            "Aplicação web bilíngue (PT/EN) de alta performance construída com Next.js 15, React 19, TypeScript e Tailwind CSS",
          description:
            "O próprio site pessoal profissional (jhonatanecard.com), projetado como peça de portfólio open-source com estética dark glassmorphism, carrossel orbital interativo, suporte bilíngue instantâneo PT/EN, alternância de tema Dark/Light e exportação estática otimizada.",
          architectureHighlights: [
            "Arquitetura modular em Next.js 15 (App Router) + React 19 + TypeScript estrito",
            "Sistema de internacionalização reativo (PT/EN) e tema Dark/Light sem recarregamento",
            "Design system autoral com Bento Grids, carrossel interativo de projetos e SEO completo",
          ],
          stack: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Lucide Icons",
            "Static Export",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/jhonatanecard.com",
          liveUrl: "https://jhonatanecard.com",
          accentFrom: "#22d3ee",
          accentTo: "#a855f7",
          monogram: "🌐",
          year: "2026",
        },
      ],
    },
    experience: {
      kicker: "// CARREIRA & FORMAÇÃO",
      title: "Trajetória Profissional",
      subtitle:
        "Mais de 15 anos resolvendo problemas reais em tecnologia — da análise de capacidade em ambientes críticos IBM ao desenvolvimento web full-stack na CI&T.",
      eduKicker: "// EDUCAÇÃO & CERTIFICAÇÕES",
      eduTitle: "Formação Acadêmica & Certificados",
      items: [
        {
          id: "cit",
          period: "Mar 2021 — Jul 2025 · 4 anos 5 meses",
          role: "Software Developer | AI-Augmented Development",
          company: "CI&T",
          location: "Lisboa, Portugal",
          highlightBadge: "4.5 Anos · Lisboa",
          summary:
            "Desenvolvimento de aplicações web modernas e sistemas baseados em arquitetura de microsserviços em contexto internacional.",
          bullets: [
            "Construção de interfaces responsivas e de alta performance com React, Next.js e TypeScript integradas a APIs REST.",
            "Desenvolvimento e manutenção de serviços back-end utilizando Node.js, TypeScript, PostgreSQL e containers Docker.",
            "Desenvolvimento de módulos customizados e modelagem de conteúdo em Drupal 7 (PHP) com Bootstrap.",
            "Uso diário da plataforma corporativa de IA Generativa CI&T FLOW e agentes de IA em todo o ciclo de desenvolvimento (geração de código, documentação técnica e resolução de problemas).",
          ],
          stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Drupal / PHP",
            "CI&T FLOW (GenAI)",
          ],
        },
        {
          id: "engineering",
          period: "Nov 2018 — Set 2019 · 11 meses",
          role: "IT Infrastructure Analyst",
          company: "Engineering Brasil",
          location: "Belo Horizonte, Brasil",
          summary:
            "Monitoramento avançado de infraestrutura, automação e análise de performance em ambientes corporativos críticos.",
          bullets: [
            "Implementação e configuração de soluções de observabilidade com Zabbix, Prometheus, Grafana e Elastic Stack.",
            "Desenvolvimento de scripts de automação para ambientes Linux e Windows com Ansible e Chef.",
            "Análise de capacidade e desempenho de servidores e sistemas de missão crítica.",
          ],
          stack: [
            "Zabbix",
            "Prometheus",
            "Grafana",
            "Elastic Stack",
            "Ansible",
            "Chef",
            "Linux",
          ],
        },
        {
          id: "mastermaq",
          period: "Dez 2017 — Out 2018 · 11 meses",
          role: "IT Support & Monitoring Analyst",
          company: "Mastermaq Software",
          location: "Belo Horizonte, Brasil",
          summary:
            "Reestruturação do ambiente de monitoramento corporativo e diagnóstico de banco de dados.",
          bullets: [
            "Reestruturação completa do monitoramento com Zabbix e criação de templates para SQL Server, Terminal Server e rotinas de backup.",
            "Integração de métricas com dashboards executivos em Grafana e análise de capacidade de ambientes de clientes.",
          ],
          stack: ["Zabbix", "Grafana", "SQL Server", "Windows Server"],
        },
        {
          id: "ibm-cluster",
          period: "Mai 2010 — Mar 2016 · ~6 anos",
          role: "Capacity & Performance Data Analyst",
          company: "IBM · 3CON · Stefanini · Systemplan",
          location: "Belo Horizonte, Brasil",
          summary:
            "Análise de capacidade, performance e continuidade de negócios para grandes ambientes corporativos (IBM, Fiat, Bradesco, TAM, Brookfield).",
          bullets: [
            "Monitoramento e análise de capacidade de servidores Unix e Windows em larga escala.",
            "Desenvolvimento de relatórios técnicos e executivos de performance utilizando SQL Server, DB2, Visual Studio, SharePoint e VBA.",
            "Condução de reuniões técnicas com clientes enterprise para melhorias de infraestrutura e planos de recuperação de desastres.",
          ],
          stack: ["SQL Server", "DB2", "Unix / Linux", "Windows Server", "VBA", "SRM"],
        },
      ],
      education: [
        {
          title: "MBA em Engenharia de Software com Inteligência Artificial",
          institution: "Anhanguera Educacional",
          period: "Em andamento",
          status: "Pós-Graduação Lato Sensu · MBA",
          category: "postgrad",
        },
        {
          title: "Pós-Graduação em Engenharia de Software com IA",
          institution: "Anhanguera Educacional",
          period: "Em andamento",
          status: "Especialização Técnica",
          category: "postgrad",
        },
        {
          title: "Curso de Linux para Desenvolvedores & Amazon AWS",
          institution: "Full Cycle",
          period: "2016 — 2017",
          status: "Credenciais verificadas",
          category: "cert",
        },
        {
          title: "JavaScript, CSS & jQuery · DevOpsDays Belo Horizonte",
          institution: "Prof. Diego Mariano · DevOpsDays BH",
          period: "2018 — 2020",
          status: "Certificados concluídos",
          category: "cert",
        },
      ],
    },
    services: {
      kicker: "// SOLUÇÕES & ESPECIALIDADES",
      title: "Soluções & Desenvolvimento Sob Medida",
      subtitle:
        "Disponível para integrar equipas de engenharia em Portugal/Remoto ou desenvolver soluções digitais completas.",
      items: [
        {
          id: "web",
          icon: "code",
          title: "Aplicações Web Full-Stack",
          description:
            "Desenvolvimento de aplicações web e plataformas SaaS modernas com React, Next.js e TypeScript, focadas em performance, acessibilidade, SEO técnico e experiência do utilizador.",
          tags: ["SOB MEDIDA", "EXCELÊNCIA TÉCNICA"],
          deliverables: ["Dashboards & SaaS", "Next.js 15 & React 19", "Design Responsivo"],
        },
        {
          id: "ai",
          icon: "cpu",
          title: "IA Aplicada, RAG & Agentes",
          description:
            "Integração de LLMs (OpenAI, Gemini) em produtos reais: pesquisa semântica com RAG e pgvector, fluxos com LangChain, servidores MCP e automação de processos com agentes.",
          tags: ["IA GENERATIVA", "ARQUITETURA RAG"],
          deliverables: ["Busca Semântica (RAG)", "Servidores MCP", "Agentes Autônomos"],
        },
        {
          id: "backend",
          icon: "layers",
          title: "APIs, Microsserviços & Workflows",
          description:
            "Construção de back-ends escaláveis em Node.js, NestJS e Fastify, modelagem em PostgreSQL/Prisma, filas assíncronas com BullMQ/Redis e workflows resilientes com Temporal.io.",
          tags: ["ALTA DISPONIBILIDADE", "ESCALÁVEL"],
          deliverables: ["APIs REST & NestJS", "Temporal.io & BullMQ", "PostgreSQL & Prisma"],
        },
        {
          id: "infra",
          icon: "server",
          title: "Containers & Observabilidade",
          description:
            "Containerização de ambientes com Docker Compose, instrumentação com OpenTelemetry e monitoramento completo com Zabbix, Prometheus e Grafana para ambientes estáveis.",
          tags: ["INFRA & DEVOPS", "OBSERVABILIDADE"],
          deliverables: ["Docker & Compose", "Prometheus & Grafana", "Análise de Performance"],
        },
      ],
      bannerTitle1: "Acelere as Suas Entregas.",
      bannerTitle2: "Construa Software Inteligente.",
      bannerSub:
        "Quer reforçar a sua equipa com um desenvolvedor experiente ou tirar um projeto com IA do papel?",
      bannerCta: "Vamos falar sobre o seu projeto",
    },
    contact: {
      kicker: "// ENTRE EM CONTATO",
      title: "Vamos Construir Algo Incrível Juntos",
      servicesHeading: "ESPECIALIDADES",
      connectedHeading: "MANTENHA-SE CONECTADO",
      startProjectHeading: "DISPONIBILIDADE ATUAL",
      startProjectText:
        "Disponível para oportunidades como Full-Stack Developer / AI Developer (Portugal ou Remoto) e projetos sob medida.",
      aboutHeading: "SOBRE",
      aboutText:
        "Desenvolvedor de Software com mais de 4 anos na CI&T e mais de 10 anos em infraestrutura. Sinta-se à vontade para falar comigo diretamente.",
      emailLabel: "E-MAIL",
      callLabel: "LIGAR / WHATSAPP",
      locationLabel: "LOCALIZAÇÃO",
      formNameLabel: "SEU NOME",
      formNamePlaceholder: "Nome ou empresa",
      formEmailLabel: "SEU E-MAIL",
      formEmailPlaceholder: "seu.email@empresa.com",
      formTopicLabel: "Assunto / Interesse",
      formTopics: [
        { id: "fullstack", label: "Web Full-Stack" },
        { id: "ai", label: "IA, RAG & Agentes" },
        { id: "backend", label: "APIs & Back-End" },
        { id: "infra", label: "Docker & Infra" },
        { id: "hire", label: "Oportunidade / Recrutamento" },
      ],
      formMessageLabel: "DETALHES DO PROJETO OU VAGA / MENSAGEM",
      formMessagePlaceholder:
        "Conte-me sobre a oportunidade, vaga ou projeto que tem em mente...",
      formSubmit: "Enviar por E-mail",
      formWhatsapp: "Enviar no WhatsApp",
      formSuccess:
        "A sua mensagem foi preparada! Escolha abaixo ou envie diretamente pelo seu cliente de e-mail / WhatsApp.",
    },
    resume: {
      kicker: "// CURRÍCULO & HABILIDADES",
      title: "Baixar Meu Currículo",
      subtitle: "Obtenha uma cópia atualizada do meu currículo profissional completo",
      cardDescription:
        "Clique no botão abaixo para baixar o meu currículo mais recente em formato PDF com o histórico completo na CI&T, projetos de IA e certificações.",
      downloadBtn: "Baixar Agora",
      disclaimer:
        "Ao baixar, você concorda em utilizar este ficheiro apenas para fins de recrutamento e contacto profissional.",
    },
    footer: {
      designedText:
        "Arquitetado com foco em performance, clareza visual e engenharia de software moderna por",
      builtWith: "Construído com React 19, Next.js 15, TypeScript e Tailwind CSS. Hospedado na Hostinger.",
      fontNote: "Tipografia definida em DM Sans & JetBrains Mono.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: [
      { id: "home", label: "HOME" },
      { id: "about", label: "ABOUT" },
      { id: "projects", label: "PROJECTS" },
      { id: "experience", label: "EXPERIENCE" },
      { id: "services", label: "SOLUTIONS" },
      { id: "contact", label: "CONTACT" },
    ],
    hero: {
      statusBadge: "Available for new projects & career opportunities",
      greeting: "Hi, I'm",
      name: "Jhonatan Ecard",
      titleLine1: "Software Developer",
      titleLine2: "Full-Stack & Applied AI",
      description:
        "I turn complex business challenges into modern, scalable, AI-powered web applications — combining 4.5+ years as a Software Developer at CI&T with a 10+ year foundation in enterprise infrastructure.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      ctaResume: "Resume PDF",
      techStackLabel: "TECH STACK",
      floatingBadges: {
        expTitle: "4.5+ Years at CI&T",
        expSub: "Full-Stack & AI-Augmented Dev",
        aiTitle: "LLMs · RAG · Agents",
        aiSub: "Postgrad & MBA in AI Software Eng.",
        locTitle: "Porto, Portugal",
      },
    },
    about: {
      kicker: "// MY STORY",
      title: "A bit about me",
      rolePill: "Full-Stack & Applied AI Dev",
      introBold: "I'm Jhonatan Ecard,",
      introHighlight:
        "a Software Developer experienced in modern front-end (React, Next.js, TypeScript), back-end (Node.js, NestJS, PostgreSQL) and practical Artificial Intelligence integration.",
      paragraph1:
        "I worked for over 4 years at CI&T in Lisbon building web applications in a microservices architecture, using enterprise Generative AI platforms (CI&T FLOW) and AI agents daily to accelerate delivery and code quality.",
      paragraph2:
        "Before web development, I built over a decade of experience in enterprise infrastructure, observability (Zabbix, Prometheus, Grafana) and capacity analysis for clients such as IBM and Stefanini. Today I'm deepening my expertise through a Postgraduate degree and an MBA in Software Engineering with AI.",
      closingBold:
        "Whether you're looking for a developer to strengthen your team or a tailored end-to-end solution,",
      closingHighlight: "I deliver reliable engineering.",
      stats: [
        {
          value: "15+",
          label: "Years in Tech",
          detail: "From enterprise infrastructure to modern web & Applied AI",
        },
        {
          value: "4.5",
          label: "Years at CI&T (Lisbon)",
          detail: "React, Next.js, TypeScript, Node.js, Drupal & CI&T FLOW",
        },
        {
          value: "2x",
          label: "Postgrad & MBA in AI",
          detail: "Specialization in Software Engineering with Applied AI",
        },
        {
          value: "RAG",
          label: "LLMs, MCP & Agents",
          detail: "Modern architectures with pgvector, LangChain & Temporal.io",
        },
      ],
      terminalTitle: "jhonatan@ecard-ai:~/architecture",
      stackCategories: [
        {
          id: "frontend",
          name: "Front-End & UI",
          items: [
            { name: "React 19", level: "Advanced" },
            { name: "Next.js 15 (App Router)", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "JavaScript (ES6+)", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "HTML5 / CSS3 / Bootstrap", level: "Advanced" },
          ],
        },
        {
          id: "ai",
          name: "Applied AI & Agents",
          items: [
            { name: "LLMs (OpenAI / Gemini)", level: "Current Focus" },
            { name: "RAG & Semantic Search", level: "Current Focus" },
            { name: "LangChain.js", level: "Current Focus" },
            { name: "pgvector & Embeddings", level: "Current Focus" },
            { name: "Model Context Protocol (MCP)", level: "Current Focus" },
            { name: "Multi-Agent Orchestration", level: "Current Focus" },
          ],
        },
        {
          id: "backend",
          name: "Back-End & Data",
          items: [
            { name: "Node.js", level: "Advanced" },
            { name: "NestJS & Fastify", level: "Proficient" },
            { name: "RESTful APIs", level: "Advanced" },
            { name: "PostgreSQL & Supabase", level: "Advanced" },
            { name: "Prisma ORM", level: "Proficient" },
            { name: "Temporal.io & BullMQ/Redis", level: "Proficient" },
            { name: "SQL Server & DB2", level: "Advanced" },
            { name: "Drupal / PHP", level: "Proficient" },
          ],
        },
        {
          id: "infra",
          name: "Infra, DevOps & Observability",
          items: [
            { name: "Docker & Docker Compose", level: "Advanced" },
            { name: "Linux & Shell Scripting", level: "Advanced" },
            { name: "Zabbix, Prometheus & Grafana", level: "Expert" },
            { name: "Ansible & Chef", level: "Proficient" },
            { name: "OpenTelemetry & Pino", level: "Proficient" },
            { name: "AWS Fundamentals", level: "Certified" },
          ],
        },
      ],
    },
    projects: {
      kicker: "// PROJECTS",
      title: "Featured Projects",
      subtitle:
        "Production-grade systems built with modern architecture, TypeScript, Applied Artificial Intelligence, RAG and distributed orchestration.",
      discoverMore: "View on GitHub",
      viewRepo: "GitHub Repository",
      viewLive: "Live Preview",
      archLabel: "Architecture Highlights",
      gridTitle: "// ARCHITECTURE & TECHNICAL BREAKDOWN",
      items: [
        {
          id: "advocatus-ia",
          slug: "Advocatus-IA",
          category: "// LEGALTECH SAAS & RAG (PORTUGAL)",
          title: "Advocatus IA",
          shortTitle: "ADVOCATUS IA",
          subtitle:
            "AI-powered legal management SaaS platform with semantic search (RAG) built for law firms in Portugal",
          description:
            "Enterprise monorepo (Turborepo + pnpm) engineered for Portuguese law firms. Combines case management, procedural deadline calculation (CPC Art. 138), SAF-T billing, qualified digital signatures (eIDAS/Autenticação.gov) and a RAG legal search engine powered by pgvector, LangChain.js and a custom MCP server.",
          architectureHighlights: [
            "Semantic legal search with RAG (GPT-4o / Gemini + pgvector + LangChain.js) and a dedicated MCP server (mcp-legal-server)",
            "Next.js 15 (React 19, Tailwind v4) front-end + NestJS/Fastify API with BullMQ/Redis queues and Prisma ORM",
            "Built-in Portuguese regulatory compliance: GDPR (Law 58/2019), eIDAS, CPC deadlines and SAF-T invoicing",
          ],
          stack: [
            "Next.js 15",
            "React 19",
            "NestJS",
            "TypeScript",
            "PostgreSQL / pgvector",
            "Prisma",
            "LangChain",
            "MCP Server",
            "BullMQ / Redis",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/Advocatus-IA",
          proprietary: true,
          proprietaryLabel: "Proprietary Code · Portfolio Viewing Only",
          accentFrom: "#38bdf8",
          accentTo: "#eab308",
          monogram: "⚖️",
          year: "2026",
        },
        {
          id: "cpwe-engine",
          slug: "cpwe-engine",
          category: "// WORKFLOW ENGINE & AI PIPELINES",
          title: "CPWE Engine",
          shortTitle: "CPWE ENGINE",
          subtitle:
            "Asynchronous workflow automation engine built on Temporal.io, directed acyclic graphs (DAGs) and LLMs in TypeScript",
          description:
            "Content Production Workflow Engine written in TypeScript on top of Temporal.io to orchestrate deterministic, fault-tolerant AI pipelines (OpenAI via LiteLLM) with automated QA cross-validation and strict runtime schemas using Zod.",
          architectureHighlights: [
            "Distributed, fault-tolerant execution powered by Temporal.io Workflows and decoupled Activities",
            "Directed Acyclic Graph (DAG) processing with specialized nodes (TrendNode, ScriptNode, QAValidator)",
            "Strict data contracts and runtime validation of LLM outputs enforced with Zod",
          ],
          stack: [
            "TypeScript",
            "Temporal.io",
            "LiteLLM / OpenAI",
            "DAG Workflows",
            "Zod",
            "Node.js",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/cpwe-engine",
          accentFrom: "#818cf8",
          accentTo: "#38bdf8",
          monogram: "⚡",
          year: "2026",
        },
        {
          id: "paperclip-agents",
          slug: "PaperClipAi-HermesAgent-OpenClaw",
          category: "// AGENT INFRASTRUCTURE & DOCKER",
          title: "PaperClipAi · Hermes Agent · OpenClaw",
          shortTitle: "AGENT ORCHESTRATOR",
          subtitle:
            "Unified Docker Compose infrastructure to orchestrate multiple autonomous AI agents",
          description:
            "Infrastructure engineering setup designed to run the PaperClipAi, Hermes Agent and OpenClaw ecosystem in isolated containers, featuring custom Dockerfiles, automated admin onboarding scripts and security hardening.",
          architectureHighlights: [
            "Multi-container orchestration with custom Dockerfiles for PaperClipAi and OpenClaw",
            "Automated initial provisioning and admin setup via Shell entrypoint scripts",
            "Network isolation, secure environment configuration and complete deployment docs",
          ],
          stack: [
            "Docker Compose",
            "Dockerfile",
            "Shell Script",
            "PaperClipAi",
            "Hermes Agent",
            "OpenClaw",
            "Linux",
          ],
          githubUrl:
            "https://github.com/jhonatanecardoficial/PaperClipAi-HermesAgent-OpenClaw",
          accentFrom: "#f59e0b",
          accentTo: "#6366f1",
          monogram: "🤖",
          year: "2026",
        },
        {
          id: "portfolio-site",
          slug: "jhonatanecard.com",
          category: "// FRONT-END ARCHITECTURE & DESIGN SYSTEM",
          title: "Jhonatan Ecard · Portfolio v2",
          shortTitle: "JHONATANECARD.COM",
          subtitle:
            "High-performance bilingual (PT/EN) web application built with Next.js 15, React 19, TypeScript and Tailwind CSS",
          description:
            "This personal portfolio website (jhonatanecard.com), architected as an open-source showcase featuring dark glassmorphism aesthetics, an interactive orbital project carousel, instant PT/EN localization, Dark/Light theme switching and static export.",
          architectureHighlights: [
            "Modular architecture built on Next.js 15 (App Router) + React 19 + strict TypeScript",
            "Instant client-side internationalization (PT/EN) and Dark/Light theme switching",
            "Custom Bento Grid design system, interactive coverflow project selector and full SEO metadata",
          ],
          stack: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Lucide Icons",
            "Static Export",
          ],
          githubUrl: "https://github.com/jhonatanecardoficial/jhonatanecard.com",
          liveUrl: "https://jhonatanecard.com",
          accentFrom: "#22d3ee",
          accentTo: "#a855f7",
          monogram: "🌐",
          year: "2026",
        },
      ],
    },
    experience: {
      kicker: "// CAREER & EDUCATION",
      title: "Professional Experience",
      subtitle:
        "15+ years solving real technology problems — from capacity analysis in critical IBM environments to full-stack web development at CI&T.",
      eduKicker: "// EDUCATION & CERTIFICATIONS",
      eduTitle: "Academic Background & Certificates",
      items: [
        {
          id: "cit",
          period: "Mar 2021 — Jul 2025 · 4 yrs 5 mos",
          role: "Software Developer | AI-Augmented Development",
          company: "CI&T",
          location: "Lisbon, Portugal",
          highlightBadge: "4.5 Years · Lisbon",
          summary:
            "Development of modern web applications and systems based on microservices architecture in an international enterprise environment.",
          bullets: [
            "Built responsive, high-performance user interfaces using React, Next.js and TypeScript integrated with REST APIs.",
            "Developed and maintained back-end services using Node.js, TypeScript, PostgreSQL and Docker containers.",
            "Created custom modules and content models in Drupal 7 (PHP) with Bootstrap.",
            "Daily use of CI&T FLOW (enterprise Generative AI platform) and AI agents across the software development lifecycle for code generation, documentation and problem solving.",
          ],
          stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Drupal / PHP",
            "CI&T FLOW (GenAI)",
          ],
        },
        {
          id: "engineering",
          period: "Nov 2018 — Sep 2019 · 11 mos",
          role: "IT Infrastructure Analyst",
          company: "Engineering Brasil",
          location: "Belo Horizonte, Brazil",
          summary:
            "Infrastructure monitoring, automation and performance analysis in corporate environments.",
          bullets: [
            "Implemented and configured monitoring solutions using Zabbix, Prometheus, Grafana and Elastic Stack.",
            "Developed automation scripts for Linux and Windows environments using Ansible and Chef.",
            "Performed server capacity and performance analysis for mission-critical systems.",
          ],
          stack: [
            "Zabbix",
            "Prometheus",
            "Grafana",
            "Elastic Stack",
            "Ansible",
            "Chef",
            "Linux",
          ],
        },
        {
          id: "mastermaq",
          period: "Dec 2017 — Oct 2018 · 11 mos",
          role: "IT Support & Monitoring Analyst",
          company: "Mastermaq Software",
          location: "Belo Horizonte, Brazil",
          summary:
            "Restructured corporate monitoring environments and performed database troubleshooting.",
          bullets: [
            "Restructured monitoring with Zabbix and created custom templates for SQL Server, Terminal Server and backup routines.",
            "Integrated metrics with executive Grafana dashboards and analyzed customer environment capacity.",
          ],
          stack: ["Zabbix", "Grafana", "SQL Server", "Windows Server"],
        },
        {
          id: "ibm-cluster",
          period: "May 2010 — Mar 2016 · ~6 yrs",
          role: "Capacity & Performance Data Analyst",
          company: "IBM · 3CON · Stefanini · Systemplan",
          location: "Belo Horizonte, Brazil",
          summary:
            "Capacity, performance and business continuity analysis for large-scale enterprise environments (IBM, Fiat, Bradesco, TAM, Brookfield).",
          bullets: [
            "Monitored and analyzed capacity of large-scale Unix and Windows server environments.",
            "Built technical and executive performance reports using SQL Server, DB2, Visual Studio, SharePoint and VBA.",
            "Led technical meetings with enterprise clients to drive infrastructure improvements and disaster recovery plans.",
          ],
          stack: ["SQL Server", "DB2", "Unix / Linux", "Windows Server", "VBA", "SRM"],
        },
      ],
      education: [
        {
          title: "MBA in Software Engineering with Artificial Intelligence",
          institution: "Anhanguera Educacional",
          period: "In progress",
          status: "Postgraduate MBA",
          category: "postgrad",
        },
        {
          title: "Postgraduate Degree in Software Engineering with AI",
          institution: "Anhanguera Educacional",
          period: "In progress",
          status: "Technical Specialization",
          category: "postgrad",
        },
        {
          title: "Linux for Developers & Amazon AWS Course",
          institution: "Full Cycle",
          period: "2016 — 2017",
          status: "Verified Credentials",
          category: "cert",
        },
        {
          title: "JavaScript, CSS & jQuery · DevOpsDays Belo Horizonte",
          institution: "Prof. Diego Mariano · DevOpsDays BH",
          period: "2018 — 2020",
          status: "Completed Certificates",
          category: "cert",
        },
      ],
    },
    services: {
      kicker: "// SOLUTIONS & SPECIALTIES",
      title: "Custom Solutions & Engineering",
      subtitle:
        "Available to join engineering teams in Portugal/Remote or deliver complete end-to-end digital solutions.",
      items: [
        {
          id: "web",
          icon: "code",
          title: "Full-Stack Web Applications",
          description:
            "Development of modern web apps and SaaS platforms with React, Next.js and TypeScript, focused on performance, accessibility, technical SEO and user experience.",
          tags: ["TAILOR-MADE", "TECHNICAL EXCELLENCE"],
          deliverables: ["SaaS & Dashboards", "Next.js 15 & React 19", "Responsive UI"],
        },
        {
          id: "ai",
          icon: "cpu",
          title: "Applied AI, RAG & Agents",
          description:
            "Integration of LLMs (OpenAI, Gemini) into real products: semantic search with RAG and pgvector, LangChain pipelines, MCP servers and agentic workflow automation.",
          tags: ["GENERATIVE AI", "RAG ARCHITECTURE"],
          deliverables: ["Semantic Search (RAG)", "Custom MCP Servers", "AI Agents"],
        },
        {
          id: "backend",
          icon: "layers",
          title: "APIs, Microservices & Workflows",
          description:
            "Scalable back-ends built with Node.js, NestJS and Fastify, PostgreSQL/Prisma data modeling, BullMQ/Redis async queues and resilient workflows with Temporal.io.",
          tags: ["HIGH AVAILABILITY", "SCALABLE"],
          deliverables: ["REST APIs & NestJS", "Temporal.io & BullMQ", "PostgreSQL & Prisma"],
        },
        {
          id: "infra",
          icon: "server",
          title: "Containers & Observability",
          description:
            "Environment containerization with Docker Compose, OpenTelemetry instrumentation and full observability with Zabbix, Prometheus and Grafana.",
          tags: ["INFRA & DEVOPS", "OBSERVABILITY"],
          deliverables: ["Docker & Compose", "Prometheus & Grafana", "Capacity Analysis"],
        },
      ],
      bannerTitle1: "Accelerate Your Delivery.",
      bannerTitle2: "Build Intelligent Software.",
      bannerSub:
        "Looking to strengthen your engineering team or bring an AI-powered product to life?",
      bannerCta: "Let's talk about your project",
    },
    contact: {
      kicker: "// GET IN TOUCH",
      title: "Let's Build Something Great Together",
      servicesHeading: "SPECIALTIES",
      connectedHeading: "STAY CONNECTED",
      startProjectHeading: "CURRENT AVAILABILITY",
      startProjectText:
        "Available for Full-Stack Developer / AI Developer roles (Portugal or Remote) and freelance projects.",
      aboutHeading: "ABOUT",
      aboutText:
        "Software Developer with 4.5+ years at CI&T and 10+ years in infrastructure. Feel free to reach out directly.",
      emailLabel: "E-MAIL",
      callLabel: "CALL / WHATSAPP",
      locationLabel: "LOCATION",
      formNameLabel: "YOUR NAME",
      formNamePlaceholder: "Your name or company",
      formEmailLabel: "YOUR E-MAIL",
      formEmailPlaceholder: "you@company.com",
      formTopicLabel: "Desired Topic / Service",
      formTopics: [
        { id: "fullstack", label: "Full-Stack Web" },
        { id: "ai", label: "AI, RAG & Agents" },
        { id: "backend", label: "APIs & Back-End" },
        { id: "infra", label: "Docker & Infra" },
        { id: "hire", label: "Job Opportunity / Hiring" },
      ],
      formMessageLabel: "PROJECT OR ROLE DETAILS / MESSAGE",
      formMessagePlaceholder:
        "Tell me about the role, team or project you have in mind...",
      formSubmit: "Send via E-mail",
      formWhatsapp: "Send via WhatsApp",
      formSuccess:
        "Your message is ready! Click below to send directly via your email client or WhatsApp.",
    },
    resume: {
      kicker: "// RESUME & SKILLS",
      title: "Download My Resume",
      subtitle: "Get an updated copy of my complete professional curriculum vitae",
      cardDescription:
        "Click the button below to download my latest resume in PDF format including my full history at CI&T, AI projects and certifications.",
      downloadBtn: "Download Now",
      disclaimer:
        "By downloading, you agree to use this file solely for recruitment and professional contact purposes.",
    },
    footer: {
      designedText:
        "Engineered with a focus on performance, visual clarity and modern software architecture by",
      builtWith: "Built with React 19, Next.js 15, TypeScript and Tailwind CSS. Deployed on Hostinger.",
      fontNote: "Typography set in DM Sans & JetBrains Mono.",
      rights: "All rights reserved.",
    },
  },
};
