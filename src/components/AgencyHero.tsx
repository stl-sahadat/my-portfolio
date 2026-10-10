import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import AnimatedMetricCard from './AnimatedMetricCard';
import LaserBadge from './LaserBadge';
import GemActionButton from './GemActionButton';

// Individual Cyber Tech Marquee Pill with Executive Luxury Design (Subtle on rest, Spectacular on hover)
function TechMarqueePill({ tech }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 select-none cursor-pointer py-1.5 transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-2.5px) scale(1.06)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Outer Neon Aura Bloom */}
      <div
        className="absolute -inset-[2px] rounded-full overflow-hidden blur-[8px] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.85 : 0.35,
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] animate-beam-orbit pointer-events-none"
          style={{
            background: tech.spectrum,
            animationDuration: '5s',
          }}
        />
      </div>

      {/* Border Container: Dynamic Revolving Conic Beam */}
      <div
        className="relative p-[1.5px] rounded-full overflow-hidden transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `0 0 18px ${tech.glowColor}, 0 0 30px rgba(0,0,0,0.8)`
            : `0 0 10px ${tech.glowColor}, 0 2px 8px rgba(0, 0, 0, 0.4)`,
        }}
      >
        {/* Revolving Conic Gradient (55% visible on rest, 100% on hover) */}
        <div
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] animate-beam-orbit pointer-events-none transition-opacity duration-300"
          style={{
            background: tech.spectrum,
            animationDuration: '5s',
            opacity: isHovered ? 1 : 0.55,
          }}
        />

        {/* Inner Dark Velvet Glass Pill */}
        <div
          className="relative flex items-center gap-2.5 px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 bg-[#080812]/95 backdrop-blur-md z-10"
        >
          {/* Glowing Brand LED Node */}
          <span
            className="w-1.5 h-1.5 rounded-full transition-all duration-300 shrink-0"
            style={{
              backgroundColor: tech.accent,
              boxShadow: isHovered
                ? `0 0 10px 2px ${tech.accent}`
                : `0 0 6px ${tech.accent}`,
              transform: isHovered ? 'scale(1.3)' : 'scale(1)',
            }}
          />

          {/* Label Text */}
          <span
            className="font-mono text-xs tracking-wider whitespace-nowrap transition-colors duration-300"
            style={{
              color: isHovered ? '#ffffff' : '#d4d4d8',
              fontWeight: isHovered ? 600 : 500,
            }}
          >
            {tech.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AgencyHero() {
  const { data } = usePortfolio();
  const personal = data.personal || portfolioData.personal;

  // Roles list cycled serially via cyber typewriter animation
  const roles = (personal.roles && personal.roles.length > 0)
    ? personal.roles
    : [
        'AI Agent Architect',
        'Autonomous Systems Engineer',
        'Full-Stack AI Developer',
        'Enterprise Prompt Engineer',
        'Multi-Agent Orchestrator',
      ];

  // Core technologies & AI ecosystem tags with individual revolving multi-color gradient spectrums
  const coreTechs = [
    {
      name: 'OpenAI GPT-4o',
      accent: '#10b981',
      spectrum: 'conic-gradient(from 0deg, #10b981, #06b6d4, #3b82f6, #059669, #10b981)',
      glowColor: 'rgba(16, 185, 129, 0.45)',
    },
    {
      name: 'Anthropic Claude',
      accent: '#f59e0b',
      spectrum: 'conic-gradient(from 0deg, #f59e0b, #f97316, #ef4444, #eab308, #f59e0b)',
      glowColor: 'rgba(245, 158, 11, 0.45)',
    },
    {
      name: 'CrewAI Orchestration',
      accent: '#ef233c',
      spectrum: 'conic-gradient(from 0deg, #ef233c, #ec4899, #a855f7, #f43f5e, #ef233c)',
      glowColor: 'rgba(239, 35, 60, 0.45)',
    },
    {
      name: 'LangChain',
      accent: '#22c55e',
      spectrum: 'conic-gradient(from 0deg, #22c55e, #10b981, #06b6d4, #84cc16, #22c55e)',
      glowColor: 'rgba(34, 197, 94, 0.45)',
    },
    {
      name: 'LangGraph',
      accent: '#8b5cf6',
      spectrum: 'conic-gradient(from 0deg, #8b5cf6, #6366f1, #3b82f6, #c084fc, #8b5cf6)',
      glowColor: 'rgba(139, 92, 246, 0.45)',
    },
    {
      name: 'Google Cloud Run',
      accent: '#3b82f6',
      spectrum: 'conic-gradient(from 0deg, #3b82f6, #00f0ff, #0284c7, #60a5fa, #3b82f6)',
      glowColor: 'rgba(59, 130, 246, 0.45)',
    },
    {
      name: 'Python & FastAPI',
      accent: '#eab308',
      spectrum: 'conic-gradient(from 0deg, #eab308, #14b8a6, #10b981, #f59e0b, #eab308)',
      glowColor: 'rgba(234, 179, 8, 0.45)',
    },
    {
      name: 'Autonomous Multi-Agent',
      accent: '#f43f5e',
      spectrum: 'conic-gradient(from 0deg, #f43f5e, #ef233c, #8b5cf6, #d946ef, #f43f5e)',
      glowColor: 'rgba(244, 63, 94, 0.45)',
    },
    {
      name: 'React 18 & Vite',
      accent: '#06b6d4',
      spectrum: 'conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #38bdf8, #06b6d4)',
      glowColor: 'rgba(6, 182, 212, 0.45)',
    },
    {
      name: 'Vector DB & RAG',
      accent: '#d946ef',
      spectrum: 'conic-gradient(from 0deg, #d946ef, #8b5cf6, #06b6d4, #ec4899, #d946ef)',
      glowColor: 'rgba(217, 70, 239, 0.45)',
    },
    {
      name: 'Docker Containers',
      accent: '#0284c7',
      spectrum: 'conic-gradient(from 0deg, #0284c7, #3b82f6, #00f0ff, #1d4ed8, #0284c7)',
      glowColor: 'rgba(2, 132, 199, 0.45)',
    },
    {
      name: 'DeepSeek AI',
      accent: '#2563eb',
      spectrum: 'conic-gradient(from 0deg, #2563eb, #00f0ff, #3b82f6, #1d4ed8, #2563eb)',
      glowColor: 'rgba(37, 99, 235, 0.45)',
    },
    {
      name: 'Prompt Architecture',
      accent: '#ef233c',
      spectrum: 'conic-gradient(from 0deg, #ef233c, #fb7185, #f59e0b, #e11d48, #ef233c)',
      glowColor: 'rgba(239, 35, 60, 0.45)',
    },
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // High-Speed Cyber Typewriter: Snappy entrance, optimal reading pause, and instant transition
  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Snappy typing phase: ~25ms per letter (fast futuristic tech cadence)
      if (displayText.length < currentFullRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        }, 25);
      } else {
        // Full word typed: brief comfortable reading pause (~1100ms)
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1100);
      }
    } else {
      // Ultra-fast backspace deleting phase: ~14ms per letter
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        }, 14);
      } else {
        // Word cleared: brief 120ms delay then immediately cycle to next title
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 120);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 sm:pt-40 2xl:pt-44 pb-12 flex flex-col justify-between overflow-hidden">
      
      {/* Hero Content Container */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16 w-full relative z-10 my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Smooth Entrances (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* 1. Dynamic Animated Border-Beam Capsule with Continuous Neon Aura (Reference Match) */}
            <div className="mb-4 sm:mb-5 flex items-center justify-start animate-in fade-in duration-700">
              <div className="relative inline-flex items-center group cursor-default select-none">
                {/* Deep Ambient Purple/Violet Atmospheric Backlight Glow */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-600/50 to-pink-500/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Rotating Ambient Conic Aura Sweep (Diffuse Outer Light matching reference) */}
                <div className="absolute -inset-1 sm:-inset-1.5 rounded-full overflow-hidden pointer-events-none opacity-85">
                  <div className="absolute top-1/2 left-1/2 w-[350%] aspect-square laser-ambient-aura animate-beam-spin blur-md" />
                </div>

                {/* Razor-Sharp Border-Beam Capsule Container */}
                <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden shadow-[0_0_24px_rgba(139,92,246,0.35)]">
                  {/* 360° Continuous Rotating Laser Beam */}
                  <div className="absolute top-1/2 left-1/2 w-[400%] aspect-square laser-beam-gradient animate-beam-spin pointer-events-none" />

                  {/* Inner Capsule Body with High-End Dark Glass Backdrop */}
                  <div className="relative z-10 flex items-center gap-2.5 rounded-full bg-[#08080d]/95 dark:bg-[#08080d]/95 light:bg-white/95 px-4 sm:px-5 py-1.5 backdrop-blur-2xl transition-colors duration-300">
                    {/* Pulsing Radar Beacon Dot */}
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-80"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_8px_#ef233c]"></span>
                    </span>

                    {/* Badge Text with Crisp Futuristic Font */}
                    <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-100 dark:text-zinc-100 light:text-zinc-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      BUILDING AUTONOMOUS AI & MODERN SYSTEMS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Micro Kicker with Refined Typography & Color Grading */}
            <div className="overflow-hidden mb-2.5">
              <div className="inline-flex items-center gap-2.5 animate-kicker-reveal">
                {/* Glowing Ruby Core Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-red-600 to-rose-400 shadow-[0_0_10px_#ef233c]"></span>
                </span>

                {/* Refined Font & Color Graded Typography */}
                <span className="text-xs sm:text-sm font-outfit font-bold uppercase tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-rose-400 drop-shadow-[0_0_14px_rgba(239,35,60,0.35)]">
                  HELLO, I AM
                </span>
              </div>
            </div>

            {/* 3. Massive Condensed Headline with Stately Word-by-Word Reveal */}
            <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[7.4rem] 2xl:text-[9.2rem] uppercase leading-[0.85] tracking-tight mb-3 select-none group">
              {/* Row 1: MD SAHADAT with Staggered Slide-Up */}
              <div className="overflow-hidden flex flex-wrap items-baseline gap-x-3 sm:gap-x-5 py-1">
                <span className="inline-block transform animate-title-slide-1 text-white dark:text-white light:text-zinc-900 group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300">
                  MD
                </span>
                <span className="inline-block transform animate-title-slide-2 text-white dark:text-white light:text-zinc-900 group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300">
                  SAHADAT
                </span>
              </div>

              {/* Row 2: HOSSAIN with Signature Crimson Gradient */}
              <div className="overflow-hidden relative inline-block py-1">
                <span className="relative inline-block transform animate-title-slide-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500 dark:from-white dark:via-white dark:to-red-500 light:from-zinc-900 light:via-red-700 light:to-red-500 group-hover:to-rose-400 transition-all duration-300">
                  HOSSAIN
                </span>
              </div>
            </h1>

            {/* 4. Dynamic Typewriter Role Subtitle (Letter-by-Letter Real-Time Typing Animation) */}
            <div className="h-10 sm:h-12 flex items-center mb-3">
              <div className="font-outfit text-xl sm:text-2xl 2xl:text-3xl font-extrabold uppercase tracking-wide text-crimson flex items-center min-h-[32px]">
                <span className="drop-shadow-[0_0_12px_rgba(220,38,38,0.45)]">
                  {displayText}
                </span>
                {/* Glowing Cyber Terminal Cursor */}
                <span className="inline-block w-[3px] sm:w-[3.5px] h-5 sm:h-7 ml-1 bg-crimson shadow-[0_0_12px_#ef233c] animate-pulse rounded-full" />
              </div>
            </div>

            {/* 5. Cursive Accent Subtitle */}
            <div className="mb-5 animate-in fade-in duration-700 delay-250">
              <span className="font-script text-3xl sm:text-4xl 2xl:text-5xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 inline-block transform -rotate-1">
                Built for Scale & Precision.
              </span>
            </div>

            {/* 6. High-Impact Client-Focused Bio */}
            <p className="text-sm sm:text-base 2xl:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans leading-relaxed max-w-xl 2xl:max-w-2xl mb-8 animate-in fade-in duration-700 delay-300">
              I architect autonomous AI agents and enterprise systems that automate complex workflows, compress development time by 10x, and cut operational costs by 70%.
            </p>

            {/* 8. Single Focused Primary Action Button (Matching Let's Talk 3D Gem Style) */}
            <div className="flex items-center mb-2">
              <GemActionButton
                href="#projects"
                icon="work"
                size="lg"
              >
                VIEW MY WORK
              </GemActionButton>
            </div>

          </div>

          {/* RIGHT COLUMN: Sahadat Vai's Pure Studio Portrait with Soft Ambient Spotlight */}
          <div className="lg:col-span-5 relative flex justify-center items-end mt-8 lg:mt-0 select-none">
            
            {/* Soft Photographic Studio Spotlight & Ambient Nebula Glow (Clean, Seamless, No Rings) */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] 2xl:w-[520px] h-[340px] sm:h-[440px] 2xl:h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.36)_0%,rgba(185,28,28,0.18)_42%,transparent_70%)] blur-[75px] pointer-events-none -z-10" />
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[620px] 2xl:w-[740px] h-[500px] sm:h-[620px] 2xl:h-[740px] rounded-full bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.16)_0%,transparent_65%)] blur-[110px] pointer-events-none -z-10" />

            {/* Sahadat vai's Portrait Cutout with Seamless Bottom Gradient Dissolve */}
            <div className="relative w-full max-w-[440px] 2xl:max-w-[540px] flex justify-center items-end">
              <img
                src={personal.portraitImage || '/sahadat-portrait-full.png'}
                onError={(e) => {
                  if (e.target.src !== '/myphoto-clean.png') {
                    e.target.src = '/myphoto-clean.png';
                  }
                }}
                alt={personal.name || "Md Sahadat Hossain"}
                className="w-full h-auto max-h-[570px] 2xl:max-h-[700px] object-contain object-bottom transition-all duration-700 hover:scale-[1.015]"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.45) 88%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.45) 88%, rgba(0,0,0,0) 100%)',
                  filter: 'contrast(106%) brightness(102%) saturate(104%) drop-shadow(0 0 35px rgba(220, 38, 38, 0.35)) drop-shadow(0 20px 45px rgba(0, 0, 0, 0.9))',
                }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* 4 HIGH-IMPACT METRICS BAR WITH LIVE ANIMATION SYSTEM */}
      <div className="w-full border-t border-b border-white/10 dark:border-white/10 light:border-black/10 bg-white/[0.01] dark:bg-white/[0.01] light:bg-black/[0.01] py-3 sm:py-4 mt-12 sm:mt-16 relative z-10 backdrop-blur-[2px]">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-10 2xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
            
            <AnimatedMetricCard
              value="10X+"
              label="Execution Velocity"
              index={0}
            />

            <AnimatedMetricCard
              value="70%+"
              label="Cost Compression"
              index={1}
            />

            <AnimatedMetricCard
              value="24/7"
              label="Autonomous Workflows"
              index={2}
            />

            <AnimatedMetricCard
              value="100%"
              label="Production Resilient"
              isHighlighted={true}
              isLast={true}
              index={3}
            />

          </div>
        </div>
      </div>

      {/* CORE TECHNOLOGIES & ECOSYSTEM INFINITE MARQUEE */}
      <div className="w-full py-5 sm:py-6 relative z-10 border-b border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 2xl:px-16 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          
          {/* Dynamic Pinned Category Anchor (Laser Border-Beam & Continuous Aura matching Screenshot 2) */}
          <div className="shrink-0 select-none z-20">
            <LaserBadge text="CORE TECH & ECOSYSTEM" />
          </div>

          {/* Infinite Flowing Marquee Track (Right to Left with Hover Pause & High-Voltage Neon Bloom) */}
          <div
            className="flex-1 w-full overflow-hidden relative py-3"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 2%, black 12%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 2%, black 12%, black 92%, transparent 100%)',
            }}
          >
            {/* Left & Right Edge Dissolve Shields (ensures zero overlap/collision near anchor) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

            <div className="animate-tech-marquee flex items-center gap-3 sm:gap-4 py-2">
              {[...coreTechs, ...coreTechs].map((tech, idx) => (
                <TechMarqueePill key={idx} tech={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic Title Entrance & Shimmer Keyframes */}
      <style>{`
        @keyframes kicker-reveal {
          0% {
            opacity: 0;
            transform: translateY(100%);
            letter-spacing: 0.1em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.28em;
          }
        }
        .animate-kicker-reveal {
          animation: kicker-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes title-slide-up {
          0% {
            opacity: 0;
            transform: translateY(115%) skewY(3deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) skewY(0);
            filter: blur(0);
          }
        }
        .animate-title-slide-1 {
          animation: title-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .animate-title-slide-2 {
          animation: title-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .animate-title-slide-3 {
          animation: title-slide-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.44s both;
        }

        @keyframes laser-sweep {
          0%, 65% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(250%);
          }
        }
        .animate-laser-sweep {
          animation: laser-sweep 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

    </section>
  );
}
