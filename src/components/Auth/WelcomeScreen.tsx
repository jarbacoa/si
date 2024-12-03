import React from 'react';
import { usePrivy } from '@privy-io/react-auth';

export function WelcomeScreen() {
  const { login } = usePrivy();

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">Welcome</h1>
      <button
        onClick={() => login()}
        className="w-full max-w-sm px-8 py-4 bg-purple-500 text-white rounded-full font-bold text-lg hover:bg-purple-600 transition-colors"
      >
        Connect Wallet or Create Account
      </button>
    </div>
  );
}