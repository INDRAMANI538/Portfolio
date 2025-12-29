import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const educationTimeline = [
  {
    title: 'Matriculation (Class 10)',
    date: 'Completed in 2023',
    board: 'CBSE Board',
  },
  {
    title: 'Diploma in Computer Engineering',
    date: '2023 – Present',
    board: 'Noida International University',
  },
  {
    title: 'B.Tech in Computer Science (Planned)',
    date: 'Post-Diploma',
    board: 'Software Development & AI Focus',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative bg-[#0b0f19] text-gray-200 py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
          Education Journey
        </h2>

        {/* TIMELINE */}
        <div className="relative space-y-16">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative pl-12"
            >
              {/* DOT */}
              <span className="absolute left-[6px] top-4 w-3 h-3 rounded-full bg-blue-500 shadow-md" />

              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.01}
                glareEnable={false}
              >
                <div
                  className="
                    bg-[#020617]/80 backdrop-blur-md
                    border border-white/10
                    rounded-2xl p-6
                    transition-transform duration-300
                    hover:scale-[1.02]
                  "
                >
                  <h3 className="text-xl font-medium mb-1">
                    {edu.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-2">
                    {edu.date}
                  </p>

                  <p className="text-base text-gray-300">
                    {edu.board}
                  </p>

                  {/* TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                      {edu.date}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                      {edu.board}
                    </span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Education;
