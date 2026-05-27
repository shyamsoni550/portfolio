import React from 'react';

const About: React.FC = () => {
  const strengths = [
    {
      title: 'SaaS product ownership',
      detail: 'Sole founder and developer of CommentPulse, an AI-powered SaaS product shipped from zero to live in under 6 months.',
      marker: '01',
    },
    {
      title: 'Full-stack delivery',
      detail: 'Builds React and Next.js frontends, REST APIs, authentication flows, Flask services, and MongoDB/MySQL-backed features.',
      marker: '02',
    },
    {
      title: 'Production web work',
      detail: 'Has shipped WordPress, Elementor, PHP, dashboard, and CMS improvements in real production environments.',
      marker: '03',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.25em] text-cyan-300">About</p>
            <h3 className="mt-3 text-2xl md:text-5xl font-black text-white">
              Full-stack developer with real product ownership.
            </h3>
          </div>
          <p className="text-slate-300 text-lg leading-8">
            I am a Full-Stack Developer focused on MERN stack development, SaaS products, REST API design, and fast product iteration. My resume highlights live AI SaaS work, production CMS deployments, Python GUI tools, engineering dashboards, and full-stack projects using React.js, Flask, Python, MongoDB, Next.js, TypeScript, JWT, and Vercel.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 text-sm font-black text-cyan-300">{item.marker}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
