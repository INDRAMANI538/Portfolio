import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Power BI 101 - Microsoft Power BI DUAL Certification',
    issuer: 'Udemy',
    logo: '/logos/Udemy.png',
    link: 'https://www.udemy.com/certificate/UC-167e93bc-ef73-409d-8616-02cf1e400189/',
    accent: '#a435f0',
    learnings: [
      '📊 Data modeling & relationships',
      '📈 Interactive dashboards & reports',
      '🧮 DAX basics & calculated measures',
      '🔍 Business insights using Power BI',
    ],
  },
  {
    title: 'Google Play Academy - Store Listing Certificate',
    issuer: 'Google Play Academy',
    logo: '/logos/google.png',
    link: 'https://www.credential.net/273bc559-03fb-4964-81f5-e11305997414',
    accent: '#4285F4',
    learnings: [
      '🚀 App Store Optimization (ASO)',
      '🎯 Conversion-focused store listings',
      '🖼 Feature graphics & screenshots',
      '📱 Google Play best practices',
    ],
  },
  {
    title: 'UI/UX Design With Figma: 5+ Real World Projects',
    issuer: 'Udemy',
    logo: '/logos/Udemy.png',
    link: 'https://ude.my/UC-c14b0eda-7fcb-441d-81f6-9186f3df4e2e',
    accent: '#F24E1E',
    learnings: [
      '🎨 UI principles & color systems',
      '🧠 UX thinking & wireframing',
      '📐 Auto layout & components',
      '🧪 Real-world design projects',
    ],
  },
  {
    title: 'Modern CSS Techniques without JavaScript',
    issuer: 'LinkedIn Learning',
    logo: '/logos/linkedin.png',
    link: 'https://www.linkedin.com/learning/certificates/3c41c5fcbbec0193eb5431cfd8e612444207ad22b0381a5b0d7bc58448fb9af5',
    accent: '#0A66C2',
    learnings: [
      '✨ CSS animations & transitions',
      '📦 Grid & Flexbox mastery',
      '🎭 Modern layout techniques',
      '⚡ Performance-friendly UI',
    ],
  },
  {
    title: 'Electronic Arts - Software Engineering Job Simulation',
    issuer: 'Forage (EA)',
    logo: '/logos/forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_dcPsrRpuDXeLDYDEN_1751200032216_completion_certificate.pdf',
    accent: '#7c3aed',
    learnings: [
      '🧠 Problem solving mindset',
      '🧩 Feature design & debugging',
      '📄 Software documentation',
      '🎮 Real-world engineering workflow',
    ],
  },
  {
    title: 'Accenture Nordics - Software Engineering Job Simulation',
    issuer: 'Forage (Accenture)',
    logo: '/logos/forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_dcPsrRpuDXeLDYDEN_1750906466551_completion_certificate.pdf',
    accent: '#06b6d4',
    learnings: [
      '🏗 Enterprise software practices',
      '🤝 Client-focused development',
      '📊 Agile & SDLC exposure',
      '🛠 Technical decision making',
    ],
  },
  {
    title: 'AWS - Solutions Architecture Job Simulation',
    issuer: 'Forage (AWS)',
    logo: '/logos/forage.png',
    link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_dcPsrRpuDXeLDYDEN_1766919044261_completion_certificate.pdf',
    accent: '#FF9900',
    learnings: [
      '☁ Cloud architecture basics',
      '🔐 Security & scalability concepts',
      '📡 AWS services overview',
      '🏗 Designing reliable systems',
    ],
  },
];

const Certificates: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visible = showAll ? certificates : certificates.slice(0, 3);

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

  // When showAll changes, immediately make all reveal elements visible
  useEffect(() => {
    if (showAll && sectionRef.current) {
      requestAnimationFrame(() => {
        sectionRef.current?.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      });
    }
  }, [showAll]);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: '#050816',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', left: '-100px', top: '30%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <h2 className="reveal" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '4rem',
          color: '#f8fafc',
        }}>
          Certificates & <span className="gradient-text">Achievements</span>
        </h2>

        {/* Grid */}
        <div
          className="cert-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
          {visible.map((cert, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                perspective: '1000px',
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Flip card container */}
              <div
                style={{
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                  height: '280px',
                  cursor: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg)';
                }}
              >
                {/* FRONT */}
                <div className="glass-card" style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {/* Top gradient stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                    borderRadius: '1.5rem 1.5rem 0 0',
                    background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
                  }} />

                  {/* Logo */}
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    style={{ height: '36px', objectFit: 'contain', alignSelf: 'flex-start', marginBottom: '1rem' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />

                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#f8fafc',
                    lineHeight: 1.4,
                    flex: 1,
                    marginBottom: '0.75rem',
                  }}>{cert.title}</h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.78rem', color: cert.accent, fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Issued by {cert.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="glass-card" style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: `linear-gradient(135deg, rgba(${cert.accent === '#7c3aed' ? '124,58,237' : '6,182,212'},0.1), rgba(5,8,22,0.95))`,
                  borderColor: `${cert.accent}40`,
                }}>
                  <h4 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: cert.accent,
                    marginBottom: '1rem',
                    letterSpacing: '0.05em',
                  }}>What I Learned 🚀</h4>

                  <ul style={{ listStyle: 'none', padding: 0, flex: 1, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {cert.learnings.map((l, li) => (
                      <li key={li} style={{
                        fontSize: '0.83rem',
                        color: 'rgba(248,250,252,0.85)',
                        lineHeight: 1.5,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.3rem',
                      }}>{l}</li>
                    ))}
                  </ul>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '9999px',
                      background: cert.accent,
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                      cursor: 'none',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={13} /> View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && certificates.length > 3 && (
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
              style={{ cursor: 'none' }}
            >
              View All {certificates.length} Certificates
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
