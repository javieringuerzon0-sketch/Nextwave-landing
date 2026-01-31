
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black pt-32 pb-16 md:pt-48 md:pb-28 overflow-hidden">
      {/* Dynamic Glow Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Sistemas IA de Nueva Generación
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] animate-on-scroll">
            Escala tu negocio con <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/30 italic">Inteligencia Real</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto animate-on-scroll leading-relaxed">
            NextWave IA fusiona el desarrollo web de alta gama con modelos predictivos para crear activos digitales que no solo se ven bien, sino que piensan por ti.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
            <button className="group relative px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all overflow-hidden">
              <span className="relative z-10">Iniciar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              Ver Showreel 2025
            </button>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 animate-on-scroll relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-card rounded-[32px] overflow-hidden border border-white/10 aspect-video lg:aspect-[21/9]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
              className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000" 
              alt="Dashboard Preview" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="space-y-2">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Análisis en Tiempo Real</div>
                <div className="text-2xl font-bold text-white tracking-tight">Optimización mediante Redes Neuronales</div>
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
