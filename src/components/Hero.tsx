import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate-in');
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('animate-in');
        }
      }, 300);
      
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('animate-in');
        }
      }, 600);
    };
    
    animate();
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="text-center max-w-3xl relative z-10 px-4">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 text-white opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          Creative Developer
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-12 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
        >
          Crafting digital experiences with code and creativity
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-600"
        >
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            View Projects
          </a>
          <a 
            href="/resume.pdf" 
            download 
            className="px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce z-10">
        <a 
          href="#about" 
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;