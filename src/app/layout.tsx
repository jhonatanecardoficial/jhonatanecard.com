import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jhonatanecard.com'),
  title: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
  description:
    'Portfólio oficial de Jhonatan Ecard — Desenvolvedor de Software Full-Stack & IA Aplicada em Porto, Portugal. +4.5 anos na CI&T Lisboa, +10 anos em infraestrutura crítica enterprise (IBM, Engineering), Bacharel em Ciência da Computação (UniBH) e Pós/MBA em Engenharia de Software com IA (Full Cycle & Anhanguera).',
  keywords: [
    'Jhonatan Ecard',
    'Software Developer Portugal',
    'Full-Stack Developer Porto',
    'Applied AI Developer',
    'Software Engineering with AI',
    'Full Cycle MBA AI',
    'Anhanguera Educacional IA',
    'Centro Universitário de Belo Horizonte Computer Science',
    'React Next.js TypeScript',
    'NestJS Temporal.io pgvector RAG',
    'Desenvolvedor de Software IA',
  ],
  authors: [{ name: 'Jhonatan Ecard', url: 'https://jhonatanecard.com' }],
  creator: 'Jhonatan Ecard',
  publisher: 'Jhonatan Ecard',
  alternates: {
    canonical: 'https://jhonatanecard.com',
  },
  openGraph: {
    title: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
    description:
      'Engenharia de Software Full-Stack, Arquitetura RAG/LLMs & Criatividade Visual em WebGL. Baseado no Porto, Portugal.',
    url: 'https://jhonatanecard.com',
    siteName: 'Jhonatan Ecard Portfolio',
    locale: 'pt_PT',
    alternateLocale: ['en_US', 'pt_BR'],
    type: 'profile',
    images: [
      {
        url: '/assets/foto.jpg',
        width: 800,
        height: 800,
        alt: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
    description:
      'Software Developer Full-Stack & IA Aplicada em Porto, Portugal (React, Next.js, TypeScript, NestJS, RAG, Temporal.io).',
    images: ['/assets/foto.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://jhonatanecard.com/#profilepage',
        url: 'https://jhonatanecard.com',
        name: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
        inLanguage: ['pt-PT', 'en-US'],
        mainEntity: { '@id': 'https://jhonatanecard.com/#person' },
      },
      {
        '@type': 'Person',
        '@id': 'https://jhonatanecard.com/#person',
        name: 'Jhonatan Ecard',
        jobTitle: 'Software Developer (Full-Stack & Applied AI)',
        description:
          'Software Developer with 4.5+ years building Full-Stack web applications at CI&T Lisbon and 15+ years in mission-critical enterprise IT (IBM, Engineering, Mastermaq).',
        url: 'https://jhonatanecard.com',
        image: 'https://jhonatanecard.com/assets/foto.jpg',
        email: 'mailto:jhonatanecard@gmail.com',
        telephone: '+351911782332',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vila Nova de Gaia, Porto',
          addressCountry: 'PT',
        },
        knowsAbout: [
          'Full-Stack Software Development',
          'Artificial Intelligence (AI)',
          'Retrieval-Augmented Generation (RAG)',
          'Large Language Models (LLMs)',
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'NestJS',
          'Temporal.io',
          'PostgreSQL & pgvector',
          'Enterprise Observability & Infrastructure',
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Full Cycle',
            description:
              'MBA in Software Engineering with AI, Artificial Intelligence (Feb 2026 – Feb 2027)',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Anhanguera Educacional',
            description:
              'Software Engineering in Applied AI, Artificial Intelligence (Feb 2026 – Feb 2027)',
          },
          {
            '@type': 'CollegeOrUniversity',
            name: 'Centro Universitário de Belo Horizonte (UniBH)',
            description:
              "Bachelor's Degree in Computer Science, Information Technology (2006 – 2011)",
          },
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Independent Software & AI Engineering',
        },
        sameAs: [
          'https://www.linkedin.com/in/jhonatan-ecard/',
          'https://github.com/jhonatanecardoficial',
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://jhonatanecard.com/#projects',
        name: 'Selected Software & AI Engineering Works by Jhonatan Ecard',
        itemListElement: [
          {
            '@type': 'SoftwareSourceCode',
            position: 1,
            name: 'Advocatus IA',
            description:
              'Proprietary Full-Stack LegalTech SaaS with RAG Semantic Search (pgvector) and Temporal.io Durable Workflows.',
            codeRepository: 'https://github.com/jhonatanecardoficial/Advocatus-IA',
            programmingLanguage: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL'],
          },
          {
            '@type': 'SoftwareSourceCode',
            position: 2,
            name: 'CPWE Engine',
            description:
              'Context-Preserving Workflow Engine for Multi-Agent Orchestration.',
            codeRepository: 'https://github.com/jhonatanecardoficial/cpwe-engine',
            programmingLanguage: ['TypeScript', 'Node.js'],
          },
          {
            '@type': 'SoftwareSourceCode',
            position: 3,
            name: 'PaperClip · Hermes · OpenClaw',
            description:
              'Autonomous Agent Integration & Tool-Calling Ecosystem.',
            codeRepository:
              'https://github.com/jhonatanecardoficial/PaperClipAi-HermesAgent-OpenClaw',
            programmingLanguage: ['Python', 'TypeScript'],
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="pt-PT"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
