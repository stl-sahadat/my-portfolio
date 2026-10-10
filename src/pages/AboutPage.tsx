import React from 'react';
import AboutSection from '../components/AboutSection';
import EditorialFooter from '../components/EditorialFooter';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowLeft, ArrowRight, GraduationCap, Award, Brain, Terminal, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  const { navigateToPage } = usePortfolio();

  return (
    <div className="relative w-full pt-28 sm:pt-36">
      {/* Ambient Top Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/[0.08] rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Page Title & Breadcrumb Header */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16 mb-8 sm:mb-12">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2 uppercase tracking-widest">
                <button
                  onClick={() => navigateToPage('home')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft size={12} />
                  <span>Home</span>
                </button>
                <span>/</span>
                <span className="text-rose-400 font-bold">About Me</span>
              </div>
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider text-white leading-tight">
                THE ARCHITECT'S{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  NARRATIVE
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToPage('projects')}
                className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jump to Projects</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Master About Section Content */}
      <div className="relative">
        <AboutSection />
      </div>

      {/* Deep-Dive Architectural Credentials Grid (Unique to Full About Page) */}
      <section className="py-16 border-t border-white/10 relative">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="mb-10">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                ACADEMIC & INTELLECTUAL BACKBONE
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                Formal Mastery Meets Self-Taught AI Rigor
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-rose-400 mb-4">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                Master's Degree Academic Rigor
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Grounded in structured academic research methodologies, data discipline, and complex problem-solving frameworks that enable systematic thinking.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                <Brain size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                Autonomous AI & Reasoning
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Continuous deep-dive into LLM reasoning chains (CoT, ReAct), deterministic prompt schemas, tool calling protocols, and multi-agent coordination.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-rose-400 mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                18 Production Deployments
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Theory validated through real-world deployment across financial suites, containerized cloud services, e-commerce engines, and AI agents.
              </p>
            </div>
          </div>

          {/* Page Bottom Navigation Bridge */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigateToPage('home')}
              className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>

            <button
              onClick={() => navigateToPage('projects')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Next: View Selected Projects (18)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <EditorialFooter />
    </div>
  );
}
