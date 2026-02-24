import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode, HiLightBulb, HiHeart, HiBriefcase, HiStar } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: HiCode,
      title: "Full-Stack Developer",
      description: "Specialized in building end-to-end applications with modern technologies"
    },
    {
      icon: HiLightBulb,
      title: "Problem Solver",
      description: "Passionate about turning complex challenges into elegant solutions"
    },
    {
      icon: HiHeart,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices in software development"
    }
  ];

  const stats = [
    { icon: HiBriefcase, label: '2 Years', sublabel: 'Experience', color: 'cyan' },
    { icon: HiStar, label: '2 Internships', sublabel: 'Completed', color: 'blue' },
    { icon: HiCode, label: '5 Languages', sublabel: 'Proficient', color: 'sky' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card text-center group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-${stat.color}-500/30 transition-all duration-200`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Full-Stack Software Engineer
                </h3>
                
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Hello! I'm <span className="text-cyan-400 font-semibold">Ahmed Khaled</span>, a Full-Stack Software Engineer from Cairo, Egypt with industry experience building scalable, end-to-end web applications.
                  </p>

                  <p>
                    I specialize in designing multi-tenant architectures and RESTful APIs using <span className="text-cyan-400 font-medium">.NET, Spring Boot, and Node.js</span>, paired with React/Next.js frontends. I have a proven track record of delivering secure, containerized solutions in Agile environments.
                  </p>

                  <p>
                    I thrive on complex challenges and believe every hard problem has an elegant solution. I'm continuously exploring new technologies — from distributed systems and microservices to AI-powered tooling.
                  </p>
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiAcademicCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold text-xs uppercase tracking-wide">Education</p>
                    <p className="text-gray-300 text-sm">B.Sc. CS — Zewail City</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold text-xs uppercase tracking-wide">Location</p>
                    <p className="text-gray-300 text-sm">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold text-white mb-6">What Drives Me</h4>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start space-x-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-cyan-500/30 hover:bg-gray-800/60 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">{highlight.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
