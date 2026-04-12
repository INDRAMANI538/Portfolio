import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Instagram, Linkedin, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ EmailJS logic fully preserved (unchanged)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ SEND MESSAGE TO YOU
      await emailjs.send(
        'service_z258bbu',
        'template_xetow8q',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'New Portfolio Enquiry',
        },
        '1FjQbtJm02sDirXpT'
      );

      // 2️⃣ AUTO-REPLY TO USER
      await emailjs.send(
        'service_z258bbu',
        'template_ekxn04o',
        {
          name: formData.name,
          email: formData.email,
        },
        '1FjQbtJm02sDirXpT'
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

  const socials = [
    { href: 'https://github.com/indramani538', icon: <Github size={22} />, label: 'GitHub', color: '#f8fafc' },
    { href: 'https://instagram.com/indramani538', icon: <Instagram size={22} />, label: 'Instagram', color: '#E1306C' },
    { href: 'https://www.linkedin.com/in/indramani-singh-625080359/', icon: <Linkedin size={22} />, label: 'LinkedIn', color: '#0A66C2' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.875rem',
    padding: '1rem 1.25rem',
    color: '#f8fafc',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: 'linear-gradient(180deg, #050816 0%, #0a0d1c 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
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
          marginBottom: '1rem',
          color: '#f8fafc',
        }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="reveal" style={{
          textAlign: 'center',
          color: 'rgba(148,163,184,0.8)',
          maxWidth: '500px',
          margin: '0 auto 4rem',
          lineHeight: 1.7,
        }}>
          Open to collaborations, freelance work, or just a friendly hello.
          I'll get back to you as soon as possible! ✉️
        </p>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>

          {/* Left — info */}
          <div className="reveal">
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#f8fafc',
                marginBottom: '1.5rem',
              }}>Let's Work Together 🤝</h3>

              {/* Email */}
              <a
                href="mailto:sindramani07@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.9rem 1.1rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  color: '#a78bfa',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  cursor: 'none',
                  marginBottom: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.08)';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                <Mail size={18} />
                sindramani07@gmail.com
              </a>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.9rem 1.1rem',
                borderRadius: '0.875rem',
                background: 'rgba(6,182,212,0.07)',
                border: '1px solid rgba(6,182,212,0.18)',
                color: '#67e8f9',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: '0.9rem',
              }}>
                <MapPin size={18} />
                Noida, Uttar Pradesh, India
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                color: 'rgba(148,163,184,0.7)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>Find me on</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socials.map((s) => (
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
                      width: '48px',
                      height: '48px',
                      borderRadius: '0.75rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(248,250,252,0.7)',
                      transition: 'all 0.3s',
                      cursor: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = `${s.color}50`;
                      (e.currentTarget as HTMLElement).style.background = `${s.color}12`;
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 20px ${s.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(248,250,252,0.7)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.transform = '';
                      (e.currentTarget as HTMLElement).style.boxShadow = '';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-1">
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    color: 'rgba(148,163,184,0.8)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(124,58,237,0.6)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    color: 'rgba(148,163,184,0.8)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>YOUR EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(124,58,237,0.6)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    color: 'rgba(148,163,184,0.8)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}>YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey Indramani, I'd love to work together on..."
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(124,58,237,0.6)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.875rem',
                    border: 'none',
                    background: loading
                      ? 'rgba(124,58,237,0.4)'
                      : 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    color: '#fff',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: loading ? 'not-allowed' : 'none',
                    transition: 'all 0.3s',
                    boxShadow: loading ? 'none' : '0 6px 25px rgba(124,58,237,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 35px rgba(124,58,237,0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = loading ? 'none' : '0 6px 25px rgba(124,58,237,0.35)';
                  }}
                >
                  {loading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        width: '18px', height: '18px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'rotateRing 0.7s linear infinite',
                      }} />
                      Sending…
                    </span>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </button>

                {success && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem',
                    borderRadius: '0.875rem',
                    background: 'rgba(16,185,129,0.12)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#34d399',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    animation: 'revealUp 0.5s ease forwards',
                  }}>
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
