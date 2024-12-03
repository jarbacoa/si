import React, { useState } from 'react';
import { Settings, Crown } from 'lucide-react';
import { BalanceCard } from './BalanceCard';
import { TokensList } from './TokensList';
import { SettingsPanel } from '../Settings/SettingsPanel';
import { usePrivy } from '@privy-io/react-auth';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

interface PortfolioPageProps {
  onTokenClick: () => void;
}

function PortfolioContent({ onTokenClick }: PortfolioPageProps) {
  const [showSettings, setShowSettings] = useState(false);
  const { user } = usePrivy();

  if (!user) {
    throw new Error('User data is not available');
  }

  return (
    <>
      <div className="h-full overflow-y-auto">
        <div className="bg-purple-500 rounded-3xl mx-4 mt-4 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <span className="text-yellow-300 text-xl">😊</span>
            </div>
            <span className="text-2xl font-mono truncate">
              {user.id ? `${user.id.slice(0, 6)}...${user.id.slice(-4)}` : 'Anonymous'}
            </span>
          </div>
          <div className="flex gap-2">
            <button 
              className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center active:scale-95 transition-transform"
              onClick={() => setShowSettings(true)}
            >
              <Settings className="w-6 h-6 text-black" />
            </button>
            <button className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center active:scale-95 transition-transform">
              <Crown className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <BalanceCard />
          <TokensList onTokenClick={onTokenClick} />
        </div>
      </div>

      {showSettings && <SettingsPanel onClose={() => setShowSettings(false)} />}
    </>
  );
}

export function PortfolioPage(props: PortfolioPageProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className="p-4">
          <div className="bg-purple-500 rounded-3xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Unable to load portfolio</h2>
            <p className="text-yellow-300 mb-4">
              Please try again later or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-yellow-300 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      }
    >
      <PortfolioContent {...props} />
    </ErrorBoundary>
  );
}