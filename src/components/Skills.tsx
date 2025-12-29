import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number; // 0–100
  gradient: string;
}

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 90, gradient: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', level: 85, gradient: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 88, gradient: 'from-cyan-400 to-cyan-600' },
  { name: 'TypeScript', level: 80, gradient: 'from-blue-500 to-indigo-600' },
  { name: 'UI / UX Design', level: 75, gradient: 'from-purple-400 to-pink-600' },
  { name: 'Node.js', level: 70, gradient: 'from-green-400 to-emerald-600' },
];

const Skills: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // trigger animation AFTER mount
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-[#0b0f19] text-gray-200"
    >
      <div className="container mx-auto max-w-5xl">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-center mb-16">
          Skills & Expertise
        </h2>

        {/* GLASS CARD */}
        <div className="grid gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
              "
            >
              {/* TITLE */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* BAR BACKGROUND */}
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                {/* BAR FILL */}
                <div
                  className={`
                    h-full rounded-full
                    bg-gradient-to-r ${skill.gradient}
                    transition-all duration-1000 ease-out
                  `}
                  style={{
                    width: loaded ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
