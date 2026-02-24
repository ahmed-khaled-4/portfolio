import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiLockClosed } from 'react-icons/hi';
import { SiDotnet, SiSpring, SiPostgresql, SiRabbitmq, SiDocker, SiPython, SiFastapi, SiFlutter, SiFirebase, SiGithub } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Multi-Tenant POS Platform',
      subtitle: 'Distributed Retail System',
      description: 'Event-driven microservices platform with multi-tenant data isolation and RBAC to support multiple stores within one system. Features an API Gateway, inter-service communication, and containerized deployment with Docker and Traefik.',
      technologies: ['.NET', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      techIcons: [SiDotnet, SiSpring, SiRabbitmq, SiPostgresql, SiDocker],
      link: null,
      period: 'Jul – Aug 2025',
      gradient: 'from-cyan-500 to-blue-600',
      accentColor: 'cyan',
    },
    {
      title: 'AI Comment Generator',
      subtitle: 'LLM-Powered Documentation',
      description: 'LLM-powered documentation generator using FastAPI and Ollama. Implements a multi-agent generator/validator pipeline with security filtering and hallucination detection. Supports 20+ programming languages with built-in evaluation metrics.',
      technologies: ['Python', 'FastAPI', 'Ollama', 'LLM'],
      techIcons: [SiPython, SiFastapi],
      link: null,
      period: 'Dec 2025 – Jan 2026',
      gradient: 'from-blue-600 to-cyan-700',
      accentColor: 'blue',
    },
    {
      title: 'Sehhi',
      subtitle: 'Cross-Platform Mobile Health App',
      description: 'Flutter mobile application consuming REST APIs for health data. Features Firebase Authentication with persistent sessions, push notifications via Firebase Cloud Messaging, offline caching, and clean architecture separation using the service/repository pattern.',
      technologies: ['Flutter', 'Firebase', 'FCM', 'Dart'],
      techIcons: [SiFlutter, SiFirebase],
      link: null,
      period: 'Jan – Feb 2026',
      gradient: 'from-cyan-600 to-blue-700',
      accentColor: 'sky',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills in distributed systems, AI tooling, and mobile development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <div className="card h-full relative overflow-hidden">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="relative z-10 pt-2">
                  {/* Period badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center text-xs font-semibold text-${project.accentColor}-400 bg-${project.accentColor}-500/10 border border-${project.accentColor}-500/20 rounded-lg px-3 py-1.5`}>
                      {project.period}
                    </span>
                    {!project.link && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-700/30 rounded-lg px-2 py-1">
                        <HiLockClosed className="w-3 h-3" />
                        Private
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex items-center gap-3 mb-4">
                    {project.techIcons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className={`w-8 h-8 rounded-lg bg-gray-700/30 flex items-center justify-center text-${project.accentColor}-400 group-hover:bg-gray-700/50 transition-all duration-200`}
                      >
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/40 text-gray-300 text-xs rounded-md border border-gray-600/30 hover:border-cyan-500/40 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.accentColor}-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ahmed-khaled-4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/60 border border-gray-700/40 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
          >
            <SiGithub size={20} />
            <span className="font-medium">View More on GitHub</span>
            <HiExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
