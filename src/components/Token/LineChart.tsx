import React from 'react';

export function LineChart() {
  return (
    <svg viewBox="0 0 100 30" className="w-full h-full stroke-purple-500" preserveAspectRatio="none">
      <path
        d="M0,15 Q25,5 50,20 T75,10 T100,15"
        fill="none"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="95" cy="15" r="1" className="fill-purple-500" />
    </svg>
  );
}