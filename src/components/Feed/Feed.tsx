import React, { useRef, useEffect } from 'react';
import { AnimatedPost } from './AnimatedPost';
import { Post } from '../../types';

interface FeedProps {
  posts: Post[];
  onTokenClick: () => void;
}

export function Feed({ posts, onTokenClick }: FeedProps) {
  const prevPostsRef = useRef<Post[]>([]);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    prevPostsRef.current = posts;
  }, [posts]);

  return (
    <div ref={feedRef} className="h-full overflow-auto">
      <div className="p-4 space-y-4">
        {posts.map((post) => (
          <AnimatedPost 
            key={post.id} 
            post={post} 
            onTokenClick={onTokenClick}
          />
        ))}
      </div>
    </div>
  );
}