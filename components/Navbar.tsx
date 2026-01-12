
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${
      isScrolled ? 'bg-[#FDFCFB]/90 backdrop-blur-sm border-b border-[#E5E1DD]/30 py-4' : 'bg-transparent'
    }`}>
      <div className="text-xl md:text-2xl font-serif tracking-widest uppercase cursor-pointer">
        Dyuti
      </div>
      <div className="flex gap-8 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium">
        <a href="#featured" className="hover:opacity-50 transition-opacity">Explore</a>
        <a href="#story" className="hover:opacity-50 transition-opacity">Story</a>
        <a href="#cart" className="hover:opacity-50 transition-opacity">Cart (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;
