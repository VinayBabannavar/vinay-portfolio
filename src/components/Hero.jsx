import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Sparkles, Cpu, Play, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalLine, setTerminalLine] = useState(0);
  const roles = [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'DevOps Enthusiast',
    'CS Professional'
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Terminal Simulation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLine((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#09090b]">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[180px] animate-float-delayed"></div>
        
        {/* Futuristic Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio and Title (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 animate-float shadow-inner">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">
                Open for Opportunities
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7.5xl tracking-tight leading-none">
              <span className="block text-slate-400 text-lg sm:text-2xl font-medium mb-3">
                Hello, I am
              </span>
              <span className="block bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                Vinay Babannavar
              </span>
            </h1>

            {/* Dynamic Typed Role Badge */}
            <div className="inline-flex items-center bg-indigo-950/20 backdrop-blur-md px-4 py-2.5 rounded-xl border border-indigo-500/20 shadow-lg shadow-indigo-500/5">
              <Terminal className="w-5 h-5 mr-3 text-indigo-400 shrink-0" />
              <span className="font-mono text-lg sm:text-2xl text-indigo-300 font-semibold tracking-wide flex items-center">
                <span>{text}</span>
                <span className="w-1.5 h-6 ml-1 bg-indigo-400 animate-pulse"></span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              Computer Science professional from Bengaluru specializing in building full-stack web applications and intelligent AI/ML systems. I engineer stateful RAG architectures and autonomous self-healing DevOps configurations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 group shine-effect"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-white/20 font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Social channels link */}
            <div className="flex items-center gap-4 pt-4 text-slate-500 text-sm">
              <span>Connect:</span>
              <a
                href="https://github.com/vinaybabannavar-create"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-110 transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vinay-b-0057b6339"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/20 hover:scale-110 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Terminal Dashboard (5 cols) */}
          <div className="lg:col-span-5 relative group mt-8 lg:mt-0">
            {/* Terminal Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Terminal Window */}
            <div className="relative glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#18181b]/90 flex flex-col font-mono text-xs text-slate-300">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#09090b] border-b border-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: '4s' }} />
                  devops-agent.py
                </div>
                <div className="w-10"></div>
              </div>

              {/* Console logs output */}
              <div className="p-5 space-y-3 leading-relaxed min-h-[260px] text-left">
                <div className="flex gap-2 text-indigo-400">
                  <span className="text-slate-500 select-none">1</span>
                  <span>import agent, langgraph, deepseek</span>
                </div>
                <div className="flex gap-2 text-slate-300">
                  <span className="text-slate-500 select-none">2</span>
                  <span>Initializing stateful agent pipeline...</span>
                </div>
                <div className="flex gap-2 text-emerald-400">
                  <span className="text-slate-500 select-none">3</span>
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3 fill-emerald-500 animate-pulse" />
                    [CONNECTED] Listening to Jenkins build logs...
                  </span>
                </div>
                
                {/* Simulated running cycles */}
                {terminalLine >= 1 && (
                  <div className="flex gap-2 text-amber-300 animate-pulse">
                    <span className="text-slate-500 select-none">4</span>
                    <span>[ALERT] Build Fail detected on line #242</span>
                  </div>
                )}
                {terminalLine >= 2 && (
                  <div className="flex gap-2 text-indigo-300">
                    <span className="text-slate-500 select-none">5</span>
                    <span>▶ Triggering Self-Reflective Corrective RAG</span>
                  </div>
                )}
                {terminalLine >= 3 && (
                  <div className="flex gap-2 text-slate-400">
                    <span className="text-slate-500 select-none">6</span>
                    <span>├ Grader: DeepSeek-R1 (Checking query relevance)</span>
                  </div>
                )}
                {terminalLine >= 4 && (
                  <div className="flex gap-2 text-purple-400">
                    <span className="text-slate-500 select-none">7</span>
                    <span>├ Solution: Corrected config parameters</span>
                  </div>
                )}
                {terminalLine >= 5 && (
                  <div className="flex gap-2 text-emerald-400 font-semibold">
                    <span className="text-slate-500 select-none">8</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-500/20" />
                      [STATUS] Self-healing fix applied. Pipeline OK!
                    </span>
                  </div>
                )}
              </div>

              {/* Terminal Footer Info */}
              <div className="px-4 py-2 bg-[#09090b]/50 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                <span>UTF-8</span>
                <span>Python 3.10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
