import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiCode, 
  HiServer,
  HiDesktopComputer,
} from 'react-icons/hi';
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

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages',
      icon: HiCode,
      color: 'cyan',
      skills: ['C#', 'Java', 'JavaScript', 'Python', 'Dart'],
      icons: [SiCsharp, HiCode, SiJavascript, SiPython, SiDart],
    },
    {
      title: 'Backend',
      icon: HiServer,
      color: 'blue',
      skills: ['.NET', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
      icons: [SiDotnet, SiSpring, SiNodedotjs, HiServer, HiDesktopComputer],
    },
    {
      title: 'Frontend & Mobile',
      icon: SiReact,
      color: 'sky',
      skills: ['React', 'Next.js', 'Flutter'],
      icons: [SiReact, SiNextdotjs, SiFlutter],
    },
    {
      title: 'Databases',
      icon: SiPostgresql,
      color: 'indigo',
      skills: ['PostgreSQL', 'MongoDB'],
      icons: [SiPostgresql, SiMongodb],
    },
    {
      title: 'DevOps & Tools',
      icon: SiDocker,
      color: 'teal',
      skills: ['Docker', 'CI/CD', 'Linux', 'RabbitMQ', 'Git'],
      icons: [SiDocker, HiCode, SiLinux, SiRabbitmq, SiGit],
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
    <section id="skills" className="py-20 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: catIndex * 0.1 }}
              className="card"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-700/50">
                <div className={`w-10 h-10 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, index) => {
                  const Icon = category.icons[index];
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + index * 0.03 + 0.2 }}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-200 hover:scale-105"
                    >
                      <Icon className={`w-6 h-6 text-${category.color}-400 mb-1.5`} />
                      <span className="text-gray-300 text-xs text-center leading-tight">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
