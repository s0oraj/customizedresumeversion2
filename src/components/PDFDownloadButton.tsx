import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFResume } from './PDFResume';
import { DownloadIcon } from 'lucide-react';

export const PDFDownloadButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <PDFDownloadLink
        document={<PDFResume />}
        fileName="Suraj_Singh_Resume.pdf"
        className="group"
      >
        {({ blob, url, loading, error }) => (
          <button
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
        )}
      </PDFDownloadLink>
    </div>
  );
};
