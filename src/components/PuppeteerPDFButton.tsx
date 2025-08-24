import React, { useState } from 'react';
import { DownloadIcon } from 'lucide-react';

export const PuppeteerPDFButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    setLoading(true);
    try {
      // Call Vercel serverless function
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          singlePage: true // Tell the API to make it one long page
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Suraj_Singh_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('PDF generation failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('PDF generation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={generatePDF}
        disabled={loading}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
          transition-all duration-300 transform hover:scale-105 active:scale-95
          shadow-[0_0_20px_rgba(93,194,45,0.3)] hover:shadow-[0_0_30px_rgba(93,194,45,0.5)]
          ${loading 
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-[#5DC22D] to-[#4AE619] text-black hover:from-[#4AE619] hover:to-[#5DC22D]'
          }
        `}
      >
        <DownloadIcon 
          size={18} 
          className={`transition-transform duration-300 ${loading ? 'animate-spin' : 'group-hover:translate-y-0.5'}`} 
        />
        <span>
          {loading ? 'Generating PDF...' : 'Download Resume'}
        </span>
      </button>
    </div>
  );
};
