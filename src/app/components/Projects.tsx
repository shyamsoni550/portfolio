import Image from 'next/image';
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CommentPulse',
      description:
        'AI-powered SaaS product built from zero to live in under 6 months, with sentiment analysis, issue detection, Channel Health Score, content gap identification, PDF reporting, AI chat on live comment data, and a subscription-ready dashboard.',
      tech: ['Flask', 'Python', 'React.js', 'MongoDB', 'Vercel'],
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
    <section id="projects" className="bg-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">Resume projects</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            A mix of live products, production automation, and API-driven builds with measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-[560px] flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900"
            >
              <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={1200}
                  height={675}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-200">
                {project.badge}
              </div>
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-400 group-hover:text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {'demo' in project && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                )}
                {'github' in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-600 px-5 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-100"
                  >
                    GitHub
                  </a>
                )}
                {!('demo' in project) && (
                  <span className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-slate-400">
                    Internal build
                  </span>
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
