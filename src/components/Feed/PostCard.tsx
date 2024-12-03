import React from 'react';
import { Post } from '../../types';
import { usePrivy } from '@privy-io/react-auth';

interface PostCardProps {
  post: Post;
  onTokenClick: () => void;
}

export function PostCard({ post, onTokenClick }: PostCardProps) {
  const { login, authenticated } = usePrivy();

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!authenticated) {
      login();
    } else {
      // Handle buy action for authenticated users
      console.log('Buy token:', post.symbol);
    }
  };

  return (
    <div className="bg-purple-500 rounded-3xl p-4 mb-4 text-white relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div 
          className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={onTokenClick}
        >
          <img 
            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=240&h=240&auto=format" 
            alt={post.symbol}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold cursor-pointer" onClick={onTokenClick}>{post.symbol}</span>
      </div>
      
      <p className="text-xl mb-4">{post.content}</p>
      
      {post.image && (
        <img
          src={post.image}
          alt="Post visual"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono">${post.price.toFixed(2)}</span>
          <span className={post.percentageChange >= 0 ? 'text-green-300' : 'text-red-300'}>
            {post.percentageChange >= 0 ? '▲' : '▼'} {Math.abs(post.percentageChange).toFixed(1)}%
          </span>
          <span className="opacity-75">{post.marketCap}M MCAP</span>
        </div>
        <button 
          onClick={handleBuyClick}
          className="bg-yellow-300 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
        >
          {authenticated ? 'BUY' : 'LOGIN TO BUY'}
        </button>
      </div>
    </div>
  );
}