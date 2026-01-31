
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">NextWave <span className="text-white/50">IA</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Plataforma</a>
          <a href="#about" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Soluciones</a>
          <a href="#testimonials" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Casos</a>
          <a href="#pricing" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Precios</a>
          <div className="h-4 w-px bg-white/10"></div>
          <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:scale-105 transition-all duration-300">
            Agenda una Demo
          </a>
        </div>

        <button className="md:hidden text-white" aria-label="Abrir menú">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
