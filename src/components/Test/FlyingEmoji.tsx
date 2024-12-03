import React, { useState } from 'react';

interface FlyingEmojiProps {
  onAnimationComplete?: () => void;
}

export function FlyingEmoji({ onAnimationComplete }: FlyingEmojiProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTriggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete?.();
    }, 1000);
  };

  return (
    <div className="relative h-[500px] bg-purple-500 rounded-3xl overflow-hidden">
      <button
        onClick={handleTriggerAnimation}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-yellow-300 text-black rounded-full font-bold"
      >
        Trigger Animation
      </button>
      
      <img
        src="/svg/happy.svg"
        alt="Happy Face"
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 transition-all duration-1000 opacity-0 ${
          isAnimating 
            ? 'transform -translate-y-48 translate-x-32 rotate-0 scale-150 opacity-100' 
            : '-rotate-45'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      />
    </div>
  );
}