import React, { useState } from 'react';

// 10 High-voltage cyber neon color profiles with rotating conic spectrums
const COLOR_PRESETS = [
  {
    accent: '#ef233c', // Crimson
    spectrum: 'conic-gradient(from 0deg, #ef233c, #ec4899, #f43f5e, #a855f7, #ef233c)',
    glowColor: 'rgba(239, 35, 60, 0.55)',
  },
  {
    accent: '#06b6d4', // Cyan
    spectrum: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #00f0ff, #10b981, #06b6d4)',
    glowColor: 'rgba(6, 182, 212, 0.55)',
  },
  {
    accent: '#a855f7', // Purple
    spectrum: 'conic-gradient(from 0deg, #a855f7, #6366f1, #ec4899, #c084fc, #a855f7)',
    glowColor: 'rgba(168, 85, 247, 0.55)',
  },
  {
    accent: '#10b981', // Emerald
    spectrum: 'conic-gradient(from 0deg, #10b981, #22c55e, #06b6d4, #84cc16, #10b981)',
    glowColor: 'rgba(16, 185, 129, 0.55)',
  },
  {
    accent: '#f59e0b', // Amber / Gold
    spectrum: 'conic-gradient(from 0deg, #f59e0b, #eab308, #ef4444, #fbbf24, #f59e0b)',
    glowColor: 'rgba(245, 158, 11, 0.55)',
  },
  {
    accent: '#3b82f6', // Electric Blue
    spectrum: 'conic-gradient(from 0deg, #3b82f6, #00f0ff, #6366f1, #2563eb, #3b82f6)',
    glowColor: 'rgba(59, 130, 246, 0.55)',
  },
  {
    accent: '#d946ef', // Fuchsia / Magenta
    spectrum: 'conic-gradient(from 0deg, #d946ef, #ec4899, #8b5cf6, #f43f5e, #d946ef)',
    glowColor: 'rgba(217, 70, 239, 0.55)',
  },
  {
    accent: '#f43f5e', // Rose
    spectrum: 'conic-gradient(from 0deg, #f43f5e, #ef233c, #fb7185, #e11d48, #f43f5e)',
    glowColor: 'rgba(244, 63, 94, 0.55)',
  },
  {
    accent: '#14b8a6', // Teal
    spectrum: 'conic-gradient(from 0deg, #14b8a6, #06b6d4, #10b981, #3b82f6, #14b8a6)',
    glowColor: 'rgba(20, 184, 166, 0.55)',
  },
  {
    accent: '#fb923c', // Tangerine
    spectrum: 'conic-gradient(from 0deg, #fb923c, #f59e0b, #ef233c, #f43f5e, #fb923c)',
    glowColor: 'rgba(251, 146, 60, 0.55)',
  },
];

export function getTechColorConfig(name) {
  const norm = (name || '').toLowerCase().trim();
  
  if (norm.includes('react') || norm.includes('vite') || norm.includes('tailwind')) {
    return COLOR_PRESETS[1]; // Cyan
  }
  if (norm.includes('go') || norm.includes('golang') || norm.includes('docker') || norm.includes('kubernetes')) {
    return COLOR_PRESETS[5]; // Blue
  }
  if (norm.includes('python') || norm.includes('fastapi') || norm.includes('node')) {
    return COLOR_PRESETS[4]; // Amber
  }
  if (norm.includes('agent') || norm.includes('crewai') || norm.includes('rag') || norm.includes('vault')) {
    return COLOR_PRESETS[0]; // Crimson
  }
  if (norm.includes('langchain') || norm.includes('langgraph') || norm.includes('openid') || norm.includes('auth')) {
    return COLOR_PRESETS[2]; // Purple
  }
  if (norm.includes('mtls') || norm.includes('security') || norm.includes('trust') || norm.includes('gpt')) {
    return COLOR_PRESETS[3]; // Emerald
  }
  if (norm.includes('deepseek') || norm.includes('cloud') || norm.includes('gcp')) {
    return COLOR_PRESETS[8]; // Teal
  }

  // Deterministic fallback based on string character codes
  let hash = 0;
  for (let i = 0; i < norm.length; i++) {
    hash = (hash << 5) - hash + norm.charCodeAt(i);
    hash |= 0;
  }
  return COLOR_PRESETS[Math.abs(hash) % COLOR_PRESETS.length];
}

export default function CyberTechPill({ name, config }) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = config || getTechColorConfig(name);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 select-none cursor-pointer py-1.5 transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-2.5px) scale(1.06)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Outer Neon Aura Bloom (Radiant ambient aura) */}
      <div
        className="absolute -inset-[2px] rounded-full overflow-hidden blur-[8px] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.85 : 0.35,
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] animate-beam-orbit pointer-events-none"
          style={{
            background: theme.spectrum,
            animationDuration: '4.5s',
          }}
        />
      </div>

      {/* Border Container: Dynamic Revolving Conic Beam */}
      <div
        className="relative p-[1.5px] rounded-full overflow-hidden transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `0 0 18px ${theme.glowColor}, 0 0 30px rgba(0,0,0,0.8)`
            : `0 0 10px ${theme.glowColor}, 0 2px 8px rgba(0, 0, 0, 0.5)`,
        }}
      >
        {/* Revolving Conic Gradient (Reveals 55% at rest, 100% on hover) */}
        <div
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] animate-beam-orbit pointer-events-none transition-opacity duration-300"
          style={{
            background: theme.spectrum,
            animationDuration: '4.5s',
            opacity: isHovered ? 1 : 0.55,
          }}
        />

        {/* Inner Dark Velvet Glass Body */}
        <div className="relative flex items-center gap-2.5 px-3.5 py-1.5 sm:py-2 rounded-full transition-all duration-300 bg-[#080812]/95 backdrop-blur-md z-10">
          {/* Glowing Brand LED Node */}
          <span
            className="w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0"
            style={{
              backgroundColor: theme.accent,
              boxShadow: isHovered
                ? `0 0 12px 2px ${theme.accent}`
                : `0 0 6px ${theme.accent}`,
              transform: isHovered ? 'scale(1.3)' : 'scale(1)',
            }}
          />

          {/* Label Text */}
          <span
            className="font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-300"
            style={{
              color: isHovered ? '#ffffff' : '#f4f4f5',
              fontWeight: isHovered ? 600 : 500,
              textShadow: isHovered ? `0 0 12px ${theme.accent}` : 'none',
            }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
