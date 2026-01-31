
import React from 'react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="border-gradient before:rounded-3xl animate-on-scroll bg-neutral-900/40 rounded-3xl p-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column: Core differentiator */}
            <div className="overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e9f61fa-7b2f-40c8-9ad3-43ccec4df19b_3840w.jpg)] bg-cover bg-center relative group">
              <div className="sm:h-[520px] h-[440px] p-6 sm:p-8 flex flex-col relative z-10">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm text-neutral-300 font-manrope">Nuestra Ventaja</p>
                    <p className="text-xs sm:text-sm mt-1 text-neutral-400 font-manrope">Pensamiento de Diseño Estratégico</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="sm:text-4xl text-2xl text-white tracking-tight mb-4 font-manrope font-semibold">
                    Diseño con <br />
                    <span className="text-blue-400 font-manrope font-semibold">Propósito</span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-200 mb-6">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-sm font-manrope">Cada píxel tiene una intención</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-300 font-manrope group-hover:text-white transition-colors cursor-pointer">
                    Descubre nuestro enfoque
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
            </div>

            {/* Middle Column: Results & methodology */}
            <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 overflow-hidden border-gradient before:rounded-2xl animate-on-scroll bg-white/5 rounded-2xl relative">
              <p className="text-sm text-neutral-400 font-manrope">Resultados Probados:</p>
              <h3 className="mt-2 text-2xl sm:text-3xl tracking-tight text-neutral-100 font-manrope font-semibold">
                Entrega <span className="text-blue-500">3x</span> más rápida, <br />
                Compromiso <span className="text-blue-400">2x</span> mayor.
              </h3>

              <p className="mt-8 text-sm text-neutral-400 font-manrope">Nuestra Metodología:</p>
              <div className="mt-4 space-y-3">
                {[
                  { color: 'bg-blue-500', text: 'Descubrimiento Estratégico e Investigación' },
                  { color: 'bg-blue-400', text: 'Proceso de Diseño Colaborativo' },
                  { color: 'bg-blue-600', text: 'Optimización Basada en Datos' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-200 font-manrope">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.color}`}></span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border p-5 border-white/10 bg-black/30 border-gradient before:rounded-xl">
                <div className="flex items-center gap-1 text-amber-300 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  ))}
                </div>
                <p className="text-sm text-neutral-300 mt-3 font-manrope">"NextWave IA no solo crea diseños, ellos crean experiencias. Su pensamiento estratégico elevó toda nuestra marca."</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" className="h-8 w-8 rounded-full object-cover" />
                  <div className="text-sm">
                    <p className="text-neutral-200 font-manrope">Michael Torres</p>
                    <p className="text-xs text-neutral-500 font-manrope">CEO, Innovation Labs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Trust indicators & metrics */}
            <div className="grid grid-rows-2 gap-6">
              {/* Trust Indicator */}
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll bg-white/5 border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center sm:block">
                  <div className="relative h-24 w-24 sm:mx-auto">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 ring-1 ring-blue-500/50"></div>
                    <div className="absolute inset-[8px] rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-blue-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                  </div>
                  <div className="ml-5 sm:ml-0 sm:mt-6 text-left sm:text-center">
                    <h4 className="text-lg font-bold text-white font-manrope">100% Satisfacción</h4>
                    <p className="mt-2 text-sm text-neutral-400 font-manrope">Resultados garantizados o lo corregimos. Tu éxito es nuestra misión.</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll bg-white/5 border-white/10 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white font-manrope">150+</div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-manrope mt-1">Proyectos</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-manrope">48h</div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-manrope mt-1">Inicio Promedio</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Estrategia de Marca', color: 'text-blue-500' },
                    { label: 'Diseño Visual', color: 'text-blue-400' },
                    { label: 'Marketing Digital', color: 'text-blue-600' }
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center justify-between text-xs sm:text-sm font-manrope">
                      <span className="text-neutral-300">{skill.label}</span>
                      <span className={`${skill.color} font-bold`}>Experto</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest font-manrope">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-400"><path d="M20 6 9 17l-5-5"></path></svg>
                  Equipo Certificado Nebula
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
