import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'React Enthusiast'];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; alpha: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const COUNT = 70;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124,58,237,${(1 - dist / 130) * 0.25})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050816 0%, #0d0a1f 50%, #050816 100%)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.7 }}
      />

      {/* Background glows */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} />
      </div>

      {/* Floating code decorations */}
      {[
        { text: '<React />', top: '18%', left: '7%', color: 'rgba(167,139,250,0.18)', delay: '0s' },
        { text: 'const dev = 🚀', top: '70%', left: '5%', color: 'rgba(6,182,212,0.16)', delay: '1s' },
        { text: 'git commit -m "premium"', top: '25%', right: '5%', color: 'rgba(236,72,153,0.14)', delay: '0.5s' },
        { text: 'npm run build', bottom: '20%', right: '8%', color: 'rgba(167,139,250,0.14)', delay: '1.5s' },
      ].map((item, i) => (
        <div
          key={i}
          className="floating-code"
          style={{
            position: 'absolute',
            fontFamily: "'Courier New', monospace",
            fontSize: '0.75rem',
            color: item.color,
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animation: `floatY 5s ease-in-out ${item.delay} infinite`,
            zIndex: 1,
            userSelect: 'none',
          } as React.CSSProperties}
        >
          {item.text}
        </div>
      ))}

      {/* HERO CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
        }}
      >

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, #f8fafc 0%, #a78bfa 40%, #06b6d4 80%, #f8fafc 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'revealUp 0.7s ease 0.1s both, shimmer 4s linear infinite',
            letterSpacing: '-0.02em',
          }}
        >
          Indramani Singh
        </h1>

        {/* Typewriter roles */}
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 500,
            color: 'rgba(248,250,252,0.7)',
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
            animation: 'revealUp 0.7s ease 0.2s both',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#a78bfa' }}>&gt;</span>
          <span style={{ color: '#06b6d4', minWidth: '1ch' }}>{displayed}</span>
          <span style={{
            display: 'inline-block', width: '2px', height: '1.2em',
            background: '#06b6d4', animation: 'blink 1s step-end infinite',
            borderRadius: '1px',
          }} />
        </div>

        {/* Description */}
        <p
          style={{
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
            color: 'rgba(148,163,184,0.9)',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: 1.8,
            animation: 'revealUp 0.7s ease 0.3s both',
          }}
        >
          A 3rd-year Computer Engineering student crafting exceptional digital experiences
          — from blazing-fast web apps to elegant Android applications.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            animation: 'revealUp 0.7s ease 0.4s both',
          }}
        >
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
          </a>
          <a
            href="https://drive.google.com/file/d/138qaXjImLi9AXd-jlLLWxLagv760qPtR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            animation: 'revealUp 0.7s ease 0.5s both',
          }}
        >
          {[
            { href: 'https://github.com/indramani538', icon: <Github size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/indramani-singh-625080359/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
            { href: 'mailto:sindramani07@gmail.com', icon: <Mail size={20} />, label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(248,250,252,0.7)',
                transition: 'all 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.5)';
                (e.currentTarget as HTMLElement).style.color = '#a78bfa';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(124,58,237,0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(248,250,252,0.7)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(148,163,184,0.6)',
          cursor: 'none',
          animation: 'floatY 2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: "'Outfit', sans-serif" }}>SCROLL</span>
        <div style={{
          width: '24px', height: '40px',
          border: '2px solid rgba(148,163,184,0.3)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '4px',
        }}>
          <div style={{
            width: '4px', height: '8px',
            background: 'linear-gradient(to bottom, #a78bfa, #06b6d4)',
            borderRadius: '2px',
            animation: 'floatY 1.5s ease-in-out infinite',
          }} />
        </div>
        <ArrowDown size={14} />
      </a>
    </section>
  );
};

export default Hero;
