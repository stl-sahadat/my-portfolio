import React, { useState, useEffect, useRef, useCallback } from 'react';
import { withBase } from '../utils/assetUrl';
import {
  Search,
  Target,
  Rocket,
  Bot,
  Workflow,
  Shield,
  Zap,
  Cpu,
  Radio,
  Sparkles,
  ExternalLink,
  Github,
  ChevronUp,
  ChevronDown,
  Play,
  Pause,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

/**
 * AIAutomationPortalShowcase
 * 
 * Inspired by getlayers.ai and pixel-perfect to Sahadat vai's reference screenshot:
 * 1. LEFT SIDE: "AI SLOP" chaotic pebble cluster with dark AI tool tokens and
 *    curving fiber-optic light strands rushing horizontally into the portal ring.
 * 2. CENTER: Standing 3D vertical circular Cyber Portal Ring / Accelerator Ring with
 *    hydraulic cylinder post mounts (top & bottom), radiant cyan singularity core,
 *    and concentrated horizontal laser beam emerging toward the right.
 * 3. RIGHT SIDE: "YOUR AI POWER STACK" with vertical cyan pipeline line.
 *    Connected automation cards that slide and hide UPWARDS from the bottom:
 *    - Top card slides up into upper exit zone (hiding upwards).
 *    - Center active card turns glowing NEON RED (matching Card 02 in screenshot!),
 *      with the horizontal laser beam connecting directly into its left edge.
 *    - Bottom card enters upwards from the bottom (neon blue border).
 * 4. Free manual controls (click card, up/down arrows, play/pause toggle).
 */

const AUTOMATION_METAS = [
  {
    icon: Search,
    stepLabel: 'DISCOVER',
    highlight: 'SWARM DISCOVERY',
    color: '#38bdf8',
  },
  {
    icon: Target,
    stepLabel: 'MATCH',
    highlight: 'INTELLIGENT MATCH',
    color: '#ef4444',
  },
  {
    icon: Rocket,
    stepLabel: 'BUILD',
    highlight: 'AUTONOMOUS BUILD',
    color: '#38bdf8',
  },
  {
    icon: Bot,
    stepLabel: 'ORCHESTRATE',
    highlight: 'AGENT COLLECTIVE',
    color: '#a855f7',
  },
  {
    icon: Shield,
    stepLabel: 'SECURE',
    highlight: 'ZERO-TRUST GATE',
    color: '#10b981',
  },
  {
    icon: Zap,
    stepLabel: 'SCALE',
    highlight: 'SUB-50MS ASYNC',
    color: '#f59e0b',
  },
];

export default function AIAutomationPortalShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
}) {
  const { trackEvent } = usePortfolio();
  const total = projects.length || 1;

  const [currentIndex, setCurrentIndex] = useState(activeIdx);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Sync external activeIdx changes
  useEffect(() => {
    setCurrentIndex(activeIdx);
  }, [activeIdx]);

  // Inform parent of active index changes
  const notifyChange = useCallback(
    (newIdx) => {
      const wrapped = (newIdx + total) % total;
      setCurrentIndex(wrapped);
      if (onActiveChange) {
        onActiveChange(wrapped);
      }
    },
    [total, onActiveChange]
  );

  // Auto-advance upwards every 4 seconds (following the vertical pipeline)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      notifyChange(currentIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, total, notifyChange]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    notifyChange(currentIndex - 1);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    notifyChange(currentIndex + 1);
  };

  const handleCardClick = (idx, proj) => {
    if (idx === currentIndex) {
      if (onProjectClick) {
        onProjectClick(proj);
      } else if (proj?.githubUrl) {
        window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      notifyChange(idx);
    }
  };

  // Helper to get relative offset for seamless infinite circular scrolling
  const getRelativeOffset = (itemIdx) => {
    let diff = itemIdx - currentIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  const currentProject = projects[currentIndex] || projects[0];

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-auto sm:aspect-[16/9] min-h-[580px] sm:min-h-[540px] max-h-[780px] mx-auto select-none overflow-hidden rounded-3xl bg-[#040711] border border-cyan-500/25 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col md:flex-row items-center justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ==================================================================== */}
      {/* 1. CINEMATIC STAGE BACKDROP (LEFT CLUSTER + PORTAL RING + LASER)     */}
      {/* ==================================================================== */}
      <img
        src={withBase('/ai_portal_stage_backdrop.png')}
        alt="AI Slop to AI Power Stack Portal System"
        className="absolute inset-0 w-full h-full object-cover object-left pointer-events-none z-0"
        style={{
          filter: 'contrast(1.08) brightness(1.02)',
        }}
      />

      {/* Ambient background glow blending electric blue and laser red */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/[0.05] to-[#040711]/90 pointer-events-none z-0" />
      <div className="absolute right-[22%] top-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-red-600/[0.07] rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ==================================================================== */}
      {/* 2. DYNAMIC LASER BEAM CONNECTION OVERLAY (CONNECTS PORTAL TO CARD)   */}
      {/* ==================================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
        viewBox="0 0 1000 562.5"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="95%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.95" />
          </linearGradient>

          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentrated Horizontal Laser Beam shooting from Center Ring to Right Card */}
        <line
          x1="340"
          y1="281.25"
          x2="575"
          y2="281.25"
          stroke="url(#laserBeamGrad)"
          strokeWidth="3.4"
          filter="url(#laserGlow)"
        />
        <line
          x1="340"
          y1="281.25"
          x2="575"
          y2="281.25"
          stroke="#ffffff"
          strokeWidth="1.3"
        />

        {/* Impact Photon Burst Flare at the Left Border of the Active Card */}
        <circle cx="575" cy="281.25" r="7.5" fill="#ef4444" filter="url(#laserGlow)" opacity="0.85" />
        <circle cx="575" cy="281.25" r="3.5" fill="#ffffff" />
        <line x1="568" y1="281.25" x2="582" y2="281.25" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="575" y1="274.25" x2="575" y2="288.25" stroke="#ffffff" strokeWidth="1.5" />
      </svg>

      {/* ==================================================================== */}
      {/* 3. LEFT HUD ACCENT: AI SLOP BADGE WITH CORNER CROSSHAIRS            */}
      {/* ==================================================================== */}
      <div className="absolute top-5 left-6 z-20 flex items-center gap-2">
        <div className="relative px-3.5 py-1.5 rounded-lg bg-black/75 border border-sky-400/50 backdrop-blur-xl flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.25)]">
          {/* Corner Red Crosshairs */}
          <span className="absolute -top-1 -right-1 text-red-500 text-[10px] font-black leading-none select-none">+</span>
          <span className="absolute -bottom-1 -left-1 text-red-500 text-[10px] font-black leading-none select-none">+</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>AI SLOP</span>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 4. RIGHT STAGE: YOUR AI POWER STACK & VERTICAL CONNECTED CARDS       */}
      {/* ==================================================================== */}
      <div className="relative z-20 ml-auto w-full md:w-[49%] lg:w-[46%] h-full flex flex-col justify-between py-6 px-4 sm:pr-8 sm:pl-2">
        {/* Top Header Badge: "YOUR AI POWER STACK" matching screenshot */}
        <div className="flex items-center justify-between gap-3 pb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-cyan-950/70 border border-cyan-400/60 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_18px_rgba(56,189,248,0.3)]">
            <Cpu size={14} className="text-cyan-400 animate-pulse" />
            <span>YOUR AI POWER STACK</span>
          </div>

          {/* Controls: Up/Down + Pause */}
          <div className="flex items-center gap-1 bg-black/70 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Previous Automation"
            >
              <ChevronUp size={15} />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Next Automation"
            >
              <ChevronDown size={15} />
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/10 transition-colors ml-0.5 cursor-pointer"
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? <Play size={13} /> : <Pause size={13} />}
            </button>
          </div>
        </div>

        {/* ================================================================== */}
        {/* VERTICAL PIPELINE TRACK WITH SLIDING AUTOMATION CARDS              */}
        {/* ================================================================== */}
        <div className="relative flex-1 flex items-center justify-center my-auto overflow-hidden min-h-[380px]">
          {/* Vertical Cyan Guide Line passing through the cards */}
          <div className="absolute top-2 bottom-2 left-6 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] z-0 pointer-events-none" />

          {/* Sliding Cards Container */}
          <div className="relative w-full h-[360px] flex items-center justify-center">
            {projects.map((proj, pIdx) => {
              const offset = getRelativeOffset(pIdx);
              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const meta = AUTOMATION_METAS[pIdx % AUTOMATION_METAS.length];
              const IconComp = isCenter ? Target : meta.icon;

              // Card vertical position along the line:
              // offset 0: center (translateY: 0)
              // offset -1: top (translateY: -115px)
              // offset +1: bottom (translateY: +115px)
              // offset -2: exit top (translateY: -220px, opacity: 0)
              // offset +2: enter bottom (translateY: +220px, opacity: 0)
              const translateY = offset * 115;
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.72 : 0;
              const scale = isCenter ? 1.02 : 0.94;
              const zIndex = isCenter ? 30 : 20 - Math.abs(offset);

              const displayNum = String(pIdx + 1).padStart(2, '0');

              return (
                <div
                  key={`auto-card-${proj.id || pIdx}`}
                  onClick={() => handleCardClick(pIdx, proj)}
                  className={`absolute left-0 right-0 max-w-[450px] mx-auto cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isCenter ? 'pointer-events-auto' : 'pointer-events-auto hover:opacity-100'
                  }`}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  <div
                    className={`relative p-3.5 sm:p-4 rounded-2xl backdrop-blur-2xl transition-all duration-500 ${
                      isCenter
                        ? 'bg-[#0a0715]/95 border-2 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.45),inset_0_0_15px_rgba(239,68,68,0.18)] ring-1 ring-red-400/50'
                        : 'bg-[#050c1e]/90 border border-sky-400/65 shadow-[0_0_16px_rgba(56,189,248,0.22)] hover:border-sky-300'
                    }`}
                  >
                    {/* Top Right Index Badge: '01', '02', '03'... */}
                    <div className="absolute top-2.5 right-3.5 flex items-center gap-1.5">
                      <span
                        className={`font-mono text-xs font-black tracking-widest ${
                          isCenter ? 'text-red-400' : 'text-sky-400'
                        }`}
                      >
                        {displayNum}
                      </span>
                    </div>

                    {/* Card Content Row */}
                    <div className="flex items-center gap-3.5">
                      {/* Left Circular Glowing Neon Icon Badge */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isCenter
                            ? 'border-2 border-red-500 bg-red-950/85 shadow-[0_0_20px_rgba(239,68,68,0.85)] scale-105'
                            : 'border-2 border-sky-400 bg-sky-950/65 shadow-[0_0_14px_rgba(56,189,248,0.45)]'
                        }`}
                      >
                        <IconComp
                          size={22}
                          className={isCenter ? 'text-white animate-pulse' : 'text-cyan-300'}
                        />
                      </div>

                      {/* Right Text Block */}
                      <div className="flex-1 min-w-0 pr-6">
                        {/* Title Header with Category Badge */}
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4
                            className={`font-bold tracking-wider uppercase text-sm sm:text-base leading-tight truncate ${
                              isCenter ? 'text-white font-black' : 'text-slate-200'
                            }`}
                          >
                            {meta.stepLabel}: {proj.title}
                          </h4>
                        </div>

                        {/* Description Summary */}
                        <p
                          className={`text-xs line-clamp-2 leading-relaxed ${
                            isCenter ? 'text-slate-200' : 'text-slate-400'
                          }`}
                        >
                          {proj.description || 'Autonomous multi-agent execution pipeline.'}
                        </p>

                        {/* Interactive Footer (Only on Active Center Card) */}
                        {isCenter && (
                          <div className="mt-2 pt-2 border-t border-red-500/30 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {(proj.tags || []).slice(0, 3).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-red-950/50 text-red-200 border border-red-500/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* GitHub Link */}
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  trackEvent('Automation GitHub Click', proj.title);
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[10px] font-mono font-bold uppercase transition-all shadow-[0_0_10px_rgba(239,68,68,0.5)] cursor-pointer"
                              >
                                <span>REPO</span>
                                <ExternalLink size={10} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status Info */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="truncate max-w-[240px]">ACTIVE: {currentProject?.title}</span>
          </div>
          <span className="shrink-0">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
