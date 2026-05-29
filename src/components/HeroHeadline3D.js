import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const headline = ['Ahmed Khaled', 'builds systems', 'recruiters trust.'];

const wordVariants = {
  hidden: { opacity: 0, rotateX: 72, y: 36, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      delay: 0.12 + i * 0.11,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const HeroHeadline3D = () => {
  const containerRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  const handleMove = (event) => {
    const node = containerRef.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(x * 14);
    rotateX.set(y * -10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const shadowX = useTransform(rotateY, [-14, 14], [18, -18]);
  const shadowY = useTransform(rotateX, [-10, 10], [-12, 12]);

  return (
    <div
      ref={containerRef}
      className="hero-3d-stage"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      <motion.div
        className="hero-3d-shadow"
        style={{ x: shadowX, y: shadowY }}
        aria-hidden="true"
      />
      <motion.h1
        className="hero-3d-title font-display font-medium text-ink leading-[1.02] text-balance"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        initial="hidden"
        animate="visible"
      >
        {headline.map((line, lineIndex) => (
          <span key={line} className="hero-3d-line block" style={{ transformStyle: 'preserve-3d' }}>
            {line.split(' ').map((word, wordIndex) => {
              const index = lineIndex * 4 + wordIndex;
              const isName = lineIndex === 0;
              return (
                <motion.span
                  key={`${line}-${word}`}
                  custom={index}
                  variants={wordVariants}
                  className={`hero-3d-word inline-block mr-[0.28em] ${
                    isName ? 'text-accent hero-3d-word-accent' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default HeroHeadline3D;
