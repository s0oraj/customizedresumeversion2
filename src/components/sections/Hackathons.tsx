import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, TrophyIcon, CodeIcon } from 'lucide-react';
export function Hackathons() {
  return <div>
      <SectionTitle icon={<TrophyIcon size={18} />}>Hackathons</SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3 relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300">
        {/* Background accent */}
        <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
        <div className="mb-3">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-200 font-semibold flex items-center">
              <CodeIcon size={14} className="mr-2 text-[#5DC22D]" />
              NLP Regression: Amazon Product Length Prediction
            </h3>
            <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
              <ExternalLinkIcon size={10} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
              View Code
            </a>
          </div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {['Natural Language Processing', 'Regression Analysis', 'Python', 'Keras'].map((tech, i) => <span key={i} className="text-xs bg-black bg-opacity-50 text-[#5DC22D] px-2 py-0.5 rounded-full">
                {tech}
              </span>)}
          </div>
        </div>
        <div className="p-3 bg-gray-950 bg-opacity-50 rounded border border-gray-800 space-y-2">
          <div className="flex items-start text-sm text-gray-400">
            <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
              <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
            </div>
            <span>
              Formulated an{' '}
              <span className="font-semibold text-[#5DC22D]">NLP model</span>{' '}
              using{' '}
              <span className="font-semibold text-[#5DC22D]">TensorFlow</span>{' '}
              and{' '}
              <span className="font-semibold text-[#5DC22D]">
                Keras regression
              </span>{' '}
              with <span className="font-semibold text-[#5DC22D]">ReLU</span>{' '}
              activation to predict product length on{' '}
              <span className="font-semibold text-[#5DC22D]">
                regression analysis
              </span>{' '}
              on Amazon dataset of{' '}
              <span className="font-semibold text-[#5DC22D]">
                2.2 million products
              </span>{' '}
              to enhance packaging and customer satisfaction.
            </span>
          </div>
          <div className="flex items-start text-sm text-gray-400">
            <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
              <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
            </div>
            <span>
              Optimized{' '}
              <span className="font-semibold text-[#5DC22D]">
                text vectorization
              </span>{' '}
              (vocab size:{' '}
              <span className="font-semibold text-[#5DC22D]">10,000</span>, max
              sequence length: 200 tokens) achieved excellent training loss:{' '}
              <span className="font-semibold text-[#5DC22D]">0.38121589</span>{' '}
              and validation loss:{' '}
              <span className="font-semibold text-[#5DC22D]">0.31848289</span>.
            </span>
          </div>
        </div>
        {/* Results badge */}
        <div className="absolute top-4 right-4 bg-[#5DC22D] text-black text-xs px-2 py-0.5 rounded font-medium shadow-[0_0_10px_rgba(93,194,45,0.3)] transform rotate-3">
          Top 228 Globally
        </div>
      </div>
    </div>;
}