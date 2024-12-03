import React, { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-yellow-100 overflow-hidden">
      <div className="h-full flex items-center justify-center">
        <span className="font-bold text-yellow-200 select-none" style={{ fontSize: '80px' }}>
          yes.money
        </span>
      </div>
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <img
          src="/svg/happy.svg"
          alt="Happy Face"
          className={`w-48 h-48 transition-all duration-1000 mt-48 ${
            isAnimating ? '-translate-y-48 scale-125 opacity-100' : 'opacity-100'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: '100ms',
            marginTop: '400px',
          }}
        />
      </div>
    </div>
  );
}