import React, { useState, useEffect } from 'react';
import { Section } from './types';
import SidebarNav from './components/SidebarNav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  // Handle intersection observer to update active section on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navigateTo = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative">
      {/* Side Navigation */}
      <SidebarNav
        activeSection={activeSection}
        onNavigate={navigateTo}
        position="right"
      />

      {/* Main Content Sections */}
      <main className="md:pr-20 lg:pr-28">
        <Hero onNavigate={navigateTo} />
        <About />
        <Resume />
        <Portfolio />
        <Achievements />               
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-10 bg-white text-center border-t border-gray-100 md:pr-20 lg:pr-28">
        <div className="font-bebas text-2xl md:text-3xl text-gray-900 tracking-widest mb-3">
          THANKS FOR VISITING!
        </div>
        <p className="text-gray-400 text-xs md:text-sm font-medium">
          © 2026 PRAVIN | DESIGNED WITH PRECISION
        </p>
      </footer>

      {/* Mobile Nav Button (Simple version) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="bg-amber-400 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-gray-900 focus:outline-none">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-1 bg-current"></div>
            <div className="w-5 h-1 bg-current"></div>
            <div className="w-5 h-1 bg-current"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
