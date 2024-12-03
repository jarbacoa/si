import React from 'react';
import { Settings, Crown, Twitter, Send } from 'lucide-react';
import { LineChart } from './LineChart';
import { usePrivy } from '@privy-io/react-auth';

interface TokenPageProps {
  onClose: () => void;
}

export function TokenPage({ onClose }: TokenPageProps) {
  const { login, authenticated } = usePrivy();

  const handleBuyClick = () => {
    if (!authenticated) {
      login();
    } else {
      // Handle buy action for authenticated users
      console.log('Buy token');
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-mono text-purple-500">$0.81</div>
            <div className="inline-flex items-center gap-2 bg-green-400/20 px-3 py-1 rounded-full">
              <span className="text-green-500">▲ 48%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
              <Crown className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="h-48">
          <LineChart />
        </div>

        <div className="grid grid-cols-3 text-center">
          <div>
            <div className="text-purple-500 text-lg">33</div>
            <div className="text-sm text-purple-500/60">Holders</div>
          </div>
          <div>
            <div className="text-purple-500 text-lg">33M</div>
            <div className="text-sm text-purple-500/60">Volume</div>
          </div>
          <div>
            <div className="text-purple-500 text-lg">33M</div>
            <div className="text-sm text-purple-500/60">M.Cap</div>
          </div>
        </div>

        <div className="bg-purple-500 rounded-3xl overflow-hidden">
          <div className="p-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=240&h=240&auto=format"
                alt="Token"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-mono text-lg">$unbanksy</div>
                <div className="text-sm opacity-60">unbanksy</div>
              </div>
            </div>
            <p className="mt-2 mb-4">The official unbanksy token</p>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                <Send className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {authenticated && (
            <div className="bg-purple-400/30 backdrop-blur-sm p-4">
              <div className="text-sm text-white/60">You hold</div>
              <div className="text-white font-mono text-xl">48,841</div>
              <div className="text-sm text-white/60">0.0004 $USD</div>
            </div>
          )}
        </div>

        <div className="bg-purple-500 rounded-3xl p-4 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">
              <span className="text-black text-sm">😊</span>
            </div>
            <span className="font-mono">$YES</span>
          </div>
          <p className="mt-2">HAHAHA so fucking bullish lmao</p>
          <button className="mt-4 w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center text-2xl text-black">
            +
          </button>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 px-4 grid grid-cols-2 gap-4">
        <button 
          onClick={handleBuyClick}
          className="bg-green-400 text-black py-3 rounded-full font-bold text-lg shadow-lg"
        >
          {authenticated ? 'BUY' : 'LOGIN TO BUY'}
        </button>
        {authenticated && (
          <button className="bg-white text-black py-3 rounded-full font-bold text-lg shadow-lg">
            SELL
          </button>
        )}
      </div>
    </div>
  );
}