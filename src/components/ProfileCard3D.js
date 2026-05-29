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

    rotateY.set(x * 16);
    rotateX.set(y * -12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative hero-3d-card-wrap"
    >
      <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full pointer-events-none animate-pulse-soft" />
      <motion.div
        ref={cardRef}
        className="hero-3d-card relative card !p-0 overflow-hidden"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <div className="hero-3d-card-shine" aria-hidden="true" />
        <ProfileAvatar className="w-full aspect-[4/5] rounded-none border-0" />
        <div
          className="p-5 border-t border-rule grid grid-cols-3 gap-3"
          style={{ transform: 'translateZ(24px)' }}
        >
          {proofPoints.map((point) => (
            <div key={point.label} className="text-center">
              <p className="font-mono text-xl text-ink font-medium">{point.value}</p>
              <p className="text-sm text-ink-3 mt-1">{point.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default ProfileCard3D;
