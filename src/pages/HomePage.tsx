import React from 'react';
import AgencyHero from '../components/AgencyHero';
import AboutSection from '../components/AboutSection';
import SelectedProjects from '../components/SelectedProjects';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import BlogSection from '../components/BlogSection';
import EditorialFooter from '../components/EditorialFooter';

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* 1. Hero / Agency Intro */}
      <AgencyHero />

      {/* 2. Full About Me Section */}
      <AboutSection />

      {/* Anchor for /projects */}
      <div id="projects" className="scroll-mt-24" />

      {/* 3. Section 1: MY WEBSITES (Live Web Platforms & E-Commerce) */}
      <SelectedProjects
        sectionId="websites"
        initialCategory="websites"
        hideTabs={true}
        customTitle={
          <>
            MY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
              WEBSITES
            </span>
          </>
        }
      />

      {/* 4. Section 2: MY APPS (Cloud Run, Fintech & Enterprise Systems) */}
      <SelectedProjects
        sectionId="apps"
        initialCategory="apps"
        hideTabs={true}
        customTitle={
          <>
            MY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
              APPS
            </span>
          </>
        }
      />

      {/* 5. Section 3: MY AUTOMATIONS (Autonomous AI Swarms & Workflows) */}
      <SelectedProjects
        sectionId="automations"
        initialCategory="automations"
        hideTabs={true}
        customTitle={
          <>
            MY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-300 to-red-500">
              AUTOMATIONS
            </span>
          </>
        }
      />

      {/* 4. Skills & Systems Architecture 3D Laboratory */}
      <SkillsSection />

      {/* 5. Career & Experience Milestones */}
      <ExperienceSection />

      {/* 6. AI Research & Publications */}
      <BlogSection />

      {/* 7. Clean Executive Footer (Without duplicate Let's Talk CTA) */}
      <EditorialFooter />
    </div>
  );
}
