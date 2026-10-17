import React from 'react';

/**
 * LaserBadge: High-voltage animated border-beam capsule with continuous neon aura
 * Exactly matches the Hero Section's top badge lighting (Screenshot 2).
 */
export default function LaserBadge({ text, icon: Icon, className = '' }) {
  return (
    <div className={`relative inline-flex items-center group cursor-default select-none ${className}`}>
      {/* 1. Subtle Cyber Crimson Atmospheric Backlight Glow */}
      <div className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-gradient-to-r from-crimson/25 via-red-600/30 to-rose-600/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

      {/* 2. Rotating Ambient Conic Aura Sweep (Diffuse Outer Light) */}
      <div className="absolute -inset-1 sm:-inset-1.5 rounded-full overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-1/2 left-1/2 w-[350%] aspect-square laser-ambient-aura animate-beam-spin blur-md" />
      </div>

      {/* 3. Razor-Sharp Border-Beam Capsule Container */}
      <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden shadow-[0_0_14px_rgba(239,35,60,0.25)]">
        {/* 360° Continuous Rotating Laser Beam */}
        <div className="absolute top-1/2 left-1/2 w-[400%] aspect-square laser-beam-gradient animate-beam-spin pointer-events-none" />

        {/* 4. Inner Capsule Body with High-End Dark Glass Backdrop */}
        <div className="relative z-10 flex items-center gap-2.5 rounded-full bg-[#08080d]/95 dark:bg-[#08080d]/95 light:bg-white/95 px-4 sm:px-5 py-1.5 backdrop-blur-2xl transition-colors duration-300">
          {/* Pulsing Radar Beacon Dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_8px_#ef233c]" />
          </span>

          {/* Optional Icon */}
          {Icon && <Icon size={12} className="text-zinc-300 shrink-0" />}

          {/* Badge Text with Crisp Futuristic Font */}
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-100 dark:text-zinc-100 light:text-zinc-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
