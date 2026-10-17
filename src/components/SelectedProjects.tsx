import React, { useState, useEffect, useRef, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  ArrowUpRight,
  Github,
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  ExternalLink,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CurvedCylinderShowcase from './CurvedCylinderShowcase';
import FanningCardsShowcase from './FanningCardsShowcase';
import VerticalCurvedCardsShowcase from './VerticalCurvedCardsShowcase';
import AIAutomationPortalShowcase from './AIAutomationPortalShowcase';
import GemActionButton from './GemActionButton';
import CyberTechPill from './CyberTechPill';

// Category definitions matching user specification
const PROJECT_CATEGORIES = [
  {
    id: 'websites',
    label: 'MY WEBSITES',
    badge: 'WEB PLATFORMS',
    icon: Globe,
    desc: 'High-craft responsive web platforms, client portals, and e-commerce systems.',
  },
  {
    id: 'apps',
    label: 'MY APPS',
    badge: 'CLOUD & WEB APPS',
    icon: Smartphone,
    desc: 'Containerized cloud apps, real-time terminals, and full-stack software products.',
  },
  {
    id: 'automations',
    label: 'MY AUTOMATIONS',
    badge: 'AI & MULTI-AGENT SWARMS',
    icon: Cpu,
    desc: 'Autonomous multi-agent orchestration, RAG engines, and enterprise workflow swarms.',
  },
];

export default function SelectedProjects({
  initialCategory = 'websites',
  customTitle,
  customSubtitle,
  sectionId = 'projects',
  hideTabs = false,
}) {
  const { data, trackEvent } = usePortfolio();
  const rawProjects = data.projects && data.projects.length > 0 ? data.projects : [];

  // Active Category Tab: 'websites' | 'apps' | 'automations'
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Normalize project data with rich defaults and explicit category tags
  const allProjects = useMemo(() => {
    return rawProjects.map((p, idx) => {
      // Categorization heuristic:
      // Websites: Morning Mug, E-commerce, Web Builder, UI/UX, Identity
      // Apps: Cloud Expense Tracker, Crypto Quant Terminal, Health Vision, Ops Telemetry, Jetson IoT, DevSecOps
      // Automations: CrewAI Swarms, RAG Engine, Customer Copilot, Voice Agent, Smart Contract, Resume AI, Market Intel, Demand Oracle
      let catType = 'automations';
      const catLower = (p.category || '').toLowerCase();
      const titleLower = (p.title || '').toLowerCase();
      const tagsStr = Array.isArray(p.tags) ? p.tags.join(' ').toLowerCase() : '';

      if (
        p.id === '01' ||
        titleLower.includes('coffee') ||
        titleLower.includes('web builder') ||
        catLower.includes('e-commerce') ||
        catLower.includes('web')
      ) {
        catType = 'websites';
      } else if (
        p.id === '02' ||
        p.id === '05' ||
        p.id === '07' ||
        p.id === '09' ||
        p.id === '17' ||
        p.id === '18' ||
        catLower.includes('app') ||
        catLower.includes('terminal') ||
        catLower.includes('suite')
      ) {
        catType = 'apps';
      } else {
        catType = 'automations';
      }

      return {
        id: p.id || `0${idx + 1}`,
        title: p.title || 'UNTITLED PROJECT',
        badge: p.badge || 'PRODUCTION',
        category: p.category || 'AI ARCHITECTURE & SOFTWARE',
        categoryType: catType,
        description: p.description || 'Enterprise production software engineered for speed, scale, and resilience.',
        tags: Array.isArray(p.tags)
          ? p.tags
          : (typeof p.tags === 'string'
            ? p.tags.split(',').map((t) => t.trim()).filter(Boolean)
            : ['React', 'TypeScript', 'Tailwind CSS', 'AI Agents']),
        demoUrl: p.demoUrl || (p.altUrl ? p.altUrl : 'https://github.com/stl-sahadat'),
        altUrl: p.altUrl || null,
        githubUrl: p.githubUrl || 'https://github.com/stl-sahadat',
        image: p.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      };
    });
  }, [rawProjects]);

  // Filter projects strictly by the active category tab
  const projects = useMemo(() => {
    const filtered = allProjects.filter((p) => p.categoryType === activeCategory);
    return filtered.length > 0 ? filtered : allProjects;
  }, [allProjects, activeCategory]);

  // Collect unique keywords for the running marquee in the active category
  const allKeywords = useMemo(() => {
    const collected = Array.from(
      new Set(projects.flatMap((p) => (Array.isArray(p.tags) ? p.tags : [])))
    );
    return collected.length > 0
      ? collected
      : ['React 18', 'Vite', 'Tailwind CSS', 'Docker', 'Google Cloud Run', 'Python', 'FastAPI', 'CrewAI', 'LangChain', 'OpenAI GPT-4o', 'Multi-Agent Swarm', 'Vector DB', 'CI/CD'];
  }, [projects]);

  // 3D Cylinder Carousel Rotation State
  const [isPaused, setIsPaused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Reset active project index whenever switching category tabs
  const handleCategorySwitch = (catId) => {
    setActiveCategory(catId);
    setActiveIdx(0);
    trackEvent('Project Category Tab Switch', catId);
  };

  // References for interactive project numbers scroll capsule
  const capsuleRef = useRef(null);
  const numbersScrollRef = useRef(null);
  const numberBtnRefs = useRef([]);

  // Native non-passive wheel listener: Locks outer window scroll when mouse is inside capsule
  useEffect(() => {
    const el = capsuleRef.current;
    if (!el) return;

    const onCapsuleWheel = (e) => {
      if (numbersScrollRef.current) {
        numbersScrollRef.current.scrollLeft += e.deltaY * 0.8;
      }
    };

    el.addEventListener('wheel', onCapsuleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onCapsuleWheel);
    };
  }, []);

  // Auto-scroll active number pill strictly within the capsule box
  useEffect(() => {
    const currentBtn = numberBtnRefs.current[activeIdx];
    const container = numbersScrollRef.current;
    if (currentBtn && container) {
      const btnLeft = currentBtn.offsetLeft;
      const btnWidth = currentBtn.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth',
      });
    }
  }, [activeIdx, activeCategory]);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Rotate directly to target project index
  const rotateToIndex = (targetIdx) => {
    setActiveIdx(targetIdx);
  };

  // Memoized active change handler to prevent child effect restarts
  const handleActiveChange = React.useCallback((newIdx) => {
    setActiveIdx(newIdx);
  }, []);

  // Currently focused project (strictly follows real-time activeIdx)
  const currentProject = projects[activeIdx] || projects[0];

  // Dynamic Typewriter Ticker for the focused project description (optimized CPU updates)
  const [typedSummary, setTypedSummary] = useState('');
  useEffect(() => {
    if (!currentProject) return;
    const targetText = `${currentProject.description || ''}`;
    let charIdx = 0;
    setTypedSummary('');

    const interval = setInterval(() => {
      charIdx += 2;
      if (charIdx <= targetText.length) {
        setTypedSummary(targetText.slice(0, charIdx));
      } else {
        setTypedSummary(targetText);
        clearInterval(interval);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [currentProject?.id, activeCategory]);

  const activeCategoryMeta = PROJECT_CATEGORIES.find((c) => c.id === activeCategory) || PROJECT_CATEGORIES[0];

  return (
    <section id={sectionId} className="py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent relative overflow-hidden select-none">
      
      {/* Luxury Obsidian-Crimson Ambient Glow for Automations */}
      {activeCategory === 'automations' && (
        <div 
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            background: `
              radial-gradient(circle at 18% 30%, rgba(239, 35, 60, 0.08) 0%, transparent 55%),
              radial-gradient(circle at 82% 70%, rgba(225, 29, 72, 0.06) 0%, transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(15, 15, 30, 0.40) 0%, transparent 70%)
            `
          }}
        />
      )}

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-16 relative z-10">
        
        {/* ================================================================ */}
        {/* SECTION HEADER + LUXURY 3-DOMAIN SEGMENTED CONTROLS              */}
        {/* ================================================================ */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white light:text-zinc-900 leading-tight">
                {customTitle ? (
                  customTitle
                ) : (
                  <>
                    PROJECTS THAT{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                      SOLVE REAL PROBLEMS
                    </span>
                  </>
                )}
              </h2>
            </div>
            
            {/* Top Right: Status Badge */}
            <div className="flex items-center gap-2.5">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-crimson animate-pulse'}`} />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {projects.length} {activeCategoryMeta.badge} ({allProjects.length} TOTAL REPOSITORIES)
              </span>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 3-PAGE SEGMENTED SWITCHER: MY WEBSITES | MY APPS | MY AUTOMATIONS */}
          {/* ============================================================== */}
          {!hideTabs && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 sm:p-2.5 mb-10 rounded-2xl bg-[#090912]/90 dark:bg-[#090912]/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] light:shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 flex-wrap">
                {PROJECT_CATEGORIES.map((tab) => {
                  const IconComponent = tab.icon;
                  const isActive = activeCategory === tab.id;
                  const count = allProjects.filter((p) => p.categoryType === tab.id).length;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleCategorySwitch(tab.id)}
                      className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none ${
                        isActive
                          ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-[0_0_24px_rgba(239,35,60,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] border border-red-400/60 scale-[1.02]'
                          : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:bg-white/[0.07] dark:hover:bg-white/[0.07] light:hover:bg-black/[0.05] border border-transparent hover:border-white/10 dark:hover:border-white/10 light:hover:border-black/10'
                      }`}
                    >
                      <IconComponent size={15} className={isActive ? 'text-white' : 'text-crimson'} />
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                          isActive
                            ? 'bg-black/35 text-white'
                            : 'bg-white/10 dark:bg-white/10 light:bg-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-700'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Category Descriptor Pill */}
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.04] border border-white/10 dark:border-white/10 light:border-black/10 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                <span>{activeCategoryMeta.desc}</span>
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* ================================================================ */}
        {/* 2-COLUMN SPLIT STAGE: 3D CYLINDER (LEFT) + CLEAN HUD (RIGHT)     */}
        {/* ================================================================ */}
        <div key={activeCategory} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center animate-in fade-in duration-500">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: SHOWCASE (STACKED CAPSULES FOR AUTOMATIONS, FANNING FOR APPS, CYLINDER FOR WEBSITES) */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            {activeCategory === 'apps' ? (
              <FanningCardsShowcase
                projects={projects}
                activeIdx={activeIdx}
                onActiveChange={handleActiveChange}
                onPauseChange={(paused) => setIsPaused(paused)}
                onProjectClick={null}
              />
            ) : activeCategory === 'automations' ? (
              <VerticalCurvedCardsShowcase
                projects={projects}
                activeIdx={activeIdx}
                onActiveChange={handleActiveChange}
                onProjectClick={(proj) => {
                  const targetUrl = proj?.githubUrl || 'https://github.com/stl-sahadat';
                  window.open(targetUrl, '_blank', 'noopener,noreferrer');
                }}
              />
            ) : (
              <CurvedCylinderShowcase
                projects={projects}
                activeIdx={activeIdx}
                onActiveChange={handleActiveChange}
                onPauseChange={(paused) => setIsPaused(paused)}
                onProjectClick={(proj) => {
                  if (proj && proj.demoUrl && proj.demoUrl !== 'https://github.com/stl-sahadat') {
                    window.open(proj.demoUrl, '_blank', 'noopener,noreferrer');
                  } else if (proj && proj.githubUrl) {
                    window.open(proj.githubUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
              />
            )}
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: SLENDER COMPACT DETAILS (NO BOX, NO BLUR)        */}
          {/* ============================================================== */}
          <div className={activeCategory === 'automations' ? "lg:col-span-5 flex flex-col justify-center space-y-3 px-2 sm:px-3 py-2 relative bg-transparent border-none shadow-none max-w-[420px] ml-auto" : "lg:col-span-5 flex flex-col justify-center space-y-4 px-2 sm:px-4 py-2 relative bg-transparent border-none shadow-none lg:-translate-y-4"}>
            
            {/* Header: Left Project Counter & Right Glowing Capsule Pill at the Corner */}
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  {activeCategoryMeta.label} • {String(activeIdx + 1).padStart(2, '0')} OF {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              {/* Glowing Pill Capsule at the corner with Crimson Theme & Scroll Lock */}
              <div
                ref={capsuleRef}
                className="relative flex items-center h-8 sm:h-8.5 max-w-[140px] sm:max-w-[175px] rounded-full border border-crimson/40 hover:border-crimson bg-[#07070d]/90 shadow-[0_0_10px_rgba(239,35,60,0.25)] transition-all duration-300 px-1.5 group/pill"
                title="Scroll wheel to browse numbers // Click any number to jump to project"
              >
                {/* Inner Horizontal Scroll with Mouse Wheel & Touch swipe */}
                <div
                  ref={numbersScrollRef}
                  className="flex items-center gap-1 overflow-x-auto py-0.5 px-1 select-none scroll-smooth touch-pan-x"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {projects.map((p, idx) => {
                    const isCurrent = activeIdx === idx;
                    const displayNum = String(idx + 1).padStart(2, '0');
                    return (
                      <button
                        key={`${activeCategory}-${p.id || idx}`}
                        ref={(el) => {
                          numberBtnRefs.current[idx] = el;
                        }}
                        onClick={() => rotateToIndex(idx)}
                        className={`relative font-mono text-xs font-bold shrink-0 px-2.5 py-0.5 rounded-full transition-all duration-300 ease-out cursor-pointer flex items-center justify-center select-none ${
                          isCurrent
                            ? 'bg-crimson text-white shadow-[0_0_10px_rgba(239,35,60,0.5)] scale-105 z-10 font-bold'
                            : 'text-zinc-400 hover:text-white hover:bg-white/10 scale-95 opacity-70 hover:opacity-100 font-medium'
                        }`}
                        title={`Project ${displayNum}: ${p.title} (Click to view)`}
                      >
                        <span className="relative z-10">{displayNum}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Small Floating Title & Category */}
            <div className={activeCategory === 'automations' ? "max-w-[320px]" : ""}>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-crimson font-bold mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                <span>{currentProject?.category}</span>
              </div>
              
              <h3 className="font-bebas text-2xl sm:text-3xl text-white dark:text-white light:text-zinc-900 tracking-wide leading-tight">
                {currentProject?.title}
              </h3>
            </div>

            {/* Smooth Typewriter Work Narrative */}
            <div className={`min-h-[60px] flex items-start ${activeCategory === 'automations' ? "max-w-[320px]" : ""}`}>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                {typedSummary}
                <span className="inline-block w-1.5 h-3.5 bg-crimson ml-1 animate-pulse align-middle" />
              </p>
            </div>

            {/* Action Buttons: Live Website Link + GitHub Repository Button (3D Gem "Let's Talk" CTA Style) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* VISIT LIVE DEMO: only rendered here when NOT in apps (in apps it is located directly at the showcase controls) */}
              {activeCategory !== 'apps' && activeCategory !== 'automations' && currentProject?.demoUrl && currentProject?.demoUrl !== 'https://github.com/stl-sahadat' && (
                <GemActionButton
                  href={currentProject?.demoUrl}
                  onClick={() => trackEvent('Project Live Demo Click', currentProject?.title)}
                  icon="demo"
                  size="md"
                >
                  Visit Live Demo
                </GemActionButton>
              )}

              {currentProject?.githubUrl && (
                <GemActionButton
                  href={currentProject?.githubUrl}
                  onClick={() => trackEvent('Project GitHub Click', currentProject?.title)}
                  icon="github"
                  size="md"
                >
                  GITHUB REPO
                </GemActionButton>
              )}
            </div>

          </div>

        </div>

        {/* ================================================================ */}
        {/* INFINITE RUNNING KEYWORD & TECH STREAM (Flows Right to Left)     */}
        {/* ================================================================ */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            
            {/* Category Anchor: Clean Glass Cyber Tag */}
            <div className="shrink-0 select-none z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080812]/90 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider">
              <Code2 size={13} className="text-crimson" />
              <span>{activeCategoryMeta.label} TECH ARSENAL</span>
            </div>

            {/* Continuous Running Keyword Stream (Hover to Pause & Cyber Glow) */}
            <div
              className="flex-1 w-full overflow-hidden relative py-2"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
              }}
            >
              {/* Left & Right Edge Dissolve Shields */}
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

              <div className="animate-tech-marquee flex items-center gap-3 sm:gap-4 py-1.5 [animation-duration:85s]">
                {[...allKeywords, ...allKeywords].map((keyword, kIdx) => (
                  <CyberTechPill key={`${keyword}-${kIdx}`} name={keyword} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
