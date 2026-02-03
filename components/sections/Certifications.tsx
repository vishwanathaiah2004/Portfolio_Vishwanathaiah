'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Shield, Code2 } from 'lucide-react';

const certifications = [
  {
    icon: Code2,
    title: 'Front End Web Developer',
    issuer: 'Laurence Svekis',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-900/20 to-cyan-900/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: GraduationCap,
    title: 'Software Engineering Job Simulation',
    issuer: 'JP Morgan',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-900/20 to-teal-900/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Shield,
    title: 'Cyber Security Job Simulation',
    issuer: 'Deloitte',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-900/20 to-red-900/10',
    borderColor: 'border-orange-500/30',
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-slate-900 relative">
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${cert.bgColor} backdrop-blur-sm border ${cert.borderColor} rounded-xl p-6 hover:scale-105 transition-all group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center mb-4`}>
                <cert.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>

              <p className={`text-sm font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
