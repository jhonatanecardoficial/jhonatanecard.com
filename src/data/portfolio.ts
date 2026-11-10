export type Locale = 'pt' | 'en';

export interface ProjectCase {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  clientOrContext: string;
  role: string;
  isProprietary?: boolean;
  licenseBadge: string;
  licenseNote?: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  summary: string;
  challenge: string;
  architectureSolution: string;
  highlights: string[];
  stack: string[];
  architectureNodes: {
    layer: string;
    tech: string;
    detail: string;
  }[];
}

export interface JourneyStage {
  num: string;
  period: string;
  role: string;
  company: string;
  location: string;
  tag: string;
  description: string;
  metrics: string[];
  stack: string[];
}

export interface ArsenalPillar {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: { name: string; level: string }[];
}

export interface PortfolioContent {
  meta: {
    roleBadge: string;
    availability: string;
    locationLabel: string;
    yearsSummary: string;
  };
  nav: {
    manifesto: string;
    works: string;
    journey: string;
    arsenal: string;
    contact: string;
    cvButton: string;
    shaderLabel: string;
  };
  loader: {
    bootLines: string[];
    subtitle: string;
  };
  hero: {
    kicker: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCv: string;
    scrollHint: string;
    portraitCaption: string;
    portraitSub: string;
    telemetryLabel: string;
  };
  marquee: string[];
  manifesto: {
    indexLabel: string;
    indexSub: string;
    leadQuote: string;
    leadHighlight: string;
    bodyCol1: string;
    bodyCol2: string;
    stats: {
      value: number;
      suffix: string;
      label: string;
    }[];
  };
  works: {
    indexLabel: string;
    title: string;
    subtitle: string;
    cursorLabel: string;
    proprietaryTag: string;
    openSourceTag: string;
    modal: {
      close: string;
      challengeTitle: string;
      solutionTitle: string;
      blueprintTitle: string;
      highlightsTitle: string;
      stackTitle: string;
      viewGithub: string;
      nextProject: string;
    };
    items: ProjectCase[];
  };
  journey: {
    indexLabel: string;
    title: string;
    subtitle: string;
    scrollHint: string;
    stages: JourneyStage[];
  };
  arsenal: {
    indexLabel: string;
    title: string;
    subtitle: string;
    pillars: ArsenalPillar[];
    credentialsTitle: string;
    credentialsSubtitle: string;
    cvCardTitle: string;
    cvCardDesc: string;
    cvDownloadBtn: string;
    credentials: {
      period: string;
      title: string;
      institution: string;
      badge: string;
      detail: string;
    }[];
  };
  footer: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    copyEmailHint: string;
    emailCopied: string;
    whatsappCta: string;
    backToTop: string;
    rights: string;
  };
}

export const portfolioData: Record<Locale, PortfolioContent> = {
  pt: {
    meta: {
      roleBadge: 'Software Developer · Full-Stack & IA Aplicada',
      availability: 'Disponível para projetos & oportunidades na Europa / Remoto',
      locationLabel: 'Vila Nova de Gaia · Porto, PT',
      yearsSummary: '15+ anos em TI · Full-Stack, Arquitetura & IA Aplicada',
    },
    nav: {
      manifesto: 'Manifesto',
      works: 'Obras',
      journey: 'Jornada',
      arsenal: 'Arsenal',
      contact: 'Contato',
      cvButton: 'Baixar CV',
      shaderLabel: 'Tema WebGL',
    },
    loader: {
      bootLines: [
        'INICIALIZANDO PIPELINE WEBGL GLSL...',
        'SINCRONIZANDO LENIS + GSAP SCROLLTRIGGER...',
        'CARREGANDO ARQUITETURA FULL-STACK & IA APLICADA...',
      ],
      subtitle: 'Portfólio de Engenharia & Desenvolvimento — Porto, Portugal',
    },
    hero: {
      kicker: 'DESENVOLVEDOR DE SOFTWARE · FULL-STACK & IA APLICADA',
      subtitle:
        'Mais de 4 anos e meio desenvolvendo aplicações web modernas na CI&T em Lisboa (React, Next.js, TypeScript, Node.js e NestJS), somados a mais de uma década em infraestrutura crítica para gigantes como IBM e Telefônica — hoje focado em arquiteturas com LLMs, RAG e agentes autônomos.',
      ctaPrimary: 'Explorar Obras & Arquitetura',
      ctaSecondary: 'Iniciar Conversa',
      ctaCv: 'Currículo PDF',
      scrollHint: 'Role para explorar',
      portraitCaption: 'Jhonatan Ecard',
      portraitSub: 'Porto, Portugal · Full-Stack & IA',
      telemetryLabel: 'PÓS & MBA EM ENG. DE SOFTWARE COM IA',
    },
    marquee: [
      'Full-Stack Development',
      'Applied AI & LLM Orchestration',
      'RAG & pgvector',
      'Next.js 15 & TypeScript',
      'Node.js, NestJS & Temporal.io',
      'Enterprise Observability & Infra',
    ],
    manifesto: {
      indexLabel: '01 / Manifesto & Trajetória',
      indexSub: 'Da sustentação de ambientes críticos à criação de sistemas inteligentes',
      leadQuote:
        'Software de alto nível nasce quando a engenharia de produto encontra a ',
      leadHighlight:
        'maturidade de quem conhece produção crítica por dentro e domina IA como multiplicador real.',
      bodyCol1:
        'Minha jornada na tecnologia não começou em tutoriais superficiais. Foram mais de 10 anos atuando na linha de frente de infraestrutura, capacidade, performance e observabilidade em ambientes corporativos de altíssima pressão (IBM, Engineering Brasil, Mastermaq, Stefanini e 3CON). Essa base me ensinou como sistemas reais falham, escalam e se comportam sob carga.',
      bodyCol2:
        'Nos últimos 4 anos e meio em Portugal, atuei como Desenvolvedor de Software na CI&T (Lisboa), construindo interfaces escaláveis em React/Next.js, APIs e BFFs em Node.js/NestJS e adotando inteligência artificial generativa no ciclo completo de desenvolvimento. Atualmente aprofundo essa convergência na Pós-Graduação e no MBA em Engenharia de Software com IA.',
      stats: [
        {
          value: 4,
          suffix: '.5+',
          label: 'Anos como Software Developer na CI&T Lisboa',
        },
        {
          value: 15,
          suffix: '+',
          label: 'Anos de experiência total em TI, Infra & Desenvolvimento',
        },
        {
          value: 2,
          suffix: 'x',
          label: 'Especializações de Pós & MBA em Eng. de Software com IA (Full Cycle & Anhanguera)',
        },
        {
          value: 5,
          suffix: '',
          label: 'Projetos autorais em produção (IA, POS, Motores & SaaS)',
        },
      ],
    },
    works: {
      indexLabel: '02 / Obras Selecionadas (2024 — 2026)',
      title: 'Arquitetura & Código em Produção',
      subtitle:
        'Passe o cursor para inspecionar a prévia dinâmica ou clique em qualquer obra para abrir o estudo de caso técnico e o blueprint da arquitetura.',
      cursorLabel: 'ABRIR CASE',
      proprietaryTag: 'PROPRIETÁRIO · USO RESTRITO',
      openSourceTag: 'OPEN SOURCE · MIT',
      modal: {
        close: 'Fechar [ESC]',
        challengeTitle: 'O Desafio Técnico',
        solutionTitle: 'Solução & Engenharia',
        blueprintTitle: 'Blueprint da Arquitetura',
        highlightsTitle: 'Destaques de Implementação',
        stackTitle: 'Stack Tecnológica',
        viewGithub: 'Inspecionar Repositório no GitHub',
        nextProject: 'Próximo Case',
      },
      items: [
        {
          id: 'advocatus-ia',
          num: '01',
          title: 'Advocatus IA',
          subtitle: 'SaaS Jurídico Full-Stack com Busca Semântica RAG & Workflows Duráveis',
          category: 'SaaS · LegalTech · IA Generativa & RAG',
          year: '2026',
          clientOrContext: 'Produto Autoral Proprietário',
          role: 'Arquiteto & Desenvolvedor Full-Stack',
          isProprietary: true,
          licenseBadge: 'Proprietário · Uso Comercial e Pessoal Proibido',
          licenseNote:
            'Código visível exclusivamente para avaliação técnica de portfólio. Todos os direitos reservados a Jhonatan Ecard. É estritamente proibido copiar, distribuir ou utilizar comercialmente ou para uso próprio.',
          githubUrl: 'https://github.com/jhonatanecardoficial/Advocatus-IA',
          accentColor: '#D4FF3A',
          summary:
            'Plataforma SaaS completa para escritórios de advocacia que une gestão processual, busca vetorial semântica em peças jurídicas (pgvector) e automação assíncrona resiliente com Temporal.io.',
          challenge:
            'Operações jurídicas com IA frequentemente sofrem com alucinações, timeouts em documentos extensos e falta de rastreabilidade. O desafio foi desenhar uma arquitetura onde o processamento de peças longas fosse determinístico, auditável e tolerante a falhas.',
          architectureSolution:
            'Implementei um monorepo Full-Stack isolando o front-end reativo (Next.js App Router) de uma API modular em NestJS acoplada ao Temporal.io para execução durável de workflows, utilizando PostgreSQL + pgvector para recuperação semântica de alta precisão e roteamento híbrido entre Claude 3.5 Sonnet e OpenAI.',
          highlights: [
            'Orquestração de agentes e pipelines assíncronos à prova de falhas com Temporal.io.',
            'Busca vetorial híbrida (semântica + filtros estruturados) com PostgreSQL e pgvector.',
            'Roteamento inteligente de LLMs (Anthropic Claude & OpenAI) com controle de contexto e custos.',
            'Observabilidade nativa com métricas Prometheus, dashboards Grafana e logs estruturados.',
          ],
          stack: [
            'Next.js',
            'TypeScript',
            'NestJS',
            'Temporal.io',
            'PostgreSQL',
            'pgvector',
            'Prisma ORM',
            'Claude / OpenAI API',
            'Docker',
            'Prometheus & Grafana',
          ],
          architectureNodes: [
            {
              layer: '01 · Camada de Experiência',
              tech: 'Next.js + Tailwind + TypeScript',
              detail: 'Editor jurídico assistido por IA, streaming de respostas e painel de processos.',
            },
            {
              layer: '02 · Core API & Domínio',
              tech: 'NestJS + Prisma ORM + RBAC',
              detail: 'Arquitetura modular com validação estrita, autenticação e isolamento multi-tenant.',
            },
            {
              layer: '03 · Orquestração Durável',
              tech: 'Temporal.io Workflows',
              detail: 'Execução assíncrona com retries automáticos, preservação de estado e auditoria.',
            },
            {
              layer: '04 · Memória Vetorial & IA',
              tech: 'pgvector + Claude / OpenAI',
              detail: 'Indexação de embeddings jurídicos, RAG contextual e validação de citações.',
            },
          ],
        },
        {
          id: 'localtill-pos',
          num: '02',
          title: 'LocalTill POS',
          subtitle: 'Sistema de Ponto de Venda Offline-First de Missão Crítica para Varejo',
          category: 'SaaS · Desktop & POS · Offline-First · Resiliência',
          year: '2026',
          clientOrContext: 'Produto Autoral em Produção Ativa',
          role: 'Arquiteto & Desenvolvedor Full-Stack',
          isProprietary: true,
          licenseBadge: 'Proprietário · Uso Comercial e Pessoal Proibido',
          licenseNote:
            'Código visível exclusivamente para avaliação técnica de portfólio. Todos os direitos reservados a Jhonatan Ecard. É estritamente proibido copiar, distribuir ou utilizar comercialmente ou para uso próprio sem autorização prévia por escrito.',
          githubUrl: 'https://github.com/jhonatanecardoficial/localtill-pos',
          accentColor: '#00E5FF',
          summary:
            'Sistema de Ponto de Venda (PDV) moderno, resiliente e de missão crítica, concebido com arquitetura Offline-First em Electron, React, TypeScript e PostgreSQL. Opera com zero downtime mesmo sob instabilidade total de conexão.',
          challenge:
            'Em balcões de varejo e eventos de alto volume, falhas de conectividade ou latências de rede interrompem filas de atendimento, corrompem pedidos em andamento e geram perdas financeiras imediatas. O desafio foi desenhar uma infraestrutura que garantisse operação ininterrupta do caixa com conciliação posterior estrita.',
          architectureSolution:
            'Arquitetura híbrida desacoplada com Electron 40 nativo (Windows/macOS) e front-end React 18: vendas são gravadas instantaneamente no IndexedDB local antes de qualquer round-trip de rede. Um Sync Manager assíncrono sincroniza a fila com a API REST Express conectada ao PostgreSQL local/master via pool resiliente, com auto-descoberta de rede via protocolo mDNS / Bonjour.',
          highlights: [
            'Arquitetura Offline-First com escrita imediata em IndexedDB e sincronização assíncrona tolerante a falhas.',
            'Virtual Numpad Engine com detecção automática de hardware touch e botões ergonômicos de 44px+ para balcão.',
            'Controle financeiro rigoroso com abertura, fechamento de turno, suprimentos, sangrias e cálculo dinâmico de troco.',
            'Auto-discovery de terminais na rede local via protocolo mDNS/Bonjour sem necessidade de IP fixo.',
          ],
          stack: [
            'Electron 40',
            'React 18',
            'TypeScript 5.8',
            'IndexedDB',
            'Node.js',
            'Express',
            'PostgreSQL 16',
            'Tailwind CSS',
            'shadcn/ui',
            'mDNS / Bonjour',
          ],
          architectureNodes: [
            {
              layer: '01 · Terminal Desktop / UI',
              tech: 'Electron 40 + React 18 + shadcn/ui',
              detail: 'Interface responsiva para balcão touch e teclado físico, cálculo em tempo real e cupons térmicos.',
            },
            {
              layer: '02 · Armazenamento Offline-First',
              tech: 'IndexedDB Local Cache',
              detail: 'Persistência instantânea de vendas e catálogo no cliente, garantindo zero travamentos sem rede.',
            },
            {
              layer: '03 · Motor de Sincronização & Rede',
              tech: 'Sync Manager Engine + mDNS / Bonjour',
              detail: 'Fila de conciliação assíncrona, retry com backoff exponencial e auto-discovery de servidores na LAN.',
            },
            {
              layer: '04 · Servidor Local & Persistência Relacional',
              tech: 'Express API + PostgreSQL 16',
              detail: 'Transações ACID estritas, controle de turnos de caixa, auditoria imutável e constraints relacionais.',
            },
          ],
        },
        {
          id: 'cpwe-engine',
          num: '03',
          title: 'CPWE Engine',
          subtitle: 'Context-Preserving Workflow Engine para Orquestração de Agentes de IA',
          category: 'AI Infrastructure · Workflow Engine · TypeScript',
          year: '2026',
          clientOrContext: 'Engenharia de Sistemas de IA (Open Source)',
          role: 'Criador & Desenvolvedor Principal',
          isProprietary: false,
          licenseBadge: 'Open Source · Portfólio Técnico',
          githubUrl: 'https://github.com/jhonatanecardoficial/cpwe-engine',
          accentColor: '#38F2AF',
          summary:
            'Motor de execução de fluxos de trabalho desenhado especificamente para preservar o contexto semântico entre múltiplas etapas de agentes autônomos e chamadas determinísticas.',
          challenge:
            'Pipelines complexos de múltiplos agentes perdem contexto crítico entre etapas ou estouram a janela de tokens com histórico irrelevante, degradando a precisão em tarefas de engenharia de software.',
          architectureSolution:
            'Desenvolvi uma engine baseada em grafos de estado tipados onde cada nó recebe um contrato estrito de entrada/saída, compactando artefatos intermediários sem perda de invariantes semânticos.',
          highlights: [
            'Preservação estruturada de contexto entre múltiplos estágios de execução de agentes.',
            'Contratos tipados de entrada e saída com validação em tempo de execução.',
            'Suporte a checkpoints, inspeção de estado intermediário e retomada de fluxos.',
            'Arquitetura leve, modular e desacoplada de provedor específico de LLM.',
          ],
          stack: [
            'TypeScript',
            'Node.js',
            'State Machines',
            'DAG Orchestration',
            'LLM Tool Calling',
            'JSON Schema',
          ],
          architectureNodes: [
            {
              layer: '01 · Definição de Grafo',
              tech: 'Typed DAG Pipeline',
              detail: 'Declaração determinística de nós, dependências e políticas de transição.',
            },
            {
              layer: '02 · Context Vault',
              tech: 'Semantic State Store',
              detail: 'Compressão seletiva de memória e preservação de invariantes entre agentes.',
            },
            {
              layer: '03 · Execution Runtime',
              tech: 'Node.js Async Worker',
              detail: 'Controle de concorrência, telemetria por etapa e recuperação de erros.',
            },
          ],
        },
        {
          id: 'paperclip-hermes-openclaw',
          num: '04',
          title: 'PaperClip · Hermes · OpenClaw',
          subtitle: 'Ecossistema de Integração de Agentes Autônomos & Tool-Calling',
          category: 'Agentes Autônomos · Automação · MCP',
          year: '2026',
          clientOrContext: 'Pesquisa Aplicada & Automação',
          role: 'Desenvolvedor de Software & IA',
          isProprietary: false,
          licenseBadge: 'Open Source · Experimentação Avançada',
          githubUrl:
            'https://github.com/jhonatanecardoficial/PaperClipAi-HermesAgent-OpenClaw',
          accentColor: '#FFB830',
          summary:
            'Laboratório de integração unificando protocolos de agentes autônomos (Hermes Agent, OpenClaw e PaperClipAI) para execução segura de ferramentas locais, automação de processos e raciocínio multi-etapa.',
          challenge:
            'Conectar diferentes arquiteturas de agentes autônomos com ferramentas reais do sistema operacional e APIs externas mantendo previsibilidade e controle de execução.',
          architectureSolution:
            'Construção de adaptadores modulares e pontes de comunicação padronizadas permitindo que agentes planejem, invoquem ferramentas e validem resultados em loop fechado.',
          highlights: [
            'Integração prática entre múltiplos frameworks modernos de agentes autônomos.',
            'Execução assistida de ferramentas (Tool-Calling) com validação de retorno.',
            'Padrões de delegação de subtarefas e consolidação de respostas.',
          ],
          stack: [
            'Python',
            'TypeScript',
            'LLM Agents',
            'MCP Protocol',
            'Tool Calling',
            'CLI Automation',
          ],
          architectureNodes: [
            {
              layer: '01 · Planejador Cognitivo',
              tech: 'Hermes / PaperClip Core',
              detail: 'Decomposição de objetivos complexos em árvore de subtarefas executáveis.',
            },
            {
              layer: '02 · Ponte de Ferramentas',
              tech: 'OpenClaw & MCP Adapters',
              detail: 'Interface padronizada para execução segura de comandos, busca e APIs.',
            },
            {
              layer: '03 · Loop de Verificação',
              tech: 'Self-Reflection Critic',
              detail: 'Inspeção automática da saída antes da consolidação da resposta final.',
            },
          ],
        },
        {
          id: 'jhonatanecard-com',
          num: '05',
          title: 'JhonatanEcard.com (v3)',
          subtitle: 'Engenharia Criativa, WebGL GLSL Shaders & Tipografia Cinética',
          category: 'Creative Engineering · WebGL · Next.js 15',
          year: '2026',
          clientOrContext: 'Identidade Digital & Portfólio Oficial',
          role: 'Design Engineering & Full-Stack Dev',
          isProprietary: false,
          licenseBadge: 'Open Source · MIT License',
          githubUrl: 'https://github.com/jhonatanecardoficial/jhonatanecard.com',
          liveUrl: 'https://jhonatanecard.com',
          accentColor: '#FF5E36',
          summary:
            'Este próprio portfólio: concebido do zero com WebGL Fragment Shaders em tempo real, tipografia variável reativa à proximidade do cursor, rolagem horizontal pinada com GSAP ScrollTrigger e física suave com Lenis.',
          challenge:
            'Superar o padrão de portfólios genéricos de desenvolvedores, combinando performance estática nota máxima com direção de arte editorial e engenharia visual digna de premiação internacional.',
          architectureSolution:
            'Arquitetura Next.js 15 + React 19 exportada estaticamente, combinando um pipeline WebGL GLSL customizado a 60fps, sincronização de ticker entre Lenis e GSAP ScrollTrigger, e internacionalização instantânea PT/EN.',
          highlights: [
            'Shader GLSL de ruído fractal (FBM) reativo ao cursor, scroll e troca de paleta ao vivo.',
            'Tipografia variável (Fraunces) com interpolação dinâmica de peso por distância euclidiana.',
            'Timeline horizontal pinada com GSAP ScrollTrigger e prévia flutuante com inclinação por velocidade.',
            'Deploy automatizado e código 100% documentado e aberto como referência de portfólio.',
          ],
          stack: [
            'Next.js 15',
            'React 19',
            'TypeScript 5.8',
            'WebGL / GLSL',
            'GSAP + ScrollTrigger',
            'Lenis Smooth Scroll',
            'Tailwind CSS v4',
          ],
          architectureNodes: [
            {
              layer: '01 · Pipeline Visual 60fps',
              tech: 'WebGL GLSL + Variable Fonts',
              detail: 'Renderização em GPU de campo fluido fractal e física tipográfica por frame.',
            },
            {
              layer: '02 · Coreografia de Scroll',
              tech: 'Lenis + GSAP ScrollTrigger',
              detail: 'Inércia suave sincronizada com seções pinadas, cortinas e contadores.',
            },
            {
              layer: '03 · Build & Entrega',
              tech: 'Next.js Static Export',
              detail: 'Bundle enxuto, SEO completo (JSON-LD Person) e hospedagem de baixa latência.',
            },
          ],
        },
      ],
    },
    journey: {
      indexLabel: '03 / Jornada Profissional (2006 — 2026)',
      title: 'Evolução Contínua em Produção',
      subtitle:
        'Role para navegar horizontalmente pelos marcos da minha carreira — de ambientes críticos enterprise no Brasil à engenharia de software e IA em Portugal.',
      scrollHint: 'ROLE PARA NAVEGAR HORIZONTALMENTE →',
      stages: [
        {
          num: '01',
          period: 'Fev 2026 — Fev 2027',
          role: 'MBA & Especialização em Engenharia de Software com IA Aplicada',
          company: 'Full Cycle & Anhanguera Educacional',
          location: 'Porto, Portugal (Remoto)',
          tag: 'ESPECIALIZAÇÃO ACADÊMICA · IA APLICADA',
          description:
            'Dupla especialização avançada unindo o MBA in Software Engineering with AI (Full Cycle) e a Pós-Graduação Software Engineering in Applied AI (Anhanguera Educacional) — com foco em arquitetura de sistemas inteligentes, LLMs, RAG, agentes autônomos e governança de engenharia.',
          metrics: [
            'Full Cycle — MBA in Software Engineering with AI (fev. 2026 – fev. 2027)',
            'Anhanguera Educacional — Software Engineering in Applied AI (fev. 2026 – fev. 2027)',
          ],
          stack: ['IA Aplicada', 'LLMs & RAG', 'pgvector', 'Agentes IA', 'Software Architecture'],
        },
        {
          num: '02',
          period: '2021 — 2025',
          role: 'Software Developer (Full-Stack & AI-Augmented)',
          company: 'CI&T',
          location: 'Lisboa, Portugal · 4 anos e 5 meses',
          tag: 'EXPERIÊNCIA INTERNACIONAL · EUROPA',
          description:
            'Atuação em esquadrões ágeis internacionais construindo e evoluindo aplicações web corporativas de grande porte. Desenvolvimento Front-End com React, Next.js e TypeScript, integração com APIs REST, Node.js, NestJS e BFFs, além do uso pioneiro de ferramentas de IA (CI&T Flow, GitHub Copilot, Claude) para acelerar entregas e testes.',
          metrics: [
            '4 anos e 5 meses atuando diretamente como Desenvolvedor em projetos globais',
            'Componentização escalável, revisões de código, CI/CD e mentoria técnica',
          ],
          stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'CI&T Flow / IA'],
        },
        {
          num: '03',
          period: '2019',
          role: 'Consultor de Monitoramento & Observabilidade',
          company: 'Engineering Brasil',
          location: 'Belo Horizonte, Brasil',
          tag: 'OBSERVABILIDADE & AUTOMAÇÃO',
          description:
            'Arquitetura e implementação de soluções de monitoramento proativo, telemetria de aplicações e dashboards executivos de disponibilidade, reduzindo drasticamente o tempo médio de detecção (MTTD) de incidentes críticos.',
          metrics: [
            'Automação de alertas inteligentes e correlação de eventos',
            'Visibilidade ponta a ponta de serviços distribuídos',
          ],
          stack: ['Prometheus', 'Grafana', 'Zabbix', 'Linux', 'Automação'],
        },
        {
          num: '04',
          period: '2017 — 2019',
          role: 'Analista de Infraestrutura & Monitoramento',
          company: 'Mastermaq Software',
          location: 'Belo Horizonte, Brasil · 2 anos',
          tag: 'ALTA DISPONIBILIDADE · SAAS CONTÁBIL',
          description:
            'Sustentação de infraestrutura crítica, análise de causa raiz (RCA), tuning de servidores e monitoramento contínuo de sistemas corporativos utilizados por milhares de escritórios no Brasil.',
          metrics: [
            'Elevação da estabilidade operacional e prevenção de gargalos',
            'Integração direta entre operações de infraestrutura e equipes de produto',
          ],
          stack: ['Infraestrutura Crítica', 'Monitoramento', 'Redes', 'Windows/Linux Server'],
        },
        {
          num: '05',
          period: '2013 — 2016',
          role: 'Analista de Performance & Capacidade Enterprise',
          company: 'IBM · Stefanini · 3CON',
          location: 'São Paulo & Belo Horizonte, Brasil',
          tag: 'MISSÃO CRÍTICA · TELECOM & ENERGIA',
          description:
            'Gestão de capacidade e análise de performance em ambientes de missão crítica para grandes corporações como Telefônica/Vivo e CEMIG. Modelagem preditiva de consumo de recursos e otimização de ambientes de alto volume.',
          metrics: [
            'Atuação em contas Tier-1 (IBM / Telefônica / CEMIG)',
            'Prevenção de indisponibilidade através de capacity planning rigoroso',
          ],
          stack: ['Capacity Planning', 'Performance Tuning', 'ITIL', 'Enterprise Telemetry'],
        },
        {
          num: '06',
          period: '2006 — 2012',
          role: 'Bacharelado em Ciência da Computação & Fundação em TI',
          company: 'Centro Universitário de Belo Horizonte (UniBH) · Algar · Montreal · Aethra',
          location: 'Belo Horizonte, Minas Gerais, Brasil',
          tag: 'BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO',
          description:
            'Bacharelado em Ciência da Computação (Information Technology) pelo Centro Universitário de Belo Horizonte (2006–2011) aliado à atuação prática desde 2006 em redes, servidores e operação de sistemas corporativos.',
          metrics: [
            "Bachelor's Degree in Computer Science — Centro Universitário de Belo Horizonte (2006–2011)",
            'Base sólida em algoritmos, arquitetura de computadores, redes e sistemas operacionais',
          ],
          stack: ['Computer Science', 'Information Technology', 'Redes TCP/IP', 'Linux / Windows'],
        },
      ],
    },
    arsenal: {
      indexLabel: '04 / Arsenal Técnico & Credenciais',
      title: 'Engenharia de Ponta a Ponta',
      subtitle:
        'A combinação rara entre desenvolvimento moderno de software (Front-End, Back-End e IA) e vivência profunda em infraestrutura de produção.',
      pillars: [
        {
          num: '01',
          id: 'frontend',
          title: 'Front-End & Creative Engineering',
          subtitle: 'Interfaces rápidas, acessíveis e visualmente memoráveis',
          description:
            'Construção de aplicações web modernas baseadas em componentes reutilizáveis, tipagem estrita, renderização híbrida (SSR/SSG) e animações de alta precisão.',
          deliverables: [
            'Aplicações SPAs e SSR com React 19 & Next.js App Router',
            'Design Systems escaláveis com Tailwind CSS e TypeScript estrito',
            'Experiências imersivas com GSAP ScrollTrigger, Lenis e WebGL',
          ],
          technologies: [
            { name: 'React & Next.js', level: 'Produção (4.5+ anos)' },
            { name: 'TypeScript / JavaScript ES6+', level: 'Produção (4.5+ anos)' },
            { name: 'Tailwind CSS & CSS Moderno', level: 'Avançado' },
            { name: 'GSAP / Lenis / WebGL Shaders', level: 'Creative Dev' },
          ],
        },
        {
          num: '02',
          id: 'ai',
          title: 'IA Aplicada, LLMs & Arquitetura RAG',
          subtitle: 'Sistemas inteligentes determinísticos e integrados ao negócio',
          description:
            'Desenvolvimento de produtos potencializados por IA generativa, indo muito além de wrappers simples: indexação vetorial, preservação de contexto e agentes autônomos.',
          deliverables: [
            'Pipelines RAG com PostgreSQL + pgvector e busca semântica híbrida',
            'Orquestração de LLMs (Claude, OpenAI) com Tool-Calling e MCP',
            'Motores de workflow para agentes com preservação de contexto (CPWE)',
          ],
          technologies: [
            { name: 'RAG & pgvector', level: 'Especialista (Pós/MBA)' },
            { name: 'Claude API & OpenAI SDK', level: 'Produção' },
            { name: 'Agentes Autônomos & MCP', level: 'Avançado' },
            { name: 'AI-Augmented Dev (Cursor/Claude/Flow)', level: 'Diário' },
          ],
        },
        {
          num: '03',
          id: 'backend',
          title: 'Back-End, APIs & Workflows Duráveis',
          subtitle: 'Serviços resilientes, contratos limpos e processamento assíncrono',
          description:
            'Desenho e implementação de APIs RESTful, camadas BFF (Backend for Frontend) e motores de execução assíncrona capazes de lidar com processos longos sem perda de estado.',
          deliverables: [
            'APIs modulares e seguras com Node.js, NestJS e Prisma ORM',
            'Orquestração de workflows distribuídos e resilientes com Temporal.io',
            'Modelagem relacional e vetorial em PostgreSQL com alta performance',
          ],
          technologies: [
            { name: 'Node.js & NestJS', level: 'Produção' },
            { name: 'Temporal.io Workflows', level: 'Arquitetura' },
            { name: 'PostgreSQL & Prisma ORM', level: 'Produção' },
            { name: 'REST APIs, BFF & Microsserviços', level: 'Produção' },
          ],
        },
        {
          num: '04',
          id: 'infra',
          title: 'Observabilidade, DevOps & Infra Crítica',
          subtitle: '+10 anos garantindo que a arquitetura sobreviva ao mundo real',
          description:
            'Diferencial competitivo construído em mais de uma década analisando capacidade, performance e disponibilidade em ambientes corporativos de grande escala.',
          deliverables: [
            'Monitoramento full-stack com Prometheus, Grafana e Zabbix',
            'Containerização com Docker, pipelines CI/CD e automação Linux',
            'Análise de performance, diagnóstico de gargalos e Capacity Planning',
          ],
          technologies: [
            { name: 'Prometheus, Grafana & Zabbix', level: '10+ anos' },
            { name: 'Docker & CI/CD (GitHub Actions)', level: 'Produção' },
            { name: 'Capacity & Performance Management', level: 'Enterprise' },
            { name: 'Linux, Redes TCP/IP & Cloud', level: 'Sênior Infra' },
          ],
        },
      ],
      credentialsTitle: 'Formação Acadêmica',
      credentialsSubtitle:
        'Especialização acadêmica contínua em Engenharia de Software, Ciência da Computação e Inteligência Artificial Aplicada.',
      cvCardTitle: 'Currículo Executivo (PDF)',
      cvCardDesc:
        'Versão de 1 página diagramada para recrutadores e líderes técnicos, contendo histórico completo na CI&T Lisboa, projetos de IA e formação acadêmica.',
      cvDownloadBtn: 'Baixar CV em PDF (PT)',
      credentials: [
        {
          period: 'fev. de 2026 – fev. de 2027',
          title: 'MBA in Software Engineering with AI, Artificial Intelligence',
          institution: 'Full Cycle',
          badge: 'EM CURSO · IA',
          detail:
            'Competências: IA · Arquitetura de software em larga escala potencializada por Inteligência Artificial, LLMs, RAG e sistemas distribuídos.',
        },
        {
          period: 'fev. de 2026 – fev. de 2027',
          title: 'Software Engineering in Applied AI, Artificial Intelligence',
          institution: 'Anhanguera Educacional',
          badge: 'EM CURSO · IA',
          detail:
            'Competências: IA · Engenharia de Software em IA Aplicada, agentes autônomos, integração de modelos generativos e automação inteligente.',
        },
        {
          period: '2006 – 2011',
          title: "Bachelor's Degree in Computer Science, Information Technology",
          institution: 'Centro Universitário de Belo Horizonte',
          badge: 'CONCLUÍDO',
          detail:
            'Bacharelado em Ciência da Computação e Tecnologia da Informação — algoritmos, estruturas de dados, engenharia de software, redes e sistemas distribuídos.',
        },
      ],
    },
    footer: {
      kicker: '05 / Contato Direto — Vila Nova de Gaia, Porto, Portugal',
      titleLine1: 'Vamos construir o',
      titleLine2: 'próximo nível?',
      copyEmailHint: 'Clique para copiar o e-mail',
      emailCopied: 'E-mail copiado para a área de transferência!',
      whatsappCta: 'Chamar no WhatsApp (+351 911 782 332)',
      backToTop: 'Voltar ao topo ↑',
      rights: '© 2026 Jhonatan Ecard. Desenvolvido com Next.js 15, WebGL GLSL, GSAP & Lenis.',
    },
  },
  en: {
    meta: {
      roleBadge: 'Software Developer · Full-Stack & Applied AI',
      availability: 'Available for projects & opportunities in Europe / Remote',
      locationLabel: 'Vila Nova de Gaia · Porto, PT',
      yearsSummary: '15+ yrs in IT · Full-Stack, Architecture & Applied AI',
    },
    nav: {
      manifesto: 'Manifesto',
      works: 'Works',
      journey: 'Journey',
      arsenal: 'Arsenal',
      contact: 'Contact',
      cvButton: 'Resume PDF',
      shaderLabel: 'WebGL Theme',
    },
    loader: {
      bootLines: [
        'INITIALIZING WEBGL GLSL PIPELINE...',
        'SYNCHRONIZING LENIS + GSAP SCROLLTRIGGER...',
        'MOUNTING FULL-STACK & APPLIED AI ARCHITECTURE...',
      ],
      subtitle: 'Software Development & Applied AI Portfolio — Porto, Portugal',
    },
    hero: {
      kicker: 'SOFTWARE DEVELOPER · FULL-STACK & APPLIED AI',
      subtitle:
        'Over 4.5 years building modern web applications at CI&T in Lisbon (React, Next.js, TypeScript, Node.js, and NestJS), backed by more than a decade in mission-critical enterprise infrastructure for giants like IBM and Telefónica — now focused on LLM architectures, RAG, and autonomous agents.',
      ctaPrimary: 'Explore Works & Architecture',
      ctaSecondary: 'Start a Conversation',
      ctaCv: 'Download CV',
      scrollHint: 'Scroll to explore',
      portraitCaption: 'Jhonatan Ecard',
      portraitSub: 'Porto, Portugal · Full-Stack & AI',
      telemetryLabel: 'POSTGRAD & MBA IN SOFTWARE ENG. WITH AI',
    },
    marquee: [
      'Full-Stack Development',
      'Applied AI & LLM Orchestration',
      'RAG & pgvector',
      'Next.js 15 & TypeScript',
      'Node.js, NestJS & Temporal.io',
      'Enterprise Observability & Infra',
    ],
    manifesto: {
      indexLabel: '01 / Manifesto & Trajectory',
      indexSub: 'From mission-critical enterprise infrastructure to intelligent software systems',
      leadQuote:
        'High-caliber software emerges when product development meets the ',
      leadHighlight:
        'maturity of someone who knows critical production from the inside and wields AI as a true multiplier.',
      bodyCol1:
        'My journey in technology did not start with surface-level tutorials. I spent over 10 years on the front lines of enterprise infrastructure, capacity planning, performance, and observability in high-pressure environments (IBM, Engineering Brasil, Mastermaq, Stefanini, and 3CON). That foundation taught me how real-world systems fail, scale, and behave under load.',
      bodyCol2:
        'Over the past 4.5 years in Portugal, I worked as a Software Developer at CI&T (Lisbon), building scalable React/Next.js interfaces, Node.js/NestJS APIs and BFFs, and integrating generative AI across the entire software lifecycle. Today, I am deepening this convergence through a Postgraduate Degree and MBA in Software Engineering with AI.',
      stats: [
        {
          value: 4,
          suffix: '.5+',
          label: 'Years as Software Developer at CI&T Lisbon',
        },
        {
          value: 15,
          suffix: '+',
          label: 'Total years in IT, Critical Infra & Software Development',
        },
        {
          value: 2,
          suffix: 'x',
          label: 'Postgrad & MBA Specializations in Software Eng. with AI (Full Cycle & Anhanguera)',
        },
        {
          value: 5,
          suffix: '',
          label: 'Original production projects (AI, POS, Engines & SaaS)',
        },
      ],
    },
    works: {
      indexLabel: '02 / Selected Works (2024 — 2026)',
      title: 'Production Architecture & Code',
      subtitle:
        'Hover any row to inspect the velocity-reactive preview or click to open the full technical case study and system architecture blueprint.',
      cursorLabel: 'OPEN CASE',
      proprietaryTag: 'PROPRIETARY · RESTRICTED USE',
      openSourceTag: 'OPEN SOURCE · MIT',
      modal: {
        close: 'Close [ESC]',
        challengeTitle: 'The Technical Challenge',
        solutionTitle: 'Engineering Solution',
        blueprintTitle: 'System Architecture Blueprint',
        highlightsTitle: 'Implementation Highlights',
        stackTitle: 'Technology Stack',
        viewGithub: 'Inspect GitHub Repository',
        nextProject: 'Next Case Study',
      },
      items: [
        {
          id: 'advocatus-ia',
          num: '01',
          title: 'Advocatus IA',
          subtitle: 'Full-Stack LegalTech SaaS with RAG Semantic Search & Durable Workflows',
          category: 'SaaS · LegalTech · Generative AI & RAG',
          year: '2026',
          clientOrContext: 'Proprietary Flagship Product',
          role: 'Full-Stack Architect & Developer',
          isProprietary: true,
          licenseBadge: 'Proprietary · Commercial & Personal Use Prohibited',
          licenseNote:
            'Source code is public strictly for technical portfolio evaluation. All rights reserved by Jhonatan Ecard. Commercial or personal reproduction, distribution, or improper use is strictly prohibited.',
          githubUrl: 'https://github.com/jhonatanecardoficial/Advocatus-IA',
          accentColor: '#D4FF3A',
          summary:
            'Comprehensive SaaS platform for law firms combining case management, semantic vector search across legal documents (pgvector), and resilient asynchronous workflow automation powered by Temporal.io.',
          challenge:
            'Legal AI operations frequently suffer from hallucinations, request timeouts on lengthy filings, and lack of auditability. The challenge was designing an architecture where long-running legal pipelines are deterministic, traceable, and fault-tolerant.',
          architectureSolution:
            'Architected a Full-Stack monorepo separating the reactive Next.js App Router front-end from a modular NestJS API paired with Temporal.io for durable workflow execution, backed by PostgreSQL + pgvector for high-precision semantic retrieval and hybrid routing across Claude 3.5 Sonnet and OpenAI.',
          highlights: [
            'Fault-tolerant asynchronous AI agent pipelines orchestrated via Temporal.io.',
            'Hybrid vector search (semantic similarity + structured metadata filters) with PostgreSQL & pgvector.',
            'Intelligent multi-model LLM router (Anthropic Claude & OpenAI) optimizing accuracy and token cost.',
            'Native production observability with Prometheus metrics, Grafana dashboards, and structured logging.',
          ],
          stack: [
            'Next.js',
            'TypeScript',
            'NestJS',
            'Temporal.io',
            'PostgreSQL',
            'pgvector',
            'Prisma ORM',
            'Claude / OpenAI API',
            'Docker',
            'Prometheus & Grafana',
          ],
          architectureNodes: [
            {
              layer: '01 · Experience Layer',
              tech: 'Next.js + Tailwind + TypeScript',
              detail: 'AI-assisted legal workspace, real-time streaming responses, and case dashboard.',
            },
            {
              layer: '02 · Core Domain API',
              tech: 'NestJS + Prisma ORM + RBAC',
              detail: 'Modular architecture with strict validation, authentication, and multi-tenant isolation.',
            },
            {
              layer: '03 · Durable Orchestration',
              tech: 'Temporal.io Workflows',
              detail: 'Resilient async execution with automatic retries, state persistence, and full audit trails.',
            },
            {
              layer: '04 · Vector Memory & AI',
              tech: 'pgvector + Claude / OpenAI',
              detail: 'Legal embedding indexing, contextual RAG retrieval, and citation verification.',
            },
          ],
        },
        {
          id: 'localtill-pos',
          num: '02',
          title: 'LocalTill POS',
          subtitle: 'Mission-Critical Offline-First Point of Sale (POS) System for Retail',
          category: 'SaaS · Desktop & POS · Offline-First · Resilient Systems',
          year: '2026',
          clientOrContext: 'Active Production Authorial Product',
          role: 'Full-Stack Architect & Developer',
          isProprietary: true,
          licenseBadge: 'Proprietary · Commercial & Personal Use Prohibited',
          licenseNote:
            'Source code is public strictly for technical portfolio evaluation. All rights reserved by Jhonatan Ecard. Commercial or personal reproduction, distribution, or unauthorized use is strictly prohibited without prior written permission.',
          githubUrl: 'https://github.com/jhonatanecardoficial/localtill-pos',
          accentColor: '#00E5FF',
          summary:
            'Modern, resilient, mission-critical Point of Sale (POS) software built with an Offline-First architecture using Electron, React, TypeScript, and PostgreSQL. Ensures zero operational downtime even during total network or internet outages.',
          challenge:
            'In busy retail checkouts and pop-up events, network latency or internet drops freeze transaction queues, disrupt cashiers, and directly cause lost revenue. The challenge was building an architecture that guarantees continuous POS operations with deterministic transactional reconciliation.',
          architectureSolution:
            'Decoupled hybrid architecture pairing native Electron 40 (Windows/macOS) with a React 18 UI: all transactions commit immediately to client-side IndexedDB before any network I/O. An asynchronous Sync Manager flushes pending batches to a local Express API backed by PostgreSQL connection pooling, with zero-config terminal discovery via mDNS / Bonjour.',
          highlights: [
            'Offline-First architecture with immediate local IndexedDB persistence and resilient background sync queues.',
            'Virtual Numpad Engine with automatic touch device detection and 44px+ accessible touch keypad ergonomics.',
            'Strict cash drawer auditability: shift open/close, supplies, bleed audits, and thermal receipt change calculation.',
            'Local network terminal auto-discovery via mDNS/Bonjour protocol eliminating manual IP configurations.',
          ],
          stack: [
            'Electron 40',
            'React 18',
            'TypeScript 5.8',
            'IndexedDB',
            'Node.js',
            'Express',
            'PostgreSQL 16',
            'Tailwind CSS',
            'shadcn/ui',
            'mDNS / Bonjour',
          ],
          architectureNodes: [
            {
              layer: '01 · Desktop Terminal / UI',
              tech: 'Electron 40 + React 18 + shadcn/ui',
              detail: 'Responsive interface optimized for touch checkouts and physical numpads, live cart totals, and thermal print.',
            },
            {
              layer: '02 · Offline-First Storage',
              tech: 'Client IndexedDB Cache',
              detail: 'Instant local commits for sales and catalog data, eliminating operational bottlenecks during outages.',
            },
            {
              layer: '03 · Sync Engine & Network Protocol',
              tech: 'Sync Manager Engine + mDNS / Bonjour',
              detail: 'Asynchronous reconciliation queue, exponential backoff retries, and LAN auto-discovery.',
            },
            {
              layer: '04 · Local Master Server & Relational DB',
              tech: 'Express API + PostgreSQL 16',
              detail: 'Strict ACID transactions, register shift tracking, immutable audit logs, and relational constraints.',
            },
          ],
        },
        {
          id: 'cpwe-engine',
          num: '03',
          title: 'CPWE Engine',
          subtitle: 'Context-Preserving Workflow Engine for Multi-Agent Orchestration',
          category: 'AI Infrastructure · Workflow Engine · TypeScript',
          year: '2026',
          clientOrContext: 'AI Systems Engineering (Open Source)',
          role: 'Creator & Lead Developer',
          isProprietary: false,
          licenseBadge: 'Open Source · Technical Portfolio',
          githubUrl: 'https://github.com/jhonatanecardoficial/cpwe-engine',
          accentColor: '#38F2AF',
          summary:
            'A specialized workflow execution engine engineered to preserve semantic context invariants across multi-step autonomous agent pipelines and deterministic tasks.',
          challenge:
            'Complex multi-agent workflows either lose critical context between handoffs or overflow token windows with noisy history, degrading reasoning quality in software engineering tasks.',
          architectureSolution:
            'Built a typed state-graph engine where each execution node enforces strict input/output schemas while compacting intermediate artifacts without losing semantic invariants.',
          highlights: [
            'Structured context preservation across multi-stage autonomous agent execution.',
            'Strictly typed I/O contracts with runtime schema validation.',
            'Support for execution checkpoints, state inspection, and deterministic replay.',
            'Lightweight, modular design decoupled from any single LLM vendor.',
          ],
          stack: [
            'TypeScript',
            'Node.js',
            'State Machines',
            'DAG Orchestration',
            'LLM Tool Calling',
            'JSON Schema',
          ],
          architectureNodes: [
            {
              layer: '01 · Graph Definition',
              tech: 'Typed DAG Pipeline',
              detail: 'Deterministic declaration of execution nodes, dependencies, and transition rules.',
            },
            {
              layer: '02 · Context Vault',
              tech: 'Semantic State Store',
              detail: 'Selective memory compaction and invariant preservation across agent handoffs.',
            },
            {
              layer: '03 · Execution Runtime',
              tech: 'Node.js Async Worker',
              detail: 'Concurrency control, step-level telemetry, and graceful error recovery.',
            },
          ],
        },
        {
          id: 'paperclip-hermes-openclaw',
          num: '04',
          title: 'PaperClip · Hermes · OpenClaw',
          subtitle: 'Autonomous Agent Integration & Tool-Calling Ecosystem',
          category: 'Autonomous Agents · Automation · MCP',
          year: '2026',
          clientOrContext: 'Applied Research & Automation',
          role: 'Software & AI Developer',
          isProprietary: false,
          licenseBadge: 'Open Source · Advanced Experimentation',
          githubUrl:
            'https://github.com/jhonatanecardoficial/PaperClipAi-HermesAgent-OpenClaw',
          accentColor: '#FFB830',
          summary:
            'Integration laboratory unifying autonomous agent protocols (Hermes Agent, OpenClaw, and PaperClipAI) for safe local tool execution, process automation, and multi-step reasoning.',
          challenge:
            'Bridging distinct autonomous agent architectures with real OS tools and external APIs while maintaining execution predictability and safety boundaries.',
          architectureSolution:
            'Engineered modular adapters and standardized communication bridges enabling agents to plan, invoke tools, and verify outputs in a closed feedback loop.',
          highlights: [
            'Practical interoperability across modern autonomous agent frameworks.',
            'Structured tool-calling with output validation and error handling.',
            'Subtask delegation patterns and multi-agent response synthesis.',
          ],
          stack: [
            'Python',
            'TypeScript',
            'LLM Agents',
            'MCP Protocol',
            'Tool Calling',
            'CLI Automation',
          ],
          architectureNodes: [
            {
              layer: '01 · Cognitive Planner',
              tech: 'Hermes / PaperClip Core',
              detail: 'Decomposes high-level goals into executable subtask trees.',
            },
            {
              layer: '02 · Tool Execution Bridge',
              tech: 'OpenClaw & MCP Adapters',
              detail: 'Standardized interface for safe command execution, search, and API calls.',
            },
            {
              layer: '03 · Verification Loop',
              tech: 'Self-Reflection Critic',
              detail: 'Automated output inspection prior to final response synthesis.',
            },
          ],
        },
        {
          id: 'jhonatanecard-com',
          num: '05',
          title: 'JhonatanEcard.com (v3)',
          subtitle: 'Creative Engineering, WebGL GLSL Shaders & Kinetic Typography',
          category: 'Creative Engineering · WebGL · Next.js 15',
          year: '2026',
          clientOrContext: 'Official Digital Identity & Portfolio',
          role: 'Design Engineering & Full-Stack Dev',
          isProprietary: false,
          licenseBadge: 'Open Source · MIT License',
          githubUrl: 'https://github.com/jhonatanecardoficial/jhonatanecard.com',
          liveUrl: 'https://jhonatanecard.com',
          accentColor: '#FF5E36',
          summary:
            'This portfolio itself: crafted from scratch featuring real-time WebGL Fragment Shaders, cursor-proximity variable typography, GSAP ScrollTrigger pinned horizontal scroll, and Lenis smooth inertia.',
          challenge:
            'Transcending generic developer templates by uniting static-export speed with editorial art direction and award-caliber interactive engineering.',
          architectureSolution:
            'Statically exported Next.js 15 + React 19 architecture combining a custom 60fps WebGL GLSL shader pipeline, ticker-synced Lenis and GSAP ScrollTrigger choreography, and instant PT/EN localization.',
          highlights: [
            'Real-time FBM fractal noise GLSL shader reactive to mouse, scroll, and live theme switching.',
            'Variable typography (Fraunces) with per-character weight interpolation by Euclidean distance.',
            'Pinned horizontal career timeline and velocity-tilted floating project preview.',
            'Clean, documented open-source repository serving as a live front-end engineering showcase.',
          ],
          stack: [
            'Next.js 15',
            'React 19',
            'TypeScript 5.8',
            'WebGL / GLSL',
            'GSAP + ScrollTrigger',
            'Lenis Smooth Scroll',
            'Tailwind CSS v4',
          ],
          architectureNodes: [
            {
              layer: '01 · 60fps Visual Pipeline',
              tech: 'WebGL GLSL + Variable Fonts',
              detail: 'GPU-rendered domain-warped fluid field and per-frame typographic physics.',
            },
            {
              layer: '02 · Scroll Choreography',
              tech: 'Lenis + GSAP ScrollTrigger',
              detail: 'Smooth inertia synchronized with pinned horizontal tracks and mask reveals.',
            },
            {
              layer: '03 · Build & Delivery',
              tech: 'Next.js Static Export',
              detail: 'Zero-runtime-overhead static bundle, JSON-LD SEO schema, and edge delivery.',
            },
          ],
        },
      ],
    },
    journey: {
      indexLabel: '03 / Career Journey (2006 — 2026)',
      title: 'Continuous Evolution in Production',
      subtitle:
        'Scroll to navigate horizontally across the milestones of my career — from mission-critical enterprise infrastructure in Brazil to software development and AI in Portugal.',
      scrollHint: 'SCROLL TO NAVIGATE HORIZONTALLY →',
      stages: [
        {
          num: '01',
          period: 'Feb 2026 — Feb 2027',
          role: 'MBA & Specialization in Software Engineering with Applied AI',
          company: 'Full Cycle & Anhanguera Educacional',
          location: 'Porto, Portugal (Remote)',
          tag: 'ACADEMIC SPECIALIZATION · APPLIED AI',
          description:
            'Dual advanced specialization combining the MBA in Software Engineering with AI (Full Cycle) and Software Engineering in Applied AI (Anhanguera Educacional) — focused on intelligent systems architecture, LLM orchestration, RAG, autonomous agents, and AI-augmented engineering.',
          metrics: [
            'Full Cycle — MBA in Software Engineering with AI (Feb 2026 – Feb 2027)',
            'Anhanguera Educacional — Software Engineering in Applied AI (Feb 2026 – Feb 2027)',
          ],
          stack: ['Applied AI', 'LLMs & RAG', 'pgvector', 'AI Agents', 'Software Architecture'],
        },
        {
          num: '02',
          period: '2021 — 2025',
          role: 'Software Developer (Full-Stack & AI-Augmented)',
          company: 'CI&T',
          location: 'Lisbon, Portugal · 4 years 5 months',
          tag: 'INTERNATIONAL EXPERIENCE · EUROPE',
          description:
            'Worked within international agile squads building and evolving large-scale enterprise web applications. Front-End development with React, Next.js, and TypeScript, API/BFF integration with Node.js and NestJS, and early adoption of AI engineering tools (CI&T Flow, GitHub Copilot, Claude) to accelerate delivery and quality.',
          metrics: [
            '4.5 years working directly as a Software Developer on global projects',
            'Scalable component architecture, code reviews, CI/CD, and technical collaboration',
          ],
          stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'CI&T Flow / AI'],
        },
        {
          num: '03',
          period: '2019',
          role: 'Monitoring & Observability Consultant',
          company: 'Engineering Brasil',
          location: 'Belo Horizonte, Brazil',
          tag: 'OBSERVABILITY & AUTOMATION',
          description:
            'Designed and implemented proactive monitoring architectures, application telemetry, and executive availability dashboards, significantly reducing mean time to detect (MTTD) critical incidents.',
          metrics: [
            'Automated intelligent alerting and event correlation',
            'End-to-end visibility across distributed services',
          ],
          stack: ['Prometheus', 'Grafana', 'Zabbix', 'Linux', 'Automation'],
        },
        {
          num: '04',
          period: '2017 — 2019',
          role: 'Infrastructure & Monitoring Analyst',
          company: 'Mastermaq Software',
          location: 'Belo Horizonte, Brazil · 2 years',
          tag: 'HIGH AVAILABILITY · ENTERPRISE SAAS',
          description:
            'Sustained mission-critical infrastructure, performed root-cause analysis (RCA), tuned servers, and maintained continuous observability for enterprise systems serving thousands of accounting firms.',
          metrics: [
            'Increased operational stability and bottleneck prevention',
            'Bridged infrastructure operations and product development teams',
          ],
          stack: ['Critical Infrastructure', 'Monitoring', 'Networking', 'Windows/Linux Server'],
        },
        {
          num: '05',
          period: '2013 — 2016',
          role: 'Enterprise Capacity & Performance Analyst',
          company: 'IBM · Stefanini · 3CON',
          location: 'São Paulo & Belo Horizonte, Brazil',
          tag: 'MISSION CRITICAL · TELECOM & ENERGY',
          description:
            'Capacity management and performance engineering in mission-critical environments for major corporations including Telefónica/Vivo and CEMIG. Predictive resource modeling and optimization of high-volume workloads.',
          metrics: [
            'Delivered across Tier-1 enterprise accounts (IBM / Telefónica / CEMIG)',
            'Prevented downtime through rigorous capacity planning and telemetry',
          ],
          stack: ['Capacity Planning', 'Performance Tuning', 'ITIL', 'Enterprise Telemetry'],
        },
        {
          num: '06',
          period: '2006 — 2012',
          role: "Bachelor's in Computer Science & IT Foundation",
          company: 'Centro Universitário de Belo Horizonte (UniBH) · Algar · Montreal · Aethra',
          location: 'Belo Horizonte, Minas Gerais, Brazil',
          tag: 'BACHELOR OF COMPUTER SCIENCE',
          description:
            "Bachelor's Degree in Computer Science, Information Technology at Centro Universitário de Belo Horizonte (2006–2011) alongside hands-on enterprise experience starting in 2006 across network operations, servers, and corporate IT systems.",
          metrics: [
            "Bachelor's Degree in Computer Science — Centro Universitário de Belo Horizonte (2006–2011)",
            'Strong foundation in algorithms, software engineering, networks, and operating systems',
          ],
          stack: ['Computer Science', 'Information Technology', 'TCP/IP Networks', 'Linux / Windows'],
        },
      ],
    },
    arsenal: {
      indexLabel: '04 / Technical Arsenal & Credentials',
      title: 'End-to-End Engineering',
      subtitle:
        'A rare combination of modern software development (Front-End, Back-End, and AI) backed by over a decade of production infrastructure maturity.',
      pillars: [
        {
          num: '01',
          id: 'frontend',
          title: 'Front-End & Creative Engineering',
          subtitle: 'Fast, accessible, and visually unforgettable interfaces',
          description:
            'Building modern web applications with reusable component architectures, strict TypeScript typing, hybrid rendering (SSR/SSG), and high-precision motion.',
          deliverables: [
            'SPA and SSR applications with React 19 & Next.js App Router',
            'Scalable Design Systems with Tailwind CSS and strict TypeScript',
            'Immersive web experiences powered by GSAP ScrollTrigger, Lenis, and WebGL',
          ],
          technologies: [
            { name: 'React & Next.js', level: 'Production (4.5+ yrs)' },
            { name: 'TypeScript / JavaScript ES6+', level: 'Production (4.5+ yrs)' },
            { name: 'Tailwind CSS & Modern CSS', level: 'Advanced' },
            { name: 'GSAP / Lenis / WebGL Shaders', level: 'Creative Dev' },
          ],
        },
        {
          num: '02',
          id: 'ai',
          title: 'Applied AI, LLMs & RAG Architecture',
          subtitle: 'Deterministic intelligent systems integrated into real products',
          description:
            'Engineering generative AI capabilities that go far beyond simple prompt wrappers: vector indexing, context preservation, and autonomous tool-calling agents.',
          deliverables: [
            'RAG pipelines with PostgreSQL + pgvector and hybrid semantic search',
            'LLM orchestration (Claude, OpenAI) with Tool-Calling and MCP',
            'Context-preserving workflow engines for multi-agent systems (CPWE)',
          ],
          technologies: [
            { name: 'RAG & pgvector', level: 'Specialist (Postgrad/MBA)' },
            { name: 'Claude API & OpenAI SDK', level: 'Production' },
            { name: 'Autonomous Agents & MCP', level: 'Advanced' },
            { name: 'AI-Augmented Dev (Cursor/Claude/Flow)', level: 'Daily' },
          ],
        },
        {
          num: '03',
          id: 'backend',
          title: 'Back-End, APIs & Durable Workflows',
          subtitle: 'Resilient services, clean contracts, and async orchestration',
          description:
            'Designing and building RESTful APIs, BFF (Backend for Frontend) layers, and asynchronous workflow engines capable of running complex long-lived processes reliably.',
          deliverables: [
            'Modular, secure APIs with Node.js, NestJS, and Prisma ORM',
            'Distributed, fault-tolerant workflow orchestration with Temporal.io',
            'High-performance relational and vector data modeling in PostgreSQL',
          ],
          technologies: [
            { name: 'Node.js & NestJS', level: 'Production' },
            { name: 'Temporal.io Workflows', level: 'Architecture' },
            { name: 'PostgreSQL & Prisma ORM', level: 'Production' },
            { name: 'REST APIs, BFF & Microservices', level: 'Production' },
          ],
        },
        {
          num: '04',
          id: 'infra',
          title: 'Observability, DevOps & Critical Infra',
          subtitle: '10+ years ensuring architectures survive real-world production',
          description:
            'A competitive edge forged over more than a decade analyzing capacity, performance, and availability across Tier-1 enterprise environments.',
          deliverables: [
            'Full-stack observability with Prometheus, Grafana, and Zabbix',
            'Containerization with Docker, CI/CD pipelines, and Linux automation',
            'Performance tuning, bottleneck diagnosis, and Capacity Planning',
          ],
          technologies: [
            { name: 'Prometheus, Grafana & Zabbix', level: '10+ years' },
            { name: 'Docker & CI/CD (GitHub Actions)', level: 'Production' },
            { name: 'Capacity & Performance Management', level: 'Enterprise' },
            { name: 'Linux, TCP/IP Networks & Cloud', level: 'Senior Infra' },
          ],
        },
      ],
      credentialsTitle: 'Academic Education',
      credentialsSubtitle:
        'Continuous formal academic education in Computer Science, Software Engineering, and Applied Artificial Intelligence.',
      cvCardTitle: 'Executive Resume (PDF)',
      cvCardDesc:
        '1-page executive resume tailored for recruiters and engineering leaders, detailing my 4.5 years at CI&T Lisbon, AI projects, and academic background.',
      cvDownloadBtn: 'Download PDF Resume (EN)',
      credentials: [
        {
          period: 'Feb 2026 – Feb 2027',
          title: 'MBA in Software Engineering with AI, Artificial Intelligence',
          institution: 'Full Cycle',
          badge: 'IN PROGRESS · AI',
          detail:
            'Skills: AI · Large-scale software architecture powered by Artificial Intelligence, LLMs, RAG, and distributed systems.',
        },
        {
          period: 'Feb 2026 – Feb 2027',
          title: 'Software Engineering in Applied AI, Artificial Intelligence',
          institution: 'Anhanguera Educacional',
          badge: 'IN PROGRESS · AI',
          detail:
            'Skills: AI · Software Engineering in Applied AI, autonomous agents, generative model integration, and intelligent automation.',
        },
        {
          period: '2006 – 2011',
          title: "Bachelor's Degree in Computer Science, Information Technology",
          institution: 'Centro Universitário de Belo Horizonte',
          badge: 'COMPLETED',
          detail:
            'Bachelor of Science in Computer Science and Information Technology — algorithms, data structures, software engineering, networking, and distributed systems.',
        },
      ],
    },
    footer: {
      kicker: '05 / Direct Contact — Vila Nova de Gaia, Porto, Portugal',
      titleLine1: "Let's build the",
      titleLine2: 'next level?',
      copyEmailHint: 'Click to copy email address',
      emailCopied: 'Email copied to clipboard!',
      whatsappCta: 'Message on WhatsApp (+351 911 782 332)',
      backToTop: 'Back to top ↑',
      rights: '© 2026 Jhonatan Ecard. Crafted with Next.js 15, WebGL GLSL, GSAP & Lenis.',
    },
  },
};

export interface ShaderTheme {
  id: string;
  name: string;
  hex: string;
  rgb: [number, number, number];
  secondaryRgb: [number, number, number];
}

export const shaderThemes: ShaderTheme[] = [
  {
    id: 'volt',
    name: 'NEURAL VOLT',
    hex: '#D4FF3A',
    rgb: [0.831, 1.0, 0.227],
    secondaryRgb: [0.16, 0.42, 0.28],
  },
  {
    id: 'mint',
    name: 'AETHER MINT',
    hex: '#38F2AF',
    rgb: [0.22, 0.949, 0.686],
    secondaryRgb: [0.09, 0.32, 0.38],
  },
  {
    id: 'amber',
    name: 'SOLAR FLARE',
    hex: '#FFB830',
    rgb: [1.0, 0.722, 0.188],
    secondaryRgb: [0.45, 0.18, 0.08],
  },
];
