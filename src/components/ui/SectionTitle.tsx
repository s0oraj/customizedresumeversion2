
import React, { ReactNode } from 'react';
interface SectionTitleProps {
  children: ReactNode;
  icon?: ReactNode;
}
export function SectionTitle({
  children,
  icon
}: SectionTitleProps) {
  return <div className="border-b border-gray-800 pb-2 mb-3 relative">
      <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[#5DC22D] rounded-full"></div>
      <h2 className="text-xl font-bold text-[#5DC22D] flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
        <span className="ml-2 h-px bg-gradient-to-r from-[#5DC22D] to-transparent flex-grow opacity-30"></span>
      </h2>
    </div>;
}
