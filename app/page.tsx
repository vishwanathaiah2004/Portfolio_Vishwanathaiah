import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import AIChatbot from '@/components/sections/AIChatbot';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIChatbot />
      <Achievements />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
