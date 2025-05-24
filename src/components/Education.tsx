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
    board: 'Specializing in Software Development & AI',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeInOut',
    },
  }),
};

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Scroll Progress Bar */}
      {/* <div className="sticky top-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse z-50" /> */}

      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white">
          🎓 My Education Journey
        </h2>

        {/* Removed border-l-4 (vertical line) */}
        <div className="relative pl-6 space-y-16">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="relative"
            >
              {/* Static timeline dot without animation */}
              <span className="absolute -left-3 w-6 h-6 bg-blue-500 dark:bg-blue-700 border-4 border-white dark:border-gray-900 rounded-full shadow-lg" />

              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                    {edu.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mt-2">
                    {edu.board}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 rounded-full shadow">
                      📅 {edu.date}
                    </span>
                    <span className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-100 rounded-full shadow">
                      🌟 {edu.board}
                    </span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
