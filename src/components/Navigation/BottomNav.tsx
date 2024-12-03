import React from 'react';
import { Ship, Plus, TestTube } from 'lucide-react';
import { PortfolioIcon } from './PortfolioIcon';

interface BottomNavProps {
  onLaunch: () => void;
  currentPage: 'feed' | 'portfolio' | 'token' | 'test';
  onPageChange: (page: 'feed' | 'portfolio' | 'token' | 'test') => void;
}

export function BottomNav({ onLaunch, currentPage, onPageChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white safe-bottom">
      <div className="max-w-lg mx-auto px-4 py-2 flex justify-between items-center">
        <button 
          className={`flex flex-col items-center p-2 no-select ${currentPage === 'feed' ? 'text-yellow-300' : 'text-gray-400'}`}
          onClick={() => onPageChange('feed')}
        >
          <Ship size={24} />
          <span className="text-xs mt-1">Feed</span>
        </button>
        <button
          onClick={onLaunch}
          className="flex flex-col items-center p-2 text-green-400 no-select"
        >
          <Plus size={24} />
          <span className="text-xs mt-1">Launch</span>
        </button>
        <button 
          className={`flex flex-col items-center p-2 no-select ${currentPage === 'portfolio' ? 'text-yellow-300' : 'text-gray-400'}`}
          onClick={() => onPageChange('portfolio')}
        >
          <PortfolioIcon className={currentPage === 'portfolio' ? 'brightness-200' : 'brightness-75'} />
          <span className="text-xs mt-1">Portfolio</span>
        </button>
        <button 
          className={`flex flex-col items-center p-2 no-select ${currentPage === 'test' ? 'text-yellow-300' : 'text-gray-400'}`}
          onClick={() => onPageChange('test')}
        >
          <TestTube size={24} />
          <span className="text-xs mt-1">Test</span>
        </button>
      </div>
    </nav>
  );
}