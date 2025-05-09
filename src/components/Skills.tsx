import React from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'React', level: 88, color: 'bg-cyan-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'UI/UX Design', level: 75, color: 'bg-purple-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-600' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                  style={{ 
                    width: '0%', 
                    animation: `progress-${index} 1.5s ease-out forwards 0.3s` 
                  }}
                ></div>
              </div>
              <style jsx>{`
                @keyframes progress-${index} {
                  0% { width: 0%; }
                  100% { width: ${skill.level}%; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;