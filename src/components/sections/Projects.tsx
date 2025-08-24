import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon, CodeIcon, PlusCircleIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'Advanced Coding Interview Patterns (ACIP)',
    link: 'https://acip.vercel.app/',
    repo: 'https://github.com/s0oraj/acip',
    technologies: 'React, Vite, Three.js, Framer-motion-3D, Zustand',
    points: ['Built <span class="font-semibold text-[#5DC22D]">GPU-accelerated 3D galaxy UI</span> with Solar systems as individual Coding Roadmaps, <span class="font-semibold text-[#5DC22D]">500K stars at 60 FPS</span>, optimizing vertices with <span class="font-semibold text-[#5DC22D]">Three.js</span> buffers and <span class="font-semibold text-[#5DC22D]">Level of Detail (LOD)</span> mesh optimization', '<span class="font-semibold text-[#5DC22D]">Algorithm Pattern Engine</span>: Implemented <span class="font-semibold text-[#5DC22D]">51 interactive step-by-step UX visualizations</span> for each algorithm pattern, demonstrating code execution through synchronized animations using <span class="font-semibold text-[#5DC22D]">framer-motion</span>', 'Devised Coding Roadmap\'s Minimap with <span class="font-semibold text-[#5DC22D]">2D/3D mode switching</span>, real-time dual-camera sync via <span class="font-semibold text-[#5DC22D]">3D graphics programming using quaternion-based camera transforms</span>, world-space frustum culling, & trigonometric FOV/2']
  }, {
    title: 'ACIP Backend - Pattern Tracker',
    link: 'https://github.com/s0oraj/pattern-tracker',
    repo: 'https://github.com/s0oraj/pattern-tracker',
    technologies: 'Spring Boot, OAuth2, PostgreSQL, JPA/Hibernate, Maven',
    points: ['Built <span class="font-semibold text-[#5DC22D]">Spring Boot REST API</span> with <span class="font-semibold text-[#5DC22D]">Google OAuth2</span> and <span class="font-semibold text-[#5DC22D]">JWT authentication</span> for secure user sessions', 'Designed <span class="font-semibold text-[#5DC22D]">PostgreSQL database schema</span> with <span class="font-semibold text-[#5DC22D]">JPA/Hibernate ORM</span> and optimized query performance', 'Implemented <span class="font-semibold text-[#5DC22D]">question tracking system</span> with <span class="font-semibold text-[#5DC22D]">CRUD operations</span> across 220+ coding interview patterns']
  }];
  return <div>
      <SectionTitle icon={<CodeIcon size={18} />}>Projects</SectionTitle>
      <div className="space-y-4 mt-3">
        {projects.map((project, index) => <div key={index} className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.1)] transition-shadow duration-300">
            {/* Background accent */}
            <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
            <div className="flex justify-between items-start relative z-10">
              <h3 className="text-gray-200 font-semibold flex items-center">
                <PlusCircleIcon size={14} className="mr-2 text-[#5DC22D] opacity-70" />
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                  <ExternalLinkIcon size={10} className="mr-1 text-[#5DC22D] group-hover:scale-110 transition-transform" />
                  Demo
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                  <GithubIcon size={10} className="mr-1 text-[#5DC22D] group-hover:scale-110 transition-transform" />
                  Repo
                </a>
              </div>
            </div>
            <div className="text-xs text-[#5DC22D] mt-1 mb-2 bg-black bg-opacity-30 inline-block px-2 py-0.5 rounded">
              {project.technologies}
            </div>
            <ul className="space-y-1 relative z-10">
              {project.points.map((point, idx) => <li key={idx} className="flex items-start text-xs text-gray-400">
                  <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
                  <span dangerouslySetInnerHTML={{
              __html: point
            }}></span>
                </li>)}
            </ul>
          </div>)}
      </div>
    </div>;
}