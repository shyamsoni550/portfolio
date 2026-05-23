import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'JavaScript ES6 – Udemy',
      link: 'https://www.linkedin.com/in/vaya-shyam/details/certifications/1737609603084/single-media-viewer/?profileId=ACoAADmHAiMBFvD1QAJlxpQlIPiN6_m24S-pVL4',
    },
    {
      title: 'Generative AI – Oracle',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=AE55051DB9C4BF7E47283FA868379D5578EFEA9A6DE814429C84330E7B96E091',
    },
    {
      title: 'Internship Certificate',
      link: 'https://www.linkedin.com/in/vaya-shyam/details/experience/1757448868690/single-media-viewer/?profileId=ACoAADmHAiMBFvD1QAJlxpQlIPiN6_m24S-pVL4',
    },
  ];

  return (
    <section id="certifications" className="bg-slate-800 py-20 px-4 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-28 h-28 bg-blue-500 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-slate-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-blue-600 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-500 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-700/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-600 hover:border-blue-500/50 hover:bg-slate-700/70 transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-6 text-center text-slate-200 group-hover:text-white transition-colors duration-300">
                {cert.title}
              </h3>
              <div className="text-center">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
