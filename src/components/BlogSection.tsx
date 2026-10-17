import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: 'Architecting Autonomous Multi-Agent Swarms for Production',
      category: 'AI ARCHITECTURE',
      date: 'Coming Soon',
      readTime: '12 min read',
      excerpt: 'How to structure multi-agent networks using CrewAI and LangChain with self-healing feedback loops, deterministic schema validation, and context management.',
      tags: ['Autonomous Agents', 'CrewAI', 'LangChain', 'Enterprise AI'],
      status: 'In Preparation',
    },
    {
      id: 2,
      title: 'Compressing Software Engineering Turnarounds by 70% with AI Code Synthesis',
      category: 'ENGINEERING VELOCITY',
      date: 'Coming Soon',
      readTime: '8 min read',
      excerpt: 'A practical deep-dive into how autonomous agent pipelines translate natural specifications into full-stack React and FastAPI applications in minutes.',
      tags: ['AI Code Builder', 'React 18', 'Automation', 'DevOps'],
      status: 'In Preparation',
    },
    {
      id: 3,
      title: 'Production Prompt Engineering: From Prototypes to Resilient Infrastructure',
      category: 'PROMPT ARCHITECTURE',
      date: 'Coming Soon',
      readTime: '10 min read',
      excerpt: 'Techniques for context window compression, JSON mode enforcement, token cost minimization, and defensive prompt security in high-throughput enterprise systems.',
      tags: ['Prompt Engineering', 'LLM Security', 'GPT-4o', 'Claude Opus'],
      status: 'In Preparation',
    },
  ];

  return (
    <section id="blog" className="py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white dark:text-white light:text-zinc-900 leading-tight">
                LATEST ARTICLES &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  CASE STUDIES
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans leading-relaxed">
              Thoughts on autonomous AI engineering, multi-agent pipelines, and cloud systems. Deep-dive technical articles currently in preparation.
            </p>
          </div>
        </ScrollReveal>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <ScrollReveal
              key={article.id}
              animation="fade-up"
              delay={idx * 140}
              duration={750}
              className="h-full"
            >
              <div
                className="p-7 sm:p-8 rounded-3xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white flex flex-col justify-between hover:border-crimson/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-crimson/15 text-crimson font-mono text-[10px] uppercase font-bold tracking-wider">
                      {article.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-bold mb-2">
                    {article.category}
                  </div>

                  <h3 className="font-outfit text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-900 leading-snug tracking-normal mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/5 dark:bg-white/5 light:bg-black/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
