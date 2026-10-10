import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Lock,
  Unlock,
  X,
  LayoutDashboard,
  User,
  FolderGit2,
  Sparkles,
  Briefcase,
  BookOpen,
  Sliders,
  Database,
  Eye,
  Save,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  Activity,
  MousePointerClick,
  Smartphone,
  Monitor,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Upload,
  Image,
  RefreshCw,
} from 'lucide-react';

export default function AdminDashboard() {
  const {
    data,
    updateSection,
    visualSettings,
    setVisualSettings,
    analytics,
    isAdminOpen,
    closeAdmin,
    isAuthenticated,
    loginAdmin,
    logoutAdmin,
    resetToDefaults,
  } = usePortfolio();

  // Authentication State
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState('analytics');

  // Success Notification
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Editable Form States
  const [aboutForm, setAboutForm] = useState(() => ({
    name: data.personal?.name || 'MD SAHADAT HOSSAIN',
    subtitle: 'Driven by Autonomy & Precision.',
    introKicker:
      'I am Md Sahadat Hossain — an Autonomous Systems Engineer & AI Architect who transforms cutting-edge AI models into resilient, scalable, production-grade software.',
    storyP1:
      'My journey into technology was born not from a classroom syllabus, but from a lifelong obsession with code, web architecture, and digital engineering since childhood. While I completed my Master’s Degree, my real engineering edge was forged through relentless independent research, continuous experimentation, and building tangible software from the ground up.',
    storyP2:
      'I believe true engineering is proven by execution, not certificates—demonstrated through resilient backend architectures, intuitive frontend experiences, and software that delivers real-world impact. Combining deep fluency in modern web standards (HTML5, CSS, modern JavaScript, Python) with frontier AI models (Claude Opus & Sonnet, OpenAI GPT-4o, Google Gemini), I orchestrate intelligent, self-operating multi-agent ecosystems designed to scale.',
    degreeTitle: "Master's Degree (Completed) • Self-Driven Research",
    degreeDesc:
      'Advancing systems through independent algorithmic research, systems architecture, and full-stack autonomous AI engineering.',
    philosophyQuote:
      'Real engineering is measured by execution, not certificates. Turning autonomous intelligence into production solutions that eliminate operational friction and scale effortlessly.',
    targets: [
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
    ],
  }));

  const [personalForm, setPersonalForm] = useState(() => ({
    ...data.personal,
    avatarImage: data.personal?.avatarImage || '/sahadat-avatar.jpg',
    portraitImage: data.personal?.portraitImage || '/sahadat-portrait-full.png',
    facebook: data.personal?.facebook || 'https://facebook.com/stl.sahadat',
    twitter: data.personal?.twitter || 'https://x.com/stl_sahadat',
    instagram: data.personal?.instagram || 'https://www.instagram.com/stlsahadat/?hl=en',
    youtube: data.personal?.youtube || 'https://www.youtube.com/@SahadatAutomation0',
    telegram: data.personal?.telegram || 'https://t.me/stl_sahadat',
    rolesString: Array.isArray(data.personal?.roles)
      ? data.personal.roles.join(', ')
      : 'AI Agent Architect, Autonomous Systems Engineer, Full-Stack AI Developer, Enterprise Prompt Engineer, Multi-Agent Orchestrator',
  }));

  const handleFileUpload = (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Selected image is larger than 5MB. Please choose a smaller image.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPersonalForm((prev) => ({
        ...prev,
        [field]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const [projectsList, setProjectsList] = useState(() => data.projects || []);

  const [editingProjectIdx, setEditingProjectIdx] = useState(null);
  const [newProject, setNewProject] = useState({
    id: `0${(data.projects?.length || 0) + 1}`,
    title: '',
    category: '',
    description: '',
    tags: '',
    demoUrl: '',
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
  });
  const [isAddingProject, setIsAddingProject] = useState(false);

  if (!isAdminOpen) return null;

  // Handle Login via Secure Backend API
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginAdmin(passwordInput);
    if (success) {
      setAuthError(false);
      setPasswordInput('');
    } else {
      setAuthError(true);
    }
  };

  const triggerSaveNotification = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  // Save About Section Changes
  const handleSaveAbout = (e) => {
    e.preventDefault();
    updateSection('aboutCustom', aboutForm);
    triggerSaveNotification();
  };

  // Save Personal / Hero Changes
  const handleSavePersonal = (e) => {
    e.preventDefault();
    const rolesArray = personalForm.rolesString
      .split(',')
      .map((r) => r.trim())
      .filter(Boolean);
    updateSection('personal', {
      ...personalForm,
      roles: rolesArray,
    });
    triggerSaveNotification();
  };

  // Save Projects
  const handleSaveProjects = () => {
    updateSection('projects', projectsList);
    triggerSaveNotification();
  };

  const handleAddNewProject = (e) => {
    e.preventDefault();
    if (!newProject.title) return;
    const projectToAdd = {
      ...newProject,
      tags: typeof newProject.tags === 'string'
        ? newProject.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : newProject.tags,
    };
    const updated = [...projectsList, projectToAdd];
    setProjectsList(updated);
    updateSection('projects', updated);
    setIsAddingProject(false);
    setNewProject({
      id: `0${updated.length + 1}`,
      title: '',
      category: '',
      description: '',
      tags: '',
      demoUrl: '',
      githubUrl: '',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    });
    triggerSaveNotification();
  };

  const handleDeleteProject = (idx) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updated = projectsList.filter((_, i) => i !== idx);
      setProjectsList(updated);
      updateSection('projects', updated);
      triggerSaveNotification();
    }
  };

  // Download Config as JSON/File
  const handleExportData = () => {
    const fullConfig = {
      personal: data.personal,
      projects: data.projects,
      aboutCustom: aboutForm,
      visualSettings,
      education: data.education,
      skills: data.skills,
      experience: data.experience,
      blogs: data.blogs,
    };
    const blob = new Blob([JSON.stringify(fullConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sahadat_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Format Seconds to Minutes/Seconds
  const formatTime = (seconds = 0) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // ----------------------------------------------------------------------
  // AUTHENTICATION MODAL (If Not Authenticated)
  // ----------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-[#090912]/95 p-8 shadow-[0_0_50px_rgba(239,35,60,0.25)] text-white">
          <button
            onClick={closeAdmin}
            className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center text-center mb-6">
            <div className="p-4 rounded-2xl bg-crimson/15 text-crimson mb-4 border border-crimson/30 shadow-[0_0_20px_rgba(239,35,60,0.3)]">
              <Lock size={32} />
            </div>
            <h2 className="font-bebas text-3xl tracking-wider text-white">
              CONTROL CONSOLE ACCESS
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
              Enter Administrative Key To Access System
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setAuthError(false);
                  }}
                  placeholder="SECURITY ACCESS KEY"
                  className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                    authError ? 'border-red-500 shadow-[0_0_12px_rgba(239,35,60,0.5)]' : 'border-white/15 focus:border-crimson'
                  } text-white font-mono text-sm tracking-widest outline-none transition-all`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-200"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>

              {authError && (
                <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-red-400">
                  <ShieldAlert size={14} />
                  <span>Invalid Access Key. Access Denied.</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-widest shadow-[0_0_20px_rgba(239,35,60,0.4)] transition-all"
            >
              AUTHENTICATE CONSOLE
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Secured Session • Md Sahadat Hossain
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // FULL-SCREEN ADMIN CONSOLE (Authenticated)
  // ----------------------------------------------------------------------
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050508] text-white flex flex-col overflow-hidden font-sans">
      
      {/* Top Header Bar */}
      <header className="h-16 px-6 border-b border-white/10 bg-[#080811]/90 backdrop-blur-xl flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <div>
            <h1 className="font-bebas text-2xl tracking-wider text-white leading-none">
              SAHADAT COMMAND CONSOLE
            </h1>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Live Production Content & Telemetry Engine
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveSuccess && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono animate-in fade-in">
              <CheckCircle size={14} />
              <span>SAVED & APPLIED LIVE</span>
            </div>
          )}

          <button
            onClick={closeAdmin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all"
          >
            <Eye size={14} />
            <span>VIEW LIVE SITE</span>
          </button>

          <button
            onClick={logoutAdmin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-xs font-mono uppercase tracking-wider text-red-400 hover:text-red-300 transition-all"
          >
            <Lock size={14} />
            <span>LOCK</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Body (Sidebar + Content Area) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Navigation Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-[#07070f] flex flex-col justify-between shrink-0 overflow-y-auto p-4 space-y-6">
          <div className="space-y-1.5">
            <div className="px-3 pb-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
              MODULES & MANAGEMENT
            </div>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${
                activeTab === 'analytics'
                  ? 'bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Telemetry & Visits</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${
                activeTab === 'about'
                  ? 'bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <User size={16} />
              <span>About Me Editor</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${
                activeTab === 'projects'
                  ? 'bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FolderGit2 size={16} />
              <span>Projects Manager</span>
            </button>

            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${
                activeTab === 'hero'
                  ? 'bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles size={16} />
              <span>Hero & Identity</span>
            </button>

            <button
              onClick={() => setActiveTab('visuals')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all text-left ${
                activeTab === 'visuals'
                  ? 'bg-crimson text-white font-bold shadow-[0_0_15px_rgba(239,35,60,0.35)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sliders size={16} />
              <span>Visuals & Lighting</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={handleExportData}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-300 hover:text-white transition-all uppercase"
            >
              <Database size={14} />
              <span>Download Backup</span>
            </button>

            <button
              onClick={resetToDefaults}
              className="w-full py-2 text-[10px] font-mono text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-wider text-center"
            >
              Restore Defaults
            </button>
          </div>
        </aside>

        {/* Content Panel Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#050508]/60">
          
          {/* ================================================================ */}
          {/* TAB 1: TELEMETRY & LIVE ANALYTICS                                */}
          {/* ================================================================ */}
          {activeTab === 'analytics' && (
            <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div>
                <h2 className="font-bebas text-3xl tracking-wide text-white">
                  REAL-TIME TELEMETRY & VISITOR AUDIT
                </h2>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                  Client interaction data, session time, and contact click events
                </p>
              </div>

              {/* 4 Big Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg">
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider">Total Page Visits</span>
                    <Activity size={18} className="text-crimson" />
                  </div>
                  <div className="font-bebas text-4xl text-white">
                    {analytics.totalVisits || 1}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-2">
                    ● Tracking live sessions
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg">
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider">Total Time on Site</span>
                    <Clock size={18} className="text-amber-400" />
                  </div>
                  <div className="font-bebas text-4xl text-white">
                    {formatTime(analytics.totalTimeSpentSeconds || 0)}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-2">
                    Accumulated user engagement
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg">
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider">WhatsApp Clicks</span>
                    <MousePointerClick size={18} className="text-emerald-400" />
                  </div>
                  <div className="font-bebas text-4xl text-emerald-400">
                    {analytics.clicks?.whatsapp || 0}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-2">
                    Direct inquiry triggers
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] shadow-lg">
                  <div className="flex items-center justify-between text-zinc-400 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider">Social / Email Clicks</span>
                    <ExternalLink size={18} className="text-blue-400" />
                  </div>
                  <div className="font-bebas text-4xl text-white">
                    {(analytics.clicks?.email || 0) + (analytics.clicks?.github || 0) + (analytics.clicks?.linkedin || 0)}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-2">
                    Email, GitHub, LinkedIn
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown & Recent Logs Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Contact Clicks Distribution (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    Interaction Channel Breakdown
                  </h3>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">WhatsApp Inquiries</span>
                      <span className="text-emerald-400 font-bold">{analytics.clicks?.whatsapp || 0} clicks</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${Math.min(100, (analytics.clicks?.whatsapp || 0) * 15)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">Email Triggers</span>
                      <span className="text-white font-bold">{analytics.clicks?.email || 0} clicks</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${Math.min(100, (analytics.clicks?.email || 0) * 20)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">GitHub Profile Visits</span>
                      <span className="text-white font-bold">{analytics.clicks?.github || 0} clicks</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-zinc-300 rounded-full"
                        style={{ width: `${Math.min(100, (analytics.clicks?.github || 0) * 20)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400">LinkedIn Connections</span>
                      <span className="text-white font-bold">{analytics.clicks?.linkedin || 0} clicks</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-full"
                        style={{ width: `${Math.min(100, (analytics.clicks?.linkedin || 0) * 20)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Live Real-time Activity Feed (7 cols) */}
                <div className="lg:col-span-7 p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                      Live User Interaction Stream
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Last 50 Events</span>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
                    {analytics.recentLogs && analytics.recentLogs.length > 0 ? (
                      analytics.recentLogs.map((log) => (
                        <div
                          key={log.id}
                          className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                            <span className="text-zinc-200">{log.action}</span>
                            {log.label && <span className="text-zinc-500">({log.label})</span>}
                          </div>
                          <span className="text-[10px] text-zinc-400">{log.time}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10 text-xs font-mono text-zinc-500">
                        No external click events logged yet in current session.
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 2: ABOUT ME EDITOR                                           */}
          {/* ================================================================ */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bebas text-3xl tracking-wide text-white">
                    ABOUT ME SECTION CONTROLLER
                  </h2>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                    Manage narrative paragraphs, academic degree, philosophy & target pillars
                  </p>
                </div>
                <button
                  onClick={handleSaveAbout}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all"
                >
                  <Save size={15} />
                  <span>APPLY LIVE</span>
                </button>
              </div>

              <form onSubmit={handleSaveAbout} className="space-y-6">
                
                {/* Header Kicker */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    Header Subtitle & Intro Kicker
                  </h3>
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Header Script Quote (Right Side)
                    </label>
                    <input
                      type="text"
                      value={aboutForm.subtitle}
                      onChange={(e) => setAboutForm({ ...aboutForm, subtitle: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Intro Summary Kicker
                    </label>
                    <textarea
                      rows={2}
                      value={aboutForm.introKicker}
                      onChange={(e) => setAboutForm({ ...aboutForm, introKicker: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                    />
                  </div>
                </div>

                {/* The Architect's Story Card */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    The Architect's Story (Core Narrative)
                  </h3>
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Paragraph 1: Childhood Passion, Master's Degree & Self-Driven Mastery
                    </label>
                    <textarea
                      rows={3}
                      value={aboutForm.storyP1}
                      onChange={(e) => setAboutForm({ ...aboutForm, storyP1: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-zinc-200 outline-none leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Paragraph 2: Code Execution over Certificates & Frontier AI Models
                    </label>
                    <textarea
                      rows={3}
                      value={aboutForm.storyP2}
                      onChange={(e) => setAboutForm({ ...aboutForm, storyP2: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-zinc-200 outline-none leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Academic Degree Heading
                      </label>
                      <input
                        type="text"
                        value={aboutForm.degreeTitle}
                        onChange={(e) => setAboutForm({ ...aboutForm, degreeTitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Research Methodology Note
                      </label>
                      <input
                        type="text"
                        value={aboutForm.degreeDesc}
                        onChange={(e) => setAboutForm({ ...aboutForm, degreeDesc: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Core Philosophy Quote */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    Core Engineering Philosophy Quote
                  </h3>
                  <textarea
                    rows={2}
                    value={aboutForm.philosophyQuote}
                    onChange={(e) => setAboutForm({ ...aboutForm, philosophyQuote: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none font-medium"
                  />
                </div>

                {/* 3 Core Target Pillars */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    Core Targets & ROI Impact Cards
                  </h3>

                  {aboutForm.targets.map((tgt, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-white/5 bg-black/40 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        <div className="sm:col-span-8">
                          <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">
                            Target 0{idx + 1} Title
                          </label>
                          <input
                            type="text"
                            value={tgt.title}
                            onChange={(e) => {
                              const updated = [...aboutForm.targets];
                              updated[idx].title = e.target.value;
                              setAboutForm({ ...aboutForm, targets: updated });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-sans text-white outline-none"
                          />
                        </div>
                        <div className="sm:col-span-4">
                          <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">
                            Pill Badge (Stat)
                          </label>
                          <input
                            type="text"
                            value={tgt.stat}
                            onChange={(e) => {
                              const updated = [...aboutForm.targets];
                              updated[idx].stat = e.target.value;
                              setAboutForm({ ...aboutForm, targets: updated });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-zinc-200 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={tgt.desc}
                          onChange={(e) => {
                            const updated = [...aboutForm.targets];
                            updated[idx].desc = e.target.value;
                            setAboutForm({ ...aboutForm, targets: updated });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-sans text-zinc-300 outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all"
                  >
                    <Save size={16} />
                    <span>SAVE ALL ABOUT ME CHANGES</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 3: PROJECTS MANAGER                                          */}
          {/* ================================================================ */}
          {activeTab === 'projects' && (
            <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bebas text-3xl tracking-wide text-white">
                    PROJECTS & CASE STUDIES MANAGER
                  </h2>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                    Add new projects, update demo links, repository URLs, and tags
                  </p>
                </div>

                <button
                  onClick={() => setIsAddingProject(!isAddingProject)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all"
                >
                  <Plus size={16} />
                  <span>{isAddingProject ? 'CANCEL' : 'ADD NEW PROJECT'}</span>
                </button>
              </div>

              {/* Add Project Form Drawer */}
              {isAddingProject && (
                <div className="p-6 rounded-2xl border border-crimson/40 bg-[#0d0d1a] shadow-xl space-y-4 animate-in fade-in">
                  <h3 className="font-mono text-xs uppercase font-bold text-crimson tracking-wider flex items-center gap-2">
                    <Plus size={14} />
                    <span>Create New Portfolio Project</span>
                  </h3>

                  <form onSubmit={handleAddNewProject} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          Project Title
                        </label>
                        <input
                          type="text"
                          required
                          value={newProject.title}
                          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                          placeholder="e.g. Autonomous Multi-Agent Swarm"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          Category / Subtitle
                        </label>
                        <input
                          type="text"
                          required
                          value={newProject.category}
                          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                          placeholder="e.g. Autonomous AI Engine"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        placeholder="Detailed project summary..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          Live Demo URL
                        </label>
                        <input
                          type="url"
                          value={newProject.demoUrl}
                          onChange={(e) => setNewProject({ ...newProject, demoUrl: e.target.value })}
                          placeholder="https://..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-mono text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          GitHub Repo URL
                        </label>
                        <input
                          type="url"
                          value={newProject.githubUrl}
                          onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                          placeholder="https://github.com/..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-mono text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={newProject.tags}
                          onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                          placeholder="CrewAI, Python, LangChain"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-all"
                      >
                        Publish Project To Site
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Projects List */}
              <div className="space-y-4">
                {projectsList.map((proj, idx) => (
                  <div
                    key={proj.id || idx}
                    className="p-5 rounded-2xl border border-white/10 bg-[#0a0a14] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-bebas text-2xl text-crimson w-8">
                        {proj.id || `0${idx + 1}`}
                      </span>
                      <div>
                        <h4 className="font-outfit text-base font-bold text-white uppercase tracking-wide">
                          {proj.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 mt-0.5">
                          {proj.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 rounded-lg border border-white/15 text-[11px] font-mono text-zinc-300 hover:text-white hover:bg-white/10"
                        >
                          Demo ↗
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteProject(idx)}
                        className="p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 4: HERO & IDENTITY                                           */}
          {/* ================================================================ */}
          {activeTab === 'hero' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bebas text-3xl tracking-wide text-white">
                    HERO SECTION & PERSONAL DETAILS
                  </h2>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                    Manage name, rotating roles, bio and contact channels
                  </p>
                </div>
                <button
                  onClick={handleSavePersonal}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all"
                >
                  <Save size={15} />
                  <span>APPLY LIVE</span>
                </button>
              </div>

              <form onSubmit={handleSavePersonal} className="space-y-6">
                
                {/* Visual Assets & Photos Studio Card */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Image size={16} className="text-crimson" />
                      <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                        Profile Photos & Visual Assets Studio
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      Live Base64 Upload & URL Support
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 1. Small Navbar Avatar */}
                    <div className="p-4 rounded-xl border border-white/8 bg-black/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-mono text-zinc-300 uppercase font-semibold">
                          1. Navbar Profile Avatar (Small)
                        </label>
                        <button
                          type="button"
                          onClick={() => setPersonalForm({ ...personalForm, avatarImage: '/sahadat-avatar.jpg' })}
                          className="text-[10px] font-mono text-zinc-400 hover:text-crimson flex items-center gap-1 transition-colors"
                          title="Reset to default image"
                        >
                          <RefreshCw size={11} />
                          <span>Reset</span>
                        </button>
                      </div>

                      {/* Preview */}
                      <div className="flex items-center gap-4 py-2">
                        <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-red-600 to-rose-500 shadow-[0_0_15px_rgba(220,38,38,0.6)] shrink-0">
                          <div className="w-14 h-14 rounded-full overflow-hidden bg-black flex items-center justify-center">
                            <img
                              src={personalForm.avatarImage || '/sahadat-avatar.jpg'}
                              alt="Avatar Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 leading-snug">
                          Appears in the top-left navigation bar with glowing red perimeter ring.
                        </div>
                      </div>

                      {/* File Upload Button */}
                      <div>
                        <label className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-crimson/50 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer transition-all">
                          <Upload size={14} className="text-crimson" />
                          <span>Upload From Device / Phone</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, 'avatarImage')}
                          />
                        </label>
                      </div>

                      {/* Direct URL input */}
                      <div>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">
                          Or Direct Image URL / Path:
                        </span>
                        <input
                          type="text"
                          value={personalForm.avatarImage || ''}
                          onChange={(e) => setPersonalForm({ ...personalForm, avatarImage: e.target.value })}
                          placeholder="/sahadat-avatar.jpg or https://..."
                          className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                        />
                      </div>
                    </div>

                    {/* 2. Large Hero Studio Portrait */}
                    <div className="p-4 rounded-xl border border-white/8 bg-black/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-mono text-zinc-300 uppercase font-semibold">
                          2. Hero Studio Portrait (Big)
                        </label>
                        <button
                          type="button"
                          onClick={() => setPersonalForm({ ...personalForm, portraitImage: '/sahadat-portrait-full.png' })}
                          className="text-[10px] font-mono text-zinc-400 hover:text-crimson flex items-center gap-1 transition-colors"
                          title="Reset to default image"
                        >
                          <RefreshCw size={11} />
                          <span>Reset</span>
                        </button>
                      </div>

                      {/* Preview */}
                      <div className="flex items-center gap-4 py-2">
                        <div className="w-14 h-16 rounded-xl overflow-hidden bg-black/80 border border-white/10 flex items-end justify-center shrink-0 relative">
                          <img
                            src={personalForm.portraitImage || '/sahadat-portrait-full.png'}
                            alt="Portrait Preview"
                            className="w-full h-full object-contain object-bottom"
                          />
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 leading-snug">
                          Main photographic spotlight cutout in the Hero front section.
                        </div>
                      </div>

                      {/* File Upload Button */}
                      <div>
                        <label className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-crimson/50 text-zinc-300 hover:text-white font-mono text-xs cursor-pointer transition-all">
                          <Upload size={14} className="text-crimson" />
                          <span>Upload From Device / Phone</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, 'portraitImage')}
                          />
                        </label>
                      </div>

                      {/* Direct URL input */}
                      <div>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase mb-1">
                          Or Direct Image URL / Path:
                        </span>
                        <input
                          type="text"
                          value={personalForm.portraitImage || ''}
                          onChange={(e) => setPersonalForm({ ...personalForm, portraitImage: e.target.value })}
                          placeholder="/sahadat-portrait-full.png or https://..."
                          className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Identity & Bio */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                    Core Identity & Roles
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={personalForm.name}
                        onChange={(e) => setPersonalForm({ ...personalForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Short Name / Callout
                      </label>
                      <input
                        type="text"
                        value={personalForm.shortName}
                        onChange={(e) => setPersonalForm({ ...personalForm, shortName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Cyber Typewriter Rotating Roles (comma separated)
                    </label>
                    <input
                      type="text"
                      value={personalForm.rolesString}
                      onChange={(e) => setPersonalForm({ ...personalForm, rolesString: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                      Hero Bio Description
                    </label>
                    <textarea
                      rows={3}
                      value={personalForm.bio}
                      onChange={(e) => setPersonalForm({ ...personalForm, bio: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-sm font-sans text-white outline-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Contact Channels & Social Media Hub */}
                <div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a14] space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs uppercase font-bold text-zinc-300 tracking-wider">
                      Contact Channels & Social Media Hub
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      Syncs with Footer Dock & Cyber Nodes
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={personalForm.email || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={personalForm.phone || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Facebook Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://facebook.com/..."
                        value={personalForm.facebook || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, facebook: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Twitter / X Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://x.com/..."
                        value={personalForm.twitter || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, twitter: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Instagram Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://instagram.com/..."
                        value={personalForm.instagram || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, instagram: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        YouTube Channel URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://youtube.com/@..."
                        value={personalForm.youtube || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, youtube: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        GitHub Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={personalForm.github || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, github: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        value={personalForm.linkedin || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, linkedin: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                        Telegram Username / Link
                      </label>
                      <input
                        type="text"
                        placeholder="https://t.me/..."
                        value={personalForm.telegram || ''}
                        onChange={(e) => setPersonalForm({ ...personalForm, telegram: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 focus:border-crimson text-xs font-mono text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-crimson hover:bg-red-600 text-white font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all"
                  >
                    <Save size={16} />
                    <span>SAVE HERO & PERSONAL DETAILS</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 5: VISUALS & LIGHTING SLIDERS                                */}
          {/* ================================================================ */}
          {activeTab === 'visuals' && (
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
              <div>
                <h2 className="font-bebas text-3xl tracking-wide text-white">
                  VISUAL BRIGHTNESS & LIGHTING INTENSITY CONTROLS
                </h2>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
                  Adjust 3D canvas opacity, atmospheric glow factor, and visual effects in real time
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a14] space-y-8 shadow-xl">
                {/* 1. Spider Canvas Brightness */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-outfit text-base font-bold uppercase text-white">
                        3D Background Canvas Brightness
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        Controls the opacity of red spider crawl tendrils & background mesh
                      </p>
                    </div>
                    <span className="font-mono text-sm font-bold text-crimson px-3 py-1 rounded-lg bg-crimson/15 border border-crimson/30">
                      {visualSettings.canvasBrightness}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="150"
                    step="5"
                    value={visualSettings.canvasBrightness}
                    onChange={(e) =>
                      setVisualSettings({
                        ...visualSettings,
                        canvasBrightness: Number(e.target.value),
                      })
                    }
                    className="w-full accent-red-600 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>20% (Subtle / Dim)</span>
                    <span>100% (Default Balanced)</span>
                    <span>150% (High Intensity)</span>
                  </div>
                </div>

                {/* 2. Neon Glow Intensity Factor */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-outfit text-base font-bold uppercase text-white">
                        Atmospheric Glow & Lighting Factor
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        Controls the blur spread of ambient neon spotlights & capsule borders
                      </p>
                    </div>
                    <span className="font-mono text-sm font-bold text-white px-3 py-1 rounded-lg bg-white/10 border border-white/20">
                      {visualSettings.glowIntensity}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="30"
                    max="150"
                    step="5"
                    value={visualSettings.glowIntensity}
                    onChange={(e) =>
                      setVisualSettings({
                        ...visualSettings,
                        glowIntensity: Number(e.target.value),
                      })
                    }
                    className="w-full accent-white cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>30% (Minimal / Soft)</span>
                    <span>100% (Default)</span>
                    <span>150% (High Voltage Neon)</span>
                  </div>
                </div>

                {/* Reset Visuals */}
                <div className="pt-4 flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-500">Changes apply to entire site immediately</span>
                  <button
                    onClick={() =>
                      setVisualSettings({
                        canvasBrightness: 100,
                        glowIntensity: 100,
                        motionDamping: 'normal',
                        particleColor: '#ef233c',
                      })
                    }
                    className="px-4 py-2 rounded-xl border border-white/15 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors uppercase"
                  >
                    Reset Visuals To 100%
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
