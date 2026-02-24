import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App relative overflow-x-hidden w-full">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Simple Footer */}
        <footer className="bg-gray-900/95 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-8"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-gray-400 text-sm">
                  © 2026 Ahmed Khaled. All rights reserved.
                </p>
                
                <div className="flex items-center space-x-2">
                  <p className="text-gray-400 text-sm">
                    Made with{' '}
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-red-500"
                    >
                      ❤️
                    </motion.span>{' '}
                    and{' '}
                    <motion.span
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-amber-600"
                    >
                      ☕
                    </motion.span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}

export default App; 