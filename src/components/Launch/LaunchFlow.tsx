import React, { useState } from 'react';
import { TokenDetails } from '../../types';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { X } from 'lucide-react';

interface LaunchFlowProps {
  onClose: () => void;
}

export function LaunchFlow({ onClose }: LaunchFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [tokenDetails, setTokenDetails] = useState<TokenDetails>({
    name: '',
    ticker: '',
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  return (
    <div className="min-h-screen bg-purple-500 relative flex flex-col">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-yellow-300 hover:text-yellow-400 z-10"
      >
        <X size={24} />
      </button>

      <div className="flex-1 flex flex-col">
        <div className="px-4 pt-8">
          <div className="flex justify-center mb-8">
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-12 h-2 rounded-full ${
                    step <= currentStep ? 'bg-yellow-300' : 'bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {currentStep === 1 && <StepOne onNext={handleNextStep} />}
          {currentStep === 2 && (
            <StepTwo
              tokenDetails={tokenDetails}
              setTokenDetails={setTokenDetails}
              onNext={handleNextStep}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              tokenDetails={tokenDetails}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}