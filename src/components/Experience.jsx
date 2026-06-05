import React from 'react';
import { Calendar, Briefcase, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Student Intern – Innovation & Design Thinking',
      company: 'Comedkares',
      location: 'Karnataka, India',
      duration: 'Apr 2024 – Jun 2024',
      bulletPoints: [
        'Applied structured design thinking methodologies to identify, analyze, and map real-world user problems.',
        'Collaborated effectively within cross-functional teams to ideate, build, and prototype user-centered solutions.',
        'Designed workflow layouts, low-fidelity wireframes, and concept prototypes for user verification.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#18181b] relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards Layout */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 border-l-2 border-dashed border-indigo-500/20 ml-4 group">
              {/* Timeline icon dot */}
              <div className="absolute -left-[18px] top-1.5 p-2 bg-[#18181b] rounded-xl border border-indigo-500/30 group-hover:border-indigo-400 group-hover:bg-indigo-500/10 text-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-slate-300">{exp.company}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-400 border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                {/* Subheader */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 pt-3 border-t border-white/5">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
