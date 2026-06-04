'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-slate-400 text-lg">
            My journey building real-world AI systems
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent" />

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative md:w-1/2 md:ml-auto pl-12 md:pl-16"
        >
          {/* Dot */}
          <div className="absolute left-0 md:-left-3 top-2 w-6 h-6 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

          <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all">
            
            {/* Role */}
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                Software Developer Intern
              </h3>
            </div>

            {/* Company with Logo + Link */}
            <div className="flex items-center gap-3 mb-2">
              <a
                href="https://www.prabisha.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                {/* Logo */}
                <div className="p-2 rounded-lg bg-slate-800/60 backdrop-blur border border-slate-700 group-hover:border-blue-500 transition">
                  <Image
                    src="/prabisha.jpeg"
                    alt="Prabisha Consulting"
                    width={28}
                    height={28}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Company Name */}
                <p className="text-orange-400 font-medium group-hover:text-blue-400 transition">
                  Prabisha Consulting (UK)
                </p>

                {/* Optional small hint */}
                <span className="text-xs text-slate-500 hidden sm:inline">
                  (Visit)
                </span>
              </a>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-slate-400 mb-6">
              <Calendar size={16} />
              <span>Feb 2026 – May 2026</span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li>
                • Built <span className="text-blue-400 font-medium">AI chatbots</span> using modern LLM frameworks for real-world applications
              </li>
              <li>
                • Developed <span className="text-emerald-400 font-medium">end-to-end AI voice sales agent</span> using Twilio & VAPI
              </li>
              <li>
                • Designed <span className="text-orange-400 font-medium">AI agent workflows</span> for lead qualification & booking
              </li>
              <li>
                • Integrated <span className="text-blue-400 font-medium">full-stack systems</span> (frontend + backend + APIs)
              </li>
            </ul>

            {/* Badge */}
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <Sparkles size={14} className="text-blue-400" />
              Real-world AI Systems • Production Level Work
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
