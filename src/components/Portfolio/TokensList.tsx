import React from 'react';
import { TokenCard } from './TokenCard';

const MOCK_TOKENS = [
  { id: 1, symbol: '$sDOG', mcap: '45.6K', price: 0.03, change: 119.4, image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=240&h=240&auto=format' },
  { id: 2, symbol: '$PEPE', mcap: '78.2K', price: 0.05, change: 85.2, image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=240&h=240&auto=format' },
  { id: 3, symbol: '$WOJAK', mcap: '23.1K', price: 0.01, change: 45.7, image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=240&h=240&auto=format' },
  { id: 4, symbol: '$CHAD', mcap: '156.8K', price: 0.08, change: 234.1, image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=240&h=240&auto=format' },
];

interface TokensListProps {
  onTokenClick: () => void;
}

export function TokensList({ onTokenClick }: TokensListProps) {
  return (
    <div>
      <div className="mb-4">
        <div className="text-lg font-mono text-purple-500">YOUR TOKENS <span className="inline-flex gap-1">●●●●●●</span></div>
        <div className="flex items-baseline gap-4">
          <div className="text-4xl font-mono">$187,810</div>
          <div className="flex items-center gap-2 bg-green-400/20 px-3 py-1 rounded-full">
            <span className="text-green-500">▲ 48%</span>
            <span className="text-sm opacity-60">29,817</span>
          </div>
        </div>
      </div>

      <div className="relative h-32 mb-6">
        <svg viewBox="0 0 100 30" className="w-full h-full stroke-purple-500" preserveAspectRatio="none">
          <path
            d="M0,15 Q10,10 20,18 T40,15 T60,20 T80,12 T100,15"
            fill="none"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="95" cy="15" r="1" className="fill-purple-500" />
        </svg>
      </div>

      <div className="space-y-2">
        {MOCK_TOKENS.map(token => (
          <TokenCard key={token.id} token={token} onTokenClick={onTokenClick} />
        ))}
      </div>
    </div>
  );
}