import React, { useEffect, useRef } from 'react';

const stats = [
  { label: 'Projects Built', value: '4+', icon: '🚀' },
  { label: 'Certs Earned', value: '7+', icon: '🏆' },
  { label: 'Coffees', value: '∞', icon: '☕' },
];

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Node.js', color: '#84CC16' },
  { name: 'Kotlin', color: '#7C3AED' },
  { name: 'Python', color: '#3B82F6' },
  { name: 'Figma', color: '#EC4899' },
];

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #050816 0%, #0a0d1c 50%, #050816 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: '600px', height: '600px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Section label */}

        <h2 className="reveal" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#f8fafc',
        }}>
          About <span className="gradient-text">Me</span>
        </h2>

        {/* Two-column layout */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>

          {/* LEFT: Profile photo with ring */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '260px', height: '260px' }}>
              {/* Rotating gradient ring */}
              <div style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)',
                animation: 'rotateRing 6s linear infinite',
              }} />
              {/* White gap ring */}
              <div style={{
                position: 'absolute',
                inset: '2px',
                borderRadius: '50%',
                background: '#050816',
              }} />
              {/* Photo */}
              <div style={{
                position: 'absolute',
                inset: '8px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}>
                <img
                  src="/Screenshot 2025-05-09 052856.png"
                  alt="Indramani Singh"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '-10px',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                borderRadius: '12px',
                padding: '0.4rem 0.8rem',
                fontSize: '0.75rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                color: '#fff',
                boxShadow: '0 8px 25px rgba(124,58,237,0.4)',
                animation: 'floatY 3s ease-in-out infinite',
              }}>
                💻 Open to Work
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            <p className="reveal" style={{
              color: 'rgba(148,163,184,0.9)',
              lineHeight: 1.85,
              marginBottom: '2rem',
              fontSize: '1.05rem',
            }}>
              👋 Hi, I'm <strong style={{ color: '#f8fafc' }}>Indramani Singh</strong> — a passionate
              developer and 3rd-year Computer Engineering student. I specialise in building
              high-performance <span style={{ color: '#a78bfa' }}>web apps</span> and{' '}
              <span style={{ color: '#06b6d4' }}>Android applications</span> with a strong eye for
              design and detail. I love turning complex ideas into clean, elegant products.
            </p>

            {/* Stats */}
            <div className="reveal reveal-delay-1 stats-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              {stats.map((s) => (
                <div key={s.label} className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.2rem',
                  }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(148,163,184,0.8)', fontFamily: "'Outfit', sans-serif" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="reveal reveal-delay-2">
              <div style={{
                fontSize: '0.8rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'rgba(148,163,184,0.7)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techStack.map((t) => (
                  <span key={t.name} style={{
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    transition: 'all 0.3s',
                  }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {/* View resume */}
            <div className="reveal reveal-delay-3" style={{ marginTop: '2rem' }}>
              <a
                href="https://drive.google.com/file/d/138qaXjImLi9AXd-jlLLWxLagv760qPtR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex' }}
              >
                <span>📄 View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
