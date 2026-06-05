import React from 'react';

const TechStack: React.FC = () => {
  const techStack = {
    Frontend: ['React.js', 'Next.js 15', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    Backend: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST API Design', 'JWT', 'bcryptjs', 'Nodemailer'],
    Database: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'Mongoose ODM'],
    'CMS & UI': ['WordPress', 'Elementor', 'PHP', 'Responsive Design', 'Magic UI', 'Tailwind CSS'],
    'Tools & AI': ['Git', 'GitHub', 'CI/CD', 'Vercel', 'Render', 'Postman', 'Codex', 'Claude', 'VS Code', 'Tkinter', 'Generative AI'],
  };

  return (
    <section
      id="techstack"
      className="relative overflow-hidden bg-slate-950 py-20 px-4"
      aria-label="Tech stack"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-slate-800/[0.04]" />

        {/* subtle diagonal sheen */}
        <div className="absolute inset-0 opacity-60">
          <div className="h-full w-[120%] -translate-x-[10%] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent rotate-[10deg]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-[50px] font-medium uppercase tracking-[0.01em] text-[#57ccca]">Skills</p>
          <h2 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">
             Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[25px] leading-[1.6] text-[#eef0f4]">
            Built for production-grade delivery — frontend, backend, data, CMS, DevOps, and AI/data.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {Object.entries(techStack).map(([category, techs], idx) => (
            <div
              key={category}
              className={[
                'relative rounded-2xl p-[1px] transition-all duration-500',
                'group hover:-translate-y-1',
                'bg-gradient-to-b from-indigo-500/30 via-cyan-500/10 to-slate-900',
              ].join(' ')}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="skill-card-shimmer relative rounded-[16px] bg-slate-900/70 p-5 ring-1 ring-white/5">
                {/* card header glow */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-300">
                    {category}
                  </h3>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-white/10 flex items-center justify-center">
                    <span className="text-lg">✦</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="relative rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-2 text-sm font-medium text-[#c7d2fe] transition-colors group-hover:border-indigo-400/40"
                    >
                      <span className="relative z-10">{tech}</span>
                      <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                {/* subtle footer */}
                <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                  <span className="uppercase tracking-wide">Stack</span>
                  <span className="text-indigo-200/70">{techs.length} items</span>
                </div>

                {/* hover shimmer */}
                <div className="pointer-events-none absolute inset-0 rounded-[16px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -left-10 top-0 h-full w-16 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent animate-[shimmer_sheen_900ms_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default TechStack;
