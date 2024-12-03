import React, { useState } from 'react';
import { TabSelector } from './components/Header/TabSelector';
import { Feed } from './components/Feed/Feed';
import { BottomNav } from './components/Navigation/BottomNav';
import { LaunchFlow } from './components/Launch/LaunchFlow';
import { PortfolioPage } from './components/Portfolio/PortfolioPage';
import { TokenPage } from './components/Token/TokenPage';
import { TestPage } from './components/Test/TestPage';
import { usePosts } from './hooks/usePosts';
import { TabType } from './types';
import { usePrivy } from '@privy-io/react-auth';
import { PrivyProvider } from './providers/PrivyProvider';
import { WelcomeScreen } from './components/Auth/WelcomeScreen';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { SplashScreen } from './components/SplashScreen/SplashScreen';

function AppContent() {
  const { ready, authenticated } = usePrivy();
  const [activeTab, setActiveTab] = useState<TabType>('trending');
  const [isLaunching, setIsLaunching] = useState(false);
  const [currentPage, setCurrentPage] = useState<'feed' | 'portfolio' | 'token' | 'test'>('feed');
  const { posts, loading } = usePosts();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (!ready) {
    return (
      <div className="fixed inset-0 bg-yellow-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  // Show feed for non-authenticated users
  if (currentPage === 'feed') {
    return (
      <div className="fixed inset-0 bg-yellow-100">
        <div className="h-full flex flex-col max-w-lg mx-auto">
          <div className="flex-1 overflow-y-auto overflow-x-hidden pb-24 safe-top">
            <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
            {loading ? (
              <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              </div>
            ) : (
              <Feed posts={posts} onTokenClick={() => setCurrentPage('token')} />
            )}
          </div>
          
          {authenticated && (
            <BottomNav 
              onLaunch={() => setIsLaunching(true)} 
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    );
  }

  // Require authentication for other pages
  if (!authenticated) {
    return <WelcomeScreen />;
  }

  if (isLaunching) {
    return <LaunchFlow onClose={() => setIsLaunching(false)} />;
  }

  return (
    <div className="fixed inset-0 bg-yellow-100">
      <div className="h-full flex flex-col max-w-lg mx-auto">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-24 safe-top">
          {currentPage === 'portfolio' ? (
            <PortfolioPage onTokenClick={() => setCurrentPage('token')} />
          ) : currentPage === 'test' ? (
            <TestPage />
          ) : (
            <TokenPage onClose={() => setCurrentPage('feed')} />
          )}
        </div>
        
        <BottomNav 
          onLaunch={() => setIsLaunching(true)} 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <PrivyProvider>
        <AppContent />
      </PrivyProvider>
    </ErrorBoundary>
  );
}