import React, { useState } from 'react';
import { Bot, Database, Globe, Cloud, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import LaserBadge from './LaserBadge';

export default function ExperienceSection() {
  const [activeCard, setActiveCard] = useState(null);

  const highlights = [
    {
      id: 'automation',
      icon: Bot,
      role: 'Lead Automation & Systems Architect',
      title: 'Autonomous Agents & Intelligent Process Automation',
      category: 'INTELLIGENT WORKFLOW ORCHESTRATION',
      period: '2024 – Present',
      accentColor: 'from-amber-500/20 via-rose-500/10 to-transparent',
      glowBorder: 'hover:border-amber-500/40',
      badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      metric: '80%',
      metricLabel: 'MANUAL OVERHEAD REDUCTION',
      description: 'Architecting fault-tolerant autonomous agent frameworks and Python automation engines that eliminate operational bottlenecks and execute complex multi-step workflows without human intervention.',
      achievements: [
        'Engineered real-time telemetry bots and automated data extraction pipelines cutting manual task overhead by 80%.',
        'Implemented deterministic API tool schemas and self-healing error recovery loops ensuring 24/7 autonomous reliability.',
        'Structured modular agent topologies with dedicated supervisor and validation checkpoints.',
      ],
    },
    {
      id: 'erp',
      icon: Database,
      role: 'Full-Stack Systems Engineer',
      title: 'Modular ERP Systems & Enterprise Application Architecture',
      category: 'FULL-STACK ERP & ENTERPRISE PLATFORMS',
      period: '2023 – Present',
      accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      glowBorder: 'hover:border-cyan-500/40',
      badgeColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
      metric: '100%',
      metricLabel: 'TYPE-SAFE SYNCHRONIZATION',
      description: 'Engineering robust, type-safe institutional ERP platforms and data management suites using TypeScript, modern reactive frontends, and structured relational persistence.',
      achievements: [
        'Architected modular institutional administration software managing complex multi-tier records and role permissions.',
        'Digitized legacy paper-based workflows into synchronized, zero-friction cloud database interfaces.',
        'Engineered responsive dashboards with real-time record indexing and comprehensive audit logging.',
      ],
    },
    {
      id: 'web',
      icon: Globe,
      role: 'Product & Web Architect',
      title: 'Responsive High-Performance Web & E-Commerce Platforms',
      category: 'BESPOKE WEB ENGINEERING & UX',
      period: '2023 – Present',
      accentColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      glowBorder: 'hover:border-emerald-500/40',
      badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
      metric: '98+',
      metricLabel: 'LIGHTHOUSE BENCHMARK',
      description: 'Delivering bespoke consumer-facing web applications and modern commercial platforms combining responsive architecture, fluid micro-interactions, and sub-second load times.',
      achievements: [
        'Engineered client-side reactive store flows and dynamic catalogs with zero state desynchronization.',
        'Achieved 98+ Google Lighthouse scores across performance, accessibility, SEO, and Core Web Vitals.',
        'Optimized browser DOM rendering and asset pipelines delivering seamless 60fps micro-interactions.',
      ],
    },
    {
      id: 'cloud',
      icon: Cloud,
      role: 'Cloud Solutions Consultant',
      title: 'Containerized Cloud Deployments & Serverless Architecture',
      category: 'CLOUD MICROSERVICES & DEPLOYMENT',
      period: '2024 – Present',
      accentColor: 'from-crimson/20 via-purple-500/10 to-transparent',
      glowBorder: 'hover:border-crimson/40',
      badgeColor: 'text-rose-300 bg-crimson/10 border-crimson/30',
      metric: '99.9%',
      metricLabel: 'CONTAINER UPTIME (GCP)',
      description: 'Architecting and deploying containerized full-stack services on Google Cloud Run with automated continuous deployment, strict schema validation, and serverless auto-scaling.',
      achievements: [
        'Configured Docker multi-stage builds minimizing image payloads and optimizing cold-start latency.',
        'Maintained 99.9% uptime with automated TLS certification, health-check probes, and managed cloud routing.',
        'Integrated sub-50ms real-time telemetry analytics calculating aggregate metrics with zero server maintenance.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-transparent relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-crimson/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header: Matching Hero & About Architectural Grandeur */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              {/* LaserBadge matching AgencyHero */}
              <div className="mb-4">
                <LaserBadge text="SOLUTIONS & ARCHITECTURAL HIGHLIGHTS" />
              </div>

              {/* Bold Executive Heading matching About & Hero scale */}
              <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none">
                WHAT I'VE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  BUILT & SOLVED
                </span>
              </h2>
            </div>

            {/* Sub-description matching About's typography */}
            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 font-sans leading-relaxed">
                Production engineering systems designed for scale, fault tolerance, and automated business efficiency across web, cloud, and autonomous AI domains.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-9">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={index * 110}
                duration={700}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative p-8 sm:p-10 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/12 bg-[#080811]/90 dark:bg-[#080811]/90 light:bg-white transition-all duration-500 ease-out flex flex-col justify-between h-full backdrop-blur-2xl shadow-2xl hover:shadow-[0_24px_60px_rgba(0,0,0,0.7)] hover:-translate-y-2 ${item.glowBorder}`}
                >
                  {/* Subtle dynamic glass glow */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Top content */}
                  <div className="relative z-10">
                    {/* Top Row: Category pill & Icon */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-mono text-zinc-400">
                          {item.period}
                        </span>
                        <div className="w-8 h-8 rounded-xl border border-white/15 dark:border-white/15 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-white group-hover:border-white/40 transition-colors shadow-sm">
                          <IconComponent size={15} />
                        </div>
                      </div>
                    </div>

                    {/* Title: Executive Mixed-Case Plus Jakarta Sans */}
                    <h3 className="font-jakarta text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-100 group-hover:to-zinc-300 transition-all">
                      {item.title}
                    </h3>

                    {/* Description: High-Legibility Inter/Sans */}
                    <p className="text-xs sm:text-[13px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements: Elegant Clean Flow with Subtle Left Border Accent */}
                    <div className="space-y-3 pt-5 border-t border-white/8 dark:border-white/8 light:border-black/10">
                      {item.achievements.map((point, idx) => (
                        <div
                          key={idx}
                          className="pl-3.5 py-1 border-l border-white/10 hover:border-crimson/60 transition-colors duration-300 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-sans"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Info: Metric & Role */}
                  <div className="relative z-10 mt-8 pt-5 border-t border-white/8 dark:border-white/8 light:border-black/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bebas tracking-wider text-white dark:text-white light:text-zinc-900 drop-shadow-sm">
                        {item.metric}
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 leading-tight">
                        {item.metricLabel}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                      <ShieldCheck size={13} className="text-crimson" />
                      <span>{item.role.split(' ')[0]} Verified</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
