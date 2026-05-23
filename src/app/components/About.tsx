import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            
              As an AI-driven MERN stack and Next.js specialist, I leverage the transformative potential of Artificial Intelligence to propel the digital landscape forward. My expertise lies in delivering seamless, cutting-edge experiences that push the boundaries of innovation and excellence. With a keen eye towards user experience and a commitment to efficiency, I seamlessly integrate AI into my work, streamlining processes and enhancing user engagement. Together, let us create a future where technology and creativity converge, shaping the future of technology in a formal and professional manner.
            
          </p>
        </div>

       

        {/* Personal Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌱</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
              <p className="text-slate-400 text-sm">Always exploring new technologies and improving my skills</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
              <p className="text-slate-400 text-sm">Working together to create amazing solutions</p>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Focus</h4>
              <p className="text-slate-400 text-sm">Delivering clean, efficient, and maintainable code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
