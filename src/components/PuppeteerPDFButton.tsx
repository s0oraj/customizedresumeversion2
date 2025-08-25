import React, { useState } from 'react';
import { DownloadIcon } from 'lucide-react';

export const PuppeteerPDFButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const generatePDF = () => {
    setLoading(true);
    
    // Hide the button
    const button = document.querySelector('.fixed.bottom-6.right-6') as HTMLElement;
    if (button) button.style.display = 'none';
    
    // Apply single-page print styles
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page { margin: 0; size: A4; }
        body { margin: 0 !important; padding: 0 !important; }
        .w-full.max-w-5xl { page-break-after: avoid; }
        * { -webkit-print-color-adjust: exact !important; }
      }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
      window.print();
      
      // Cleanup
      document.head.removeChild(style);
      if (button) button.style.display = 'block';
      setLoading(false);
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={generatePDF}
        disabled={loading}
        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(93,194,45,0.3)] hover:shadow-[0_0_30px_rgba(93,194,45,0.5)] bg-gradient-to-r from-[#5DC22D] to-[#4AE619] text-black hover:from-[#4AE619] hover:to-[#5DC22D]"
      >
        <DownloadIcon size={18} />
        <span>Download Resume</span>
      </button>
    </div>
  );
};
