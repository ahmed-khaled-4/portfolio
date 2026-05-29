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
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 lg:pt-28 lg:pb-14">
      <div className="section-shell w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-success/30 bg-success/10">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
              <span className="font-mono text-xs text-ink-2">Open to full-stack opportunities</span>
            </div>

            <div>
              <p className="font-mono text-sm text-accent mb-4 tracking-wide">
                Full-Stack Software Engineer · Cairo, Egypt
              </p>
              <HeroHeadline3D />
              <p className="section-lead hero-lead !max-w-xl mt-5">
                Production-grade web apps with .NET, Spring Boot, and React.
                Awarded Best Intern at Konecta for shipping secure, containerized software in Agile teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 12, rotateX: 24 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.55 + index * 0.05, duration: 0.45 }}
                  className="chip chip-3d"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={scrollToContact} className="btn-primary btn-lg">
                Start a conversation
                <HiArrowRight size={16} />
              </button>
              <button type="button" onClick={scrollToProjects} className="btn-secondary btn-lg">
                View selected work
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ahmed-khaled-4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="GitHub profile"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-khaled-4b8485250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="LinkedIn profile"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="mailto:ahmedabdelaziz2451@gmail.com"
                className="text-ink-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
                aria-label="Send email"
              >
                <HiMail size={20} />
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
