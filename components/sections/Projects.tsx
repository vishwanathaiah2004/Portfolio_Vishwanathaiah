'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Voice AI Virtual Assistant',
    description: 'An intelligent voice-powered assistant using Gemini AI and speech recognition. Features natural conversations, context awareness, and real-time responses.',
    tech: ['React.js', 'Gemini API', 'MongoDB','Express','JWT', 'JavaScript', 'TailwindCSS'],
    achievements: [
      '95% accuracy in voice recognition',
      '200ms average response time',
      'Multi-language support',
    ],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com/vishwanathaiah2004/Virtual-Assistant',
    demo: 'https://virtual-assistant-byvishwanath.onrender.com/signup',
  },
  {
    title: 'Custom AI Chatbot for Business',
    description: 'Enterprise-grade chatbot solution for business websites with advanced NLP, custom training, and seamless integration with existing systems.',
    tech: ['Next.js', 'Gemini API', 'TypeScript', 'TailwindCSS'],
    achievements: [
      '80% reduction in support tickets',
      '24/7 automated customer service',
      '15+ business integrations',
    ],
    gradient: 'from-emerald-600 to-teal-600',
    github: 'https://github.com/vishwanathaiah2004/Chatbot_Custom',
    demo: 'https://chatbot-custom-three.vercel.app/',
  },
  {
    title: 'BookIt: Experiences & Slots 🌍',
    description: 'Full-stack booking platform that allows users to explore travel experiences, view real-time availability, and complete bookings through a modern, responsive interface..',
    tech: ['Next.js', 'Typescript', 'TailwindCSS', 'Vercel', 'Supabase'],
    achievements: [
      'Dynamic experience listings with real-time slot availability',
      'Secure booking flow with promo code validation',
      'Fully responsive UI with modern UX patterns',
    ],
    gradient: 'from-orange-600 to-red-600',
    github: 'https://github.com/vishwanathaiah2004/BookIt-Experiences-and-Slots',
    demo: 'https://book-it-experiences-and-slots.vercel.app/',
  },
  {
    title: 'Live Video Streaming Platform',
    description: 'Real-time video streaming web application with low latency, chat functionality, and scalable architecture supporting thousands of concurrent users.',
    tech: ['Next.js', 'WebRTC', 'Socket.io', 'Express', 'Redis'],
    achievements: [
      '5000+ concurrent users',
      'Sub-second latency',
      'Real-time chat & reactions',
    ],
    gradient: 'from-pink-600 to-red-600',
    github: 'https://github.com/vishwanathaiah2004/Live-Streaming',
    demo: 'https://github.com/vishwanathaiah2004/Live-Streaming',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Showcasing my expertise in full stack development and AI integration
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      className="border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800 text-white"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
