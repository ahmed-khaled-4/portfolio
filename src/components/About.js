import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const highlights = [
    {
      title: 'Ships end-to-end',
      description: 'From PostgreSQL schemas and REST APIs to React frontends and Docker deploys.',
    },
    {
      title: 'Thrives under pressure',
      description: 'Delivered production features alongside 8+ engineers in fast Agile sprints.',
    },
    {
      title: 'Always leveling up',
      description: 'Exploring distributed systems, microservices, and AI-powered developer tooling.',
    },
  ];

  return (
    <section id="about" className="section-y border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mb-10 lg:mb-12"
        >
          <p className="section-label">About</p>
          <h2 className="section-title">
            I turn complex backend problems into products people can hire for.
          </h2>
          <p className="section-lead">
            Full-stack engineer from Cairo with hands-on experience at Konecta Egypt and Waed Company.
            I design multi-tenant architectures, secure APIs, and polished React interfaces — then deploy them with Docker and CI/CD.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-ink-2 leading-relaxed">
              B.Sc. in Computer Science from Zewail City. I work across .NET, Spring Boot, and Node.js backends,
              pairing them with React and Next.js frontends. My recent work spans event-driven POS platforms,
              LLM documentation pipelines, and cross-platform mobile apps.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-paper-2 border border-rule">
                <HiAcademicCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Zewail City</p>
                  <p className="text-sm text-ink-3">B.Sc. Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-paper-2 border border-rule">
                <HiLocationMarker className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-ink">Cairo, Egypt</p>
                  <p className="text-sm text-ink-3">Open to remote & hybrid roles</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-rule bg-paper-2/50 hover:border-accent/25 transition-colors"
              >
                <p className="font-mono text-xs text-accent mb-2">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-base font-semibold text-ink mb-1.5">{item.title}</h3>
                <p className="text-sm text-ink-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
