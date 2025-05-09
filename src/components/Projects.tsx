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

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Global Chat App',
      description: 'A real-time chat application with user authentication, group chats, and media sharing.',
      image: 'image.png',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/INDRAMANI538/Chatingapp',
      demo: 'https://chatingapp-production.up.railway.app/'
    },
    {
      id: 2,
      title: 'Calculator App',
      description: 'A simple yet powerful calculator app with a clean UI and basic mathematical functions.',
      image: 'Screenshot 2025-05-09 065546.png',
      tags: ['TypeScript', 'React', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/INDRAMANI538/INDRAcalculator',
      demo: 'indracalculator.netlify.app'
    },
    {
      id: 3,
      title: 'personal portfolio',
      description: 'personal portfolio website to showcase my projects and skills.',
      image: 'Screenshot 2025-05-09 070051.png',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;