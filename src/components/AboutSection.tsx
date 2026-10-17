import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const { data } = usePortfolio();
  const customAbout = data.aboutCustom || {};
  const personal = data.personal || {};

  const coreTargets = customAbout.targets || [
    {
      title: '10x Execution Velocity',
      desc: 'Compressing weeks of traditional development into hours using autonomous agent swarms that scaffold, test, and self-heal.',
      stat: '10x Faster',
    },
    {
      title: '70% Cost Compression',
      desc: 'Eliminating bloated agency retainers and manual overhead through deterministic, automated AI pipelines.',
      stat: '70% Savings',
    },
    {
      title: 'Zero-Hallucination Resilience',
      desc: 'Engineering strict guardrails, structured JSON schemas, and automated lint verification for flawless production output.',
      stat: '99.9% Reliable',
    },
  ];

  const subtitle = customAbout.subtitle || "Driven by Autonomy & Precision.";
  const introKicker = customAbout.introKicker || `I am ${personal.name || 'Md Sahadat Hossain'} — an Autonomous Systems Engineer & AI Architect who transforms cutting-edge AI models into resilient, scalable, production-grade software.`;
  const storyP1 = customAbout.storyP1 || "My journey into technology was born not from a classroom syllabus, but from a lifelong obsession with code, web architecture, and digital engineering since childhood. While I completed my Master’s Degree, my real engineering edge was forged through relentless independent research, continuous experimentation, and building tangible software from the ground up.";
  const storyP2 = customAbout.storyP2 || "I believe true engineering is proven by execution, not certificates—demonstrated through resilient backend architectures, intuitive frontend experiences, and software that delivers real-world impact. Combining deep fluency in modern web standards (HTML5, CSS, modern JavaScript, Python) with frontier AI models (Claude Opus & Sonnet, OpenAI GPT-4o, Google Gemini), I orchestrate intelligent, self-operating multi-agent ecosystems designed to scale.";
  const degreeTitle = customAbout.degreeTitle || "Master's Degree (Completed) • Self-Driven Research";
  const degreeDesc = customAbout.degreeDesc || "Advancing systems through independent algorithmic research, systems architecture, and full-stack autonomous AI engineering.";
  const philosophyQuote = customAbout.philosophyQuote || "Real engineering is measured by execution, not certificates. Turning autonomous intelligence into production solutions that eliminate operational friction and scale effortlessly.";

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-transparent scroll-mt-20">
      
      {/* Refined subtle ambient depth */}
      <div className="absolute top-1/4 -left-32 w-[350px] h-[350px] bg-crimson/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header: Clean, Bold, Executive Architecture */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none">
                ABOUT{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  ME
                </span>
              </h2>
            </div>

            <div className="max-w-lg">
              <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-sans leading-relaxed">
                {introKicker}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Content Layout: 2 Columns with Generous Whitespace (No Heavy Box Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column (7 cols): Biography Story & Academic Foundation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Biography Narrative Card (Sleek Frameless Glass) */}
            <ScrollReveal animation="fade-up" delay={80} duration={480}>
              <div className="p-8 sm:p-10 rounded-3xl border border-white/8 hover:border-white/15 bg-[#080811]/85 dark:bg-[#080811]/85 light:bg-white backdrop-blur-2xl shadow-2xl transition-all duration-500 relative overflow-hidden group">
                {/* Subtle Ambient Liquid Glass Sheen */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

                <h3 className="font-outfit text-xl sm:text-2xl font-bold uppercase text-white dark:text-white light:text-zinc-900 tracking-wide mb-4">
                  The Architect's Story
                </h3>
                
                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans leading-relaxed">
                  <p>
                    {storyP1}
                  </p>
                  <p>
                    {storyP2}
                  </p>
                </div>

                {/* Academic Credentials & Research Box with Liquid Silver Metallic Icon */}
                <div className="mt-8 pt-6 border-t border-white/8 dark:border-white/8 light:border-black/10 flex items-center gap-5 sm:gap-6">
                  <div className="relative p-3.5 rounded-2xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/95 to-black border border-white/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] shrink-0 group-hover:border-white/40 transition-all duration-300">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                    <GraduationCap size={24} className="text-zinc-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-outfit text-base font-bold uppercase text-white dark:text-white light:text-zinc-900 tracking-wide">
                      {degreeTitle}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                      {degreeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Philosophy Callout Quote (Seamless Frameless Banner) */}
            <ScrollReveal animation="fade-up" delay={160} duration={480}>
              <div className="p-6 sm:p-8 rounded-3xl border border-white/8 hover:border-white/15 bg-gradient-to-r from-zinc-900/40 via-[#080811]/70 to-black/70 backdrop-blur-xl transition-all duration-500 shadow-xl group">
                <div className="flex items-center gap-2.5 mb-2.5 text-xs font-mono font-bold uppercase tracking-widest select-none">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-200 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400">
                    CORE ENGINEERING PHILOSOPHY
                  </span>
                </div>
                <p className="font-outfit text-base sm:text-lg text-white dark:text-white light:text-zinc-900 font-bold uppercase tracking-wide leading-snug">
                  "{philosophyQuote}"
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column (5 cols): 3 Core Target Pillars */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold flex items-center gap-2.5 mb-1 select-none">
              <span className="p-1 rounded-md bg-white/10 border border-white/15 text-zinc-200 shadow-sm">
                <Target size={13} className="text-zinc-200" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400">
                CORE TARGETS & IMPACT
              </span>
            </div>

            {coreTargets.map((target, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 90}
                duration={450}
              >
                <div
                  className="p-6 sm:p-7 rounded-3xl border border-white/8 hover:border-zinc-300/30 bg-[#080811]/75 dark:bg-[#080811]/75 light:bg-white backdrop-blur-xl hover:translate-x-1.5 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-crimson group-hover:shadow-[0_0_8px_#ef233c] transition-all duration-300"></span>
                      <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 font-bold uppercase tracking-wider transition-colors">
                        TARGET 0{idx + 1}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-mono text-[10px] font-bold uppercase shadow-sm group-hover:border-zinc-400/40 transition-colors">
                      {target.stat}
                    </span>
                  </div>
                  
                  <h4 className="font-outfit text-lg font-bold uppercase text-white dark:text-white light:text-zinc-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-200 group-hover:to-red-400 transition-all">
                    {target.title}
                  </h4>
                  
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed">
                    {target.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
