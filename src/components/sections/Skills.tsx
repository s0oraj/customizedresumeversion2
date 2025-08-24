import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Skills() {
  return (
    <div>
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="bg-gray-900 p-4 rounded mt-3 space-y-2">
        <div>
          <span className="text-[#5DC22D] font-medium mr-2">
            Backend & Data Technologies:
          </span>
          <span className="text-gray-300">
            Spring, Java, Python, Android Development, PostgreSQL, PySpark, SQL,
            Hive
          </span>
        </div>
        <div>
          <span className="text-[#5DC22D] font-medium mr-2">
            Frontend Development:
          </span>
          <span className="text-gray-300">
            React.js, Three.js, Framer Motion 3D, Jetpack Compose, Javascript,
            XML
          </span>
        </div>
        <div>
          <span className="text-[#5DC22D] font-medium mr-2">
            Developer Tools:
          </span>
          <span className="text-gray-300">
            Visual Studio Code, Android Studio, Docker, Postman, Git, Maven,
            IntelliJ IDEA
          </span>
        </div>
      </div>
    </div>
  );
}
