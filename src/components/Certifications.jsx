import React from 'react';
import { Award, ShieldCheck, Terminal, Compass, BarChart, Database, Network } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Azure AI Fundamentals (AI-900)',
      provider: 'Microsoft',
      icon: Award,
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
    {
      title: 'Azure Fundamentals (AZ-900)',
      provider: 'Microsoft',
      icon: Award,
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      provider: 'TATA Forage',
      icon: BarChart,
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
    {
      title: 'Networking Basics',
      provider: 'Cisco',
      icon: Network,
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
    {
      title: 'Cloud Computing',
      provider: 'NPTEL',
      icon: ShieldCheck,
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    {
      title: 'Database Management System',
      provider: 'NPTEL',
      icon: Database,
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    {
      title: 'Introduction to Machine Learning',
      provider: 'NPTEL',
      icon: Compass,
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    {
      title: 'Generative AI Mastermind',
      provider: 'Outskill',
      icon: Terminal,
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
    {
      title: 'Innovation & Design Thinking Program',
      provider: 'Comedkares',
      icon: ShieldCheck,
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    },
    {
      title: 'Programming in C',
      provider: 'Others',
      icon: Terminal,
      badgeColor: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const CertIcon = cert.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/5 flex items-start gap-4 transform hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="p-3 bg-white/5 rounded-xl text-indigo-400 group-hover:text-white transition-colors duration-300 shrink-0">
                  <CertIcon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-200 leading-snug">
                    {cert.title}
                  </h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold border ${cert.badgeColor}`}>
                    {cert.provider}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
