import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-[#020617]/90 backdrop-blur-md py-3'
          : 'bg-transparent py-5'}
        border-b border-transparent
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight text-white no-underline"
        >
          PORTFOLIO
        </a>

        <div className="flex items-center gap-8">

          {/* NAV LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {['about', 'education', 'skills', 'certificates', 'projects', 'contact'].map(item => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="
                    text-white/80 hover:text-white
                    transition-colors duration-200
                    no-underline
                  "
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              p-2 rounded-full
              bg-white/10 hover:bg-white/20
              transition-all duration-300
            "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-300" />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
