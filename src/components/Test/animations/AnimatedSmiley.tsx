import React from 'react';

interface AnimatedSmileyProps {
  name: string;
  delay: number;
  height: number;
  isAnimating: boolean;
}

export function AnimatedSmiley({ name, delay, height, isAnimating }: AnimatedSmileyProps) {
  return (
    <div 
      className={`w-24 h-24 transition-all duration-500`}
      style={{
        opacity: isAnimating ? 1 : 0,
        transform: `translateY(${isAnimating ? 0 : height}px)`,
        transitionDelay: `${delay}ms`
      }}
    >
      <img
        src={`/svg/${name}${name === 'conrad' ? '.png' : '.svg'}`}
        alt={name}
        className="w-full h-full"
      />
    </div>
  );
}