'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

            <div className="space-y-6">
              <a
                href="mailto:hmvishwanathaiah.dev@gmail.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-white">
                  hmvishwanathaiah.dev@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/h-m-vishwanathaiah-02926932a/"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                <span className="text-white">LinkedIn</span>
              </a>

              <a
                href="https://github.com/vishwanathaiah2004"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-xl"
              >
                <Github className="w-6 h-6 text-slate-300" />
                <span className="text-white">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-6"
            >
              <Input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] "
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full text-lg py-6 bg-blue-500"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <Send className="ml-2 w-5 h-5" />}
              </Button>

              {success && (
                <p className="text-green-400 text-sm">
                  Message sent successfully! 🚀
                </p>
              )}

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
