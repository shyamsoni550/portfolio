import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Education */}
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Technology</h3>
                <p className="text-blue-400 font-semibold">Computer Engineering</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Institution:</span>
                <span className="text-slate-200 text-sm">Aditya Silver Oak Institute</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Location:</span>
                <span className="text-slate-200">Ahmedabad, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Duration:</span>
                <span className="text-slate-200">2021 - 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">CGPA:</span>
                <span className="text-green-400 font-semibold">8.22</span>
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Pursuing comprehensive education in computer engineering with focus on 
                software development, algorithms, and modern computing technologies.
              </p>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Relevant Coursework</h3>
                <p className="text-blue-400 font-semibold">Core Computer Science Subjects</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Database Management Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Operating Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">Object-Oriented Programming</span>
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Strong foundation in computer science fundamentals with practical 
                application through projects and assignments. Consistently maintaining 
                excellent academic performance while pursuing hands-on experience.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-12">
          <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">💡</span>
                </span>
                Continuous Learning
              </h3>
              <p className="text-slate-400">Self-directed learning and professional development</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-400">Technical Skills</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Full Stack Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">React.js & Next.js Frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-300">Node.js & Express.js</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-400">Professional Development</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Industry Internships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Open Source Contributions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Personal Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Achievement Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            Academic Journey
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3 bg-slate-700/30 rounded-lg px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-center">
                <div className="text-slate-200 font-semibold">2021</div>
                <div className="text-slate-400 text-sm">Started B.Tech</div>
              </div>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-slate-600"></div>
            <div className="flex items-center space-x-3 bg-slate-700/30 rounded-lg px-6 py-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="text-center">
                <div className="text-slate-200 font-semibold">2023</div>
                <div className="text-slate-400 text-sm">Started Internships</div>
              </div>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-slate-600"></div>
            <div className="flex items-center space-x-3 bg-slate-700/30 rounded-lg px-6 py-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <div className="text-center">
                <div className="text-slate-200 font-semibold">2025</div>
                <div className="text-slate-400 text-sm">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
