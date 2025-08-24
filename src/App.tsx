import React from 'react';
import { Resume } from './components/Resume';
import { PDFDownloadButton } from './components/PDFDownloadButton';

export function App() {
  return (
    <div className="flex w-full min-h-screen bg-black">
      <Resume />
      <PDFDownloadButton />
    </div>
  );
}
