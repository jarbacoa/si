import React, { useState } from 'react';

export function FlyingEmojiTest() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleTriggerAnimation = () => {
    if (hasAnimated) {
      setHasAnimated(false);
      setIsAnimating(false);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setHasAnimated(true);
      }, 1000);
    }
  };

  return (
    <div className="h-[calc(100vh-136px)] bg-purple-500 relative">
      <img
        src="/svg/happy.svg"
        alt="Happy Face"
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 transition-all duration-1000 opacity-0 ${
          isAnimating || hasAnimated
            ? 'transform -translate-y-48 translate-x-32 rotate-0 scale-150 opacity-100' 
            : '-rotate-45'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      />
      
      <button
        onClick={handleTriggerAnimation}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-yellow-300 text-black rounded-full font-bold"
      >
        {hasAnimated ? 'Reset Animation' : 'Trigger Animation'}
      </button>
    </div>
  );
}