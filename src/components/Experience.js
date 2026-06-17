import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiChevronDown } from 'react-icons/hi';

const experiences = [
  {
    company: 'Konecta Egypt',
    role: 'Full Stack Developer Intern',
    location: 'Cairo, Egypt',
    period: 'May 2025 – Aug 2025',
    badge: 'Best Intern Across All Tracks',
    stack: ['React', 'Next.js', '.NET', 'Spring Boot', 'PostgreSQL', 'Docker'],
    bullets: [
      'Selected company-wide for technical contributions and leadership across all intern tracks.',
      'Built production full-stack apps with React, Next.js, Node.js, Spring Boot, and .NET; optimized PostgreSQL schemas; deployed via Docker and CI/CD.',
      'Collaborated with 8+ developers on Agile sprints — code reviews, production debugging, and deadline delivery.',
    ],
  },
  {
    company: 'Waed Company',
    role: 'Backend Developer',
    location: 'Cairo, Egypt',
    period: 'May 2024 – Apr 2025',
    badge: null,
    stack: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    bullets: [
      'Developed RESTful APIs with Node.js and Express in a MERN architecture.',
      'Implemented authentication, authorization, validation, and centralized error handling.',
      'Designed MongoDB and PostgreSQL schemas; added structured logging and cross-team production support.',
    ],
  },
];

const ExperienceCard = ({ exp, index, isOpen, onToggle, inView }) => (
  <motion.article
    initial={{ opacity: 0, x: -16 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
    className="relative sm:pl-10"
  >
    <motion.div
      animate={isOpen
        ? { scale: 1, backgroundColor: 'oklch(73% 0.11 58 / 1)' }
        : { scale: 0.85, backgroundColor: 'oklch(15% 0.022 46 / 1)' }
      }
      transition={{ duration: 0.3 }}
      className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2 border-accent hidden sm:block"
    />

    <div className={`card !p-0 overflow-hidden ${isOpen ? 'exp-card-open' : ''}`}>
      <button
        onClick={onToggle}
        className="exp-header w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-lg sm:text-xl font-semibold text-ink">{exp.role}</h3>
            {exp.badge && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink bg-accent-muted border border-accent/30 rounded-full px-2.5 py-1">
                <HiStar className="w-3 h-3 text-accent" />
                {exp.badge}
              </span>
            )}
          </div>
          <p className="text-accent font-medium text-sm mb-0.5">{exp.company}</p>
          <p className="font-mono text-xs text-ink-3">{exp.period} · {exp.location}</p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 shrink-0"
        >
          <HiChevronDown
            className={`w-5 h-5 transition-colors duration-200 ${
              isOpen ? 'text-accent' : 'text-ink-3 group-hover:text-accent'
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.25, ease: 'easeOut' },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 sm:px-6 pb-6 border-t border-rule/50">
              <div className="flex flex-wrap gap-2 pt-4 mb-5">
                {exp.stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="chip !text-[11px]"
                    initial={{ opacity: 0, scale: 0.75, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 text-sm text-ink-2 leading-relaxed"
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <motion.span
                      className="text-accent mt-1.5 shrink-0 font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.12 + i * 0.07 }}
                    >
                      —
                    </motion.span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.article>
);

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-y bg-paper-2/40 border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 lg:mb-12"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I have shipped real software.</h2>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-rule hidden sm:block" aria-hidden="true" />
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
