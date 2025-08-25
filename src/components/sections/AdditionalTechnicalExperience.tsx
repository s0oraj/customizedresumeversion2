import React from 'react';
import { CodeIcon } from 'lucide-react';
export function AdditionalTechnicalExperience() {
  return <div className="border-b border-gray-800 pb-4 mb-6 relative">
      {/* Glowing accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-[#5DC22D] opacity-10 blur-md"></div>
      {/* Gradient line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5DC22D] to-transparent opacity-30"></div>
      <h2 className="text-2xl font-bold text-center text-gray-100 flex items-center justify-center" style={{paddingTop: '40px'}}>
        <CodeIcon size={20} className="mr-2 text-[#5DC22D]" />
        Additional Technical Experience
      </h2>
    </div>;
}