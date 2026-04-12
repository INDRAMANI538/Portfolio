import React, { useEffect, useRef, useState } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certs' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /* active section tracker */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    
    // Auto center the clicked item in the scrollable nav on mobile
    if (scrollContainerRef.current) {
        const btn = e.currentTarget as HTMLButtonElement;
        const container = scrollContainerRef.current;
        const scrollLeft = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        background: scrolled
          ? 'rgba(5,8,22,0.9)'
          : 'rgba(5,8,22,0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div 
        className="container" 
        style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
        }}
    >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            border: 'none', cursor: 'none', padding: 0,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #a78bfa, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          } as React.CSSProperties}
        >
          {'<IS/>'}
        </button>

        {/* Scrollable Nav Links Segment */}
        <div 
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            padding: '0.25rem 0',
            flex: 1,
            justifyContent: 'center',
          }}
          className="hide-scrollbar"
        >
          {/* Hide webkit scrollbar hack embedded */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}} />

          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={(e) => scrollTo(id, e)}
              style={{
                position: 'relative',
                background: active === id ? 'rgba(124,58,237,0.15)' : 'transparent',
                border: active === id ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
                borderRadius: '9999px',
                cursor: 'none',
                padding: '0.4rem 1rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: '0.85rem',
                color: active === id ? '#f8fafc' : 'rgba(148,163,184,0.9)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }
              }}
              onMouseLeave={(e) => {
                  if (active !== id) {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(148,163,184,0.9)';
                  }
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA button (Hides on very small screens to give more space, or we can keep it) */}
        <button
          className="nav-cta"
          onClick={(e) => scrollTo('contact', e)}
          style={{
            padding: '0.45rem 1.25rem',
            borderRadius: '9999px',
            border: 'none',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            color: '#fff',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'none',
            flexShrink: 0,
            boxShadow: '0 4px 15px rgba(124,58,237,0.3)',
            transition: 'all 0.3s',
          }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
