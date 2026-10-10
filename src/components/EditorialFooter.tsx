import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Github,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Lock,
  Send,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import GemActionButton from './GemActionButton';
import LaserBadge from './LaserBadge';

// 3D Skeuomorphic App Icon Squircle (Exact match with user reference media_1791509673584_c0b5b898.png & media_1791509675345_391c215f.png)
function VisionOS3DAppIcon({
  icon: Icon,
  variant = 'emerald',
}: {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  variant?: 'emerald' | 'crimson' | 'amber';
}) {
  const configs = {
    emerald: {
      glow: 'rgba(16, 185, 129, 0.45)',
      rimBorder: 'border-emerald-500/40',
      innerGlow: 'bg-emerald-500/12',
      iconColor: 'text-emerald-400',
      iconShadow: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(16,185,129,0.7))',
    },
    crimson: {
      glow: 'rgba(239, 35, 60, 0.45)',
      rimBorder: 'border-red-500/40',
      innerGlow: 'bg-red-500/12',
      iconColor: 'text-rose-400',
      iconShadow: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(239,35,60,0.7))',
    },
    amber: {
      glow: 'rgba(245, 158, 11, 0.45)',
      rimBorder: 'border-amber-500/40',
      innerGlow: 'bg-amber-500/12',
      iconColor: 'text-amber-400',
      iconShadow: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 10px rgba(245,158,11,0.7))',
    },
  };

  const cfg = configs[variant] || configs.emerald;

  return (
    <div className="relative shrink-0 select-none">
      {/* Soft Ambient Cast Shadow & Color Aura */}
      <div
        className="absolute -inset-1.5 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: cfg.glow }}
      />

      {/* 3D Tactile Squircle Body Tile */}
      <div
        className={`relative w-12 h-12 sm:w-13 sm:h-13 rounded-2xl transition-all duration-400 group-hover:scale-108 group-hover:-translate-y-0.5 border border-white/20 dark:border-white/20 light:border-black/10 ${cfg.rimBorder} shadow-[0_10px_22px_rgba(0,0,0,0.85),_inset_0_1.5px_2px_rgba(255,255,255,0.45),_inset_0_-2px_4px_rgba(0,0,0,0.75)] light:shadow-[0_8px_18px_rgba(0,0,0,0.1),_inset_0_1.5px_2px_rgba(255,255,255,0.9),_inset_0_-1px_2px_rgba(0,0,0,0.06)] overflow-hidden`}
        style={{
          background: 'linear-gradient(180deg, #252632 0%, #171822 45%, #0c0d13 100%)',
        }}
      >
        {/* Top Arc Specular Edge Glare Reflection */}
        <div className="absolute top-[1.5px] inset-x-2 h-[8px] rounded-t-xl bg-gradient-to-b from-white/40 via-white/15 to-transparent pointer-events-none" />

        {/* Ambient Radial Core Lighting */}
        <div className={`absolute inset-0 ${cfg.innerGlow} pointer-events-none`} />

        {/* 3D Center Icon Glyph with Tactile Depth */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Icon
            size={22}
            className={`transition-transform duration-300 group-hover:scale-110 ${cfg.iconColor}`}
            style={{
              filter: cfg.iconShadow,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function EditorialFooter() {
  const { data, trackEvent, openAdmin } = usePortfolio();
  const personal = data.personal || {};

  // Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectTopic, setProjectTopic] = useState('Autonomous AI Architecture');
  const [clientMessage, setClientMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const predefinedTopics = [
    'Autonomous AI Agents',
    'Full-Stack Web Platform',
    'Enterprise Cloud & ERP',
    'Custom System Architecture',
  ];

  // Dual Dispatch Action: Submits to Backend Database + Email Notification & Opens WhatsApp
  const handleDualSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = clientName.trim() || 'Valued Client';
    const email = clientEmail.trim();
    const topic = projectTopic;
    const details = clientMessage.trim() || 'I would like to discuss a project with you.';

    // 1. Submit to Backend API (Database persist + Nodemailer dual notification & auto-reply)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          topic,
          message: details,
        }),
      });
    } catch (apiErr) {
      console.warn('[Contact] Backend dispatch fallback:', apiErr);
    }

    // 2. Build WhatsApp message text
    const waText = encodeURIComponent(
      `Hello Sahadat vai!\n\nMy Name: ${name}${email ? `\nEmail: ${email}` : ''}\nProject Type: ${topic}\n\nProject Details:\n${details}\n\nLooking forward to hearing from you!`
    );
    const targetWhatsAppUrl = `https://wa.me/8801944576159?text=${waText}`;

    trackEvent('Dual Inquiry Sent', { name, topic, email });

    // Open WhatsApp in primary new window
    window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 7000);
  };

  const whatsappDirectUrl = `https://wa.me/8801944576159?text=${encodeURIComponent("Hi Sahadat vai, I would like to discuss an AI architecture project.")}`;
  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email || 'sahadat.info01@gmail.com')}&su=${encodeURIComponent("Project Inquiry - AI Agent Architecture")}&body=${encodeURIComponent("Hi Sahadat vai,\n\nI am reaching out regarding an AI Architecture and Autonomous Agent project.\n\nProject Overview:\n\nBest regards,")}`;

  return (
    <footer id="contact" className="py-24 sm:py-32 relative overflow-hidden border-t border-white/10 dark:border-white/10 light:border-black/10 bg-transparent scroll-mt-20">
      
      {/* Subtle Ambient Depth */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-12 2xl:px-16 relative z-10">
        
        {/* SECTION HEADER: Full-width top alignment matching Experience / About / Blog */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="mb-4">
                <LaserBadge text="DIRECT CHANNELS & PROJECT INQUIRIES" />
              </div>
              <h3 className="font-bebas text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl uppercase text-white dark:text-white light:text-zinc-900 tracking-tight leading-[0.88] select-none">
                LET'S WORK{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
                  TOGETHER.
                </span>
              </h3>
            </div>

            <div className="max-w-md">
              <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-lg leading-relaxed font-sans">
                Send your inquiry below—it will instantly connect to WhatsApp with your customized brief and simultaneously dispatch a direct email notification.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 2 EQUAL BALANCED COLUMNS: Perfectly Level at the Top & Zero Staggering */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20">
          
          {/* Left Column: Direct Contact Cards & Live Status */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <ScrollReveal animation="fade-up" delay={80} duration={700} className="h-full">
              <div className="flex flex-col justify-between h-full gap-4">
                
                {/* Instant WhatsApp Quick Card */}
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <VisionOS3DAppIcon icon={MessageCircle} variant="emerald" />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        WHATSAPP / PHONE
                      </div>
                      <div className="font-outfit text-base font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-emerald-400 transition-colors">
                        {personal.phone || '+880 1944-576159'}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email Direct Card */}
                <a
                  href={gmailDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white hover:border-crimson/50 transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <VisionOS3DAppIcon icon={Mail} variant="crimson" />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        DIRECT EMAIL
                      </div>
                      <div className="font-outfit text-base font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-crimson transition-colors">
                        {personal.email || 'sahadat.info01@gmail.com'}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Location & Remote Availability */}
                <div className="p-5 sm:p-6 rounded-2xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#0b0b12]/90 dark:bg-[#0b0b12]/90 light:bg-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <VisionOS3DAppIcon icon={MapPin} variant="amber" />
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                        LOCATION & AVAILABILITY
                      </div>
                      <div className="font-outfit text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-900">
                        {personal.location || 'Barura, Cumilla, Chattogram, Bangladesh • Open to Remote Worldwide'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee Trust Indicator */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Avg. Response Time: &lt; 2 Hours</span>
                  </div>
                  <span className="text-zinc-500">Worldwide UTC+6</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Project Inquiry Box */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal animation="fade-up" delay={150} duration={700} className="h-full">
              <form
                onSubmit={handleDualSubmit}
                className="p-6 sm:p-7 rounded-3xl border border-white/12 dark:border-white/12 light:border-black/15 bg-[#090912]/95 dark:bg-[#090912]/95 light:bg-white/95 backdrop-blur-2xl shadow-2xl light:shadow-xl light:shadow-slate-200/50 relative overflow-hidden group h-full flex flex-col justify-between"
              >
                {/* Subtle Glow */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                  {/* Topic Chips */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      1. Select Project Domain
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {predefinedTopics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setProjectTopic(topic)}
                          className={`text-[11px] font-sans px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                            projectTopic === topic
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                              : 'bg-white/5 dark:bg-white/5 light:bg-slate-100 border-white/10 dark:border-white/10 light:border-slate-300/60 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:border-white/20'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Client Name Input */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                      2. Your Name or Company
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Alex Vance (or company name)"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>

                  {/* Client Email Input (Optional for Auto-Reply Confirmation) */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                      3. Your Email (Optional for instant confirmation reply)
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. client@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all"
                    />
                  </div>

                  {/* Project Summary Textarea */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                      4. Project Scope (Editable)
                    </label>
                    <textarea
                      rows={3}
                      value={clientMessage}
                      onChange={(e) => setClientMessage(e.target.value)}
                      placeholder="Describe what you want to build or automate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300/80 focus:border-emerald-500/50 focus:bg-white/[0.07] dark:focus:bg-white/[0.07] light:focus:bg-white text-white dark:text-white light:text-zinc-900 text-xs font-sans placeholder:text-zinc-600 dark:placeholder:text-zinc-600 light:placeholder:text-zinc-400 outline-none transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button: Exact Signature 3D GemActionButton matching "Let's Talk" */}
                  <div className="pt-2 flex flex-col items-center">
                    <GemActionButton
                      type="submit"
                      disabled={isSubmitting}
                      icon="gem"
                      size="lg"
                      showArrow={true}
                      className="w-full justify-center !py-3 !text-xs sm:!text-sm uppercase tracking-wider"
                    >
                      {isSubmitting ? 'DISPATCHING...' : 'DISPATCH TO WHATSAPP & EMAIL'}
                    </GemActionButton>
                    
                    {sentSuccess && (
                      <div className="w-full mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2 animate-fadeIn">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Inquiry logged to database & dispatches queued! Connecting to WhatsApp...</span>
                      </div>
                    )}

                    <p className="text-[10px] font-mono text-zinc-500 text-center mt-3">
                      Secured by Portfolio Backend API • Syncs to sahadat.info01@gmail.com
                    </p>
                  </div>
                </div>
              </form>
            </ScrollReveal>
          </div>

        </div>

        {/* BOTTOM SECTION: CYBER SOCIAL NODES RAIL (Exact request from user screenshot media_1791165255511.png) */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="pt-12 border-t border-white/10 dark:border-white/10 light:border-black/10">
          
          {/* Circular Social Dock & Status Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {personal.github && (
                <a
                  href={personal.github}
                  onClick={() => trackEvent('GitHub Profile Click')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-cyan-400 hover:bg-cyan-500/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  <Github size={16} />
                </a>
              )}
              {personal.facebook && (
                <a
                  href={personal.facebook}
                  onClick={() => trackEvent('Facebook Profile Click')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-blue-500 hover:bg-blue-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook size={16} />
                </a>
              )}
              {personal.twitter && (
                <a
                  href={personal.twitter}
                  onClick={() => trackEvent('Twitter Profile Click')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-zinc-300 hover:bg-white/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  <Twitter size={16} />
                </a>
              )}
              {personal.instagram && (
                <a
                  href={personal.instagram}
                  onClick={() => trackEvent('Instagram Profile Click')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-pink-500 hover:bg-pink-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-pink-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram size={16} />
                </a>
              )}
              {personal.youtube && (
                <a
                  href={personal.youtube}
                  onClick={() => trackEvent('YouTube Profile Click')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-red-500 hover:bg-red-600/20 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-red-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Youtube size={16} />
                </a>
              )}
              <a
                href={gmailDirectUrl}
                onClick={() => trackEvent('Email Direct Trigger')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct Email"
                className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-crimson hover:bg-crimson/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-crimson flex items-center justify-center transition-all hover:scale-110"
              >
                <Mail size={16} />
              </a>
              {personal.phone && (
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  onClick={() => trackEvent('Phone Call Trigger')}
                  aria-label="Phone"
                  className="w-10 h-10 rounded-full border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-emerald-400 hover:bg-emerald-600/15 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Phone size={16} />
                </a>
              )}
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 pl-2 hidden sm:inline">
                BARURA, CUMILLA • OPEN TO REMOTE
              </span>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SYSTEM ACTIVE // ACCEPTING CLIENT PROJECTS</span>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
            <span>© 2026 Md Sahadat Hossain. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span>AI AGENT ARCHITECT & PROMPT ENGINEER</span>
              <span>•</span>
              <button
                onClick={openAdmin}
                className="hover:text-zinc-300 transition-colors uppercase tracking-wider cursor-pointer flex items-center gap-1"
              >
                <Lock size={11} />
                <span>Console</span>
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </footer>
  );
}
