import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            NextWave <span className="text-white/50">IA</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Tecnología
          </a>
          <a
            href="#portfolio"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Servicios
          </a>
          <a
            href="#testimonials"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Casos
          </a>
          <a
            href="#pricing"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Precios
          </a>
          <a
            href="#techstack"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Herramientas
          </a>
        </div>

        <button
          className="md:hidden text-white"
          aria-label="Abrir menú"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 z-[100] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        style={{ top: '0' }}
      />

      {/* Mobile Sidebar Menu */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-black border-l border-white/20 z-[101] transition-transform duration-300 ease-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-cyan-900/10 pointer-events-none" />

        {/* Minimal glow effects */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={e => {
              e.stopPropagation();
              setMobileMenuOpen(false);
            }}
            className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200 active:scale-95"
            aria-label="Cerrar menú"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="relative pt-20 px-8 mb-8 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tighter text-white block">NextWave</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Inteligencia Artificial
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="relative px-8 space-y-3 z-20">
          {[
            { href: '#about', label: 'Tecnología', icon: '⚡' },
            { href: '#portfolio', label: 'Servicios', icon: '✦' },
            { href: '#testimonials', label: 'Casos', icon: '★' },
            { href: '#pricing', label: 'Precios', icon: '◆' },
            { href: '#techstack', label: 'Herramientas', icon: '◉' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="group relative flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-95"
            >
              {/* Icon */}
              <span className="relative text-xl text-white/60 group-hover:text-white transition-colors duration-200">
                {item.icon}
              </span>

              {/* Text */}
              <span className="relative text-sm font-bold uppercase tracking-wider text-white transition-colors duration-200">
                {item.label}
              </span>

              {/* Arrow */}
              <svg
                className="relative ml-auto w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="absolute bottom-8 left-8 right-8 z-20">
          <a
            href="#project-inquiry"
            onClick={handleLinkClick}
            className="group relative flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-black rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-lg"
          >
            <span className="relative">Iniciar Proyecto</span>
            <svg
              className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
