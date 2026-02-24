import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone } from 'react-icons/hi';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      name: 'Email',
      value: 'ahmedabdelaziz2451@gmail.com',
      link: 'mailto:ahmedabdelaziz2451@gmail.com',
      icon: HiMail,
      gradient: 'from-cyan-500 to-blue-600',
      color: 'cyan',
    },
    {
      name: 'Phone',
      value: '+20 150 171 1718',
      link: 'tel:+201501711718',
      icon: HiPhone,
      gradient: 'from-blue-600 to-cyan-700',
      color: 'blue',
    },
    {
      name: 'LinkedIn',
      value: 'Ahmed Khaled',
      link: 'https://www.linkedin.com/in/Ahmed-Khaled',
      icon: SiLinkedin,
      gradient: 'from-cyan-600 to-blue-700',
      color: 'sky',
    },
    {
      name: 'GitHub',
      value: 'ahmed-khaled-4',
      link: 'https://github.com/ahmed-khaled-4',
      icon: SiGithub,
      gradient: 'from-blue-700 to-cyan-800',
      color: 'indigo',
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
    <section id="contact" className="py-24 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group"
              >
                <a
                  href={method.link}
                  target={method.name !== 'Email' && method.name !== 'Phone' ? '_blank' : undefined}
                  rel={method.name !== 'Email' && method.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <div className="card h-full text-center relative overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${method.gradient}`} />

                    <div className="relative z-10 pt-2">
                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg shadow-${method.color}-500/20 mx-auto group-hover:shadow-xl group-hover:shadow-${method.color}-500/30 transition-all duration-200`}>
                        <method.icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                        {method.name}
                      </h3>

                      {/* Value */}
                      <p className={`text-${method.color}-400 font-medium mb-2 break-all text-sm px-2`}>
                        {method.value}
                      </p>

                      {/* Action hint */}
                      <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mt-4">
                        <span>
                          {method.name === 'Email' ? 'Send Email' : 
                           method.name === 'Phone' ? 'Call Me' : 
                           'Visit Profile'}
                        </span>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${method.color}-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`} />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
