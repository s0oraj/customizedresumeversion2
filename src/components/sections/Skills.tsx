import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { WrenchIcon, CodeIcon, DatabaseIcon } from 'lucide-react';
export function Skills() {
  const skillCategories = [{
    title: 'Backend & Data Technologies',
    icon: <DatabaseIcon size={14} className="mr-2 text-[#5DC22D]" />,
    skills: ['Spring', 'Java', 'Python', 'Android Development', 'PostgreSQL', 'PySpark', 'SQL', 'Hive']
  }, {
    title: 'Frontend Development',
    icon: <CodeIcon size={14} className="mr-2 text-[#5DC22D]" />,
    skills: ['React.js', 'Three.js', 'Framer Motion 3D', 'Jetpack Compose', 'Javascript', 'XML']
  }, {
    title: 'Developer Tools',
    icon: <WrenchIcon size={14} className="mr-2 text-[#5DC22D]" />,
    skills: ['Visual Studio Code', 'Android Studio', 'Docker', 'Postman', 'Git', 'Maven', 'IntelliJ IDEA']
  }];
  return <div>
      <SectionTitle icon={<CodeIcon size={18} />}>
        Technical Skills
      </SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3 space-y-4 relative overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)]">
        {/* Background accent */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#5DC22D] opacity-5 rounded-full blur-xl"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-[#5DC22D] opacity-5 rounded-full blur-xl"></div>
        {skillCategories.map((category, index) => <div key={index} className="relative">
            <div className="flex items-center mb-2">
              {category.icon}
              <span className="text-[#5DC22D] font-medium">
                {category.title}:
              </span>
            </div>
            <div className="flex flex-wrap gap-2 ml-6">
              {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 hover:text-[#5DC22D] transition-colors cursor-default flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full mr-1.5 opacity-70"></span>
                  {skill}
                </span>)}
            </div>
          </div>)}
      </div>
    </div>;
}