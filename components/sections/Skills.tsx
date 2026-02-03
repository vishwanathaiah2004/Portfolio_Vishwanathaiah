'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    bgColor: 'from-blue-900/20 to-cyan-900/10',
    skills: ['C', 'Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    bgColor: 'from-emerald-900/20 to-teal-900/10',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    bgColor: 'from-orange-900/20 to-red-900/10',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT'],
  },
  {
    title: 'Databases',
    color: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/30',
    bgColor: 'from-violet-900/20 to-purple-900/10',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'AI & ML',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/30',
    bgColor: 'from-pink-900/20 to-rose-900/10',
    skills: ['Gemini API', 'LLMs', 'Prompt Engineering', 'Voice AI'],
  },
  {
    title: 'Tools & Others',
    color: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-500/30',
    bgColor: 'from-amber-900/20 to-yellow-900/10',
    skills: ['Git', 'GitHub', 'CI/CD', 'System Design', 'DSA'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-xl p-6 hover:scale-105 transition-all group`}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-slate-600 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
