import React from 'react';

interface AnimatedSvgProps {
  name: string;
  animation: 'fade' | 'bounce' | 'spin' | 'shake';
}

export function AnimatedSvg({ name, animation }: AnimatedSvgProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'bounce':
        return 'animate-bounce';
      case 'spin':
        return 'animate-spin';
      case 'shake':
        return 'animate-shake';
      default:
        return '';
    }
  };

  return (
    <div className="w-32 h-32 mx-auto">
      <img
        src={`/svg/${name}${name === 'conrad' ? '.png' : '.svg'}`}
        alt={name}
        className={`w-full h-full ${getAnimationClass()}`}
      />
    </div>
  );
}