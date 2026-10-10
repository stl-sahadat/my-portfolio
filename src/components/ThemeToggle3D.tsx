import React from 'react';

export default function ThemeToggle3D({ theme, toggleTheme, size = 'normal' }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="group relative inline-flex items-center cursor-pointer select-none focus:outline-none transition-transform active:scale-95"
    >
      {/* Soft Ambient Under-Glow / Cast Shadow */}
      <div
        className={`absolute -inset-1 rounded-full blur-md transition-opacity duration-500 pointer-events-none ${
          isDark ? 'bg-black/60 opacity-60' : 'bg-slate-400/40 opacity-50'
        }`}
      ></div>

      {/* Main Track Capsule (Exact neumorphic / glass styling from reference images) */}
      <div
        className={`relative flex items-center justify-between h-[36px] w-[102px] sm:h-[38px] sm:w-[110px] rounded-full px-3.5 transition-all duration-500 overflow-hidden border ${
          isDark
            ? 'bg-[#15151c] border-white/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8),_inset_0_-1px_2px_rgba(255,255,255,0.05)]'
            : 'bg-[#9aa0a6] border-white/40 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2),_inset_0_-1px_2px_rgba(255,255,255,0.5)]'
        }`}
      >
        {/* "Dark" Text Label (Visible on left when Dark mode is active) */}
        <span
          className={`font-outfit font-semibold text-xs tracking-tight select-none transition-all duration-500 ${
            isDark
              ? 'opacity-90 translate-x-0 text-zinc-300'
              : 'opacity-0 -translate-x-3 pointer-events-none text-transparent'
          }`}
        >
          Dark
        </span>

        {/* "Light" Text Label (Visible on right when Light mode is active) */}
        <span
          className={`font-outfit font-semibold text-xs tracking-tight select-none ml-auto transition-all duration-500 ${
            !isDark
              ? 'opacity-95 translate-x-0 text-white'
              : 'opacity-0 translate-x-3 pointer-events-none text-transparent'
          }`}
        >
          Light
        </span>
      </div>

      {/* 3D Floating Glass Orb / Dome (Overhanging 3D sphere from reference images) */}
      <div
        className={`absolute -top-[3px] -left-[2px] w-[42px] h-[42px] sm:w-[44px] sm:h-[44px] rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] z-10 ${
          isDark
            ? 'translate-x-[62px] sm:translate-x-[68px]'
            : 'translate-x-0'
        }`}
      >
        {/* Spherical 3D Glass Layer with Realistic Specular Highlight */}
        <div
          className={`relative w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-b from-[#2c2d3a] via-[#1a1b24] to-[#0f1017] border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.8),_inset_0_2px_4px_rgba(255,255,255,0.4),_inset_0_-2px_4px_rgba(0,0,0,0.8)]'
              : 'bg-gradient-to-b from-white/90 via-[#d1d5db] to-[#9ca3af] border border-white/90 shadow-[0_8px_18px_rgba(0,0,0,0.3),_inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(0,0,0,0.15)]'
          }`}
        >
          {/* Top Edge Arc Glass Glare */}
          <div className="absolute top-[2px] inset-x-2 h-[10px] rounded-t-full bg-gradient-to-b from-white/60 to-transparent pointer-events-none opacity-80"></div>

          {/* Glowing Center Icon (Sun for Light, Crescent Moon for Dark) */}
          {isDark ? (
            /* Radiant White Crescent Moon (matches media_1791167219105.png) */
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white fill-white transition-all duration-500 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.95)]"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            /* Radiant Glowing Sun with Rays (matches media_1791167216169.png) */
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-all duration-500 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.95)]"
            >
              <circle cx="12" cy="12" r="4" fill="white" />
              <line x1="12" y1="2" x2="12" y2="4" stroke="white" />
              <line x1="12" y1="20" x2="12" y2="22" stroke="white" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="white" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="white" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}
