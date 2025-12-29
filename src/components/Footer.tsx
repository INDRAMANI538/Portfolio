import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-[#0b0f19] border-t border-white/10">
      <p
        className="text-center text-base sm:text-lg font-semibold"
        style={{ color: 'rgb(75 206 255)', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
      >
        © 2025 Indramani Singh. Crafted with passion & precision.
      </p>
    </footer>
  );
};

export default Footer;
