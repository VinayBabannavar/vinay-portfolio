import React from 'react';
import { Github, Linkedin } from './BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] border-t border-white/5 py-8 text-center text-slate-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright details */}
        <div>
          <p>© {currentYear} Vinay Babannavar. All rights reserved.</p>
        </div>

        {/* Social shortcut icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vinaybabannavar-create"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/vinay-b-0057b6339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
