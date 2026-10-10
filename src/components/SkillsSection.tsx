import React, { useState, useEffect } from 'react';

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

export default function SkillsSection() {
  const [percent, setPercent] = useState(0); // 0 to 100

  // 0% to 100% charging cycle loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Hold 100% full green state for 4.5 seconds then loop
  useEffect(() => {
    if (percent >= 100) {
      const resetTimer = setTimeout(() => {
        setPercent(0);
      }, 4500);
      return () => clearTimeout(resetTimer);
    }
  }, [percent]);

  const isFull = percent >= 100;
  const isCharging = percent > 0 && percent < 100;

  // Dynamic Liquid Surface Wave Color
  const waveSurfaceColor = isFull ? '#86efac' : percent > 60 ? '#f472b6' : '#fca5a5';

  return (
    <section
      id="skills"
      className="w-full bg-black dark:bg-black light:bg-[#f8fafc] transition-colors duration-300 relative overflow-hidden select-none flex flex-col items-center pb-16 scroll-mt-28 min-h-[850px]"
      style={{ paddingTop: '150px' }}
    >
      {/* Studio Lighting Ambient Glow (Focused behind Battery) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isFull
            ? 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.22) 0%, transparent 62%)'
            : 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.08) 0%, transparent 68%)',
          transition: 'background 0.8s ease',
        }}
      />

      {/* ==================================================================== */}
      {/* 1. TOP HEADER: "Skills & Architecture" (2 INCHES BELOW NAVBAR)       */}
      {/* ==================================================================== */}
      <div className="relative z-20 mb-2 sm:mb-4 text-center px-4">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white transition-all duration-700 ${
            isFull
              ? 'drop-shadow-[0_0_35px_rgba(34,197,94,0.55)]'
              : 'drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]'
          }`}
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          }}
        >
          Skills & Architecture
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

            {/* Liquid Battery Mask for Clean Rounded Corner Fill */}
            <clipPath id="batteryLiquidClip">
              <rect x="500" y="305" width="200" height="290" rx="34" ry="34" />
            </clipPath>

            {/* 3D Glass Cylinder Back Chamber Gradient */}
            <linearGradient id="cylinderChamberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#08080a" />
              <stop offset="18%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#222228" />
              <stop offset="82%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>

            {/* Glass Rim Specular Highlight Gradient */}
            <linearGradient id="glassRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#a1a1aa" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#52525b" stopOpacity="0.85" />
            </linearGradient>

            {/* Liquid Gradient Themes */}
            <linearGradient id="liquidGradGreen" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#14532d" />
              <stop offset="55%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
            <linearGradient id="liquidGradPurple" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="55%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="liquidGradRed" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="55%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#f87171" />
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
          {/* B. CENTRAL 3D CYBER POWER CELL (HIGH-TECH CYLINDRICAL CHAMBER)   */}
          {/* ================================================================ */}

          {/* 1. Sculpted Anodized Terminal Top Cap */}
          <g>
            {/* Terminal Collar Base */}
            <rect
              x="562"
              y="297"
              width="76"
              height="8"
              rx="2"
              fill="#27272a"
              stroke="#52525b"
              strokeWidth="1"
            />
            {/* Terminal Positive Nipple */}
            <rect
              x="574"
              y="286"
              width="52"
              height="12"
              rx="3"
              fill={isFull ? '#22c55e' : '#e4e4e7'}
              stroke={isFull ? '#86efac' : '#ffffff'}
              strokeWidth="1.2"
              filter={isFull ? 'url(#svgGreenGlow)' : undefined}
            />
            {/* Embossed Polarity Symbol (+) */}
            <text
              x="600"
              y="295.5"
              textAnchor="middle"
              fill="#18181b"
              fontSize="10"
              fontWeight="900"
              fontFamily="Inter, system-ui, sans-serif"
            >
              +
            </text>
          </g>

          {/* 2. 3D Cylindrical Glass Outer Shell */}
          <rect
            x="500"
            y="305"
            width="200"
            height="290"
            rx="34"
            fill="url(#cylinderChamberGrad)"
            stroke={isFull ? '#22c55e' : 'url(#glassRimGrad)'}
            strokeWidth="3.2"
            strokeOpacity={isFull ? 1 : 0.85}
            filter={isFull ? 'url(#svgGreenGlow)' : undefined}
          />

          {/* 3. Liquid Charging Wave Fill + Organic Wave Surface + Cyber Bubbles */}
          <g clipPath="url(#batteryLiquidClip)">
            {/* Dynamic Liquid Body */}
            {(() => {
              const liquidHeight = (290 * Math.max(5, percent)) / 100;
              const surfaceY = 595 - liquidHeight;
              const waveDelta = isCharging ? Math.sin(percent * 0.35) * 4 : 0;
              const liquidFill = isFull
                ? 'url(#liquidGradGreen)'
                : percent > 60
                ? 'url(#liquidGradPurple)'
                : 'url(#liquidGradRed)';

              return (
                <g>
                  {/* Liquid Body with Curved Wave Crest */}
                  <path
                    d={`M 495,${surfaceY} Q 550,${surfaceY - 5 - waveDelta} 600,${surfaceY} T 705,${surfaceY} L 705,605 L 495,605 Z`}
                    fill={liquidFill}
                    opacity="0.92"
                  />

                  {/* Liquid Wave Glowing Crest Line */}
                  <path
                    d={`M 495,${surfaceY} Q 550,${surfaceY - 5 - waveDelta} 600,${surfaceY} T 705,${surfaceY}`}
                    fill="none"
                    stroke={waveSurfaceColor}
                    strokeWidth="3.5"
                    strokeOpacity="0.95"
                    filter="url(#photonGlow)"
                  />

                  {/* Organic Cyber Micro-Bubbles Rising Upward */}
                  {isCharging && (
                    <g>
                      <circle
                        cx={545 + Math.sin(percent * 0.4) * 8}
                        cy={590 - ((percent * 7.5) % Math.max(20, liquidHeight))}
                        r="2.8"
                        fill="#ffffff"
                        opacity="0.6"
                      />
                      <circle
                        cx={645 + Math.cos(percent * 0.5) * 10}
                        cy={590 - ((percent * 6.2 + 50) % Math.max(20, liquidHeight))}
                        r="2.2"
                        fill="#ffffff"
                        opacity="0.5"
                      />
                      <circle
                        cx={595 + Math.sin(percent * 0.6) * 6}
                        cy={590 - ((percent * 8.1 + 100) % Math.max(20, liquidHeight))}
                        r="2.5"
                        fill="#ffffff"
                        opacity="0.65"
                      />
                    </g>
                  )}
                </g>
              );
            })()}
          </g>

          {/* 5. Dynamic Central Readout HUD */}
          <g>
            {/* Big Bold Clean Percentage Display */}
            <text
              x="600"
              y="462"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="52"
              fontWeight="900"
              fontFamily="Inter, system-ui, sans-serif"
              filter={isFull ? 'url(#svgGreenGlow)' : undefined}
              className="tracking-tight"
            >
              {percent}%
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
