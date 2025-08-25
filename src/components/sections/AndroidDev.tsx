import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon, SmartphoneIcon, ShieldIcon, BrainIcon } from 'lucide-react';
export function AndroidDev() {
  const projects = [{
    title: 'Animus - Cryptography Based Social Media App',
    icon: <ShieldIcon size={14} className="mr-2 text-[#5DC22D]" />,
    demoLink: 'https://github.com/s0oraj/Animus',
    repoLink: 'https://github.com/s0oraj/animus',
    technologies: ['Android Studio', 'Java', 'OpenCV', 'E2EE', 'AES', 'Alan-AI'],
    points: ['Utilized <span class="font-semibold text-[#5DC22D]">Advanced Encryption Standard (AES)</span> algorithm to make chats <span class="font-semibold text-[#5DC22D]">End-to-End Encrypted (E2EE)</span>.', 'Pioneered an in-app <span class="font-semibold text-[#5DC22D]">AI Voice Assistant</span> allowing users to navigate the app using voice commands, via <span class="font-semibold text-[#5DC22D]">Alan-AI</span>.', 'Created <span class="font-semibold text-[#5DC22D]">Avatar Creator</span> using <span class="font-semibold text-[#5DC22D]">Google ML Kit</span> and <span class="font-semibold text-[#5DC22D]">OpenCV</span> for <span class="font-semibold text-[#5DC22D]">image segmentation</span> and cartoonization.']
  }, {
    title: 'SangeetAI - Emotion-Based Music Recommender',
    icon: <BrainIcon size={14} className="mr-2 text-[#5DC22D]" />,
    demoLink: 'https://github.com/s0oraj/SangeetAI',
    repoLink: 'https://github.com/s0oraj/SangeetAI',
    technologies: ['Python', 'TensorFlow Lite', 'VGG19', 'Android Java'],
    points: ['Built <span class="font-semibold text-[#5DC22D]">VGG19 CNN model</span> with transfer learning on <span class="font-semibold text-[#5DC22D]">35K+ FER2013 images</span> for 7-class emotion detection, achieving optimized mobile inference through <span class="font-semibold text-[#5DC22D]">TensorFlow Lite conversion</span>.', 'Implemented complete ML pipeline from <span class="font-semibold text-[#5DC22D]">Kaggle API</span> to Android deployment with augmentation (rotation/flip), normalization, and <span class="font-semibold text-[#5DC22D]">Adam optimizer with early stopping</span>.', 'Developed Android app using <span class="font-semibold text-[#5DC22D]">CameraView</span> and <span class="font-semibold text-[#5DC22D]">JCPlayer</span> for real-time emotion-based music recommendations.']
  }];
  return <div>
      <SectionTitle icon={<SmartphoneIcon size={18} />}>
        Android Development
      </SectionTitle>
      <div className="space-y-4 mt-3">
        {projects.map((project, index) => <div key={index} className="bg-gray-900 p-4 rounded relative overflow-hidden group hover:shadow-[0_0_15px_rgba(93,194,45,0.15)] transition-all duration-300 transform hover:scale-[1.01]">
            {/* Background accents */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#5DC22D] opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity"></div>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold flex items-center">
                {project.icon}
                {project.title}
              </h3>
              <div className="flex gap-1">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                  <ExternalLinkIcon size={10} className="mr-1 text-[#5DC22D] group-hover:rotate-45 transition-transform" />
                  Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded transition-colors group">
                  <GithubIcon size={10} className="mr-1 text-[#5DC22D] group-hover:scale-110 transition-transform" />
                  Repo
                </a>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              {project.technologies.map((tech, i) => <span key={i} className="text-xs bg-black bg-opacity-50 text-[#5DC22D] px-2 py-0.5 rounded-full">
                  {tech}
                </span>)}
            </div>
            <ul className="space-y-2 mt-3">
              {project.points.map((point, idx) => <li key={idx} className="flex items-start text-sm text-gray-400">
                  <div className="min-w-4 h-4 flex items-center justify-center mt-0.5 mr-2">
                    <span className="w-1.5 h-1.5 bg-[#5DC22D] rounded-full"></span>
                  </div>
                  <span dangerouslySetInnerHTML={{
              __html: point
            }}></span>
                </li>)}
            </ul>
          </div>)}
      </div>
    </div>;
}