import Image from 'next/image';
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CommentPulse',
      description:
        'AI-powered SaaS product built from zero to live in under 6 months, with sentiment analysis, issue detection, Channel Health Score, content gap identification, PDF reporting, AI chat on live comment data, and a subscription-ready dashboard.',
      tech: ['Flask', 'Python', 'React.js', 'SQL', 'Vercel', 'Generative AI',"chatbot Support"],
      github: 'https://github.com/shyamsoni550/commentpulse',
      demo: 'https://commentpulse-nine.vercel.app/',
      badge: 'AI SaaS product',
      image: '/images/commentpulse.png',
    },
    {
      title: 'UserHub',
      description:
        'Production-ready authentication system with 7 REST API endpoints for registration, JWT login, email verification, and password reset secured with bcryptjs.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'JWT', 'Nodemailer'],
      github: 'https://github.com/shyamsoni550/userhub-auth-nextjs',
      demo: 'https://userhub-auth-nextjs.vercel.app/',
      badge: 'Auth system',
      image: '/images/userhub.png',
    },
    {
      title: 'Tide Information App',
      description:
        'Real-time tide prediction app using the World Tides API, with local storage caching that reduced repeat API calls by 60%.',
      tech: ['React.js', 'Vite', 'REST API', 'Local Storage'],
      github: 'https://github.com/shyamsoni550/tide-app',
      demo: 'https://tide-app-two.vercel.app/',
      badge: 'API integration',
      image: '/images/Tide-app.png',
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 px-4">
      <div className="pointer-events-none absolute -top-16 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[40px] font-medium uppercase tracking-[0.01em] text-[#57ccca]">Projects</p>
            <h2 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">Take a look at my Best projects</h2>
          </div>
          <p className="mx-auto max-w-[520px] text-[20px] leading-[1.6] text-[#f4f5f7] md:mx-0">
            A mix of live products, production automation, and personal projects, showcasing my expertise in full-stack development and API-driven builds with measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex min-h-[620px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/95"
            >
              <div className="absolute inset-x-6 -top-10 h-24 rounded-b-[36px] bg-gradient-to-b from-cyan-400/10 to-transparent blur-2xl opacity-80" />
              <div className="relative z-10 mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-inner shadow-slate-950/20">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={1200}
                  height={675}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                  {project.badge}
                </span>
                <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-300">
                  {project.tech.length} tech tools
                </span>
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-[14px] bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex rounded-[14px] border border-slate-700 px-5 py-3 text-sm font-bold text-slate-400">
                    Internal build
                  </span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-[14px] border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-100"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
