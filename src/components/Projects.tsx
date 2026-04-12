import React, { useState, useRef, useEffect } from 'react';
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
    description: 'A real-time full-stack chat application with authentication, group chats, media sharing, and instant messaging.',
    image: 'image.png',
    tags: ['React', 'Redux', 'Node.js', 'Socket.io'],
    github: 'https://github.com/INDRAMANI538/Chatingapp',
    demo: 'https://chatingapp-nd9d.onrender.com',
  },
  {
    id: 2,
    title: 'Calculator App',
    description: 'A clean and responsive calculator with essential math operations and a premium dark UI.',
    image: 'Screenshot 2025-05-09 065546.png',
    tags: ['React', 'TypeScript', 'CSS'],
    github: 'https://github.com/INDRAMANI538/INDRAcalculator',
    demo: 'https://indracalculator.netlify.app',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'This portfolio — a premium SPA showcasing my skills, projects, and experience.',
    image: 'Screenshot 2025-05-09 070051.png',
    tags: ['React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://portfolio-lihfwlxlo-indramani538s-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'Society Management Portal',
    description: 'A portal for residents, maintenance records, payments, and notices with role-based access.',
    image: 'Screenshot 2025-12-29 100213.png',
    tags: ['React', 'Firebase', 'Role-based Access'],
    github: 'https://github.com/INDRAMANI538/ShubhVilla',
    demo: 'https://shubhvilla.onrender.com',
  },
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visible = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showAll && sectionRef.current) {
      requestAnimationFrame(() => {
        sectionRef.current?.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      });
    }
  }, [showAll]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #0a0d1c 0%, #050816 100%)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', right: '-150px', bottom: '20%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <h2 className="reveal" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '3.5rem',
          color: '#f8fafc',
        }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        {/* Equal-size grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
              style={{ cursor: 'none' }}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal glass-card"
      style={{
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        animationDelay: `${index * 0.08}s`,
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered ? '0 24px 60px rgba(124,58,237,0.18)' : '0 4px 20px rgba(0,0,0,0.2)',
        borderColor: hovered ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.08)',
        cursor: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = 'none';
            (el.parentElement as HTMLElement).style.background = 'linear-gradient(135deg, #1e1b4b, #0c1a2e)';
          }}
        />
        {/* Overlay with links */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(5,8,22,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)', color: '#fff', cursor: 'none',
              }}>
              <Github size={17} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'rgba(124,58,237,0.7)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(124,58,237,0.5)', color: '#fff', cursor: 'none',
              }}>
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
          fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.6rem',
        }}>{project.title}</h3>

        <p style={{
          color: 'rgba(148,163,184,0.85)', fontSize: '0.88rem',
          lineHeight: 1.7, marginBottom: '1.25rem', flex: 1,
        }}>{project.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: '0.25rem 0.7rem', borderRadius: '9999px',
              fontSize: '0.72rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600,
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              color: '#a78bfa',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
