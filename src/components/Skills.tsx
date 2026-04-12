import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 90, icon: '🌐', color: '#E34F26', category: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: '⚡', color: '#F7DF1E', category: 'Frontend' },
  { name: 'React', level: 88, icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
  { name: 'TypeScript', level: 80, icon: '🔷', color: '#3178C6', category: 'Frontend' },
  { name: 'Node.js', level: 70, icon: '🟢', color: '#84CC16', category: 'Backend' },
  { name: 'Firebase', level: 78, icon: '🔥', color: '#FFCA28', category: 'Backend' },
  { name: 'Kotlin', level: 72, icon: '📱', color: '#7C3AED', category: 'Mobile' },
  { name: 'UI/UX Design', level: 75, icon: '🎨', color: '#EC4899', category: 'Design' },
  { name: 'Figma', level: 80, icon: '✏️', color: '#F24E1E', category: 'Design' },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
            setAnimated(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #050816 0%, #0a0d1c 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        right: '-100px', top: '50%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <h2 className="reveal" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '2.5rem',
          color: '#f8fafc',
        }}>
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        {/* Skills grid — all skills shown */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginTop: '0.5rem',
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card reveal"
              style={{
                padding: '1.75rem',
                transition: 'all 0.35s ease',
                animationDelay: `${i * 0.06}s`,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}50`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${skill.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = '';
              }}
            >
              {/* Top color stripe */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${skill.color}, transparent)`,
              }} />

              {/* Icon + name row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{skill.icon}</span>
                <div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#f8fafc',
                  }}>{skill.name}</div>
                  <div style={{
                    fontSize: '0.73rem',
                    color: 'rgba(148,163,184,0.6)',
                    fontFamily: "'Outfit', sans-serif",
                  }}>{skill.category}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: skill.color, fontSize: '1rem' }}>
                  {skill.level}%
                </div>
              </div>

              {/* Progress bar */}
              <div style={{
                height: '6px',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  borderRadius: '9999px',
                  background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
                  width: animated ? `${skill.level}%` : '0%',
                  transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
                  boxShadow: `0 0 10px ${skill.color}60`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
