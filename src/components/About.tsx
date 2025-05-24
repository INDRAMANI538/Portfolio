import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
              <img 
                src="/Screenshot 2025-05-09 052856.png" // Direct reference to image in public folder
                alt="Indramani Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              👋 Hi, I'm Indramani<br />
              🎓 3rd-year Computer Engineering student | 💻 C, C++, Python, JavaScript, Java<br />
              🚀 Building web & Android apps with React, Firebase & Kotlin<br />
              🧠 Tech enthusiast | 💡 Problem solver | 🌐 Always learning
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                ReactJS
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                Responsive Design
              </span>
            </div>

      
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/138qaXjImLi9AXd-jlLLWxLagv760qPtR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                📄 View Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
