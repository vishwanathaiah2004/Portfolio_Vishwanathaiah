'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Code } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'CodeVita 2024',
    description: 'Global Rank #3687',
    highlight: '#2 in College',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-900/20 to-orange-900/10',
    borderColor: 'border-yellow-500/30',
  },
  {
    icon: Code,
    title: 'Smart India Hackathon',
    description: 'National Level Competition',
    highlight: 'Round 2 Qualified',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-900/20 to-cyan-900/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Award,
    title: 'EY Techathon',
    description: 'Ernst & Young Competition',
    highlight: 'Round 2 Qualified',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-900/20 to-teal-900/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Medal,
    title: 'Ideathon',
    description: 'Innovation Challenge Finalist ',
    highlight: 'Finalist',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-900/20 to-green-900/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Medal,
    title: 'Hakathon',
    description: 'Google Developers Hakathon ',
    highlight: 'Participated',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-emerald-900/20 to-red-900/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Medal,
    title: 'Hakathon',
    description: 'microsoft imagine cup 2026 ',
    highlight: 'Participated',
    color: 'from-green-500 to-pink-500',
    bgColor: 'from-green-900/20 to-blue-900/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Medal,
    title: 'Hakathon',
    description: 'IBM DEV DAY 2026',
    highlight: 'Participated',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-blue-900/20 to-yellow-900/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Medal,
    title: 'Hakathon',
    description: 'MSMEs Hakathon ',
    highlight: 'Round 2 Qualified',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-900/20 to-orange-900/10',
    borderColor: 'border-yellow-500/30',
  },

];

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-950 relative">
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
            Achievements & Competitions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${achievement.bgColor} backdrop-blur-sm border ${achievement.borderColor} rounded-xl p-6 hover:scale-105 transition-all group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center mb-4`}>
                <achievement.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {achievement.title}
              </h3>

              <p className="text-slate-400 text-sm mb-3">
                {achievement.description}
              </p>

              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                  bg-gradient-to-r ${achievement.color} text-white shadow-sm`}
              >
                {achievement.highlight}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
