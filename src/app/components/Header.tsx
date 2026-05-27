"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";


const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = [
      "MERN Stack Developer",
      "SaaS Product Builder",
      "REST API Developer",
      "React.js Developer",
      "Python & Flask Developer",
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
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f_0%,#0f172a_48%,#111827_100%)] flex items-center relative overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 mb-7">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to remote-first and high-growth full-stack roles
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-normal text-white leading-[0.95]">
              Vaya Shyam
            </h1>

            <div className="mt-5 min-h-12 text-2xl sm:text-3xl font-semibold text-cyan-200">
              {displayText}
              <span className="animate-pulse text-cyan-300">|</span>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Full-Stack Developer with 1+ year of end-to-end software development experience in SaaS product development, REST API design, CI/CD deployment, WordPress production work, and AI-powered product delivery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                View Projects
              </a>
              <a
                href="/resume/vaya_shyam_resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-slate-500 bg-white/5 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-100"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold text-slate-300 transition hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                ["8.22", "CGPA"],
                ["1+", "Year exp."],
                ["3", "Live products"],
                ["50%", "CMS time saved"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-800">
                <Image
                  src="/images/profile.png"
                  alt="Vaya Shyam"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Resume focus</p>
                <p className="mt-3 text-slate-200">
                  React.js, Next.js 15, TypeScript, Flask, Python, MongoDB, REST APIs, CI/CD, WordPress, Elementor, and Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

