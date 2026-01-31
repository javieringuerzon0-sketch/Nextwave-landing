
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="animate-on-scroll relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>
            <div className="relative glass-card p-4 rounded-[48px] border-white/5 rotate-[-2deg]">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&q=80" 
                className="w-full aspect-[4/5] object-cover rounded-[40px] grayscale opacity-80" 
                alt="Nuestro Proceso" 
              />
              <div className="absolute bottom-12 right-12 glass-card p-6 rounded-3xl border-white/10 backdrop-blur-xl animate-bounce">
                <div className="text-3xl font-black text-white">99%</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Precisión IA</div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-white/30">Nuestra Visión</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
                No somos una agencia,<br />somos tu <span className="italic font-light">socio tecnológico.</span>
              </h2>
            </div>

            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              En NextWave IA, entendemos que el futuro no se trata de reemplazar humanos, sino de amplificar sus capacidades. Diseñamos sistemas que aprenden de tu mercado para posicionarte un paso adelante.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Desarrollo Centrado en Datos
                </div>
                <p className="text-xs text-white/40 leading-relaxed">Analizamos el comportamiento de tu usuario antes de escribir la primera línea de código.</p>
              </div>
              <div className="space-y-3">
                <div className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Soporte Estratégico Real
                </div>
                <p className="text-xs text-white/40 leading-relaxed">Acompañamiento continuo para asegurar que tu inversión escale con tu negocio.</p>
              </div>
            </div>

            <button className="px-10 py-5 border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-500">
              Ver Nuestros Casos de Éxito
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
