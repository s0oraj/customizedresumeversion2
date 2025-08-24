import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ResearchItemProps {
  title: string;
  link: string;
  repo: string;
  technologies: string;
  points: string[];
}
export function ResearchItem({
  title,
  link,
  repo,
  technologies,
  points
}: ResearchItemProps) {
  return <div className="pl-2 border-l-2 border-indigo-100">
      <div className="ml-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <div className="flex gap-2">
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700 px-2 py-1 rounded transition-colors">
              <ExternalLinkIcon size={12} className="mr-1" />
              Paper
            </a>
            <a href={repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700 px-2 py-1 rounded transition-colors">
              <GithubIcon size={12} className="mr-1" />
              Repo
            </a>
          </div>
        </div>
        <div className="mb-3 text-sm text-indigo-600 font-medium">
          {technologies}
        </div>
        <ul className="list-disc pl-5 space-y-1.5">
          {points.map((point, index) => <li key={index} className="text-slate-600 text-sm">
              {point}
            </li>)}
        </ul>
      </div>
    </div>;
}