import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
interface Link {
  text: string;
  url: string;
}
interface AchievementItemProps {
  title: string;
  date: string;
  description?: string;
  points?: string[];
  links?: Link[];
}
export function AchievementItem({
  title,
  date,
  description,
  points,
  links
}: AchievementItemProps) {
  return <div className="pl-2 border-l-2 border-indigo-100">
      <div className="ml-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <span className="text-indigo-600 font-medium">{date}</span>
        </div>
        {description && <p className="text-slate-600 text-sm mt-1">{description}</p>}
        {points && points.length > 0 && <ul className="list-disc pl-5 space-y-1.5 mt-2">
            {points.map((point, index) => <li key={index} className="text-slate-600 text-sm">
                {point}
              </li>)}
          </ul>}
        {links && links.length > 0 && <div className="flex flex-wrap gap-2 mt-2">
            {links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700 px-2 py-1 rounded transition-colors">
                <ExternalLinkIcon size={12} className="mr-1" />
                {link.text}
              </a>)}
          </div>}
      </div>
    </div>;
}