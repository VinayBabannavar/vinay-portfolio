import React, { useState } from 'react';
import { Code, Server, Brain, Cpu, Sparkles, Layers } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'web', name: 'Web Dev', icon: Server },
    { id: 'ai', name: 'AI / ML', icon: Brain },
    { id: 'tools', name: 'Tools & DevOps', icon: Cpu },
  ];

  const skillGroups = [
    {
      name: 'Programming Languages',
      category: 'languages',
      skills: [
        { name: 'Python', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Used in ML models, LangGraph, OpenCV, and DevOps self-healing agents' },
        { name: 'Java', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Used in Object-Oriented software architectures and DSA algorithms' },
        { name: 'TypeScript', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Used in responsive web states and component configurations' },
        { name: 'C', tier: 'Familiar', tierColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20', appliedIn: 'Systems programming principles, compilers, and memory logistics' },
      ],
    },
    {
      name: 'Web Development',
      category: 'web',
      skills: [
        { name: 'React.js', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Built dynamic single-page dashboard panels and custom states' },
        { name: 'Full-Stack Development', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'End-to-end integration combining databases and frontends' },
        { name: 'REST APIs', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Standardized communication endpoints for client-server transfers' },
        { name: 'FastAPI', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Built REST servers for RAG pipelines and automated console triggers' },
        { name: 'Django', tier: 'Familiar', tierColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20', appliedIn: 'Admin dashboards and structured MVC web designs' },
        { name: 'Flask', tier: 'Familiar', tierColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20', appliedIn: 'Microservices routing and lightweight mock endpoints' },
      ],
    },
    {
      name: 'AI / Machine Learning',
      category: 'ai',
      skills: [
        { name: 'Machine Learning', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Used for sensor readings and prediction classification twins' },
        { name: 'Retrieval-Augmented Gen (RAG)', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Built multi-node state graphs with web fallbacks and grading' },
        { name: 'LLM APIs Integration', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Integrated DeepSeek, GPT APIs for diagnosis and self-corrections' },
        { name: 'LangGraph', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Engineered a stateful 5-node graph for corrective generation' },
        { name: 'DeepSeek-R1 Grading', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Implemented as reasoning agent to grade hallucinations and contexts' },
        { name: 'Computer Vision (OpenCV)', tier: 'Familiar', tierColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20', appliedIn: 'Built vehicle density optimizers and student trackers' },
      ],
    },
    {
      name: 'Databases & Tools',
      category: 'tools',
      skills: [
        { name: 'MongoDB & MySQL', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Persistent storage, schema layouts, and transactional relational queries' },
        { name: 'ChromaDB & Pinecone', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Indexed document vector embeddings for efficient semantic searches' },
        { name: 'Docker', tier: 'Familiar', tierColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20', appliedIn: 'Application packaging, ports management, and staging layers' },
        { name: 'Jenkins CI/CD', tier: 'Proficient', tierColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20', appliedIn: 'Monitored logs outputs and connected automated diagnostic handlers' },
        { name: 'Git & GitHub', tier: 'Core Focus', tierColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20', appliedIn: 'Version control branch strategies and pull request reviews' },
      ],
    },
  ];

  // Soft Skills (displayed separately at the bottom for visual contrast)
  const softSkills = [
    'Design Thinking',
    'Problem Solving',
    'Team Collaboration',
    'Public Speaking',
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(group => group.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#18181b] relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Technical Arsenal & Application
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hover over any technical skill card to see exactly where I applied it in my projects and core competencies.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/10 border-transparent'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              {/* Group Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white border-l-4 border-indigo-500 pl-3">
                {group.name}
              </h3>

              {/* Sub-grid of skill blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-panel p-4 rounded-xl border border-white/5 hover:border-indigo-500/20 hover:bg-[#0b0f19]/80 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-0.5 shadow-md shadow-black/10"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded border shrink-0 ${skill.tierColor}`}>
                        {skill.tier}
                      </span>
                    </div>
                    
                    {/* Interactive Reveal Context details on Hover */}
                    <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-500 group-hover:text-indigo-300 transition-colors duration-300 leading-relaxed font-sans">
                      {skill.appliedIn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="border-t border-white/5 pt-12 text-center mt-16">
          <h3 className="font-display font-semibold text-lg text-white mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Core Methodologies & Soft Skills
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-slate-300 font-medium text-sm hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
