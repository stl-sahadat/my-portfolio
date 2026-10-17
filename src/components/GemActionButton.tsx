import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * 1. 3D Metallic Diamond Gem Icon
 * Signature crystal gem strictly for "Let's Talk" CTA
 */
export function Diamond3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Diamond Cyan/Violet Glow */}
      <div className="absolute -inset-1 rounded-full bg-cyan-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]`}
      >
        <defs>
          <linearGradient id="gemCrown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
          <linearGradient id="gemLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="gemCenter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="gemRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Crown Outer Facet */}
        <polygon
          points="6,5 18,5 22,10 2,10"
          fill="url(#gemCrown)"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />

        {/* Flat Table */}
        <polygon
          points="6,5 18,5 15,10 9,10"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Lower Pavilion Facets */}
        <polygon
          points="2,10 12,21 7,10"
          fill="url(#gemLeft)"
          stroke="#7dd3fc"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <polygon
          points="7,10 12,21 17,10"
          fill="url(#gemCenter)"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <polygon
          points="17,10 12,21 22,10"
          fill="url(#gemRight)"
          stroke="#818cf8"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Corner 4-Point Specular Star Twinkle (✦) */}
        <path
          d="M17.5 2 L18.2 4.2 L20.5 5 L18.2 5.8 L17.5 8 L16.8 5.8 L14.5 5 L16.8 4.2 Z"
          fill="#ffffff"
          className="animate-pulse"
        />

        {/* Internal Specular Glint */}
        <circle cx="12" cy="11.5" r="1" fill="#ffffff" className="animate-ping" opacity="0.75" />
      </svg>
    </div>
  );
}

/**
 * 2. 3D Holographic Globe & Radar Pulse Icon
 * Specifically designed for "Visit Live Demo"
 */
export function LiveDemo3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Emerald/Cyan Live Pulse Glow */}
      <div className="absolute -inset-1 rounded-full bg-emerald-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-12 drop-shadow-[0_0_8px_rgba(52,211,153,0.85)]`}
      >
        <defs>
          <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* Outer Globe Circle */}
        <circle cx="12" cy="12" r="9" stroke="url(#globeGrad)" strokeWidth="1.6" />

        {/* Latitude Ellipse */}
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.85" />

        {/* Longitude Ellipse */}
        <ellipse cx="12" cy="12" rx="4.2" ry="9" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.85" />

        {/* Center Live Radar Signal Pulse Point */}
        <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
        <circle cx="12" cy="12" r="4.2" stroke="#6ee7b7" strokeWidth="1.2" className="animate-ping" opacity="0.6" />
      </svg>
    </div>
  );
}

/**
 * 3. 3D Metallic GitHub Octocat Silhouette Icon
 * Specifically designed for "GITHUB REPO"
 */
export function Github3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Silver/Violet Aura */}
      <div className="absolute -inset-1 rounded-full bg-violet-400/35 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:-rotate-6 drop-shadow-[0_0_8px_rgba(192,132,252,0.7)]`}
      >
        <defs>
          <linearGradient id="githubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
        <path
          fill="url(#githubGrad)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    </div>
  );
}

/**
 * 4. 3D Isometric Architectural Layers Stack Icon
 * Specifically designed for "VIEW MY WORK"
 */
export function Work3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Crimson / Red Laser Flare */}
      <div className="absolute -inset-1 rounded-full bg-red-500/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(239,35,60,0.85)]`}
      >
        <defs>
          <linearGradient id="workTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fca5a5" />
            <stop offset="100%" stopColor="#ef233c" />
          </linearGradient>
          <linearGradient id="workMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>

        {/* Isometric Layered Architecture Platter 1 (Top) */}
        <polygon points="12,2.5 22,8 12,13.5 2,8" fill="url(#workTop)" stroke="#ffffff" strokeWidth="0.6" strokeLinejoin="round" />

        {/* Isometric Layered Architecture Platter 2 (Middle) */}
        <polyline points="2,12.5 12,18 22,12.5" stroke="url(#workMid)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Isometric Layered Architecture Platter 3 (Bottom) */}
        <polyline points="2,16.8 12,22 22,16.8" stroke="#ef233c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Specular Core Beacon on Top Plate */}
        <circle cx="12" cy="8" r="1.3" fill="#ffffff" className="animate-pulse" />
      </svg>
    </div>
  );
}

/**
 * 5. 3D WhatsApp Messenger Icon
 * Specifically designed for "SEND DIRECT INQUIRY ON WHATSAPP"
 */
export function WhatsApp3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Emerald Neon Glow */}
      <div className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:-rotate-6 drop-shadow-[0_0_8px_rgba(37,211,102,0.9)]`}
      >
        <defs>
          <linearGradient id="waGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#25d366" />
            <stop offset="100%" stopColor="#128c7e" />
          </linearGradient>
        </defs>

        {/* WhatsApp Chat Speech Bubble */}
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.51 5.29L2.3 21.5l4.35-1.18C8.11 21.36 9.99 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
          fill="url(#waGrad)"
          stroke="#ffffff"
          strokeWidth="0.5"
        />

        {/* WhatsApp Phone Receiver Glyph */}
        <path
          d="M16.4 14.5c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.76 2.68 4.25 3.76.59.26 1.06.41 1.42.52.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.18-.06-.11-.23-.18-.48-.3z"
          fill="#ffffff"
        />

        {/* Specular Core Glint */}
        <circle cx="16" cy="6" r="0.9" fill="#ffffff" className="animate-pulse" />
      </svg>
    </div>
  );
}

/**
 * 6. 3D LinkedIn Emblem Icon
 * Specifically designed for "CONNECT ON LINKEDIN"
 */
export function LinkedIn3DIcon({ className = "w-5 h-5 sm:w-5.5 sm:h-5.5" }) {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Sapphire / Blue Glow */}
      <div className="absolute -inset-1 rounded-full bg-blue-500/40 blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${className} relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.85)]`}
      >
        <defs>
          <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {/* Rounded Square Emblem */}
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#liGrad)" stroke="#ffffff" strokeWidth="0.5" />

        {/* Letter 'i' */}
        <circle cx="7" cy="7.5" r="1.5" fill="#ffffff" />
        <rect x="5.5" y="10.5" width="3" height="8" rx="0.8" fill="#ffffff" />

        {/* Letter 'n' */}
        <path
          d="M11 10.5h2.8v1.2c.4-.7 1.4-1.4 2.8-1.4 2.1 0 3.4 1.3 3.4 3.7V18.5H17v-4.2c0-1.2-.5-1.9-1.5-1.9-1 0-1.6.7-1.6 1.9v4.2H11v-8z"
          fill="#ffffff"
        />

        {/* Glint */}
        <circle cx="19" cy="5" r="0.8" fill="#ffffff" className="animate-pulse" />
      </svg>
    </div>
  );
}

/**
 * GemActionButton:
 * Standardized Luxury Action Button matching the "Let's Talk" CTA aesthetic:
 * - Sweeping holographic shimmer ray on hover
 * - Bespoke 3D metallic/crystal contextual icon (no emojis!)
 * - Luxury obsidian/noir gradient with purple & crimson glow (or emerald/neon glow for WhatsApp)
 * - Tactile 3D bevel and scale physics
 */
export default function GemActionButton({
  href,
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  icon = 'gem', // 'gem' | 'demo' | 'globe' | 'github' | 'work' | 'layers' | 'whatsapp' | 'chat' | 'linkedin' | 'none' | ReactElement
  variant, // 'default' | 'whatsapp'
  showArrow = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  title,
  type = 'button',
  disabled = false,
}: {
  href?: string;
  onClick?: (e?: any) => void;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: string | React.ReactNode;
  variant?: 'default' | 'whatsapp';
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) {
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm',
    lg: 'px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base',
  };

  const isWhatsApp = variant === 'whatsapp' || icon === 'whatsapp' || icon === 'chat';

  const renderIcon = () => {
    // If a custom React node is passed
    if (React.isValidElement(icon)) {
      return icon;
    }

    switch (icon) {
      case 'demo':
      case 'globe':
      case 'live':
        return <LiveDemo3DIcon />;
      case 'github':
        return <Github3DIcon />;
      case 'work':
      case 'layers':
      case 'portfolio':
        return <Work3DIcon />;
      case 'whatsapp':
      case 'chat':
        return <WhatsApp3DIcon />;
      case 'linkedin':
        return <LinkedIn3DIcon />;
      case 'none':
        return null;
      case 'gem':
      default:
        return <Diamond3DIcon />;
    }
  };

  const baseClasses = isWhatsApp
    ? `
      group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden
      border border-emerald-400/40 hover:border-emerald-300
      bg-gradient-to-r from-[#0b2416] via-[#081a11] to-[#0a2e1c]
      text-white font-outfit font-bold tracking-wide
      transition-all duration-300 hover:scale-105 active:scale-95
      shadow-[0_0_12px_rgba(37,211,102,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]
      hover:shadow-[0_0_20px_rgba(37,211,102,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]
      cursor-pointer select-none whitespace-nowrap
      ${sizeClasses[size] || sizeClasses.md}
      ${className}
    `
    : `
      group relative inline-flex items-center gap-2.5 rounded-full overflow-hidden
      border border-white/20 hover:border-crimson/50
      bg-gradient-to-r from-[#14141e] via-[#0d0d14] to-[#181116]
      text-white font-outfit font-bold tracking-wide
      transition-all duration-300 hover:scale-105 active:scale-95
      shadow-[0_0_12px_rgba(220,38,38,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]
      hover:shadow-[0_0_20px_rgba(220,38,38,0.5),inset_0_1px_2px_rgba(255,255,255,0.6)]
      cursor-pointer select-none whitespace-nowrap
      ${sizeClasses[size] || sizeClasses.md}
      ${className}
    `;

  const content = (
    <>
      {/* Sweeping Holographic Shimmer Ray on Hover */}
      <div className={`absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent ${isWhatsApp ? 'via-emerald-300/30' : 'via-white/25'} to-transparent pointer-events-none`} />

      {/* Leading Contextual 3D Icon */}
      {renderIcon()}

      {/* Button Label Text */}
      <span className="relative z-10 text-white font-bold tracking-wide">
        {children}
      </span>

      {/* Trailing Action Arrow */}
      {showArrow && (
        <ArrowUpRight
          size={14}
          className={`relative z-10 ${isWhatsApp ? 'text-emerald-300 group-hover:text-emerald-100' : 'text-zinc-300 group-hover:text-white'} transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0`}
        />
      )}
    </>
  );

  if (href) {
    const isAnchor = href.startsWith('#');
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (isAnchor && !e.defaultPrevented) {
        e.preventDefault();
        const targetId = href.replace(/^#/, '');
        const targetUrl = targetId === 'home' ? '/' : `/${targetId}`;
        window.history.pushState({ page: targetId }, '', targetUrl);
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    return (
      <a
        href={isAnchor ? `/${href.replace(/^#/, '')}` : href}
        target={isAnchor ? undefined : target}
        rel={isAnchor ? undefined : rel}
        onClick={handleAnchorClick}
        title={title}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
