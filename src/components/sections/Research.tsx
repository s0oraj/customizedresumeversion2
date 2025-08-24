import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon, BrainIcon, SchoolIcon, MicroscopeIcon } from 'lucide-react';
export function Research() {
  return <div>
      <SectionTitle icon={<BrainIcon size={18} />}>
        Research - Machine Learning
      </SectionTitle>
      <div className="space-y-4 mt-3">
        {/* Box 1: University and Role */}
        <div className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300">
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <SchoolIcon size={16} className="mr-2 text-[#5DC22D]" />
              <div>
                <h3 className="text-gray-200 font-semibold text-sm">
                  C.V. Raman Global University
                </h3>
                <p className="text-xs text-gray-400">
                  Undergraduate Researcher
                </p>
              </div>
            </div>
            <div className="flex items-center bg-black bg-opacity-30 px-2 py-1 rounded">
              <span className="text-[#5DC22D] text-xs">12/2022 - 06/2023</span>
            </div>
          </div>
        </div>
        {/* Box 2: Glaucoma Project */}
        <div className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300 transform hover:scale-[1.01]">
          <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm flex items-center">
              <MicroscopeIcon size={14} className="mr-2 text-[#5DC22D]" />
              Early-Stage Glaucoma Detection
            </h3>
            <a href="https://github.com/s0oraj/Early_Stage_Glaucoma_Detection/tree/main" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
              <GithubIcon size={10} className="mr-1 text-[#5DC22D] group-hover:scale-110 transition-transform" />
              Repository
            </a>
          </div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {['Machine Learning', 'CNN', 'Transfer Learning', 'Python'].map((tech, i) => <span key={i} className="text-xs bg-black bg-opacity-50 text-[#5DC22D] px-2 py-0.5 rounded-full">
                  {tech}
                </span>)}
          </div>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start text-xs text-gray-400">
              <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
              </div>
              <span>
                Developing an{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Extreme Learning Machine Model
                </span>{' '}
                with{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Convolutional Neural Networks (CNN) and Transfer Learning
                </span>
                , achieving{' '}
                <span className="font-semibold text-[#5DC22D]">96%</span>{' '}
                accuracy in vision preservation for early-stage glaucoma
                detection.
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
              </div>
              <span>
                Conducted research at{' '}
                <span className="font-semibold text-[#5DC22D]">
                  C.V. Raman Global University
                </span>{' '}
                as{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Undergraduate Researcher
                </span>{' '}
                in Machine Learning department from{' '}
                <span className="font-semibold text-[#5DC22D]">
                  12/2022 -- 06/2023
                </span>
                .
              </span>
            </li>
          </ul>
        </div>
        {/* Box 3: Alzheimer's Project */}
        <div className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300 transform hover:scale-[1.01]">
          <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold text-sm flex items-center">
              <BrainIcon size={14} className="mr-2 text-[#5DC22D]" />
              Alzheimer's Disease Diagnostic System
            </h3>
            <div className="flex gap-2">
              <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                <ExternalLinkIcon size={10} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                Paper
              </a>
              <a href="https://github.com/s0oraj/Alizhiemers_Detection_Transfer_Learning" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                <GithubIcon size={10} className="mr-1 text-[#5DC22D] group-hover:scale-110 transition-transform" />
                Repository
              </a>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {['Image Processing', 'DWT', 'SWT', 'CLAHE', 'Python'].map((tech, i) => <span key={i} className="text-xs bg-black bg-opacity-50 text-[#5DC22D] px-2 py-0.5 rounded-full">
                  {tech}
                </span>)}
          </div>
          <ul className="space-y-2 mt-3">
            <li className="flex items-start text-xs text-gray-400">
              <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
              </div>
              <span>
                Employed{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Advanced image preprocessing
                </span>{' '}
                techniques, including{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Discrete Wavelet Transform (DWT)
                </span>
                ,{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Stationary Wavelet Transform (SWT)
                </span>
                , and{' '}
                <span className="font-semibold text-[#5DC22D]">
                  Contrast Limited Adaptive Histogram Equalization (CLAHE)
                </span>{' '}
                for hippocampus-based analysis.
              </span>
            </li>
            <li className="flex items-start text-xs text-gray-400">
              <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
              </div>
              <span>
                Achieved{' '}
                <span className="font-semibold text-[#5DC22D]">
                  98% accuracy
                </span>{' '}
                in Alzheimer's disease detection through optimized neural
                network architecture and preprocessing pipeline implementation.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}