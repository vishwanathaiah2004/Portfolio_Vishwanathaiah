'use client';

import { motion } from 'framer-motion';
import { Bot, Clock, Zap, TrendingUp, Building2, ShoppingCart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer query with round-the-clock automated support',
    color: 'text-blue-400',
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Provide immediate answers and reduce customer wait times',
    color: 'text-emerald-400',
  },
  {
    icon: TrendingUp,
    title: 'Boost Conversions',
    description: 'Increase sales by 40% with intelligent product recommendations',
    color: 'text-orange-400',
  },
];

const industries = [
  { icon: Home, name: 'Real Estate', color: 'from-blue-500 to-cyan-500' },
  { icon: ShoppingCart, name: 'E-Commerce', color: 'from-emerald-500 to-teal-500' },
  { icon: Building2, name: 'MSMEs', color: 'from-orange-500 to-red-500' },
];

export default function AIChatbot() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm mb-6">
            <Bot className="w-4 h-4" />
            AI Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Custom AI Chatbot Solutions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transform your business with intelligent chatbots powered by advanced AI
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-900/20 to-slate-900/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-8 sm:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Industries We Serve
            </h3>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-white">{industry.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Custom AI Chatbot.
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
