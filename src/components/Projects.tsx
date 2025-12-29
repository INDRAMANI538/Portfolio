import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Global Chat App',
    description: 'A real-time chat application with authentication, group chats, and media sharing.',
    image: 'image.png',
    tags: ['React', 'Redux', 'Tailwind', 'Node.js'],
    github: 'https://github.com/INDRAMANI538/Chatingapp',
    demo: 'https://chatingapp-nd9d.onrender.com',
  },
  {
    id: 2,
    title: 'Calculator App',
    description: 'A clean and responsive calculator with essential math operations.',
    image: 'Screenshot 2025-05-09 065546.png',
    tags: ['React', 'TypeScript', 'Firebase'],
    github: 'https://github.com/INDRAMANI538/INDRAcalculator',
    demo: 'https://indracalculator.netlify.app',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A modern portfolio website to showcase skills and projects.',
    image: 'Screenshot 2025-05-09 070051.png',
    tags: ['React', 'Tailwind', 'UI/UX'],
    github: 'https://github.com',
    demo: 'https://portfolio-lihfwlxlo-indramani538s-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'Society Management Portal',
    description: 'A portal to manage residents, maintenance records, payments, and notices.',
    image: 'Screenshot 2025-12-29 100213.png',
    tags: ['React', 'Firebase', 'Role-based Access'],
    github: 'https://github.com/INDRAMANI538/ShubhVilla',
    demo: 'https://shubhvilla.onrender.com',
  },
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-[#0b0f19] text-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* HEADING */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Projects
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden
                         transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* IMAGE */}
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* HOVER LINKS */}
                <div className="absolute inset-0 bg-black/60 opacity-0
                                group-hover:opacity-100 transition
                                flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON (INLINE EXPAND) */}
        {!showAll && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full
                         bg-white/10 hover:bg-white/20
                         transition text-white"
            >
              View All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
