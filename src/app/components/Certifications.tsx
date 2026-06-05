import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'JavaScript ES6+',
      issuer: 'Udemy',
      date: 'Apr 2025',
      link: 'https://www.linkedin.com/in/vaya-shyam/details/certifications/1737609603084/single-media-viewer/?profileId=ACoAADmHAiMBFvD1QAJlxpQlIPiN6_m24S-pVL4',
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Oracle',
      date: 'Jul 2024',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=AE55051DB9C4BF7E47283FA868379D5578EFEA9A6DE814429C84330E7B96E091',
    },
  ];

  return (
    <section id="certifications" className="bg-slate-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-[45px] font-medium uppercase tracking-[0.01em] text-[#57ccca]">Certifications</p>
          {/* <h2 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">Verified learning</h2> */}
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.6] text-[#e4e9ef]">Verified credentials with public proof links.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="rounded-xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">{cert.date}</p>
              <h3 className="mt-4 text-2xl font-black text-white">{cert.title}</h3>
              <p className="mt-2 text-slate-400">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-lg border border-slate-600 px-4 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-100"
              >
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
