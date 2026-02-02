import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-8">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">NextWave IA</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Liderando la vanguardia tecnológica en México. Transformamos datos en experiencias, y
              clics en clientes leales a través de Inteligencia Artificial aplicada.
            </p>
            <div className="flex gap-4">
              {['ln', 'tw', 'ig', 'gh'].map(i => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white hover:text-white transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-bold uppercase">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Servicios
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#project-inquiry"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Creación de Página Web
                </a>
              </li>
              <li>
                <a
                  href="#project-inquiry"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#project-inquiry"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Diseño de App Web
                </a>
              </li>
              <li>
                <a
                  href="#project-inquiry"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Diseño de App Móviles
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Nosotros
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Nuestra Filosofía
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Planes de Precios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Newsletter
            </h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Suscríbete para recibir tendencias semanales sobre IA en el mercado mexicano.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white/20"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
            © 2025 NextWave IA - Ciudad de México. Todos los derechos reservados.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
