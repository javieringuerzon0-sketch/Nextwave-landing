
import React from 'react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="animate-on-scroll lg:col-span-1 rounded-3xl border border-white/10 bg-cover bg-center relative overflow-hidden h-[500px]"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80')` }}>
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="relative flex flex-col h-full p-8 justify-end">
              <p className="text-sm text-white/70 mb-1">Nuestra Ventaja</p>
              <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Diseño con Propósito</h3>
              <div className="flex items-center gap-2 text-white/60 mb-6">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                </div>
                <p className="text-sm">Cada píxel tiene una intención</p>
              </div>
              <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition group w-fit">
                Descubre nuestro enfoque
                <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="animate-on-scroll lg:col-span-1 glass-card rounded-3xl p-8 flex flex-col">
            <p className="text-sm text-white/50 mb-2">Resultados Probados:</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-8">
              Entrega <span className="text-white/100">3x más rápida</span>,<br />
              Compromiso <span className="text-white/100">2x mayor</span>.
            </h3>

            <p className="text-sm text-white/50 mb-4">Metodología:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Descubrimiento Estratégico e Investigación
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-white/70"></span>
                Proceso de Diseño Colaborativo
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
                Optimización Basada en Datos
              </li>
            </ul>

            <div className="mt-auto glass-card rounded-2xl p-5 border-white/5">
              <div className="flex gap-1 text-white/60 mb-3">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
                ))}
              </div>
              <p className="text-xs text-white/60 italic leading-relaxed">
                "Aura no solo crea diseños; ellos crean experiencias. Su pensamiento estratégico elevó toda nuestra marca."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full object-cover" alt="User" />
                <div>
                  <p className="text-[11px] font-semibold text-white">Michael Torres</p>
                  <p className="text-[10px] text-white/40">CEO, Innovation Labs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 grid grid-rows-2 gap-6">
            <div className="animate-on-scroll glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">100% Satisfacción</h4>
              <p className="text-sm text-white/50">Resultados garantizados. Tu éxito es nuestra misión número uno.</p>
            </div>

            <div className="animate-on-scroll glass-card rounded-3xl p-8">
              <div className="flex justify-between mb-8">
                <div>
                  <div className="text-2xl font-bold text-white">48h</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Inicio promedio</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">2025</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">Tecnología Web</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Estrategia de Marca</span>
                  <span className="text-white">Experto</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Diseño UI/UX</span>
                  <span className="text-white">Experto</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Marketing Digital</span>
                  <span className="text-white">Experto</span>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] text-white/40">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
                Equipo Certificado
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
