import React, { useState } from 'react';

const ProfileAvatar = ({ className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-paper-3 border border-rule rounded-2xl ${className}`}
        aria-label="Ahmed Khaled profile"
      >
        <span className="font-display text-6xl text-accent font-medium">AK</span>
      </div>
    );
  }

  return (
    <img
      src="/ahmed1.jpg"
      alt="Ahmed Khaled, Full-Stack Software Engineer"
      className={`object-cover rounded-2xl border border-rule ${className}`}
      onError={() => setHasError(true)}
    />
  );
};

export default ProfileAvatar;
