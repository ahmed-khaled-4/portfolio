import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiCsharp,
  SiJavascript,
  SiPython,
  SiDart,
  SiDotnet,
  SiSpring,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiRabbitmq,
} from 'react-icons/si';

const skillGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'C#', Icon: SiCsharp },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'Python', Icon: SiPython },
      { name: 'Dart', Icon: SiDart },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: '.NET', Icon: SiDotnet },
      { name: 'Spring Boot', Icon: SiSpring },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'REST APIs', Icon: SiNodedotjs },
    ],
  },
  {
    label: 'Frontend & Mobile',
    items: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Flutter', Icon: SiFlutter },
    ],
  },
  {
    label: 'Data & DevOps',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Docker', Icon: SiDocker },
      { name: 'RabbitMQ', Icon: SiRabbitmq },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Git', Icon: SiGit },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-y border-t border-rule/60">
      <div className="section-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-10 lg:mb-12 max-w-2xl"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">The stack I bring on day one.</h2>
          <p className="section-lead">
            Backend-heavy full-stack — comfortable owning APIs, databases, containers, and the React layer on top.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              className="card"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(({ name, Icon }) => (
                  <span key={name} className="chip">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
