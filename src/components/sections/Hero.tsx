import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#010a09] pt-20 pb-16 font-manrope">
      {/* Resplandor Vertical (Efecto Puerta de Luz) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-orange-500/30 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Imagen de Fondo con Máscara */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage:
            'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad12226b-9c56-48b6-81b8-bf1ef9f0cb87_3840w.webp)',
          maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Izquierdo: Texto y Botón */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="award-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md relative overflow-visible group cursor-pointer">
              <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold flex items-center gap-2 relative z-10">
                DISEÑO PREMIADO
                <svg className="award-star w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                Creamos <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#ffcd75]">
                  Experiencias
                </span>{' '}
                <br />
                que Trascienden
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-medium">
                Transformamos ideas en productos digitales excepcionales. Desde interfaces
                intuitivas hasta sistemas de diseño completos, creamos soluciones visuales que
                impulsan el crecimiento de tu marca.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#project-inquiry"
                className="apple-cta-primary group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-500"
              >
                <span>Iniciar Proyecto</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Lado Derecho: Tarjetas de Stats y Logos */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta de Estadísticas */}
            <div className="group bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 shadow-2xl transition-all duration-500 hover:border-white/20">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tighter">150+</div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-0.5">
                    Proyectos Entregados
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[10px] font-bold text-white/50 tracking-wider">
                  <span>SATISFACCIÓN DEL CLIENTE</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: '98%' }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 text-center">
                <div className="hover:scale-105 transition-transform">
                  <div className="text-xl font-bold text-white mb-1">5+</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                    AÑOS
                  </div>
                </div>
                <div className="border-x border-white/5 hover:scale-105 transition-transform">
                  <div className="text-xl font-bold text-white mb-1">24/7</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                    SOPORTE
                  </div>
                </div>
                <div className="hover:scale-105 transition-transform">
                  <div className="text-xl font-bold text-white mb-1">100%</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                    CALIDAD
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-8">
                <span className="text-[9px] font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> ACTIVO
                </span>
                <span className="text-[9px] font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase">
                  PREMIUM
                </span>
              </div>
            </div>

            {/* Tarjeta de Clientes */}
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[40px] p-8 overflow-hidden relative group">
              <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-8">
                Clientes Destacados
              </h3>
              <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
                <div className="flex shrink-0 gap-16 items-center text-white/40">
                  <span className="text-sm font-['Orbitron'] tracking-[0.2em]">ORBIT</span>
                  <span className="text-xl font-['Pacifico'] tracking-normal lowercase">Retro</span>
                  <span className="text-2xl font-['Bebas_Neue'] tracking-wider">SUMMIT</span>
                  <span className="text-sm font-['Montserrat'] font-black tracking-tighter">
                    TECH
                  </span>
                  <span className="text-2xl font-['Caveat'] tracking-normal">Aura</span>
                </div>
                <div className="flex shrink-0 gap-16 items-center text-white/40">
                  <span className="text-sm font-['Orbitron'] tracking-[0.2em]">ORBIT</span>
                  <span className="text-xl font-['Pacifico'] tracking-normal lowercase">Retro</span>
                  <span className="text-2xl font-['Bebas_Neue'] tracking-wider">SUMMIT</span>
                  <span className="text-sm font-['Montserrat'] font-black tracking-tighter">
                    TECH
                  </span>
                  <span className="text-2xl font-['Caveat'] tracking-normal">Aura</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010a09] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010a09] to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes gold-glow {
          0%, 100% {
            box-shadow:
              0 0 10px rgba(251, 191, 36, 0.2),
              0 0 20px rgba(251, 191, 36, 0.1),
              inset 0 0 10px rgba(251, 191, 36, 0.05);
          }
          50% {
            box-shadow:
              0 0 15px rgba(251, 191, 36, 0.3),
              0 0 30px rgba(251, 191, 36, 0.15),
              inset 0 0 15px rgba(251, 191, 36, 0.08);
          }
        }

        @keyframes star-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 1px rgba(251, 191, 36, 0.4));
          }
          50% {
            transform: scale(1.1) rotate(3deg);
            filter: drop-shadow(0 0 2px rgba(251, 191, 36, 0.6));
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0;
          }
        }

        @keyframes shine-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .award-badge {
          background: linear-gradient(135deg,
            rgba(251, 191, 36, 0.08) 0%,
            rgba(245, 158, 11, 0.08) 50%,
            rgba(251, 191, 36, 0.08) 100%
          );
          border: 1px solid rgba(251, 191, 36, 0.25);
          animation: gold-glow 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .award-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(251, 191, 36, 0.4);
        }

        .award-badge span {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .award-star {
          fill: url(#gold-gradient);
          animation: star-pulse 2s ease-in-out infinite;
        }

        .award-badge::before,
        .award-badge::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.4), transparent);
          border-radius: 50%;
          animation: float-particle 3s ease-in-out infinite;
        }

        .award-badge::before {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .award-badge::after {
          top: 60%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .hero-gradient-btn {
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

        .hero-gradient-btn::before {
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

        .hero-gradient-btn:hover {
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.6),
            0 0 60px rgba(236, 72, 153, 0.5),
            0 0 90px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;
