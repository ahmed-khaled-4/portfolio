import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import HeroHeadline3D from './HeroHeadline3D';
import ProfileCard3D from './ProfileCard3D';

const stack = ['.NET', 'Spring Boot', 'React', 'Node.js', 'PostgreSQL', 'Docker'];

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-28 pb-16">
      <div className="section-shell w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-success/30 bg-success/10">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse-soft" />
              <span className="font-mono text-sm text-ink-2">Open to full-stack opportunities</span>
            </div>

            <div>
              <p className="font-mono text-base text-accent mb-5 tracking-wide">
                Full-Stack Software Engineer · Cairo, Egypt
              </p>
              <HeroHeadline3D />
              <p className="section-lead hero-lead !max-w-2xl mt-8">
                Production-grade web apps with .NET, Spring Boot, and React.
                Awarded Best Intern at Konecta for shipping secure, containerized software in Agile teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {stack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 12, rotateX: 24 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.55 + index * 0.05, duration: 0.45 }}
                  className="chip chip-3d text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" onClick={scrollToContact} className="btn-primary btn-lg">
                Start a conversation
                <HiArrowRight size={18} />
              </button>
              <button type="button" onClick={scrollToProjects} className="btn-secondary btn-lg">
                View selected work
              </button>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/ahmed-khaled-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="GitHub profile"
              >
                <SiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-khaled-4b8485250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="LinkedIn profile"
              >
                <SiLinkedin size={22} />
              </a>
              <a
                href="mailto:ahmedabdelaziz2451@gmail.com"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="Send email"
              >
                <HiMail size={22} />
              </a>
            </div>
          </motion.div>

          <ProfileCard3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
