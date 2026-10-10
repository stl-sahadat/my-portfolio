import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Cpu, Zap, Shield, Database, Workflow, Terminal } from 'lucide-react';

/**
 * StackedCapsuleAutomationsShowcase
 * 
 * Custom-crafted for Sahadat vai based on the uploaded design reference:
 * - Stack of luxury rounded capsule/pill cards vertically overlapping with 3D depth.
 * - Exact 6-tier signature color palette from the reference image:
 *     Pill 1: #102223 (Obsidian Teal / Dark Forest Slate)
 *     Pill 2: #2B362E (Deep Forest Sage / Pine)
 *     Pill 3: #4F5144 (Olive Slate Stone)
 *     Pill 4: #BE8968 (Warm Caramel Sand / Desert Terracotta)
 *     Pill 5: #6C340F (Burnished Copper Rust / Terracotta)
 *     Pill 6: #3D2312 (Deep Espresso Roast / Mahogany)
 * - Atmospheric luxury copper-to-slate ambient backdrop glow.
 * - Smooth interactive expansion on hover & click.
 * - 100% Native DOM: Free, unhindered page scrolling (zero canvas scroll trapping).
 */

const PALETTE = [
  {
    bg: '#102223',
    border: 'rgba(255, 255, 255, 0.12)',
    text: '#ffffff',
    subText: '#8fa8a3',
    badgeBg: 'rgba(255, 255, 255, 0.10)',
    badgeText: '#a7f3d0',
    accent: '#00f5d4',
  },
  {
    bg: '#2B362E',
    border: 'rgba(255, 255, 255, 0.14)',
    text: '#ffffff',
    subText: '#a3b8aa',
    badgeBg: 'rgba(255, 255, 255, 0.12)',
    badgeText: '#86efac',
    accent: '#34d399',
  },
  {
    bg: '#4F5144',
    border: 'rgba(255, 255, 255, 0.16)',
    text: '#ffffff',
    subText: '#cbd5c5',
    badgeBg: 'rgba(255, 255, 255, 0.14)',
    badgeText: '#fef08a',
    accent: '#facc15',
  },
  {
    bg: '#BE8968',
    border: 'rgba(255, 255, 255, 0.28)',
    text: '#26140b', // Deep rich espresso for perfect contrast on warm sand
    subText: '#4a2916',
    badgeBg: 'rgba(38, 20, 11, 0.18)',
    badgeText: '#26140b',
    accent: '#ffffff',
  },
  {
    bg: '#6C340F',
    border: 'rgba(255, 255, 255, 0.20)',
    text: '#ffffff',
    subText: '#f2c4a7',
    badgeBg: 'rgba(255, 255, 255, 0.16)',
    badgeText: '#fed7aa',
    accent: '#fb923c',
  },
  {
    bg: '#3D2312',
    border: 'rgba(255, 255, 255, 0.14)',
    text: '#ffffff',
    subText: '#c9a893',
    badgeBg: 'rgba(255, 255, 255, 0.12)',
    badgeText: '#fdba74',
    accent: '#ea580c',
  },
];

const ICONS = [Cpu, Workflow, Database, Sparkles, Shield, Terminal];

export default function StackedCapsuleAutomationsShowcase({
  projects = [],
  activeIdx = 0,
  onActiveChange,
  onProjectClick,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Take the first 6 projects for the stacked deck (or all if <= 6)
  const displayCount = Math.min(6, Math.max(1, projects.length));
  const activeDeckIdx = activeIdx % displayCount;

  // Auto-cycle through the cards every 4.5 seconds if user is not hovering
  useEffect(() => {
    if (hoveredIdx !== null) return;
    const timer = setInterval(() => {
      if (onActiveChange && projects.length > 0) {
        onActiveChange((activeIdx + 1) % projects.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIdx, hoveredIdx, onActiveChange, projects.length]);

  return (
    <div className="relative w-full max-w-[560px] mx-auto py-8 px-4 flex flex-col items-center justify-center select-none">
      
      {/* ============================================================== */}
      {/* ATMOSPHERIC COPPER-TO-SLATE BACKDROP GLOW (MATCHING THE IMAGE)   */}
      {/* ============================================================== */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none rounded-3xl overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(101, 52, 16, 0.45) 0%, transparent 55%),
            radial-gradient(circle at 90% 25%, rgba(151, 121, 92, 0.35) 0%, transparent 55%),
            radial-gradient(circle at 50% 60%, rgba(16, 34, 35, 0.70) 0%, transparent 70%),
            linear-gradient(180deg, rgba(10, 15, 14, 0.95) 0%, rgba(18, 26, 25, 0.98) 100%)
          `,
          boxShadow: 'inset 0 0 80px rgba(0, 0, 0, 0.8), 0 20px 50px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Subtle horizontal light band through the middle (similar to photo sheen) */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            background: 'linear-gradient(90deg, rgba(190, 137, 104, 0) 0%, rgba(190, 137, 104, 0.35) 50%, rgba(190, 137, 104, 0) 100%)',
            filter: 'blur(35px)',
          }}
        />
      </div>

      {/* Header Pill Subtitle */}
      <div className="mb-6 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[#be8968] animate-pulse" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-300">
          AUTONOMOUS WORKFLOW DECK • {displayCount} ARCHITECTURES
        </span>
      </div>

      {/* ============================================================== */}
      {/* THE 6 STACKED CAPSULE CARDS (OVERLAPPING TIERED DECK)            */}
      {/* ============================================================== */}
      <div className="relative w-full flex flex-col items-center">
        {Array.from({ length: displayCount }).map((_, i) => {
          const proj = projects[i] || projects[0];
          const colorTheme = PALETTE[i % PALETTE.length];
          const IconComp = ICONS[i % ICONS.length];
          const isActive = activeDeckIdx === i;
          const isHovered = hoveredIdx === i;
          const isHighlighted = isActive || isHovered;

          // Vertical overlap calculation:
          // Negative margin top (-mt-5) creates the classic cascading overlap from the reference image!
          const isFirst = i === 0;

          return (
            <div
              key={proj?.id || `capsule-${i}`}
              onClick={() => {
                if (onActiveChange) onActiveChange(i);
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`
                group relative w-full h-[62px] sm:h-[68px]
                ${isFirst ? 'mt-0' : '-mt-5 sm:-mt-6'}
                rounded-full transition-all duration-300 ease-out cursor-pointer
                flex items-center justify-between px-4 sm:px-6
                ${isHighlighted ? 'scale-[1.03] z-30 shadow-[0_18px_38px_rgba(0,0,0,0.75)]' : 'z-[10] shadow-[0_10px_22px_rgba(0,0,0,0.55)] hover:scale-[1.015] hover:z-20'}
              `}
              style={{
                backgroundColor: colorTheme.bg,
                border: isHighlighted
                  ? `2px solid ${colorTheme.accent}`
                  : `1px solid ${colorTheme.border}`,
                boxShadow: isHighlighted
                  ? `0 16px 36px -4px rgba(0,0,0,0.85), 0 0 24px -2px ${colorTheme.accent}40, inset 0 1px 2px rgba(255,255,255,0.3)`
                  : '0 8px 20px -2px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.12)',
              }}
              title={`Click to view ${proj?.title}`}
            >
              
              {/* Left End: Number Tag + Icon */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <div 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-black transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: colorTheme.badgeBg,
                    color: colorTheme.text,
                    border: `1px solid ${colorTheme.border}`,
                  }}
                >
                  <IconComp size={14} className="opacity-90" />
                </div>

                <div className="flex flex-col">
                  <span 
                    className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-75"
                    style={{ color: colorTheme.subText }}
                  >
                    0{i + 1} • {proj?.badge || 'AI WORKFLOW'}
                  </span>
                  <span 
                    className="font-bebas text-sm sm:text-lg tracking-wide uppercase line-clamp-1 leading-none font-bold"
                    style={{ color: colorTheme.text }}
                  >
                    {proj?.title || `AUTOMATION SUITE 0${i + 1}`}
                  </span>
                </div>
              </div>

              {/* Right End: Badge Pill + Action Arrow */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div 
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: colorTheme.badgeBg,
                    color: colorTheme.badgeText,
                  }}
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: colorTheme.accent }}
                  />
                  <span>{proj?.tags?.[0] || 'ORCHESTRATED'}</span>
                </div>

                <div 
                  className={`
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${isHighlighted ? 'scale-110' : 'opacity-60 group-hover:opacity-100'}
                  `}
                  style={{
                    backgroundColor: colorTheme.badgeBg,
                    color: colorTheme.text,
                  }}
                >
                  {isActive ? (
                    <CheckCircle2 size={15} style={{ color: colorTheme.accent }} />
                  ) : (
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>
              </div>

              {/* Active subtle sheen bar on top edge */}
              {isHighlighted && (
                <div 
                  className="absolute top-0 left-8 right-8 h-[2px] rounded-full pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colorTheme.accent}, transparent)`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div className="mt-8 flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
        <span className="w-1 h-1 rounded-full bg-zinc-500" />
        <span>Click any capsule to inspect architecture details</span>
      </div>

    </div>
  );
}
