import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLockClosed, HiExternalLink, HiClock, HiChevronDown } from 'react-icons/hi';
import { SiGithub, SiDotnet, SiSpring, SiRabbitmq, SiPostgresql, SiDocker, SiPython, SiFastapi, SiFlutter, SiFirebase } from 'react-icons/si';

const previewStyles = {
  pos: 'bg-[linear-gradient(135deg,oklch(19%_0.03_48)_0%,oklch(15%_0.04_55)_100%)]',
  ai: 'bg-[linear-gradient(135deg,oklch(17%_0.04_190)_0%,oklch(13%_0.03_48)_100%)]',
  sehhi: 'bg-[linear-gradient(135deg,oklch(18%_0.05_155)_0%,oklch(14%_0.03_48)_100%)]',
  iot: 'bg-[linear-gradient(135deg,oklch(16%_0.04_230)_0%,oklch(13%_0.03_48)_100%)]',
  qassem: 'bg-[linear-gradient(135deg,oklch(18%_0.05_300)_0%,oklch(14%_0.03_48)_100%)]',
};

const projects = [
  {
    title: 'Multi-Tenant POS Platform',
    subtitle: 'Distributed retail system',
    description: 'Event-driven microservices with multi-tenant data isolation, RBAC, API gateway, and Docker + Traefik deployment.',
    period: 'Jul – Aug 2025',
    technologies: ['.NET', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    icons: [SiDotnet, SiSpring, SiRabbitmq, SiPostgresql, SiDocker],
    preview: 'pos',
    featured: true,
    githubUrl: null,
  },
  {
    title: 'AI Comment Generator',
    subtitle: 'LLM documentation pipeline',
    description: 'FastAPI + Ollama multi-agent generator with security filtering and hallucination detection across 20+ languages.',
    period: 'Dec 2025 – Jan 2026',
    technologies: ['Python', 'FastAPI', 'Ollama', 'CrewAI'],
    icons: [SiPython, SiFastapi],
    preview: 'ai',
    featured: false,
    githubUrl: 'https://github.com/ahmed-khaled-4/ai-comment-generator',
  },
  {
    title: 'IOT-Project',
    subtitle: 'Hybrid IoT campus network',
    description: 'Distributed campus with 200 MQTT/CoAP nodes, 10 Node-RED floor gateways, ThingsBoard dashboards, and TLS/DTLS security — all in Docker.',
    period: 'May 2026',
    technologies: ['Python', 'asyncio', 'MQTT', 'CoAP', 'Docker'],
    icons: [SiPython, SiDocker],
    preview: 'iot',
    featured: false,
    githubUrl: 'https://github.com/ahmed-khaled-4/IOT-Project',
  },
  {
    title: 'Sehhi',
    subtitle: 'Cross-platform health app',
    description: 'Flutter app with Firebase auth, FCM push notifications, offline caching, and clean service/repository architecture.',
    period: 'Jan – Feb 2026',
    technologies: ['Flutter', 'Firebase', 'FCM'],
    icons: [SiFlutter, SiFirebase],
    preview: 'sehhi',
    featured: false,
    githubUrl: null,
  },
  {
    title: 'Qassem',
    subtitle: 'Physics-driven adventure game',
    description: 'Single-player Unreal Engine 5 graduation project with AI-based character behavior, event-driven mechanics, and performance-optimized gameplay systems.',
    period: 'Sep 2025 – present',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprint'],
    icons: [],
    preview: 'qassem',
    featured: false,
    githubUrl: null,
    wip: true,
  },
];

const openSource = [
  {
    title: 'HabitForge',
    description: 'Full-stack habit tracker with JWT auth and progress charts',
    stack: 'React · Express · SQLite',
    url: 'https://github.com/ahmed-khaled-4/HabitForge',
  },
  {
    title: 'TuneTrail',
    description: 'Spotify-inspired music streaming app with Audius API integration',
    stack: 'React · Node.js',
    url: 'https://github.com/ahmed-khaled-4/TuneTrail',
  },
  {
    title: 'linknest',
    description: 'Smart link shortener with analytics and password protection',
    stack: 'Node.js · Express',
    url: 'https://github.com/ahmed-khaled-4/linknest',
  },
];

const ProjectPreview = ({ type, title, featured }) => (
  <div
    className={`relative ${featured ? 'h-52 sm:h-64 lg:h-72' : 'h-44 sm:h-52'} overflow-hidden border-b border-rule ${previewStyles[type]}`}
    aria-hidden="true"
  >
    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
    {type === 'pos' && (
      <div className="absolute inset-6 grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-lg border border-rule/60 bg-paper/40 p-3">
          <div className="h-2 w-16 bg-accent/60 rounded mb-3" />
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-ink/10 rounded" />
            <div className="h-1.5 w-4/5 bg-ink/10 rounded" />
            <div className="h-1.5 w-3/5 bg-ink/10 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-full rounded-lg border border-rule/60 bg-paper/30" />
        </div>
      </div>
    )}
    {type === 'ai' && (
      <div className="absolute inset-6 font-mono text-[10px] text-accent/80 leading-relaxed">
        <p>&gt; generator.validate()</p>
        <p>&gt; filter.security()</p>
        <p>&gt; detect.hallucination()</p>
        <p className="text-ink-3 mt-3">{'// 20+ languages supported'}</p>
      </div>
    )}
    {type === 'sehhi' && (
      <div className="absolute inset-6 flex items-end gap-3">
        <div className="w-24 h-36 rounded-2xl border-2 border-rule bg-paper/50 mx-auto relative">
          <div className="absolute top-3 inset-x-3 h-2 bg-accent/40 rounded" />
          <div className="absolute top-8 inset-x-3 space-y-2">
            <div className="h-1.5 bg-ink/10 rounded" />
            <div className="h-1.5 bg-ink/10 rounded w-4/5" />
            <div className="h-8 bg-success/20 rounded mt-4" />
          </div>
        </div>
      </div>
    )}
    {type === 'iot' && (
      <div className="absolute inset-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded border border-accent/30 bg-accent/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            </div>
          ))}
        </div>
        <p className="font-mono text-[9px] text-accent/70">100 MQTT nodes &middot; 100 CoAP nodes</p>
        <p className="font-mono text-[9px] text-ink-3">10 Node-RED gateways &middot; ThingsBoard</p>
      </div>
    )}
    {type === 'qassem' && (
      <div className="absolute inset-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl border border-accent/30 bg-accent/10 mx-auto mb-3 flex items-center justify-center">
            <span className="font-mono text-accent text-2xl font-bold">Q</span>
          </div>
          <p className="font-mono text-[10px] text-ink-3">Unreal Engine 5</p>
        </div>
      </div>
    )}
    <p className="absolute bottom-3 left-4 font-mono text-[10px] text-ink-3 uppercase tracking-widest">{title}</p>
  </div>
);

const ProjectCard = ({ project, index, isOpen, onToggle, inView }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.45, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
    className={`card !p-0 overflow-hidden ${isOpen ? 'exp-card-open' : ''} ${project.featured ? 'lg:col-span-2' : ''}`}
  >
    <ProjectPreview type={project.preview} title={project.subtitle} featured={project.featured} />

    <button
      onClick={onToggle}
      className="exp-header w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-inset"
      aria-expanded={isOpen}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="text-lg sm:text-xl font-semibold text-ink">{project.title}</h3>
          {project.wip && (
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
              <HiClock className="w-3 h-3" />
              In progress
            </span>
          )}
        </div>
        <p className="text-accent font-medium text-sm mb-0.5">{project.subtitle}</p>
        <p className="font-mono text-xs text-ink-3">{project.period}</p>
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
            <motion.p
              className="text-sm text-ink-2 leading-relaxed mt-4 mb-5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="chip !text-[11px]"
                  initial={{ opacity: 0, scale: 0.75, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="flex items-center justify-between pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-ink-3">
                {project.icons.map((Icon, i) => (
                  <Icon key={i} className="w-4 h-4" aria-hidden="true" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                {!project.githubUrl && !project.wip && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
                    <HiLockClosed className="w-3 h-3" />
                    Private repo
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-ink transition-colors"
                  >
                    <SiGithub className="w-3 h-3" />
                    View code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.article>
);

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleProject = (index) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="projects" className="section-y bg-paper-2/40 border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 lg:mb-12 max-w-2xl"
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected builds that show range.</h2>
          <p className="section-lead">
            Production repos — architecture, design decisions, and tech stack outlined below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isOpen={openIndices.includes(index)}
              onToggle={() => toggleProject(index)}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-5">Open source</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {openSource.map((repo, index) => (
              <motion.a
                key={repo.title}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.07 }}
                className="card hover:!border-accent/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <SiGithub className="w-4 h-4 text-ink-3 group-hover:text-accent transition-colors" aria-hidden="true" />
                  <HiExternalLink className="w-3.5 h-3.5 text-ink-3 group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-1">{repo.title}</h3>
                <p className="text-xs text-ink-2 leading-relaxed mb-3">{repo.description}</p>
                <p className="font-mono text-[10px] text-ink-3">{repo.stack}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/ahmed-khaled-4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <SiGithub size={18} />
            More on GitHub
            <HiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
