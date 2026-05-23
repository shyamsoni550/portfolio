"use client";

import React, { useEffect, useState } from "react";


const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Frontend Developer",
      "Backend Developer",
    ];

    const currentRole = roles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);



  return (
    <header
      id="home"
      className="bg-slate-900 min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-slate-500 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-slate-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-slate-300 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mb-8 h-16 flex flex-col items-center justify-center cursor-pointer">
              <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent mb-4">
                I&apos;m Vaya Shyam, a passionate
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
            
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-slate-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

