import React from 'react';

const Experience: React.FC = () => {
  const roles = [
    {
      title: 'Software Engineer',
      company: 'Vishwas Integrated Marine Group',
      period: 'Oct 2025 - Present',
      points: [
        "Redesigned and deployed the company website's Certifications and About-Us pages using WordPress and Elementor, improving content clarity and reducing manual update time by 50%.",
        'Engineered Python/Tkinter GUI tools adopted across 3 departments, reducing manual data entry time by about 30%.',
        'Built interactive engineering dashboards with Matplotlib, replacing static reports and cutting review cycles by 2 days.',
      ],
      tags: ['WordPress', 'Elementor', 'Python', 'Tkinter', 'Matplotlib', 'Dashboards'],
    },
    {
      title: 'Project Trainee',
      company: 'Einfochips Private Limited',
      period: 'Jan 2025 - Jun 2025',
      points: [
        'Delivered 4+ client web projects using PHP and WordPress in a full production environment within Agile sprints.',
        'Reduced front-end bug backlog by 40% by introducing JavaScript-driven interactivity across 3 client sites.',
        'Shipped features on time across 2 consecutive sprints through daily standups and structured code reviews.',
      ],
      tags: ['PHP', 'WordPress', 'JavaScript', 'Agile/Scrum', 'Code Reviews'],
    },
  ];

  return (
    <section id="experience" className="bg-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-[50px] font-medium uppercase tracking-[0.03em] text-[#57ccca]">Experience</p>
          <h1 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">Professional impact</h1>
          <p className="mx-auto mt-4 max-w-[520px] text-[18px] leading-[1.6] text-[#e2e5e9]">
             measurable outcomes and production responsibilities.
          </p>
        </div>

        <div className="space-y-6">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-7 md:p-9 shadow-2xl shadow-slate-950/30"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">{role.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-cyan-300">{role.company}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200">
                  {role.period}
                </div>
              </div>

              <ul className="mt-8 grid gap-4">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {role.tags.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
