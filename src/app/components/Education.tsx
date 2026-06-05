import React from 'react';

const Education: React.FC = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
  ];

  return (
    <section id="education" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-[40px] font-medium uppercase tracking-[0.01em] text-[#57ccca]">Education</p>
          <h2 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">Computer Engineering Foundation</h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-7 md:p-9">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-white">Bachelor of Technology</h3>
                <p className="mt-2 text-lg font-semibold text-cyan-300">Computer Engineering</p>
                <p className="mt-2 text-slate-400">Aditya Silver Oak Institute of Technology, Ahmedabad</p>
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                2021 - 2025
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-wider text-slate-400">CGPA</p>
                <p className="mt-2 text-3xl font-black text-white">8.22</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-wider text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-bold text-white">Software development</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-7 md:p-9">
            <h3 className="text-2xl font-black text-white">Relevant coursework</h3>
            <div className="mt-6 grid gap-3">
              {coursework.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
