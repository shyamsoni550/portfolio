import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-[50px] font-medium uppercase tracking-[0.01em] text-[#57ccca]">About Me</p>
            <h3 className="mt-[6px] text-[clamp(32px,5vw,48px)] font-extrabold text-[#f8fafc]">
              Full-stack developer with real product ownership.
            </h3>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I like working close to the point where product decisions meet implementation details. CommentPulse started as a solo build and became a live AI SaaS product, which taught me to think beyond tickets: onboarding, data flow, reporting, deployment, and what users actually need to trust the tool.
            </p>
            <p>
              My day-to-day range is practical: React and Next.js interfaces, Flask and Node APIs, MongoDB/MySQL data layers, WordPress production pages, Python automation, and dashboards that turn slow manual review into something teams can act on faster.
            </p>
            <p>
              I am especially drawn to remote-first or high-growth teams where full-stack versatility, ownership, and fast iteration matter more than staying in a narrow lane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
