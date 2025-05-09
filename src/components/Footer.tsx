import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            © {currentYear} INDRAMANI SINGH. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-gray-300">Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span className="text-gray-700 dark:text-gray-300">using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;