import React from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3"
              >
                Full-Stack Software Engineer
              </motion.p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text">Ahmed Khaled</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Building scalable web applications with <span className="text-cyan-400 font-medium">.NET, Spring Boot, and React</span>. 
                Turning complex problems into elegant solutions.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href="https://github.com/ahmed-khaled-4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <span className="text-gray-500 text-sm">Connect with me:</span>
              {[
                { 
                  icon: SiGithub, 
                  url: 'https://github.com/ahmed-khaled-4',
                  label: 'GitHub'
                },
                { 
                  icon: SiLinkedin, 
                  url: 'https://www.linkedin.com/in/ahmed-khaled-4b8485250',
                  label: 'LinkedIn'
                },
                { 
                  icon: HiMail, 
                  url: 'mailto:ahmedabdelaziz2451@gmail.com',
                  label: 'Email'
                }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-800/60 border border-gray-700/40 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Large soft glow behind everything */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-cyan-400/40 blur-[100px] -z-10"
              style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
            />
            
            <motion.div
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main image container */}
              <div className="relative w-80 h-96 lg:w-[420px] lg:h-[500px]">
                {/* Background shape with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-transparent rounded-[3rem] blur-xl" />
                
                <div className="relative">
                  <img
                    src="/ahmed1.jpg"
                    alt="Ahmed Khaled"
                    className="w-full h-full object-cover rounded-[3rem]"
                    style={{ 
                      maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0) 100%)',
                      filter: 'contrast(1.15) brightness(1.1) saturate(0.8)',
                    }}
                  />
                  
                  {/* Color harmony overlay */}
                  <div 
                    className="absolute inset-0 rounded-[3rem] pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 30% 30%, rgba(6, 182, 212, 0.15), transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(37, 99, 235, 0.12), transparent 50%)',
                      mixBlendMode: 'overlay',
                    }}
                  />
                  
                  {/* Subtle edge highlight */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
