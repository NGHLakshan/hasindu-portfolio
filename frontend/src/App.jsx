import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

// Simple scroll to top button
const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-300/50 hover:bg-emerald-600 transition-all flex items-center justify-center"
    >
      <ArrowUp size={18} />
    </button>
  );
};

// Education section (simple, clean)
const Education = () => (
  <section id="education" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="section-tag">📚 Academics</span>
        <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            org: 'University of Moratuwa (CODL)',
            certs: [
              { name: 'Web Design for Beginners', code: 'TiGIxobMFF' },
              { name: 'Front-End Web Development', code: 'SMOb7aqymu' },
              { name: 'Python for Beginners', code: 'aEeXVBXWJ8' },
            ],
            emoji: '🏛️',
            color: 'from-violet-50 to-purple-50',
            border: 'border-violet-200',
          },
          {
            org: 'Vocational Training Authority',
            certs: [
              { name: 'Computer Application Assistant NVQ Level 3', code: '' },
            ],
            emoji: '🛠️',
            color: 'from-sky-50 to-blue-50',
            border: 'border-sky-200',
          },
          {
            org: 'CA Sri Lanka',
            certs: [
              { name: 'Business Level One (Incomplete)', code: '' },
            ],
            emoji: '📊',
            color: 'from-amber-50 to-orange-50',
            border: 'border-amber-200',
          },
        ].map((item, i) => (
          <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border ${item.border}`}>
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h3 className="font-bold text-slate-800 text-sm mb-4">{item.org}</h3>
            <div className="space-y-3">
              {item.certs.map((cert, j) => (
                <div key={j} className="bg-white/70 rounded-xl p-3">
                  <p className="text-sm font-semibold text-slate-700">{cert.name}</p>
                  {cert.code && <p className="text-xs text-slate-400 font-mono mt-1">Code: {cert.code}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">HL</span>
              </div>
              <span className="text-white font-bold text-lg">Hasindu Lakshan</span>
            </div>
            <p className="text-sm text-slate-500">Information Systems Undergraduate · Sri Lanka</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/NGHLakshan" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/hasindu-lakshan" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all">
              <Linkedin size={16} />
            </a>
            <a href="mailto:nghlakshan22@gmail.com"
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all">
              <Mail size={16} />
            </a>
          </div>

          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Hasindu Lakshan. All rights reserved.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
