import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-transparent z-20 font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lado Izquierdo: Imagen con marco decorativo */}
          <div className="animate-on-scroll relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-2xl -z-10 opacity-50"></div>
            <div className="relative p-2 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[32px] aspect-square relative">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4c3142b-39a1-4b9e-bd27-a5956efe499a_3840w.webp"
                  alt="Visión NextWave IA"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-6 flex justify-center">
                  <div className="h-1 w-20 bg-white/20 rounded-full blur-[1px]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Contenido y Tarjetas */}
          <div className="animate-on-scroll space-y-8" style={{ animationDelay: '0.1s' }}>
            {/* Badge superior */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center border border-white/10">
                <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                Sobre NextWave IA
              </span>
            </div>

            {/* Títulos */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]">
                Diseño inteligente, <br />
                <span className="text-white/100">resultados hermosos.</span>
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-xl">
                NextWave IA combina tecnología de vanguardia con principios de diseño pensados para
                crear experiencias de impacto. Empoderamos a las empresas para llevar su visión al
                siguiente nivel digital.
              </p>
            </div>

            {/* Botón Principal (Estilo de la imagen) */}
            <div className="pt-2">
              <button className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-[#ffcd75] text-black rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(129,140,248,0.5)]">
                Descubre Nuestra Historia
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/10">
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trilogía de Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
              {/* Diseño Web */}
              <div className="border-gradient before:rounded-[20px] p-6 rounded-[20px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group/card shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-white mb-2 font-manrope tracking-tight group-hover/card:text-blue-400 transition-colors">
                  Diseño Web
                </h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium group-hover/card:text-white/60 transition-colors">
                  Creamos sitios web modernos y fáciles de usar para tu negocio.
                </p>
              </div>

              {/* Publicidad Digital */}
              <div className="border-gradient before:rounded-[20px] p-6 rounded-[20px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group/card shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-white mb-2 font-manrope tracking-tight group-hover/card:text-orange-400 transition-colors">
                  Publicidad Digital
                </h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium group-hover/card:text-white/60 transition-colors">
                  Diseñamos anuncios impactantes para tus redes sociales y web.
                </p>
              </div>

              {/* Apps Móviles */}
              <div className="border-gradient before:rounded-[20px] p-6 rounded-[20px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group/card shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-[13px] sm:text-[14px] font-bold text-white mb-2 font-manrope tracking-tight group-hover/card:text-purple-400 transition-colors">
                  Apps Móviles
                </h4>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium group-hover/card:text-white/60 transition-colors">
                  Desarrollamos aplicaciones móviles personalizadas para tu marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
