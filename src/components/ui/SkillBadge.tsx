import React from 'react';
interface SkillBadgeProps {
  skill: string;
}
export function SkillBadge({
  skill
}: SkillBadgeProps) {
  return <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-800 transition-colors cursor-default">
      {skill}
    </span>;
}