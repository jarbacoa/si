import React, { useEffect, useRef, useState } from 'react';
import { PostCard } from './PostCard';
import { Post } from '../../types';

interface AnimatedPostProps {
  post: Post;
  onTokenClick: () => void;
}

export function AnimatedPost({ post, onTokenClick }: AnimatedPostProps) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.getBoundingClientRect().height;
      setHeight(height);
    }
  }, []);

  return (
    <div
      className="transform-gpu animate-slide-in overflow-hidden"
      style={{
        height: height || 'auto',
        transition: 'height 0.3s ease-out',
      }}
    >
      <div ref={contentRef}>
        <PostCard post={post} onTokenClick={onTokenClick} />
      </div>
    </div>
  );
}