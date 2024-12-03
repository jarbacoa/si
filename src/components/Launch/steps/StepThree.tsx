import React from 'react';
import { TokenDetails } from '../../../types';
import { Twitter, Send } from 'lucide-react';
import { SlideToLaunch } from '../../common/SlideToLaunch';

interface StepThreeProps {
  tokenDetails: TokenDetails;
  onClose: () => void;
}

export function StepThree({ tokenDetails, onClose }: StepThreeProps) {
  const handleLaunchComplete = () => {
    // Here you would typically handle the actual token launch
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 px-6">
        <h2 className="text-3xl font-bold text-yellow-300 text-center mb-2">
          Everything look good?
        </h2>
        <p className="text-yellow-300 text-center mb-12">
          If so, slide to launch your token
        </p>

        <div className="bg-yellow-300 rounded-3xl p-6 max-w-sm mx-auto">
          <div className="relative mb-12">
            <div className="absolute top-0 right-0">
              <h3 className="text-4xl font-bold">{tokenDetails.name}</h3>
              <p className="text-xl text-purple-500">${tokenDetails.ticker}</p>
            </div>
            {tokenDetails.image && (
              <img
                src={tokenDetails.image}
                alt="Token"
                className="w-32 h-32 rounded-full"
              />
            )}
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
              <Twitter size={24} />
            </button>
            <button className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
              <Send size={24} />
            </button>
            <button className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
              <Twitter size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <SlideToLaunch onComplete={handleLaunchComplete} />
      </div>
    </div>
  );
}