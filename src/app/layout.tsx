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
    'Portfólio oficial de Jhonatan Ecard — Desenvolvedor de Software Full-Stack & IA Aplicada em Porto, Portugal. +4.5 anos na CI&T Lisboa, +10 anos em infraestrutura crítica enterprise (IBM, Engineering) e Pós/MBA em Engenharia de Software com IA.',
  keywords: [
    'Jhonatan Ecard',
    'Software Developer Portugal',
    'Full-Stack Developer Porto',
    'Applied AI Developer',
    'React Next.js TypeScript',
    'NestJS Temporal.io pgvector RAG',
    'CI&T Lisbon Alumni',
    'Desenvolvedor de Software IA',
  ],
  authors: [{ name: 'Jhonatan Ecard', url: 'https://jhonatanecard.com' }],
  openGraph: {
    title: 'Jhonatan Ecard — Software Developer · Full-Stack & Applied AI',
    description:
      'Engenharia de Software Full-Stack, Arquitetura RAG/LLMs & Criatividade Visual em WebGL. Baseado no Porto, Portugal.',
    url: 'https://jhonatanecard.com',
    siteName: 'Jhonatan Ecard Portfolio',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/assets/foto.jpg',
        width: 800,
        height: 800,
        alt: 'Jhonatan Ecard — Software Developer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jhonatan Ecard',
    jobTitle: 'Software Developer (Full-Stack & Applied AI)',
    url: 'https://jhonatanecard.com',
    image: 'https://jhonatanecard.com/assets/foto.jpg',
    email: 'mailto:jhonatanecard@gmail.com',
    telephone: '+351911782332',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vila Nova de Gaia, Porto',
      addressCountry: 'PT',
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'CI&T',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Faculdade Líbano',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Faculdade Pitágoras',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/in/jhonatan-ecard/',
      'https://github.com/jhonatanecardoficial',
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
