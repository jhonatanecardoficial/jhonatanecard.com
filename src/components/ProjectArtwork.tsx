'use client';

import React from 'react';

interface ProjectArtworkProps {
  projectId: string;
  accentColor: string;
  mode?: 'preview' | 'modal';
}

export default function ProjectArtwork({
  projectId,
  accentColor,
  mode = 'preview',
}: ProjectArtworkProps) {
  const isModal = mode === 'modal';

  if (projectId === 'advocatus-ia') {
    return (
      <div className={`project-artwork ${isModal ? 'is-modal' : ''}`}>
        <svg
          viewBox="0 0 640 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="artwork-svg"
        >
          <rect width="640" height="400" fill="#08090D" />
          {/* Background grid */}
          <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
            <line x1="0" y1="80" x2="640" y2="80" />
            <line x1="0" y1="160" x2="640" y2="160" />
            <line x1="0" y1="240" x2="640" y2="240" />
            <line x1="0" y1="320" x2="640" y2="320" />
            <line x1="128" y1="0" x2="128" y2="400" />
            <line x1="256" y1="0" x2="256" y2="400" />
            <line x1="384" y1="0" x2="384" y2="400" />
            <line x1="512" y1="0" x2="512" y2="400" />
          </g>
          {/* Glow */}
          <circle cx="320" cy="200" r="150" fill={accentColor} fillOpacity="0.08" />
          {/* Top HUD bar */}
          <rect
            x="32"
            y="28"
            width="576"
            height="34"
            rx="4"
            fill="#0E1017"
            stroke="rgba(255,255,255,0.12)"
          />
          <circle cx="52" cy="45" r="4" fill={accentColor} />
          <text
            x="68"
            y="49"
            fill="#F5F2EB"
            fontFamily="monospace"
            fontSize="11"
            letterSpacing="2"
          >
            ADVOCATUS.IA // TEMPORAL WORKFLOW + PGVECTOR RAG
          </text>
          <text
            x="495"
            y="49"
            fill={accentColor}
            fontFamily="monospace"
            fontSize="10"
            letterSpacing="1.5"
          >
            PROPRIETARY
          </text>

          {/* Left Node: Next.js Legal Workspace */}
          <rect
            x="40"
            y="108"
            width="150"
            height="92"
            rx="6"
            fill="#11131C"
            stroke="rgba(255,255,255,0.16)"
          />
          <text x="56" y="134" fill={accentColor} fontFamily="monospace" fontSize="10">
            01 / CLIENT LAYER
          </text>
          <text x="56" y="156" fill="#F5F2EB" fontFamily="sans-serif" fontSize="14" fontWeight="600">
            Next.js App Router
          </text>
          <text x="56" y="176" fill="#8E8B82" fontFamily="monospace" fontSize="10">
            AI Legal Editor · SSE
          </text>

          {/* Center Node: NestJS + Temporal.io */}
          <rect
            x="240"
            y="92"
            width="165"
            height="124"
            rx="6"
            fill="#121620"
            stroke={accentColor}
            strokeWidth="1.5"
          />
          <text x="258" y="120" fill={accentColor} fontFamily="monospace" fontSize="10">
            02 / DURABLE CORE
          </text>
          <text x="258" y="144" fill="#F5F2EB" fontFamily="sans-serif" fontSize="15" fontWeight="700">
            NestJS + Temporal
          </text>
          <text x="258" y="166" fill="#8E8B82" fontFamily="monospace" fontSize="10">
            State-Preserving Queue
          </text>
          <rect
            x="258"
            y="180"
            width="128"
            height="20"
            rx="3"
            fill="rgba(212,255,58,0.12)"
          />
          <text x="268" y="194" fill={accentColor} fontFamily="monospace" fontSize="9.5">
            RETRY POLICY: ACTIVE
          </text>

          {/* Right Top Node: pgvector */}
          <rect
            x="456"
            y="88"
            width="148"
            height="86"
            rx="6"
            fill="#11131C"
            stroke="rgba(255,255,255,0.18)"
          />
          <text x="472" y="114" fill={accentColor} fontFamily="monospace" fontSize="10">
            03 / VECTOR MEMORY
          </text>
          <text x="472" y="136" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            Postgres + pgvector
          </text>
          <text x="472" y="156" fill="#8E8B82" fontFamily="monospace" fontSize="10">
            1536-dim Embeddings
          </text>

          {/* Right Bottom Node: Claude / OpenAI */}
          <rect
            x="456"
            y="196"
            width="148"
            height="86"
            rx="6"
            fill="#11131C"
            stroke="rgba(255,255,255,0.18)"
          />
          <text x="472" y="222" fill={accentColor} fontFamily="monospace" fontSize="10">
            04 / HYBRID LLM
          </text>
          <text x="472" y="244" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            Claude 3.5 & GPT-4o
          </text>
          <text x="472" y="264" fill="#8E8B82" fontFamily="monospace" fontSize="10">
            Citation Guardrails
          </text>

          {/* Connecting lines */}
          <path
            d="M190 154 L240 154"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M405 135 L456 130"
            stroke={accentColor}
            strokeWidth="1.5"
          />
          <path
            d="M405 178 L456 236"
            stroke={accentColor}
            strokeWidth="1.5"
          />

          {/* Bottom Telemetry Bar */}
          <rect
            x="40"
            y="306"
            width="564"
            height="58"
            rx="6"
            fill="#0C0E14"
            stroke="rgba(255,255,255,0.1)"
          />
          <text x="60" y="330" fill="#8E8B82" fontFamily="monospace" fontSize="10">
            OBSERVABILITY: PROMETHEUS + GRAFANA
          </text>
          <text x="60" y="348" fill="#F5F2EB" fontFamily="monospace" fontSize="11">
            LATENCY P95: 420ms · VECTOR RECALL: 98.4% · WORKFLOW SLA: 99.95%
          </text>
          <circle cx="576" cy="335" r="6" fill={accentColor} />
        </svg>
      </div>
    );
  }

  if (projectId === 'cpwe-engine') {
    return (
      <div className={`project-artwork ${isModal ? 'is-modal' : ''}`}>
        <svg
          viewBox="0 0 640 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="artwork-svg"
        >
          <rect width="640" height="400" fill="#070A0D" />
          <circle cx="320" cy="200" r="160" fill={accentColor} fillOpacity="0.07" />
          <rect
            x="32"
            y="28"
            width="576"
            height="34"
            rx="4"
            fill="#0D1217"
            stroke="rgba(255,255,255,0.12)"
          />
          <circle cx="52" cy="45" r="4" fill={accentColor} />
          <text
            x="68"
            y="49"
            fill="#F5F2EB"
            fontFamily="monospace"
            fontSize="11"
            letterSpacing="2"
          >
            CPWE ENGINE // CONTEXT-PRESERVING DAG STATE MACHINE
          </text>

          {/* DAG Graph visualization */}
          <g stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.65">
            <path d="M135 200 C190 120, 220 120, 270 130" />
            <path d="M135 200 C190 280, 220 280, 270 270" />
            <path d="M365 130 C415 130, 435 190, 485 200" />
            <path d="M365 270 C415 270, 435 210, 485 200" />
          </g>

          {/* Node 1 */}
          <rect
            x="45"
            y="165"
            width="95"
            height="70"
            rx="6"
            fill="#10171D"
            stroke={accentColor}
          />
          <text x="58" y="194" fill={accentColor} fontFamily="monospace" fontSize="10">
            INGEST
          </text>
          <text x="58" y="214" fill="#F5F2EB" fontFamily="monospace" fontSize="11">
            Schema I/O
          </text>

          {/* Node 2A */}
          <rect
            x="265"
            y="95"
            width="110"
            height="70"
            rx="6"
            fill="#10171D"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x="280" y="124" fill={accentColor} fontFamily="monospace" fontSize="10">
            AGENT NODE A
          </text>
          <text x="280" y="144" fill="#F5F2EB" fontFamily="monospace" fontSize="11">
            Planner AST
          </text>

          {/* Node 2B */}
          <rect
            x="265"
            y="235"
            width="110"
            height="70"
            rx="6"
            fill="#10171D"
            stroke="rgba(255,255,255,0.2)"
          />
          <text x="280" y="264" fill={accentColor} fontFamily="monospace" fontSize="10">
            AGENT NODE B
          </text>
          <text x="280" y="284" fill="#F5F2EB" fontFamily="monospace" fontSize="11">
            Context Vault
          </text>

          {/* Node 3 */}
          <rect
            x="485"
            y="160"
            width="115"
            height="80"
            rx="6"
            fill="#10171D"
            stroke={accentColor}
            strokeWidth="1.5"
          />
          <text x="500" y="190" fill={accentColor} fontFamily="monospace" fontSize="10">
            INVARIANT OUT
          </text>
          <text x="500" y="212" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            Zero-Loss State
          </text>

          {/* Bottom Bar */}
          <rect
            x="45"
            y="330"
            width="555"
            height="42"
            rx="4"
            fill="#0B1014"
            stroke="rgba(255,255,255,0.08)"
          />
          <text x="64" y="355" fill="#8E8B82" fontFamily="monospace" fontSize="10.5">
            TYPESCRIPT STRICT · DETERMINISTIC CHECKPOINTS · TOKEN COMPACTION ENGINE
          </text>
        </svg>
      </div>
    );
  }

  if (projectId === 'paperclip-hermes-openclaw') {
    return (
      <div className={`project-artwork ${isModal ? 'is-modal' : ''}`}>
        <svg
          viewBox="0 0 640 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="artwork-svg"
        >
          <rect width="640" height="400" fill="#0B0907" />
          <circle cx="320" cy="205" r="145" fill={accentColor} fillOpacity="0.08" />
          <rect
            x="32"
            y="28"
            width="576"
            height="34"
            rx="4"
            fill="#14110D"
            stroke="rgba(255,255,255,0.12)"
          />
          <circle cx="52" cy="45" r="4" fill={accentColor} />
          <text
            x="68"
            y="49"
            fill="#F5F2EB"
            fontFamily="monospace"
            fontSize="11"
            letterSpacing="2"
          >
            AUTONOMOUS AGENTS // PAPERCLIP · HERMES · OPENCLAW
          </text>

          {/* Concentric Orbital Rings */}
          <circle
            cx="320"
            cy="210"
            r="110"
            stroke="rgba(255,255,255,0.12)"
            strokeDasharray="6 6"
          />
          <circle cx="320" cy="210" r="64" stroke={accentColor} strokeOpacity="0.5" />
          <circle cx="320" cy="210" r="28" fill="#17130E" stroke={accentColor} strokeWidth="1.5" />
          <text x="303" y="214" fill={accentColor} fontFamily="monospace" fontSize="11" fontWeight="700">
            MCP
          </text>

          {/* Satellite 1 */}
          <rect
            x="72"
            y="102"
            width="136"
            height="62"
            rx="6"
            fill="#15120E"
            stroke="rgba(255,255,255,0.18)"
          />
          <text x="88" y="128" fill={accentColor} fontFamily="monospace" fontSize="10">
            AGENT 01
          </text>
          <text x="88" y="148" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            Hermes Planner
          </text>

          {/* Satellite 2 */}
          <rect
            x="432"
            y="102"
            width="136"
            height="62"
            rx="6"
            fill="#15120E"
            stroke="rgba(255,255,255,0.18)"
          />
          <text x="448" y="128" fill={accentColor} fontFamily="monospace" fontSize="10">
            AGENT 02
          </text>
          <text x="448" y="148" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            OpenClaw Tools
          </text>

          {/* Satellite 3 */}
          <rect
            x="248"
            y="308"
            width="144"
            height="60"
            rx="6"
            fill="#15120E"
            stroke={accentColor}
          />
          <text x="266" y="332" fill={accentColor} fontFamily="monospace" fontSize="10">
            ORCHESTRATOR
          </text>
          <text x="266" y="352" fill="#F5F2EB" fontFamily="sans-serif" fontSize="13" fontWeight="600">
            PaperClipAI Runtime
          </text>
        </svg>
      </div>
    );
  }

  // Default: JhonatanEcard.com (v3 Creative Engineering)
  return (
    <div className={`project-artwork ${isModal ? 'is-modal' : ''}`}>
      <svg
        viewBox="0 0 640 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="artwork-svg"
      >
        <rect width="640" height="400" fill="#09080C" />
        <circle cx="320" cy="200" r="160" fill={accentColor} fillOpacity="0.09" />
        <rect
          x="32"
          y="28"
          width="576"
          height="34"
          rx="4"
          fill="#121017"
          stroke="rgba(255,255,255,0.12)"
        />
        <circle cx="52" cy="45" r="4" fill={accentColor} />
        <text
          x="68"
          y="49"
          fill="#F5F2EB"
          fontFamily="monospace"
          fontSize="11"
          letterSpacing="2"
        >
          JHONATANECARD.COM // WEBGL GLSL + GSAP + LENIS
        </text>

        {/* Waveforms representing GLSL FBM */}
        <path
          d="M40 230 Q 160 120, 320 210 T 600 170"
          stroke={accentColor}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40 260 Q 180 150, 320 240 T 600 200"
          stroke={accentColor}
          strokeWidth="1.2"
          strokeOpacity="0.5"
          fill="none"
        />
        <path
          d="M40 290 Q 200 180, 320 270 T 600 230"
          stroke="#F5F2EB"
          strokeWidth="0.8"
          strokeOpacity="0.25"
          fill="none"
        />

        <text
          x="56"
          y="148"
          fill="#F5F2EB"
          fontFamily="serif"
          fontSize="46"
          fontStyle="italic"
        >
          JE© v3.0
        </text>
        <text
          x="58"
          y="346"
          fill="#8E8B82"
          fontFamily="monospace"
          fontSize="11"
          letterSpacing="2"
        >
          60FPS FRAGMENT SHADER · VARIABLE FONT PHYSICS · NEXT.JS 15
        </text>
      </svg>
    </div>
  );
}
