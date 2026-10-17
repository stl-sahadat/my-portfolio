import React, { useState, useEffect } from 'react';
import LaserBadge from './LaserBadge';

// ============================================================================
// 5 UNIFIED MASTER CATEGORIES WITH ILLUMINATED CYBER CAPSULE HUBS
// EXACT 30 POWER CHANNELS (6 KEYWORDS PER CATEGORY) -> 5 CAPSULE HUBS -> 5 MASTER TRUNK CABLES -> BATTERY
// ============================================================================
const SVG_CATEGORIES = [
  {
    id: 'prompt-llm',
    title: 'PROMPT & LLM ARCHITECTURE',
    color: '#c084fc', // Vibrant Cyber Purple
    capsule: { x: 220, y: 268, w: 220, h: 34, rx: 17 },
    trunkStart: { x: 440, y: 285 },
    port: { x: 462, y: 360 },
    trunkControl1: { x: 458, y: 285 },
    trunkControl2: { x: 448, y: 360 },
    trunkPath: 'M 440,285 C 458,285 448,360 462,360',
    plugRect: { x: 462, y: 348, w: 38, h: 24 },
    anchorAlign: 'end',
    keywords: [
      { text: 'DeepSeek R1 Reasoner', x: 175, y: 180 },
      { text: 'Claude 3.5 Sonnet / Opus', x: 175, y: 222 },
      { text: 'OpenAI GPT-4o Frontier', x: 175, y: 264 },
      { text: 'Structured Pydantic JSON', x: 175, y: 306 },
      { text: 'Tree-of-Thoughts (ToT)', x: 175, y: 348 },
      { text: 'Local vLLM & Ollama', x: 175, y: 390 },
    ],
  },
  {
    id: 'backend',
    title: 'HIGH-SPEED BACKEND & APIS',
    color: '#f43f5e', // Cyber Rose / Crimson
    capsule: { x: 220, y: 598, w: 220, h: 34, rx: 17 },
    trunkStart: { x: 440, y: 615 },
    port: { x: 462, y: 540 },
    trunkControl1: { x: 458, y: 615 },
    trunkControl2: { x: 448, y: 540 },
    trunkPath: 'M 440,615 C 458,615 448,540 462,540',
    plugRect: { x: 462, y: 528, w: 38, h: 24 },
    anchorAlign: 'end',
    keywords: [
      { text: 'FastAPI Async Python', x: 175, y: 510 },
      { text: 'Server-Sent Events (SSE)', x: 175, y: 552 },
      { text: 'WebSockets Streaming', x: 175, y: 594 },
      { text: 'pgvector & Qdrant Search', x: 175, y: 636 },
      { text: 'Redis Distributed Cache', x: 175, y: 678 },
      { text: 'Sub-50ms Microservices', x: 175, y: 720 },
    ],
  },
  {
    id: 'cloud',
    title: 'CLOUD & PRODUCTION INFRA',
    color: '#38bdf8', // Cyber Sky Blue
    capsule: { x: 760, y: 268, w: 220, h: 34, rx: 17 },
    trunkStart: { x: 760, y: 285 },
    port: { x: 738, y: 360 },
    trunkControl1: { x: 742, y: 285 },
    trunkControl2: { x: 752, y: 360 },
    trunkPath: 'M 760,285 C 742,285 752,360 738,360',
    plugRect: { x: 700, y: 348, w: 38, h: 24 },
    anchorAlign: 'start',
    keywords: [
      { text: 'Docker Containerization', x: 1025, y: 180 },
      { text: 'GCP Cloud Run Serverless', x: 1025, y: 222 },
      { text: 'LLMOps & LangSmith', x: 1025, y: 264 },
      { text: 'Terraform IaC Blueprints', x: 1025, y: 306 },
      { text: 'Cloudflare Edge & CDN', x: 1025, y: 348 },
      { text: 'Zero-Trust IAM & Security', x: 1025, y: 390 },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND & SPATIAL WEB',
    color: '#ec4899', // Electric Magenta
    capsule: { x: 760, y: 598, w: 220, h: 34, rx: 17 },
    trunkStart: { x: 760, y: 615 },
    port: { x: 738, y: 540 },
    trunkControl1: { x: 742, y: 615 },
    trunkControl2: { x: 752, y: 540 },
    trunkPath: 'M 760,615 C 742,615 752,540 738,540',
    plugRect: { x: 700, y: 528, w: 38, h: 24 },
    anchorAlign: 'start',
    keywords: [
      { text: 'React 18 & Next.js 14', x: 1025, y: 510 },
      { text: 'Three.js 3D & WebGL Shaders', x: 1025, y: 552 },
      { text: 'Tailwind Glassmorphism UI', x: 1025, y: 594 },
      { text: 'Vercel AI SDK UI', x: 1025, y: 636 },
      { text: 'Framer Motion 60fps Loops', x: 1025, y: 678 },
      { text: 'Canvas 2D Data Rendering', x: 1025, y: 720 },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI & AUTONOMOUS SYSTEMS',
    color: '#00f0ff', // Pure Cyber Neon Cyan
    capsule: { x: 450, y: 702, w: 300, h: 38, rx: 19 },
    trunkStart: { x: 600, y: 702 },
    port: { x: 600, y: 627 },
    trunkControl1: { x: 600, y: 677 },
    trunkControl2: { x: 600, y: 647 },
    trunkPath: 'M 600,702 L 600,627',
    plugRect: { x: 588, y: 595, w: 24, h: 32 },
    anchorAlign: 'middle',
    keywords: [
      { text: 'CrewAI Multi-Agent', x: 180, y: 835 },
      { text: 'LangGraph StateGraph', x: 350, y: 835 },
      { text: 'Autonomous Swarms', x: 510, y: 835 },
      { text: 'Model Context Protocol', x: 690, y: 835 },
      { text: 'Agent Memory (Letta)', x: 850, y: 835 },
      { text: 'Deterministic Guardrails', x: 1020, y: 835 },
    ],
  },
];

// Floating sparkling embers & micro-bubbles matching realistic magma battery reference
const SPARK_PARTICLES = [
  { xRatio: 0.16, speed: 6.8, offset: 12, r: 2.2, color: '#fef08a' },
  { xRatio: 0.28, speed: 8.4, offset: 55, r: 1.8, color: '#fde047' },
  { xRatio: 0.45, speed: 5.6, offset: 90, r: 2.8, color: '#ffffff' },
  { xRatio: 0.62, speed: 7.2, offset: 35, r: 2.0, color: '#fef08a' },
  { xRatio: 0.82, speed: 6.2, offset: 75, r: 2.4, color: '#fb923c' },
  { xRatio: 0.22, speed: 9.1, offset: 115, r: 1.5, color: '#fde047' },
  { xRatio: 0.38, speed: 7.4, offset: 18, r: 2.0, color: '#ffffff' },
  { xRatio: 0.54, speed: 8.8, offset: 68, r: 2.6, color: '#fef08a' },
  { xRatio: 0.72, speed: 6.5, offset: 98, r: 1.9, color: '#f97316' },
  { xRatio: 0.34, speed: 5.8, offset: 135, r: 2.3, color: '#ffffff' },
  { xRatio: 0.66, speed: 8.0, offset: 28, r: 1.7, color: '#fde047' },
  { xRatio: 0.86, speed: 8.2, offset: 85, r: 2.2, color: '#fef08a' },
  { xRatio: 0.12, speed: 6.7, offset: 60, r: 2.0, color: '#fb923c' },
  { xRatio: 0.48, speed: 9.5, offset: 145, r: 1.6, color: '#ffffff' },
  { xRatio: 0.76, speed: 7.1, offset: 8, r: 2.5, color: '#fde047' },
  { xRatio: 0.25, speed: 6.3, offset: 105, r: 2.1, color: '#fef08a' },
];

export default function SkillsSection() {
  const [percent, setPercent] = useState(0); // 0 to 100
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Zero-CPU optimization: Only activate SVG state loop when section is on-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.02 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 0% to 100% charging cycle loop (Paused when offscreen)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Hold 100% full green state for 4.5 seconds then loop
  useEffect(() => {
    if (!isVisible) return;

    if (percent >= 100) {
      const resetTimer = setTimeout(() => {
        setPercent(0);
      }, 4500);
      return () => clearTimeout(resetTimer);
    }
  }, [percent, isVisible]);

  const isFull = percent >= 100;
  const isCharging = percent > 0 && percent < 100;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-black dark:bg-black light:bg-[#f8fafc] transition-colors duration-300 relative overflow-hidden select-none flex flex-col items-center pt-20 sm:pt-28 pb-16 scroll-mt-24 min-h-[850px]"
    >
      {/* Studio Lighting Ambient Glow (Focused warm magma halo behind 3D Glass Battery) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isFull
            ? 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.22) 0%, transparent 62%)'
            : 'radial-gradient(circle at 50% 52%, rgba(234, 88, 12, 0.16) 0%, rgba(220, 38, 38, 0.08) 35%, transparent 68%)',
          transition: 'background 0.8s ease',
        }}
      />

      {/* ==================================================================== */}
      {/* 1. TOP HEADER: "Skills & Architecture"                               */}
      {/* ==================================================================== */}
      <div className="relative z-20 mb-3 sm:mb-6 text-center px-4 flex flex-col items-center">
        <div className="mb-3">
          <LaserBadge text="SYSTEM CAPABILITIES & ARCHITECTURE" />
        </div>
        <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white leading-tight">
          SKILLS &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
            ARCHITECTURE
          </span>
        </h2>
      </div>

      {/* ==================================================================== */}
      {/* 2. SINGLE UNIFIED SVG STAGE (PULLED UP CLOSER TO HEADING)            */}
      {/* ==================================================================== */}
      <div className="relative w-full max-w-[1280px] h-[580px] sm:h-[720px] lg:h-[820px] flex items-center justify-center px-2 sm:px-6 -mt-8 sm:-mt-12">
        <svg
          className="w-full h-full select-none"
          viewBox="0 100 1200 805"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* White Wire Glow */}
            <filter id="svgWireGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Emerald Green 100% Glow */}
            <filter id="svgGreenGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Traveling Photon Pulse */}
            <filter id="photonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing Molten Amber/Fire Text Filter (Matches Reference 7% Luminance) */}
            <filter id="amberFireTextGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="outerGlow" />
              <feGaussianBlur stdDeviation="3" result="innerGlow" />
              <feMerge>
                <feMergeNode in="outerGlow" />
                <feMergeNode in="innerGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Molten Floor Radiant Bloom Filter */}
            <filter id="moltenFloorBloom" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Sparkling Embers Glow Filter */}
            <filter id="sparkleGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 3D Glass Cylinder Inner Clip Path */}
            <clipPath id="glassCylinderClip">
              <rect x="500" y="308" width="200" height="290" rx="28" ry="28" />
            </clipPath>

            {/* Stepped Chrome Metallic Cap Gradient */}
            <linearGradient id="chromeMetallicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e222a" />
              <stop offset="12%" stopColor="#475569" />
              <stop offset="28%" stopColor="#cbd5e1" />
              <stop offset="38%" stopColor="#ffffff" />
              <stop offset="52%" stopColor="#94a3b8" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="88%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Dark Transparent Glass Body (Deep obsidian glass with warm inner crimson refraction) */}
            <linearGradient id="darkGlassChamberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a0507" stopOpacity="0.95" />
              <stop offset="16%" stopColor="#190a0e" stopOpacity="0.84" />
              <stop offset="50%" stopColor="#250d12" stopOpacity="0.65" />
              <stop offset="84%" stopColor="#190a0e" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#0a0507" stopOpacity="0.95" />
            </linearGradient>

            {/* Left Glass Specular Reflection Highlight Streak */}
            <linearGradient id="leftGlassSpecularGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Right Glass Specular Reflection Highlight Streak */}
            <linearGradient id="rightGlassSpecularGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Fiery Magma Translucent Energy Liquid (Photo-Realistic Glowing Molten Red-Amber) */}
            <linearGradient id="fieryMagmaLiquidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.98" />
              <stop offset="22%" stopColor="#ea580c" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#e11d48" stopOpacity="0.92" />
              <stop offset="82%" stopColor="#dc2626" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.86" />
            </linearGradient>

            {/* Liquid Meniscus Top Ellipse Gradient */}
            <linearGradient id="meniscusSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="75%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>

            {/* Full 100% Charged Emerald Hyper-Liquid */}
            <linearGradient id="liquidGradGreen" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.98" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0.88" />
            </linearGradient>

            {/* Molten Fiery Base Ring Gradient */}
            <linearGradient id="moltenBaseRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#fef08a" stopOpacity="1" />
              <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
            </linearGradient>

            {/* Glass Cylinder Outer Rim Stroke */}
            <linearGradient id="cylinderOuterRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#475569" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* ================================================================ */}
          {/* RENDER CATEGORIES: KEYWORDS -> CAPSULE HUBS -> MASTER TRUNK CABLES*/}
          {/* ================================================================ */}
          {SVG_CATEGORIES.map((cat) => {
            const isBottom = cat.id === 'ai-agents';
            const isLeftSide = cat.anchorAlign === 'end';
            const isRightSide = cat.anchorAlign === 'start';
            const wireStroke = '#ffffff';
            const wireOpacity = isFull ? 0.65 : 0.4;
            const themeColor = cat.color; // Domain colors are preserved!

            // Trunk photon position calculation along Bezier or Line
            const trunkT = ((percent * 5 + 40) % 100) / 100;
            let trunkPhotonX = cat.trunkStart.x;
            let trunkPhotonY = cat.trunkStart.y;

            if (isBottom) {
              trunkPhotonX = 600;
              trunkPhotonY = cat.trunkStart.y - (cat.trunkStart.y - cat.port.y) * trunkT;
            } else {
              // Cubic Bezier interpolation
              const p0 = cat.trunkStart;
              const p1 = cat.trunkControl1;
              const p2 = cat.trunkControl2;
              const p3 = cat.port;
              trunkPhotonX =
                Math.pow(1 - trunkT, 3) * p0.x +
                3 * Math.pow(1 - trunkT, 2) * trunkT * p1.x +
                3 * (1 - trunkT) * Math.pow(trunkT, 2) * p2.x +
                Math.pow(trunkT, 3) * p3.x;
              trunkPhotonY =
                Math.pow(1 - trunkT, 3) * p0.y +
                3 * Math.pow(1 - trunkT, 2) * trunkT * p1.y +
                3 * (1 - trunkT) * Math.pow(trunkT, 2) * p2.y +
                Math.pow(trunkT, 3) * p3.y;
            }

            return (
              <g key={`group-${cat.id}`}>
                {/* 1. MASTER TRUNK CABLE (Signature Domain Color with High-Voltage Core) */}
                <g>
                  {/* Outer Glow Halo */}
                  <path
                    d={cat.trunkPath}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth="8"
                    strokeOpacity={isFull ? 0.45 : 0.3}
                    strokeLinecap="round"
                  />
                  {/* Solid High-Contrast Electric Cable */}
                  <path
                    d={cat.trunkPath}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth="3.6"
                    strokeOpacity="1"
                    strokeLinecap="round"
                  />
                  {/* Core Pure White High-Voltage Filament */}
                  <path
                    d={cat.trunkPath}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    strokeOpacity="0.9"
                    strokeLinecap="round"
                  />
                  {/* Connection Node at Capsule Junction */}
                  <circle
                    cx={cat.trunkStart.x}
                    cy={cat.trunkStart.y}
                    r="3.5"
                    fill={cat.color}
                  />
                  {/* Connection Node at Charger Plug Junction */}
                  <circle
                    cx={cat.port.x}
                    cy={cat.port.y}
                    r="3.5"
                    fill={isFull ? '#22c55e' : '#ffffff'}
                  />
                </g>

                {/* Moving Charge Pulse on Master Trunk */}
                {isCharging && (
                  <circle
                    cx={trunkPhotonX}
                    cy={trunkPhotonY}
                    r={isBottom ? 4.5 : 4}
                    fill={cat.color}
                    filter="url(#photonGlow)"
                  />
                )}

                {/* 2. ILLUMINATED CYBER CAPSULE HUB (Preserves Signature Domain Color Identity) */}
                <g className="cursor-default transition-all duration-300">
                  {/* Ambient Capsule Glow Background */}
                  <rect
                    x={cat.capsule.x}
                    y={cat.capsule.y}
                    width={cat.capsule.w}
                    height={cat.capsule.h}
                    rx={cat.capsule.rx}
                    fill={isFull ? `${cat.color}24` : `${cat.color}15`}
                    stroke={cat.color}
                    strokeWidth={isFull ? '2.2' : '1.8'}
                    className="transition-colors duration-500"
                  />

                  {/* High-Definition Bold Category Title (100% Dead-Centered, No Dots) */}
                  <text
                    x={cat.capsule.x + cat.capsule.w / 2}
                    y={cat.capsule.y + cat.capsule.h / 2 + 4.2}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={isBottom ? '13' : '11'}
                    fontWeight="800"
                    fontFamily="Inter, system-ui, sans-serif"
                    letterSpacing="0.8"
                  >
                    {cat.title}
                  </text>
                </g>

                {/* 3. ALL 6 SUB-KEYWORD FIBER CHANNELS CONNECTING INTO THE CAPSULE */}
                {cat.keywords.map((kw, idx) => {
                  let wireStartX = kw.x;
                  let wireStartY = kw.y - 4;
                  let targetX = cat.capsule.x;
                  let targetY = cat.capsule.y + 7 + idx * 4;

                  let controlX1 = wireStartX;
                  let controlY1 = wireStartY;
                  let controlX2 = targetX;
                  let controlY2 = targetY;

                  if (isBottom) {
                    wireStartX = kw.x;
                    wireStartY = kw.y - 14;
                    targetX = cat.capsule.x + 35 + idx * 46;
                    targetY = cat.capsule.y + cat.capsule.h; // Bottom rim of capsule
                    controlX1 = wireStartX;
                    controlY1 = wireStartY - 40;
                    controlX2 = targetX;
                    controlY2 = targetY + 30;
                  } else if (isLeftSide) {
                    // Left side: curves from keywords (x=175) to capsule left cap (x=220)
                    wireStartX = kw.x + 6;
                    wireStartY = kw.y - 4;
                    targetX = cat.capsule.x;
                    targetY = cat.capsule.y + 6 + idx * 4.2;
                    controlX1 = wireStartX + 26;
                    controlY1 = wireStartY;
                    controlX2 = targetX - 20;
                    controlY2 = targetY;
                  } else if (isRightSide) {
                    // Right side: curves from keywords (x=1025) to capsule right cap (x=980)
                    wireStartX = kw.x - 6;
                    wireStartY = kw.y - 4;
                    targetX = cat.capsule.x + cat.capsule.w;
                    targetY = cat.capsule.y + 6 + idx * 4.2;
                    controlX1 = wireStartX - 26;
                    controlY1 = wireStartY;
                    controlX2 = targetX + 20;
                    controlY2 = targetY;
                  }

                  const branchPathD = `M ${wireStartX},${wireStartY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${targetX},${targetY}`;

                  // Photon traversal along this branch line into the capsule
                  const t = ((percent * 4 + idx * 16) % 100) / 100;
                  const photonX =
                    Math.pow(1 - t, 3) * wireStartX +
                    3 * Math.pow(1 - t, 2) * t * controlX1 +
                    3 * (1 - t) * Math.pow(t, 2) * controlX2 +
                    Math.pow(t, 3) * targetX;
                  const photonY =
                    Math.pow(1 - t, 3) * wireStartY +
                    3 * Math.pow(1 - t, 2) * t * controlY1 +
                    3 * (1 - t) * Math.pow(t, 2) * controlY2 +
                    Math.pow(t, 3) * targetY;

                  return (
                    <g key={`${cat.id}-kw-${idx}`}>
                      {/* Sub-Keyword Monospace Text */}
                      <text
                        x={kw.x}
                        y={kw.y}
                        textAnchor={cat.anchorAlign}
                        fill={isFull ? '#86efac' : '#d4d4d8'}
                        fontSize="11"
                        fontFamily="ui-monospace, monospace"
                        className="cursor-default hover:fill-white transition-colors"
                      >
                        {kw.text}
                      </text>

                      {/* Connecting line: Keyword -> Illuminated Capsule Hub (No static clutter dots) */}
                      <path
                        d={branchPathD}
                        fill="none"
                        stroke={wireStroke}
                        strokeWidth={isFull ? 1.6 : 1.2}
                        strokeOpacity={wireOpacity}
                      />

                      {/* Energy pulse moving into the category capsule */}
                      {isCharging && (
                        <circle
                          cx={photonX}
                          cy={photonY}
                          r="2.6"
                          fill={themeColor}
                          filter="url(#photonGlow)"
                        />
                      )}
                    </g>
                  );
                })}

                {/* 4. MagSafe Titanium Charger Plug Head Locking into Battery Port */}
                <g className={isCharging ? 'animate-pulse' : ''}>
                  {/* Outer Brushed Titanium Housing */}
                  <rect
                    x={cat.plugRect.x}
                    y={cat.plugRect.y}
                    width={cat.plugRect.w}
                    height={cat.plugRect.h}
                    rx="5"
                    fill="#18181b"
                    stroke={isFull ? '#22c55e' : '#52525b'}
                    strokeWidth="1.3"
                  />
                  {/* Metallic Bevel Chamfer Inset */}
                  <rect
                    x={cat.plugRect.x + 2}
                    y={cat.plugRect.y + 2}
                    width={cat.plugRect.w - 4}
                    height={cat.plugRect.h - 4}
                    rx="3.5"
                    fill="#27272a"
                  />
                  {/* Glowing Magnetic LED Charging Slot */}
                  {isBottom ? (
                    // Vertical Bottom Plug LED
                    <rect
                      x={cat.plugRect.x + 7}
                      y={cat.plugRect.y + 6}
                      width="10"
                      height={cat.plugRect.h - 12}
                      rx="3"
                      fill={isFull ? '#22c55e' : cat.color}
                      filter="url(#photonGlow)"
                    />
                  ) : (
                    // Horizontal Side Plugs LED
                    <rect
                      x={cat.plugRect.x + 6}
                      y={cat.plugRect.y + 6}
                      width={cat.plugRect.w - 12}
                      height="12"
                      rx="3"
                      fill={isFull ? '#22c55e' : cat.color}
                      filter="url(#photonGlow)"
                    />
                  )}
                  {/* MagSafe Center High-Voltage Core Point */}
                  <circle
                    cx={cat.plugRect.x + cat.plugRect.w / 2}
                    cy={cat.plugRect.y + cat.plugRect.h / 2}
                    r="2"
                    fill="#ffffff"
                    opacity="0.95"
                  />
                </g>
              </g>
            );
          })}

          {/* ================================================================ */}
          {/* B. CENTRAL 3D CYLINDRICAL GLASS BATTERY (HYPER-REALISTIC MAGMA CELL) */}
          {/* Matches User's Reference Photo: Chrome Cap, Glass Reflections,   */}
          {/* Fiery Liquid with Floating Embers & Luminous Amber "7%" Font HUD */}
          {/* ================================================================ */}

          {/* 1. Radiant Molten Floor Bloom (Amber-Orange glow reflecting beneath battery) */}
          <g>
            <ellipse
              cx="600"
              cy="603"
              rx="115"
              ry="16"
              fill={isFull ? '#22c55e' : '#ff4500'}
              opacity={isFull ? 0.35 : 0.65}
              filter="url(#moltenFloorBloom)"
            />
            <ellipse
              cx="600"
              cy="600"
              rx="102"
              ry="12"
              fill={isFull ? '#86efac' : '#f59e0b'}
              opacity={isFull ? 0.4 : 0.8}
              filter="url(#moltenFloorBloom)"
            />
          </g>

          {/* 2. Stepped Chrome Metallic Terminal Cap & Collar (3D Chrome Reflection) */}
          <g>
            {/* Top Positive Nipple / Button */}
            <rect
              x="585"
              y="278"
              width="30"
              height="10"
              rx="3"
              fill="url(#chromeMetallicGrad)"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />
            <line
              x1="587"
              y1="279.5"
              x2="613"
              y2="279.5"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.9"
            />
            {/* Terminal Polarity Symbol (+) */}
            <text
              x="600"
              y="286.2"
              textAnchor="middle"
              fill="#0f172a"
              fontSize="9"
              fontWeight="900"
              fontFamily="Inter, system-ui, sans-serif"
            >
              +
            </text>

            {/* Stepped Chrome Neck Collar */}
            <rect
              x="568"
              y="286"
              width="64"
              height="11"
              rx="3"
              fill="url(#chromeMetallicGrad)"
              stroke="#475569"
              strokeWidth="0.9"
            />
            {/* Chrome Bevel Seam Line */}
            <line
              x1="569"
              y1="294"
              x2="631"
              y2="294"
              stroke="#0f172a"
              strokeWidth="1"
              strokeOpacity="0.7"
            />

            {/* Heavy Anodized Flanged Main Collar Ring */}
            <rect
              x="552"
              y="295"
              width="96"
              height="13"
              rx="4"
              fill="url(#chromeMetallicGrad)"
              stroke="#64748b"
              strokeWidth="1.2"
            />
            {/* Upper Chrome Specular Highlight Strip */}
            <path
              d="M 554,296.5 L 646,296.5"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.85"
            />
            {/* Underside Molten Internal Reflection on Chrome Lip */}
            <path
              d="M 554,307 L 646,307"
              stroke={isFull ? '#86efac' : '#f97316'}
              strokeWidth="1.4"
              strokeOpacity="0.65"
            />

            {/* Glass Neck Shoulder Bevel (Transition to Glass Cylinder) */}
            <rect
              x="524"
              y="304"
              width="152"
              height="8"
              rx="4"
              fill="#18181b"
              stroke="#71717a"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </g>

          {/* 3. Dark Transparent Obsidian Glass Chamber (Chamber depth behind liquid) */}
          <rect
            x="500"
            y="308"
            width="200"
            height="290"
            rx="28"
            fill="url(#darkGlassChamberGrad)"
          />

          {/* 4. Translucent Fiery Liquid with 3D Elliptical Meniscus & Floating Embers */}
          {(() => {
            const liquidHeight = (290 * Math.max(5, percent)) / 100;
            const surfaceY = 598 - liquidHeight;
            const liquidFill = isFull
              ? 'url(#liquidGradGreen)'
              : 'url(#fieryMagmaLiquidGrad)';
            const meniscusStroke = isFull ? '#86efac' : '#fef08a';

            return (
              <g clipPath="url(#glassCylinderClip)">
                {/* Liquid Body Fill */}
                <rect
                  x="500"
                  y={surfaceY}
                  width="200"
                  height={liquidHeight + 10}
                  fill={liquidFill}
                />

                {/* Internal Magma Ambient Heat Wave */}
                <ellipse
                  cx="600"
                  cy={Math.min(590, surfaceY + liquidHeight * 0.5)}
                  rx="82"
                  ry={Math.max(10, liquidHeight * 0.42)}
                  fill={isFull ? '#22c55e' : '#ff3b00'}
                  opacity={isFull ? 0.25 : 0.38}
                  filter="url(#moltenFloorBloom)"
                />

                {/* Suspended Sparkling Embers & Micro-Bubbles inside liquid */}
                {isCharging && (
                  <g>
                    {SPARK_PARTICLES.map((sp, idx) => {
                      const sparkX = 508 + sp.xRatio * 184 + Math.sin(percent * 0.3 + idx) * 4;
                      const sparkY = 590 - ((percent * sp.speed + sp.offset * 10) % Math.max(15, liquidHeight));
                      return (
                        <circle
                          key={`spark-${idx}`}
                          cx={sparkX}
                          cy={sparkY}
                          r={sp.r}
                          fill={isFull ? '#ffffff' : sp.color}
                          opacity={0.88}
                          filter="url(#sparkleGlow)"
                        />
                      );
                    })}
                  </g>
                )}

                {/* 3D Liquid Surface Meniscus (Clean Soft Glow, Zero Harsh Lines) */}
                <g>
                  {/* Soft Meniscus Disc */}
                  <ellipse
                    cx="600"
                    cy={surfaceY}
                    rx="95"
                    ry="7"
                    fill={isFull ? '#22c55e' : 'url(#meniscusSurfaceGrad)'}
                    opacity="0.55"
                  />
                  {/* Meniscus Sparkling Froth Dots */}
                  {isCharging && (
                    <g>
                      <circle cx={532 + Math.sin(percent * 0.5) * 4} cy={surfaceY} r="2" fill="#ffffff" opacity="0.9" />
                      <circle cx={562 + Math.cos(percent * 0.4) * 5} cy={surfaceY - 1} r="1.6" fill="#fef08a" opacity="0.85" />
                      <circle cx={600 + Math.sin(percent * 0.6) * 6} cy={surfaceY} r="2.2" fill="#ffffff" opacity="0.95" />
                      <circle cx={638 + Math.cos(percent * 0.5) * 5} cy={surfaceY - 1} r="1.8" fill="#fef08a" opacity="0.85" />
                      <circle cx={668 + Math.sin(percent * 0.4) * 4} cy={surfaceY} r="2" fill="#ffffff" opacity="0.9" />
                    </g>
                  )}
                </g>
              </g>
            );
          })()}

          {/* 5. Clean 3D Glass Sheen (Soft Diffuse Lighting - Zero Sharp Lines) */}
          <g pointerEvents="none">
            {/* Left Soft Ambient Specular Sheen (No sharp scratch lines) */}
            <rect
              x="508"
              y="314"
              width="14"
              height="278"
              rx="7"
              fill="url(#leftGlassSpecularGrad)"
              opacity="0.4"
            />

            {/* Right Soft Ambient Specular Sheen */}
            <rect
              x="678"
              y="314"
              width="12"
              height="278"
              rx="6"
              fill="url(#rightGlassSpecularGrad)"
              opacity="0.3"
            />

            {/* Clean Outer Glass Cylinder Silhouette */}
            <rect
              x="500"
              y="308"
              width="200"
              height="290"
              rx="28"
              fill="none"
              stroke="url(#cylinderOuterRimGrad)"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
          </g>

          {/* 7. Radiant Molten Percentage Typography (Matching 7% Reference Photo) */}
          <g>
            {/* Soft Ambient Heat Bloom Behind Numbers */}
            <text
              x="600"
              y="472"
              textAnchor="middle"
              fill={isFull ? '#22c55e' : '#f59e0b'}
              fontSize="64"
              fontWeight="900"
              fontFamily="'Inter', 'Bebas Neue', system-ui, sans-serif"
              filter={isFull ? 'url(#svgGreenGlow)' : 'url(#amberFireTextGlow)'}
              opacity="0.88"
            >
              {percent}%
            </text>
            {/* Crisp Glowing Golden Core Text */}
            <text
              x="600"
              y="472"
              textAnchor="middle"
              fill={isFull ? '#86efac' : '#fef08a'}
              fontSize="64"
              fontWeight="900"
              fontFamily="'Inter', 'Bebas Neue', system-ui, sans-serif"
              letterSpacing="1"
              className="tracking-tight select-none"
            >
              {percent}%
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
