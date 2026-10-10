import React from 'react';
import ExperienceSection from '../components/ExperienceSection';
import EditorialFooter from '../components/EditorialFooter';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowLeft, ArrowRight, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ExperiencePage() {
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
                <span className="text-rose-400 font-bold">Experience & Journey</span>
              </div>
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider text-white leading-tight">
                CAREER TRACK &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  MILESTONES
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToPage('blog')}
                className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Research & Blog</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Master Experience Section Content */}
      <div className="relative">
        <ExperienceSection />
      </div>

      {/* Page Bottom Navigation Bridge */}
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16 py-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => navigateToPage('skills')}
          className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Previous: Skills</span>
        </button>

        <button
          onClick={() => navigateToPage('blog')}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
        >
          <span>Next: Research & Articles</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Footer */}
      <EditorialFooter />
    </div>
  );
}
