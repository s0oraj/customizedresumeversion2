import React from 'react';
import { Resume } from './components/Resume';
import { PuppeteerPDFButton } from './components/PuppeteerPDFButton';

export function App() {
  return (
    <div className="flex w-full min-h-screen bg-black">
      <Resume />
      <PuppeteerPDFButton />
    </div>
  );
}
