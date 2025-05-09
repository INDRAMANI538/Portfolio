import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjusts when to apply the background color
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-sm py-4'  // Solid color when scrolled
          : 'bg-transparent py-6'                      // Transparent before scroll
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-xl font-semibold tracking-tight ${
            scrolled || darkMode ? 'text-black' : 'text-white'
          } hover:text-white transition-colors`}
        >
          PORTFOLIO
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <li>
              <a
                href="#about"
                className={`${
                  scrolled || darkMode ? 'text-black' : 'text-white'
                } hover:text-white transition-colors`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`${
                  scrolled || darkMode ? 'text-black' : 'text-white'
                } hover:text-white transition-colors`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`${
                  scrolled || darkMode ? 'text-black' : 'text-white'
                } hover:text-white transition-colors`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${
                  scrolled || darkMode ? 'text-black' : 'text-white'
                } hover:text-white transition-colors`}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
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
