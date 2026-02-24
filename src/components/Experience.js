import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiCalendar, HiStar, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Konecta Egypt',
      role: 'Full Stack Developer Intern',
      location: 'Cairo, Egypt',
      period: 'May 2025 – Aug. 2025',
      badge: 'Best Intern Across All Tracks',
      gradient: 'from-cyan-500 to-blue-600',
      bullets: [
        'Awarded Best Intern Across All Tracks — selected company-wide for technical contributions and leadership.',
        'Built and maintained production full-stack applications with React, Next.js, Node.js, Spring Boot, and .NET; designed and optimized PostgreSQL schemas; deployed via Docker and CI/CD pipelines.',
        'Collaborated with 8+ developers on Agile sprints: code reviews, debugging production issues, and delivering features under deadline.',
      ],
    },
    {
      company: 'Waed Company',
      role: 'Backend Developer',
      location: 'Cairo, Egypt',
      period: 'May 2024 – April 2025',
      badge: null,
      gradient: 'from-blue-600 to-cyan-700',
      bullets: [
        'Developed RESTful APIs using Node.js and Express within a MERN-based architecture.',
        'Implemented authentication, authorization, validation, and centralized error handling to improve system reliability.',
        'Designed MongoDB and PostgreSQL schemas and optimized database queries.',
        'Added structured logging and collaborated with frontend and QA teams to diagnose and resolve production issues.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Professional experience delivering production-grade software in Agile environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card relative overflow-hidden group"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.gradient}`} />

              <div className="pt-2">
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <HiBriefcase className="w-6 h-6 text-white" />
                    </div>
                    {exp.badge && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold rounded-lg px-3 py-1.5"
                      >
                        <HiStar className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Best Intern</span>
                      </motion.div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{exp.company}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <HiCalendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <div className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.08 + 0.4 }}
                      className="flex items-start gap-2.5"
                    >
                      <HiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm leading-relaxed">{bullet}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
