'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
    
  ], []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/vaya_shyam_resume.pdf';
    link.setAttribute('download', 'vaya_shyam_resume.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <Image
              src="/images/profile.jpg"
              alt="Vaya Shyam - Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
            />
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            Vaya Shyam
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  if (item.id === 'resume') {
                    downloadResume();
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  item.id === 'resume'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2'
                    : `hover:text-blue-400 ${
                        activeSection === item.id
                          ? 'text-blue-400'
                          : 'text-slate-300 hover:text-white'
                      }`
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-800/95 backdrop-blur-lg border-t border-slate-700/50">
          <ul className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    if (item.id === 'resume') {
                      downloadResume();
                    } else {
                      scrollToSection(item.id);
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    item.id === 'resume'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white rounded-lg mx-2 my-1'
                      : `hover:bg-slate-700/50 hover:text-blue-400 ${
                          activeSection === item.id
                            ? 'text-blue-400 bg-slate-700/30'
                            : 'text-slate-300'
                        }`
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

