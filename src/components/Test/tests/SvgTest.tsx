import React, { useState } from 'react';
import { AnimatedSvg } from '../AnimatedSvg';

export function SvgTest() {
  const [selectedAnimation, setSelectedAnimation] = useState<'fade' | 'bounce' | 'spin' | 'shake'>('fade');
  const svgs = ['happy', 'devil', 'neutral', 'conrad'];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-purple-500 mb-6">SVG Animation Testing</h1>
      
      <div className="mb-6">
        <label className="block text-purple-500 mb-2">Select Animation:</label>
        <select 
          value={selectedAnimation}
          onChange={(e) => setSelectedAnimation(e.target.value as any)}
          className="w-full p-3 rounded-xl bg-purple-500 text-white"
        >
          <option value="fade">Fade In</option>
          <option value="bounce">Bounce</option>
          <option value="spin">Spin</option>
          <option value="shake">Shake</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {svgs.map((svg) => (
          <div key={svg} className="bg-purple-500 rounded-xl p-4">
            <p className="text-white mb-2">{svg}.svg</p>
            <AnimatedSvg name={svg} animation={selectedAnimation} />
          </div>
        ))}
      </div>
    </div>
  );
}