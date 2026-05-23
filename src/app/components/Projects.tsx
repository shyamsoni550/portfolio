import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio showcasing my skills, projects, and achievements with a modern and interactive design.',
      tech: 'Next.js, React.js, Tailwind CSS',
      github: 'https://github.com/shyamsoni550/Portfolio',
      link: 'https://shyamvaya.vercel.app/',
    },
    {
      title: 'Tide Tracker App',
      description: 'A responsive React web app built with Vite that provides real-time tide information based on user location, featuring smooth animations and user-friendly UI.',
      tech: 'React, Vite, Tailwind CSS, APIs',
      github: 'https://github.com/shyamsoni550/tide-app',
      demo: 'https://tide-app-two.vercel.app/',
    },
    {
      title: 'School Management App',
      description: 'A cloud-based School Management System with a modern, responsive UI, enhanced with interactive elements and smooth transitions. Built with Next.js and Tailwind CSS.',
      tech: 'Next.js, Tailwind CSS, MySQL',
      github: 'https://github.com/shyamsoni550/School-managment-App',
      demo: 'https://school-managment-app-iota.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-6 h-6 bg-slate-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 right-40 w-5 h-5 bg-slate-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-slate-600 rounded-full animate-pulse delay-200"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {project.description}
              </p>
              <div className="mb-6">
                <span className="inline-block bg-slate-700/50 border border-slate-600 text-blue-400 px-4 py-2 rounded-lg font-semibold text-sm backdrop-blur-sm">
                  {project.tech}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-slate-500"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
