import React, { useState, useEffect } from 'react';
import { Home, User, Layers, Cpu, Briefcase, BookOpen, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';

// Brilliant Prismatic Crystal Diamond Gem Icon (Vibrant Cyan, Sapphire & Prismatic Fire)
function Diamond3DIcon() {
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      {/* Ambient Diamond Cyan/Violet Glow */}
      <div className="absolute -inset-1 rounded-full bg-cyan-400/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 sm:w-5.5 sm:h-5.5 relative z-10 shrink-0 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.85)]"
      >
        <defs>
          {/* Top Crown Facet: Pure Diamond White to Crystal Ice */}
          <linearGradient id="diamondCrown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>

          {/* Left Pavilion: Vibrant Aqua to Electric Cyan */}
          <linearGradient id="diamondLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Center Pavilion: Brilliant Specular Crystal Core */}
          <linearGradient id="diamondCenter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Right Pavilion: Royal Sapphire to Prismatic Violet Fire */}
          <linearGradient id="diamondRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Crown Outer Facet */}
        <polygon
          points="6,5 18,5 22,10 2,10"
          fill="url(#diamondCrown)"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />

        {/* Flat Table (Top Flat Face of Diamond) */}
        <polygon
          points="6,5 18,5 15,10 9,10"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Lower Pavilion Facets (Sharp Diamond Cutting) */}
        <polygon
          points="2,10 12,21 7,10"
          fill="url(#diamondLeft)"
          stroke="#7dd3fc"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <polygon
          points="7,10 12,21 17,10"
          fill="url(#diamondCenter)"
          stroke="#ffffff"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <polygon
          points="17,10 12,21 22,10"
          fill="url(#diamondRight)"
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

        {/* Internal Specular Core Glint */}
        <circle cx="12" cy="11.5" r="1" fill="#ffffff" className="animate-ping" opacity="0.75" />
      </svg>
    </div>
  );
}

export default function AgencyNavbar() {
  const { data, currentPage, navigateToPage } = usePortfolio();
  const personal = data?.personal || portfolioData.personal;

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  // Enforce Clean Dark Mode by Default
  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Real-Time Scroll Spy: Updates active section & URL in address bar with NO HASH (#)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        // Sections listed in order from top to bottom
        const sections = [
          { id: 'contact', page: 'contact' },
          { id: 'blog', page: 'blog' },
          { id: 'experience', page: 'experience' },
          { id: 'skills', page: 'skills' },
          { id: 'automations', page: 'projects' },
          { id: 'apps', page: 'projects' },
          { id: 'websites', page: 'projects' },
          { id: 'projects', page: 'projects' },
          { id: 'about', page: 'about' },
        ];

        let current = 'home';
        const scrollPosition = window.scrollY + 280;

        // If at the very top (first 160px)
        if (window.scrollY < 160) {
          current = 'home';
        }
        // If at the bottom of the document
        else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
          current = 'contact';
        } else {
          for (const item of sections) {
            const el = document.getElementById(item.id);
            if (el && el.offsetTop <= scrollPosition) {
              current = item.page;
              break;
            }
          }
        }

        setActiveSection(current);

        // REAL-TIME URL UPDATE IN ADDRESS BAR: Clean slashes only, NO # HASHTAGS
        const targetUrl = current === 'home' ? '/' : `/${current}`;
        if (window.location.pathname !== targetUrl && (!window.location.hash || window.location.hash !== '#admin')) {
          window.history.replaceState({ page: current }, '', targetUrl);
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run on initial mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Unified Handler: Smooth scroll to any section (including Contact) with clean URL
  const handleItemClick = (page: string) => {
    const targetElementId = page === 'projects' ? (document.getElementById('projects') ? 'projects' : 'websites') : page;
    const targetUrl = page === 'home' ? '/' : `/${page}`;

    // Push clean URL to browser address bar (NO # HASHTAGS)
    if (window.location.pathname !== targetUrl && (!window.location.hash || window.location.hash !== '#admin')) {
      window.history.pushState({ page }, '', targetUrl);
    }

    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const el = document.getElementById(targetElementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(page);
      }
    }
  };

  // Multi-Page & Continuous Navigation Items
  const navItems = [
    { label: 'Home', page: 'home', icon: Home },
    { label: 'About', page: 'about', icon: User },
    { label: 'Projects', page: 'projects', icon: Layers },
    { label: 'Skills', page: 'skills', icon: Cpu },
    { label: 'Experience', page: 'experience', icon: Briefcase },
    { label: 'Blog', page: 'blog', icon: BookOpen },
    { label: 'Contact', page: 'contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-12 pt-3 sm:pt-5">
        
        {/* Clean Floating Navbar Container */}
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between px-2 sm:px-4 py-2 transition-all duration-300 bg-transparent border-none shadow-none ${
            scrolled ? 'py-1.5 backdrop-blur-[2px]' : ''
          }`}
        >
          {/* LEFT: Sahadat Vai Circular Profile Avatar with Glowing Red Ring */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2.5 group select-none text-left cursor-pointer"
            >
              {/* Profile Avatar with Red Ring Border */}
              <div className="relative rounded-full transition-transform duration-300 group-hover:scale-105 shadow-[0_0_18px_rgba(220,38,38,0.7)] p-[2px] bg-gradient-to-tr from-red-600 to-rose-500">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={personal.avatarImage || '/sahadat-avatar.jpg'}
                    alt={personal.name || portfolioData.personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-outfit font-extrabold text-sm sm:text-base tracking-wider text-white dark:text-white light:text-zinc-900 uppercase group-hover:text-crimson transition-colors">
                    {personal.shortName || portfolioData.personal.shortName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#ef233c]"></span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase hidden sm:block">
                  AI ARCHITECT
                </span>
              </div>
            </button>
          </div>

          {/* CENTER: Clean Frosted Glass Pill Navigation Buttons with Dynamic Scroll-Spy Highlight */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                currentPage === 'contact'
                  ? item.page === 'contact'
                  : activeSection === item.page;

              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.page)}
                  className={`group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-outfit uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-950/70 via-[#15060a] to-red-950/70 backdrop-blur-xl border border-red-500/70 shadow-[0_0_20px_rgba(239,35,60,0.45),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_0_12px_rgba(239,35,60,0.25)] scale-[1.04]'
                      : 'text-zinc-300 bg-white/[0.05] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.25)] hover:bg-white/[0.12] hover:border-white/35 hover:text-white hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Sweeping Shimmer Reflection on Active / Hover */}
                  <span className={`absolute inset-0 -translate-x-[150%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent ${isActive ? 'via-red-400/25 animate-pulse' : 'group-hover:translate-x-[250%] via-white/20'} to-transparent pointer-events-none`} />

                  {/* Luminous Pulsing Ruby Radar Indicator for Active Item */}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500 shadow-[0_0_8px_#ef233c]" />
                    </span>
                  )}

                  <Icon
                    size={13}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-red-400 drop-shadow-[0_0_6px_rgba(239,35,60,0.9)] scale-110'
                        : 'text-zinc-400 group-hover:text-red-400 group-hover:scale-105'
                    }`}
                  />
                  <span className="relative z-10">{item.label}</span>

                  {/* Active Laser Horizon Underline Flare */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef233c] animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: 3D Gem "Let's Talk" CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">

            {/* 3D GEM "LET'S TALK" BUTTON (Matching media_1791171654132.png with hover shimmer & sparkle animation) */}
            <a
              href="https://wa.me/8801944576159?text=Hi%20Sahadat%20vai%2C%20I%20would%20like%20to%20discuss%20an%20AI%20architecture%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-5 sm:px-6 py-2 rounded-full overflow-hidden border border-white/30 dark:border-white/35 bg-gradient-to-r from-[#171722] via-[#101018] to-[#1c1220] text-white text-xs sm:text-sm font-outfit font-bold tracking-wide transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.35),0_0_25px_rgba(220,38,38,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.75),0_0_30px_rgba(168,85,247,0.65),inset_0_1px_2px_rgba(255,255,255,0.8)]"
            >
              {/* Sweeping Holographic Shimmer Ray on Hover */}
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"></div>

              {/* 3D Metallic Diamond Gem Icon */}
              <Diamond3DIcon />

              {/* Button Label */}
              <span className="relative z-10 text-white font-bold tracking-wide">
                Let's Talk
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-full text-zinc-300 dark:text-zinc-300 light:text-zinc-800 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

      </div>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden mx-4 mt-2 p-6 rounded-3xl bg-[#09090e]/95 dark:bg-[#09090e]/95 light:bg-white/98 backdrop-blur-3xl border border-white/15 dark:border-white/15 light:border-black/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 dark:border-white/10 light:border-black/10">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              NAVIGATION
            </span>
          </div>

          <nav className="flex flex-col gap-2.5">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive =
                currentPage === 'contact'
                  ? item.page === 'contact'
                  : activeSection === item.page;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    handleItemClick(item.page);
                    setMobileOpen(false);
                  }}
                  className={`relative flex items-center justify-between py-2.5 px-4 rounded-full border font-outfit text-base font-bold uppercase transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-red-950/80 via-[#140609] to-red-950/80 text-white border-red-500/70 shadow-[0_0_18px_rgba(239,35,60,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]'
                      : 'bg-white/[0.05] border-white/15 text-zinc-200 hover:text-red-400 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5 relative z-10">
                    {isActive && (
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef233c]" />
                      </span>
                    )}
                    <Icon size={16} className={isActive ? 'text-red-400 drop-shadow-[0_0_6px_rgba(239,35,60,0.9)]' : 'text-crimson'} />
                    <span>{item.label}</span>
                  </div>
                  <span className={`text-xs font-mono relative z-10 ${isActive ? 'text-red-300' : 'text-zinc-500'}`}>0{idx + 1}</span>

                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef233c] animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-5 border-t border-white/10 dark:border-white/10 light:border-black/10">
            <a
              href="https://wa.me/8801944576159"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full overflow-hidden bg-gradient-to-r from-[#171722] via-[#101018] to-[#1c1220] border border-white/30 text-white font-outfit text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              {/* Sweeping Holographic Shimmer Ray on Hover */}
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <Diamond3DIcon />
              <span className="relative z-10">Let's Talk</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
