import React, { useState } from 'react';
import { DownloadIcon } from 'lucide-react';

export const PuppeteerPDFButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePDF = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Starting PDF generation request...');
      
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          singlePage: true
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        
        let errorMessage = 'PDF generation failed';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          errorMessage = `Server error: ${response.status}`;
        }
        
        throw new Error(errorMessage);
      }

      // Check if response is actually a PDF
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/pdf')) {
        console.error('Unexpected content type:', contentType);
        throw new Error('Server did not return a PDF');
      }

      const blob = await response.blob();
      console.log('PDF blob size:', blob.size);
      
      if (blob.size === 0) {
        throw new Error('Received empty PDF');
      }

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Suraj_Singh_Resume.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      console.log('PDF download initiated successfully');
      
    } catch (error) {
      console.error('PDF generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      
      // Show user-friendly error
      alert(`PDF generation failed: ${errorMessage}. Please try again or check the console for details.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {error && (
        <div className="mb-2 p-2 bg-red-900 text-red-200 text-xs rounded max-w-xs">
          {error}
        </div>
      )}
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
