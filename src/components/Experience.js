import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi';

const experiences = [
  {
    company: 'Konecta Egypt',
    role: 'Full Stack Developer Intern',
    location: 'Cairo, Egypt',
    period: 'May 2025 – Aug 2025',
    badge: 'Best Intern Across All Tracks',
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
    bullets: [
      'Developed RESTful APIs with Node.js and Express in a MERN architecture.',
      'Implemented authentication, authorization, validation, and centralized error handling.',
      'Designed MongoDB and PostgreSQL schemas; added structured logging and cross-team production support.',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-paper-2/40 border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I have shipped real software.</h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-rule hidden sm:block" aria-hidden="true" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-accent bg-paper hidden sm:block" />

                <div className="card !p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{exp.role}</h3>
                      <p className="text-accent font-medium mt-1">{exp.company}</p>
                    </div>
                    {exp.badge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink bg-accent-muted border border-accent/30 rounded-full px-3 py-1.5">
                        <HiStar className="w-3.5 h-3.5" />
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs text-ink-3 mb-5">
                    {exp.period} · {exp.location}
                  </p>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
