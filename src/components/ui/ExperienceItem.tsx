import React from 'react';
import { MapPinIcon } from 'lucide-react';
interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  points: string[];
}
export function ExperienceItem({
  company,
  position,
  period,
  location,
  points
}: ExperienceItemProps) {
  return <div className="pl-2 border-l-2 border-indigo-100">
      <div className="ml-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-800">{company}</h3>
          <span className="text-indigo-600 font-medium">{period}</span>
        </div>
        <p className="text-slate-700 font-medium">{position}</p>
        <div className="flex items-center text-slate-500 mb-3">
          <MapPinIcon size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        <ul className="list-disc pl-5 space-y-1.5">
          {points.map((point, index) => <li key={index} className="text-slate-600 text-sm">
              {point}
            </li>)}
        </ul>
      </div>
    </div>;
}