import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import SpiderCursorCanvas from './components/SpiderCursorCanvas';
import MouseSpotlight from './components/MouseSpotlight';
import AgencyNavbar from './components/AgencyNavbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './components/admin/AdminDashboard';
import { Lock } from 'lucide-react';

function AdminTriggerButton() {
  const { openAdmin } = usePortfolio();

  return (
    <button
      onClick={openAdmin}
      title="Open Control Console (Ctrl+Shift+A)"
      aria-label="Open Admin Console"
      className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-[#080811]/70 border border-white/10 hover:border-crimson/50 text-zinc-400 hover:text-white backdrop-blur-xl shadow-lg transition-all duration-300 opacity-40 hover:opacity-100 hover:scale-110 group select-none cursor-pointer"
    >
      <Lock size={14} className="group-hover:text-crimson transition-colors" />
    </button>
  );
}

function MainPortfolio() {
  return (
    <div className="min-h-screen bg-[#050505] dark:bg-[#050505] light:bg-[#f8fafc] text-white dark:text-white light:text-zinc-900 selection:bg-crimson selection:text-white font-sans relative overflow-x-hidden transition-colors duration-300">
      
      {/* Meowish Generative Spider Cursor Animation (Crawling tendrils in red glow) */}
      <SpiderCursorCanvas />

      {/* Interactive Cursor Lighting Spotlight (red glow on cursor movement) */}
      <MouseSpotlight />

      {/* Floating VisionOS Glass Navigation Header with Real-Time Clean URL Scroll-Spy */}
      <AgencyNavbar />

      {/* Continuous Executive Portfolio Flow */}
      <main className="relative z-10 bg-transparent">
        <HomePage />
      </main>

      {/* Discrete Admin Console Floating Trigger (also accessible via Ctrl+Shift+A or #admin) */}
      <AdminTriggerButton />

      {/* Full-Screen Admin Command Console */}
      <AdminDashboard />

    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <MainPortfolio />
    </PortfolioProvider>
  );
}
