# 🌟 Md Sahadat Hossain — Executive AI Agent Architect & Prompt Engineer Portfolio

> **High-Craft, Award-Winning 3D Interactive Portfolio & Systems Showcase**  
> Architected with React 18, TypeScript, Vite 6, Tailwind CSS, Three.js / Canvas, and VisionOS Glassmorphism aesthetics.

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-stl--sahadat.github.io-dc2626?style=for-the-badge&logo=githubpages&logoColor=white)](https://stl-sahadat.github.io/my-portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub_Repository-stl--sahadat%2Fmy--portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/stl-sahadat/my-portfolio)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 🌐 Quick Access & Live Preview

* 🚀 **Live Portfolio URL:** [https://stl-sahadat.github.io/my-portfolio/](https://stl-sahadat.github.io/my-portfolio/)
* 📂 **GitHub Source Repository:** [https://github.com/stl-sahadat/my-portfolio](https://github.com/stl-sahadat/my-portfolio)
* 💬 **WhatsApp Direct CTA:** [wa.me/8801944576159](https://wa.me/8801944576159)
* 📧 **Email:** [sahadat.info01@gmail.com](mailto:sahadat.info01@gmail.com)

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Signature Features & Innovations](#-signature-features--innovations)
3. [Technology Stack](#-technology-stack)
4. [Complete Architecture & Project Structure](#-complete-architecture--project-structure)
5. [In-Depth Component Breakdown](#-in-depth-component-breakdown)
6. [Design System & Visual Tokens](#-design-system--visual-tokens)
7. [Step-by-Step Developer Reproduction Guide](#-step-by-step-developer-reproduction-guide)
8. [Configuration & Customization](#-configuration--customization)
9. [Deployment & GitHub Pages CI/CD](#-deployment--github-pages-cicd)
10. [Secret Admin Control Console](#-secret-admin-control-console)
11. [License & Credits](#-license--credits)

---

## 🎯 Project Overview

This portfolio is an ultra-modern, cinematic personal website crafted for **Md Sahadat Hossain** — AI Agent Architect and Prompt Engineer. It departs from conventional static resumes by implementing an interactive, executive-grade digital stage.

### Key Objectives
* **Demonstrate AI Systems Dominance:** Highlight autonomous multi-agent pipelines, LangGraph/n8n workflows, and full-stack cloud applications.
* **Cinematic Cyberpunk / Obsidian Aesthetic:** High-contrast pitch-black `#050505` foundation with luminous crimson/ruby accents (`#ef233c`, `#dc2626`) and frosted glassmorphism.
* **Zero Hashtag URL Routing:** Clean HTML5 History API URL navigation (`/`, `/about`, `/projects`, `/skills`, `/experience`, `/blog`, `/contact`) with real-time scroll-spy synchronization.
* **100% Production Ready:** Optimized bundle sizing, instant asset resolution across GitHub Pages subpaths, and integrated administration telemetry.

---

## ✨ Signature Features & Innovations

1. **Procedural Meowish Spider Cursor (`SpiderCursorCanvas.tsx`):**
   * High-performance HTML5 2D Canvas rendering organic crawling crimson tendrils tracking cursor movement at 60 FPS.
2. **Interactive Cursor Lighting Spotlight (`MouseSpotlight.tsx`):**
   * Radial gradient light cone following mouse movements with dynamic backdrop blur.
3. **VisionOS Floating Navbar (`AgencyNavbar.tsx`):**
   * Frosted glass pill container with active ruby radar beacon, horizontal laser flares, and a 3D faceted crystal diamond icon.
4. **Cinematic 3D Glass Fishbowl Stage (`FishbowlAutomationsShowcase.tsx`):**
   * Interactive 4K transparent glass vessels with animated fluid caustics, rising specular bubbles, luminous hydro-current pipe, and leaping automation orbs.
5. **AI Slop to AI Power Stack Portal (`AIAutomationPortalShowcase.tsx`):**
   * High-tech visual comparison stage with glowing particle clusters and stage backdrop.
6. **3D Skeuomorphic Social Nodes & Action Buttons (`EditorialFooter.tsx`, `GemActionButton.tsx`):**
   * Hyper-tactile 3D emerald WhatsApp squircle buttons, GitHub glass badges, and social media nodes with neon aura hover physics.
7. **Secret In-Browser Admin Console (`AdminDashboard.tsx`):**
   * Full-screen dashboard accessible via hotkey `Ctrl + Shift + A` or discrete lock trigger button to manage portfolio content, inspect visitor analytics, and tune visual settings in real-time.
8. **Subpath-Resilient Asset Resolution (`src/utils/assetUrl.ts`):**
   * Custom `withBase()` utility ensuring seamless operation across local dev (`/`) and GitHub Pages deployment (`/my-portfolio/`).

---

## 🛠️ Technology Stack

### Frontend Core
* **Library:** [React 18.3.1](https://react.dev/) (Hooks, Context API, Suspense)
* **Language:** [TypeScript 7.0.2](https://www.typescriptlang.org/) (Strict typing, interfaces, custom types)
* **Build Tool:** [Vite 6.0.1](https://vitejs.dev/) with `@vitejs/plugin-react`
* **Styling:** [Tailwind CSS 3.4.17](https://tailwindcss.com/) + PostCSS + Custom CSS Variables
* **Icons:** [Lucide React 0.460.0](https://lucide.dev/) (Consistent, performant SVG icons)
* **3D Graphics & Canvas:** [Three.js 0.186.1](https://threejs.org/) + Native HTML5 Canvas 2D

### Backend & API (Included in `server/`)
* **Runtime:** Node.js + Express
* **Security:** Bcrypt (Password Hashing) + JWT (JSON Web Tokens) + Rate Limiting
* **Mailing:** Nodemailer with SMTP transporter
* **Database Driver:** MongoDB / Mongoose models (Inquiries, Projects, Admin Auth)

### DevOps & Hosting
* **Hosting:** GitHub Pages (`gh-pages` branch)
* **Routing Fallback:** `404.html` SPA routing trick + `.nojekyll` bypass
* **Automation:** Custom Node.js deploy script (`scripts/deploy.js` via `npm run deploy`)

---

## 📁 Complete Architecture & Project Structure

```
My Portfolio/
├── .gitignore                   # Ignored files (node_modules, dist, .env)
├── index.html                   # HTML entry point with Google Fonts preconnects
├── package.json                 # Project dependencies, metadata, and npm scripts
├── package-lock.json            # Deterministic lockfile
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Custom Tailwind design tokens & font extensions
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.js               # Vite build settings (base path '/my-portfolio/')
│
├── public/                      # Static assets served as-is
│   ├── sahadat-avatar.jpg       # Circular profile photo for Navbar
│   ├── sahadat-portrait-full.png# Transparent cut-out portrait for Hero
│   ├── myphoto-clean.png        # Fallback high-res portrait
│   ├── fishbowl-cutout.png      # Transparent 3D glass bowl render plate
│   ├── fishbowl-stage.jpg       # Background stage render
│   ├── ai_portal_stage_backdrop.png # Slop-to-Stack portal background
│   └── github-3d-glass-*.png   # 3D Skeuomorphic GitHub badge icons
│
├── scripts/
│   └── deploy.js                # One-command automated build & push to gh-pages
│
├── src/
│   ├── App.tsx                  # Root application component & layout shell
│   ├── main.tsx                 # React DOM mount point
│   ├── index.css                # Global stylesheet, custom animations, keyframes
│   │
│   ├── components/              # Modular UI components
│   │   ├── AboutSection.tsx     # Pillars, bio narrative, and system metrics
│   │   ├── AgencyHero.tsx       # Hero section with portrait, badges, and tech pills
│   │   ├── AgencyNavbar.tsx     # VisionOS floating navbar with scroll-spy & 3D Gem
│   │   ├── AIAutomationNexusShowcase.tsx # Workflow orchestration visualizer
│   │   ├── AIAutomationPortalShowcase.tsx# Slop-to-Stack interactive stage
│   │   ├── AnimatedMetricCard.tsx # Animated statistics cards (10x+, 70%+, 24/7)
│   │   ├── BlogSection.tsx      # AI research publications & articles
│   │   ├── CurvedCylinderShowcase.tsx # 3D cylinder project carousel
│   │   ├── CyberTechPill.tsx    # Glowing interactive technology badge
│   │   ├── EditorialFooter.tsx  # Footer with WhatsApp button & 3D social nodes
│   │   ├── ExperienceSection.tsx# Career milestones and client achievements
│   │   ├── FanningCardsShowcase.tsx # Interactive fanning card deck
│   │   ├── FishbowlAutomationsShowcase.tsx # Fluid 3D canvas glass bowl simulation
│   │   ├── GemActionButton.tsx  # 3D emerald WhatsApp action button
│   │   ├── LaserBadge.tsx       # Futuristic glowing status badge
│   │   ├── MouseSpotlight.tsx   # Mouse-following radial red spotlight
│   │   ├── N8nAutomationBackground.tsx # Background canvas showing node workflows
│   │   ├── ScrollReveal.tsx     # Intersection observer reveal wrapper
│   │   ├── SelectedProjects.tsx # Projects showcase (Websites, Apps, Automations)
│   │   ├── SkillsSection.tsx    # 3D magma glass batteries & skills matrix
│   │   ├── SpiderCursorCanvas.tsx # Procedural spider tendril cursor
│   │   ├── StackedCapsuleAutomationsShowcase.tsx # Vertical capsule stack
│   │   ├── ThemeToggle3D.tsx    # 3D theme toggle button (Dark-mode locked)
│   │   ├── VerticalCurvedCardsShowcase.tsx # 3D curved vertical card layout
│   │   └── admin/
│   │       └── AdminDashboard.tsx # Comprehensive in-browser control center
│   │
│   ├── context/
│   │   └── PortfolioContext.tsx # Central React Context (data, routing, telemetry)
│   │
│   ├── data/
│   │   └── portfolioData.ts     # Master data store (projects, skills, personal bio)
│   │
│   ├── pages/                   # Standalone page views & continuous home flow
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── HomePage.tsx         # Unified continuous executive portfolio scroll
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   │
│   └── utils/
│       └── assetUrl.ts          # withBase() helper for subpath asset resolution
│
└── server/                      # Optional Full-Stack Node.js backend
    ├── package.json             # Backend dependencies (express, bcrypt, jsonwebtoken)
    ├── tsconfig.json            # Server TypeScript configuration
    ├── .env.example             # Example backend environment variables
    └── src/
        ├── server.ts            # Express server entry point
        ├── config/db.ts         # MongoDB connection config
        ├── controllers/         # Auth, Contact, and Project controllers
        ├── middlewares/         # JWT auth middleware & rate limiters
        ├── models/              # Mongoose schemas (Admin, Inquiry, Project)
        ├── routes/              # Express API route endpoints
        └── utils/mailer.ts      # Nodemailer SMTP email sender
```

---

## 🔍 In-Depth Component Breakdown

### 1. `src/App.tsx`
* **Role:** Global Shell and Canvas Host.
* **Behavior:** Wraps the entire layout inside `<PortfolioContext>`. Renders global canvas overlays (`SpiderCursorCanvas`, `MouseSpotlight`), the floating `<AgencyNavbar />`, continuous `<HomePage />`, discrete `<AdminTriggerButton />`, and `<AdminDashboard />`.

### 2. `src/components/AgencyNavbar.tsx`
* **Role:** Floating VisionOS Navigation Header.
* **Key Features:**
  * Displays circular profile avatar with glowing crimson ring.
  * Real-time clean URL scroll-spy: updates address bar to `/about`, `/projects`, `/skills` without hashtags `#`.
  * Active state highlighted with a dark-ruby obsidian pill capsule, pulsing radar beacon, and bottom laser horizon flare.
  * 3D Crystal Diamond Gem CTA button ("Let's Talk") linking directly to WhatsApp.
  * Responsive mobile drawer menu with numerical indices (`01`, `02`, etc.).

### 3. `src/components/AgencyHero.tsx`
* **Role:** Executive Hero Introduction.
* **Key Features:**
  * Large photographic studio portrait with bottom gradient dissolve.
  * Animated metric cards (`10x+ Execution Speed`, `70%+ Cost Reduction`, `24/7 Autonomous Agents`).
  * Cyber tech pill marquee ticker showcasing master tools (Claude 3.5, Gemini 1.5, n8n, LangChain, Docker, GCP).
  * Direct action buttons with glowing hover mechanics.

### 4. `src/components/FishbowlAutomationsShowcase.tsx`
* **Role:** Cinema-Grade Photorealistic 3D Glass & Fluid Stage.
* **Key Features:**
  * High-resolution canvas rendering connected glass bowls.
  * Dynamic fluid water simulation with caustics, floating bubbles, and flowing pipe hydro-currents.
  * Interactive floating automation orbs that cycle and leap between bowls on user click or scroll.

### 5. `src/components/AIAutomationPortalShowcase.tsx`
* **Role:** "AI Slop to AI Power Stack" Transformation Showcase.
* **Key Features:**
  * Contrasts fragile AI code with robust autonomous agent architectures.
  * Cyber backdrop plate with energetic particle laser rings.

### 6. `src/components/EditorialFooter.tsx` & `GemActionButton.tsx`
* **Role:** Executive Footer & High-Conversion CTAs.
* **Key Features:**
  * Hyper-tactile 3D skeuomorphic WhatsApp action button with vivid emerald neon glow (`#25D366`), white app icon, and holographic ray animation.
  * 3D cyber social nodes linking to GitHub, LinkedIn, Twitter/X, YouTube, Telegram, and Facebook.
  * Dynamic copyright and active status telemetry.

### 7. `src/context/PortfolioContext.tsx`
* **Role:** Central Nerve Center & State Management.
* **Key Features:**
  * Holds and synchronizes master data (`portfolioData.ts`) with `localStorage`.
  * Handles client-side URL routing and backward/forward browser history (`popstate`).
  * Collects visitor telemetry (time spent, clicks on WhatsApp/Email/Projects, device type).
  * Manages visual settings (canvas brightness, glow factor, motion damping).

### 8. `src/data/portfolioData.ts`
* **Role:** Centralized Content Store.
* **Key Features:**
  * Contains all personal bio information, stats, contact links.
  * Contains array of curated projects with live demo URLs, GitHub URLs, tags, and contributions.
  * Contains skill category distributions and career milestones.

### 9. `src/utils/assetUrl.ts`
* **Role:** Subpath Asset Resolution Engine.
* **Implementation:**
  ```typescript
  export function withBase(path: string): string {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
      return path;
    }
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
  }
  ```
  * Ensures assets resolve accurately to `/my-portfolio/image.png` in production on GitHub Pages and `/image.png` in local development.

---

## 🎨 Design System & Visual Tokens

| Token | Hex / Value | Usage |
|---|---|---|
| **Background Obsidian** | `#050505` / `#080811` | Primary pitch-black app background & card fill |
| **Crimson / Laser Red** | `#ef233c` / `#dc2626` | Primary accents, radar pulses, active borders, laser flares |
| **Emerald Neon** | `#25D366` / `#10b981` | WhatsApp CTA button, online status indicators |
| **Cyan / Electric Diamond** | `#38bdf8` / `#00f0ff` | 3D Gem icon facets, Slop-to-Stack portal lasers |
| **Glassmorphism Fill** | `rgba(255, 255, 255, 0.04)` | VisionOS frosted navigation & cards |
| **Glass Border** | `rgba(255, 255, 255, 0.12)` | Subtle glass perimeter borders with specular top shine |

---

## 🚀 Step-by-Step Developer Reproduction Guide

Any developer can replicate and run this exact portfolio locally in under 3 minutes:

### 1. Prerequisites
* **Node.js:** v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
* **Git:** Installed and configured

### 2. Clone the Repository
```bash
git clone https://github.com/stl-sahadat/my-portfolio.git
cd my-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 5. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be generated inside the `dist/` directory.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### Changing Bio, Projects & Details
Open [`src/data/portfolioData.ts`](file:///run/media/md-sahadat-hossain/B69E21AD9E216759/Md%20Sahadat%20Hossain%20%282%29/MY%20ALL%20PROJECT/My%20Protfolio/src/data/portfolioData.ts):
```typescript
export const portfolioData = {
  personal: {
    name: "YOUR FULL NAME",
    shortName: "YourName",
    role: "YOUR PROFESSIONAL TITLE",
    avatarImage: "/sahadat-avatar.jpg",     // Place your image in /public
    portraitImage: "/sahadat-portrait-full.png",
    email: "your.email@example.com",
    phone: "+880 1234-567890",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile/",
    whatsapp: "https://wa.me/yourphonenumber",
    // ...
  },
  projects: [
    // Add or modify your projects here
  ]
};
```

### Changing Base Path for Different GitHub Username / Repo
If you fork or clone this repository under a different repo name, update `base` in [`vite.config.js`](file:///run/media/md-sahadat-hossain/B69E21AD9E216759/Md%20Sahadat%20Hossain%20%282%29/MY%20ALL%20PROJECT/My%20Protfolio/vite.config.js):
```javascript
export default defineConfig({
  base: '/<YOUR-REPO-NAME>/', // e.g. '/my-portfolio/' or '/' for custom domain
  plugins: [react()],
  // ...
});
```

---

## 🚢 Deployment & GitHub Pages CI/CD

This repository includes a dedicated, zero-configuration one-command deployment script in [`scripts/deploy.js`](file:///run/media/md-sahadat-hossain/B69E21AD9E216759/Md%20Sahadat%20Hossain%20%282%29/MY%20ALL%20PROJECT/My%20Protfolio/scripts/deploy.js).

### Deploy in One Command
```bash
npm run deploy
```

### What `npm run deploy` does automatically:
1. Executes `vite build` to compile TypeScript & React into optimized static assets in `dist/`.
2. Duplicates `dist/index.html` to `dist/404.html` (guaranteeing SPA routes like `/about` or `/projects` never return a 404 on GitHub Pages).
3. Injects a `.nojekyll` file into `dist/` to bypass Jekyll file processing.
4. Initializes a headless git branch `gh-pages` and force-pushes `dist/` directly to your repository's `gh-pages` branch.
5. GitHub Pages immediately serves the site live at `https://<username>.github.io/<repo-name>/`.

---

## 🔐 Secret Admin Control Console

The portfolio includes an integrated administrative control center:

* **How to open:**
  * Press **`Ctrl + Shift + A`** anywhere on the page, or
  * Click the discrete lock icon at the bottom-left corner of the screen, or
  * Navigate to `/#admin` in the browser URL bar.
* **Default Master Passcode:** `440055`
* **Features inside the Admin Console:**
  * **Content Editor:** Live edit personal bio, social media URLs, project entries, and upload new avatar/portrait photos without touching code.
  * **Visitor Telemetry & Analytics:** Real-time counter of total page visits, time spent on site, device breakdown (Desktop / Mobile / Tablet), and click counts on WhatsApp, Email, Resume, and GitHub links.
  * **Visual Settings Laboratory:** Live sliders for Canvas Brightness, Glow Factor, Particle Color, and Motion Damping.
  * **State Reset:** One-click reset to factory defaults.

---

## 📄 License & Credits

* **Architect & Developer:** [Md Sahadat Hossain](https://github.com/stl-sahadat)
* **Framework:** React 18, Vite, Tailwind CSS
* **License:** MIT License — Feel free to star ⭐ the repository and use this architecture as a foundation for your own developer portfolio!

---

<p align="center">
  <b>Designed with precision and engineered for maximum digital impact.</b><br>
  Made by <a href="https://github.com/stl-sahadat">Md Sahadat Hossain</a> • 2026
</p>
