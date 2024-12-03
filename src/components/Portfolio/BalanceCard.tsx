import React from 'react';

export function BalanceCard() {
  return (
    <div className="bg-purple-500 rounded-3xl p-4 text-white">
      <div className="mb-2">
        <div className="text-lg font-mono">YOUR CASH</div>
        <div className="text-4xl font-mono tracking-wider">$87,810</div>
      </div>
      
      <div className="grid grid-cols-3 border-t border-white/20 mt-4">
        <button className="py-4 text-center font-mono hover:bg-purple-400/20 transition-colors">
          ADD CASH
        </button>
        <button className="py-4 text-center font-mono border-x border-white/20 hover:bg-purple-400/20 transition-colors">
          SEND
        </button>
        <button className="py-4 text-center font-mono hover:bg-purple-400/20 transition-colors">
          CASH OUT
        </button>
      </div>
    </div>
  );
}