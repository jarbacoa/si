import React, { useState } from 'react';
import { SvgTest } from './tests/SvgTest';
import { FlyingEmojiTest } from './tests/FlyingEmojiTest';
import { SmileysTest } from './tests/SmileysTest';
import { ArrowLeft } from 'lucide-react';

type TestPage = 'svg' | 'flying-emoji' | 'smileys';

const TEST_PAGES: { id: TestPage; title: string }[] = [
  { id: 'svg', title: 'SVG Animations' },
  { id: 'flying-emoji', title: 'Flying Emoji' },
  { id: 'smileys', title: 'Floating Smileys' },
];

export function TestPage() {
  const [currentTest, setCurrentTest] = useState<TestPage | null>(null);

  if (currentTest === 'svg') {
    return (
      <div className="min-h-screen bg-yellow-100">
        <button 
          onClick={() => setCurrentTest(null)}
          className="p-4 text-purple-500 hover:text-purple-600 flex items-center gap-2"
        >
          <ArrowLeft size={24} />
          <span>Back to Tests</span>
        </button>
        <SvgTest />
      </div>
    );
  }

  if (currentTest === 'flying-emoji') {
    return (
      <div className="min-h-screen bg-yellow-100">
        <button 
          onClick={() => setCurrentTest(null)}
          className="p-4 text-purple-500 hover:text-purple-600 flex items-center gap-2"
        >
          <ArrowLeft size={24} />
          <span>Back to Tests</span>
        </button>
        <FlyingEmojiTest />
      </div>
    );
  }

  if (currentTest === 'smileys') {
    return (
      <div className="min-h-screen bg-yellow-100">
        <button 
          onClick={() => setCurrentTest(null)}
          className="p-4 text-purple-500 hover:text-purple-600 flex items-center gap-2"
        >
          <ArrowLeft size={24} />
          <span>Back to Tests</span>
        </button>
        <SmileysTest />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-100 p-4">
      <h1 className="text-2xl font-bold text-purple-500 mb-6">Animation Tests</h1>
      <div className="grid gap-4">
        {TEST_PAGES.map((test) => (
          <button
            key={test.id}
            onClick={() => setCurrentTest(test.id)}
            className="bg-purple-500 text-white p-6 rounded-3xl text-left hover:bg-purple-600 transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">{test.title}</h2>
            <p className="text-white/60">Test different {test.title.toLowerCase()} animations</p>
          </button>
        ))}
      </div>
    </div>
  );
}