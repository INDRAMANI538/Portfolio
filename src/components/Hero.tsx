import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    titleRef.current?.classList.add('animate-in');

    setTimeout(() => {
      subtitleRef.current?.classList.add('animate-in');
    }, 250);

    setTimeout(() => {
      ctaRef.current?.classList.add('animate-in');
    }, 500);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0b0f19] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="opacity-0 translate-y-8 transition-all duration-700
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     font-bold tracking-tight text-white mb-6"
        >
          Creative Developer
        </h1>

        <p
          ref={subtitleRef}
          className="opacity-0 translate-y-8 transition-all duration-700
                     text-lg sm:text-xl md:text-2xl
                     text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Crafting elegant digital experiences with performance,
          precision, and purpose.
        </p>

        <div
          ref={ctaRef}
          className="opacity-0 translate-y-8 transition-all duration-700
                     flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#projects"
            className="no-underline px-8 py-4 rounded-full
                       bg-blue-500 text-white font-medium
                       hover:bg-blue-600 transition
                       shadow-lg shadow-blue-500/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="no-underline px-8 py-4 rounded-full
                       border border-white/30 text-white font-medium
                       hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR (FIXED POSITION & CLEAN) */}
      <div className="absolute bottom-8 z-10 flex justify-center w-full">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="no-underline flex items-center justify-center
                     w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/20
                     transition animate-bounce"
        >
          <ArrowDown size={18} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
