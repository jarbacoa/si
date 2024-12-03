import React from 'react';

interface TokenCardProps {
  token: {
    symbol: string;
    mcap: string;
    price: number;
    change: number;
    image: string;
  };
  onTokenClick: () => void;
}

export function TokenCard({ token, onTokenClick }: TokenCardProps) {
  return (
    <div 
      className="bg-purple-500/20 rounded-full p-2 pr-4 flex items-center justify-between active:bg-purple-500/30 transition-colors cursor-pointer"
      onClick={onTokenClick}
    >
      <div className="flex items-center gap-3">
        <img 
          src={token.image} 
          alt={token.symbol}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-mono">{token.symbol}</div>
          <div className="text-sm opacity-60 font-mono">{token.mcap} MCAP</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-purple-500 text-white rounded-full px-4 py-2">
          <div className="font-mono">${token.price.toFixed(2)}</div>
          <div className="text-sm text-green-300">▲ {token.change}%</div>
        </div>
        <button 
          className="bg-black text-yellow-300 px-6 py-2 rounded-full font-mono font-bold active:scale-95 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            // Handle buy action
          }}
        >
          BUY
        </button>
      </div>
    </div>
  );
}