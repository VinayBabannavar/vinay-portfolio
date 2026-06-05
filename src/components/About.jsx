import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: 'T. John Institute of Technology',
      degree: 'Bachelor of Engineering in Computer Science',
      location: 'Bengaluru, India',
      duration: 'Aug 2023 – Jun 2027',
      scoreType: 'CGPA',
      score: '8.7 / 10.0',
      description: 'Acquiring deep knowledge in core computer science subjects, including Data Structures, Database Management Systems, Machine Learning, and Cloud Computing. Actively engaged in building practical AI and web dev projects.'
    },
    {
      institution: 'Govindram Seksaria Science College',
      degree: 'Pre-University Education (Science)',
      location: 'Belagavi, India',
      duration: 'Jun 2021 – May 2023',
      scoreType: 'Percentage',
      score: '80%',
      description: 'Completed senior high secondary education focusing on Physics, Chemistry, Mathematics, and Computer Science.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            About Me & Education
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Professional Summary (Left - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Professional Summary
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Computer Science professional with hands-on experience in full-stack development and AI/ML systems. Proficient in building end-to-end web applications using React.js, REST APIs, MongoDB, and MySQL.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I have built and deployed intelligent applications using Python and machine learning frameworks. Possess strong problem-solving skills with practical knowledge of CI/CD pipelines, FastAPI, and cloud fundamentals.
              </p>
              <p className="text-indigo-300 text-sm font-semibold italic">
                "Looking to contribute to innovative software, full-stack, and AI-driven products."
              </p>

              {/* Quick Details Table */}
              <div className="border-t border-white/5 pt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Location</span>
                  <span className="text-slate-300 font-medium flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" /> Bengaluru, India
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree</span>
                  <span className="text-slate-300 font-medium">B.E. Computer Science</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Current CGPA</span>
                  <span className="text-indigo-400 font-semibold flex items-center gap-1">
                    <Award className="w-4 h-4" /> 8.7 / 10.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline (Right - 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2 px-2">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              Academic Journey
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 p-1 bg-[#09090b] rounded-full border-2 border-indigo-500/80 group-hover:border-purple-500 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full group-hover:scale-110 transition-transform"></div>
                  </div>

                  {/* Card Content */}
                  <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 w-fit">
                        {edu.scoreType}: {edu.score}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400">
                      <span className="text-slate-300 font-medium">{edu.institution}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden sm:inline"></span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden sm:inline"></span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed pt-2">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
