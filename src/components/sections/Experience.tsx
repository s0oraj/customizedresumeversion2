// Replace the timeline section in your Experience.tsx with this:

<div className="space-y-4 mt-3 relative pl-8">
  {/* Timeline line - positioned to run through center of dots */}
  <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-gray-800"></div>
  {experiences.map((exp, index) => (
    <div key={index} className="bg-gray-900 p-4 rounded relative hover:shadow-[0_0_15px_rgba(93,194,45,0.1)] transition-shadow duration-300">
      {/* Timeline dot */}
      <div className="absolute left-[-38px] top-5 w-3 h-3 rounded-full bg-[#5DC22D] shadow-[0_0_5px_rgba(93,194,45,0.5)] z-10"></div>
      {/* Rest of your content stays the same */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-200 font-semibold flex items-center">
          <PlayCircleIcon size={14} className="mr-2 text-[#5DC22D] opacity-70" />
          {exp.company}
        </h3>
        <span className="text-[#5DC22D] text-sm">{exp.period}</span>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm text-gray-300">{exp.position}</p>
        <div className="flex items-center text-xs text-gray-400">
          <MapPinIcon size={12} className="mr-1" />
          <span>{exp.location}</span>
        </div>
      </div>
      <ul className="space-y-1 mt-2">
        {exp.points.map((point, idx) => (
          <li key={idx} className="flex items-start text-xs text-gray-400">
            <span className="text-[#5DC22D] mr-2 mt-0.5">•</span>
            <span dangerouslySetInnerHTML={{ __html: point }}></span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
