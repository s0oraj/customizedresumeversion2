import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
export function Education() {
  return <div>
      <SectionTitle>Education</SectionTitle>
      <div className="mt-3">
        <div className="bg-gray-900 p-3 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-200 font-semibold">
                C.V. Raman Global University
              </h3>
              <p className="text-sm text-gray-400">B.Tech in CS & IT</p>
              <p className="text-xs text-gray-500">Bhubaneshwar, Odisha</p>
            </div>
            <div className="text-right">
              <span className="text-[#5DC22D] text-sm">06/2024</span>
              <div className="bg-[#5DC22D] text-black text-xs px-2 py-0.5 rounded mt-1 font-medium">
                CGPA: 8.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}