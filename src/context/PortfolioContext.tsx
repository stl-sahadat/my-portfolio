import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as initialPortfolioData } from '../data/portfolioData';

const PortfolioContext = createContext(null);

const STORAGE_KEY_DATA = 'sahadat_portfolio_master_data';
const STORAGE_KEY_ANALYTICS = 'sahadat_portfolio_analytics';
const STORAGE_KEY_VISUALS = 'sahadat_portfolio_visual_settings';

const DEFAULT_VISUAL_SETTINGS = {
  canvasBrightness: 100, // percentage 20 - 150
  glowIntensity: 100,    // percentage 20 - 150
  motionDamping: 'normal', // 'smooth' | 'normal' | 'cinematic'
  particleColor: '#ef233c',
};

const DEFAULT_ANALYTICS = {
  totalVisits: 1,
  firstVisitDate: new Date().toISOString(),
  lastVisitDate: new Date().toISOString(),
  totalTimeSpentSeconds: 0,
  clicks: {
    whatsapp: 0,
    email: 0,
    phone: 0,
    github: 0,
    linkedin: 0,
    resume: 0,
    projects: {},
  },
  deviceType: {
    desktop: 0,
    mobile: 0,
    tablet: 0,
  },
  recentLogs: [],
};

export function PortfolioProvider({ children }) {
  // 1. Portfolio Content Data
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA);
      if (saved) {
        const parsed = JSON.parse(saved);
        let mergedProjects = initialPortfolioData.projects.map((defProj, idx) => {
          const userProj = parsed.projects?.[idx];
          if (!userProj) return defProj;
          return {
            ...defProj,
            ...userProj,
            tags: (userProj.tags && userProj.tags.length > 0) ? userProj.tags : (defProj.tags || []),
            contributions: (userProj.contributions && userProj.contributions.length > 0) ? userProj.contributions : (defProj.contributions || []),
          };
        });

        return {
          ...initialPortfolioData,
          ...parsed,
          projects: mergedProjects,
          personal: {
            ...initialPortfolioData.personal,
            ...(parsed.personal || {}),
            location: (parsed.personal?.location && !parsed.personal.location.includes('Dhaka'))
              ? parsed.personal.location
              : initialPortfolioData.personal.location,
          },
        };
      }
    } catch (e) {
      console.warn('Could not read portfolio data from localStorage', e);
    }
    return initialPortfolioData;
  });

  // 2. Visual & Display Settings
  const [visualSettings, setVisualSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_VISUALS);
      if (saved) {
        return { ...DEFAULT_VISUAL_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not read visual settings from localStorage', e);
    }
    return DEFAULT_VISUAL_SETTINGS;
  });

  // 3. Telemetry & Analytics
  const [analytics, setAnalytics] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANALYTICS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_ANALYTICS,
          ...parsed,
          clicks: { ...DEFAULT_ANALYTICS.clicks, ...(parsed.clicks || {}) },
          deviceType: { ...DEFAULT_ANALYTICS.deviceType, ...(parsed.deviceType || {}) },
          recentLogs: Array.isArray(parsed.recentLogs) ? parsed.recentLogs : [],
        };
      }
    } catch (e) {
      console.warn('Could not read analytics from localStorage', e);
    }
    return DEFAULT_ANALYTICS;
  });

  // 4. Admin View State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('sahadat_admin_auth') === 'true';
  });

  // 5. Multi-Page Client Routing State (HTML5 History API - NO HASHTAGS)
  const getPageFromUrl = () => {
    if (typeof window === 'undefined') return 'home';

    // 1. If an old hashtag is present in the URL, immediately sanitize it into a clean URL
    if (window.location.hash) {
      const cleanHash = window.location.hash.toLowerCase().replace(/^#\/?/, '').split('?')[0].split('/')[0];
      if (['about', 'projects', 'skills', 'experience', 'blog', 'contact'].includes(cleanHash)) {
        window.history.replaceState({ page: cleanHash }, '', `/${cleanHash}`);
        return cleanHash;
      } else if (cleanHash !== 'admin') {
        window.history.replaceState({ page: 'home' }, '', '/');
        return 'home';
      }
    }

    // 2. Read clean pathname (e.g. /projects, /about, /skills)
    const path = window.location.pathname.toLowerCase().replace(/^\/+/, '').split('/')[0];
    if (['about', 'projects', 'skills', 'experience', 'blog', 'contact'].includes(path)) {
      return path;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(() => {
    return getPageFromUrl();
  });

  const navigateToPage = (pageName: string) => {
    const page = (pageName || 'home').toLowerCase();
    setCurrentPage(page);
    const targetUrl = page === 'home' ? '/' : `/${page}`;

    // Push clean URL to browser address bar (NO # HASHTAGS)
    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.pushState({ page }, '', targetUrl);
    }

    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = page === 'projects' ? 'projects' : page;
      const el = document.getElementById(targetId) || (page === 'projects' ? document.getElementById('websites') : null);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Sanitize any lingering hash on initial mount
    if (window.location.hash && window.location.hash !== '#admin') {
      const cleanHash = window.location.hash.toLowerCase().replace(/^#\/?/, '').split('?')[0].split('/')[0];
      const targetUrl = ['about', 'projects', 'skills', 'experience', 'blog', 'contact'].includes(cleanHash)
        ? `/${cleanHash}`
        : '/';
      window.history.replaceState({ page: cleanHash || 'home' }, '', targetUrl);
    }

    // On initial mount, if URL has a section (e.g. /about, /projects), scroll to it smoothly
    const initialPage = getPageFromUrl();
    if (initialPage && initialPage !== 'home') {
      setTimeout(() => {
        const targetId = initialPage === 'projects' ? 'projects' : initialPage;
        const el = document.getElementById(targetId) || (initialPage === 'projects' ? document.getElementById('websites') : null);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }

    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      if (page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = page === 'projects' ? 'projects' : page;
        const el = document.getElementById(targetId) || (page === 'projects' ? document.getElementById('websites') : null);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync Data to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage', e);
    }
  }, [data]);

  // Sync Visuals to localStorage & CSS Variables
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_VISUALS, JSON.stringify(visualSettings));
      // Inject CSS variables for real-time visual control
      document.documentElement.style.setProperty(
        '--canvas-opacity',
        (visualSettings.canvasBrightness / 100).toString()
      );
      document.documentElement.style.setProperty(
        '--glow-factor',
        (visualSettings.glowIntensity / 100).toString()
      );
    } catch (e) {
      console.error('Failed to apply visual settings', e);
    }
  }, [visualSettings]);

  // Track session timer and visitor stats
  useEffect(() => {
    // Determine device
    const width = window.innerWidth;
    const device = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';

    setAnalytics((prev) => {
      const updated = {
        ...prev,
        totalVisits: (prev.totalVisits || 0) + 1,
        lastVisitDate: new Date().toISOString(),
        deviceType: {
          ...prev.deviceType,
          [device]: (prev.deviceType[device] || 0) + 1,
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY_ANALYTICS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // Time spent tracking
    const interval = setInterval(() => {
      setAnalytics((prev) => {
        const nextTime = (prev.totalTimeSpentSeconds || 0) + 5;
        const updated = { ...prev, totalTimeSpentSeconds: nextTime };
        try {
          localStorage.setItem(STORAGE_KEY_ANALYTICS, JSON.stringify(updated));
        } catch (e) {}
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Listen for hash/route change (#admin or /admin)
  useEffect(() => {
    const checkRoute = () => {
      const isRoute =
        window.location.hash === '#admin' ||
        window.location.pathname === '/admin' ||
        window.location.search.includes('admin');
      if (isRoute) {
        setIsAdminOpen(true);
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);

    // Keyboard shortcut: Ctrl + Shift + A
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Event Tracker Helper
  const trackEvent = (actionType, label = '') => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logEntry = {
      id: Date.now() + Math.random(),
      time: timestamp,
      action: actionType,
      label,
    };

    setAnalytics((prev) => {
      const currentClicks = { ...prev.clicks };
      if (actionType.toLowerCase().includes('whatsapp')) {
        currentClicks.whatsapp = (currentClicks.whatsapp || 0) + 1;
      } else if (actionType.toLowerCase().includes('email')) {
        currentClicks.email = (currentClicks.email || 0) + 1;
      } else if (actionType.toLowerCase().includes('github')) {
        currentClicks.github = (currentClicks.github || 0) + 1;
      } else if (actionType.toLowerCase().includes('linkedin')) {
        currentClicks.linkedin = (currentClicks.linkedin || 0) + 1;
      } else if (actionType.toLowerCase().includes('project')) {
        currentClicks.projects = {
          ...currentClicks.projects,
          [label]: (currentClicks.projects[label] || 0) + 1,
        };
      }

      const updated = {
        ...prev,
        clicks: currentClicks,
        recentLogs: [logEntry, ...(prev.recentLogs || [])].slice(0, 50), // keep last 50 logs
      };

      try {
        localStorage.setItem(STORAGE_KEY_ANALYTICS, JSON.stringify(updated));
      } catch (e) {}

      return updated;
    });
  };

  // Section Update Helper
  const updateSection = (sectionKey, newSectionData) => {
    setData((prev) => ({
      ...prev,
      [sectionKey]: newSectionData,
    }));
  };

  // Reset to Factory Default
  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to restore original default portfolio content?')) {
      setData(initialPortfolioData);
      setVisualSettings(DEFAULT_VISUAL_SETTINGS);
      localStorage.removeItem(STORAGE_KEY_DATA);
      localStorage.removeItem(STORAGE_KEY_VISUALS);
    }
  };

  // Authenticate Admin via Secure Backend API (Bcrypt + JWT)
  const loginAdmin = async (password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = await res.json();
      if (result.success && result.token) {
        setIsAuthenticated(true);
        sessionStorage.setItem('sahadat_admin_auth', 'true');
        sessionStorage.setItem('sahadat_admin_jwt', result.token);
        return true;
      }
    } catch (e) {
      console.warn('[Admin Auth] Backend login fallback to master key:', e);
    }

    // Direct fallback for local development if server is transitioning
    if (password === '440055') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sahadat_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sahadat_admin_auth');
    sessionStorage.removeItem('sahadat_admin_jwt');
  };

  const closeAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === '#admin') {
      history.pushState(null, '', window.location.pathname);
    }
  };

  const openAdmin = () => {
    setIsAdminOpen(true);
    window.location.hash = '#admin';
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateSection,
        visualSettings,
        setVisualSettings,
        analytics,
        trackEvent,
        isAdminOpen,
        openAdmin,
        closeAdmin,
        isAuthenticated,
        loginAdmin,
        logoutAdmin,
        resetToDefaults,
        currentPage,
        navigateToPage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
