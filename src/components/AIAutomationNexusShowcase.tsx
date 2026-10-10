import React, { useState, useEffect } from 'react';
import {
  Globe,
  Users,
  Search,
  Bell,
  Home,
  User,
  Filter,
  MessageSquare,
  Mail,
  BarChart2,
  Settings,
  Pause,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Instagram,
  Camera,
} from 'lucide-react';

/**
 * AIAutomationNexusShowcase
 * 
 * Pixel-perfect implementation matching Sahadat vai's exact reference animation video:
 * 1. Mobile / Video Frame format with high-tech obsidian glass styling.
 * 2. Top 3 Source Cards (Facebook Ads: 268 Leads, Instagram Ads: 207 Leads, Website: 159 Leads).
 * 3. Animated neon fiber-optic cables curving into the central glowing capsule.
 * 4. Central Hub: "New Leads Incoming: 583 | Real-time Lead Capture" with intense neon glow.
 * 5. Vertical light beam pouring down onto the 3D perspective runway.
 * 6. CRM Dashboard Backdrop with sidebar and 4 metric sparkline cards (Total Leads 2,350, etc.).
 * 7. 3D Perspective Card Runway with exact 3-tier depth layout:
 *    - Foreground cards: Arun Kumar, Priya Sharma, Rahul Mehta with platform badges & New Lead pills.
 *    - Midground cards: Vikram Joshi, Ishwika Iyer, Namita Singh.
 *    - Background depth grid converging toward the light source.
 * 8. Real-time video player HUD at bottom: [||] 0:02 / 0:10 timeline scrubber, sparkle, and volume.
 */

// Foreground Lead / Client Cards (Exact replica from reference video)
const FOREGROUND_CARDS = [
  {
    id: 'f1',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 91234 56789',
    badge: 'New Lead',
    platform: 'instagram',
    platformIconColor: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    modelTag: 'Claude 3.5 RAG',
  },
  {
    id: 'f2',
    name: 'Arun Kumar',
    email: 'arun.kumar@email.com',
    phone: '+91 98765 43210',
    badge: 'New Lead',
    platform: 'facebook',
    platformIconColor: 'bg-blue-600',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    modelTag: 'CrewAI Multi-Agent',
  },
  {
    id: 'f3',
    name: 'Rahul Mehta',
    email: 'rahul.mehta@email.com',
    phone: '+91 99987 66654',
    badge: 'New Lead',
    platform: 'website',
    platformIconColor: 'bg-cyan-500',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    modelTag: 'GPT-4o Enterprise',
  },
];

// Midground Lead Cards
const MIDGROUND_CARDS = [
  {
    id: 'm1',
    name: 'Ishwika Iyer',
    email: 'ishwika.iyer@email.com',
    phone: '+91 88892 63694',
    badge: 'New Lead',
    platform: 'instagram',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'm2',
    name: 'Vikram Joshi',
    email: 'vikram.joshi@email.com',
    phone: '+91 77501 42358',
    badge: 'New Lead',
    platform: 'facebook',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'm3',
    name: 'Namita Singh',
    email: 'namita.singh@email.com',
    phone: '+91 91714 45689',
    badge: 'New Lead',
    platform: 'website',
    avatar: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=150&q=80',
  },
];

export default function AIAutomationNexusShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [seconds, setSeconds] = useState(2);
  const [leadCount, setLeadCount] = useState(583);
  const [totalLeadsCount, setTotalLeadsCount] = useState(2350);

  // Video scrubber ticker loop (0:02 -> 0:10)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 10) return 0;
        return prev + 1;
      });
      // Subtle organic increment in lead count
      setLeadCount((prev) => prev + Math.floor(Math.random() * 2));
      setTotalLeadsCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] mx-auto select-none rounded-[36px] overflow-hidden bg-[#040716] border-[2px] border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(0,212,255,0.2)] p-4 sm:p-5 flex flex-col justify-between">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_25%,rgba(0,212,255,0.4),transparent_65%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.25),transparent_70%)]" />

      <div className="relative z-10">
        {/* ================================================================ */}
        {/* 1. TOP 3 INGESTION SOURCE CARDS                                  */}
        {/* ================================================================ */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-2">
          {/* Card 1: Facebook Ads */}
          <div className="relative flex items-center gap-2 p-2 rounded-2xl bg-[#0b1228]/90 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
              <span className="font-bold text-white text-xs">f</span>
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-sans text-zinc-300 truncate">Facebook Ads</div>
              <div className="flex items-baseline gap-1">
                <span className="font-bebas text-base text-white leading-none">268</span>
                <span className="text-[8px] font-sans text-zinc-400">Leads</span>
              </div>
            </div>
          </div>

          {/* Card 2: Instagram Ads */}
          <div className="relative flex items-center gap-2 p-2 rounded-2xl bg-[#0b1228]/90 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
              <Instagram size={14} className="text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-sans text-zinc-300 truncate">Instagram Ads</div>
              <div className="flex items-baseline gap-1">
                <span className="font-bebas text-base text-white leading-none">207</span>
                <span className="text-[8px] font-sans text-zinc-400">Leads</span>
              </div>
            </div>
          </div>

          {/* Card 3: Website */}
          <div className="relative flex items-center gap-2 p-2 rounded-2xl bg-[#0b1228]/90 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center shrink-0 shadow-md">
              <Globe size={13} className="text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-sans text-zinc-300 truncate">Website</div>
              <div className="flex items-baseline gap-1">
                <span className="font-bebas text-base text-white leading-none">159</span>
                <span className="text-[8px] font-sans text-zinc-400">Leads</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 2. GLOWING NEON FIBER CABLES CONVERGING TO CENTRAL FUNNEL       */}
        {/* ================================================================ */}
        <div className="w-full h-10 -my-1 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 360 45"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Cable (Cyan) */}
            <path
              d="M 60 0 C 60 25, 160 30, 180 45"
              stroke="url(#wireCyan)"
              strokeWidth="2.4"
              strokeDasharray="4 3"
              className="animate-pulse"
            />
            {/* Center Cable (Pink / Magenta) */}
            <path
              d="M 180 0 C 180 18, 180 25, 180 45"
              stroke="url(#wirePink)"
              strokeWidth="3.0"
            />
            {/* Right Cable (Blue) */}
            <path
              d="M 300 0 C 300 25, 200 30, 180 45"
              stroke="url(#wireBlue)"
              strokeWidth="2.4"
              strokeDasharray="4 3"
              className="animate-pulse"
            />

            <defs>
              <linearGradient id="wireCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00b4d8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="wirePink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="wireBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ================================================================ */}
        {/* 3. CENTRAL NEXUS FUNNEL CAPSULE: "New Leads Incoming: 583"       */}
        {/* ================================================================ */}
        <div className="flex flex-col items-center justify-center -mt-1 mb-2">
          <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-[#071232]/95 border border-cyan-400/80 shadow-[0_0_35px_rgba(0,212,255,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-2xl">
            <div className="w-7 h-7 rounded-xl bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center text-cyan-200">
              <Users size={15} />
            </div>
            <div>
              <div className="text-[9px] font-sans text-cyan-300 font-semibold tracking-wide">
                New Leads Incoming
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bebas text-2xl text-white leading-none tracking-wide">
                  {leadCount}
                </span>
                <span className="text-[8px] font-sans text-zinc-300">
                  Real-time Lead Capture
                </span>
              </div>
            </div>
          </div>

          {/* Vertical Blazing Beam of Light Funnel */}
          <div className="w-2 h-7 bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent shadow-[0_0_25px_#00f5d4] animate-pulse" />
        </div>

        {/* ================================================================ */}
        {/* 4. FROSTED CRM DASHBOARD WINDOW BACKDROP                         */}
        {/* ================================================================ */}
        <div className="relative rounded-2xl bg-[#09112a]/80 border border-white/10 backdrop-blur-xl p-2.5 mb-2 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-[10px] font-sans text-zinc-300">
            <span className="font-semibold text-white tracking-wide">CRM Dashboard</span>
            <div className="flex items-center gap-2 text-zinc-400">
              <Search size={11} />
              <Bell size={11} />
              <div className="w-4 h-4 rounded-full bg-cyan-500/40 border border-cyan-300/60 flex items-center justify-center text-white">
                <User size={9} />
              </div>
            </div>
          </div>

          {/* Left Mini Sidebar + 4 Stat Cards */}
          <div className="flex items-stretch gap-2">
            {/* Sidebar Icon Strip */}
            <div className="flex flex-col items-center justify-between py-0.5 px-1 rounded-lg bg-white/[0.03] text-zinc-400 text-[10px] shrink-0">
              <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white mb-1">
                <Home size={10} />
              </div>
              <User size={10} className="my-0.5" />
              <Filter size={10} className="my-0.5" />
              <MessageSquare size={10} className="my-0.5" />
              <Mail size={10} className="my-0.5" />
              <BarChart2 size={10} className="my-0.5" />
              <Settings size={10} className="mt-0.5" />
            </div>

            {/* 4 KPI Cards with Sparkline Wave Graphs */}
            <div className="grid grid-cols-4 gap-1.5 flex-1">
              {/* Total Leads */}
              <div className="p-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[7.5px] font-sans text-zinc-400">Total Leads</div>
                  <div className="font-bebas text-sm text-white leading-tight">
                    {totalLeadsCount.toLocaleString()}
                  </div>
                  <div className="text-[7px] text-emerald-400 font-mono">↑ 45.6%</div>
                </div>
                {/* Sparkline wave */}
                <div className="w-full h-2.5 mt-1">
                  <svg viewBox="0 0 40 12" className="w-full h-full stroke-blue-400" fill="none">
                    <path d="M 0 10 Q 10 3, 20 8 T 40 2" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              {/* New Leads */}
              <div className="p-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[7.5px] font-sans text-zinc-400">New Leads</div>
                  <div className="font-bebas text-sm text-white leading-tight">576</div>
                  <div className="text-[7px] text-cyan-400 font-mono">↑ 38.5%</div>
                </div>
                <div className="w-full h-2.5 mt-1">
                  <svg viewBox="0 0 40 12" className="w-full h-full stroke-cyan-400" fill="none">
                    <path d="M 0 11 Q 12 5, 22 9 T 40 1" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              {/* Contacted */}
              <div className="p-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[7.5px] font-sans text-zinc-400">Contacted</div>
                  <div className="font-bebas text-sm text-white leading-tight">320</div>
                  <div className="text-[7px] text-blue-400 font-mono">↑ 24.5%</div>
                </div>
                <div className="w-full h-2.5 mt-1">
                  <svg viewBox="0 0 40 12" className="w-full h-full stroke-indigo-400" fill="none">
                    <path d="M 0 9 Q 10 6, 25 10 T 40 3" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              {/* Converted */}
              <div className="p-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-[7.5px] font-sans text-zinc-400">Converted</div>
                  <div className="font-bebas text-sm text-white leading-tight">98</div>
                  <div className="text-[7px] text-rose-400 font-mono">↑ 31.7%</div>
                </div>
                <div className="w-full h-2.5 mt-1">
                  <svg viewBox="0 0 40 12" className="w-full h-full stroke-rose-400" fill="none">
                    <path d="M 0 10 Q 15 4, 25 8 T 40 2" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* 5. 3D ISOMETRIC RUNWAY: CASCADING CARDS IN 3 TIERS OF DEPTH     */}
        {/* ================================================================ */}
        <div
          className="relative w-full h-[270px] sm:h-[300px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#020718] to-[#01030d] p-2 flex flex-col justify-between"
          style={{
            perspective: '750px',
          }}
        >
          {/* Luminous Perspective Runway Light Cone */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.45) 0%, rgba(0, 119, 182, 0.15) 45%, transparent 75%)',
            }}
          />

          {/* Perspective Runway Ground Grid */}
          <div
            className="absolute inset-x-0 bottom-0 top-6 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0, 245, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 212, 0.3) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              transform: 'rotateX(40deg)',
              transformOrigin: 'top center',
            }}
          />

          {/* ============================================================ */}
          {/* TIER 3: BACKGROUND GRID (Mini cards near light source)       */}
          {/* ============================================================ */}
          <div className="relative z-10 grid grid-cols-4 gap-1.5 opacity-60 scale-[0.75] -mt-1 transform origin-top">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={`bg-${n}`}
                className="p-1.5 rounded-lg bg-[#0a1432]/70 border border-cyan-400/20 text-center"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-400/40 mx-auto mb-0.5" />
                <div className="text-[6px] font-mono text-zinc-400 truncate">Lead #{n}</div>
              </div>
            ))}
          </div>

          {/* ============================================================ */}
          {/* TIER 2: MIDGROUND CARDS (Ishwika Iyer, Vikram Joshi, etc.)    */}
          {/* ============================================================ */}
          <div className="relative z-20 grid grid-cols-3 gap-2 px-1 scale-[0.88] transform origin-center">
            {MIDGROUND_CARDS.map((card) => (
              <div
                key={card.id}
                className="relative p-2 rounded-xl bg-[#09122c]/85 border border-cyan-400/35 shadow-[0_4px_15px_rgba(0,0,0,0.6)] backdrop-blur-md"
              >
                {/* Platform Badge on top right */}
                <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white">
                  {card.platform === 'instagram' ? <Instagram size={8} /> : card.platform === 'facebook' ? 'f' : <Globe size={8} />}
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-5 h-5 rounded-full object-cover border border-cyan-400/60"
                  />
                  <div className="min-w-0">
                    <div className="text-[8.5px] font-sans font-bold text-white truncate">
                      {card.name}
                    </div>
                    <div className="text-[6.5px] font-mono text-zinc-400 truncate">
                      {card.email}
                    </div>
                  </div>
                </div>

                <div className="inline-block text-[7px] font-mono font-bold text-cyan-300 bg-blue-600/30 px-1.5 py-0.2 rounded-full border border-cyan-400/40">
                  {card.badge}
                </div>
              </div>
            ))}
          </div>

          {/* ============================================================ */}
          {/* TIER 1: FOREGROUND CARDS (Arun Kumar, Priya Sharma, Rahul)  */}
          {/* Exact prominent cards from reference video!                  */}
          {/* ============================================================ */}
          <div className="relative z-30 grid grid-cols-3 gap-2 mt-auto pb-1">
            {FOREGROUND_CARDS.map((card, i) => (
              <div
                key={card.id}
                className={`relative p-2 sm:p-2.5 rounded-2xl bg-[#08122f]/95 border border-cyan-400/50 shadow-[0_6px_25px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer ${
                  i === 1 ? 'border-cyan-300 ring-1 ring-cyan-400/40' : ''
                }`}
              >
                {/* Platform Badge on Top Right */}
                <div
                  className={`absolute top-2 right-2 w-4 h-4 rounded-full ${card.platformIconColor} flex items-center justify-center text-[8px] text-white font-bold shadow-md`}
                >
                  {card.platform === 'instagram' ? (
                    <Instagram size={9} />
                  ) : card.platform === 'facebook' ? (
                    'f'
                  ) : (
                    <Globe size={9} />
                  )}
                </div>

                {/* Avatar + Info */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400/80 shadow-md mb-1"
                  />
                  <div className="text-[10px] font-sans font-bold text-white truncate max-w-full">
                    {card.name}
                  </div>
                  <div className="text-[7.5px] font-mono text-zinc-400 truncate max-w-full">
                    {card.email}
                  </div>
                  <div className="text-[7.5px] font-mono text-zinc-400 truncate max-w-full mb-1">
                    {card.phone}
                  </div>

                  {/* "New Lead" Blue Pill Button */}
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-sans text-[8px] font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.6)]">
                    {card.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================================================================ */}
      {/* 6. BOTTOM VIDEO PLAYBACK & LIVE SCRUBBER TIMELINE               */}
      {/* Playback HUD: [||] 0:02 / 0:10  -----O-------  Sparkles Volume    */}
      {/* ================================================================ */}
      <div className="relative z-10 mt-3 pt-2 border-t border-white/10 flex items-center justify-between gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white hover:text-cyan-400 transition-colors cursor-pointer shrink-0"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-3 bg-white rounded-sm" />
              <span className="w-1 h-3 bg-white rounded-sm" />
            </div>
          ) : (
            <Play size={13} className="fill-white" />
          )}
        </button>

        {/* Time Stamp (0:02 / 0:10) */}
        <div className="font-mono text-[11px] font-bold text-white tracking-widest shrink-0">
          0:{String(seconds).padStart(2, '0')} / 0:10
        </div>

        {/* Scrubber Timeline Bar with Slider Dot */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            setSeconds(Math.round(pct * 10));
          }}
          className="flex-1 relative h-1 rounded-full bg-white/20 overflow-visible cursor-pointer"
        >
          <div
            className="absolute top-0 left-0 bottom-0 bg-white rounded-full transition-all duration-300"
            style={{ width: `${(seconds / 10) * 100}%` }}
          />
          {/* Glowing Slider Dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] transition-all duration-300"
            style={{ left: `calc(${(seconds / 10) * 100}% - 5px)` }}
          />
        </div>

        {/* Sparkles Action Icon */}
        <div className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
          <Sparkles size={13} />
        </div>

        {/* Mute / Audio Icon */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

    </div>
  );
}
