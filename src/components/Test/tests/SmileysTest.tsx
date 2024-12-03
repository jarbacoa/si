import React, { useState } from 'react';
import { AnimatedSmiley } from '../animations/AnimatedSmiley';

export function SmileysTest() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="h-[calc(100vh-136px)] bg-purple-500 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <AnimatedSmiley name="happy" delay={0} height={48} isAnimating={isAnimating} />
        <AnimatedSmiley name="devil" delay={200} height={64} isAnimating={isAnimating} />
        <AnimatedSmiley name="neutral" delay={400} height={32} isAnimating={isAnimating} />
        <AnimatedSmiley name="conrad" delay={600} height={56} isAnimating={isAnimating} />
      </div>
      
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-8 py-3 bg-yellow-300 text-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
      >
        {isAnimating ? 'Reset Animation' : 'Trigger Animation'}
      </button>
    </div>
  );
}