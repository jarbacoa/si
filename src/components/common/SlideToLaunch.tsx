import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface SlideToLaunchProps {
  onComplete: () => void;
}

export function SlideToLaunch({ onComplete }: SlideToLaunchProps) {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxPosition = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      maxPosition.current = containerRef.current.offsetWidth - 64; // 64 is button width
    }
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isCompleted) return;
    setIsDragging(true);
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current || isCompleted) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newPosition = Math.max(0, Math.min(clientX - rect.left, maxPosition.current));
    
    setPosition(newPosition);

    if (newPosition >= maxPosition.current * 0.9) {
      setIsDragging(false);
      setPosition(maxPosition.current);
      setIsCompleted(true);
      onComplete();
    }
  };

  const handleDragEnd = () => {
    if (!isDragging || isCompleted) return;
    setIsDragging(false);
    if (position < maxPosition.current * 0.9) {
      setPosition(0);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDrag);
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, position]);

  return (
    <div 
      ref={containerRef}
      className="relative h-16 bg-green-400/20 rounded-full overflow-hidden"
    >
      <div 
        className="absolute inset-0 flex items-center justify-center text-green-400 font-bold"
      >
        {isCompleted ? 'LAUNCHING...' : 'SLIDE TO LAUNCH'}
      </div>
      <div
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        style={{ 
          transform: `translateX(${position}px)`,
          transition: isCompleted ? 'none' : position === 0 ? 'transform 0.2s ease-out' : 'none'
        }}
        className={`absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center 
          bg-green-400 rounded-full cursor-grab transition-colors
          ${isDragging ? 'cursor-grabbing' : ''}
          ${isCompleted ? 'bg-green-500' : ''}`}
      >
        <ArrowRight className="text-black" size={24} />
      </div>
    </div>
  );
}