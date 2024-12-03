import React from 'react';
import { TabType } from '../../types';

interface TabSelectorProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex bg-black/10 rounded-full p-1">
        <button
          onClick={() => onTabChange('trending')}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeTab === 'trending'
              ? 'bg-purple-500 text-white'
              : 'text-gray-700'
          }`}
        >
          trending
        </button>
        <button
          onClick={() => onTabChange('holding')}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeTab === 'holding'
              ? 'bg-black text-white'
              : 'text-gray-700'
          }`}
        >
          holding
        </button>
      </div>
      <button className="p-2 rounded-full bg-black/5 hover:bg-black/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </div>
  );
}