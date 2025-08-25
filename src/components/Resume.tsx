import React from 'react';
import { Header } from './sections/Header';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { AdditionalTechnicalExperience } from './sections/AdditionalTechnicalExperience';
import { Research } from './sections/Research';
import { Hackathons } from './sections/Hackathons';
import { AndroidDev } from './sections/AndroidDev';
export function Resume() {
  return <div className="w-full max-w-7xl mx-auto text-gray-200 py-6 px-4 sm:px-6 relative bg-gradient-to-b from-black to-gray-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 z-0"></div>
      {/* Netflix-inspired grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 z-0"></div>
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5DC22D] via-transparent to-[#5DC22D] opacity-30"></div>
      {/* Right accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#5DC22D] to-transparent opacity-30"></div>
      {/* Content with z-index to appear above the pattern */}
      <div className="relative z-10">
        <Header />
        <div className="mt-6">
          <div className="mb-6 transform hover:scale-[1.01] transition-transform duration-300">
            <Skills />
          </div>
          <div className="mb-6">
            <Experience />
          </div>
          <div className="mb-6">
            <Projects />
          </div>
          <div className="mb-6">
            <Achievements />
          </div>
          <div className="mb-6">
            <AdditionalTechnicalExperience />
          </div>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Hackathons />
              </div>
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <AndroidDev />
              </div>
            </div>
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <Research />
            </div>
          </div>
        </div>
      </div>
    </div>;
}