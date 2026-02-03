'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Resume() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 opacity-20 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Download My Resume
            </h2>

            <p className="text-slate-400 text-lg mb-8">
              Get a comprehensive overview of my experience, skills, and achievements
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume26.pdf';
                link.download = 'Resume26.pdf';
                link.click();
              }}
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
