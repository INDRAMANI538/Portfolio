import React, { useEffect, useRef } from 'react';

const timeline = [
  {
    year: '2023 – Present',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Noida International University',
    desc: 'Pursuing a comprehensive 3-year diploma focusing on core computer science concepts, software development methodologies, web technologies, and Android application development.',
    icon: '💻',
    accent: '#7c3aed', // Violet
  },
  {
    year: '2023',
    title: 'Matriculation (Class 10)',
    subtitle: 'CBSE Board',
    desc: 'Completed secondary education with a strong academic foundation, excelling in Mathematics and Science.',
    icon: '🎓',
    accent: '#06b6d4', // Cyan
  },
  {
    year: 'Upcoming',
    title: 'B.Tech in Computer Science',
    subtitle: 'Specialization in Software Development & AI',
    desc: 'Planned academic progression to deepen expertise in artificial intelligence, cloud computing, and advanced system architecture.',
    icon: '🚀',
    accent: '#ec4899', // Pink
  },
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: '#050816',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '-150px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className="reveal" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#f8fafc',
        }}>
          Education <span className="gradient-text">& Journey</span>
        </h2>

        {/* Professional left-aligned timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          
          {/* Continuous vertical tracking line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: '0.75rem',
            bottom: '2rem',
            width: '2px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
          }} />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                position: 'relative',
                marginBottom: i !== timeline.length - 1 ? '3.5rem' : 0,
              }}
            >
              {/* Timeline dot / icon */}
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: 0,
                transform: 'translateX(-50%)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#050816',
                border: `2px solid ${item.accent}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: `0 0 15px ${item.accent}40`,
                zIndex: 2,
              }}>
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  borderLeft: `3px solid ${item.accent}`,
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${item.accent}15`;
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Year tag */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  background: `${item.accent}15`,
                  color: item.accent,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: '1rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  {item.year}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#f8fafc',
                  marginBottom: '0.25rem',
                }}>
                  {item.title}
                </h3>

                {/* Subtitle / Institution */}
                <h4 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'rgba(148,163,184,0.9)',
                  marginBottom: '1rem',
                }}>
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: 'rgba(148,163,184,0.6)',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
