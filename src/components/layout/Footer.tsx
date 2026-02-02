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

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contacto@nextwaveia.com"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium">contacto@nextwaveia.com</span>
              </a>

              <a
                href="https://wa.me/526122893294"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="font-medium">+52 612 289 3294</span>
              </a>
            </div>

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
