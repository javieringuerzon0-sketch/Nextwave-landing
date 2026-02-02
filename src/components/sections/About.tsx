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
              <button className="about-gradient-btn group relative inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full text-sm font-bold transition-all duration-500 hover:scale-105 overflow-visible">
                <span className="relative z-10">Descubre Nuestra Historia</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 relative z-10">
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

            {/* Trilogía de Tarjetas (Ajuste de tamaño intermedio) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
              {[
                { title: 'Ultra Rápido', desc: 'Crea sitios profesionales en minutos.' },
                { title: 'Potenciado por IA', desc: 'Inteligencia GPT-5 manejando el código.' },
                { title: 'Totalmente Personalizable', desc: 'Control total sobre cada estilo.' },
              ].map((card, i) => (
                <div
                  key={i}
                  className="border-gradient before:rounded-[20px] p-6 rounded-[20px] bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group/card shadow-lg"
                >
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-white mb-2 font-manrope tracking-tight group-hover/card:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium group-hover/card:text-white/60 transition-colors">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .about-gradient-btn {
          position: relative;
          border: 2px solid transparent;
          background:
            linear-gradient(#000, #000) padding-box,
            linear-gradient(90deg,
              #a855f7,
              #ec4899,
              #f59e0b,
              #10b981,
              #3b82f6,
              #8b5cf6,
              #a855f7
            ) border-box;
          box-shadow:
            0 0 20px rgba(168, 85, 247, 0.4),
            0 0 40px rgba(236, 72, 153, 0.3),
            0 0 60px rgba(59, 130, 246, 0.2);
        }

        .about-gradient-btn::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          padding: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: shimmer 3s ease-in-out infinite;
          opacity: 0.6;
        }

        .about-gradient-btn:hover {
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.6),
            0 0 60px rgba(236, 72, 153, 0.5),
            0 0 90px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </section>
  );
};

export default About;
