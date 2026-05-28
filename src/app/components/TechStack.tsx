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
    <section id="techstack" className="bg-slate-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">Technical skills </h2>
          <p className="mt-4 text-slate-400">Structured around frontend, backend, database, CMS, DevOps, and AI/data strengths.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="rounded-xl border border-white/10 bg-slate-950/70 p-5">
              <h3 className="text-lg font-bold mb-5 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
