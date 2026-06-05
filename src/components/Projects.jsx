import React, { useState } from 'react';
import { ExternalLink, Terminal, Cpu, Network, Lightbulb, Search, Eye, X } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Jenkins Pipeline Analyzer & Self-Healing DevOps Agent',
      year: '2026',
      tech: ['Python', 'Jenkins', 'LLM APIs', 'CI/CD', 'Docker', 'FastAPI'],
      icon: Terminal,
      shortDesc: 'Autonomous DevOps agent that analyzes Jenkins build logs, diagnoses errors, and triggers self-healing fixes.',
      github: 'https://github.com/vinaybabannavar-create/AI-Powered-Jenkins-Pipeline-Analyzer-Self-Healing-DevOps-Agent',
      details: [
        'Developed an AI agent designed to integrate directly with Jenkins pipelines to monitor console outputs and logs in real-time.',
        'Uses advanced LLM reasoning to pinpoint root causes of build failures, separating environment configurations, dependency mismatches, and syntax bugs.',
        'Implements automated self-healing scripts to autonomously apply configuration patches or suggest pull request fixes, decreasing mean-time-to-repair (MTTR) by over 60%.',
        'Built REST endpoints using FastAPI for manual logs triggers and manual pipeline inspection dashboards.'
      ],
      colorClass: 'indigo',
      glowClass: 'tech-card-glow-indigo',
      statusColor: 'bg-cyan-500',
      statusText: 'Active System'
    },
    {
      id: 2,
      title: 'Self-Reflective Corrective RAG Pipeline',
      year: '2026',
      tech: ['Python', 'LangGraph', 'DeepSeek-R1', 'ChromaDB', 'Pinecone', 'FastAPI'],
      icon: Network,
      shortDesc: 'A stateful, 5-node self-correcting Retrieval-Augmented Generation pipeline using LangGraph and DeepSeek.',
      github: 'https://github.com/vinaybabannavar-create/Neural-Nexus',
      details: [
        'Engineered an enterprise-grade corrective RAG system with a stateful graph of 5 specialized nodes: Document Retrieval, Relevance Grading, Web Search Fallback, Generation, and Hallucination Verification.',
        'Integrated DeepSeek-R1 as a reasoning engine/grader to double-evaluate documents, check relevancy, and detect hallucinations.',
        'Triggers automatic web search fallback (using Tavily or DuckDuckGo) when local vector databases (ChromaDB/Pinecone) lack sufficient information.',
        'Achieved full self-correction by loops that automatically rewrite and regenerate answers if hallucination checking fails, ensuring human-like editing and validation.'
      ],
      colorClass: 'purple',
      glowClass: 'tech-card-glow-purple',
      statusColor: 'bg-purple-500',
      statusText: 'Self-Correcting'
    },
    {
      id: 3,
      title: 'Intelligent Digital Twin System for Smart Technologies',
      year: '2026',
      tech: ['Python', 'IoT Sensors', 'Machine Learning', 'Data Pipelines'],
      icon: Cpu,
      shortDesc: 'Real-time digital twin simulator capturing IoT sensor data for anomaly detection and predictive maintenance.',
      github: 'https://github.com/vinaybabannavar-create/Intelligent-Digital-Twin-System-for-Smart',
      details: [
        'Designed a digital twin simulation representing manufacturing/smart IoT environments.',
        'Syncs real-time synthetic and physical sensor data directly with localized machine learning models.',
        'Implemented autoencoder-based anomaly detection to flag issues and deviations early, enabling proactive maintenance scheduling.',
        'Decreases equipment downtime by predicting failure trends using regression models based on historical temperature, pressure, and vibration values.'
      ],
      colorClass: 'emerald',
      glowClass: 'tech-card-glow-emerald',
      statusColor: 'bg-emerald-500',
      statusText: 'Live Sync'
    },
    {
      id: 4,
      title: 'Smart AI Traffic Signal System',
      year: '2025',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      icon: Lightbulb,
      shortDesc: 'Dynamic computer vision-based traffic light optimizer adjusting signal timers in real time using vehicle density.',
      github: 'https://github.com/vinaybabannavar-create/Smart-AI-Traffic-Signal-System',
      details: [
        'Developed an AI-driven traffic system that uses OpenCV to count vehicle density in live lanes rather than rely on static clocks.',
        'Processes video inputs from multiple directions and computes traffic weight to optimize signal scheduling on the fly.',
        'Demonstrated up to 30% reduction in simulation gridlock and idling times by dynamically shifting green lights to lanes with higher density.',
        'Uses Haar Cascades and customized YOLO object detection scripts for vehicle classifications (Cars, Trucks, Bikes).'
      ],
      colorClass: 'cyan',
      glowClass: 'tech-card-glow-cyan',
      statusColor: 'bg-amber-500',
      statusText: 'CV Density Optimizing'
    },
    {
      id: 5,
      title: 'AI-Powered Student Detection System',
      year: '2025',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Classifiers'],
      icon: Search,
      shortDesc: 'Presence and classroom engagement tracker running real-time facial analytics and automating attendance.',
      github: 'https://github.com/vinaybabannavar-create/AI-Powered-Student-Detection-System',
      details: [
        'Built a computer vision system targeting automated roll-calls and classroom engagement statistics.',
        'Uses face detection and recognition classifiers trained on custom student datasets to record presence with over 94% accuracy.',
        'Features eye-tracking and posture-based attention classifiers to analyze classroom concentration indices.',
        'Includes automated database hooks to log daily attendance records instantly to MySQL, eliminating manual sheets.'
      ],
      colorClass: 'indigo',
      glowClass: 'tech-card-glow-indigo',
      statusColor: 'bg-rose-500',
      statusText: 'Attendance Sync'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Click on any project to zoom in and see complete features, architectural implementation details, and technical notes.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 cursor-pointer group flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${project.glowClass}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 text-slate-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors duration-300`}>
                      <ProjectIcon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded-full border border-white/5 text-[9px] text-slate-400 font-mono">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.statusColor}`}></span>
                          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${project.statusColor}`}></span>
                        </span>
                        {project.statusText}
                      </span>
                      <span className="text-xs font-mono font-semibold bg-white/5 text-slate-400 px-2 py-0.5 rounded-full border border-white/5">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors duration-300 mb-3 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-400 mb-6 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Footer and Tech */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-semibold bg-white/5 text-slate-300 px-2 py-0.5 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] sm:text-xs font-semibold bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded-md border border-indigo-500/20">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-indigo-400 group-hover:text-indigo-300 font-semibold">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View Details
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent modal trigger
                      className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Detail Modal (Zoom-in / Zoom-out) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090b]/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
        >
          {/* Zoom Card */}
          <div
            className={`glass-panel w-full max-w-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 scale-100 opacity-100 flex flex-col max-h-[85vh] bg-[#18181b]`}
            onClick={(e) => e.stopPropagation()} // Prevent background close
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  {React.createElement(selectedProject.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {selectedProject.year}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 scrollbar-thin">
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 leading-snug">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {selectedProject.shortDesc}
                </p>
              </div>

              {/* Technology badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-white/5 text-slate-300 px-3 py-1 rounded-lg border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Implementation Bullet Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Achievements & Implementation Details
                </h4>
                <ul className="space-y-3">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/5 bg-[#09090b] flex items-center justify-between">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                View Repository
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 font-semibold transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
