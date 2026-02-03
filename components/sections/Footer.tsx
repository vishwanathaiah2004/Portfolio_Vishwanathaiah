'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/vishwanathaiah2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/h-m-vishwanathaiah-02926932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hmvishwanathaiah.dev@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-slate-400 text-center flex items-center gap-2">
            Built By <Heart className="w-4 h-4 text-red-500 fill-red-500" /> H M Vishwanathaiah
          </p>

          <p className="text-slate-500 text-sm">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
