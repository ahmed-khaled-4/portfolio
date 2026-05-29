import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ProfileAvatar from './ProfileAvatar';

const proofPoints = [
  { label: 'Experience', value: '2 yrs' },
  { label: 'Award', value: 'Best Intern' },
  { label: 'Stack', value: 'Full-stack' },
];

const ProfileCard3D = () => {
  const cardRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 140, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 140, damping: 20 });

  const handleMove = (event) => {
    const node = cardRef.current;
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

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative hero-3d-card-wrap w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] mx-auto lg:mx-0 lg:ml-auto"
    >
      <div className="absolute -inset-4 bg-accent/12 blur-3xl rounded-full pointer-events-none animate-pulse-soft" />
      <motion.div
        ref={cardRef}
        className="hero-3d-card relative card !p-0 overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <div className="hero-3d-card-shine" aria-hidden="true" />
        <ProfileAvatar className="w-full aspect-[5/6] rounded-none border-0" />
        <div
          className="p-4 border-t border-rule grid grid-cols-3 gap-2"
          style={{ transform: 'translateZ(20px)' }}
        >
          {proofPoints.map((point) => (
            <div key={point.label} className="text-center">
              <p className="font-mono text-base text-ink font-medium">{point.value}</p>
              <p className="text-xs text-ink-3 mt-0.5">{point.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default ProfileCard3D;
