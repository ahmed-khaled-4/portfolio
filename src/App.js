import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="App relative min-h-[100dvh]">
        <div className="mesh-bg" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <Navbar />

        <main id="main" className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />

          <footer className="border-t border-rule py-10">
            <div className="section-shell">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-ink-3">
                <p>
                  <span className="text-ink font-medium">Ahmed Khaled</span>
                  {' · '}Full-Stack Engineer · Cairo
                </p>
                <p>© {new Date().getFullYear()} · Built with React & Tailwind</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
