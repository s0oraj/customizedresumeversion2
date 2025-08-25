import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, TrophyIcon, AwardIcon, StarIcon } from 'lucide-react';
export function Achievements() {
  return <div>
      <SectionTitle icon={<TrophyIcon size={18} />}>Achievements</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Column 1 */}
        <div className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300 transform hover:scale-[1.02]">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#5DC22D] opacity-10 rounded-full blur-lg group-hover:opacity-20 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm flex items-center">
              <AwardIcon size={14} className="mr-2 text-[#5DC22D]" />
              IIT Kanpur Research Internship Offer
            </h3>
            <span className="text-[#5DC22D] text-xs bg-black bg-opacity-30 px-2 py-0.5 rounded">
              01/2024
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2 pl-6">
            Offered a Research internship by Prof. Tushar Sandhan from IIT
            Kanpur to work on{' '}
            <span className="font-semibold text-[#5DC22D]">
              Image segmentation of the heart for 3D heart model generation
            </span>
            .
          </p>
        </div>
        {/* Column 2 */}
        <div className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300 transform hover:scale-[1.02]">
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#5DC22D] opacity-10 rounded-full blur-lg group-hover:opacity-20 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm flex items-center">
              <StarIcon size={14} className="mr-2 text-[#5DC22D]" />
              Coding & Competitive Exams
            </h3>
            <span className="text-[#5DC22D] text-xs bg-black bg-opacity-30 px-2 py-0.5 rounded">
              05/2024
            </span>
          </div>
          <div className="mt-2 pl-6 space-y-2">
            <div>
              <p className="text-sm text-gray-400">
                Ranked{' '}
                <span className="font-semibold text-[#5DC22D]">Top 9.53%</span>{' '}
                of all contestants on LeetCode with a{' '}
                <span className="font-semibold text-[#5DC22D]">
                  contest rating of 1755
                </span>
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                <a href="https://leetcode.com/u/s0oraj/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded group">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                  Username: s0oraj
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Ranked{' '}
                <span className="font-semibold text-[#5DC22D]">AIR 688</span>{' '}
                out of{' '}
                <span className="font-semibold text-[#5DC22D]">
                  25,000+ candidates (Top 2.752%)
                </span>{' '}
                in C-DAC Common Admission Test 2025.
              </p>
            </div>
          </div>
        </div>
        {/* Full width Amazon & IEEE */}
        <div className="bg-gray-900 p-4 rounded md:col-span-2 relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm flex items-center">
              <AwardIcon size={14} className="mr-2 text-[#5DC22D]" />
              Amazon & IEEE
            </h3>
            <span className="text-[#5DC22D] text-xs bg-black bg-opacity-30 px-2 py-0.5 rounded">
              04/2023
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 pl-6">
            <div className="relative p-3 bg-gray-950 bg-opacity-50 rounded border border-gray-800">
              <p className="text-sm text-gray-400">
                Ranked <span className="font-semibold text-[#5DC22D]">228</span>{' '}
                globally out of{' '}
                <span className="font-semibold text-[#5DC22D]">30,000+</span>{' '}
                teams in the{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Amazon ML Challenge 2023
                </span>
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression/notebook" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded group">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                  Python Code
                </a>
              </div>
            </div>
            <div className="relative p-3 bg-gray-950 bg-opacity-50 rounded border border-gray-800">
              <p className="text-xs text-gray-400">
                Presented at the{' '}
                <span className="font-semibold text-[#5DC22D]">
                  14th ICCCNT conference 2023
                </span>{' '}
                by <span className="font-semibold text-[#5DC22D]">IEEE</span> at{' '}
                <span className="font-semibold text-[#5DC22D]">IIT Delhi</span>
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded group">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                  Publication
                </a>
                <a href="https://drive.google.com/file/d/1JWcyN7JysQWhkED1CN3ktS-hS7UeeoL7/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded group">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                  View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}