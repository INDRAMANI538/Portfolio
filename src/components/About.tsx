import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-4 bg-[#0b0f19] text-gray-200"
    >
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight">
          About Me
        </h2>

        {/* GLASS CARD */}
        <div
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl p-8 md:p-12
            flex flex-col md:flex-row
            gap-12 items-center
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          "
        >

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <div
              className="
                w-56 h-56 rounded-full overflow-hidden
                border border-white/20
                shadow-lg
              "
            >
              <img
                src="/Screenshot 2025-05-09 052856.png"
                alt="Indramani Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1">

            {/* TEXT */}
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              👋 Hi, I'm <span className="text-white font-medium">Indramani</span><br />
              🎓 3rd-year Computer Engineering student | 💻 C, C++, Python, JavaScript, Java<br />
              🚀 Building web & Android apps with React, Firebase & Kotlin<br />
              🧠 Tech enthusiast | 💡 Problem solver | 🌐 Always learning
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'ReactJS',
                'TypeScript',
                'Tailwind CSS',
                'UI/UX Design',
                'Responsive Design',
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2 text-sm rounded-full
                    bg-white/10 text-gray-200
                    border border-white/10
                    backdrop-blur-md
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* RESUME BUTTON */}
            <a
              href="https://drive.google.com/file/d/138qaXjImLi9AXd-jlLLWxLagv760qPtR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-7 py-3 rounded-full
                text-sm font-medium
                bg-gradient-to-r from-blue-500 to-cyan-400
                text-black
                hover:brightness-110
                transition-all duration-300
                shadow-lg
              "
            >
              📄 View Resume
            </a>

          </div>
        </div>
      </div>

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2
                        bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default About;
