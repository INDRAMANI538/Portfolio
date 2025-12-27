import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white dark:bg-[#020617] shadow-sm py-4'
          : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#home"
          className={`
            text-xl font-semibold tracking-tight transition-colors
            ${darkMode
              ? 'text-white'
              : scrolled
                ? 'text-black'
                : 'text-white'}
          `}
        >
          PORTFOLIO
        </a>

        <div className="flex items-center gap-8">

          {/* LINKS */}
          <ul className="hidden md:flex gap-8">
            {['about', 'education', 'skills', 'projects', 'contact'].map(item => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`
                    transition-colors
                    ${darkMode
                      ? 'text-white'
                      : scrolled
                        ? 'text-black'
                        : 'text-white'}
                    hover:text-blue-400
                  `}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
